"use client";

import { useEffect, useState } from "react";
import { useReadContract } from "wagmi";
import { CONTRACTS } from "@/lib/contracts";
import { streamingStakingAbi } from "@/lib/abis/streamingStakingAbi";

export default function RewardStreamIndicator(){

const { data:lastStream } = useReadContract({
 address:CONTRACTS.STREAMING_STAKING,
 abi:streamingStakingAbi,
 functionName:"lastStream"
});

const { data:streamRate } = useReadContract({
 address:CONTRACTS.STREAMING_STAKING,
 abi:streamingStakingAbi,
 functionName:"STREAM_RATE"
});

const [now,setNow] = useState(Math.floor(Date.now()/1000));

useEffect(()=>{

 const t=setInterval(()=>{
  setNow(Math.floor(Date.now()/1000));
 },1000);

 return ()=>clearInterval(t);

},[]);

const streamEnd =
 lastStream && streamRate
 ? Number(lastStream)+Number(streamRate)
 : 0;

const streamLeft = streamEnd-now;

const total = streamRate ? Number(streamRate) : 3600;

const progress =
 streamLeft<=0
 ? 100
 : ((total-streamLeft)/total)*100;

function format(sec:number){

 if(sec<=0) return "Streaming active";

 const m=Math.floor(sec/60);
 const s=sec%60;

 return `${m}m ${s}s`;

}

return(

<div className="bg-black/50 border border-[#D4AF37]/20 rounded-xl p-4 space-y-3">

<p className="text-xs text-gray-400">
Next Reward Stream Distribution
</p>

<div className="h-2 w-full bg-black/60 rounded-full overflow-hidden">

<div
className="h-2 bg-gradient-to-r from-[#D4AF37] to-[#3B82F6] transition-all"
style={{width:`${progress}%`}}
/>

</div>

<p className="text-[11px] text-green-400">
{format(streamLeft)}
</p>

</div>

);

}