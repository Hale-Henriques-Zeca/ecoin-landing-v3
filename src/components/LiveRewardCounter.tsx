"use client";

import { useEffect, useState } from "react";

export default function LiveRewardCounter({pending}:{pending:number}){

const [live,setLive] = useState(pending);

useEffect(()=>{

 setLive(pending);

},[pending]);

useEffect(()=>{

 const t=setInterval(()=>{

  setLive(v=>v+pending*0.0002);

 },1000);

 return ()=>clearInterval(t);

},[pending]);

return(

<div className="bg-black/50 border border-green-500/20 rounded-xl p-4 text-center">

<p className="text-xs text-gray-400">
Live Reward Counter
</p>

<p className="text-lg font-bold text-green-400">
{live.toFixed(6)} ECOIN
</p>

<p className="text-[11px] text-gray-500">
Streaming rewards accumulating live
</p>

</div>

);

}