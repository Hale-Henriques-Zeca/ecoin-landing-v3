"use client";

import Link from "next/link";

export default function ECoinCashOutInfo() {
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

          <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
            💳 <span className="text-[#D4AF37]">E-Coin Cash Out Gateway</span>
          </h1>

          <p className="text-gray-600 max-w-xl mx-auto mb-6 text-sm md:text-base">
            A <strong>EdenKingDom</strong> actualmente não processa pagamentos fiat diretamente
            no blockchain. O protocolo E-Coin opera exclusivamente em ambiente
            cripto descentralizado. Mas no futuro Próximo pelo nosso sistema integrado ao fiat gateway (E-Pay).
          </p>

          <p className="text-gray-600 max-w-xl mx-auto mb-6 text-sm md:text-base">
            Para converter ganhos em moeda fiduciária (USD, EUR ou outras),
            os usuários podem utilizar <strong>exchanges reguladas</strong>
            ou <strong>plataformas P2P ou (troca directa entre usuarios)</strong> que oferecem conversão de
            criptomoeda para dinheiro real <strong> ou troca directa e imediata (Fiat & Crypto) entre usuários</strong>.
          </p>

          <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-base">
            Essas plataformas funcionam como pontes entre o sistema cripto
            descentralizado e o sistema financeiro tradicional,
            permitindo vender USDT e sacar fundos para
            <strong> cartões Visa, Mastercard ou contas bancárias.</strong>
          </p>

        </div>
      </section>


      {/* ================= HOW IT WORKS ================= */}

      <section className="py-20 px-6 bg-gray-50 text-center">

        <div className="max-w-3xl mx-auto">

          <h2 className="text-2xl font-semibold mb-6">
            Como funciona o processo
          </h2>

          <div className="space-y-4 text-gray-600 text-sm md:text-base">

            <p>
              1️⃣ Converter <strong>E-Coin → USDT</strong> no E-Coin Hub ou E-Coin Converter.
            </p>

            <p>
              2️⃣ Transferir USDT para uma exchange suportada.
            </p>

            <p>
              3️⃣ Converter USDT para USD, EUR ou outra moeda fiat.
            </p>

            <p>
              4️⃣ Sacar para cartão Visa, Mastercard ou conta bancária.
            </p>

          </div>

        </div>

      </section>


      {/* ================= CTA BUTTON ================= */}

      <section className="py-24 px-6 text-center relative overflow-hidden">

        <Link
          href="/ecoin-offramp"
          className="inline-flex items-center gap-2 px-10 py-4 rounded-full
          bg-black text-white font-semibold
          hover:bg-[#D4AF37] hover:text-black
          transition-all duration-300 shadow-lg"
        >
          Explorar opções de E-Coin Cash Out →
        </Link>

      </section>

    </main>
  );
}