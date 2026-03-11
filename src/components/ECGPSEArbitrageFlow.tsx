"use client";

export default function ECGPSEArbitrageFlow() {

  return (

    <section className="max-w-6xl mx-auto mt-24">

      <h3 className="text-center text-2xl font-bold text-[#D4AF37] mb-12">
        🔁 Arbitrage Detection Flow
      </h3>

      <div className="grid md:grid-cols-4 gap-6 text-center">

        <div className="p-6 border border-gray-800 rounded-xl bg-black/60">
          <h4 className="text-[#D4AF37] font-semibold mb-2">
            1️⃣ Data Collection
          </h4>
          <p className="text-gray-400 text-sm">
            ECGPSE reads prices from all exchanges.
          </p>
        </div>

        <div className="p-6 border border-gray-800 rounded-xl bg-black/60">
          <h4 className="text-[#D4AF37] font-semibold mb-2">
            2️⃣ Price Comparison
          </h4>
          <p className="text-gray-400 text-sm">
            Global weighted average (ECP) is calculated.
          </p>
        </div>

        <div className="p-6 border border-gray-800 rounded-xl bg-black/60">
          <h4 className="text-[#D4AF37] font-semibold mb-2">
            3️⃣ Deviation Detection
          </h4>
          <p className="text-gray-400 text-sm">
            Spread above 2% triggers correction logic.
          </p>
        </div>

        <div className="p-6 border border-gray-800 rounded-xl bg-black/60">
          <h4 className="text-[#D4AF37] font-semibold mb-2">
            4️⃣ Liquidity Action
          </h4>
          <p className="text-gray-400 text-sm">
            Buy-Back or Sell-Back executed by E-Treasury.
          </p>
        </div>

      </div>

    </section>

  )

}