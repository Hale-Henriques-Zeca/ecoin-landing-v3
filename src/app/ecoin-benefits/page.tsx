"use client";

import Link from "next/link";
import CryptoHistoricalExample from "@/components/CryptoHistoricalExample";

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



      {/* ================= BENEFITS ================= */}

      <section className="py-20 px-6 bg-gray-50 text-center">

        <div className="max-w-3xl mx-auto">

          <h2 className="text-2xl font-semibold mb-8">
            Formas de ganhar com a E-Coin
          </h2>

          <div className="space-y-8 text-gray-600 text-sm md:text-base">

            <div>
              <p className="font-semibold mb-2">
                1️⃣ Valorização da E-Coin
              </p>

              <p>
                Investidores podem adquirir E-Coin em fases iniciais
                a preços mais baixos e beneficiar da valorização futura
                do token dentro do ecossistema.
              </p>

              <p className="mt-2">
                Compra inicial: <strong>$1</strong>
              </p>

              <p>
                Valorização futura potencial: <strong>$10</strong>
              </p>

              <p className="text-[#D4AF37] mt-2 font-semibold">
                💰 Potencial de crescimento até 10x
              </p>
            </div>


            <div>
              <p className="font-semibold mb-2">
                2️⃣ Rendimentos via Staking
              </p>

              <p>
                Utilizadores podem bloquear E-Coin em staking para apoiar
                o funcionamento do ecossistema e receber recompensas periódicas.
              </p>

              <p className="mt-2">
                Exemplo de investimento: <strong>1000 E-Coin</strong>
              </p>

              <p>
                Recompensa estimada: <strong>+100 moedas por período</strong>
              </p>

              <p className="text-[#D4AF37] mt-2 font-semibold">
                💰 Rendimento passivo contínuo
              </p>
            </div>


            <div>
              <p className="font-semibold mb-2">
                3️⃣ Arbitragem e Liquidez
              </p>

              <p>
                Dentro da comunidade pode existir procura direta por E-Coin,
                criando oportunidades de negociação e arbitragem entre utilizadores.
              </p>

              <p className="mt-2">
                Compra: <strong>$1</strong>
              </p>

              <p>
                Venda direta: <strong>$1.10 – $1.20</strong>
              </p>

              <p className="text-[#D4AF37] mt-2 font-semibold">
                💰 Lucro rápido via spread de negociação
              </p>
            </div>

          </div>

        </div>

      </section>

   {/* ================= BENEFITS Examples ================= */}

      <section className="min-h-screen bg-black text-gray-300 pt-32 px-6">

      
        <div className="max-w-5xl mx-auto flex flex-col items-center space-y-20">

         <CryptoHistoricalExample />

        </div>

      </section>
      
      {/* ================= STAKING INFO ================= */}

      <section className="py-20 px-6 text-center">

        <div className="max-w-3xl mx-auto space-y-6 text-gray-600 text-sm md:text-base">

          <h2 className="text-2xl font-semibold text-black">
            Ganhe diariamente com o staking de E-Coin
          </h2>

          <p>
            O ecossistema E-Coin foi projetado para recompensar as pessoas
            que participam de sua economia. Ao fazer staking de E-Coin,
            você passa a fazer parte de um fluxo contínuo de recompensas
            impulsionado pela atividade real da plataforma.
          </p>

          <p>
            Diferentemente de projetos que prometem retornos fixos,
            as recompensas da E-Coin provêm da atividade económica
            real que ocorre dentro do sistema em tempo real.
          </p>

          <p className="font-semibold text-black">
            Minimum de saque ou claim: 0.01 – 0.003
          </p>

        </div>

      </section>


      {/* ================= HOW TO START ================= */}

      <section className="py-20 px-6 bg-gray-50 text-center">

        <div className="max-w-3xl mx-auto">

          <h2 className="text-2xl font-semibold mb-6">
            O que você precisa para começar
          </h2>

          <div className="space-y-4 text-gray-600 text-sm md:text-base">

            <p>
              1️⃣ Instalar uma carteira descentralizada como <strong>MetaMask</strong>.
            </p>

            <p>
              2️⃣ Adicionar a rede <strong>BNB Smart Chain (BEP-20)</strong>.
            </p>

            <p>
              3️⃣ Manter uma pequena quantidade de <strong>BNB</strong> para taxas
              de gás (menos de $0.50 normalmente é suficiente).
            </p>

            <p>
              4️⃣ Depositar algum <strong>USDT (BEP-20)</strong> — mesmo
              $5 ou $10 são suficientes para começar.
            </p>

            <p className="mt-6">
              Depois disso:
            </p>

            <p>• Acesse a plataforma</p>
            <p>• Converta <strong>USDT → E-Coin</strong></p>
            <p>• Faça staking de seus E-Coin</p>
            <p>• Comece a ganhar com a atividade da plataforma</p>

          </div>

        </div>

      </section>


      {/* ================= CTA BUTTON ================= */}

      <section className="py-24 px-6 text-center relative overflow-hidden">

        <Link
          href="/ecoin-converter"
          className="inline-flex items-center gap-2 px-10 py-4 rounded-full
          bg-black text-white font-semibold
          hover:bg-[#D4AF37] hover:text-black
          transition-all duration-300 shadow-lg"
        >
          Obter E-Coin convertendo USDT / E-Coin →
        </Link>

      </section>

    </main>
  );
}