"use client";

import { motion } from "framer-motion";
import { Trophy, Users, Coins, Star } from "lucide-react";

const leaders = [
  {
    name: "Eden Pioneer",
    wallet: "0x92A...F31",
    members: 124,
    rewards: 842,
    score: 98
  },
  {
    name: "Genesis Builder",
    wallet: "0xAB3...921",
    members: 97,
    rewards: 620,
    score: 91
  },
  {
    name: "Network Architect",
    wallet: "0xCC4...122",
    members: 81,
    rewards: 505,
    score: 87
  },
  {
    name: "Community Captain",
    wallet: "0xF91...332",
    members: 60,
    rewards: 390,
    score: 80
  }
];

export default function EcoinLeaderBoard(){

return(

<div className="bg-black/40 border border-white/10 rounded-2xl p-8 mt-20">

{/* TITLE */}

<h2 className="text-3xl font-semibold text-[#D4AF37] mb-8 text-center">
🏆 Global Leaderboard — E-Coin Network
</h2>

<p className="text-gray-400 text-center max-w-3xl mx-auto mb-10">
Os líderes que mais contribuem para o crescimento da rede
E-Coin são reconhecidos publicamente.  
A classificação é baseada no impacto real dentro do ecossistema.
</p>


{/* GRID */}

<div className="grid md:grid-cols-2 gap-6">

{leaders.map((leader,i)=>(

<motion.div
key={i}
initial={{opacity:0,y:20}}
animate={{opacity:1,y:0}}
transition={{delay:i*0.1}}
className="bg-black/60 border border-white/10 rounded-xl p-6 hover:border-[#D4AF37]/40"
>

<div className="flex items-center justify-between mb-4">

<div className="flex items-center gap-3">

<Trophy className="text-[#D4AF37]" size={26}/>

<h3 className="font-semibold text-lg">
#{i+1} {leader.name}
</h3>

</div>

<span className="text-gray-500 text-sm">
{leader.wallet}
</span>

</div>


<div className="grid grid-cols-3 gap-4 text-center">

<div>

<Users className="mx-auto text-[#3B82F6]" size={20}/>

<p className="text-sm text-gray-400 mt-1">
Members
</p>

<p className="font-semibold">
{leader.members}
</p>

</div>


<div>

<Coins className="mx-auto text-[#22C55E]" size={20}/>

<p className="text-sm text-gray-400 mt-1">
Rewards
</p>

<p className="font-semibold">
{leader.rewards} ECO
</p>

</div>


<div>

<Star className="mx-auto text-[#F59E0B]" size={20}/>

<p className="text-sm text-gray-400 mt-1">
Score
</p>

<p className="font-semibold">
{leader.score}
</p>

</div>

</div>

</motion.div>

))}

</div>

</div>

)

}