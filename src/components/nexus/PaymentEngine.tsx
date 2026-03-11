"use client";

import { useState } from "react";

export default function PaymentEngine(){

const [amount,setAmount]=useState("");
const [service,setService]=useState("");

return(

<div className="bg-black/40 p-8 rounded-2xl">

<h2 className="text-2xl text-[#D4AF37] mb-6">
Web3 Payment
</h2>

<input
placeholder="Amount"
value={amount}
onChange={(e)=>setAmount(e.target.value)}
className="p-3 rounded-xl w-full mb-4"
/>

<input
placeholder="Service (electricity, hospital, university)"
value={service}
onChange={(e)=>setService(e.target.value)}
className="p-3 rounded-xl w-full mb-4"
/>

<button className="px-6 py-3 bg-[#D4AF37] text-black rounded-lg w-full">

Pay with Wallet

</button>

</div>

);

}