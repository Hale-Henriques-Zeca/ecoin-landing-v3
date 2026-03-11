"use client";

import Link from "next/link";

export default function ClaimGasNotice() {

  return (

    <div className="w-full bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-4 mb-8">

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">

        <div className="text-sm text-yellow-300">

          ⚠️ <b>Small claim detected?</b>  
          Gas fees on BNB Chain may be higher than very small rewards.

        </div>

        <Link
          href="/claim-gas-info"
          className="text-[#D4AF37] underline text-sm font-semibold"
        >
          Learn why this happens →
        </Link>

      </div>

    </div>

  );

}