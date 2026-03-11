"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import HeroButtons from "@/components/HeroButtons";
import {
  AlertTriangle,
  LineChart,
  Scale,
  HeartHandshake,
  Globe,
  ExternalLink
} from "lucide-react";

export default function Hero() {
  // 🟦 Gerar partículas SOMENTE no cliente
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    const p = Array.from({ length: 45 }).map(() => ({
      x: Math.random() * 1400,
      y: Math.random() * 800,
      size: Math.random() * 6 + 2,
      duration: 6 + Math.random() * 5,
      delay: Math.random() * 5,
    }));
    setParticles(p);
  }, []);

  return (
    <section className="
  relative
  w-full
  min-h-[90vh]
  sm:h-[95vh]
  overflow-hidden
  flex
  flex-col
  items-center
  justify-start
  bg-black
  pt-safe
">


      {/* Fundo Radial */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.35),transparent_70%)] animate-pulse"></div>

      {/* Partículas */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute bg-[#D4AF37] rounded-full"
            initial={{
              opacity: 0,
              scale: 0,
              x: p.x,
              y: p.y,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.3, 0],
              x: "+=80",
              y: "-=120",
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
            }}
            style={{
              width: p.size,
              height: p.size,
              filter: "blur(2px)",
            }}
          />
        ))}
      </div>

      {/* LOGO + CÍRCULO PREMIUM */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="relative z-20 mt-16 sm:mt-21"
      >
        <div className="relative flex justify-center">

          {/* Círculo suave (do novo sistema) */}
          <motion.div
            className="absolute w-[300px] h-[300px] rounded-full border border-[#D4AF37]/40 animate-pulse-soft"
          ></motion.div>

          {/* Círculo rotativo (do sistema antigo, mantendo o efeito premium) */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
            className="absolute w-[320px] h-[320px] rounded-full border border-[#D4AF37]/25"
          ></motion.div>

          {/* LOGO */}
<Image
  src="/images/ecoin-logo.png"
  alt="E-Coin Logo"
  width={300}
  height={300}
  priority
  className="
    w-[200px]
    sm:w-[240px]
    md:w-[260px]
    object-contain
    drop-shadow-[0_0_30px_rgba(212,175,55,0.75)]
  "
/>

        </div>
      </motion.div>

      {/* TÍTULO + BOTÕES */}
      <motion.div
  className="relative z-20 mt-8 px-4 flex flex-col items-center text-center"
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.4 }}
>
  <h1 className="
    text-3xl sm:text-4xl md:text-5xl lg:text-5xl
    font-extrabold
    text-[#D4AF37]
    tracking-wider
    drop-shadow-lg
    max-w-3xl
  ">
    EDENKINGDOM COIN
  </h1>

  <p className="
    text-gray-300
    text-sm sm:text-base md:text-lg
    mt-4
    max-w-xl
  ">
    A moeda corporativa da EdenKingDom — construída com tecnologia, segurança e visão eterna.
  </p>


        {/* NOVA ORGANIZAÇÃO DE BOTÕES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 max-w-6xl w-full">

  <PremiumCard
    icon={<LineChart size={28} />}
    title="Whitepaper"
    description="Documento técnico oficial da E-Coin."
    href="/whitepaper"
  />

  <PremiumCard
    icon={<Globe size={28} />}
    title="Business Presentation"
    description="Visão estratégica e modelo corporativo."
    href="/EcoinBusinessPresentation"
  />

  <PremiumCard
    icon={<HeartHandshake size={28} />}
    title="Líder de Equipes"
    description="Gestão e estrutura organizacional."
    href="/equipes"
  />

  <PremiumCard
    icon={<Scale size={28} />}
    title="Solidity Interpretation"
    description="Análise técnica do contrato inteligente."
    href="/ECoinSolidity"
  />

</div>

      </motion.div>

      
    </section>
  );
}

function PremiumCard({
  icon,
  title,
  description,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="
        group
        relative
        p-6
        rounded-2xl
        bg-gradient-to-br from-black to-[#111]
        border border-[#D4AF37]/30
        backdrop-blur-xl
        transition-all
        duration-500
        hover:scale-[1.04]
        hover:border-[#D4AF37]
        hover:shadow-[0_0_40px_rgba(212,175,55,0.4)]
      "
    >
      <div className="
        absolute inset-0 rounded-2xl opacity-0
        group-hover:opacity-100
        bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.15),transparent_70%)]
        transition
      "></div>

      <div className="relative z-10 flex flex-col items-center text-center space-y-4">

        <div className="text-[#D4AF37]">
          {icon}
        </div>

        <h3 className="text-lg font-semibold text-[#D4AF37]">
          {title}
        </h3>

        <p className="text-gray-400 text-sm">
          {description}
        </p>

        <span className="
          mt-3
          inline-flex
          items-center
          gap-2
          text-sm
          font-medium
          text-black
          bg-[#D4AF37]
          px-4
          py-2
          rounded-full
          group-hover:bg-[#c9a92d]
          transition
        ">
          Acessar
          <ExternalLink size={16} />
        </span>

      </div>
    </a>
  );
}