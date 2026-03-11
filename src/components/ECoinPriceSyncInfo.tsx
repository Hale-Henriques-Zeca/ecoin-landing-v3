"use client";

import Link from "next/link";

export default function ECoinPriceSyncInfo() {
  return (
    <main className="min-h-screen bg-white text-black flex flex-col">

      {/* ================= HERO ================= */}

      <section className="relative flex-1 flex items-center justify-center px-6 py-24 overflow-hidden">

        {/* background gradient */}
        <div
          className="absolute inset-0 bg-gradient-to-r
          from-[#D4AF37]/10 via-transparent to-[#D4AF37]/10"
        />

        {/* content */}
        <div className="relative z-10 max-w-3xl text-center">

          <span className="text-xs tracking-[0.3em] uppercase text-[#D4AF37] block mb-4">
            E-Coin Protocol
          </span>

          <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
            ⚙️ <span className="text-[#D4AF37]">E-Coin Global Price Sync Engine</span>
          </h1>

          <p className="text-gray-600 max-w-xl mx-auto mb-10 text-sm md:text-base">
            O <strong>ECGPSE</strong> é o motor corporativo responsável por manter
            o preço da E-Coin equilibrado e justo em todas as bolsas globais.
            O sistema monitora continuamente variações entre CEX e DEX,
            calcula médias ponderadas e executa ações automáticas de
            <strong> Buy-Back</strong> ou <strong>Sell-Back</strong> quando detecta
            desvios relevantes no mercado.
          </p>

        </div>
      </section>


      {/* CTA BUTTON */}

      <section className="py-24 px-6 text-center relative overflow-hidden bg-gray-50">

        <Link
          href="/ecoin-price-sync-engine"
          className="inline-flex items-center gap-2 px-10 py-4 rounded-full
          bg-black text-white font-semibold
          hover:bg-[#D4AF37] hover:text-black
          transition-all duration-300 shadow-lg"
        >
          Explorar o Price Sync Engine Info →
        </Link>

      </section>

    </main>
  );
}