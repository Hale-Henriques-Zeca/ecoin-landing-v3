"use client";

import { useEffect, useState } from "react";
import { useReadContract } from "wagmi";
import { formatUnits } from "viem";
import { CONTRACTS } from "@/lib/contracts";
import { corporateSwapAbi } from "@/lib/abis/corporateSwapAbi";

export default function LiquidityWindow() {

const { data: epochVolume } = useReadContract({
 address: CONTRACTS.SWAP,
 abi: corporateSwapAbi,
 functionName: "currentEpochVolume",
 query:{refetchInterval:5000}
});

const { data: epochLimit } = useReadContract({
 address: CONTRACTS.SWAP,
 abi: corporateSwapAbi,
 functionName: "currentEpochLimit",
 query:{refetchInterval:5000}
});

const { data: epochStart } = useReadContract({
 address: CONTRACTS.SWAP,
 abi: corporateSwapAbi,
 functionName: "epochStart",
 query:{refetchInterval:5000}
});

const [timeLeft,setTimeLeft] = useState(0);

useEffect(()=>{

 if(!epochStart) return;

 const timer = setInterval(()=>{

  const now = Math.floor(Date.now()/1000);
  const end = Number(epochStart)+3600;
  const diff = end-now;

  setTimeLeft(diff>0?diff:0);

 },1000);

 return ()=>clearInterval(timer);

},[epochStart]);

const usedUSD = epochVolume
 ? Number(formatUnits(epochVolume as bigint,6))
 : 0;

const limitUSD = epochLimit
 ? Number(formatUnits(epochLimit as bigint,18))
 : 0;

const remainingUSD = Math.max(limitUSD-usedUSD,0);

const progress =
 limitUSD>0
 ? Math.min((usedUSD/limitUSD)*100,100)
 : 0;

function formatTime(sec:number){

 const m=Math.floor(sec/60);
 const s=sec%60;

 return `${m}m ${s}s`;

}

const danger = progress >= 90;

return(

<div className="mt-6 bg-black/40 backdrop-blur-md border border-[#D4AF37]/20 rounded-xl p-5">

<h4 className="text-[#D4AF37] font-semibold mb-4">
Liquidity Window
</h4>

<div className="w-full h-3 bg-black/60 rounded-full overflow-hidden">

<div
className={`h-3 transition-all duration-500 ${
danger
? "bg-gradient-to-r from-red-500 to-yellow-400 animate-pulse"
: "bg-gradient-to-r from-green-400 to-[#D4AF37]"
}`}
style={{width:`${progress}%`}}
/>

</div>

<div className="flex justify-between text-xs text-gray-400 mt-3">

<span>Used: ${usedUSD.toLocaleString()}</span>

<span>Available: ${remainingUSD.toLocaleString()}</span>

</div>

<div className="flex justify-between text-xs text-gray-400 mt-2">

<span>Limit: ${limitUSD.toLocaleString()} / hour</span>

<span>Next Release: {formatTime(timeLeft)}</span>

</div>

{danger && (

<div className="mt-3 text-red-400 text-xs animate-pulse">

⚠ High liquidity usage — window almost full

</div>

)}

</div>

)

}