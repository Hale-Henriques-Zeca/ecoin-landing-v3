"use client";

import { useState, useEffect } from "react";
import { useAccount, useConnect } from "wagmi";
import { BrowserProvider, Contract, parseUnits } from "ethers";
import { motion } from "framer-motion";

export default function BuyBackSmartPoolSection() {

const [mounted,setMounted] = useState(false)

useEffect(()=>{
setMounted(true)
},[])

const { isConnected } = useAccount();
const { connect, connectors } = useConnect();

const [amount,setAmount] = useState("");
const [timeLock,setTimeLock] = useState("3");
const [txHash,setTxHash] = useState("");
const [loading,setLoading] = useState(false);

const [subscribed,setSubscribed] = useState(false);
const [contactMethod,setContactMethod] = useState("email");
const [email,setEmail] = useState("");
const [phone,setPhone] = useState("");

/* SIMULATED DASHBOARD DATA */

const [price,setPrice] = useState(1.00);
const [treasury,setTreasury] = useState(1200000);
const [pool,setPool] = useState(450000);
const [holders,setHolders] = useState(1284);
const [buybacks,setBuybacks] = useState(92);

/* animated price engine */

useEffect(()=>{

const interval = setInterval(()=>{

setPrice(p => Number((p + (Math.random()*0.02 - 0.01)).toFixed(3)))

},4000)

return ()=>clearInterval(interval)

},[])



const CONTRACT_ADDRESS = "0xYourContractAddress";

const ABI = [
"function buyBack(uint256 _amount,uint256 _hours) external"
];

const handleSubmit = (e:React.FormEvent)=>{
e.preventDefault()
setSubscribed(true)
}

async function handleBuyBack(){

if(!isConnected) return alert("Conecte a carteira primeiro!")

if(typeof window === "undefined" || !("ethereum" in window)){
return alert("Carteira não encontrada")
}

try{

setLoading(true)

const provider = new BrowserProvider((window as any).ethereum)
const signer = await provider.getSigner()

const contract = new Contract(CONTRACT_ADDRESS,ABI,signer)

const amountInWei = parseUnits(amount || "0",18)

const tx = await contract.buyBack(amountInWei,Number(timeLock))
const receipt = await tx.wait()

setTxHash(receipt.hash)

setBuybacks(v=>v+1)
setPool(v=>v + Number(amount))

setLoading(false)

}catch(e){

console.error(e)
setLoading(false)
alert("Erro ao executar BuyBack")

}

}

if(!mounted) return null


return(

<section className="relative min-h-screen bg-black text-white py-24 px-6 overflow-hidden">

{/* BACKGROUND */}

<div className="absolute inset-0 -z-10">

<div className="absolute top-0 left-1/2 w-[700px] h-[700px] -translate-x-1/2 bg-[#D4AF37]/10 rounded-full blur-[180px]" />

<div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#1C2D5A]/30 rounded-full blur-[120px]" />

</div>


<div className="max-w-7xl mx-auto">

{/* HEADER */}

<motion.h1
initial={{opacity:0,y:-20}}
animate={{opacity:1,y:0}}
transition={{duration:1}}
className="text-center text-4xl md:text-5xl font-bold text-[#D4AF37] mb-6"
>

E-Coin Buy-Back Smart Pool

</motion.h1>


<p className="text-center text-gray-400 mb-14 max-w-3xl mx-auto">

Infraestrutura institucional para estabilização de preço, liquidez coletiva e valorização sustentável do ecossistema E-Coin.

</p>


{/* DASHBOARD */}

<div className="grid md:grid-cols-5 gap-6 mb-16">

{/* PRICE */}

<div className="bg-black/60 border border-[#D4AF37]/30 rounded-xl p-6 backdrop-blur">

<p className="text-gray-400 text-sm">E-Coin Price</p>

<p className="text-2xl font-bold text-[#D4AF37]">${price}</p>

<p className="text-xs text-gray-500 mt-1">ECP Engine</p>

</div>


{/* TREASURY */}

<div className="bg-black/60 border border-[#D4AF37]/30 rounded-xl p-6 backdrop-blur">

<p className="text-gray-400 text-sm">Treasury</p>

<p className="text-xl font-bold">${treasury.toLocaleString("en-US")}</p>

<p className="text-xs text-gray-500 mt-1">Reserve Liquidity</p>

</div>


{/* POOL */}

<div className="bg-black/60 border border-[#D4AF37]/30 rounded-xl p-6 backdrop-blur">

<p className="text-gray-400 text-sm">BuyBack Pool</p>

<p className="text-xl font-bold">{pool.toLocaleString("en-US")} E-Coin</p>

<p className="text-xs text-gray-500 mt-1">Locked Liquidity</p>

</div>


{/* HOLDERS */}

<div className="bg-black/60 border border-[#D4AF37]/30 rounded-xl p-6 backdrop-blur">

<p className="text-gray-400 text-sm">Holders</p>

<p className="text-xl font-bold">{holders}</p>

<p className="text-xs text-gray-500 mt-1">Network Investors</p>

</div>


{/* BUYBACKS */}

<div className="bg-black/60 border border-[#D4AF37]/30 rounded-xl p-6 backdrop-blur">

<p className="text-gray-400 text-sm">BuyBack Events</p>

<p className="text-xl font-bold">{buybacks}</p>

<p className="text-xs text-gray-500 mt-1">Smart Executions</p>

</div>

</div>



{/* ALERT SUBSCRIPTION */}

<div className="max-w-lg mx-auto mb-20 bg-black/70 border border-[#D4AF37]/30 rounded-2xl p-8 backdrop-blur">

{!subscribed ?(

<>

<h3 className="text-xl font-semibold text-[#D4AF37] mb-4 text-center">

Escolha como deseja receber seus alertas 📡

</h3>

<form onSubmit={handleSubmit} className="flex flex-col gap-4">

<div className="flex justify-center gap-6">

<label className="flex items-center gap-2">

<input type="radio" value="email" checked={contactMethod==="email"} onChange={()=>setContactMethod("email")} />

Email

</label>

<label className="flex items-center gap-2">

<input type="radio" value="sms" checked={contactMethod==="sms"} onChange={()=>setContactMethod("sms")} />

SMS

</label>

</div>

{contactMethod==="email" ?(

<input
type="email"
placeholder="Seu email"
value={email}
onChange={e=>setEmail(e.target.value)}
required
className="p-3 rounded-lg bg-black border border-gray-700"
/>

):( 

<input
type="tel"
placeholder="+258..."
value={phone}
onChange={e=>setPhone(e.target.value)}
required
className="p-3 rounded-lg bg-black border border-gray-700"
/>

)}

<button className="bg-[#D4AF37] text-black font-semibold py-3 rounded-lg">

🔔 Subscribe Alerts

</button>

</form>

</>

):(

<p className="text-green-400 text-center">

Subscription Confirmed

</p>

)}

</div>



{/* BUYBACK PANEL */}

<div className="max-w-md mx-auto bg-black/60 p-8 rounded-xl border border-gray-800">

{!isConnected ?(

<button
onClick={()=>connect({connector:connectors[0]})}
className="w-full bg-[#D4AF37] text-black font-semibold py-4 rounded-xl"
>

🔗 Connect Wallet

</button>

):( 

<>

<label className="block mb-2 text-sm">⏱ Time Lock</label>

<select
value={timeLock}
onChange={e=>setTimeLock(e.target.value)}
className="w-full p-2 mb-4 bg-black border border-gray-700"
>

<option value="3">3h</option>
<option value="6">6h</option>
<option value="12">12h</option>
<option value="24">1d</option>

</select>

<label className="block mb-2 text-sm">💰 Quantidade</label>

<input
type="number"
value={amount}
onChange={e=>setAmount(e.target.value)}
className="w-full p-2 mb-4 bg-black border border-gray-700"
/>

<button
onClick={handleBuyBack}
disabled={loading}
className="w-full bg-[#D4AF37] text-black py-3 font-bold rounded-lg"
>

{loading ? "Processing..." : "Execute BuyBack"}

</button>

{txHash &&(

<p className="text-xs mt-3">

<a href={`https://bscscan.com/tx/${txHash}`} target="_blank">

View Transaction

</a>

</p>

)}

</>

)}

</div>


</div>

</section>

)

}