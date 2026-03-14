"use client";

import Link from "next/link";


export default function ECoinBenefitsInfo() {
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
            EdenKingDom Protocol
          </span>

          <h1 className="text-4xl md:text-4xl font-semibold leading-tight mb-6">
            💎 <span className="text-[#D4AF37]">Vantagens de Utilizar a E-Coin</span>
          </h1>

          <p className="text-gray-600 max-w-xl mx-auto mb-6 text-sm md:text-base">
            A <strong>E-Coin</strong> foi concebida para oferecer múltiplas fontes
            de rendimento dentro do ecossistema digital. Utilizadores e investidores
            podem beneficiar através de diferentes mecanismos de valorização,
            participação económica e utilidade dentro da plataforma.
          </p>

          <p className="text-gray-600 max-w-xl mx-auto mb-6 text-sm md:text-base">
            O modelo económico da E-Coin permite que os participantes
            obtenham valor através da valorização do token, staking e
            negociação entre utilizadores dentro da própria comunidade.
          </p>

        </div>
      </section>



      {/* ================= CTA BUTTON ================= */}

      <section className="py-24 px-6 text-center relative overflow-hidden">

        <Link
          href="/ecoin-benefits"
          className="inline-flex items-center gap-2 px-10 py-4 rounded-full
          bg-black text-white font-semibold
          hover:bg-[#D4AF37] hover:text-black
          transition-all duration-300 shadow-lg"
        >
          Formas de ganhar com a E-Coin →
        </Link>

      </section>

    </main>
  );
}