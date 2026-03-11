"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GenesisTimer from "@/components/GenesisTimer";

export default function ECoinContractInfo() {
  const CONTRACT = "0xDf69235019cc416dd5Be75dfc0eDc922aB4b5964";
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(CONTRACT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-6 flex flex-col items-center gap-4 text-center">
      {/* Contract */}
      <div
        className="flex flex-col sm:flex-row items-center gap-3 rounded-2xl
        border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur-md"
      >
        <span className="text-xs sm:text-sm text-white/60">
          EdenKingDom Coin (E-Coin) Official Contract:
        </span>

        <code className="text-xs sm:text-sm text-[#D4AF37] font-mono break-all">
          {CONTRACT}
        </code>

       <button
  onClick={copy}
  className="relative"
>
  <motion.div
    whileTap={{ scale: 0.95 }}
    whileHover={{ scale: 1.05 }}
    animate={
      copied
        ? {
            boxShadow:
              "0 0 0px rgba(212,175,55,0), 0 0 18px rgba(212,175,55,0.7)",
            scale: [1, 1.08, 1],
          }
        : {}
    }
    transition={{ duration: 0.3, ease: "easeOut" }}
    className="relative overflow-hidden rounded-full border
      border-[#D4AF37]/40 px-4 py-1.5 text-xs font-semibold
      text-[#D4AF37] bg-black/40 backdrop-blur-md
      hover:border-[#D4AF37] transition-all"
  >
    {/* Glow ring */}
    <AnimatePresence>
      {copied && (
        <motion.span
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1.6 }}
          exit={{ opacity: 0, scale: 2 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0 rounded-full
          bg-gradient-to-r from-[#D4AF37]/40 via-[#0B5FFF]/30 to-[#B11226]/30
          blur-md"
        />
      )}
    </AnimatePresence>

    {/* Text */}
    <span className="relative z-10 flex items-center gap-1">
      {copied ? (
        <>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
          Copied
        </>
      ) : (
        "Copy"
      )}
    </span>
  </motion.div>
</button>

      </div>
      
      <GenesisTimer />

      {/* Whitepaper */}
      <a
        href="https://ecoin.edenkingdom.org/whitepaper"
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm sm:text-base text-[#0B5FFF]
        hover:text-[#D4AF37] transition-colors
        underline underline-offset-4"
      >
        Available on: Whitepaper & Technical Documentation →
      </a>

    </div>

    
  );
}
