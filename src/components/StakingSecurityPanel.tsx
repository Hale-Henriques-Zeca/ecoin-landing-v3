"use client";

import { useEffect, useState } from "react";
import { useAccount, useReadContract } from "wagmi";
import { CONTRACTS } from "@/lib/contracts";
import { streamingStakingAbi } from "@/lib/abis/streamingStakingAbi";
import { bsc } from "wagmi/chains";


export default function StakingSecurityPanel() {

const { address } = useAccount();


const { data: lastClaim } = useReadContract({
  address: CONTRACTS.STREAMING_STAKING,
  abi: streamingStakingAbi,
  functionName: "lastClaim",
  args: address ? [address] : undefined,
chainId: bsc.id,
query: {
  enabled: !!address
}
});

const { data: stakeTimestamp } = useReadContract({
  address: CONTRACTS.STREAMING_STAKING,
  abi: streamingStakingAbi,
  functionName: "stakeTimestamp",
  args: address ? [address] : undefined,
chainId: bsc.id,
query: {
  enabled: !!address
}
});

const { data: lastStream } = useReadContract({
 address: CONTRACTS.STREAMING_STAKING,
 abi: streamingStakingAbi,
 functionName: "lastStream",
});

const { data: claimCooldown } = useReadContract({
 address: CONTRACTS.STREAMING_STAKING,
 abi: streamingStakingAbi,
 functionName: "CLAIM_COOLDOWN",
});

const { data: warmup } = useReadContract({
 address: CONTRACTS.STREAMING_STAKING,
 abi: streamingStakingAbi,
 functionName: "MIN_STAKE_TIME",
});

const { data: streamRate } = useReadContract({
 address: CONTRACTS.STREAMING_STAKING,
 abi: streamingStakingAbi,
 functionName: "STREAM_RATE",
});

const [now,setNow] = useState(Math.floor(Date.now()/1000));

useEffect(()=>{

 const t=setInterval(()=>{
  setNow(Math.floor(Date.now()/1000));
 },1000);

 return ()=>clearInterval(t);

},[]);

function format(sec:number){

 if(sec<=0) return "Ready";

 const m=Math.floor(sec/60);
 const s=sec%60;

 return `${m}m ${s}s`;

}

function progress(left:number,total:number){

 if(total===0) return 0;

 const elapsed = total-left;

 const pct = (elapsed/total)*100;

 return Math.max(0,Math.min(100,pct));

} 


const claimEnd =
 lastClaim && claimCooldown
 ? Number(lastClaim)+Number(claimCooldown)
 : 0;

const warmupEnd =
 stakeTimestamp && warmup
 ? Number(stakeTimestamp)+Number(warmup)
 : 0;

const streamEnd =
 lastStream && streamRate
 ? Number(lastStream)+Number(streamRate)
 : 0;

const claimLeft = claimEnd-now;
const warmupLeft = warmupEnd-now;
const streamLeft = streamEnd-now;

const claimTotal = claimCooldown ? Number(claimCooldown) : 600;
const warmupTotal = warmup ? Number(warmup) : 300;
const streamTotal = streamRate ? Number(streamRate) : 3600;

const claimProgress = progress(claimLeft,claimTotal);
const warmupProgress = progress(warmupLeft,warmupTotal);
const streamProgress = progress(streamLeft,streamTotal);


return(

<div className="bg-black/40 backdrop-blur-md border border-[#D4AF37]/20 rounded-xl p-5 space-y-5">

<h4 className="text-[#D4AF37] text-sm font-semibold">
Staking Security Timers
</h4>

{/* CLAIM COOLDOWN */}

<div className="space-y-2">

<div className="flex justify-between text-xs">

<span className="text-gray-400">
Claim Cooldown
</span>

<span className="text-yellow-400 font-semibold">
{format(claimLeft)}
</span>

</div>

<div className="w-full h-2 bg-black/60 rounded-full overflow-hidden">

<div
className="h-2 bg-gradient-to-r from-yellow-400 to-orange-500 transition-all"
style={{width:`${claimProgress}%`}}
/>

</div>

</div>


{/* WARMUP */}

<div className="space-y-2">

<div className="flex justify-between text-xs">

<span className="text-gray-400">
Stake Warm-up
</span>

<span className="text-blue-400 font-semibold">
{format(warmupLeft)}
</span>

</div>

<div className="w-full h-2 bg-black/60 rounded-full overflow-hidden">

<div
className="h-2 bg-gradient-to-r from-blue-400 to-cyan-400 transition-all"
style={{width:`${warmupProgress}%`}}
/>

</div>

</div>


{/* STREAM */}

<div className="space-y-2">

<div className="flex justify-between text-xs">

<span className="text-gray-400">
Reward Stream
</span>

<span className="text-green-400 font-semibold">
{format(streamLeft)}
</span>

</div>

<div className="w-full h-2 bg-black/60 rounded-full overflow-hidden">

<div
className="h-2 bg-gradient-to-r from-green-400 to-[#D4AF37] transition-all"
style={{width:`${streamProgress}%`}}
/>

</div>

</div>

</div>

);

}