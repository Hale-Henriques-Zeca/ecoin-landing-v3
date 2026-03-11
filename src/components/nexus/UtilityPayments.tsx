"use client";

import { useState } from "react";

export default function UtilityPayments(){

const [service,setService]=useState("");
const [amount,setAmount]=useState("");

return(

<div className="bg-black/40 border border-white/10 rounded-2xl p-8 mt-12">

<h2 className="text-2xl text-[#D4AF37] mb-6 text-center">
⚡ Utility Payments
</h2>

<input
placeholder="Service (Electricity, Mobile, TV)"
value={service}
onChange={(e)=>setService(e.target.value)}
className="w-full p-3 rounded-xl bg-black/60 mb-4"
/>

<input
placeholder="Amount"
value={amount}
onChange={(e)=>setAmount(e.target.value)}
className="w-full p-3 rounded-xl bg-black/60"
/>

<button className="mt-6 w-full py-3 bg-[#D4AF37] text-black rounded-xl">

Pay Service

</button>

</div>

);

}