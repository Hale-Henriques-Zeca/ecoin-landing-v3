"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Trophy, Users, Coins } from "lucide-react";
import { createPublicClient, http } from "viem";
import { bsc } from "viem/chains";

const client = createPublicClient({
 chain: bsc,
 transport: http()
});

type Leader = {
 address:string
 members:number
 rewards:number
};

export default function EcoinOnchainLeaderboard(){

const [leaders,setLeaders] = useState<Leader[]>([]);

useEffect(()=>{

async function load(){

/*
Aqui no futuro vamos indexar eventos
ReferralBound
ReferralRewardPaid
ClaimProcessed
*/

const mock:Leader[] = [
{
address:"0x92A...F31",
members:124,
rewards:820
},
{
address:"0xAB1...922",
members:97,
rewards:630
},
{
address:"0x7F1...812",
members:80,
rewards:480
}
];

setLeaders(mock);

}

load();

},[]);

return(

<div className="bg-black/40 border border-white/10 rounded-2xl p-8 mt-20">

<h2 className="text-3xl text-[#D4AF37] font-semibold text-center mb-8">
🏆 Hall of Fame — E-Coin Network
</h2>

<div className="grid md:grid-cols-3 gap-6">

{leaders.map((leader,i)=>(
<motion.div
key={i}
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
transition={{delay:i*0.1}}
className="bg-black/60 border border-white/10 rounded-xl p-6 text-center"
>

<Trophy className="mx-auto text-[#D4AF37] mb-3"/>

<p className="text-sm text-gray-400">
Leader Wallet
</p>

<p className="text-xs text-gray-300 break-all">
{leader.address}
</p>

<div className="grid grid-cols-2 gap-4 mt-4">

<div>

<Users className="mx-auto text-[#3B82F6]"/>

<p className="text-xs text-gray-400">
Members
</p>

<p className="font-semibold">
{leader.members}
</p>

</div>

<div>

<Coins className="mx-auto text-[#22C55E]"/>

<p className="text-xs text-gray-400">
Rewards
</p>

<p className="font-semibold">
{leader.rewards}
</p>

</div>

</div>

</motion.div>
))}

</div>

</div>

);

}