"use client";

import { motion } from "framer-motion";

export default function ECGPSEDiagram() {
  return (
    <section className="max-w-6xl mx-auto mt-20">

      <h3 className="text-center text-2xl font-bold text-[#D4AF37] mb-10">
        🌐 ECGPSE Global Synchronization Diagram
      </h3>

      <div className="grid md:grid-cols-3 gap-6 text-center">

        <motion.div
          initial={{ opacity:0, y:20 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:0.6 }}
          className="border border-gray-800 rounded-xl p-6 bg-black/60"
        >
          <h4 className="text-[#D4AF37] font-semibold mb-2">
            CEX Markets
          </h4>
          <p className="text-gray-400 text-sm">
            Binance  
            Gate.io  
            MEXC  
            Upbit
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity:0, y:20 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:0.8 }}
          className="border border-[#D4AF37]/40 rounded-xl p-6 bg-[#0a0a0a]"
        >
          <h4 className="text-[#D4AF37] font-semibold mb-2">
            ECGPSE Core Engine
          </h4>

          <p className="text-gray-400 text-sm">
            Price Aggregation  
            Volume Weighting  
            Arbitrage Detection  
            Liquidity Control
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity:0, y:20 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:1 }}
          className="border border-gray-800 rounded-xl p-6 bg-black/60"
        >
          <h4 className="text-[#D4AF37] font-semibold mb-2">
            DeFi Ecosystem
          </h4>

          <p className="text-gray-400 text-sm">
            PancakeSwap  
            Lending Protocols  
            Staking Platforms
          </p>
        </motion.div>

      </div>

    </section>
  );
}