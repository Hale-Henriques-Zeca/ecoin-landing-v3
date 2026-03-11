"use client";

import { useState } from "react";

const tokens = ["BNB", "USDT", "USDC"];

export default function RechargeCard() {
  const [amount, setAmount] = useState("");
  const [token, setToken] = useState("BNB");

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-xl border">

      <h3 className="text-xl font-semibold mb-6 text-center">
        Recarga On-Chain
      </h3>

      {/* Token Select */}
      <div className="mb-4">
        <label className="text-sm text-gray-500">Moeda</label>
        <select
          value={token}
          onChange={(e) => setToken(e.target.value)}
          className="w-full mt-2 p-3 rounded-xl border bg-gray-50"
        >
          {tokens.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>

      {/* Amount */}
      <div className="mb-6">
        <label className="text-sm text-gray-500">Valor</label>
        <input
          type="number"
          placeholder="0.00"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full mt-2 p-3 rounded-xl border bg-gray-50"
        />
      </div>

      {/* Fee Info */}
      <div className="text-xs text-gray-500 mb-4">
        Taxa: 0.1% • 50% recompensa líder • 50% Gas Pool
      </div>

      {/* Button */}
      <button
        className="w-full py-3 rounded-xl bg-black text-white font-semibold
        hover:bg-[#D4AF37] hover:text-black transition shadow-md"
      >
        Confirmar Recarga
      </button>

    </div>
  );
}