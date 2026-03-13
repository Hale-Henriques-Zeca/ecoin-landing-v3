import { useState } from "react";

export function useTxNotifier() {

  const [txHash, setTxHash] = useState<string | null>(null);

  function notify(hash: string) {
    setTxHash(hash);
  }

  return {
    txHash,
    notify
  };
}