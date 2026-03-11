"use client";

import { useState } from "react";
import { useReadContract } from "wagmi";
import { priceEngineAbi } from "@/lib/abis/priceEngineAbi";
import { CONTRACTS } from "@/lib/contracts";
import { formatUnits } from "viem";

export default function EcoinFutureSimulator(){

const { data: ecoinPriceRaw } = useReadContract({
 address: CONTRACTS.PRICE_ENGINE,
 abi: priceEngineAbi,
 functionName: "ecoinPriceUSDT",
 query:{ refetchInterval:5000 }
})

const ecoinPrice =
typeof ecoinPriceRaw === "bigint"
  ? Number(formatUnits(ecoinPriceRaw, 18))
  : 0

const [investment,setInvestment] = useState(100)

const projections = [
{ price:10 , label:"Growth Scenario" },
{ price:50 , label:"Mass Adoption" },
{ price:100 , label:"Global Scale" }
]

const coins = ecoinPrice ? investment / ecoinPrice : 0

return(

<section className="w-full max-w-5xl mx-auto mt-20 space-y-10">

<div className="text-center space-y-3">

<h2 className="text-3xl font-bold text-[#D4AF37]">
💎 What if you invested in E-Coin today?
</h2>

<p className="text-gray-400 max-w-xl mx-auto">
Explore possible future scenarios for E-Coin based on the current price from our Price Engine.
</p>

</div>


{/* Investment Buttons */}

<div className="flex justify-center gap-4">

{[100,500,1000].map(v=>(
<button
key={v}
onClick={()=>setInvestment(v)}
className={`px-6 py-3 rounded-lg border transition
${investment===v
? "bg-[#D4AF37] text-black border-[#D4AF37]"
: "border-gray-700 text-gray-300 hover:border-[#D4AF37]"
}`}
>
${v}
</button>
))}

</div>


{/* Current Price */}

<div className="text-center text-gray-400">

Current price of the E-Coin:
<span className="text-[#D4AF37] font-semibold ml-2">
${ecoinPrice.toFixed(6)}
</span>

</div>


{/* Projections */}

<div className="grid md:grid-cols-3 gap-6">

{projections.map(p=>{

const futureValue = coins * p.price

return(

<div
key={p.price}
className="bg-[#0D0D0D] border border-gray-800 rounded-xl p-6 text-center space-y-3"
>

<p className="text-gray-400 text-sm">
Scenario
</p>

<p className="text-[#D4AF37] font-semibold">
$1 → ${p.price}
</p>

<p className="text-gray-500 text-sm">
{p.label}
</p>

<p className="text-green-400 text-2xl font-bold">
${futureValue.toLocaleString()}
</p>

</div>

)

})}

</div>

</section>

)

}