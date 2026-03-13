"use client";

import { useState } from "react";
import { getBscTxUrl } from "@/lib/utils/txExplorer";

interface Props {
  hash: string;
}

export default function TxNotification({ hash }: Props) {
  const [visible, setVisible] = useState(true);
  const [ignored, setIgnored] = useState(false);

  if (!visible) return null;

  const txUrl = getBscTxUrl(hash);

  return (
    <div className="fixed bottom-5 right-5 z-50 bg-black text-white p-4 rounded-xl shadow-lg w-[350px]">

      <div className="flex justify-between items-start">
        <p className="text-sm font-bold">Transaction Sent 🚀</p>

        <button
          onClick={() => setVisible(false)}
          className="text-gray-400 hover:text-white"
        >
          ✕
        </button>
      </div>

      {!ignored && (
        <p className="text-xs mt-2 break-all">
          Hash: {hash}
        </p>
      )}

      <div className="flex gap-2 mt-3">

        <a
          href={txUrl}
          target="_blank"
          className="bg-green-600 px-3 py-1 rounded text-xs"
        >
          View on BscScan
        </a>

        <button
          onClick={() => setIgnored(true)}
          className="bg-gray-600 px-3 py-1 rounded text-xs"
        >
          Ignore
        </button>

      </div>
    </div>
  );
}