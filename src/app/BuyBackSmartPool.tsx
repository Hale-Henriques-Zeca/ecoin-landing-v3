"use client";

import { useEffect, useState } from "react";
import { useAccount, useConnect } from "wagmi";
import { BrowserProvider, Contract, parseUnits } from "ethers";
import { motion } from "framer-motion";
import { fetchECoinPrice } from "@/utils/fetchECoinPrice";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Filler,
  Tooltip,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Filler, Tooltip);

export default function BuyBackSmartPool() {
  const { isConnected } = useAccount();
  const { connect, connectors } = useConnect();

  const [amount, setAmount] = useState("");
  const [timeLock, setTimeLock] = useState("3");
  const [txHash, setTxHash] = useState("");
  const [locks, setLocks] = useState<any[]>([]);
  const [growths, setGrowths] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
const [subscribed, setSubscribed] = useState(false);
const [contactMethod, setContactMethod] = useState("email"); // se estiver usando o painel de alertas
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // função para inscrição do painel de alertas (email / sms)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true); // ativa a mensagem de confirmação
  };

  const CONTRACT_ADDRESS = "0xYourContractAddress";
  const ABI = [
    "function buyBack(uint256 _amount, uint256 _hours) external",
  ];

  async function handleBuyBack() {
    if (!isConnected) return alert("Conecte a carteira primeiro!");
    if (typeof window === "undefined" || !("ethereum" in window)) {
  return alert("Carteira não encontrada");
}

    try {
      setLoading(true);

      const provider = new BrowserProvider(window.ethereum);
const signer = await provider.getSigner();

const contract = new Contract(CONTRACT_ADDRESS, ABI, signer);

const amountInWei = parseUnits(amount || "0", 18);
const tx = await contract.buyBack(amountInWei, Number(timeLock));
const receipt = await tx.wait();

      setTxHash(receipt.hash);
      setLocks([...locks, { amount, timeLock, hash: receipt.hash }]);
      setLoading(false);
    } catch (e) {
      console.error(e);
      setLoading(false);
      alert("Erro ao executar Buy-Back");
    }
  }

  const [price, setPrice] = useState<number | null>(null);
const [lastUpdate, setLastUpdate] = useState<string>("");

useEffect(() => {
  async function loadPrice() {
    const res = await fetchECoinPrice();
    if (res) {
      setPrice(res.price);
      setLastUpdate(new Date().toLocaleTimeString());
    }
  }
  loadPrice();
  const interval = setInterval(loadPrice, 30000);
  return () => clearInterval(interval);
}, []);


  return (
    <section className="relative bg-black py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="
          relative overflow-hidden
          rounded-2xl
          border border-[#1C2D5A]
          bg-gradient-to-br from-[#020617] via-[#020617] to-[#0a1a3a]
          p-8 md:p-14 text-white
        ">
{/* SEPARADOR ENTRE ENGINE e SMART POOL */}
<div className="relative z-10 mt-14 mb-10 flex items-center gap-4">
  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
  <span className="text-[11px] sm:text-xs uppercase tracking-[0.35em] text-[#D4AF37]/80">
    ECP Panel
  </span>
  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
</div>

{/* PAINEL — EDENKINGDOM COIN PRICE (LIVE) */}
<section className="relative bg-black text-white py-20 px-4 sm:px-8 rounded-2xl border border-[#1C2D5A]/50 overflow-hidden">
  <div className="absolute inset-0 -z-10">
    <div className="absolute top-0 left-1/2 w-[600px] h-[600px] -translate-x-1/2 bg-[#D4AF37]/10 rounded-full blur-[180px]" />
    <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#1C2D5A]/40 rounded-full blur-[140px]" />
  </div>

  <div className="max-w-6xl mx-auto text-center">
    <motion.h2
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#D4AF37] mb-6"
    >
      💰 E-Coin Price (Live)
    </motion.h2>

    {/* PREÇO ATUAL */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="text-[#D4AF37] font-mono font-bold text-5xl sm:text-6xl md:text-7xl tracking-tight drop-shadow-lg"
    >
      {price ? (
        <>
          {price.toFixed(6)} <span className="text-3xl align-super">USD</span>
        </>
      ) : (
        <span className="text-gray-500 text-3xl">Loading...</span>
      )}
    </motion.div>

    {/* SUBDADOS */}
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-10 text-xs sm:text-sm">
      {[
        { label: "Variação 24h", value: "+2.48 %" },
        { label: "Volume 24h", value: "$1.26M" },
        { label: "Market Cap", value: "$4.2M" },
        { label: "Última Atualização", value: lastUpdate || "—" },
        { label: "Sincronização", value: "✅ Ativa" },
        { label: "Oráculo", value: "Chainlink Mainnet" },
      ].map((item, i) => (
        <div
          key={i}
          className="rounded-xl bg-[#0a0a0a]/70 border border-[#D4AF37]/20 py-3 px-2 sm:px-4"
        >
          <h4 className="text-[#D4AF37] text-[11px] uppercase tracking-widest mb-1">
            {item.label}
          </h4>
          <p className="font-semibold text-gray-200">{item.value}</p>
        </div>
      ))}
    </div>

{/* MINI GRÁFICO DE VARIAÇÃO */}
<div className="mt-10 w-full max-w-3xl mx-auto">
  <Line
    data={{
      labels: ["-5m", "-4m", "-3m", "-2m", "-1m", "Agora"],
      datasets: [
        {
          label: "E-Coin/USDT",
          data: [30.18, 30.20, 30.22, 30.25, 30.27, price || 30.27],
          borderColor: "#D4AF37",
          borderWidth: 2,
          tension: 0.4,
          fill: true,
          backgroundColor: "rgba(212,175,55,0.1)",
        },
      ],
    }}
    options={{
      plugins: { legend: { display: false } },
      scales: { x: { display: false }, y: { display: false } },
      elements: { point: { radius: 0 } },
    }}
  />
</div>

    {/* BARRA DIGITAL */}
    <div className="relative mt-12 mx-auto w-full max-w-4xl h-2 bg-[#1C2D5A]/40 rounded-full overflow-hidden">
      <motion.div
        className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#D4AF37] to-[#4ade80]"
        animate={{ width: ["10%", "60%", "100%", "80%", "40%", "90%"] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>

    {/* LINKS */}
    <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm">
      <span className="text-gray-400">Atualizado via PancakeSwap API</span>
      <a
        href="https://pancakeswap.finance/swap?chain=bsc&inputCurrency=0xDf69235019cc416dd5Be75dfc0eDc922aB4b5964&outputCurrency=0x55d398326f99059fF775485246999027B3197955"
        target="_blank"
        className="text-[#D4AF37] underline hover:text-[#f9e07d] transition"
      >
        Ver par E-Coin/USDT ↗
      </a>
    </div>
  </div>
</section>


    {/* SEPARADOR ENTRE ENGINE e SMART POOL */}
<div className="relative z-10 mt-14 mb-10 flex items-center gap-4">
  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
  <span className="text-[11px] sm:text-xs uppercase tracking-[0.35em] text-[#D4AF37]/80">
    ECP Alert 
  </span>
  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
</div>

  <section className="relative min-h-screen bg-black text-white py-24 px-6 overflow-hidden">
      {/* FUNDO VISUAL */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 w-[600px] h-[600px] -translate-x-1/2 bg-[#D4AF37]/10 rounded-full blur-[160px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#1C2D5A]/30 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto text-center">
        {/* TÍTULO */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#D4AF37] mb-6"
        >
          E-Coin Price Alert & Buy-Back Collective
        </motion.h1>

        <p className="text-gray-300 max-w-3xl mx-auto text-sm sm:text-base mb-12">
          Conecte-se ao <strong>ECP (EdenKingDom Coin Price)</strong> e receba notificações
          inteligentes de oportunidade: <br /> “Está na hora do Buy-Back — compre na baixa,
          lucre na alta e participe do crescimento coletivo da E-Coin.”
        </p>

        {/* CARD PRINCIPAL */}
        <div className="relative mx-auto max-w-lg rounded-2xl border border-[#D4AF37]/30 bg-[#0a0a0a]/80 p-8 backdrop-blur-md shadow-lg">
          {!subscribed ? (
            <>
              <h3 className="text-xl font-semibold text-[#D4AF37] mb-4">
                Escolha como deseja receber seus alertas 📡
              </h3>

              {/* FORMULÁRIO */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex justify-center gap-6 mb-4">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="method"
                      value="email"
                      checked={contactMethod === "email"}
                      onChange={() => setContactMethod("email")}
                      className="accent-[#D4AF37]"
                    />
                    <span>Email</span>
                  </label>

                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="radio"
                      name="method"
                      value="sms"
                      checked={contactMethod === "sms"}
                      onChange={() => setContactMethod("sms")}
                      className="accent-[#D4AF37]"
                    />
                    <span>SMS</span>
                  </label>
                </div>

                {contactMethod === "email" ? (
                  <input
                    type="email"
                    placeholder="Digite seu email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full p-3 rounded-lg bg-black border border-gray-700 text-[#D4AF37] placeholder-gray-500 focus:border-[#D4AF37] outline-none"
                  />
                ) : (
                  <input
                    type="tel"
                    placeholder="Digite seu número de telefone... (+258.....)"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className="w-full p-3 rounded-lg bg-black border border-gray-700 text-[#D4AF37] placeholder-gray-500 focus:border-[#D4AF37] outline-none"
                  />
                )}

                <button
                  type="submit"
                  className="mt-4 py-3 bg-[#D4AF37] text-black font-semibold rounded-lg hover:scale-105 transition"
                >
                  🔔 Inscrever-me
                </button>
              </form>
            </>
          ) : (
            <div className="text-center">
              <h4 className="text-[#4ade80] text-lg font-semibold mb-2">
                ✅ Inscrição confirmada!
              </h4>
              <p className="text-gray-300">
                Agora você receberá alertas de preço e convites para Buy-Backs coletivos.
              </p>
            </div>
          )}
        </div>

        {/* SEÇÃO EXPLICATIVA */}
        <div className="mt-16 text-gray-300 max-w-4xl mx-auto text-sm sm:text-base space-y-6">
          <div>
            <h3 className="text-[#D4AF37] font-semibold text-lg mb-2">
              💡 O que é o ECP?
            </h3>
            <p>
              O <strong>EdenKingDom Coin Price (ECP)</strong> é o painel de rastreamento oficial
              da E-Coin, que identifica em tempo real os pontos ideais para entrada e saída do
              mercado. Quando o preço cai, o sistema envia alertas sincronizados com o
              <strong> Buy-Back Smart Pool</strong>, convidando toda a comunidade a recomprar
              estrategicamente.
            </p>
          </div>

          <div>
            <h3 className="text-[#D4AF37] font-semibold text-lg mb-2">
              ⚙️ Como funciona?
            </h3>
            <p>
              Ao registrar-se, você escolhe receber notificações por Email ou SMS.
              O algoritmo acompanha as flutuações do preço da E-Coin e envia um aviso
              quando há oportunidade de compra (“Buy-Back Time”) ou quando o preço atinge
              novas resistências (“Sell-Back Time”). Isso transforma cada investidor em
              um participante ativo do ecossistema.
            </p>
          </div>

          <div>
            <h3 className="text-[#D4AF37] font-semibold text-lg mb-2">
              🚀 Benefícios
            </h3>
            <ul className="text-left list-disc list-inside space-y-1">
              <li>Receba alertas de preço e sinais de Buy-Back em tempo real.</li>
              <li>Participe de campanhas coletivas de recompras sincronizadas.</li>
              <li>Ganhe até <strong>50 %</strong> do crescimento futuro da E-Coin.</li>
              <li>Contribua para a estabilidade do ecossistema e evite liquidações.</li>
              <li>Torne-se parte do movimento “De trader para trader, de holder para holder. De investidor em ativos digitais para investidor em ativos digitais.”</li>
            </ul>
          </div>
        </div>

        {/* SLOGAN FINAL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-16 text-center text-[#D4AF37] font-semibold italic"
        >
          “Quando o mercado fala, a E-Coin responde.  
          Ganhe com o tempo — compre na baixa, cresça na alta.”
        </motion.div>
      </div>
    </section>

{/* SEPARADOR ENTRE ENGINE E LIVE PRICE */}
<div className="relative z-10 mt-14 mb-10 flex items-center gap-4">
  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
  <span className="text-[11px] sm:text-xs uppercase tracking-[0.35em] text-[#D4AF37]/80">
    Buy-Back Mechanism 
  </span>
  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
</div>
                <section
      id="buyback"
      className="relative overflow-hidden rounded-2xl border border-[#1C2D5A] bg-gradient-to-br from-[#020617] via-[#020617] to-[#0a1a3a] p-8 md:p-14"
    >
      {/* FUNDO CINEMATOGRÁFICO */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#D4AF37]/20 blur-[30px] animate-pulse" />
        <div className="absolute bottom-0 right-0 h-[380px] w-[380px] rounded-full bg-[#1C2D5A]/60 blur-[160px]" />
      </div>

      {/* TÍTULO */}
      <h2 className="
  text-xl
  sm:text-2xl
  md:text-3xl
  lg:text-4xl
  font-bold
  text-[#D4AF37]
  text-center
  mb-4
">
        E-Coin Buy-Back Engine
      </h2>

      <p className="
  relative z-10
  max-w-3xl
  mx-auto
  text-center
  text-gray-300
  text-sm sm:text-base
  mb-10 sm:mb-14
">
        Um sistema econômico vivo, projetado para eliminar liquidações,
        absorver dumps e garantir a expansão, valorização e crescimento orgânico do preço da E-Coin no mercado sustentado por
        receitas reais e diversos.
      </p>

      {/* DIAGRAMA SVG — CINEMATOGRÁFICO E RESPONSIVO */}
<div className="relative z-10 flex justify-center">
  <svg
    viewBox="0 0 420 420"
    className="w-full max-w-[420px]"
    aria-label="E-Coin Buy-Back Cycle"
  >
    {/* ===== ÓRBITA GIRATÓRIA (LINHA E SETAS) ===== */}
    {/* Tudo neste grupo gira junto */}
    <g className="animate-spin-slow origin-center">
      {/* Linha da Órbita */}
      <circle
        cx="210"
        cy="210"
        r="160"
        fill="none"
        stroke="#D4AF37"
        strokeWidth="3"
        strokeDasharray="8 12"
      />

      {/* SETAS DE FLUXO (Adicionadas aqui dentro para girarem com a órbita) */}
      {[
        // Posicionamos as setas entre os labels (ex: a 0, 60, 120 graus...)
        { angle: 0 },
        { angle: 60 },
        { angle: 120 },
        { angle: 180 },
        { angle: 240 },
        { angle: 300 },
      ].map((item, i) => {
        const radius = 160;
        const angleInRadians = (item.angle * Math.PI) / 180;
        const x = 210 + radius * Math.cos(angleInRadians);
        const y = 210 + radius * Math.sin(angleInRadians);

        return (
          <polygon
            key={i}
            points="0,-8 16,0 0,8" // Forma básica de uma seta apontando para a direita (localmente)
            fill="#D4AF37"
            // Move e rotaciona a seta para que ela aponte tangencialmente ao círculo
            // O +90 graus ajusta a orientação local da forma do polígono para a tangente da órbita
            transform={`translate(${x}, ${y}) rotate(${item.angle + 90}) scale(0.6)`}
          />
        );
      })}
    </g>

    {/* ===== CONTEÚDO ESTÁTICO (CENTRO E LABELS) ===== */}
    {/* Todo este grupo não gira */}
    <g>
      {/* Centro Fixo */}
      <circle
        cx="210"
        cy="210"
        r="56"
        fill="black"
        stroke="#D4AF37"
        strokeWidth="4"
      />
      <text
        x="210"
        y="216"
        textAnchor="middle"
        fontSize="18"
        fontWeight="bold"
        fill="#D4AF37"
      >
        E-Coin
      </text>

      {/* LABELS FIXAS EM POSIÇÃO ABSOLUTA */}
      {[
        { label: "Venda", angle: 270 },
        { label: "Recompra", angle: 330 },
        { label: "Queima Parcial", angle: 30 },
        { label: "Estabilização", angle: 90 },
        { label: "Emissão Controlada", angle: 150 },
        { label: "Crescimento", angle: 210 },
      ].map((item, i) => {
        const radius = 160;
        const angleInRadians = (item.angle * Math.PI) / 180;
        const textOffsetX = -48;
        const textOffsetY = -14;
        const x = 210 + radius * Math.cos(angleInRadians);
        const y = 210 + radius * Math.sin(angleInRadians);

        return (
          <g key={i} transform={`translate(${x}, ${y})`}>
            <rect
              x={textOffsetX}
              y={textOffsetY}
              rx="8"
              ry="8"
              width="96"
              height="28"
              fill="black"
              stroke="#D4AF37"
              strokeWidth="1"
            />
            <text
              x="0"
              y="4"
              textAnchor="middle"
              fontSize="11"
              fontWeight="500"
              fill="#D4AF37"
              className="select-none"
            >
              {item.label}
            </text>
          </g>
        );
      })}
    </g>
  </svg>

  {/* ADICIONE ESTE CSS NO SEU ARQUIVO GLOBAL OU TILEWIND CONFIG */}
  <style jsx>{`
    .animate-spin-slow {
      animation: spin 20s linear infinite;
    }
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
  `}</style>
</div>

      {/* EXPLICAÇÃO */}
      <div className="relative z-10 max-w-5xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 text-sm">
        <div className="rounded-xl border border-gray-800 bg-black/60 p-5">
          <h4 className="text-[#D4AF37] font-semibold mb-2">
            🛡️ Anti-Dump & Anti-Liquidação
          </h4>
          <p className="text-gray-300">
            O buy-back absorve vendas massivas automaticamente,
            impedindo colapsos de preço e liquidações forçadas.
          </p>
        </div>

        <div className="rounded-xl border border-gray-800 bg-black/60 p-5">
          <h4 className="text-[#D4AF37] font-semibold mb-2">
            🔥 Deflação Inteligente
          </h4>
          <p className="text-gray-300">
            Parte dos tokens recomprados é queimada,
            reduzindo supply e fortalecendo escassez real.
          </p>
        </div>

        <div className="rounded-xl border border-gray-800 bg-black/60 p-5">
          <h4 className="text-[#D4AF37] font-semibold mb-2">
            🏦 Lastro Corporativo Real
          </h4>
          <p className="text-gray-300">
            Todo o sistema é sustentado por receitas reais
            da EdenKingDom Corporation.
          </p>
        </div>
      </div>

      {/* RESULTADO */}
      <div className="relative z-10 mt-12 text-center">
        <span
  className="
    inline-block
    rounded-full
    bg-[#4ade80]/10
    border border-[#4ade80]/40
    px-4 py-2
    sm:px-6 sm:py-3
    text-xs sm:text-sm
    text-[#4ade80]
    font-semibold
    text-center
    leading-snug
  "
>
  ✔️ Resultado: Imunidade à liquidação, estabilidade e valorização orgânica — progressiva 🚀
</span>

      </div>

      {/* SEPARADOR ENTRE SMART POOL E ECGPSE */}
<div className="relative z-10 mt-14 mb-10 flex items-center gap-4">
  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
  <span className="text-[11px] sm:text-xs uppercase tracking-[0.35em] text-[#D4AF37]/80">
    ECGPSE
  </span>
  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
</div>

{/* PAINEL — E-Coin Global Price Sync Engine */}
<section className="relative bg-[#020617] text-white py-20 px-4 sm:px-8 rounded-2xl border border-[#1C2D5A]/50 overflow-hidden">
  {/* Fundo cinematográfico */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute top-0 left-1/2 w-[420px] h-[420px] -translate-x-1/2 bg-[#D4AF37]/10 rounded-full blur-[120px]" />
    <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#1C2D5A]/40 rounded-full blur-[100px]" />
  </div>

  {/* Conteúdo central */}
  <div className="max-w-5xl mx-auto text-center">
    <motion.h2
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#D4AF37] mb-4"
    >
      ⚙️ E-Coin Global Price Sync Engine (ECGPSE)
    </motion.h2>

    <p className="text-gray-300 max-w-3xl mx-auto text-sm sm:text-base mb-10 leading-relaxed">
      O <strong>ECGPSE</strong> é o motor corporativo que mantém o preço da E-Coin equilibrado e justo em todas
      as bolsas globais (CEX e DEX). Ele observa variações, calcula médias ponderadas e executa ações automáticas
      de Buy-Back ou Sell-Back quando detecta desvios significativos.
    </p>

    {/* CARD CORPORATIVO */}
    <div className="text-left bg-black/50 rounded-2xl border border-[#D4AF37]/30 p-6 sm:p-8 backdrop-blur-md shadow-lg">
      <h3 className="text-[#D4AF37] text-lg sm:text-xl font-semibold mb-3 text-center">
        VII. O Desafio — Variação de Preço entre Exchanges
      </h3>
      <p className="text-gray-300 text-sm sm:text-base mb-6">
        Naturalmente, o preço de um ativo listado em múltiplas bolsas pode divergir por segundos ou minutos,
        devido a diferenças de volume, ordens locais e pares distintos (E-Coin/USDT, E-Coin/BNB etc.).
        <br /><br />
        <strong>Exemplo:</strong> E-Coin = $30 na Binance / $31 na Upbit → spread de $1.
        <br />
        Essa diferença gera oportunidades de arbitragem especulativa. Para impedir isso, a E-Coin adota um
        modelo corporativo de equilíbrio global via Buy-Back e sincronização automatizada.
      </p>

      <h3 className="text-[#D4AF37] text-lg sm:text-xl font-semibold mb-3 text-center">
        VIII. Solução — E-Coin Global Price Sync Engine
      </h3>
      <ul className="list-decimal list-inside text-gray-300 space-y-3 text-sm sm:text-base">
        <li>
          <strong>Coleta de Dados em Tempo Real:</strong> O ECGPSE conecta-se às APIs públicas de exchanges
          (Binance, Gate.io, MEXC, PancakeSwap, Upbit etc.) e lê os preços médios em milissegundos.
        </li>
        <li>
          <strong>Cálculo do Preço Global Médio (ECP – EdenKingDom Coin Price):</strong> A média ponderada é
          baseada no volume de cada exchange.<br />
          Binance 60% → peso 0,6 / PancakeSwap 25% → 0,25 / Upbit 15% → 0,15.<br />
          <strong>ECP = Σ(preço × peso).</strong>
        </li>
        <li>
          <strong>Análise de Desvios:</strong> Se uma exchange estiver acima ou abaixo do ECP por mais de 1–2%,
          o sistema aciona ajustes automáticos de liquidez.
        </li>
        <li>
          <strong>Ação Buy-Back / Sell-Back Automática:</strong> Quando o preço estiver abaixo do ECP, a tesouraria
          executa Buy-Back naquela exchange. Quando estiver acima, libera pequenos volumes controlados.
        </li>
        <li>
          <strong>Sincronização com Oráculos DeFi:</strong> O ECGPSE usa oráculos como Chainlink e Pyth para
          redistribuir os preços médios às plataformas DeFi que usam E-Coin como colateral ou ativo de trading.
        </li>
      </ul>

      <p className="mt-8 text-center text-[#D4AF37] italic font-medium text-sm sm:text-base">
        “Equilíbrio global em cada segundo, estabilidade em cada exchange.  
        A E-Coin cresce com precisão e transparência.”
      </p>
    </div>
  </div>
</section>

{/* SEPARADOR ENTRE SMART POOL E ECGPSE */}
<div className="relative z-10 mt-14 mb-10 flex items-center gap-4">
  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
  <span className="text-[11px] sm:text-xs uppercase tracking-[0.35em] text-[#D4AF37]/80">
    ECGPSE CONTROL BOARD
  </span>
  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
</div>

<section className="relative bg-[#020617] text-white py-20 px-4 sm:px-8 rounded-2xl border border-[#1C2D5A]/50 overflow-hidden">
  <div className="max-w-6xl mx-auto text-center">
    <motion.h2
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#D4AF37] mb-10"
    >
      🌐 E-Coin Global Price Sync Engine — Live Price Balance E-Treasury Dashboard
    </motion.h2>

    {/* Indicadores principais */}
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 text-sm sm:text-base">
      {[
        { label: "E-Coin Global Price", value: "$30.27" },
        { label: "Spread Máx", value: "3.2 %" },
        { label: "Última Atualização", value: "12:41:07" },
        { label: "Status", value: "✅ Equilibrado" },
      ].map((item, i) => (
        <div
          key={i}
          className="rounded-xl bg-black/50 border border-[#D4AF37]/20 p-4"
        >
          <h4 className="text-[#D4AF37] text-xs uppercase tracking-wider mb-1">
            {item.label}
          </h4>
          <p className="font-semibold">{item.value}</p>
        </div>
      ))}
    </div>

    {/* Tabela ao vivo */}
    <div className="overflow-x-auto mb-10">
      <table className="min-w-full text-sm border border-[#D4AF37]/20 rounded-lg overflow-hidden">
        <thead className="bg-[#D4AF37]/10 text-[#D4AF37] uppercase text-xs">
          <tr>
            <th className="p-3">Exchange</th>
            <th className="p-3">Par</th>
            <th className="p-3">Preço Atual</th>
            <th className="p-3">Volume</th>
            <th className="p-3">Diferença (%)</th>
            <th className="p-3">Ação</th>
          </tr>
        </thead>
        <tbody className="text-gray-300">
          {[
            ["Binance", "E-Coin/USDT", "$30.00", "60 %", "−0.7 %", "🔄 Buy-Back"],
            ["PancakeSwap", "E-Coin/BNB", "$30.20", "25 %", "+0.1 %", "—"],
            ["Upbit", "E-Coin/USDT", "$31.00", "15 %", "+3.2 %", "🛑 Sell-Back"],
          ].map((row, i) => (
            <tr
              key={i}
              className="border-t border-[#D4AF37]/10 hover:bg-[#D4AF37]/5 transition"
            >
              {row.map((cell, j) => (
                <td key={j} className="p-3 whitespace-nowrap">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Logs ao vivo */}
    <div className="text-left bg-black/60 border border-[#D4AF37]/20 rounded-xl p-4 font-mono text-xs sm:text-sm h-48 overflow-y-auto">
      <p>[12:41:03] ECGPSE → Desvio detectado: Upbit +3.1 %.</p>
      <p>[12:41:04] Auto Sell-Back executado: 1 000 E-Coin.</p>
      <p>[12:41:06] Spread médio recalculado: 0.9 %.</p>
      <p>[12:41:07] Chainlink Oracle atualizado: novo preço global $30.27.</p>
    </div>
  </div>
</section>

      
    </section> 
{/* SEPARADOR ENTRE ENGINE e SMART POOL */}
<div className="relative z-10 mt-14 mb-10 flex items-center gap-4">
  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
  <span className="text-[11px] sm:text-xs uppercase tracking-[0.35em] text-[#D4AF37]/80">
    Smart Pool
  </span>
  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
</div>

    {/* SUB-CARD DO SMART POOL (CARD DENTRO DO CARD) */}
<div className="relative z-10 w-full max-w-5xl mx-auto rounded-2xl border border-[#D4AF37]/25 bg-black/50 backdrop-blur-md p-6 sm:p-8 shadow-[0_0_0_1px_rgba(212,175,55,0.08)]">
  {/* header do sub-card */}
  <div className="text-center mb-8">
    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#D4AF37]">
      E-Coin Buy-Back Smart Pool
    </h3>

    {/* slogan oficial */}
    <p className="mt-2 text-sm sm:text-base italic text-gray-400 font-medium">
      “De trader para trader, de holder para holder, de investidor em ativos digitais para investidor em ativos digitais.”
    </p>

    <p className="mt-4 text-sm sm:text-base text-gray-300 max-w-2xl mx-auto">
      Bloqueie seus E-Coins em time-locks inteligentes e contribua diretamente
      para a estabilidade do ecossistema.
    </p>

{/* 🧮 SEÇÃO EXPLICATIVA EM TABELA */}
<div className="mt-16 text-gray-300 max-w-5xl mx-auto text-sm sm:text-base border border-[#D4AF37]/30 rounded-2xl overflow-hidden shadow-lg">
  <table className="w-full border-collapse text-left">
    <thead className="bg-[#0D0D0D]/80">
      <tr>
        <th colSpan={2} className="text-[#D4AF37] text-lg font-bold p-4 border-b border-[#D4AF37]/20">
          📘 Como funciona o painel “E-Coin Buy-Back Smart Pool”?
        </th>
      </tr>
    </thead>

    <tbody className="divide-y divide-[#D4AF37]/10 bg-black/50">
      <tr>
        <td className="text-[#D4AF37] font-semibold p-3 align-top w-1/4">🧩 Fluxo completo</td>
        <td className="p-3 space-y-1">
          <ul className="list-decimal list-inside space-y-1">
            <li>O usuário conecta sua wallet (MetaMask, Trust, Binance Wallet).</li>
            <li>Escolhe a quantidade de E-Coin que deseja recomprar <strong>Buy-Back</strong>, com múltiplos Buy-Backs simultâneos (multi-lock, multi-redeem e Claims).</li>
            <li>Seleciona o período de time lock (3 h | 6 h | 12 h | 1 d | 3 d | 7 d).</li>
            <li>Confirma a transação ➡ Smart Contract recebe o valor e mantém os tokens bloqueados.</li>
            <li>Durante o período de bloqueio, o contrato executa um staking interno que gera pequenos rendimentos, separando completamente o principal do lucro (<strong>Buy-Back Profit</strong>).</li>
            <li>Ao final do time lock:</li>
            <li>Parte dos tokens é enviada para o Smart Pool (on-chain) → <strong>efeito de Buy-Back</strong>.</li>
            <li><strong>Lucro partilhado:</strong> Treasury - 50% & Holder - 100% do principal + 100% do lucro = 150% de volta no Claim.</li>
          </ul>
        </td>
      </tr>
</tbody>
  </table>
      
          <p className="italic text-[#D4AF37] font-semibold">
            “Construído por traders. Sustentado por holders. Empoderando os investidores.”
          </p>
          <p className="mt-2 text-gray-400">
            Para mais informações sobre a Buy-Back Engine, clique no botão 👉 <strong>Whitepaper</strong> e vá para:
            🛡️ <em>Seção Oficial — Mecanismo de Buy-Back e Conformidade AML.</em>
          </p>
</div>

    </div>
  </div>

{/* SEPARADOR ENTRE ENGINE e SMART POOL */}
<div className="relative z-10 mt-14 mb-10 flex items-center gap-4">
  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
  <span className="text-[11px] sm:text-xs uppercase tracking-[0.35em] text-[#D4AF37]/80">
    Conectar Carteira
  </span>
  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />
</div>

  {/* área condicional – conexão */}
  {!isConnected ? (
    <div className="flex justify-center">
      <button
        onClick={() => connectors?.[0] && connect({ connector: connectors[0] })}
        className="
          px-8 py-4
          bg-[#D4AF37]
          text-black
          font-semibold
          rounded-xl
          hover:scale-105
          transition
        "
      >
      🔗 Conectar Carteira
    </button>
  </div>
) : (

              <div className="max-w-md mx-auto bg-black/60 p-6 rounded-xl border border-gray-800 text-left">
                <label className="block text-sm mb-1">⏱ Time-Lock</label>
                <select
                  className="w-full mb-4 p-2 bg-black border border-gray-700 text-[#D4AF37]"
                  value={timeLock}
                  onChange={(e) => setTimeLock(e.target.value)}
                >
                  <option value="3">3 horas</option>
                  <option value="6">6 horas</option>
                  <option value="12">12 horas</option>
                  <option value="24">1 dia</option>
                </select>

                <label className="block text-sm mb-1">💰 Quantidade</label>
                <input
                  type="number"
                  className="w-full mb-4 p-2 bg-black border border-gray-700"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />

                <button
                  onClick={handleBuyBack}
                  disabled={loading}
                  className="w-full py-3 bg-[#D4AF37] text-black font-bold rounded-lg"
                >
                  {loading ? "Processando…" : "🚀 Executar Buy-Back"}
                </button>

                {txHash && (
                  <p className="text-xs mt-3 text-gray-400">
                    <a
                      href={`https://bscscan.com/tx/${txHash}`}
                      target="_blank"
                      className="underline"
                    >
                      Ver no BscScan
                    </a>
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      
    </section>
  );
}

