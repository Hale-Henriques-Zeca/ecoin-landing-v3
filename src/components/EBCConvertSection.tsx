"use client";

import EBCConvertPanel from "@/components/EBCConvertPanel";

export default function EBCConvertSection() {

  return (

<section className="relative bg-[#020617] text-white py-20 px-4 sm:px-8 rounded-2xl border border-[#1C2D5A]/50 overflow-hidden">

  {/* Fundo cinematográfico */}
  <div className="absolute inset-0 -z-10">

    <div className="absolute top-0 left-1/2 w-[420px] h-[420px] -translate-x-1/2 bg-[#D4AF37]/10 rounded-full blur-[120px]" />

    <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#1C2D5A]/40 rounded-full blur-[100px]" />

  </div>

  {/* conteúdo */}
  <div className="relative max-w-6xl mx-auto flex justify-center">

    <EBCConvertPanel />

  </div>

</section>

  );
}