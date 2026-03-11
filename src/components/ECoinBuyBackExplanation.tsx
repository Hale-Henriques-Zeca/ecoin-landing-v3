"use client";

import { motion } from "framer-motion";

export default function ECoinBuyBackExplanation() {

return (

<section className="relative bg-black text-white py-24 px-6 overflow-hidden">

{/* background */}

<div className="absolute inset-0 -z-10">

<div className="absolute top-0 left-1/2 w-[600px] h-[600px] -translate-x-1/2 bg-[#D4AF37]/10 rounded-full blur-[160px]" />

<div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#1C2D5A]/30 rounded-full blur-[120px]" />

</div>


<div className="max-w-6xl mx-auto text-center">


{/* TITLE */}

<motion.h1
initial={{ opacity:0, y:-20 }}
animate={{ opacity:1, y:0 }}
transition={{ duration:1 }}
className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#D4AF37] mb-6"
>

E-Coin Price Alert & Buy-Back Collective

</motion.h1>


<p className="text-gray-300 max-w-3xl mx-auto text-sm sm:text-base mb-16">

Conecte-se ao <strong>ECP (EdenKingDom Coin Price)</strong> e receba
notificações inteligentes quando surgirem oportunidades estratégicas
de Buy-Back no ecossistema E-Coin.

</p>



{/* ================= EXPLANATION ================= */}

<div className="mt-16 text-gray-300 max-w-4xl mx-auto text-sm sm:text-base space-y-8 text-left">


<div>

<h3 className="text-[#D4AF37] font-semibold text-lg mb-2">

💡 O que é o ECP?

</h3>

<p>

O <strong>EdenKingDom Coin Price (ECP)</strong> é o painel oficial
de monitoramento da E-Coin. Ele acompanha o preço do ativo em tempo
real e identifica momentos estratégicos de entrada e saída no mercado.

Quando o preço apresenta quedas relevantes, o sistema envia alertas
automáticos para a comunidade participar de campanhas sincronizadas
de <strong>Buy-Back coletivo</strong>.

</p>

</div>



<div>

<h3 className="text-[#D4AF37] font-semibold text-lg mb-2">

⚙️ Como funciona?

</h3>

<p>

Após registrar-se no sistema de alertas, os participantes passam a
receber notificações por Email ou SMS sempre que o algoritmo detectar
uma oportunidade de Buy-Back.

Esses sinais permitem que a comunidade recompre tokens em momentos
estratégicos, fortalecendo a liquidez do protocolo e criando pressão
positiva de preço no mercado.

</p>

</div>



<div>

<h3 className="text-[#D4AF37] font-semibold text-lg mb-2">

🚀 Benefícios

</h3>

<ul className="list-disc list-inside space-y-2">

<li>Receber alertas inteligentes de preço e sinais de Buy-Back em tempo real.</li>

<li>Participar de campanhas coletivas de recompra sincronizadas da E-Coin na baixa.</li>

<li>Fortalecer a liquidez e estabilidade do ecossistema  e evite liquidações de contas de traders pequenos.</li>

<li>Obter recompensas através de mecanismos de time-lock.</li>

<li>Participar do crescimento sustentável da E-Coin.</li>

<li>Torne-se parte do movimento “De trader para trader, de holder para holder. De investidor em ativos digitais para investidor em ativos digitais”.</li>

</ul>

</div>

 {/* SLOGAN FINAL */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-16 text-center text-[#D4AF37] font-semibold italic"
        >
          “Quando o mercado fala, a E-Coin responde.  
          Ganhe com o tempo — compre na baixa, cresça na alta.”
        </motion.div>
</div>



{/* ================= SEPARATOR ================= */}

<div className="relative z-10 mt-20 mb-14 flex items-center gap-4">

<div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />

<span className="text-[11px] sm:text-xs uppercase tracking-[0.35em] text-[#D4AF37]/80">

Smart Pool

</span>

<div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent" />

</div>



{/* ================= SMART POOL CARD ================= */}

<div className="w-full max-w-5xl mx-auto rounded-2xl border border-[#D4AF37]/25 bg-black/50 backdrop-blur-md p-8 shadow-lg">

<div className="text-center mb-8">

<h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#D4AF37]">

E-Coin Buy-Back Smart Pool

</h3>

<p className="mt-2 text-sm sm:text-base italic text-gray-400">

“De trader para trader, de holder para holder, de investidor
em ativos digitais para investidor em ativos digitais.”

</p>

</div>



{/* TABLE */}

<div className="border border-[#D4AF37]/30 rounded-xl overflow-hidden">

<table className="w-full text-left">

<thead className="bg-[#0D0D0D]">

<tr>

<th className="p-4 text-[#D4AF37] text-lg">

📘 Fluxo completo do Buy-Back

</th>

</tr>

</thead>


<tbody className="divide-y divide-[#D4AF37]/10 bg-black/50">

<tr>

<td className="p-4">

<ol className="list-decimal list-inside space-y-2">

<li>O investidor conecta sua carteira digital.</li>

<li>Seleciona a quantidade de E-Coin para Buy-Back.</li>

<li>Define um período de Time-Lock.</li>

<li>O Smart Contract bloqueia os tokens temporariamente.</li>

<li>Durante o bloqueio ocorre geração de rendimento interno.</li>

<li>Parte dos tokens é direcionada ao Smart Pool.</li>

<li>O investidor recebe o principal + recompensas.</li>

</ol>

</td>

</tr>

</tbody>

</table>

</div>



<p className="mt-8 italic text-[#D4AF37] font-semibold text-center">

“Construído por traders. Sustentado por holders.
Empoderando investidores digitais.”

</p>

</div>


</div>

</section>

)

}