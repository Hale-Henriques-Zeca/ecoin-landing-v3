"use client";

export default function DividendsTab() {
  return (
    <div className="space-y-4">
      <h4 className="text-[#00FF9C] font-semibold">Dividendos</h4>

      <div className="bg-black/40 rounded-xl p-4 space-y-2 text-sm text-gray-400">
        <div>Epoch atual: <span className="text-white">#128</span></div>
        <div>Dividendos pendentes: <span className="text-green-400">$0.40</span></div>
        <div>Pool disponível hoje: <span className="text-white">$400</span></div>
      </div>

      <button
        className="w-full bg-gradient-to-r from-[#00FF9C] to-[#00C3FF] text-black py-3 rounded-xl font-bold"
      >
        Claim Dividendos
      </button>
    </div>
  );
}
