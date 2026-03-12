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

      
      
    </section> 



    
 


            
          </div>
        </div>
      
    </section>
  );
}

