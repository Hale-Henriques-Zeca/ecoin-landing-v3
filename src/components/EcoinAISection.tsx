"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AskAIAudioEngine from "@/components/AskAIAudioEngine";

export default function EcoinAISection() {
  const rotatingPhrases = [
    "AI-First.",
    "Low Latency.",
    "Low Gas Fee.",
    "MEV-Protected.",
    "All-in-One E-Coin."
  ];

  const aiQuestions = [
    "How do I get E-Coin?",
    "Is E-Coin protected against liquidation?",
    "How does E-Coin buy-back work?",
    "What makes E-Coin different from Bitcoin?",
    "How can I use E-Coin in EdenKingDom?"
  ];

  const slides = [
    {
      title: "AI-Powered Smart Contracts",
      desc: "Automation meets security — powered by E-Coin Intelligence.",
      img: "https://via.placeholder.com/300x160?text=AI+Contracts",
    },
    {
      title: "Cross-Chain Swap Live",
      desc: "Seamless interoperability across all supported blockchains.",
      img: "https://via.placeholder.com/300x160?text=Cross+Chain",
    },
    {
      title: "Buy-Back Engine Active",
      desc: "Every transaction fuels E-Coin sustainability & value.",
      img: "https://via.placeholder.com/300x160?text=Buyback",
    },
    {
      title: "Zero Ownership Design",
      desc: "No central control. Pure decentralization by architecture.",
      img: "https://via.placeholder.com/300x160?text=Decentralized",
    },
    {
      title: "Low Gas Fee Protocol",
      desc: "Optimized for ultra-low latency transactions worldwide.",
      img: "https://via.placeholder.com/300x160?text=Low+Gas+Fee",
    },
  ];

  const [phraseIndex, setPhraseIndex] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [openAI, setOpenAI] = useState(false);

  useEffect(() => {
    const phraseTimer = setInterval(
      () => setPhraseIndex((i) => (i + 1) % rotatingPhrases.length),
      2500
    );

    const questionTimer = setInterval(
      () => setQuestionIndex((i) => (i + 1) % aiQuestions.length),
      3000
    );

    return () => {
      clearInterval(phraseTimer);
      clearInterval(questionTimer);
    };
  }, []);

  return (
    <section
      className="relative w-full overflow-hidden
        pt-[env(safe-area-inset-top)]
        pb-[env(safe-area-inset-bottom)]
        min-h-screen
        flex flex-col items-center justify-center
        text-center bg-black"
    >

      {/* FRASES ROTATIVAS */}
      <motion.h2
        key={phraseIndex}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        className="text-[#D4AF37] text-xl sm:text-2xl font-semibold tracking-wide"
      >
        {rotatingPhrases[phraseIndex]}
      </motion.h2>

      {/* TÍTULO */}
      <h1 className="mt-4 text-3xl sm:text-5xl md:text-6xl font-extrabold text-white">
        All in One E-Coin.
      </h1>

      {/* CONTACT */}
      <a
        href="/contact"
        className="mt-8 inline-flex items-center gap-2
                   px-6 py-3 rounded-xl
                   bg-[#D4AF37] text-black font-semibold
                   hover:bg-[#bfa536] transition shadow-xl"
      >
        Contact Us →
      </a>

      {/* AI SEARCH BAR */}
      <div className="mt-6 w-full max-w-xl px-4">
        <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-lg">

          <span className="text-gray-500 text-sm flex-1 truncate">
            {aiQuestions[questionIndex]}
          </span>

          <button
            onClick={() => setOpenAI(!openAI)}
            className="ml-3 px-4 py-1.5 rounded-full bg-black text-white text-sm"
          >
            Ask AI ✨
          </button>

        </div>
      </div>

      {/* AI VOICE ENGINE */}
      {openAI && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full flex justify-center px-4"
        >
          <AskAIAudioEngine />
        </motion.div>
      )}

      {/* MÉTRICAS */}
      <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 px-4 sm:px-6">
        {[
          ["2.604M", "Daily Active Users"],
          ["$6.507B", "Total Value Locked"],
          ["$4.815B", "Trading Volume"],
          ["$0.004912", "Gas Fee"],
          ["1.875s", "Finality Time"]
        ].map(([value, label]) => (
          <div key={label} className="text-center">
            <div className="text-lg sm:text-xl font-bold text-white">
              {value}
            </div>
            <div className="text-xs text-gray-400 mt-1">
              {label}
            </div>
          </div>
        ))}
      </div>

      {/* 🚀 CARROSSEL */}
      <div className="relative w-full overflow-hidden bg-black py-12 sm:py-16 mt-16">

        <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/10 via-transparent to-[#D4AF37]/10 blur-3xl -z-10" />

        <div className="text-center mb-8">
          <h2 className="text-[#D4AF37] text-lg sm:text-xl font-semibold tracking-wide">
            E-Coin Universe in Motion
          </h2>
        </div>

        {/* SELO BETA */}
        <div className="absolute top-6 right-6 bg-gradient-to-r from-[#D4AF37] to-[#bfa536] text-black 
                        px-3 py-1 rounded-full text-xs sm:text-sm font-bold shadow-lg animate-pulse">
          LIVE BETA 2025
        </div>

        <motion.div
          className="flex gap-4 sm:gap-6 px-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, duration: 35, ease: "linear" }}
        >
          {[...slides, ...slides].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="min-w-[220px] sm:min-w-[280px] md:min-w-[320px]
              bg-gradient-to-b from-[#111] to-[#000]
              border border-[#D4AF37]/30 rounded-2xl
              shadow-[0_0_15px_rgba(212,175,55,0.2)]
              p-4 sm:p-5 flex flex-col items-center text-center
              hover:border-[#D4AF37]/70 transition-all duration-300"
            >

              <div className="w-full h-[130px] sm:h-[160px] relative mb-3 overflow-hidden rounded-xl">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover opacity-90 hover:opacity-100 transition"
                />
              </div>

              <h3 className="text-[#D4AF37] text-sm sm:text-lg font-semibold mb-2 leading-tight">
                {item.title}
              </h3>

              <p className="text-gray-400 text-xs sm:text-sm leading-snug">
                {item.desc}
              </p>

            </motion.div>
          ))}
        </motion.div>

        <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-black via-black/80 to-transparent pointer-events-none" />

      </div>

    </section>
  );
}