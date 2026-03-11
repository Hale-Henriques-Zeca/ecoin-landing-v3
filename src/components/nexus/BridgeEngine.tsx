"use client";

import { useState, useEffect } from "react";

/* ================= CHAINS ================= */

const chains = [

"Ethereum Mainnet",
"BNB Smart Chain",
"Polygon",
"Base",
"Arbitrum One",
"Linea",
"Blast",
"Optimism",
"Avalanche C-Chain",
"BitTorrent Chain",
"Celo",
"Fraxtal",
"Gnosis",
"Mantle",
"Memecore",
"Moonbeam",
"Moonriver",
"opBNB",
"Scroll",
"Taiko",
"XDC Network",
"ApeChain",
"World Chain",
"Sonic",
"Unichain",
"Abstract",
"Berachain",
"Swellchain",
"Monad",
"HyperEVM",
"Katana",
"Sei",
"Stable",
"Plasma",
"MegaETH",

"Bitcoin",
"Litecoin",
"Dogecoin",
"Dash",
"XRP Ledger",
"Solana",
"Tron"

];

/* ================= TOKENS POR CHAIN ================= */

const chainTokens:any = {

"Ethereum Mainnet":[
"ETH","USDT","USDC","DAI","WBTC","E-Coin"
],

"BNB Smart Chain":[
"BNB","USDT","USDC","BUSD","FDUSD","E-Coin"
],

"Polygon":[
"MATIC","USDT","USDC","DAI","E-Coin"
],

"Arbitrum One":[
"ETH","USDT","USDC","ARB","E-Coin"
],

"Optimism":[
"ETH","USDT","USDC","OP","E-Coin"
],

"Avalanche C-Chain":[
"AVAX","USDT","USDC","E-Coin"
],

"Bitcoin":[
"BTC"
],

"Litecoin":[
"LTC"
],

"Dogecoin":[
"DOGE"
],

"Dash":[
"DASH"
],

"XRP Ledger":[
"XRP"
],

"Solana":[
"SOL","USDC"
],

"Tron":[
"TRX","USDT"
]

};

export default function BridgeEngine(){

const [from,setFrom]=useState("BNB Smart Chain");
const [to,setTo]=useState("Ethereum Mainnet");

const [fromToken,setFromToken]=useState("BNB");
const [toToken,setToToken]=useState("ETH");

const [amount,setAmount]=useState("");

/* Atualiza tokens automaticamente */

useEffect(()=>{

const tokens = chainTokens[from] || ["TOKEN"];
setFromToken(tokens[0]);

},[from]);

useEffect(()=>{

const tokens = chainTokens[to] || ["TOKEN"];
setToToken(tokens[0]);

},[to]);

return(

<div className="bg-black/40 border border-white/10 rounded-2xl p-8 mt-12">

<h2 className="text-2xl text-[#D4AF37] mb-6 text-center">
🌉 Cross-Chain Bridge+
</h2>

<div className="grid md:grid-cols-2 gap-6">

{/* FROM CHAIN */}

<select
value={from}
onChange={(e)=>setFrom(e.target.value)}
className="p-3 rounded-xl bg-black/60 text-white"
>

{chains.map((c)=>(
<option key={c} value={c}>{c}</option>
))}

</select>

{/* FROM TOKEN */}

<select
value={fromToken}
onChange={(e)=>setFromToken(e.target.value)}
className="p-3 rounded-xl bg-black/60 text-white"
>

{(chainTokens[from] || []).map((t:string)=>(
<option key={t}>{t}</option>
))}

</select>

{/* TO CHAIN */}

<select
value={to}
onChange={(e)=>setTo(e.target.value)}
className="p-3 rounded-xl bg-black/60 text-white"
>

{chains.map((c)=>(
<option key={c} value={c}>{c}</option>
))}

</select>

{/* TO TOKEN */}

<select
value={toToken}
onChange={(e)=>setToToken(e.target.value)}
className="p-3 rounded-xl bg-black/60 text-white"
>

{(chainTokens[to] || []).map((t:string)=>(
<option key={t}>{t}</option>
))}

</select>

{/* AMOUNT */}

<input
placeholder="Amount"
value={amount}
onChange={(e)=>setAmount(e.target.value)}
className="p-3 rounded-xl bg-black/60 text-white md:col-span-2"
/>

</div>

<button
className="mt-6 w-full py-3 bg-[#D4AF37] text-black rounded-xl hover:opacity-90"
>

Bridge Transfer

</button>

</div>

);

}