"use client";

import { useWriteContract } from "wagmi";
import { useTxEngine } from "@/hooks/useTxEngine";

export function useBlockchainTx() {

  const { writeContractAsync } = useWriteContract();
  const { addTransaction } = useTxEngine();

  async function sendTx(config:any) {

    const tx = await writeContractAsync(config);

    if (tx?.hash) {
      addTransaction(tx.hash, config.chain?.id || 56);
    }

    return tx;
  }

  return {
    sendTx
  };

}