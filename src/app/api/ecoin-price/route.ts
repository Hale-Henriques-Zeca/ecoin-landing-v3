import { NextResponse } from "next/server";

/**
 * 🔐 E-COIN PRICE API
 * Fonte atual: MOCK OFICIAL (temporário)
 * Preço fixo institucional: $0.30
 *
 * ⚠️ IMPORTANTE:
 * Este endpoint será ligado diretamente à E-SWAP
 * assim que o contrato de liquidez estiver em produção.
 */

export async function GET() {
  try {
    const price = 0.30; // 💰 PREÇO FIXO TEMPORÁRIO DA E-COIN

    return NextResponse.json({
      price,
      source: "E-SWAP (mock)",
      mode: "temporary-fixed",
      currency: "USD",
      status: "ok",
      note: "Preço temporário até ativação da E-SWAP on-chain",
      timestamp: Date.now(),
    });

  } catch (err: any) {
    // ⚠️ Fallback extremo (nunca deve acontecer)
    return NextResponse.json(
      {
        price: 0.30,
        source: "E-SWAP (fallback)",
        mode: "safe-lock",
        status: "paused",
        reason: err?.message || "UNEXPECTED_ERROR",
        timestamp: Date.now(),
      },
      { status: 200 }
    );
  }
}
