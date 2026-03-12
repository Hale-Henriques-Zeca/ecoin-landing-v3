"use client";

import { useEffect, useState } from "react";
import { useAccount, useConnect } from "wagmi";
import { formatUnits } from "viem";
import { motion } from "framer-motion";

import { CONTRACTS } from "@/lib/contracts";
import { priceEngineAbi } from "@/lib/abis/priceEngineAbi";
import ECoinChart from "@/components/ECoinChart";
import { useReadContract } from "wagmi";
import { erc20Abi } from "viem";

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

export default function Chart () {

  const [price, setPrice] = useState(0);
const [priceChange, setPriceChange] = useState(0);
const [marketCap, setMarketCap] = useState(0);
const [volume, setVolume] = useState(0);
const [lastUpdate, setLastUpdate] = useState("—");

  const { isConnected } = useAccount();
  const { connect, connectors } = useConnect();

 

const { data: priceRaw } = useReadContract({
address: CONTRACTS.PRICE_ENGINE,
abi: priceEngineAbi,
functionName: "ecoinPriceUSDT",
query: { refetchInterval: 5000 }
});

const { data: lastUpdateRaw } = useReadContract({
address: CONTRACTS.PRICE_ENGINE,
abi: priceEngineAbi,
functionName: "lastUpdate",
query: { refetchInterval: 5000 }
});

const { data: changeRaw } = useReadContract({
address: CONTRACTS.PRICE_ENGINE,
abi: priceEngineAbi,
functionName: "priceChangePercent",
query: { refetchInterval: 5000 }
});

const { data: supplyRaw } = useReadContract({
address: CONTRACTS.ECOIN,
abi: erc20Abi,
functionName: "totalSupply",
});

const { data: volumeRaw } = useReadContract({
address: CONTRACTS.ECOIN,
abi: erc20Abi,
functionName: "balanceOf",
args:[CONTRACTS.FEE_COLLECTOR]
});

useEffect(() => {

if (priceRaw)
setPrice(Number(formatUnits(priceRaw as bigint,18)));

if (changeRaw)
setPriceChange(Number(changeRaw));

if (supplyRaw && priceRaw){

const price = Number(formatUnits(priceRaw as bigint,18));
const supply = Number(formatUnits(supplyRaw as bigint,18));

setMarketCap(price * supply);
}

if (volumeRaw)
setVolume(Number(formatUnits(volumeRaw as bigint,18)));

if (lastUpdateRaw){

const date = new Date(Number(lastUpdateRaw) * 1000);
setLastUpdate(date.toLocaleTimeString());

}

},[priceRaw,changeRaw,supplyRaw,volumeRaw,lastUpdateRaw]);


  return (

<section className="relative bg-white py-24">

<div className="max-w-6xl mx-auto px-6">

<div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-10 text-black shadow-xl">

{/* TITLE */}

<div className="text-center mb-12">

<span className="text-xs tracking-[0.35em] uppercase text-[#D4AF37] block mb-4">
ECP Panel
</span>

<h2 className="text-4xl md:text-5xl font-semibold">
E-Coin Price <span className="text-[#D4AF37]">(Live)</span>
</h2>

</div>

{/* PRICE */}

<motion.div
initial={{ opacity:0, scale:0.9 }}
animate={{ opacity:1, scale:1 }}
transition={{ duration:1 }}
className="text-center font-mono font-bold text-6xl md:text-7xl text-[#D4AF37]"
>

{price ? (
<>
{price.toFixed(6)}
<span className="text-3xl align-super ml-2">USD</span>
</>
) : (
<span className="text-gray-400 text-3xl">Loading...</span>
)}

</motion.div>

{/* INFO GRID */}

<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-12 text-sm">

{[
{
label:"Variação",
value:`${priceChange ? priceChange.toFixed(2) : "0"} %`
},
{
label:"Volume Protocol",
value:`$${volume.toLocaleString()}`
},
{
label:"Market Cap",
value:`$${marketCap.toLocaleString()}`
},
{
label:"Última Atualização",
value:lastUpdate
},
{
label:"Sincronização",
value:"BSC Mainnet"
},
{
label:"Fonte",
value:"GlobalPriceEngine"
},
].map((item,i)=>(

<div
key={i}
className="rounded-xl border border-gray-200 bg-gray-50 py-3 px-4"
>

<h4 className="text-[#D4AF37] text-[11px] uppercase tracking-widest mb-1">
{item.label}
</h4>

<p className="font-semibold text-gray-700">
{item.value}
</p>

</div>

))}

</div>

{/* CHART */}

<div className="mt-12">

<ECoinChart />

</div>

{/* LINK */}

<div className="mt-10 text-center text-sm">

<a
href="https://pancakeswap.finance/swap?chain=bsc&inputCurrency=0xDf69235019cc416dd5Be75dfc0eDc922aB4b5964&outputCurrency=0x55d398326f99059fF775485246999027B3197955"
target="_blank"
className="text-[#D4AF37] underline hover:text-black transition"
>

Ver par E-Coin / USDT na PancakeSwap →

</a>

</div>

</div>

</div>

</section>

  );
}