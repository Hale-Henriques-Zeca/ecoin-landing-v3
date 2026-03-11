"use client";

import { useState } from "react";
import { useAccount, useWriteContract } from "wagmi";
import { parseUnits } from "viem";
import { bsc } from "wagmi/chains";
import { stakingStreamingAbi } from "@/lib/abis/stakingStreamingAbi";

const STAKING = process.env.NEXT_PUBLIC_STAKING_ADDRESS as `0x${string}`;

export default function StreamingAdminPanel() {
  const { address } = useAccount();
  const { writeContractAsync } = useWriteContract();
  const [amount, setAmount] = useState("");

  async function inject() {
    if (!amount) return;

    const bn = parseUnits(amount, 18);

    await writeContractAsync({
      abi: stakingStreamingAbi,
      address: STAKING,
      functionName: "injectReward",
      args: [bn],
      account: address!,
      chain: bsc,
    });

    alert("Reward injected");
  }

  return (
    <div className="p-6 border border-red-500 rounded-xl bg-black/50 space-y-4">
      <h3 className="text-red-400 font-semibold">
        Streaming Staking — Admin
      </h3>

      <input
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Reward amount"
        className="w-full bg-transparent border border-red-500/40 rounded-lg px-3 py-2 text-white"
      />

      <button
        onClick={inject}
        className="w-full py-2.5 rounded-lg bg-red-600 text-white font-semibold"
      >
        Inject Reward Stream
      </button>
    </div>
  );
}