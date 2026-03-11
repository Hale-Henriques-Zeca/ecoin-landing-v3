"use client";

import { useStreamingStaking } from "@/hooks/useStreamingStaking";

export default function StreamingStatsCard() {
  const s = useStreamingStaking();

  return (
    <div className="bg-black/50 border border-gray-700 rounded-xl p-4 space-y-4">

      <div className="flex justify-between text-sm">
        <span className="text-gray-400">Total Staked</span>
        <span className="text-white font-semibold">
          {s.total} E-Coin
        </span>
      </div>

      <div className="flex justify-between text-sm">
        <span className="text-gray-400">Your Stake</span>
        <span className="text-white font-semibold">
          {s.userStake} E-Coin
        </span>
      </div>

      <div className="flex justify-between text-sm">
        <span className="text-gray-400">Unclaimed Rewards</span>
        <span className="text-green-400 font-semibold">
          {s.pending} E-Coin
        </span>
      </div>

      <div>
        <div className="flex justify-between text-xs text-gray-400 mb-1">
          <span>Your Share</span>
          <span>{s.share.toFixed(2)}%</span>
        </div>

        <div className="h-2 w-full rounded-full bg-black/50 border border-gray-700 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#D4AF37] to-[#3B82F6]"
            style={{ width: `${s.share}%` }}
          />
        </div>
      </div>

      <p className="text-xs text-yellow-400 text-center">
        Sem APY fixo · As recompensas dependem de 🌊 Streaming staking (contínuo, tempo real, recompensa: Fluxo de caixa constante) · pool de recompensas e stake total.
      </p>
    </div>
  );
}