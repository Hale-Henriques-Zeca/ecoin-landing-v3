"use client";


import CryptoHistoricalExample from "@/components/CryptoHistoricalExample";
import CryptoGrowthSimulator from "@/components/CryptoGrowthSimulator";

export default function EcoinAdvantages() {
  return (
    <div className="w-full max-w-5xl mx-auto space-y-14">

      {/* TÍTULO */}
      <div className="text-center space-y-3">
        <h2 className="text-3xl font-extrabold text-[#D4AF37]">
          💎 Vantagens de Utilizar a E-Coin
        </h2>

        <p className="text-gray-400 max-w-3xl mx-auto">
          A <span className="text-[#D4AF37] font-semibold">E-Coin</span> foi
          concebida para oferecer múltiplas fontes de rendimento dentro do
          ecossistema digital. Utilizadores e investidores podem beneficiar
          através de diferentes mecanismos de valorização e utilidade.
        </p>
      </div>

      {/* CARDS */}
      <div className="grid md:grid-cols-3 gap-6">

        {/* CARD 1 */}
        <div className="bg-[#0D0D0D]/80 border border-gray-800 rounded-xl p-6 space-y-4">

          <h3 className="text-[#D4AF37] font-semibold text-lg">
            1️⃣ Valorização da E-Coin
          </h3>

          <p className="text-gray-400 text-sm">
            Investidores podem adquirir E-Coin em fases iniciais a preços mais
            baixos e beneficiar da valorização futura do token.
          </p>

          <div className="bg-black/50 border border-gray-800 rounded-lg p-4 text-sm space-y-1">
            <p className="text-gray-300">Compra inicial: $1</p>
            <p className="text-gray-300">Valorização futura: $10</p>
          </div>

          <p className="text-[#22C55E] font-semibold text-sm">
            💰 Potencial de crescimento até 10x
          </p>

        </div>


        {/* CARD 2 */}
        <div className="bg-[#0D0D0D]/80 border border-gray-800 rounded-xl p-6 space-y-4">

          <h3 className="text-[#D4AF37] font-semibold text-lg">
            2️⃣ Rendimentos via Staking (Investimento)
          </h3>

          <p className="text-gray-400 text-sm">
            Utilizadores podem bloquear E-Coin em staking para apoiar o
            ecossistema e receber recompensas periódicas.
          </p>

          <div className="bg-black/50 border border-gray-800 rounded-lg p-4 text-sm space-y-1">
            <p className="text-gray-300">Investimento: 1000 E-Coin</p>
            <p className="text-gray-300">Recompensa: +100 moedas por período</p>
          </div>

          <p className="text-[#22C55E] font-semibold text-sm">
            💰 Rendimento passivo contínuo
          </p>

        </div>


        {/* CARD 3 */}
        <div className="bg-[#0D0D0D]/80 border border-gray-800 rounded-xl p-6 space-y-4">

          <h3 className="text-[#D4AF37] font-semibold text-lg">
            3️⃣ Arbitragem e Liquidez
          </h3>

          <p className="text-gray-400 text-sm">
            Dentro da comunidade pode existir procura direta por E-Coin,
            criando oportunidades de negociação e arbitragem entre utilizadores.
          </p>

          <div className="bg-black/50 border border-gray-800 rounded-lg p-4 text-sm space-y-1">
            <p className="text-gray-300">Compra: $1</p>
            <p className="text-gray-300">Venda direta: $1.10 – $1.20</p>
          </div>

          <p className="text-[#22C55E] font-semibold text-sm">
            💰 Lucro rápido via spread de negociação
          </p>

        </div>

      </div>
  <CryptoHistoricalExample />

  <CryptoGrowthSimulator />

      {/* CONCLUSÃO */}
      <div className="bg-gradient-to-r from-[#D4AF37]/15 to-[#3B82F6]/15 border border-gray-800 rounded-2xl p-6 text-center space-y-3">

        <p className="text-lg font-semibold text-gray-200">
          A E-Coin baseia-se em três pilares de geração de valor
        </p>

        <div className="space-y-1 text-gray-300">

          <p>✔ Valorização do ativo ao longo do crescimento do ecossistema</p>
          <p>✔ Rendimento passivo através de staking (Investimento)</p>
          <p>✔ Negociação e arbitragem dentro da comunidade</p>

        </div>

        <p className="text-[#D4AF37] font-bold">
          E-Coin - um ecossistema sustentável de economia digital.
        </p>

      </div>

    </div>
  );
}