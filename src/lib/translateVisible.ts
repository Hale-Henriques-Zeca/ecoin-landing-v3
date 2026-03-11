// src/lib/translateVisible.ts
"use client";

const CACHE_KEY = "EKD_TRANSLATIONS_V3";

function loadCache() {
  try {
    return JSON.parse(localStorage.getItem(CACHE_KEY) || "{}");
  } catch (e) {
    return {};
  }
}

function saveCache(cache: any) {
  localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
}

export default async function translateVisibleV3(lang: string) {
  console.log("🟦 EKD V3: tradução iniciada…");

  const cache: Record<string, Record<string, string>> = loadCache();
  cache[lang] = cache[lang] || {};

  // 1️⃣ Captura todos os textos visíveis
  const nodes = Array.from(
    document.querySelectorAll("h1, h2, h3, p, button, a, span, div")
  ).filter((el) => {
    const r = (el as HTMLElement).getBoundingClientRect();
    return r.width > 0 && r.height > 0;
  });

  // 2️⃣ Captura textos marcados com data-translate
  const translateTargets = Array.from(
    document.querySelectorAll("[data-translate]")
  );

  const originalTexts = translateTargets.map(
    (el) => (el as HTMLElement).innerText.trim()
  );

  // 3️⃣ Filtra textos novos (não traduzidos)
  const newTexts = originalTexts.filter((t) => !(t in cache[lang]));

  console.log("🔍 Textos totais:", originalTexts.length);
  console.log("🆕 Textos novos:", newTexts.length);

  // 4️⃣ Se não há texto novo → apenas aplicar cache
  if (newTexts.length === 0) {
    console.log("💾 EKD V3: aplicando cache local…");
    nodes.forEach((el) => {
      const t = (el as HTMLElement).innerText.trim();
      if (cache[lang][t]) (el as HTMLElement).innerText = cache[lang][t];
    });
    return;
  }

  // 5️⃣ Chamada única para traduzir TODOS textos novos
  try {
    console.log("🌐 Enviando batch único → OpenAI…");

    const res = await fetch("/api/translate", {
      method: "POST",
      body: JSON.stringify({
        batch: true,
        target: lang,
        text: newTexts,
      }),
    });

    const data = await res.json();

    if (!data?.translated) throw new Error("Resposta inválida da API");

    // 6️⃣ Salva no cache local
    newTexts.forEach((t: string, i: number) => {
      cache[lang][t] = data.translated[i];
    });

    saveCache(cache);

    // 7️⃣ Aplica ao DOM com tipagem segura
    nodes.forEach((el) => {
      const t = (el as HTMLElement).innerText.trim();
      if (cache[lang][t])
        (el as HTMLElement).innerText = cache[lang][t];
    });

    console.log("✅ EKD V3: tradução aplicada com sucesso.");
  } catch (err) {
    console.error("❌ ERRO na tradução V3:", err);
  }
}
