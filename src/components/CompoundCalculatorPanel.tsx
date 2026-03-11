"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export default function CompoundCalculatorPanel() {
  const [mode, setMode] = useState<"simple" | "compound">("compound");

  // === Campos de entrada ===
  const [amount, setAmount] = useState<number>(0);
  const [rate, setRate] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [compoundType, setCompoundType] = useState("Per Day");

  const [results, setResults] = useState<
    { day: number; principal: number; gain: number; total: number }[]
  >([]);
  const [finalTotal, setFinalTotal] = useState<number | null>(null);

  // === Calculadora de Juros Compostos ===
  const calculateCompound = () => {
    if (!amount || !rate || !duration) return;

    const data = [];
    let current = amount;

    for (let i = 1; i <= duration; i++) {
      const gain = current * (rate / 100);
      current += gain;
      data.push({
        day: i,
        principal: parseFloat((current - gain).toFixed(2)),
        gain: parseFloat(gain.toFixed(2)),
        total: parseFloat(current.toFixed(2)),
      });
    }

    setResults(data);
    setFinalTotal(current);
  };

  const resetAll = () => {
    setAmount(0);
    setRate(0);
    setDuration(0);
    setResults([]);
    setFinalTotal(null);
  };

  // === Calculadora de Percentagem Simples ===
  const [baseValue, setBaseValue] = useState<number>(0);
  const [percentage, setPercentage] = useState<number>(0);
  const [simpleResult, setSimpleResult] = useState<number | null>(null);

  const calculateSimple = () => {
    if (!baseValue || !percentage) return;
    const result = (baseValue * percentage) / 100;
    setSimpleResult(result);
  };

  const resetSimple = () => {
    setBaseValue(0);
    setPercentage(0);
    setSimpleResult(null);
  };

  // === Dados do gráfico de barras ===
  const barData = {
    labels: results.map((r) => r.day),
    datasets: [
      {
        label: "Compounded Amount",
        data: results.map((r) => r.total),
        backgroundColor: "rgba(212,175,55,0.7)",
      },
      {
        label: "Gain",
        data: results.map((r) => r.gain),
        backgroundColor: "rgba(212,175,55,0.3)",
      },
    ],
  };

  const donutData = {
    labels: ["Principal", "Gain"],
    datasets: [
      {
        data: [
          amount,
          finalTotal ? finalTotal - amount : 0,
        ],
        backgroundColor: ["#D4AF37", "#6B6B6B"],
      },
    ],
  };

  return (
    
    
    <section className="bg-black text-white border border-[#D4AF37]/20 rounded-2xl p-6 max-w-lg mx-auto shadow-lg">
      
      
      {/* Título e Switch */}
      <div className="flex flex-col items-center mb-6">
        <h3 className="text-2xl font-bold text-[#D4AF37] mb-3">
          EKD Financial Calculators
        </h3>

        <div className="flex items-center bg-[#0D0D0D]/70 border border-gray-800 rounded-full p-2">
          {["compound", "simple"].map((tab) => (
            <button
              key={tab}
              onClick={() => setMode(tab as any)}
              className={`px-5 py-2 rounded-full text-sm capitalize transition ${
                mode === tab
                  ? "bg-[#D4AF37]/20 text-[#D4AF37]"
                  : "text-gray-400 hover:text-[#D4AF37]"
              }`}
            >
              {tab === "compound" ? "Compound Interest" : "Simple %"}
            </button>
          ))}
        </div>
      </div>

      {/* Modo Juros Compostos */}
      {mode === "compound" && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm text-gray-400">Amount</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(parseFloat(e.target.value))}
                className="w-full bg-transparent border border-gray-700 rounded-lg p-2 text-[#D4AF37] focus:outline-none"
              />
            </div>
            <div>
              <label className="text-sm text-gray-400">Rate (%)</label>
              <input
                type="number"
                value={rate}
                onChange={(e) => setRate(parseFloat(e.target.value))}
                className="w-full bg-transparent border border-gray-700 rounded-lg p-2 text-[#D4AF37] focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm text-gray-400">Duration (days)</label>
              <input
                type="number"
                value={duration}
                onChange={(e) => setDuration(parseFloat(e.target.value))}
                className="w-full bg-transparent border border-gray-700 rounded-lg p-2 text-[#D4AF37] focus:outline-none"
              />
            </div>
            <div>
              <label className="text-sm text-gray-400">Compound</label>
              <select
                value={compoundType}
                onChange={(e) => setCompoundType(e.target.value)}
                className="w-full bg-transparent border border-gray-700 rounded-lg p-2 text-[#D4AF37] focus:outline-none"
              >
                <option>Per Day</option>
                <option>Per Month</option>
                <option>Per Quarter</option>
                <option>Per 6 Months</option>
                <option>Per Year</option>
                <option>12 Hours</option>
              </select>
            </div>
          </div>

          <div className="flex gap-3 mt-3">
            <button
              onClick={calculateCompound}
              className="flex-1 bg-[#D4AF37] text-black font-bold py-2 rounded-lg hover:bg-[#f1c95a]"
            >
              Calculate
            </button>
            <button
              onClick={resetAll}
              className="flex-1 bg-transparent border border-[#D4AF37] text-[#D4AF37] font-bold py-2 rounded-lg hover:bg-[#D4AF37]/10"
            >
              Reset
            </button>
          </div>

          {results.length > 0 && (
            <>
              <div className="h-64 mt-6">
                <Bar
                  data={barData}
                  options={{
                    responsive: true,
                    plugins: { legend: { labels: { color: "#fff" } } },
                    scales: {
                      x: { ticks: { color: "#fff" } },
                      y: { ticks: { color: "#fff" } },
                    },
                  }}
                />
              </div>

              <div className="flex justify-center mt-6">
                <div className="w-48 h-48">
                  <Doughnut data={donutData} />
                </div>
              </div>

              <h4 className="text-center text-[#D4AF37] mt-4 text-lg font-bold">
                Final Total: {finalTotal?.toFixed(2)}
              </h4>

              <div className="mt-6 overflow-x-auto">
                <table className="w-full text-sm text-left border-t border-[#D4AF37]/20">
                  <thead>
                    <tr className="text-[#D4AF37] border-b border-[#D4AF37]/20">
                      <th className="py-2">Day</th>
                      <th className="py-2">Principal</th>
                      <th className="py-2">Gain</th>
                      <th className="py-2">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {results.map((r) => (
                      <tr key={r.day} className="border-b border-gray-800">
                        <td className="py-1">{r.day}</td>
                        <td className="py-1">{r.principal}</td>
                        <td className="py-1 text-green-400">{r.gain}</td>
                        <td className="py-1 text-[#D4AF37]">{r.total}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </motion.div>
      )}

      {/* Modo Percentagem Simples */}
      {mode === "simple" && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <div>
            <label className="text-sm text-gray-400">Base Value</label>
            <input
              type="number"
              value={baseValue}
              onChange={(e) => setBaseValue(parseFloat(e.target.value))}
              className="w-full bg-transparent border border-gray-700 rounded-lg p-2 text-[#D4AF37] focus:outline-none"
            />
          </div>

          <div>
            <label className="text-sm text-gray-400">Percentage (%)</label>
            <input
              type="number"
              value={percentage}
              onChange={(e) => setPercentage(parseFloat(e.target.value))}
              className="w-full bg-transparent border border-gray-700 rounded-lg p-2 text-[#D4AF37] focus:outline-none"
            />
          </div>

          <div className="flex gap-3 mt-3">
            <button
              onClick={calculateSimple}
              className="flex-1 bg-[#D4AF37] text-black font-bold py-2 rounded-lg hover:bg-[#f1c95a]"
            >
              Calculate
            </button>
            <button
              onClick={resetSimple}
              className="flex-1 bg-transparent border border-[#D4AF37] text-[#D4AF37] font-bold py-2 rounded-lg hover:bg-[#D4AF37]/10"
            >
              Reset
            </button>
          </div>

          {simpleResult !== null && (
            <div className="text-center mt-4">
              <h4 className="text-xl font-bold text-[#D4AF37]">
                {percentage}% of {baseValue} = {simpleResult.toFixed(2)}
              </h4>
            </div>
          )}
        </motion.div>
      )}
    </section>
  );
}
