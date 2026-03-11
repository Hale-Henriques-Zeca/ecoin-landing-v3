"use client";

import Link from "next/link";


export default function ECoinHubPage() {
  return (
    <div className="min-h-screen bg-white text-black">

      {/* ================= HERO ================= */}
      <section className="py-24 px-6 text-center relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-r 
          from-[#D4AF37]/10 via-transparent to-[#D4AF37]/10 pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto">


          <span className="text-xs tracking-widest uppercase text-[#D4AF37] mb-3 block">
            E-COIN HUB • ON-CHAIN LIQUIDITY
          </span>

          <h1 className="text-4xl md:text-5xl font-semibold mb-6">
            Obtenha <span className="text-[#D4AF37]">BNB</span> para Gas  
            e Converta Stablecoins com Segurança
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            O centro oficial de conversões do ecossistema E-Coin.
            Troque USDT, BUSD, USDC, FDUSD e DAI por BNB com oráculos Chainlink
            e taxa fixa de apenas 0.1%.
          </p>

        </div>
      </section>

 {/* ================= E-Coin Hub Access ================= */}
      <section className="py-24 px-6 text-center relative overflow-hidden py-16 bg-gray-50">
        <Link
            href="/ecoin-hub"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full
              bg-black text-white font-semibold
              hover:bg-[#D4AF37] hover:text-black
              transition-all shadow-lg"
          >
            Aceder ao E-Coin Hub →
          </Link>
      </section>
      

    </div>
  );
}