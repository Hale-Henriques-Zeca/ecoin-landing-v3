"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useDexWallet } from "@/contexts/DexWalletContext";

import AddLiquidityTab from "./AddLiquidityTab";
import DividendsTab from "./DividendsTab";
import RemoveLiquidityTab from "./RemoveLiquidityTab";
import LiquidityDonut from "./LiquidityDonut";

export default function LiquidityPanel({ fadeUp }: { fadeUp: any }) {
  const { isConnected } = useDexWallet();
  const [tab, setTab] = useState<"add" | "dividends" | "remove">("add");

  if (!isConnected) return null;

  return (
    <motion.div
      className="max-w-5xl mx-auto bg-[#0a0a0a]/60 border border-[#00FF9C]/20 rounded-2xl p-8 mt-16 backdrop-blur-md"
      variants={fadeUp}
      initial="hidden"
      animate="visible"
    >
      <h3 className="text-1xl font-semibold text-[#00FF9C] mb-6">
       Ganhe dividendos das taxas de swap contribuindo para a liquidez pública do par E-Coin / E-USD.
      </h3>

      {/* Tabs */}
      <div className="flex gap-3 mb-8">
        {[
          { id: "add", label: "Adicionar Liquidez" },
          { id: "dividends", label: "Dividendos" },
          { id: "remove", label: "Remover Liquidez" },
        ].map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id as any)}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition
              ${
                tab === t.id
                  ? "bg-[#00FF9C] text-black"
                  : "bg-black/40 text-gray-400 hover:text-white"
              }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          {tab === "add" && <AddLiquidityTab />}
          {tab === "dividends" && <DividendsTab />}
          {tab === "remove" && <RemoveLiquidityTab />}
        </div>

        <LiquidityDonut />
      </div>
    </motion.div>
  );
}
