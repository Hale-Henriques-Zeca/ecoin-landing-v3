"use client";

export default function ECGPSEMarketMap() {

  return (

    <section className="max-w-6xl mx-auto mt-24">

      <h3 className="text-center text-2xl font-bold text-[#D4AF37] mb-12">
        🌍 Global Market Synchronization
      </h3>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="border border-gray-800 p-6 rounded-xl bg-black/60 text-center">
          <h4 className="text-[#D4AF37] font-semibold mb-2">
            🇺🇸 America
          </h4>
          <p className="text-gray-400 text-sm">
            Centralized exchange liquidity anchors global price discovery.
          </p>
        </div>

        <div className="border border-gray-800 p-6 rounded-xl bg-black/60 text-center">
          <h4 className="text-[#D4AF37] font-semibold mb-2">
            🇪🇺 Europe
          </h4>
          <p className="text-gray-400 text-sm">
            Arbitrage trading aligns regional market spreads.
          </p>
        </div>

        <div className="border border-gray-800 p-6 rounded-xl bg-black/60 text-center">
          <h4 className="text-[#D4AF37] font-semibold mb-2">
            🌏 Asia
          </h4>
          <p className="text-gray-400 text-sm">
            High-volume markets influence weighted global price.
          </p>
        </div>

      </div>

    </section>

  )

}