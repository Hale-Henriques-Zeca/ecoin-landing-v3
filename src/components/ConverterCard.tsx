"use client";

import { useState } from "react";

const tokens = [
  { symbol: "USDT", logo: "/tokens/usdt.png" },
  { symbol: "USDC", logo: "/tokens/usdc.png" },
  { symbol: "FDUSD", logo: "/tokens/fdusd.png" },
  { symbol: "DAI", logo: "/tokens/dai.png" },
  { symbol: "BNB", logo: "/tokens/bnb.png" },
];

export default function ConverterCard() {
  const [fromToken, setFromToken] = useState("USDT");
  const [toToken, setToToken] = useState("BNB");
  const [amount, setAmount] = useState("");

  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-6 border border-gray-200">

      {/* Header */}
      <h2 className="text-xl font-semibold mb-6 text-center">
        E-Coin Hub Converter
      </h2>

      {/* FROM */}
      <div className="mb-4">
        <label className="text-sm text-gray-500">Você envia</label>

        <div className="flex items-center justify-between bg-gray-50 p-3 rounded-xl border mt-2">
          <input
            type="number"
            placeholder="0.00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="bg-transparent outline-none w-full text-lg"
          />

          <select
            value={fromToken}
            onChange={(e) => setFromToken(e.target.value)}
            className="bg-transparent font-semibold outline-none"
          >
            {tokens.map((t) => (
              <option key={t.symbol} value={t.symbol}>
                {t.symbol}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* SWITCH */}
      <div className="flex justify-center my-3">
        <button
          onClick={() => {
            const temp = fromToken;
            setFromToken(toToken);
            setToToken(temp);
          }}
          className="bg-black text-white rounded-full px-4 py-2
            hover:bg-[#D4AF37] hover:text-black transition"
        >
          ⇅
        </button>
      </div>

      {/* TO */}
      <div className="mb-6">
        <label className="text-sm text-gray-500">Você recebe</label>

        <div className="flex items-center justify-between bg-gray-50 p-3 rounded-xl border mt-2">
          <input
            type="text"
            placeholder="0.00"
            disabled
            className="bg-transparent outline-none w-full text-lg"
          />

          <select
            value={toToken}
            onChange={(e) => setToToken(e.target.value)}
            className="bg-transparent font-semibold outline-none"
          >
            {tokens.map((t) => (
              <option key={t.symbol} value={t.symbol}>
                {t.symbol}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Info */}
      <div className="text-xs text-gray-500 mb-4">
        Taxa: <span className="text-black font-medium">0.1%</span>  
        • Oráculo: Chainlink  
        • 50% recompensa líder
      </div>

      {/* Connect Wallet */}
      <button
        className="w-full py-3 rounded-xl bg-black text-white font-semibold
        hover:bg-[#D4AF37] hover:text-black transition shadow-md"
      >
        Conectar Carteira
      </button>
    </div>
  );
}