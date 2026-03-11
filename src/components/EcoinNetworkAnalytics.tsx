"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Users, Activity, Coins } from "lucide-react";

export default function EcoinNetworkAnalytics(){

const [stats,setStats] = useState({
totalInviters:0,
totalRewards:0,
totalBindings:0
});

useEffect(()=>{

// Aqui futuramente vamos ler eventos do contrato
// ReferralBound
// RewardRecorded
// RewardClaimed

setStats({
totalInviters:128,
totalRewards:8421,
totalBindings:356
});

},[]);

return(

<div className="bg-black/40 border border-white/10 rounded-2xl p-8 mt-20">

<h2 className="text-3xl text-[#D4AF37] font-semibold text-center mb-10">
📊 E-Coin Network Intelligence
</h2>

<div className="grid md:grid-cols-3 gap-6 text-center">

<div className="bg-black/60 border border-white/10 rounded-xl p-6">
<Users className="mx-auto text-[#3B82F6] mb-3"/>
<p className="text-sm text-gray-400">Total Bindings</p>
<p className="text-2xl font-bold">{stats.totalBindings}</p>
</div>

<div className="bg-black/60 border border-white/10 rounded-xl p-6">
<Activity className="mx-auto text-[#22C55E] mb-3"/>
<p className="text-sm text-gray-400">Active Inviters</p>
<p className="text-2xl font-bold">{stats.totalInviters}</p>
</div>

<div className="bg-black/60 border border-white/10 rounded-xl p-6">
<Coins className="mx-auto text-[#F59E0B] mb-3"/>
<p className="text-sm text-gray-400">Referral Rewards</p>
<p className="text-2xl font-bold">{stats.totalRewards} ECO</p>
</div>

</div>

</div>

)

}