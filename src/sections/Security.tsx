"use client";

import { motion } from "framer-motion";
import "@/styles/security.css";
import {
  ShieldCheck,
  Lock,
  FileSearch,
  GlobeLock
} from "lucide-react";

export default function Security() {
  return (
    <section
      id="security"
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
        SEGURANÇA • E-COIN
      </motion.h2>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="max-w-3xl text-center text-gray-300 mb-16 px-4 leading-relaxed"
      >
        A E-Coin opera com padrões internacionais de segurança: auditorias externas,
        supply fixo, multisig, transparência on-chain e histórico imutável.
        Construída para ser segura — para sempre.
      </motion.p>

      {/* GRID OF SECURITY FEATURES */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-6 max-w-6xl">

        {/* 1. CertiK Audit */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="security-card text-center"
        >
          <ShieldCheck className="security-icon" />
          <h3 className="security-title">Auditada Externamente</h3>
          <p className="security-detail">
            Auditorias completas estilo CertiK/HashDit, garantindo que o código
            é seguro, sem vulnerabilidades, sem backdoors.
          </p>
        </motion.div>

        {/* 2. Multisig */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="security-card text-center"
        >
          <Lock className="security-icon" />
          <h3 className="security-title">Carteira Multisig</h3>
          <p className="security-detail">
            A liquidez e as reservas operam com assinaturas múltiplas — impossível
            movimentar fundos sem aprovação da equipe autorizada.
          </p>
        </motion.div>

        {/* 3. Proof of Reserves */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="security-card text-center"
        >
          <FileSearch className="security-icon" />
          <h3 className="security-title">Prova de Reservas</h3>
          <p className="security-detail">
            As reservas são verificadas e públicas. Qualquer pessoa pode confirmar
            a liquidez real em tempo real.
          </p>
        </motion.div>

        {/* 4. BSC Safety */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="security-card text-center"
        >
          <GlobeLock className="security-icon" />
          <h3 className="security-title">100% On-Chain</h3>
          <p className="security-detail">
            Toda a operação acontece na Binance Smart Chain — rede rápida,
            barata e comprovada globalmente.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
