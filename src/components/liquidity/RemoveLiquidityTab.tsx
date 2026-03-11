"use client";

import { useState } from "react";

export default function RemoveLiquidityTab() {
  const [percent, setPercent] = useState(0);

  return (
    <div className="space-y-4">
      <h4 className="text-red-400 font-semibold">Remover Liquidez</h4>

      <input
        type="range"
        min="0"
        max="100"
        value={percent}
        onChange={(e) => setPercent(Number(e.target.value))}
        className="w-full"
      />

      <div className="text-sm text-gray-400">
        Percentagem a remover: <span className="text-white">{percent}%</span>
      </div>

      <button
        className="w-full bg-red-600 text-white py-3 rounded-xl font-bold"
      >
        Remover Liquidez
      </button>
    </div>
  );
}
