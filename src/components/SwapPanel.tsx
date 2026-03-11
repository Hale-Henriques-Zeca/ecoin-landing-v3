"use client"

import { useState } from "react"
import { useAccount } from "wagmi"
import { ethers } from "ethers"

export default function SwapPanel(){

const { address } = useAccount()

const [amount,setAmount] = useState("")
const [tron,setTron] = useState("")

async function swap(){

const provider = new ethers.BrowserProvider(window.ethereum)

const signer = await provider.getSigner()

const contract = new ethers.Contract(
process.env.NEXT_PUBLIC_VAULT!,
[
"function depositUSDT(address token,uint amount,string tronAddress)"
],
signer
)

const usdt = process.env.NEXT_PUBLIC_USDT

const parsed = ethers.parseUnits(amount,18)

await contract.depositUSDT(usdt,parsed,tron)

}

return(

<div className="max-w-xl mx-auto p-8 border rounded-xl">

<h2 className="text-xl font-semibold mb-6">
Troque USDT BEP20 → TRC20
</h2>

<input
placeholder="amount"
className="border p-3 w-full mb-4"
value={amount}
onChange={(e)=>setAmount(e.target.value)}
/>

<input
placeholder="TRON address"
className="border p-3 w-full mb-4"
value={tron}
onChange={(e)=>setTron(e.target.value)}
/>

<button
onClick={swap}
className="bg-black text-white px-6 py-3 rounded"
>
Trocar
</button>

</div>

)

}