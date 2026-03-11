"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import "@/styles/ecosystem.css";

const goldGradient = "from-[#D4AF37] via-[#F8E07D] to-[#D4AF37]";
const goldGlow = "shadow-[0_0_30px_rgba(212,175,55,0.45)]";
const goldIcon = "text-[#F8E07D]";

export default function Ecosystem() {
  return (
    <section
      id="ecosystem"
      className="ecosystem-container w-full py-28 text-white flex flex-col items-center"
    >
      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10 text-3xl font-bold text-[#D4AF37]"
      >
         ECOSSISTEMA EDENKINGDOM 
      </motion.h2>

      {/* DESCRIPTION */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl text-center text-gray-300 mb-16 px-4 leading-relaxed"
      >
        A E-Coin movimenta todos os sistemas corporativos da EdenKingDom —
        pagamentos, educação, logística, serviços públicos, governança,
        investimentos e estrutura institucional global.
      </motion.p>

      {/* GRID PREMIUM */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-7xl">
        {features.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.05 }}
            whileHover={{ scale: 1.05 }}
            className={`relative overflow-hidden rounded-2xl p-6 border border-white/10 bg-gradient-to-b from-[#0b0b0b]/90 to-[#1a1a1a]/90 backdrop-blur-xl ${card.glow} transition-all duration-700`}
          >
            {/* Overlay brilho */}
            <motion.div
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0"
              animate={{ opacity: [0, 0.25, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            {/* Ícone */}
            <motion.div
              className={`relative z-10 text-4xl mb-4 ${card.iconColor}`}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {card.icon}
            </motion.div>

            {/* Título */}
            <motion.h3
              className={`relative z-10 text-lg font-extrabold tracking-wide bg-gradient-to-r ${card.gradient} bg-clip-text text-transparent`}
              animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
              transition={{ duration: 6, repeat: Infinity }}
              style={{ backgroundSize: "200% auto" }}
            >
              {card.title}
            </motion.h3>

            {/* Descrição */}
            <p className="relative z-10 text-gray-300 text-sm mt-3 whitespace-pre-line leading-relaxed">
              {card.desc}
            </p>

            {/* BOTÃO DOURADO */}
            <motion.div whileHover={{ scale: 1.08 }} className="mt-6 relative">
              <Link
                href={card.href}
                target="_blank"
                className={`relative z-10 block text-center w-full py-2 rounded-xl font-semibold bg-gradient-to-r ${card.gradient} text-black hover:brightness-125 transition-all duration-500`}
              >
                Acessar
              </Link>

              <motion.div
                className="pointer-events-none absolute inset-0 rounded-xl"
                animate={{
                  boxShadow: [
                    "0 0 10px rgba(212,175,55,0.2)",
                    "0 0 25px rgba(212,175,55,0.6)",
                    "0 0 10px rgba(212,175,55,0.2)",
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

/* FEATURES */
const features = [
  {
    title: "E-Pay",
    desc: "Sistema de pagamentos digitais com liquidez real.",
    icon: "💳",
    href: "https://epay.edenkingdom.org",
    gradient: goldGradient,
    glow: goldGlow,
    iconColor: goldIcon,
  },
  {
    title: "E-Market",
    desc: "Marketplace interno 100% tokenizado.",
    icon: "🛒",
    href: "https://emarket.edenkingdom.org",
    gradient: goldGradient,
    glow: goldGlow,
    iconColor: goldIcon,
  },
  {
    title: "E-Social",
    desc: "Sistema humanitário com rastreio de doações.",
    icon: "💟",
    href: "https://esocial.edenkingdom.org",
    gradient: goldGradient,
    glow: goldGlow,
    iconColor: goldIcon,
  },
  {
    title: "EFC • EdenKingDom Fried Chicken",
    desc:
      "Divisão oficial de alimentação rápida.\n\n" +
      "• Produção integrada\n" +
      "• Pagamentos via E-Coin\n" +
      "• Expansão internacional\n\n" +
      "We Don’t Just Fry — We EdenKingDom.",
    icon: "🍗",
    href: "https://efc.edenkingdom.org",
    gradient: "from-[#ff7b00] via-[#ffae00] to-[#ff7b00]",
    glow: "shadow-[0_0_25px_rgba(255,140,0,0.45)]",
    iconColor: "text-[#ffae00]",
  },
  {
  title: "E-Career",
  desc:
    "Sistema de carreiras profissionais.\n\n" +
    "• Progressão hierárquica\n" +
    "• Contratos institucionais\n" +
    "• Certificações internas\n" +
    "• Formação contínua",
  icon: "🏆",
  href: "https://ecareer.edenkingdom.org",
  gradient: goldGradient,
  glow: goldGlow,
  iconColor: goldIcon,
},
  {
  title: "E-Marketing",
  desc:
    "Divisão oficial de Marketing & Campaigns.\n\n" +
    "• Expansão global\n" +
    "• Branding internacional\n" +
    "• Eventos e campanhas institucionais",
  icon: "📢",
  href: "https://emarketing.edenkingdom.org",
  gradient: goldGradient,
  glow: goldGlow,
  iconColor: goldIcon,
},
  
  {
    title: "E-Industries",
    desc: "Polo industrial e manufatura estratégica.",
    icon: "🏭",
    href: "https://eindustries.edenkingdom.org",
    gradient: goldGradient,
    glow: goldGlow,
    iconColor: goldIcon,
  },
  {
  title: "E-Pay TokenPad",
  desc: "Carteira oficial multimoeda para E-Coin, stablecoins e ativos corporativos.",
  icon: "👛",
  href: "https://tokenpad.edenkingdom.org",
  gradient: goldGradient,
  glow: goldGlow,
  iconColor: goldIcon,
},
{
  title: "E-Job",
  desc: "Sistema automatizado para contratação flexível e trabalhos operacionais imediatos.",
  icon: "👔",
  href: "https://ejob.edenkingdom.org",
  gradient: goldGradient,
  glow: goldGlow,
  iconColor: goldIcon,
},
{
    title: "E-Farm+",
    desc: "Divisão agroindustrial oficial com produção integrada.",
    icon: "🌾",
    href: "https://efarm.edenkingdom.org",
    gradient: goldGradient,
    glow: goldGlow,
    iconColor: goldIcon,
  },
{
  title: "E-Learn",
  desc: "Educação global integrada com recompensas e tokenização.",
  icon: "🎓",
  href: "https://elearn.edenkingdom.org",
  gradient: goldGradient,
  glow: goldGlow,
  iconColor: goldIcon,
},
{
  title: "E-ExpressLog",
  desc: "Transporte e logística integrada com rastreabilidade e blockchain.",
  icon: "🚚",
  href: "https://elog.edenkingdom.org",
  gradient: goldGradient,
  glow: goldGlow,
  iconColor: goldIcon,
},
{
  title: "E-Stay",
  desc: "Turismo e hospitalidade pagos com E-Coin.",
  icon: "🏨",
  href: "https://estay.edenkingdom.org",
  gradient: goldGradient,
  glow: goldGlow,
  iconColor: goldIcon,
},
{
  title: "E-Chain • Blockchain",
  desc: "Rede própria com governança, segurança e escalabilidade.",
  icon: "🔗",
  href: "https://echain.edenkingdom.org",
  gradient: goldGradient,
  glow: goldGlow,
  iconColor: goldIcon,
},
{
  title: "E-Share",
  desc:
    "Acionistas & Participação.\n\nPolítica oficial para investidores institucionais.",
  icon: "📊",
  href: "https://eshare.edenkingdom.org",
  gradient: goldGradient,
  glow: goldGlow,
  iconColor: goldIcon,
},
{
  title: "E-Law",
  desc:
    "Estrutura Jurídica & Organizacional.\n\nCompliance e governança institucional.",
  icon: "⚖️",
  href: "https://elaw.edenkingdom.org",
  gradient: goldGradient,
  glow: goldGlow,
  iconColor: goldIcon,
},
{
  title: "EKD",
  desc:
    "Manifesto oficial, visão e missão institucional da EdenKingDom.",
  icon: "🏛️",
  href: "https://edenkingdom.org",
  gradient: goldGradient,
  glow: goldGlow,
  iconColor: goldIcon,
},
{
    title: "E-Hospital",
    desc: "Infraestrutura hospitalar e saúde integrada.",
    icon: "🏥",
    href: "https://ehospital.edenkingdom.org",
    gradient: goldGradient,
    glow: goldGlow,
    iconColor: goldIcon,
  },
];