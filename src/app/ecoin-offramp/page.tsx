"use client";

import Link from "next/link";
import PaymentMethodsSection from "@/components/PaymentMethodsSection";
import ExchangeButtons from "@/components/ExchangeButtons";
import SwapPanel from "@/components/SwapPanel";


export default function ECoinOffRampPage() {
  return (
    <div className="min-h-screen bg-white text-black">

      {/* HERO */}
      <section className="py-24 px-6 text-center relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-r 
        from-[#D4AF37]/10 via-transparent to-[#D4AF37]/10 pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto">

          <span className="text-xs tracking-widest uppercase text-[#D4AF37] mb-3 block">
            E-COIN CASH OUT
          </span>

          <h1 className="text-3xl md:text-4xl font-semibold text-[var(--blue)]">
            Converta <span className="text-[#D4AF37]">E-Coin</span> em dinheiro
            e saque diretamente para o seu cartão.
          </h1>

        </div>
      </section>


      

   

 <ExchangeButtons />  

      {/* NETWORK WARNING */}
      <section className="py-20 px-6 bg-gray-50">

        <div className="max-w-4xl mx-auto">

          <h2 className="text-2xl font-semibold mb-6">
            ⚠️ Redes suportadas pelas exchanges
          </h2>

          <p className="mb-6">
            Algumas exchanges não aceitam todas as redes.
            Enviar USDT na rede errada pode fazer os fundos ficarem presos.
          </p>

          <table className="w-full text-left border">

            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 border">Rede</th>
                <th className="p-3 border">Taxa média</th>
                <th className="p-3 border">Suporte</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td className="p-3 border">ERC20 (Ethereum)</td>
                <td className="p-3 border">$10 – $40</td>
                <td className="p-3 border">Suportado pela CEX.IO</td>
              </tr>

              <tr>
                <td className="p-3 border">BEP20 (BNB Chain)</td>
                <td className="p-3 border">$0.30 – $1</td>
                <td className="p-3 border">Suportado pela Binance</td>
              </tr>

              <tr>
                <td className="p-3 border">TRC20 (Tron)</td>
                <td className="p-3 border">$1</td>
                <td className="p-3 border">Muito usado para transferências - Note: CEX.IO apenas aceita TRC20 (Tron)</td>
              </tr>

            </tbody>

          </table>

        </div>

      </section>


      {/* STEP GUIDE */}
      <section className="py-20 px-6 max-w-4xl mx-auto">

        <h2 className="text-2xl font-semibold mb-8">
          Como sacar seus ganhos da E-Coin
        </h2>


        <div className="space-y-6">

          <div>
            <h3 className="font-semibold">1️⃣ Converter E-Coin</h3>
            <p>
              No E-Coin Converter ou E-Coin Hub converta seus tokens para (USDT - BEP20).
            </p>
          </div>

          <div>
            <h3 className="font-semibold">2️⃣ Enviar para exchange</h3>
            <p>
              Envie o (USDT - BEP20) para Binance e ou depois CEX.IO usando
              a rede correta (USDT TRC20 - Tron) Vindo da Binance.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">3️⃣ Converter para fiat</h3>
            <p>
              Troque o (USDT TRC20 - Tron) por USD ou EUR dentro da exchange CEX.IO ou escolhida (VARL), etc.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">4️⃣ Sacar para cartão</h3>
            <p>
              Adicione seu cartão Visa ou Mastercard e faça
              o saque.
            </p>
          </div>

        </div>

      </section>


      {/* FEES */}
      <section className="py-20 px-6 bg-gray-50">

        <div className="max-w-4xl mx-auto">

          <h2 className="text-2xl font-semibold mb-6">
            Taxas aproximadas
          </h2>

          <table className="w-full border">

            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 border">Operação</th>
                <th className="p-3 border">Taxa</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td className="p-3 border">Trading (Troca interna)</td>
                <td className="p-3 border">0.15% – 0.25%</td>
              </tr>

              <tr>
                <td className="p-3 border">Saque cartão</td>
                <td className="p-3 border">1.5% – 3%</td>
              </tr>

              <tr>
                <td className="p-3 border">Transferência USDT</td>
                <td className="p-3 border">$0.30 – $40 dependendo da rede</td>
              </tr>

            </tbody>

          </table>

        </div>

      </section>

{/* ================= IMPORTANT WITHDRAW GUIDE ================= */}

<section className="py-16 px-6 bg-black/40 border border-white/10 rounded-2xl mt-16">

<div className="max-w-5xl mx-auto space-y-10 text-gray-300">

<h2 className="text-3xl text-center font-semibold text-[#D4AF37]">
⚠️ Guia Importante para Holders da E-Coin
</h2>

{/* ALERT */}

<div className="bg-red-500/10 border border-red-500/30 p-6 rounded-xl">

<h3 className="text-xl font-semibold text-red-400 mb-4">
⚠️ Aviso importante
</h3>

<p>
Nunca envie <b>USDT BEP20</b> diretamente para <b>CEX.IO</b>.
</p>

<p className="mt-2">
A exchange <b>não suporta esta rede</b> para depósitos de USDT.
</p>

<p className="mt-2">
Se enviar:
</p>

<ul className="list-disc ml-6 mt-2 space-y-1">
<li>o depósito pode não chegar</li>
<li>os fundos podem ficar presos</li>
<li>a recuperação pode ser difícil ou impossível</li>
</ul>

</div>

{/* NETWORK SUPPORT */}

<div className="space-y-4">

<h3 className="text-xl font-semibold text-[#D4AF37]">
🌐 Redes que a CEX.IO suporta para USDT
</h3>

<table className="w-full text-left border border-white/10">

<thead className="bg-black/40">
<tr>
<th className="p-3">Rede</th>
<th className="p-3">Status</th>
</tr>
</thead>

<tbody>

<tr className="border-t border-white/10">
<td className="p-3">ERC20 (Ethereum)</td>
<td className="p-3 text-green-400">✅ suportado</td>
</tr>

<tr className="border-t border-white/10">
<td className="p-3">TRC20 (Tron)</td>
<td className="p-3 text-yellow-400">✅ geralmente suportado</td>
</tr>

<tr className="border-t border-white/10">
<td className="p-3">BEP20 (BNB Smart Chain)</td>
<td className="p-3 text-red-400">❌ não suportado</td>
</tr>

</tbody>

</table>

<p className="mt-4">
Ou seja, o padrão aceito pela CEX.IO normalmente é:
</p>

<p className="text-lg text-white font-semibold">
USDT TRC20 (Tron) ✅
</p> 

<p className="text-lg text-white font-semibold">
USDT ERC20
</p>

</div>

{/* ERC20 FEES */}

<div>

<h3 className="text-xl font-semibold text-[#D4AF37] mb-4">
💸 Problema do ERC20
</h3>

<p>
A rede Ethereum possui taxas elevadas.
</p>

<p className="mt-2">
Exemplo típico de taxa:
</p>

<p className="text-white font-semibold">
$8 — $40 gas fee
</p>

<p className="mt-2">
Por isso não é ideal para pequenos saques.
</p>

</div>

{/* BEST FLOW */}

<div>

<h3 className="text-xl font-semibold text-[#D4AF37] mb-4">
🚀 Melhor fluxo para holders da E-Coin
</h3>

<p className="mb-3">
Recomendamos o seguinte processo:
</p>

<p className="font-semibold">Passo 1 — Converter E-Coin</p>

<p className="ml-4">
Na E-Coin Hub ou E-Coin Converter:
</p>

<p className="ml-4 text-white font-semibold">
E-Coin → USDT BEP20
</p>

<p className="mt-4 font-semibold">Passo 2 — Enviar para CEX</p>

<p className="ml-4">
Enviar para:
</p>

<p className="ml-4 text-white font-semibold">
USDT TRC20 (Tron) → carteira CEX.IO
</p>

<p className="mt-3">
Rede recomendada:
</p>

<ul className="ml-6 list-disc">
<li>TRC20 - Tron (barata) ✅</li>
<li>BEP20 ❌</li>
<li>ERC20 (cara)</li>
</ul>

<p className="mt-4 font-semibold">
Passo 3 — Converter para Fiat
</p>

<p className="ml-4">
Dentro da CEX.IO:
</p>

<p className="ml-4 text-white font-semibold">
USDT TRC20 (Tron) → USD
</p>

<p className="mt-4 font-semibold">
Passo 4 — Adicionar cartão
</p>

<p className="ml-4">
Menu:
</p>

<p className="ml-4 text-white font-semibold">
Finance → Cards → Add Card
</p>

<p className="ml-4 mt-2">
Adicionar:
</p>

<ul className="ml-6 list-disc">
<li>Visa</li>
<li>Mastercard</li>
</ul>

<p className="mt-4 font-semibold">
Passo 5 — Sacar para cartão
</p>

<p className="ml-4">
Menu:
</p>

<p className="ml-4 text-white font-semibold">
Withdraw → Card
</p>

<p className="ml-4 mt-2">
Selecionar:
</p>

<p className="ml-4 text-white font-semibold">
USD → Visa card
</p>

</div>

{/* TIME */}

<div>

<h3 className="text-xl font-semibold text-[#D4AF37] mb-4">
⏱ Tempo do saque
</h3>

<p>
Normalmente:
</p>

<p className="text-white font-semibold">
5 segundos — 30 minutos
</p>

<p className="mt-2">
Se usar Visa Direct.
</p>

<p className="mt-3">
Pode demorar até <b>3 dias</b> quando o banco precisa processar manualmente.
</p>

<p className="mt-4">
Motivos comuns:
</p>

<ul className="ml-6 list-disc">
<li>fim de semana</li>
<li>feriados bancários</li>
<li>verificação anti-fraude</li>
<li>cartão internacional bloqueado</li>
<li>banco intermediário</li>
</ul>

</div>

{/* BEST TIME */}

<div>

<h3 className="text-xl font-semibold text-[#D4AF37] mb-4">
🕐 Melhor horário para saque
</h3>

<p>
Para maior rapidez:
</p>

<p className="mt-2 text-white font-semibold">
Terça — Quinta
</p>

<p className="text-white font-semibold">
08:00 — 16:00 UTC
</p>

<p className="mt-2">
Porque os bancos estão ativos e os sistemas de liquidação estão abertos.
</p>

</div>

{/* FEES */}

<div>

<h3 className="text-xl font-semibold text-[#D4AF37] mb-4">
💰 Taxas da CEX.IO
</h3>

<table className="w-full border border-white/10">

<thead className="bg-black/40">
<tr>
<th className="p-3">Operação</th>
<th className="p-3">Taxa</th>
</tr>
</thead>

<tbody>

<tr className="border-t border-white/10">
<td className="p-3">Deposit cartão</td>
<td className="p-3">2.99%</td>
</tr>

<tr className="border-t border-white/10">
<td className="p-3">Withdraw cartão</td>
<td className="p-3">1.5% – 3%</td>
</tr>

<tr className="border-t border-white/10">
<td className="p-3">Trade/Troca</td>
<td className="p-3">0.15% – 0.25%</td>
</tr>

</tbody>

</table>

<p className="mt-4">
Exemplo:
</p>

<p className="text-white font-semibold">
$1000 saque ≈ $20 taxa
</p>

</div>

{/* BINANCE INFO */}

<div>

<h3 className="text-xl font-semibold text-[#D4AF37] mb-4">
🌍 Porque Binance não permite saque para todos países
</h3>

<p>
A Binance depende de:
</p>

<ul className="ml-6 list-disc">
<li>bancos parceiros</li>
<li>licenças financeiras</li>
<li>regulamentação local</li>
</ul>

</div>

{/* FASTEST METHOD */}

<div>

<h3 className="text-xl font-semibold text-[#D4AF37] mb-4">
⚡ Método mais rápido hoje
</h3>

<p className="text-white font-semibold">
E-Coin Hub ou E-Coin Converter → (USDT BEP20) → Binance → (USDT TRC20) → CEX.IO → USD → cartão do banco (Visa) → (dinheiro tradicional)✅
</p>

<p className="mt-2">
Tempo médio:
</p>

<p className="text-white font-semibold">
5 min — 30 min
</p>

</div>

{/* NETWORK COST TABLE */}

<div>

<h3 className="text-xl font-semibold text-[#D4AF37] mb-4">
⭐ Melhor rede para projetos hoje
</h3>

<table className="w-full border border-white/10">

<thead className="bg-black/40">
<tr>
<th className="p-3">Rede</th>
<th className="p-3">Taxa</th>
</tr>
</thead>

<tbody>

<tr className="border-t border-white/10">
<td className="p-3">ERC20</td>
<td className="p-3">$10 – $40</td>
</tr>

<tr className="border-t border-white/10">
<td className="p-3">BEP20</td>
<td className="p-3">$0.30 – $1</td>
</tr>

<tr className="border-t border-white/10">
<td className="p-3">TRC20</td>
<td className="p-3">$1</td>
</tr>

</tbody>

</table>

</div>

{/* EXCHANGES BEP20 */}

<div>

<h3 className="text-xl font-semibold text-[#D4AF37] mb-4">
🔎 Exchanges que aceitam BEP20
</h3>

<table className="w-full border border-white/10">

<thead className="bg-black/40">
<tr>
<th className="p-3 text-left">Exchange</th>
<th className="p-3 text-left">BEP20</th>
<th className="p-3 text-left">Acesso</th>
</tr>
</thead>

<tbody>

<tr className="border-t border-white/10">
<td className="p-3">Bitget</td>
<td className="p-3">✅</td>
<td className="p-3">
<a href="https://partner.bitget.com/bg/U9L9CJ" target="_blank" className="text-[#D4AF37] underline">
Registrar
</a>
</td>
</tr>

<tr className="border-t border-white/10">
<td className="p-3">HTX (Huobi)</td>
<td className="p-3">✅</td>
<td className="p-3">
<a href="https://www.htx.com.se/invite/en-us/1f?invite_code=bcw65223" target="_blank" className="text-[#D4AF37] underline">
Registrar
</a>
</td>
</tr>

<tr className="border-t border-white/10">
<td className="p-3">KuCoin</td>
<td className="p-3">✅</td>
<td className="p-3">
<a href="https://www.kucoin.com/r/rf/QBAPA662" target="_blank" className="text-[#D4AF37] underline">
Registrar
</a>
</td>
</tr>

<tr className="border-t border-white/10">
<td className="p-3">Bybit</td>
<td className="p-3">✅</td>
<td className="p-3">
<a href="https://www.bybit.com/invite?ref=0GQL8Y" target="_blank" className="text-[#D4AF37] underline">
Registrar
</a>
</td>
</tr>

<tr className="border-t border-white/10">
<td className="p-3">BingX</td>
<td className="p-3">✅</td>
<td className="p-3">
<a href="https://bingx.com/invite/LGFAK0/" target="_blank" className="text-[#D4AF37] underline">
Registrar
</a>
</td>
</tr>

</tbody>

</table>

</div>

{/* FINAL */}

<div>

<h3 className="text-xl font-semibold text-[#D4AF37] mb-4">
📊 Conclusão
</h3>

<p className="mt-3">
Primeiro usar Binance: De sua carteira Web3 → Binance
</p>

<p className="text-white font-semibold">
E-Coin → (USDT BEP20) → Binance  
</p>
<p>
Segundo usar CEX.IO: De sua carteira Binance → CEX.IO
</p>

<p className="text-white font-semibold">
 USDT (BEP20) → USDT (TRC20) → CEX.IO
</p>

<p className="mt-4 font-semibold text-green-400">
Recomendação final para holders:
</p>

<ul className="ml-6 list-disc">
<li>BEP20</li>
<li>TRC20</li>
</ul>

<p className="mt-3">
Assim mais de <b>90% das exchanges</b> funcionarão.
</p>

</div>

</div>

</section>

      {/* FINAL */}
      <section className="py-20 px-6 text-center">

        <h2 className="text-2xl font-semibold mb-4">
          Saques rápidos e seguros
        </h2>

        <p className="max-w-xl mx-auto text-gray-600">
          Para transferências mais rápidas, utilize a rede TRC20 ou BEP20
          sempre que possível.
        </p>

 
      </section>

{/* HERO */}
      <section className="py-24 px-6 text-center relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-r 
        from-[#D4AF37]/10 via-transparent to-[#D4AF37]/10 pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto">

          <span className="text-xs tracking-widest uppercase text-[#D4AF37] mb-3 block">
            Troque os seus (USDT BEP20) por (USDT TRC20) Internamente para suas transaões de saques ao dinheiro tradicional (fiat) seguras
          </span>

          <h1 className="text-3xl md:text-4xl font-semibold text-[var(--blue)]">
            Troque <span className="text-[#D4AF37]">(USDT BEP20) </span> Para <span className="text-[#D4AF37]"> (USDT TRC20) </span> ainda dentro do nosso ecossistema seguramente.
          </h1>

        </div>
      </section>

<section className="py-20 px-6 text-center">


 < SwapPanel /> 
      </section>
 

 <PaymentMethodsSection /> 



    </div>
  );
}