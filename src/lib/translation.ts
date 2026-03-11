// src/lib/translation.ts
"use client";

// 🧠 Extensão do tipo global `window` para evitar erros de compilação
declare global {
  interface Window {
    translationCache?: Record<string, string>;
  }
}

export async function translateText(text: string, lang: string) {
  // Inicializa cache global no navegador
  if (!window.translationCache) window.translationCache = {};

  const key = `${lang}:${text}`;
  if (window.translationCache[key]) return window.translationCache[key];

  try {
    const res = await fetch("/api/translate", {
      method: "POST",
      body: JSON.stringify({ text, target: lang }),
    });

    const data = await res.json();
    const translated = data?.translated || text;

    window.translationCache[key] = translated;
    return translated;
  } catch (err) {
    console.error("Erro ao traduzir:", err);
    return text; // fallback
  }
}
