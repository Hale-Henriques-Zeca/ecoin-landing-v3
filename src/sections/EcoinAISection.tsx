"use client";
import WebGLHeroBackground from "@/components/WebGLHeroBackground";
import GlobeChartBackground from "@/components/GlobeChartBackground";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Metrics = {
  dailyActiveUsers: string;
  tvl: string;
  volume24h: string;
  gasFee: string;
  finalityTime: string;
};

const rotatingPhrases = [
  "Speed in Transactions.",
  "Low Latency.",
  "Low Gas Fee.",
  "MEV-Protected.",
  "Buy-Back Engine.",
  "E-Coin No ownership by design.",
  "E-Coin is Descentralized by design.",
  "E-Coin has a Fixed Supply.",
  "No Mint by design.",
  "No Burn by design.",
  "E-Coin has it's Own DEX.",
];

const aiQuestions = [
  "How do I get E-Coin?",
  "Is E-Coin protected against liquidation?",
  "How does E-Coin buy-back work?",
  "What makes E-Coin different from Bitcoin?",
  "How can I use E-Coin in EdenKingDom?"
];

export default function EcoinAISection() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);

  const [metrics, setMetrics] = useState<Metrics | null>(null);

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
      className="
        relative w-full overflow-hidden
        pt-[env(safe-area-inset-top)]
        pb-[env(safe-area-inset-bottom)]
        min-h-screen
        flex flex-col items-center justify-center
gap-6 sm:gap-8
        text-center
        bg-black
      "
    >
      {/* FUNDO CINEMATOGRÁFICO */}
<div className="absolute inset-0 -z-10 overflow-hidden">
  {/* Aura central */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.22),transparent_65%)]" />

  {/* Anel dourado giratório */}
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
    className="absolute -top-1/2 left-1/2 w-[1200px] h-[1200px]
               -translate-x-1/2 rounded-full
               border border-[#D4AF37]/10"
  />

  {/* Linha de varredura */}
  <motion.div
    animate={{ x: ["-100%", "100%"] }}
    transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
    className="absolute bottom-1/3 h-[2px] w-full
               bg-gradient-to-r from-transparent via-[#D4AF37]/60 to-transparent"
  />
</div>


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
      <h1 className="
  mt-3
  text-3xl
  sm:text-4xl
  md:text-5xl
  lg:text-6xl
  font-extrabold
  text-white
">
        All in One E-Coin.
      </h1>

      {/* CONTACT US */}
      <a
        href="/contact"
        className="mt-8 inline-flex items-center gap-2
                   px-6 py-3 rounded-xl
                   bg-[#D4AF37] text-black font-semibold
                   hover:bg-[#bfa536] transition shadow-xl"
      >
        Contact Us →
      </a>

      {/* BARRA AI */}
      <div className="mt-6 w-full max-w-xl px-4">
        <div className="flex items-center bg-white rounded-full px-4 py-2 shadow-lg">
          <span className="text-gray-500 text-sm flex-1 truncate">
            {aiQuestions[questionIndex]}
          </span>
          <button className="ml-3 px-4 py-1.5 rounded-full bg-black text-white text-sm">
            Ask AI ✨
          </button>
        </div>
      </div>

    </section>
  );
}
