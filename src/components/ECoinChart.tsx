"use client";

import { useEffect, useRef, useState } from "react";
import { createChart, ColorType, CandlestickSeries } from "lightweight-charts";
import { JsonRpcProvider, Contract, formatUnits } from "ethers";

import { CONTRACTS } from "@/lib/contracts";
import { priceEngineAbi } from "@/lib/abis/priceEngineAbi";

export default function ECoinChart() {

const containerRef = useRef<HTMLDivElement | null>(null);
const chartRef = useRef<any>(null);
const seriesRef = useRef<any>(null);

const [candles,setCandles] = useState<any[]>([]);

/* ---------- CREATE CHART ---------- */

useEffect(()=>{

const container = containerRef.current;
if(!container) return;

const chart = createChart(container,{
width:container.clientWidth,
height:520,

layout:{
background:{ type:ColorType.Solid, color:"#0b0e14"},
textColor:"#d1d4dc"
},

grid:{
vertLines:{ color:"rgba(255,255,255,0.05)" },
horzLines:{ color:"rgba(255,255,255,0.05)" }
},

rightPriceScale:{ borderColor:"rgba(255,255,255,0.1)" },
timeScale:{ borderColor:"rgba(255,255,255,0.1)" }

});

chartRef.current = chart;

seriesRef.current = chart.addSeries(CandlestickSeries,{
upColor:"#22c55e",
downColor:"#ef4444",
borderUpColor:"#22c55e",
borderDownColor:"#ef4444",
wickUpColor:"#22c55e",
wickDownColor:"#ef4444",
});

chart.timeScale().fitContent();

return ()=> chart.remove();

},[]);

/* ---------- FETCH PRICE FROM ENGINE ---------- */

useEffect(()=>{

async function fetchPrice(){

const provider = new JsonRpcProvider(
"https://bsc-dataseed.binance.org/"
);

const contract = new Contract(
CONTRACTS.PRICE_ENGINE,
priceEngineAbi,
provider
);

let raw;

try{
raw = await contract.ecoinPriceUSDT();
}catch(e){
console.log("price engine error",e);
return;
}

const price = Number(formatUnits(raw,18));

const time = Math.floor(Date.now()/1000);

const candle = {
time,
open:price,
high:price * 1.002,
low:price * 0.998,
close:price
};

seriesRef.current.update(candle);

}

fetchPrice();

const interval = setInterval(fetchPrice,15000);

return ()=> clearInterval(interval);

},[]);

/* ---------- UPDATE CHART ---------- */

useEffect(()=>{

if(!seriesRef.current || candles.length===0) return;

seriesRef.current.setData(candles);

},[candles]);

return(

<div className="w-full h-full p-4">

<div
ref={containerRef}
className="w-full h-[520px] rounded-xl border border-white/10"
/>

</div>

);

}