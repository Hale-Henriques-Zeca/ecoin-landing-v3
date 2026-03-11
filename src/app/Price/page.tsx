"use client";

import { useEffect, useState } from "react";

export default function PricePage() {
  const [price, setPrice] = useState<number | null>(null);

  // 🟡 Atualizar preço da E-Coin a cada 8s
  useEffect(() => {
    const fetchPrice = async () => {
      try {
        const res = await fetch(
          "https://api.dexscreener.com/latest/dex/tokens/0xDf69235019cc416dd5Be75dfc0eDc922aB4b5964"
        );
        const data = await res.json();

        const pair = data?.pairs?.[0];
        if (pair?.priceUsd) setPrice(parseFloat(pair.priceUsd));
      } catch (err) {
        console.log("Erro ao buscar preço:", err);
      }
    };

    fetchPrice();
    const interval = setInterval(fetchPrice, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white py-20 px-6">
      
      {/* Título */}
      <h1 className="text-center text-4xl font-extrabold text-[#D4AF37]">
        Preço da E-Coin (Live)
      </h1>

      <p className="text-center text-gray-400 mt-2">
        Dados ao vivo da PancakeSwap — Atualização automática
      </p>

      {/* Preço Atual */}
      <div className="mt-10 flex justify-center">
        <div className="bg-[#111] border border-[#D4AF37]/40 rounded-2xl p-6 shadow-xl">
          <p className="text-gray-300 text-lg">Preço Atual:</p>
          <h2 className="text-5xl font-bold text-[#D4AF37] mt-2">
            {price ? `$${price.toFixed(6)}` : "Carregando..."}
          </h2>
        </div>
      </div>

      {/* Gráfico (iframe PancakeSwap) */}
      <div className="mt-12 flex justify-center">
        <iframe
          src="https://pancakeswap.finance/info/token/0xDf69235019cc416dd5Be75dfc0eDc922aB4b5964"
          className="w-full max-w-5xl h-[800px] rounded-xl border border-[#D4AF37]/30"
        />
      </div>

      {/* Botões */}
      <div className="mt-12 flex justify-center gap-6">
        <a
          href="https://pancakeswap.finance/swap?chain=bsc&outputCurrency=0xDf69235019cc416dd5Be75dfc0eDc922aB4b5964"
          target="_blank"
          className="px-8 py-4 bg-[#D4AF37] text-black rounded-xl font-bold hover:bg-[#bfa536] transition"
        >
          Comprar E-Coin
        </a>

        <a
          href="https://pancakeswap.finance/swap?chain=bsc&inputCurrency=0xDf69235019cc416dd5Be75dfc0eDc922aB4b5964&outputCurrency=0x55d398326f99059fF775485246999027B3197955"
          target="_blank"
          className="px-8 py-4 bg-black text-[#D4AF37] border border-[#D4AF37] rounded-xl font-bold hover:bg-[#D4AF37] hover:text-black transition"
        >
          Vender E-Coin
        </a>
      </div>

    </div>
  );
}
