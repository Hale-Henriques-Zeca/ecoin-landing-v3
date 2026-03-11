"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaSnowflake, FaTelegramPlane, FaTelegram, FaWhatsapp, FaTwitter, FaDiscord } from "react-icons/fa";
import { BsStars } from "react-icons/bs";


export default function EKDPreSaleStakePanel() {
  const [mode, setMode] = useState("presale");

  const [mounted, setMounted] = useState(false);

useEffect(() => {
  setMounted(true);
}, []);


  // ✅ POSIÇÕES FIXAS PARA EVITAR HYDRATION ERROR
  const [particles] = useState(() =>
    Array.from({ length: 40 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `-${Math.random() * 20}%`,
      duration: 6 + Math.random() * 6,
    }))
  );

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  if (!mounted) return null;

  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-black via-[#0A0A0A] to-[#1A1A1A] text-gray-300 py-20 px-6 rounded-3xl border border-[#D4AF37]/20 shadow-lg mb-16">
      {/* ❄️ Snow Effect Layer */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {particles.map((p, i) => (
  <motion.div
    key={i}
    className="absolute text-[#D4AF37]/30"
    style={{ left: p.left, top: p.top }}
    animate={{ y: ["0%", "120%"] }}
    transition={{
      duration: 10 + Math.random() * 10,
      repeat: Infinity,
      ease: "linear",
    }}
  >
            <FaSnowflake />
          </motion.div>
        ))}
      </div>

      {/* 🎅 Header Natalino */}
      <motion.div
        className="text-center mb-10 relative"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <div className="flex justify-center items-center gap-3 text-[#D4AF37] text-4xl font-bold">
          <span className="text-4xl animate-bounce">🎅</span>
          <span>🎄 Feliz Natal & Adeus 2025 🎉</span>
        </div>
        <p className="text-sm text-gray-400 mt-2">
          Próspero Ano Novo 2026 — da <span className="text-[#D4AF37]">EdenKingDom Corporation</span>
        </p>
      </motion.div>

      {/* Switch */}
      <div className="flex justify-center gap-4 mb-10">
        {[
          { id: "presale", label: "Pre-Sale" },
          { id: "staking", label: "Staking" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setMode(tab.id)}
            className={`px-6 py-3 rounded-full font-semibold border transition-all duration-300 ${
              mode === tab.id
                ? "bg-[#D4AF37] text-black border-[#D4AF37] shadow-lg"
                : "border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37]/10"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Conteúdo Dinâmico */}
      <motion.div
        key={mode}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="max-w-3xl mx-auto bg-[#0D0D0D]/70 border border-[#D4AF37]/20 rounded-2xl p-8 text-center"
      >
        {mode === "presale" ? (
          <div>
            <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">🔥 E-Coin Pre-Sale</h2>
            <p className="text-gray-400 mb-6">Acompanhe o progresso da pré-venda da moeda oficial da EdenKingDom.</p>
            <div className="mb-4">
              <div className="h-3 w-full bg-gray-700 rounded-full overflow-hidden">
                <div className="h-3 bg-[#D4AF37] w-[65%] animate-pulse" />
              </div>
              <p className="mt-2 text-sm text-gray-400">65% do supply vendido</p>
            </div>
            <p className="text-lg">⏰ 7 dias, 12 horas restantes</p>
            <button
              onClick={() => window.open("https://t.me/EKDCoinSaleBot", "_blank")}
              className="mt-6 bg-[#D4AF37] text-black font-bold py-3 px-8 rounded-xl hover:bg-[#b8962c] transition"
            >
              💰 Buy via Telegram Bot
            </button>
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">💎 E-Coin Staking</h2>
            <p className="text-gray-400 mb-6">Ganhe recompensas automáticas ao fazer staking do seu saldo E-Coin.</p>
            <div className="mb-4">
              <div className="h-3 w-full bg-gray-700 rounded-full overflow-hidden">
                <div className="h-3 bg-[#D4AF37] w-[45%] animate-pulse" />
              </div>
              <p className="mt-2 text-sm text-gray-400">45% do pool em uso</p>
            </div>
            <p className="text-lg">⏰ 3 dias, 6 horas restantes</p>
            <button
              onClick={() => window.open("https://t.me/EKDCoinSaleBot", "_blank")}
              className="mt-6 bg-[#D4AF37] text-black font-bold py-3 px-8 rounded-xl hover:bg-[#b8962c] transition"
            >
              📈 Stake via Telegram Bot
            </button>
          </div>
        )}
      </motion.div>

      {/* 🎁 Rodapé Social */}
      <motion.div
        className="mt-12 flex flex-col items-center gap-3 text-[#D4AF37]"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <p className="text-sm mb-2 text-gray-400">Conecte-se à comunidade E-Coin</p>
       <div className="flex gap-5 text-2xl">
                     <a href="https://t.me/ecoin2026" target="_blank" rel="noopener noreferrer">
                       <FaTelegramPlane className="hover:text-white transition" />
                     </a>
                     <a href="https://x.com/CoinE28810?t=Dm9BWORAfzh5YcuqHYIUwQ&s=09" target="_blank" rel="noopener noreferrer">
                       <FaTwitter className="hover:text-white transition" />
                     </a>
                     <a href="https://discord.com/users/1443996675638300834" target="_blank" rel="noopener noreferrer">
                       <FaDiscord className="hover:text-white transition" />
                     </a>
                     <a href="https://t.me/ecoin2025" target="_blank" rel="noopener noreferrer">
                                 <FaTelegram className="hover:text-white transition" />
                               </a>
                     <a href="https://chat.whatsapp.com/G1F6USX5NrrLKikm7yiXXQ" target="_blank" rel="noopener noreferrer">
                       <FaWhatsapp className="hover:text-white transition" />
                     </a>          
                   </div>
        
        <BsStars className="text-3xl mt-4 animate-pulse text-[#D4AF37]" />
      </motion.div>
    </div>
  );
}
