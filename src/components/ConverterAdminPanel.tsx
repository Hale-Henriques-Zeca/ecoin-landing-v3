"use client";


import { useState } from "react";
import { useAccount, useReadContract, useWriteContract } from "wagmi";
import { formatUnits, parseUnits, isAddress } from "viem";

import { CONTRACTS } from "@/lib/contracts";
import { priceEngineAbi } from "@/lib/abis/priceEngineAbi";
import { corporateSwapAbi } from "@/lib/abis/corporateSwapAbi";
import { erc20Abi } from "@/lib/abis/erc20Abi";
import { usePublicClient } from "wagmi";
import { bsc } from "wagmi/chains";


/* ================= TREASURY ABI ================= */
const treasuryAbi = [
  {
    name: "deposit",
    type: "function",
    stateMutability: "nonpayable",
    inputs: [
      { name: "token", type: "address" },
      { name: "amount", type: "uint256" }
    ],
    outputs: []
  },
  {
    name: "withdraw",
    type: "function",
    stateMutability: "nonpayable",
    inputs: [
      { name: "token", type: "address" },
      { name: "amount", type: "uint256" },
      { name: "to", type: "address" }
    ],
    outputs: []
  }
];

export default function AdminPanel() {
  const publicClient = usePublicClient();

  const { address, isConnected } = useAccount();
  const { writeContractAsync } = useWriteContract();
  

  const [newPrice, setNewPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [withdrawTo, setWithdrawTo] = useState("");
  type AdminToken = "ECOIN" | "EUSD" | "USDT";
  const [token, setToken] = useState<AdminToken>("ECOIN");
  
  const tokenAddress =
  token === "ECOIN"
    ? CONTRACTS.ECOIN
    : token === "EUSD"
    ? CONTRACTS.EUSD
    : CONTRACTS.USDT;
  

  function getTokenDecimals(token: AdminToken) {
  return token === "USDT" ? 18 : 18;
}



  /* ================= PRICE ENGINE ================= */

  const { data: price } = useReadContract({
    address: CONTRACTS.PRICE_ENGINE,
    abi: priceEngineAbi,
    functionName: "ecoinPriceUSDT",
  });

  const { data: enginePaused } = useReadContract({
    address: CONTRACTS.PRICE_ENGINE,
    abi: priceEngineAbi,
    functionName: "paused",
  });

  /* ================= SWAP ================= */

  const { data: swapPaused } = useReadContract({
    address: CONTRACTS.SWAP,
    abi: corporateSwapAbi,
    functionName: "paused",
  });

  /* ================= TREASURY BALANCES ================= */

  const { data: ecoBalance } = useReadContract({
    address: CONTRACTS.ECOIN,
    abi: erc20Abi,
    functionName: "balanceOf",
    args: [CONTRACTS.TREASURY],
    query: { refetchInterval: 4000 }

  });

  const { data: eusdBalance } = useReadContract({
    address: CONTRACTS.EUSD,
    abi: erc20Abi,
    functionName: "balanceOf",
    args: [CONTRACTS.TREASURY],
    query: { refetchInterval: 4000 }
  });

  const { data: usdtBalance } = useReadContract({
  address: CONTRACTS.USDT,
  abi: erc20Abi,
  functionName: "balanceOf",
  args: [CONTRACTS.TREASURY],
  query: { refetchInterval: 4000 }
});


  const treasuryEcoinFormatted = ecoBalance
    ? formatUnits(ecoBalance, 18)
    : "—";

  const treasuryEusdFormatted = eusdBalance
    ? Number(formatUnits(eusdBalance, 18)).toFixed(4)
    : "—";

const treasuryUsdtFormatted = usdtBalance
  ? formatUnits(usdtBalance, 18)
  : "—";

  if (!isConnected) {
    return (
      <div className="border border-[#D4AF37]/30 rounded-xl p-4 text-sm text-gray-400">
        Conecta a wallet admin para gerir o protocolo.
      </div>
    );
  }

const { data: treasuryOwner } = useReadContract({
  address: CONTRACTS.TREASURY,
  abi: [{
    name: "owner",
    type: "function",
    stateMutability: "view",
    inputs: [],
    outputs: [{ type: "address" }]
  }],
  functionName: "owner",
});


  /* ================= ACTIONS ================= */

  async function updatePrice() {
  if (!newPrice || !address) return;

  await writeContractAsync({
    address: CONTRACTS.PRICE_ENGINE,
    abi: priceEngineAbi,
    functionName: "updatePrice",
    args: [parseUnits(newPrice, 18)],
    account: address,
    chain: bsc,
  });
}

  async function toggleEngine() {
    await writeContractAsync({
  address: CONTRACTS.PRICE_ENGINE,
  abi: priceEngineAbi,
  functionName: enginePaused ? "unpause" : "pause",
  account: address,
  chain: bsc,
});
  }

  async function toggleSwap() {
  if (!amount) return; // ou outro valor padrão
  const parsed = parseUnits(amount, getTokenDecimals(token)); // define aqui

  const hash = await writeContractAsync({
    address: tokenAddress,
    abi: erc20Abi,
    functionName: "approve",
    args: [CONTRACTS.TREASURY, parsed],
    account: address,
    chain: bsc,
  });
}

  /* ===== Treasury deposit requires approve first ===== */
  async function depositTreasury() {
  try {
    if (!amount || !tokenAddress || !CONTRACTS?.TREASURY) {
      alert("Missing data");
      return;
    }

    const parsed = parseUnits(amount, getTokenDecimals(token));

    console.log("APPROVING...");
    const hash = await writeContractAsync({
      address: tokenAddress,
      abi: erc20Abi,
      functionName: "approve",
      args: [CONTRACTS.TREASURY, parsed],
      account: address,
  chain: bsc,
    });

    console.log("WAITING CONFIRMATION...");
    await publicClient.waitForTransactionReceipt({ hash });

    console.log("DEPOSIT...");
    await writeContractAsync({
  address: CONTRACTS.TREASURY,
  abi: treasuryAbi,
  functionName: "deposit",
  args: [tokenAddress, parsed],
  account: address,
  chain: bsc,
});

    console.log("DONE");
  } catch (err) {
    console.error(err);
    alert("Transaction failed — check console");
  }
}


  async function withdrawTreasury() {
  console.log("Iniciando Withdraw...");

  if (!amount || !withdrawTo || !tokenAddress) {
    alert("Preencha o valor, o destino e escolha o token.");
    return;
  }

  try {
    const parsed = parseUnits(amount, getTokenDecimals(token));


    console.log("Token:", tokenAddress);
    console.log("Para:", withdrawTo);
    console.log("Quantidade:", parsed.toString());

    const hash = await writeContractAsync({
  address: CONTRACTS.TREASURY,
  abi: treasuryAbi,
  functionName: "withdraw",
  args: [tokenAddress, parsed, withdrawTo],
  account: address,
  chain: bsc,
});

    alert("Transação enviada! Hash: " + hash);
  } catch (err: any) {
    console.error("Erro detalhado:", err);

    if (err.message?.includes("OwnableUnauthorizedAccount")) {
      alert("Erro: Tu não és o Owner desta Treasury!");
    } else {
      alert("Falha na transação. Verifica a consola para o erro do RPC.");
    }
  }
}

function setMax() {

  if (token === "USDT" && usdtBalance) {

    const safe = usdtBalance - 1n; // evita erro de precisão
    setAmount(formatUnits(safe, 18));

  }

  if (token === "ECOIN" && ecoBalance) {

    const safe = ecoBalance - 1n;
    setAmount(formatUnits(safe, 18));

  }

}
  

const isAdmin =
  treasuryOwner &&
  address &&
  treasuryOwner.toLowerCase() === address.toLowerCase();

  /* ================= UI ================= */

  return (
    <div className="mt-12 space-y-6 border border-[#D4AF37]/30 rounded-2xl p-6 bg-black/40 backdrop-blur-md">
      <h3 className="text-[#D4AF37] font-bold text-lg">
        🛠 E‑Coin Protocol — Admin Panel
      </h3>

      {/* PRICE */}
      <div className="space-y-2">
        <div className="text-sm text-gray-300">
          Current Price: <b className="text-[#D4AF37]">{price ? formatUnits(price as bigint, 18) : "—"} USD</b>
        </div>

        <input
          value={newPrice}
          onChange={(e) => setNewPrice(e.target.value)}
          placeholder="New price (USD)"
          className="w-full bg-transparent border border-[#D4AF37]/30 rounded-lg px-3 py-2 text-white"
        />

        <div className="flex gap-3">
          <button onClick={updatePrice} className="px-4 py-2 rounded-lg bg-[#D4AF37] text-black font-semibold">Update Price</button>
          <button onClick={toggleEngine} className="px-4 py-2 rounded-lg border border-[#D4AF37]/40 text-[#D4AF37]">
            {enginePaused ? "Unpause Engine" : "Pause Engine"}
          </button>
        </div>
      </div>

      {/* SWAP */}
      <div className="space-y-2">
        <div className="text-sm text-gray-300">
          Swap Status: <b className={swapPaused ? "text-red-400" : "text-green-400"}>{swapPaused ? "PAUSED" : "ACTIVE"}</b>
        </div>
        <button onClick={toggleSwap} className="px-4 py-2 rounded-lg border border-[#D4AF37]/40 text-[#D4AF37]">
          {swapPaused ? "Unpause Swap" : "Pause Swap"}
        </button>
      </div>

      {/* TREASURY BALANCES */}
      <div className="text-sm text-gray-300 space-y-1">
        <div className="flex justify-between"><span>🏦 Treasury E‑Coin</span><span className="text-[#D4AF37] font-mono">{treasuryEcoinFormatted}</span></div>
        <div className="flex justify-between"><span>🏦 Treasury E‑USD</span><span className="text-[#D4AF37] font-mono">{treasuryEusdFormatted}</span></div>
        <div className="flex justify-between">
  <span>🏦 Treasury USDT</span>
  <span className="text-[#D4AF37] font-mono">
    {treasuryUsdtFormatted}
  </span>
</div>
      </div>

      

      {/* TREASURY CONTROLS */}
      <div className="space-y-3 border-t border-[#D4AF37]/20 pt-4">
        <h4 className="text-[#D4AF37] font-semibold">Treasury Controls</h4>

        <select
  value={token}
  onChange={(e) => setToken(e.target.value as AdminToken)}
  className="bg-black border border-[#D4AF37]/30 px-2 py-1 rounded"
>
  <option value="ECOIN">ECOIN</option>
  <option value="EUSD">E-USD</option>
  <option value="USDT">USDT</option>
</select>


        <input
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
          className="w-full bg-transparent border border-[#D4AF37]/30 rounded-lg px-3 py-2 text-white"
        />

        <button
  onClick={setMax}
  className="px-3 py-2 rounded-lg bg-[#D4AF37] text-black font-semibold"
>
MAX
</button>

        <div className="flex gap-3">
          <button onClick={depositTreasury} className="px-4 py-2 rounded-lg bg-green-500 text-black font-semibold">Deposit</button>
        </div>

        <input
          value={withdrawTo}
          onChange={(e) => setWithdrawTo(e.target.value)}
          placeholder="Withdraw to address"
          className="w-full bg-transparent border border-[#D4AF37]/30 rounded-lg px-3 py-2 text-white"
        />

        <button
  onClick={withdrawTreasury}
  disabled={!isAdmin}
  className="px-4 py-2 rounded-lg bg-red-500 text-black font-semibold disabled:opacity-40"
>
  {isAdmin ? "Withdraw" : "Not Treasury Owner"}
</button>

      </div>
    </div>
  );
}
