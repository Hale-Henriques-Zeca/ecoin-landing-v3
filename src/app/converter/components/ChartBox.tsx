"use client";

import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Filler,
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Filler
);

interface Props {
  history: number[];
  labels?: string[];
  from?: string;
  to?: string;
  rate?: number; // 👈 adicionada para suportar ConverterPage
}

export default function ChartBox({
  history,
  labels = [],
  from = "ECOIN",
  to = "USD",
  rate,
}: Props) {
  if (!history || history.length === 0) {
    return (
      <div className="w-full bg-black/60 border border-yellow-600 rounded-2xl p-6 mt-8 text-center text-gray-400">
        Sem dados suficientes para gerar gráfico ainda...
      </div>
    );
  }

    const data = {
    // ✅ Corrigido: garantir que labels seja sempre string[]
    labels: labels.length > 0 ? labels : history.map((_, i) => (i + 1).toString()),
    datasets: [
      {
        label: `${from} → ${to}`,
        data: history,
        borderColor: "#D4AF37",
        backgroundColor: "rgba(212,175,55,0.15)",
        tension: 0.38,
        borderWidth: 3,
        pointRadius: 0,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        ticks: { color: "#bbb" },
        grid: { color: "rgba(255,255,255,0.06)" },
      },
      y: {
        ticks: { color: "#bbb" },
        grid: { color: "rgba(255,255,255,0.06)" },
      },
    },
    plugins: {
      tooltip: {
        enabled: true,
        backgroundColor: "#000",
        borderColor: "#D4AF37",
        borderWidth: 1,
        padding: 10,
        titleColor: "#D4AF37",
        bodyColor: "#fff",
      },
      legend: {
        labels: {
          color: "#D4AF37",
          font: { size: 14 },
        },
      },
    },
  };

  return (
    <div className="w-full bg-black/60 border border-yellow-600 rounded-2xl p-6 mt-10 shadow-xl">
      <h2 className="text-yellow-500 text-xl font-semibold mb-4 text-center tracking-wide">
        Taxa de Câmbio — Histórico
      </h2>

      {/* Exibir taxa atual se disponível */}
      {rate !== undefined && (
        <p className="text-center text-gray-300 mb-2 text-sm">
          Taxa atual:{" "}
          <span className="text-[#D4AF37] font-bold">{rate.toFixed(4)}</span>
        </p>
      )}

      <Line data={data} options={options} />
    </div>
  );
}
