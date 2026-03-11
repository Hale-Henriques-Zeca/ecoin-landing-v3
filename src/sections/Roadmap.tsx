"use client";

import { motion } from "framer-motion";
import "@/styles/roadmap.css";

export default function Roadmap() {
  return (
    <section
      id="roadmap"
      className="w-full py-28 bg-black text-white flex flex-col items-center"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10 text-4xl font-bold text-[#D4AF37]"
      >
        ROADMAP • 2025 → 2027
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="max-w-3xl text-center text-gray-300 mb-16 px-4 leading-relaxed"
      >
        A evolução oficial da moeda corporativa da EdenKingDom — crescimento
        contínuo, listagens globais e adoção mundial até 2027.
      </motion.p>

      {/* Timeline Container */}
      <div className="relative max-w-4xl w-full px-10">
        <div className="roadmap-line absolute left-1/2 transform -translate-x-1/2"></div>

        <div className="flex flex-col gap-14">
          {/* Q3 - 2025 */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="roadmap-item text-left"
          >
            <div className="roadmap-dot"></div>
            <div className="roadmap-card">
              <h3 className="text-[#D4AF37] font-bold text-xl mb-2">Q3 - 2025</h3>
              <ul className="list-disc ml-6 text-gray-300">
                <li>Lançamento oficial da E-Coin</li>
                <li>Engines: ECGPSE, BuyBack Smart Pool, ECP e Conversol E-Coin(E-Swap) Instituicional (Binance-like)</li>
                <li>Lançamento do Stream Staking </li>
                <li>Auditoria e relatório de segurança</li>
              </ul>
            </div>
          </motion.div>

          {/* 2026 */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="roadmap-item text-right"
          >
            <div className="roadmap-dot"></div>
            <div className="roadmap-card">
              <h3 className="text-[#D4AF37] font-bold text-xl mb-2">Q1 - 2026</h3>
              <ul className="list-disc ml-6 text-gray-300">
                <li>Lançamento da EFTE</li>
                 <li>Listagem Oficial da E-Coin em EFTE </li>
                <li>Expansão do Ecossistema EdenKingDom </li>
              </ul>
            </div>
          </motion.div>

          {/* 2026 */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="roadmap-item text-left"
          >
            <div className="roadmap-dot"></div>
            <div className="roadmap-card">
              <h3 className="text-[#D4AF37] font-bold text-xl mb-2">Q2 - 2026</h3>
              <ul className="list-disc ml-6 text-gray-300">
                <li>Listagens Inicial oficial em CEX: OKX, Gate.io, Bitget, KuCoin</li>
                <li>Listagens Secundaria Ofcial em CEX: Binance & Coinbase</li>
                <li>Integrações globais com serviços EdenKingDom</li>
                <li>Lançamento da E-Pay TokenPad Dashboard em EFTE</li>
              </ul>
            </div>
          </motion.div>

          {/* 2028 */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="roadmap-item text-right"
          >
            <div className="roadmap-dot"></div>
            <div className="roadmap-card">
              <h3 className="text-[#D4AF37] font-bold text-xl mb-2">Q3 - 2026</h3>
              <ul className="list-disc ml-6 text-gray-300">
                <li>Implementação do E-Chain Browser (E-Finder)</li>
                <li>Expansão para Ásia, Europa, África, América do Sul, Central depois do Norte</li>
              </ul>
            </div>
          </motion.div>

          {/* 2029 */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="roadmap-item text-left"
          >
            <div className="roadmap-dot"></div>
            <div className="roadmap-card">
              <h3 className="text-[#D4AF37] font-bold text-xl mb-2">Q4 - 2026</h3>
              <ul className="list-disc ml-6 text-gray-300">
                <li>Introdução do E-Pay Global</li>
                <li>Implementação da E-Pay Vault</li>
                <li>Adoção corporativa internacional</li>
                <li>E-Pay + Crypto ATM Network Vinculadas a E-Coin e E-USD</li>
                <li>Pagamentos globais com E-Coin e E-USD</li>
              </ul>
            </div>
          </motion.div>

          {/* 2030 */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="roadmap-item text-right"
          >
            <div className="roadmap-dot"></div>
            <div className="roadmap-card">
              <h3 className="text-[#D4AF37] font-bold text-xl mb-2">Q2 - 2027</h3>
              <ul className="list-disc ml-6 text-gray-300">
                  <li>Lançamento do E-Chain Testnet</li>
                <li>E-Coin entre as 20 maiores do mundo</li>
                <li>Ecossistema EdenKingDom 100% funcional no planeta</li>
              </ul>
            </div>
          </motion.div>

           {/* 2030 */}
         
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="roadmap-item text-left"
          >
            <div className="roadmap-dot"></div>
            <div className="roadmap-card">
              <h3 className="text-[#D4AF37] font-bold text-xl mb-2">Q3 - 2027</h3>
              <ul className="list-disc ml-6 text-gray-300">
               <li>Mainnet da E-Chain</li>
              </ul>
            </div>
          </motion.div>

          {/* 2030 */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="roadmap-item text-right"
          >
            <div className="roadmap-dot"></div>
            <div className="roadmap-card">
              <h3 className="text-[#D4AF37] font-bold text-xl mb-2">Q4 - 2027</h3>
              <ul className="list-disc ml-6 text-gray-300">
                <li>E-Chain completa integração mundial</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
