"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { formatUnits } from "viem";
import { useDexWallet } from "@/contexts/DexWalletContext";

export default function EcoinWalletDashboard() {

  const { balances } = useDexWallet();

  const tokens = [
    {
      name: "E-Coin",
      symbol: "ECOIN",
      balance: balances.ecoin,
      decimals: 18,
      icon: "/crypto/ecoin.png",
      price: 1,
    },
    {
      name: "E-USD",
      symbol: "EUSD",
      balance: balances.eusd,
      decimals: 18,
      icon: "/crypto/eusd.png",
      price: 1,
    },
    {
      name: "USDT",
      symbol: "USDT",
      balance: balances.usdt,
      decimals: 18,
      icon: "/crypto/usdt.png",
      price: 1,
    },
    {
      name: "BNB",
      symbol: "BNB",
      balance: balances.bnb,
      decimals: 18,
      icon: "/crypto/bnb.png",
      price: 600,
    },
  ];

  const totalUSD = tokens.reduce((sum, token) => {
    const amount = Number(formatUnits(token.balance, token.decimals));
    return sum + amount * token.price;
  }, 0);

  return (
    <div className="w-full max-w-4xl mx-auto bg-[#0D0D0D]/80 border border-gray-800 rounded-2xl p-6 space-y-6">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-[#D4AF37]">
          Portfolio
        </h2>

        <div className="text-right">
          <div className="text-sm text-gray-400">Total Value</div>
          <div className="text-lg font-semibold text-white">
            ${totalUSD.toFixed(2)}
          </div>
        </div>
      </div>

      {/* TOKEN LIST */}
      <div className="space-y-3">

        {tokens.map((token, i) => {

          const amount = Number(
            formatUnits(token.balance, token.decimals)
          );

          const value = amount * token.price;

          return (

            <motion.div
              key={token.symbol}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center justify-between bg-black/40 border border-gray-800 rounded-xl p-4"
            >

              {/* TOKEN INFO */}
              <div className="flex items-center gap-3">

                <Image
                  src={token.icon}
                  alt={token.symbol}
                  width={32}
                  height={32}
                />

                <div>
                  <div className="text-sm text-white font-medium">
                    {token.name}
                  </div>

                  <div className="text-xs text-gray-400">
                    {token.symbol}
                  </div>
                </div>

              </div>

              {/* BALANCE */}
              <div className="text-right">

                <div className="text-sm text-white">
                  {amount.toFixed(4)}
                </div>

                <div className="text-xs text-gray-400">
                  ${value.toFixed(2)}
                </div>

              </div>

            </motion.div>

          );
        })}

      </div>

    </div>
  );
}