import { NextResponse } from "next/server";
import { createPublicClient, http } from "viem";
import { bscTestnet } from "viem/chains";
import { priceEngineAbi } from "@/lib/abis/priceEngineAbi";
import { CONTRACTS } from "@/lib/contracts";

const client = createPublicClient({
  chain: bscTestnet,
  transport: http("https://data-seed-prebsc-1-s1.binance.org:8545"),
});

export async function GET() {
  try {
    const price = await client.readContract({
  address: CONTRACTS.PRICE_ENGINE,
  abi: priceEngineAbi,
  functionName: "ecoinPriceUSDT",
  authorizationList: [], // 
});

    return NextResponse.json({
      symbol: "ECOIN",
      price_usd: Number(price) / 1e18,
      source: "E-Coin Global Price Engine",
      timestamp: Date.now(),
    });
  } catch (e) {
    return NextResponse.json(
      { error: "Price unavailable" },
      { status: 500 }
    );
  }
}
