"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { FaExchangeAlt } from "react-icons/fa";

export default function ExchangeButtons() {

const exchanges = [

{
name: "CEX.IO Global Exchange",
desc: "Permite converter cripto para fiat e sacar diretamente para cartões Visa ou Mastercard.",
href: "https://cex.io/r/0/up145320941/0/",
logo: "/exchanges/cex.io.png",
},

{
name: "Binance Global Exchange",
desc: "A maior exchange do mundo com suporte a rede BEP20 e saques fiat em vários países.",
href: "https://accounts.binance.com/register?ref=PSYK9P5A",
logo: "/exchanges/binance.png",
},

{
name: "VALR South Africa Exchange",
desc: "Exchange africana que permite saque direto para bancos na África do Sul.",
href: "https://www.valr.com/invite/VAJPT5AG",
logo: "/exchanges/valr.png",
},

];

return (

<section className="py-20 px-6 max-w-6xl mx-auto">

<h2 className="text-2xl font-semibold mb-10 text-center">
          Exchanges recomendadas para sacar seus ganhos
        </h2>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

{exchanges.map((ex, i) => (

<motion.div
key={i}
initial={{ opacity: 0, y: 40 }}
whileInView={{ opacity: 1, y: 0 }}
transition={{ duration: 0.7, delay: i * 0.1 }}
whileHover={{ scale: 1.05 }}
className="relative overflow-hidden rounded-2xl p-6 border border-white/10 bg-gradient-to-b from-[#0b0b0b]/90 to-[#1a1a1a]/90 backdrop-blur-xl shadow-[0_0_30px_rgba(212,175,55,0.25)] hover:shadow-[0_0_50px_rgba(212,175,55,0.4)] transition-all duration-700"
>

{/* brilho animado */}
<motion.div
className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0"
animate={{ opacity: [0, 0.3, 0] }}
transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 2 }}
/>

{/* logo exchange */}
<div className="relative z-10 mb-4 flex items-center gap-3">

{ex.logo ? (

<Image
src={ex.logo}
alt={ex.name}
width={36}
height={36}
className="rounded"
/>

) : (

<FaExchangeAlt className="text-3xl text-[#D4AF37]" />

)}

<h3 className="text-lg font-bold text-[#D4AF37]">
{ex.name}
</h3>

</div>

<p className="relative z-10 text-gray-300 text-sm leading-relaxed">
{ex.desc}
</p>

{/* botão */}
<motion.div whileHover={{ scale: 1.08 }} className="mt-6 relative">

<Link
href={ex.href}
target="_blank"
className="block text-center w-full py-2 rounded-xl font-semibold bg-gradient-to-r from-[#D4AF37] via-[#F8E07D] to-[#D4AF37] text-black hover:brightness-125 transition-all duration-500"
>
Registrar / Acessar
</Link>

<motion.div
className="pointer-events-none absolute inset-0 rounded-xl"
animate={{
boxShadow: [
"0 0 10px rgba(248,224,125,0.2)",
"0 0 25px rgba(248,224,125,0.5)",
"0 0 10px rgba(248,224,125,0.2)",
],
}}
transition={{ duration: 2, repeat: Infinity }}
/>

</motion.div>

</motion.div>

))}

</div>

</section>

);
}