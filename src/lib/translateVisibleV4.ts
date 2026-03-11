/* -----------------------------------------------------------
   EKD — Translation Engine V4.1
   ✔ Usa API interna Next.js (/api/translate)
   ✔ Sem CORS
   ✔ Só traduz TEXT NODES (não toca no HTML)
   ✔ Seguro para Next.js App Router
------------------------------------------------------------ */

async function translateAPI(text: string, lang: string) {
  try {
    const res = await fetch("/api/translate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text, target: lang }),
    });

    const data = await res.json();

    return data?.translated || text;
  } catch (err) {
    console.warn("EKD V4: falha API interna — mantendo texto original.", err);
    return text;
  }
}

export default async function translateVisibleV4(lang: string) {
  console.log("🟦 EKD V4: tradução iniciada…");

  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode(node) {
        const value = node.nodeValue?.trim();

        if (!value) return NodeFilter.FILTER_REJECT;
        if (value.length < 2) return NodeFilter.FILTER_REJECT;

        return NodeFilter.FILTER_ACCEPT;
      },
    }
  );

  const nodes: Text[] = [];
  let current = walker.nextNode();

  while (current) {
    nodes.push(current as Text);
    current = walker.nextNode();
  }

  console.log("📝 Textos totais:", nodes.length);

  for (const node of nodes) {
    const original = node.nodeValue || "";
    const translated = await translateAPI(original, lang);

    if (translated && translated !== original) {
      node.nodeValue = translated; // 👑 NÃO altera HTML, só texto
    }
  }

  console.log("✅ EKD V4: tradução concluída.");
}
