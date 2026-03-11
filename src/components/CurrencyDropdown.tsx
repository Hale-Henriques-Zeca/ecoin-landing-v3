"use client"

import { useState } from "react"
import { currencies } from "@/data/currencies"

interface Props{
value:string
onChange:(v:string)=>void
}

export default function CurrencyDropdown({value,onChange}:Props){

const [open,setOpen] = useState(false)
const [search,setSearch] = useState("")

const filtered = currencies.filter(c =>
c.code.toLowerCase().includes(search.toLowerCase()) ||
c.name.toLowerCase().includes(search.toLowerCase())
)

const selected = currencies.find(c => c.code === value)

return(

<div className="relative w-40">

<button
onClick={()=>setOpen(!open)}
className="w-full flex items-center justify-between bg-[#0D0D0D] border border-[#D4AF37]/30 rounded-lg px-3 py-2 text-sm hover:border-[#D4AF37]"
>

<span className="flex gap-2 items-center">

<img
src={selected?.flag}
alt={selected?.code}
className="w-5 h-4 rounded-sm"
/>

{selected?.code}

</span>

<span className="text-[#D4AF37]">▼</span>

</button>

{open && (

<div className="absolute top-12 left-0 w-64 bg-black border border-[#D4AF37]/20 rounded-xl shadow-xl z-50">

<input
placeholder="Search currency..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
className="w-full px-3 py-2 text-sm bg-[#0D0D0D] border-b border-[#D4AF37]/20 outline-none text-white"
/>

<div className="max-h-60 overflow-y-auto">

{filtered.map(c => (

<button
key={c.code}
onClick={()=>{
onChange(c.code)
setOpen(false)
}}
className="w-full flex items-center gap-3 px-3 py-2 text-left text-sm hover:bg-[#D4AF37]/10 transition"
>

<img
src={c.flag}
className="w-5 h-5 rounded-sm"
/>

<div className="flex flex-col">

<span className="text-white font-medium">
{c.code}
</span>

<span className="text-gray-400 text-xs">
{c.name}
</span>

</div>

</button>

))}

</div>

</div>

)}

</div>

)

}