import { ethers } from "ethers";
import fs from "fs";
import path from "path";
import "dotenv/config";

/* ================= CONFIG ================= */

const INTERVAL_MS = 2 * 60 * 60 * 1000; // 2 horas

const {
  RPC_URL,
  PRIVATE_KEY,
  ECOIN,
  TREASURY,
  CONVERT_FEE_COLLECTOR,
} = process.env;

if (!RPC_URL || !PRIVATE_KEY || !ECOIN || !TREASURY || !CONVERT_FEE_COLLECTOR) {
  throw new Error(
    "Missing env vars (RPC_URL, PRIVATE_KEY, ECOIN, TREASURY, CONVERT_FEE_COLLECTOR)"
  );
}

/* ================= INIT ================= */

const provider = new ethers.JsonRpcProvider(RPC_URL);
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

// Minimal ERC20 ABI
const erc20Abi = [
  "function balanceOf(address) view returns (uint256)",
];

// Load ConvertFeeCollector ABI from artifacts
const artifactPath = path.join(
  process.cwd(),
  "artifacts/contracts/core/fees/ConvertFeeCollector.sol/ConvertFeeCollector.json"
);

const collectorArtifact = JSON.parse(fs.readFileSync(artifactPath, "utf8"));

const ecoin = new ethers.Contract(ECOIN, erc20Abi, provider);

const collector = new ethers.Contract(
  CONVERT_FEE_COLLECTOR,
  collectorArtifact.abi,
  wallet
);

/* ================= LOGIC ================= */

async function runBatch() {
  console.log("🔍 Checking Treasury balance...");

  const balance = await ecoin.balanceOf(TREASURY);

  if (balance === 0n) {
    console.log("ℹ️ No E-Coin fees to settle");
    return;
  }

  console.log(
    "💰 Treasury E-Coin balance:",
    ethers.formatEther(balance)
  );

  console.log("⏳ Settling fees...");

  const tx = await collector.settle(balance);
  console.log("📤 Tx sent:", tx.hash);

  const receipt = await tx.wait();

  console.log("✅ Batch settled successfully");
  console.log("🔗 Tx hash:", receipt.hash);
  console.log("🕒 Time:", new Date().toISOString());
}

/* ================= MAIN ================= */

async function main() {
  console.log("🤖 Convert Fee Bot started");
  console.log("👤 Wallet:", wallet.address);

  // Run immediately on start
  await runBatch();

  // Schedule every 2 hours
  setInterval(async () => {
    try {
      await runBatch();
    } catch (err) {
      console.error("❌ Batch error:", err);
    }
  }, INTERVAL_MS);
}

main().catch((err) => {
  console.error("🔥 Fatal bot error:", err);
  process.exit(1);
});
