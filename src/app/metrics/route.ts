import { NextResponse } from "next/server";

export async function GET() {
  try {
    /**
     * 🔒 MÉTRICAS MOCK (TEMPORÁRIAS)
     * Fonte real será E-Swap + On-Chain Analytics
     * Este endpoint já está pronto para upgrade futuro
     */

    const data = {
      dailyActiveUsers: "—",          // placeholder (on-chain complexo)
      tvl: "$0.00",                   // virá da E-Swap
      volume24h: "$0.00",             // virá da E-Swap
      gasFee: "$0.003",               // estimado BSC
      finalityTime: "1.8s",            // média BSC
      source: "mock",
      status: "paused"
    };

    return NextResponse.json(data, { status: 200 });

  } catch (error) {
    return NextResponse.json(
      {
        error: "METRICS_UNAVAILABLE",
        source: "mock",
        status: "error"
      },
      { status: 200 } // ⚠️ 200 de propósito (não quebra o frontend)
    );
  }
}
