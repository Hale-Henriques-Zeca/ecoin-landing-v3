"use client";

import { useEffect, useState } from "react";
import { formatUnits } from "viem";
import { CONTRACTS } from "@/lib/contracts";
import { erc20Abi } from "@/lib/abis/erc20Abi";
import LiquidityAdminPanel from "@/components/LiquidityAdminPanel";
import { useAccount, useReadContract } from "wagmi";


export default function LiquidityPanel() {

const { address } = useAccount();

const { data: vaultOwner } = useReadContract({
  address: CONTRACTS.LIQUIDITY_VAULT,
  abi: [{
    name: "owner",
    type: "function",
    stateMutability: "view",
    inputs: [],
    outputs: [{ type: "address" }]
  }],
  functionName: "owner"
});


const isOwner =
  vaultOwner &&
  address &&
  vaultOwner.toLowerCase() === address.toLowerCase();


const [holders, setHolders] = useState<string>("--");

const { data: liquidity } = useReadContract({
 address: CONTRACTS.LIQUIDITY_VAULT,
 abi: [{
   name: "liquidityUSDT",
   type: "function",
   stateMutability: "view",
   inputs: [],
   outputs: [{ type: "uint256" }]
 }],
 functionName: "liquidityUSDT",
 query: { refetchInterval: 5000 }
})

const liquidityFormatted =
 liquidity !== undefined
   ? Number(formatUnits(liquidity as bigint, 18)).toLocaleString()
   : "--"


useEffect(()=>{

async function loadHolders(){

try{

const res = await fetch("/api/holders")

const data = await res.json()

setHolders(data.holders)


if(data.status === "1"){
setHolders(Number(data.result).toLocaleString())
}

}catch(e){
console.log(e)
}

}

loadHolders()

},[])

return (

<section className="py-20 text-center">

<h2 className="text-[#D4AF37] text-5xl mb-6">
E-Coin Liquidity Reserve & Holders
</h2>

<div className="flex flex-col items-center gap-6">

<div className="text-9xl font-bold text-green-400">
{liquidityFormatted}
</div>

<p className="text-green-400">
LIQUIDITY
</p>

<div className="text-9xl font-bold text-[#4ade80]">
{holders}
</div>

<p className="text-[#4ade80]">
HOLDERS
</p>

</div>

<a
href={`https://bscscan.com/address/${CONTRACTS.LIQUIDITY_VAULT}`}
target="_blank"
className="mt-6 inline-block px-6 py-3 bg-[#D4AF37] text-black rounded-xl"
>

View on Blockchain

</a>
{isOwner && (
  <div className="mt-16">
    <LiquidityAdminPanel />
  </div>
)}
</section>

)

}