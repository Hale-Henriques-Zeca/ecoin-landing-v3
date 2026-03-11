"use client";

import { PieChart, Pie, Cell } from "recharts";

export default function LiquidityDonut() {
  const data = [
    { name: "Sua Liquidez", value: 100 },
    { name: "Liquidez Global", value: 99900 },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <PieChart width={220} height={220}>
        <Pie
          data={data}
          innerRadius={70}
          outerRadius={100}
          dataKey="value"
        >
          <Cell fill="#00FF9C" />
          <Cell fill="#1f2937" />
        </Pie>
      </PieChart>

      <p className="text-sm text-gray-400 mt-4 text-center">
        A sua liquidez comparada ao total do pool
      </p>
    </div>
  );
}
