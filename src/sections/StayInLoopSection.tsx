"use client";

import { motion } from "framer-motion";

export default function StayInLoopSection() {
  return (
    <section className="relative w-full bg-black text-white py-24 px-6 flex flex-col items-center overflow-hidden">
      {/* FUNDO CINEMATOGRÁFICO */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.1),transparent_70%)]" />

      {/* CABEÇALHO */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl md:text-6xl font-bold">
          Stay in the <span className="text-[#D4AF37]">loop</span>
        </h2>
        <p className="text-gray-400 mt-4 text-lg">
          Eventos, blogs, press releases, vídeos, podcasts e transmissões — tudo num só lugar.
        </p>
      </motion.div>

      {/* CONTEÚDO PRINCIPAL */}
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* 1️⃣ Featured Text Column */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#0D0D0D]/60 border border-gray-800 rounded-xl p-6"
        >
          <h3 className="text-[#D4AF37] text-sm uppercase mb-4 tracking-[0.2em]">
            Featured
          </h3>
          <ul className="space-y-4">
            <li className="flex justify-between items-center border-b border-gray-800 pb-3">
              <span>Série E-Coin Documentary: O futuro institucional</span>
              <a href="#" className="text-[#D4AF37] hover:underline">→</a>
            </li>
            <li className="flex justify-between items-center border-b border-gray-800 pb-3">
              <span>Explorando o impacto global da EKD</span>
              <a href="#" className="text-[#D4AF37] hover:underline">→</a>
            </li>
            <li className="flex justify-between items-center">
              <span>Integrando E-Pay em plataformas internacionais</span>
              <a href="#" className="text-[#D4AF37] hover:underline">→</a>
            </li>
          </ul>
        </motion.div>

        {/* 2️⃣ Video / Event Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-xl border border-gray-800"
        >
          <img
            src="https://cdn.pixabay.com/photo/2017/08/10/08/29/bitcoin-2614943_1280.jpg"
            alt="Evento EKD"
            className="object-cover w-full h-[340px] opacity-80 hover:opacity-100 transition"
          />
          <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/60 to-transparent p-6">
            <h4 className="font-semibold text-white text-lg">
              EKD Summit 2025 — Beira & Nhamatanda Edition
            </h4>
            <a
              href="#"
              className="text-[#D4AF37] mt-1 inline-block hover:underline text-sm"
            >
              ▶️ Watch recap
            </a>
          </div>
        </motion.div>

        {/* 3️⃣ Social Stats */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#0D0D0D]/60 border border-gray-800 rounded-xl flex flex-col justify-between"
        >
          <div className="p-6">
            <h4 className="uppercase text-sm text-gray-400 tracking-[0.2em]">
              TVL (Total Value Locked)
            </h4>
            <p className="text-4xl md:text-5xl font-bold mt-3 text-[#D4AF37]">
              $2,048,375,211
            </p>
            <p className="text-gray-500 text-sm mt-2">Across E-Coin & EKD Ecosystem</p>
          </div>

          <div className="grid grid-cols-2 border-t border-gray-800">
            <a
              href="https://discord.com"
              target="_blank"
              className="flex flex-col items-center justify-center py-6 border-r border-gray-800 hover:bg-[#1C1C1C]/60 transition"
            >
              <img src="/icons/discord.svg" alt="Discord" className="w-8 h-8 mb-2" />
              <span className="text-sm text-gray-300">Discord</span>
            </a>
            <a
              href="https://x.com"
              target="_blank"
              className="flex flex-col items-center justify-center py-6 hover:bg-[#1C1C1C]/60 transition"
            >
              <img src="/icons/x.svg" alt="X" className="w-8 h-8 mb-2" />
              <span className="text-sm text-gray-300">Twitter</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
