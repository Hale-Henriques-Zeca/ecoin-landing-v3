"use client";

import ConverterCard from "@/components/ConverterCard";
import RechargeCard from "@/components/RechargeCard";
import GasSupportEngine from "@/components/nexus/GasSupportEngine";
import QRClaimEngine from "@/components/nexus/QRClaimEngine";
import PaymentEngine from "@/components/nexus/PaymentEngine";
import InvoiceEngine from "@/components/nexus/InvoiceEngine";
import GiftCardMarket from "@/components/nexus/GiftCardMarket";
import BridgeEngine from "@/components/nexus/BridgeEngine";
import FlexibleWallet from "@/components/nexus/FlexibleWallet";
import UtilityPayments from "@/components/nexus/UtilityPayments";



export default function ECoinHubPage() {
  return (
    <div className="min-h-screen bg-white text-black">

      {/* ================= HERO ================= */}
      <section className="py-24 px-6 text-center relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-r 
          from-[#D4AF37]/10 via-transparent to-[#D4AF37]/10 pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto">

          <span className="text-xs tracking-widest uppercase text-[#D4AF37] mb-3 block">
            BEM VINDO A E-COIN HUB 
          </span>

          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--blue)] mb-4">
            Sem <span className="text-[#D4AF37]">BNB</span> Não Há Transações — Converta Aqui
          </h2>

        </div>
      </section>

      

      {/* ================= CONVERTER ================= */}
      <section id="converter" className="pb-24 pt-16">
        <ConverterCard />
      </section>

<section className="py-24 px-6 text-center relative overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-r 
          from-[#D4AF37]/10 via-transparent to-[#D4AF37]/10 pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto">

          <span className="text-xs tracking-widest uppercase text-[#D4AF37] mb-3 block">
            E-Coin Nexus
          </span>

          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--blue)] mb-4">
            Aqui tu podes: <span className="text-[#D4AF37]"> Fazer pagamentos de Contas diversos</span>, ter acesso a: 

 <span className="text-[#D4AF37]"> bridge</span>,

<span className="text-[#D4AF37]"> ramps</span>, 

<span className="text-[#D4AF37]"> gas assistance</span>,  

<span className="text-[#D4AF37]"> comprar gift cards</span>,  

<span className="text-[#D4AF37]"> serviços</span>,  

<span className="text-[#D4AF37]"> QR transfers</span>, 

<span className="text-[#D4AF37]"> faturação</span>, 

<span className="text-[#D4AF37]"> wallet flexível</span>,  e mais serviços ainda por vir. 
          </h2>

        </div>
      </section>

{/* ================= RECHARGE ================= */}
      <section className="py-16 bg-gray-50">

  


        <RechargeCard />
      </section>

{/* ================= RECHARGE ================= */}
      <section className="py-16 bg-gray-50">
        <GasSupportEngine/>
      </section>
      

{/* ================= RECHARGE ================= */}
      <section className="py-16 bg-gray-50">
        <QRClaimEngine/>
      </section>


{/* ================= RECHARGE ================= */}
      <section className="py-16 bg-gray-50">
        <PaymentEngine/>
      </section>

{/* ================= RECHARGE ================= */}
      <section className="py-16 bg-gray-50">
        <InvoiceEngine />
      </section>

{/* ================= RECHARGE ================= */}
      <section className="py-16 bg-gray-50">
      <GiftCardMarket/>
      </section>

{/* ================= RECHARGE ================= */}
      <section className="py-16 bg-gray-50">
       <BridgeEngine/>
      </section>

{/* ================= RECHARGE ================= */}
      <section className="py-16 bg-gray-50">
        <FlexibleWallet/>
      </section>

{/* ================= RECHARGE ================= */}
      <section className="py-16 bg-gray-50">
       <UtilityPayments/>
      </section>

{/* ================= RECHARGE ================= */}
    
      
    </div>
  );
}