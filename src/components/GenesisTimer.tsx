"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function GenesisTimer() {

  const genesisDate = new Date("2025-09-08T20:20:16Z");

  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {

    const updateTimer = () => {

      const now = new Date().getTime();
      const genesis = genesisDate.getTime();

      const diff = now - genesis;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTime({ days, hours, minutes, seconds });

    };

    updateTimer();

    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);

  }, []);

  return (

    <div className="mt-8 flex flex-col items-center">

      {/* Timestamp */}
      <span className="text-xs sm:text-sm text-white/60 mb-6 text-center">
        🕒 Token Genesis Timestamp (E-Coin Creation date):
        <strong className="text-[#D4AF37] ml-2">
          September-08-2025 08:20:16 PM UTC
        </strong>
      </span>

      {/* Counter */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">

        <TimeBox value={time.days} label="DAYS" />
        <TimeBox value={time.hours} label="HOURS" />
        <TimeBox value={time.minutes} label="MINUTES" />
        <TimeBox value={time.seconds} label="SECONDS" />

      </div>

    </div>
  );
}

function TimeBox({ value, label }) {

  return (

    <motion.div
      key={value}
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="relative rounded-2xl px-6 py-5 text-center
      border border-[#D4AF37]/30
      bg-gradient-to-b from-[#020617] to-[#020617]/60
      backdrop-blur-xl
      shadow-[0_0_25px_rgba(212,175,55,0.15)]"
    >

      {/* glow */}
      <div className="absolute inset-0 rounded-2xl blur-xl opacity-30
      bg-gradient-to-r from-[#D4AF37]/30 via-transparent to-[#0B5FFF]/20" />

      <div className="relative z-10">

        <motion.div
          key={value}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="text-3xl sm:text-4xl font-bold text-[#D4AF37]"
        >
          {value}
        </motion.div>

        <div className="text-[10px] sm:text-xs tracking-[0.25em] text-white/60 mt-1">
          {label}
        </div>

      </div>

    </motion.div>
  );
}