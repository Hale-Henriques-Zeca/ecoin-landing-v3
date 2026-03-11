"use client";

import { useState } from "react";
import { useDexWallet } from "@/contexts/DexWalletContext";
import ReferralDashboard from "@/components/ReferralDashboard";
import ReferralBindPanel from "@/components/ReferralBindPanel";

export default function ReferralModalContent() {
  const { isConnected } = useDexWallet();
  const [tab, setTab] = useState<"bind" | "dashboard">("bind");

  if (!isConnected) {
    return (
      <p className="text-sm text-gray-400 text-center">
        Conecte a wallet para usar o sistema de referral.
      </p>
    );
  }

  return (
    <div className="space-y-6">
      {/* SWITCH */}
      <div className="flex rounded-xl overflow-hidden border border-[#00FF9C]/30">
        <button
          onClick={() => setTab("bind")}
          className={`flex-1 py-2 text-sm font-semibold transition ${
            tab === "bind"
              ? "bg-[#00FF9C] text-black"
              : "bg-black text-gray-400"
          }`}
        >
          Bind Upline
        </button>

        <button
          onClick={() => setTab("dashboard")}
          className={`flex-1 py-2 text-sm font-semibold transition ${
            tab === "dashboard"
              ? "bg-[#00FF9C] text-black"
              : "bg-black text-gray-400"
          }`}
        >
          Dashboard
        </button>
      </div>

      {/* CONTEÚDO */}
      {tab === "bind" ? <ReferralBindPanel /> : <ReferralDashboard />}
    </div>
  );
}
