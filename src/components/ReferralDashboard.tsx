"use client";

import { useEffect, useState } from "react";
import { useReferral } from "@/hooks/useReferral";
import { useDexWallet } from "@/contexts/DexWalletContext";

export default function ReferralDashboard() {

  const { address, isConnected } = useDexWallet();
  const { getInviter, getPendingRewards, claimRewards } = useReferral();

  const [inviter, setInviter] = useState<string | null>(null);
  const [pending, setPending] = useState<bigint>(0n);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!isConnected) return;

    getInviter().then(setInviter);
    getPendingRewards().then(setPending);
  }, [isConnected]);

  if (!isConnected) {
    return (
      <p className="text-sm text-gray-400">
        Conecte a carteira para visualizar recompensas.
      </p>
    );
  }

  return (
    <div className="bg-black/40 border border-[#D4AF37]/20 rounded-2xl p-6 space-y-4">

      <h3 className="text-lg font-semibold text-[#D4AF37]">
        📊 Painel de Referência
      </h3>

      <div className="text-sm text-gray-400">
        <p><strong>Carteira:</strong><br />{address}</p>
        <p className="mt-2">
          <strong>Upline:</strong><br />
          {inviter && inviter !== "0x0000000000000000000000000000000000000000"
            ? inviter
            : "Nenhum upline vinculado"}
        </p>
      </div>

      <div className="bg-black/60 border border-[#22C55E]/20 rounded-xl p-4">
        <p className="text-sm text-gray-400">Recompensas Pendentes</p>
        <p className="text-xl font-bold text-[#22C55E]">
          {(Number(pending) / 1e18).toFixed(6)} E-COIN
        </p>
      </div>

      <button
        disabled={pending === 0n || loading}
        onClick={async () => {
          try {
            setLoading(true);
            await claimRewards();
            setPending(0n);
          } finally {
            setLoading(false);
          }
        }}
        className={`w-full py-3 rounded-xl font-semibold transition ${
          pending === 0n
            ? "bg-gray-600 text-gray-300"
            : "bg-gradient-to-r from-[#22C55E] to-[#3B82F6] text-black"
        }`}
      >
        {loading ? "Claiming..." : "Claim Rewards"}
      </button>

    </div>
  );
}