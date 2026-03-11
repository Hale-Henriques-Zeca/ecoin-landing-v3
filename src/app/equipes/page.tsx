"use client";

import { Suspense } from "react"; 
import BonusCard from "./components/BonusCard";
import BonusTable from "./components/BonusTable";
import LevelTree from "./components/LevelTree";
import InfoBox from "./components/InfoBox";

import LeaderMarketingStudio from "@/components/LeaderMarketingStudio";
import EcoinLeaderMarketingEngine from "@/components/EcoinLeaderMarketingEngine";
import EcoinLeaderBoard from "@/components/EcoinLeaderBoard";
import ReferralBindPanel from "@/components/ReferralBindPanel";
import ReferralDashboard from "@/components/ReferralDashboard";
import EcoinCommunityMap from "@/components/EcoinCommunityMap";
import EMarketingPage from "@/components/EMarketingPage";
import EcoinPreparationPhasePanel from "@/components/EcoinPreparationPhasePanel";
import EcoinNetworkAnalytics from "@/components/EcoinNetworkAnalytics";
import AskAIAudioEngine from "@/components/AskAIAudioEngine";
import PremiumDocumentVoice from "@/components/PremiumDocumentVoice";
import DocumentVoicePlayer from "@/components/DocumentVoicePlayer";
import EcoinAdvantages from "@/components/EcoinAdvantages";



function EquipesContent() {
  return (
    <div className="min-h-screen bg-black text-gray-300 pt-32 px-6">
      <div className="max-w-5xl mx-auto flex flex-col items-center space-y-20">
  
  <AskAIAudioEngine />
  <DocumentVoicePlayer />
        {/* TÍTULO */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-[#D4AF37] mb-3 tracking-wide">
            Líder de Equipes — E-Coin
          </h1>

          <p className="text-gray-300 max-w-2xl mx-auto">
            Estrutura oficial de bonificações da Pré-Venda e Staking via telegram bot da moeda
            corporativa{" "}
            <span className="text-[#D4AF37] font-semibold">E-Coin</span>.
          </p>
        </div>

        {/* CARTÃO DE EXPLICAÇÃO */}
        <InfoBox />



        {/* TABELA */}
        <BonusTable />

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mx-auto">
          <BonusCard
            title="Pré-Venda via telegram bot"
            percent="9%"
            levels="7 níveis"
            color="from-[#D4AF37] to-[#8d6f24]"
            items={[
              "5.10% — 1º nível",
              "1.10% — 2º nível",
              "1.00% — 3º nível",
              "0.90% — 4º nível",
              "0.50% — 5º nível",
              "0.30% — 6º nível",
              "0.10% — 7º nível",
            ]}
          />

          <BonusCard
            title="Staking via telegram bot"
            percent="1%"
            levels="2 níveis"
            color="from-[#444] to-[#222]"
            items={[
              "0.90% — 1º nível",
              "0.10% — 2º nível",
            ]}
          />
        </div>

        {/* ÁRVORE */}
        <div className="w-full max-w-3xl mx-auto">
          <LevelTree />
        </div>


<EcoinAdvantages />

{/* 🌐 EFTE DEX (E-Swap) — Economia Real do Protocolo */}
<div className="w-full max-w-5xl mx-auto space-y-16">

{/* TÍTULO */}
<div className="text-center space-y-3">
<h2 className="text-3xl font-extrabold text-[#D4AF37]">
🌐 EFTE DEX - E-Coin Converter (E-Swap) — Economia do Protocolo
</h2>

<p className="text-gray-400 max-w-3xl mx-auto">
A E-Swap não distribui recompensas artificiais.  
Todo o rendimento do staking nasce do uso real do protocolo:
trading, claims e atividade económica dentro da infraestrutura Web3
da moeda corporativa <span className="text-[#D4AF37] font-semibold">E-Coin</span>.
</p>
</div>


{/* HEADLINE */}
<div className="bg-[#0D0D0D]/80 border border-gray-800 rounded-2xl p-6 text-center">

<p className="text-lg text-gray-200 font-medium">
Quanto mais a rede é usada, mais valor circula.
</p>

<p className="text-gray-400 mt-2">
O staking recebe recompensas continuamente através de
CashFlow real gerado pelas transações do ecossistema.
</p>

</div>


{/* CONCEITO CASHFLOW */}
<div className="space-y-4">

<h3 className="text-2xl font-semibold text-[#3B82F6]">
💰 O conceito de CashFlow On-Chain
</h3>

<p className="text-gray-300">
Diferente de sistemas inflacionários que criam tokens do nada,
a economia da <strong> E-Coin </strong> funciona através de
<strong> fluxo de valor real </strong>.
</p>

<p className="text-gray-400">
Sempre que alguém utiliza a DEX, parte das taxas geradas
é automaticamente redirecionada para o sistema de recompensas.
Esse processo acontece inteiramente on-chain através
de contratos inteligentes auditáveis.
</p>

</div>


{/* TAXAS DO PROTOCOLO */}
<div className="bg-[#0D0D0D]/80 border border-gray-800 rounded-xl p-6 space-y-4">

<h3 className="text-xl font-semibold text-[#D4AF37]">
💱 Taxas de Conversão da E-Swap
</h3>

<div className="overflow-x-auto">

<table className="w-full border border-gray-800 rounded-xl overflow-hidden">

<thead className="bg-[#111]">
<tr>
<th className="px-4 py-3 text-left text-[#D4AF37]">Transação</th>
<th className="px-4 py-3 text-left text-[#D4AF37]">Taxa</th>
<th className="px-4 py-3 text-left text-[#D4AF37]">Descrição</th>
</tr>
</thead>

<tbody className="divide-y divide-gray-800">

<tr>
<td className="px-4 py-3">USDT / EUSD → E-Coin</td>
<td className="px-4 py-3 text-[#22C55E]">0.5%</td>
<td className="px-4 py-3">
Entrada de liquidez no protocolo
</td>
</tr>

<tr>
<td className="px-4 py-3">E-Coin → USDT / EUSD</td>
<td className="px-4 py-3 text-[#F59E0B]">2.5%</td>
<td className="px-4 py-3">
Saída de liquidez do protocolo
</td>
</tr>

<tr>
<td className="px-4 py-3">Claim de Staking</td>
<td className="px-4 py-3 text-[#22C55E]">1%</td>
<td className="px-4 py-3">
Taxa de distribuição de recompensas
</td>
</tr>

</tbody>
</table>

</div>

</div>


{/* DISTRIBUIÇÃO DAS TAXAS */}
<div className="space-y-4">

<h3 className="text-2xl font-semibold text-[#3B82F6]">
📊 Como as taxas são distribuídas
</h3>

<p className="text-gray-400">
As taxas recolhidas pelo protocolo são automaticamente
distribuídas por contratos inteligentes responsáveis
pela estabilidade económica da E-Coin.
</p>

<ul className="list-disc list-inside text-gray-300 space-y-2">

<li>20% → Treasury do protocolo</li>
<li>30% → Buyback automático de E-Coin</li>
<li>20% → Liquidity Vault</li>
<li>10% → Reward Pool de Staking</li>
<li>20% → Reserva estratégica</li>

</ul>

</div>


{/* CLAIM STREAMING */}
<div className="space-y-4">

<h3 className="text-2xl font-semibold text-[#3B82F6]">
🔄 Streaming Staking Rewards
</h3>

<p className="text-gray-300">
O sistema de staking utiliza um modelo de
<strong> Streaming Rewards</strong>.
</p>

<p className="text-gray-400">
Sempre que taxas entram no protocolo,
uma parte é enviada automaticamente para o
contrato de staking, aumentando o
<strong> reward pool em tempo real</strong>.
</p>

<p className="text-gray-400">
Os investidores recebem recompensas proporcionais
à quantidade de E-Coin que possuem em staking.
</p>

</div>


{/* SEGURANÇA */}
<div className="bg-[#0D0D0D]/80 border border-gray-800 rounded-xl p-6 space-y-4">

<h3 className="text-xl font-semibold text-[#D4AF37]">
🔐 Segurança Web3
</h3>

<ul className="list-disc list-inside text-gray-300 space-y-1">

<li>Contratos inteligentes imutáveis</li>
<li>Distribuição automática de taxas</li>
<li>Execução on-chain auditável</li>
<li>Sem custódia centralizada</li>

</ul>

</div>


{/* CONCLUSÃO */}
<div className="bg-gradient-to-r from-[#D4AF37]/15 to-[#3B82F6]/15
border border-gray-800 rounded-2xl p-6 text-center space-y-3">

<p className="text-lg font-semibold text-gray-200">
A E-Swap não promete retornos fixos.
</p>

<p className="text-gray-300">
As recompensas vêm exclusivamente
do uso real do protocolo.
</p>

<p className="text-[#D4AF37] font-bold">
Mais utilização → mais CashFlow → mais recompensas.
</p>

</div>

</div>


{/* ============================================================ */}
{/* 💰 Staking Reward Engine */}
{/* ============================================================ */}

<section className="relative overflow-hidden rounded-2xl border border-gray-800 bg-black/40 p-6 md:p-10 mt-16">

<div className="pointer-events-none absolute -top-24 left-1/3 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-3xl" />
<div className="pointer-events-none absolute -bottom-28 right-0 h-80 w-80 rounded-full bg-[#1C2D5A]/30 blur-3xl" />

<h3 className="text-xl font-semibold text-[#D4AF37] mb-6">
💰 Staking Reward Engine
</h3>

<p className="text-gray-300 mb-6">
O sistema de staking da <strong className="text-[#D4AF37]">E-Coin</strong> foi projetado para criar uma distribuição de recompensas sustentável, previsível e resistente a manipulações económicas.
</p>

<p className="text-gray-300 mb-8">
Ao invés de distribuir recompensas instantaneamente, o protocolo utiliza um modelo de <strong>reward streaming buffer</strong> que leva 40% pagos no claiming, de volta ao Reward Pool para um novo Circulo de redistribuição de Rewards aos stakers permanentes ou de longo prazo, mas este duma forma gradual.
</p>

<div className="flex flex-col items-center space-y-4 mb-10">

<div className="bg-black/50 border border-white/10 rounded-xl px-6 py-3">
Protocol Fees
</div>

<div className="text-[#D4AF37] text-lg">↓</div>

<div className="bg-black/50 border border-white/10 rounded-xl px-6 py-3">
Reward Buffer
</div>

<div className="text-[#D4AF37] text-lg">↓</div>

<div className="bg-black/50 border border-white/10 rounded-xl px-6 py-3">
Streaming Rewards
</div>

<div className="text-[#D4AF37] text-lg">↓</div>

<div className="bg-black/50 border border-[#D4AF37]/40 rounded-xl px-6 py-3 text-[#D4AF37]">
Stakers
</div>

</div>

<p className="text-gray-300 mb-10">
Este modelo evita picos abruptos de recompensa e cria uma distribuição gradual baseada na atividade económica real do protocolo.
</p>


{/* Claim Fee Distribution */}

<h4 className="text-lg font-semibold text-[#4ade80] mb-3">
1️⃣ Claim Fee Redistribution
</h4>

<p className="text-gray-300 mb-6">
Cada claim de staking possui uma taxa económica de <strong>1%</strong>, redistribuída automaticamente entre diferentes componentes do protocolo.
</p>

<div className="overflow-x-auto mb-10">

<table className="min-w-[600px] w-full border-collapse text-sm">

<thead>
<tr className="bg-[#D4AF37]/10">
<th className="border border-gray-700 px-4 py-3 text-left">Destino</th>
<th className="border border-gray-700 px-4 py-3 text-left">Percentagem</th>
</tr>
</thead>

<tbody>

<tr className="hover:bg-white/5">
<td className="border border-gray-700 px-4 py-4">Referral Rewards</td>
<td className="border border-gray-700 px-4 py-4">30%</td>
</tr>

<tr className="hover:bg-white/5">
<td className="border border-gray-700 px-4 py-4">Gas Pool</td>
<td className="border border-gray-700 px-4 py-4">20%</td>
</tr>

<tr className="hover:bg-white/5">
<td className="border border-gray-700 px-4 py-4">Reward Buffer</td>
<td className="border border-gray-700 px-4 py-4">40%</td>
</tr>

<tr className="hover:bg-white/5">
<td className="border border-gray-700 px-4 py-4">Treasury</td>
<td className="border border-gray-700 px-4 py-4">10%</td>
</tr>

</tbody>

</table>

</div>


{/* Security Layer */}

<h4 className="text-lg font-semibold text-[#facc15] mb-3">
2️⃣ Staking Security Layer
</h4>

<p className="text-gray-300 mb-6">
O sistema de staking inclui múltiplos mecanismos de proteção económica para impedir manipulações de recompensa e ataques de curto prazo.
</p>

<ul className="text-gray-300 list-disc list-inside space-y-2 mb-8">

<li>Reward streaming buffer para evitar reward spikes</li>
<li>Claim cooldown de 10 minutos</li>
<li>Proteção contra flash staking</li>
<li>Distribuição gradual de recompensas</li>

</ul>

<p className="text-gray-300">
Estas proteções garantem que o sistema favoreça participantes de longo prazo e preserve a estabilidade económica do protocolo.
</p>

</section>

{/* 🤝 Sistema de Referências — Liderança Web3 */}
<div className="w-full max-w-5xl mx-auto space-y-16">

{/* TITULO */}
<div className="text-center space-y-3">

<h2 className="text-3xl font-extrabold text-[#D4AF37]">
🤝 Sistema de Referências — Liderança Web3
</h2>

<p className="text-gray-400 max-w-3xl mx-auto">
Na infraestrutura da E-Coin os líderes não recebem comissões
de depósitos ou promessas artificiais.
As recompensas de liderança vêm de atividade económica real
gerada pelo uso do protocolo.
</p>

</div>


{/* EXPLICAÇÃO */}
<div className="bg-[#0D0D0D]/80 border border-gray-800 rounded-2xl p-6 text-center">

<p className="text-lg text-gray-200 font-medium">
O líder ganha quando a rede utiliza o protocolo.
</p>

<p className="text-gray-400 mt-2">
As comissões são geradas quando os membros da sua comunidade
recebem recompensas de staking e realizam o claim dessas recompensas.
</p>

</div>


{/* CARDS */}
<div className="grid md:grid-cols-3 gap-6">

{/* CARD 1 */}
<div className="bg-black/50 border border-gray-800 rounded-xl p-6 space-y-3">

<h3 className="text-[#D4AF37] font-semibold">
1️⃣ Claim de Recompensas
</h3>

<p className="text-gray-400 text-sm">
Quando um utilizador faz claim das recompensas de staking,
o protocolo cobra uma pequena taxa de distribuição
para manter o sistema sustentável.
</p>

<p className="text-[#22C55E] font-semibold">
Taxa: 1%
</p>

</div>


{/* CARD 2 */}
<div className="bg-black/50 border border-gray-800 rounded-xl p-6 space-y-3">

<h3 className="text-[#D4AF37] font-semibold">
2️⃣ Comissão do Líder
</h3>

<p className="text-gray-400 text-sm">
Se o utilizador tiver um líder registado no sistema de referência,
parte da taxa de claim é automaticamente enviada para o líder.
</p>

<p className="text-[#22C55E] font-semibold">
30% da taxa de claim
</p>

</div>


{/* CARD 3 */}
<div className="bg-black/50 border border-gray-800 rounded-xl p-6 space-y-3">

<h3 className="text-[#D4AF37] font-semibold">
3️⃣ Distribuição Automática
</h3>

<p className="text-gray-400 text-sm">
A comissão do líder é registada automaticamente
pelo contrato inteligente de referências,
sem necessidade de intermediários.
</p>

<p className="text-[#22C55E] font-semibold">
100% On-Chain
</p>

</div>

</div>


{/* TABELA DE EXEMPLO */}
<div className="overflow-x-auto">

<table className="w-full border border-gray-800 rounded-xl overflow-hidden">

<thead className="bg-[#111]">

<tr>

<th className="px-4 py-3 text-left text-[#D4AF37]">
Exemplo
</th>

<th className="px-4 py-3 text-left text-[#D4AF37]">
Valor
</th>

<th className="px-4 py-3 text-left text-[#D4AF37]">
Destino
</th>

</tr>

</thead>

<tbody className="divide-y divide-gray-800">

<tr>
<td className="px-4 py-3">
Reward de Staking
</td>
<td className="px-4 py-3">
100 E-Coin
</td>
<td className="px-4 py-3">
Utilizador
</td>
</tr>

<tr>
<td className="px-4 py-3">
Taxa de Claim
</td>
<td className="px-4 py-3 text-[#F59E0B]">
1 E-Coin
</td>
<td className="px-4 py-3">
Fee do protocolo
</td>
</tr>

<tr>
<td className="px-4 py-3">
Comissão do Líder
</td>
<td className="px-4 py-3 text-[#22C55E]">
0.30 E-Coin
</td>
<td className="px-4 py-3">
Líder da comunidade
</td>
</tr>

</tbody>

</table>

</div>


{/* CONCLUSÃO */}
<div className="bg-gradient-to-r from-[#D4AF37]/15 to-[#3B82F6]/15
border border-gray-800 rounded-2xl p-6 text-center space-y-3">

<p className="text-lg font-semibold text-gray-200">
A liderança na E-Coin é baseada em valor real.
</p>

<p className="text-gray-300">
Os líderes recebem comissões apenas quando
a sua comunidade participa na economia do protocolo.
</p>

<p className="text-[#D4AF37] font-bold">
Liderança verdadeira é crescimento sustentável.
</p>

</div>

</div>


<EcoinPreparationPhasePanel />

<LeaderMarketingStudio />

<EcoinLeaderMarketingEngine />

{/* 🔗 Bind & Dashboard */}
<div className="w-full max-w-5xl mx-auto grid md:grid-cols-2 gap-10">

  <ReferralBindPanel />
  <ReferralDashboard />

</div>


<EcoinLeaderBoard />



<EcoinNetworkAnalytics />

<EcoinCommunityMap />

<EMarketingPage />


        {/* RODAPÉ */}
        <div className="text-gray-500 text-xs pt-10">
          © EdenKingDom Corporation — E-Coin & E-Coin Converter (E-Swap) Network
        </div>

      </div>
    </div>
  );
}


export default function EquipesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black flex items-center justify-center text-white">Carregando painel de equipes...</div>}>
      <EquipesContent />
    </Suspense>
  );
}