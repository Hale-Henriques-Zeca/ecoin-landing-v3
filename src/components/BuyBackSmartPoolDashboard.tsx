"use client";

import { useAccount, useConnect, useReadContract } from "wagmi";
import { motion } from "framer-motion";
import { formatUnits } from "viem";

import { priceEngineAbi } from "@/lib/abis/priceEngineAbi";
import { treasuryAbi } from "@/lib/abis/treasuryAbi";
import { stakingStreamingAbi } from "@/lib/abis/stakingStreamingAbi";
import { erc20Abi } from "@/lib/abis/erc20Abi";

import { CONTRACTS } from "@/lib/contracts";

export default function BuyBackSmartPoolDashboard() {

const { isConnected } = useAccount();
const { connect, connectors } = useConnect();


/* PRICE ENGINE */

const { data: priceRaw } = useReadContract({
address: CONTRACTS.PRICE_ENGINE,
abi: priceEngineAbi,
functionName: "ecoinPriceUSDT",
query:{ refetchInterval:5000 }
});


/* LAST UPDATE */

const { data: lastUpdateRaw } = useReadContract({
address: CONTRACTS.PRICE_ENGINE,
abi: priceEngineAbi,
functionName: "lastUpdate",
query:{ refetchInterval:5000 }
});


/* TREASURY */

const { data: treasuryBalance } = useReadContract({
address: CONTRACTS.TREASURY,
abi: treasuryAbi,
functionName:"balanceOf",
args:[CONTRACTS.ECOIN],
query:{ refetchInterval:10000 }
});


/* STAKING */

const { data: totalStaked } = useReadContract({
address: CONTRACTS.STAKING,
abi: stakingStreamingAbi,
functionName:"totalStaked"
});


/* SUPPLY */

const { data: supply } = useReadContract({
address: CONTRACTS.ECOIN,
abi: erc20Abi,
functionName:"totalSupply"
});


/* BUYBACK BALANCE */

const { data: buybackBalance } = useReadContract({
address: CONTRACTS.ECOIN,
abi: erc20Abi,
functionName:"balanceOf",
args:[CONTRACTS.FEE_COLLECTOR]
});


/* FORMAT DATA */

const price = priceRaw
? Number(formatUnits(priceRaw as bigint,18)).toFixed(3)
: "--";


const treasury = treasuryBalance
? Number(formatUnits(treasuryBalance as bigint,18)).toLocaleString()
: "--";

const pool = buybackBalance
? Number(formatUnits(buybackBalance as bigint,18)).toLocaleString()
: "--";


const stakingRatio =
totalStaked && supply
? ((Number(totalStaked) / Number(supply)) * 100).toFixed(2)
: "--";


const lastUpdate = lastUpdateRaw
? new Date(Number(lastUpdateRaw) * 1000).toLocaleTimeString()
: "—";


return(

<section className="relative bg-black text-white py-24 px-6 overflow-hidden">


{/* BACKGROUND */}

<div className="absolute inset-0 -z-10">

<div className="absolute top-0 left-1/2 w-[700px] h-[700px] -translate-x-1/2 bg-[#D4AF37]/10 rounded-full blur-[180px]" />

<div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#1C2D5A]/30 rounded-full blur-[120px]" />

</div>


<div className="max-w-7xl mx-auto">


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


</div>




</section>

)

}