"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ECGPSEDiagram from "@/components/ECGPSEDiagram"
import ECGPSEArbitrageFlow from "@/components/ECGPSEArbitrageFlow"
import ECGPSEMarketMap from "@/components/ECGPSEMarketMap"

export default function ECoinPriceSyncEnginePage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">

      {/* HERO */}

      <section className="max-w-5xl mx-auto text-center mb-20">

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-bold text-[#D4AF37] mb-6"
        >
          ⚙️ E-Coin Global Price Sync Engine
        </motion.h1>

        <p className="text-gray-400 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
          O <strong>ECGPSE</strong> é o motor corporativo que mantém o preço da
          <strong className="text-[#D4AF37]"> E-Coin</strong> sincronizado entre
          exchanges globais. Ele monitora mercados em tempo real e executa
          ajustes automáticos de liquidez para manter equilíbrio,
          transparência e estabilidade no ecossistema.
        </p>

      </section>

      {/* ⚙️ VII DESAFIO */}

      <section
        id="buyback-challenge"
        className="relative overflow-hidden rounded-2xl border border-gray-800 bg-black/40 p-6 md:p-10 mt-12 max-w-6xl mx-auto"
      >

        <div className="pointer-events-none absolute -top-20 left-1/3 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-[#1C2D5A]/40 blur-3xl" />

        <h4 className="text-lg font-semibold text-[#D4AF37] mb-4">
          VII. ⚙️ O Desafio do Sistema Buy-Back — Variação de Preço entre Exchanges
        </h4>

        <div className="space-y-6 text-gray-300 leading-relaxed">

          <p>
            Naturalmente, o preço de um ativo listado em múltiplas bolsas pode
            <strong> divergir por segundos ou minutos</strong> devido a variações
            locais de volume, ordens e fusos horários.
          </p>

          <ul className="list-disc list-inside space-y-1">
            <li>Diferenças de volume e liquidez</li>
            <li>Ordens locais de compra e venda</li>
            <li>Pares distintos (E-Coin/USDT, E-Coin/BNB, etc.)</li>
          </ul>

          <div className="rounded-2xl border border-[#D4AF37]/30 bg-black/60 p-5">
            <h5 className="text-[#D4AF37] font-semibold mb-2">
              📊 Exemplo de Desvio
            </h5>

            <p>
              <strong>E-Coin = $30</strong> na Binance /
              <strong> $37</strong> na Upbit → spread de <strong>$7</strong>.
              Pequeno para um usuário, mas grande para arbitragem em escala.
            </p>
          </div>

          <p>
            Para eliminar esse fenômeno e garantir que o preço permaneça justo
            em todas as bolsas globais, a EdenKingDom implementa um modelo
            corporativo de sincronização automática chamado:
          </p>

          <div className="rounded-2xl border border-[#1C2D5A]/40 bg-[#0a0a0a]/70 p-5 text-center">

            <h5 className="text-[#D4AF37] text-lg font-semibold mb-1">
              🌐 E-Coin Global Price Sync Engine (ECGPSE)
            </h5>

            <p className="text-sm text-gray-300">
              Sistema corporativo responsável por monitorar e equalizar o preço
              da E-Coin entre CEX e DEX em tempo real.
            </p>

          </div>

          <p className="italic text-gray-200">
            “Em cada segundo de mercado, o ECGPSE trabalha silenciosamente —
            sincronizando bolsas e protegendo o preço da E-Coin.”
          </p>

        </div>
      </section>

      {/* 🌐 VIII SOLUÇÃO */}

      <section
        id="ecgpse"
        className="relative overflow-hidden rounded-2xl border border-gray-800 bg-black/40 p-6 md:p-10 mt-12 max-w-6xl mx-auto"
      >

        <div className="pointer-events-none absolute -top-20 left-1/3 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-[#1C2D5A]/40 blur-3xl" />

        <h4 className="text-lg font-semibold text-[#D4AF37] mb-6">
          VIII. 🌐 Solução — E-Coin Global Price Sync Engine (ECGPSE)
        </h4>

        <div className="space-y-6 text-gray-300 leading-relaxed">

          <p>
            O <strong className="text-[#D4AF37]">ECGPSE</strong> é o motor
            corporativo automatizado responsável por monitorar, analisar e
            equalizar os preços da E-Coin em todas as exchanges globais.
          </p>

          <h5 className="text-[#4ade80] font-semibold">
            🔹 Etapas de Funcionamento
          </h5>

          {/* STEP 1 */}

          <div className="rounded-2xl border border-[#D4AF37]/20 bg-black/60 p-5">
            <h6 className="font-semibold text-[#D4AF37] mb-1">
              1️⃣ Coleta de Dados
            </h6>

            <p>
              O sistema conecta-se às APIs públicas das exchanges
              (Binance, Gate, MEXC, PancakeSwap, Upbit) para ler preços
              médios em milissegundos.
            </p>
          </div>

          {/* STEP 2 */}

          <div className="rounded-2xl border border-[#D4AF37]/20 bg-black/60 p-5">

            <h6 className="font-semibold text-[#D4AF37] mb-2">
              2️⃣ Cálculo do Preço Global Médio (ECP)
            </h6>

            <div className="overflow-x-auto">

              <table className="w-full text-sm border-collapse">

                <thead>

                  <tr className="bg-[#D4AF37]/10">

                    <th className="border border-gray-700 px-3 py-2 text-left">
                      Exchange
                    </th>

                    <th className="border border-gray-700 px-3 py-2 text-left">
                      Peso
                    </th>

                  </tr>

                </thead>

                <tbody>

                  <tr>
                    <td className="border border-gray-700 px-3 py-2">
                      Binance
                    </td>
                    <td className="border border-gray-700 px-3 py-2">
                      60%
                    </td>
                  </tr>

                  <tr>
                    <td className="border border-gray-700 px-3 py-2">
                      PancakeSwap
                    </td>
                    <td className="border border-gray-700 px-3 py-2">
                      25%
                    </td>
                  </tr>

                  <tr>
                    <td className="border border-gray-700 px-3 py-2">
                      Upbit
                    </td>
                    <td className="border border-gray-700 px-3 py-2">
                      15%
                    </td>
                  </tr>

                </tbody>

              </table>

            </div>

          </div>

          {/* STEP 3 */}

          <div className="rounded-2xl border border-[#D4AF37]/20 bg-black/60 p-5">

            <h6 className="font-semibold text-[#D4AF37] mb-1">
              3️⃣ Análise de Desvios
            </h6>

            <p>
              Caso uma exchange apresente variação acima de 10, 15, 20–30% em relação
              ao preço global, o sistema aciona correções automáticas.
            </p>

          </div>

          {/* STEP 4 */}

          <div className="rounded-2xl border border-[#D4AF37]/20 bg-black/60 p-5">

            <h6 className="font-semibold text-[#D4AF37] mb-1">
              4️⃣ Buy-Back / Sell-Back Automático
            </h6>

            <p>
              A <strong>E-Treasury</strong> executa recompras quando o preço
              cai e libera liquidez quando o preço sobe demais.
            </p>

          </div>

          {/* STEP 5 */}

          <div className="rounded-2xl border border-[#D4AF37]/20 bg-black/60 p-5">

            <h6 className="font-semibold text-[#D4AF37] mb-1">
              5️⃣ Integração com Oráculos DeFi
            </h6>

            <p>
              Integração com <strong>Chainlink</strong> e
              <strong> Pyth Network</strong> para distribuir o preço global
              médio às aplicações DeFi.
            </p>

          </div>

          <p className="italic text-gray-200">
            “O ECGPSE é o cérebro que mantém o coração da E-Coin batendo
            em ritmo global.”
          </p>

          {/* WHITEPAPER LINK */}

          <p className="mt-6 text-gray-400">

            Para mais informações sobre a Buy-Back Engine, clique no botão 👉

            <Link
              href="/whitepaper"
              className="text-[#D4AF37] font-semibold ml-1"
            >
              Whitepaper
            </Link>

            {" "}e vá para:

            <em className="ml-1">
              Seção Oficial — Mecanismo de Buy-Back e Conformidade AML
            </em>

          </p>

        </div>

       
        
<ECGPSEDiagram />

<ECGPSEArbitrageFlow />

<ECGPSEMarketMap />
      </section>

{/* 💎 IX. Buy-Back Engine como Ferramenta de Equilíbrio Global */}
<section
  id="buyback-engine"
  className="relative overflow-hidden rounded-2xl border border-gray-800 bg-black/40 p-6 md:p-10 mt-12"
>
  {/* EFEITOS DE FUNDO */}
  <div className="pointer-events-none absolute -top-20 left-1/3 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-24 right-0 h-80 w-80 rounded-full bg-[#1C2D5A]/40 blur-3xl" />

  {/* TÍTULO */}
  <h4 className="text-lg font-semibold text-[#D4AF37] mb-4">
    IX. 💎 Buy-Back Engine como Ferramenta de Equilíbrio Global
  </h4>

  {/* CONTEÚDO PRINCIPAL */}
  <div className="space-y-6 text-gray-300 leading-relaxed">
    <p>
      O <strong className="text-[#D4AF37]">fundo de recompra</strong> atua como{" "}
      <strong>árbitro econômico global</strong>, equilibrando os preços da{" "}
      <strong>E-Coin</strong> entre todas as bolsas (CEX e DEX) e garantindo
      paridade internacional independente da localização ou par de negociação.
    </p>

    {/* TABELA DE AÇÕES */}
    <div className="overflow-x-auto">
      <table className="min-w-[320px] w-full border-collapse text-sm">
        <thead>
          <tr className="bg-[#D4AF37]/10">
            <th className="border border-gray-700 px-3 py-2 text-left">Situação</th>
            <th className="border border-gray-700 px-3 py-2 text-left">Ação da Tesouraria</th>
            <th className="border border-gray-700 px-3 py-2 text-left">Resultado</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-white/5">
            <td className="border border-gray-700 px-3 py-3">
              Preço baixo em determinada exchange
            </td>
            <td className="border border-gray-700 px-3 py-3">
              Buy-back local ou injeção de liquidez
            </td>
            <td className="border border-gray-700 px-3 py-3">
              Elevação do preço até o ECP
            </td>
          </tr>

          <tr className="hover:bg-white/5">
            <td className="border border-gray-700 px-3 py-3">
              Preço alto demais em outra exchange
            </td>
            <td className="border border-gray-700 px-3 py-3">
              Venda controlada de reserva
            </td>
            <td className="border border-gray-700 px-3 py-3">
              Redução natural até o ECP
            </td>
          </tr>

          <tr className="hover:bg-white/5">
            <td className="border border-gray-700 px-3 py-3">
              Spread maior que 10, 15, 20–30%
            </td>
            <td className="border border-gray-700 px-3 py-3">
              Sincronização automática via oráculo + ajuste manual da equipe
            </td>
            <td className="border border-gray-700 px-3 py-3">
              Uniformização em minutos
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* PARÁGRAFO FINAL */}
    <p>
      Dessa forma, a{" "}
      <strong className="text-[#D4AF37]">E-Coin</strong> mantém{" "}
      <strong>equilíbrio e paridade internacional</strong> — livre de manipulações,
      independente de país, exchange ou par de negociação.  
      O resultado é uma moeda com preço{" "}
      <strong>uniforme, estável e auditável em tempo real</strong> por meio do{" "}
      <strong>ECGPSE</strong> e da{" "}
      <strong>E-Treasury</strong>.
    </p>

    <p className="italic text-gray-200">
      “O Buy-Back Engine é o árbitro invisível da nova economia — garantindo que
      cada E-Coin valha o mesmo em qualquer parte do mundo.”
    </p>
  </div>
</section>

{/* CTA BUTTON */}
<section className="max-w-6xl mx-auto mt-24 text-center">
  <Link
    href="/whitepaper"
    className="inline-flex items-center gap-2 px-10 py-4 rounded-full
    bg-black text-white font-semibold
    border border-[#D4AF37]
    hover:bg-[#D4AF37] hover:text-black
    transition-all duration-300 shadow-lg"
  >
    Aceder ao Whitepaper →
  </Link>
</section>

      
    </main>
  );
}