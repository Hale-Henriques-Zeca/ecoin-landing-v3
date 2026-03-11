"use client";

import { useState } from "react";

const cards = [
  { name: "Amazon", value: 25 },
  { name: "Netflix", value: 15 },
  { name: "Google Play", value: 20 },
  { name: "Apple", value: 30 }
];

export default function GiftCardMarket(){

const [selected,setSelected]=useState(null);

return(

<div className="bg-black/40 border border-white/10 rounded-2xl p-8 mt-12">

<h2 className="text-2xl text-[#D4AF37] mb-6 text-center">
🎁 E-Coin Gift Card Market
</h2>

<div className="grid md:grid-cols-4 gap-6">

{cards.map((card)=>(

<div
key={card.name}
onClick={()=>setSelected(card)}
className="cursor-pointer bg-black/60 p-6 rounded-xl text-center border border-white/10 hover:border-[#D4AF37]"
>

<h3 className="text-lg">{card.name}</h3>
<p className="text-gray-400 mt-2">${card.value}</p>

</div>

))}

</div>

{selected && (

<div className="mt-8 text-center">

<p className="mb-4">
Buy {selected.name} ${selected.value} Gift Card
</p>

<button className="px-6 py-3 bg-[#D4AF37] text-black rounded-xl">

Pay with E-Coin

</button>

</div>

)}

</div>

);

}