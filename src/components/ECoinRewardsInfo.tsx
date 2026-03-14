"use client";

import Link from "next/link";

export default function ECoinRewardsInfo() {
  return (
    <main className="min-h-screen bg-white text-black flex flex-col">

      {/* ================= HERO ================= */}

      <section className="relative flex-1 flex items-center justify-center px-6 py-24 overflow-hidden">

        <div
          className="absolute inset-0 bg-gradient-to-r
          from-[#D4AF37]/10 via-transparent to-[#D4AF37]/10"
        />

        <div className="relative z-10 max-w-3xl text-center">

          <span className="text-xs tracking-[0.3em] uppercase text-[#D4AF37] block mb-4">
            EdenKingDom Protocol
          </span>

          <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
            ⚙️ <span className="text-[#D4AF37]">How E-Coin Rewards Are Generated</span>
          </h1>

          <p className="text-gray-600 max-w-xl mx-auto mb-6 text-sm md:text-base">
            O sistema de staking da <strong>E-Coin</strong> é alimentado por atividade
            económica real dentro da plataforma. Sempre que utilizadores
            convertem ativos ou reclamam recompensas, uma parte das taxas
            alimenta diretamente o pool de staking.
          </p>

          <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base">
            Isso cria um modelo sustentável onde os participantes recebem
            recompensas proporcionais ao crescimento do ecossistema.
          </p>

        </div>
      </section>



      {/* ================= CTA ================= */}

      <section className="py-24 px-6 text-center relative overflow-hidden">

        <Link
          href="/ecoin-staking"
          className="inline-flex items-center gap-2 px-10 py-4 rounded-full
          bg-black text-white font-semibold
          hover:bg-[#D4AF37] hover:text-black
          transition-all duration-300 shadow-lg"
        >
          How the E-Coin Rewards Are Generated →
        </Link>

      </section>

    </main>
  );
}