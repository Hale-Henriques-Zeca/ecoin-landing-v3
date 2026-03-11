import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { text, targetLang } = await req.json();

    // Simulação de tradução (podes integrar API real mais tarde)
    const translated = `[${targetLang.toUpperCase()}] ${text}`;

    return NextResponse.json({ ok: true, translated }, { status: 200 });

  } catch (err) {
    console.error("Translation API error:", err);
    return NextResponse.json(
      { ok: false, translated: "" },
      { status: 500 }
    );
  }
}
