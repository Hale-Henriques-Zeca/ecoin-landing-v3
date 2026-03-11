import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { question } = await req.json();

  // ⚡ Aqui você pode integrar OpenAI depois
  // Por enquanto simulação

  return NextResponse.json({
    answer: `AI Response for: "${question}" — E-Coin is AI-first and MEV protected.`,
  });
}