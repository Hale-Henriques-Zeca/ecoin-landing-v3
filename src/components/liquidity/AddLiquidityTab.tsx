"use client";

import { useState } from "react";

export default function AddLiquidityTab() {
  const [amountUSD, setAmountUSD] = useState("");

  const half = Number(amountUSD || 0) / 2;

  return (
    <div className="space-y-4">
      <h4 className="text-[#00FF9C] font-semibold">Adicionar Liquidez</h4>

      <input
        value={amountUSD}
        onChange={(e) => setAmountUSD(e.target.value)}
        placeholder="Valor total em USD (ex: 100)"
        className="w-full bg-black/40 border border-white/10 rounded-xl p-3"
      />

      {amountUSD && (
        <div className="text-sm text-gray-400 space-y-1">
          <div>50% em E-USD: <span className="text-white">${half}</span></div>
          <div>50% em E-Coin: <span className="text-white">${half}</span></div>
        </div>
      )}

      <button
        className="w-full bg-[#00FF9C] text-black py-3 rounded-xl font-bold"
      >
        Confirmar Adição de Liquidez
      </button>
    </div>
  );
}
