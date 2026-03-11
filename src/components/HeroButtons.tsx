"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaCoins, FaCreditCard, FaHandHoldingHeart, FaChartLine, FaUniversity } from "react-icons/fa";

export default function HeroButtons() {
  const cards = [
    {
      title: "E-Coinar via P2P Trading",
      desc: "Compre ou venda E-Coin diretamente com outros usuários com segurança e liquidez imediata.",
      href: "/p2p", // ✅ rota correta
      icon: <FaCoins />,
      gradient: "from-[#D4AF37] via-[#F8E07D] to-[#D4AF37]",
      glow: "shadow-[0_0_30px_rgba(212,175,55,0.6)]",
      iconColor: "text-[#F8E07D]",
    },
    {
  title: "Doação Humanitária E-Social",
  desc: "Doe em E-Coin ou USDT e ajude a salvar vidas. A E-Social é a divisão humanitária da EdenKingDom — juntos pela humanidade.",
  href: "http://esocial.edenkingdom.org/donate",
  icon: <FaHandHoldingHeart />,
  gradient: "from-[#f8fafc] via-[#e5e7eb] to-[#f8fafc]",
  glow: "shadow-[0_0_30px_rgba(255,255,255,0.35)]",
  iconColor: "text-emerald-600",
},

    {
      title: "Trading on-chain via Web3",
      desc: "Compre e venda E-Coin diretamente on-chain, com integração Web3 e segurança institucional.",
      href: "/trade",
      icon: <FaChartLine />,
      gradient: "from-[#0B5ED7] via-[#1C7CFF] to-[#0B5ED7]",
      glow: "shadow-[0_0_25px_rgba(11,94,215,0.5)]",
      iconColor: "text-[#1C7CFF]",
    },
    {
      title: "🏛️ EdenKingDom Corporation",
      desc: "Visite o website institucional e corporativo oficial da EdenKingDom Corporation — governança, inovação, Web3 e estrutura global.",
      href: "https://www.edenkingdom.org",
      icon: <FaUniversity />,
      gradient: "from-[#1FA971] via-[#4BE5A1] to-[#1FA971]",
      glow: "shadow-[0_0_30px_rgba(31,169,113,0.6)]",
      iconColor: "text-[#4BE5A1]",
    },
  ];

  return (
    <section className="w-full py-12 px-6 bg-transparent">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className={`relative overflow-hidden rounded-2xl p-6 border border-white/10 bg-gradient-to-b from-[#0b0b0b]/90 to-[#1a1a1a]/90 backdrop-blur-xl ${card.glow} hover:shadow-[0_0_50px_rgba(248,224,125,0.35)] transition-all duration-700`}
          >
            {/* 🔆 Overlay de brilho — NÃO BLOQUEIA CLIQUE */}
            <motion.div
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0"
              animate={{ opacity: [0, 0.3, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 2 }}
            />

            {/* 🔁 Ícone pulsante */}
            <motion.div
              className={`relative z-10 text-4xl mb-4 ${card.iconColor} drop-shadow-[0_0_10px_rgba(248,224,125,0.6)]`}
              animate={{
                scale: [1, 1.15, 1],
                filter: [
                  "drop-shadow(0 0 6px rgba(248,224,125,0.4))",
                  "drop-shadow(0 0 14px rgba(248,224,125,0.8))",
                  "drop-shadow(0 0 6px rgba(248,224,125,0.4))",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {card.icon}
            </motion.div>

            {/* ✨ Título com gradiente animado */}
            <motion.h3
              className={`relative z-10 text-lg font-extrabold tracking-wide bg-gradient-to-r ${card.gradient} bg-clip-text text-transparent`}
              animate={{ backgroundPosition: ["0%", "100%", "0%"] }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: "200% auto" }}
            >
              {card.title}
            </motion.h3>

            {/* 📝 Descrição */}
            <p className="relative z-10 text-gray-300 text-sm mt-2 leading-relaxed">
              {card.desc}
            </p>

            {/* 🚀 BOTÃO — CLICÁVEL GARANTIDO */}
            <motion.div whileHover={{ scale: 1.08 }} className="mt-6 relative">
              <Link
                href={card.href}
                className={`relative z-10 block text-center w-full py-2 rounded-xl font-semibold bg-gradient-to-r ${card.gradient} text-black hover:brightness-125 transition-all duration-500`}
              >
                Acessar
              </Link>

              {/* Brilho animado do botão — NÃO CAPTURA CLIQUE */}
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
