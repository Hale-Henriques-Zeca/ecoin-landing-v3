"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Função de contagem regressiva para cada evento
const Countdown = ({ targetDate }: { targetDate: string }) => {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const updateCountdown = () => {
      const diff = new Date(targetDate).getTime() - new Date().getTime();
      if (diff <= 0) {
        setTimeLeft("🚀 Live Now!");
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        setTimeLeft(`${days}d ${hours}h left`);
      }
    };
    updateCountdown();
    const timer = setInterval(updateCountdown, 60000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <span className="text-[#D4AF37] text-sm font-medium tracking-wide">
      {timeLeft}
    </span>
  );
};

// Lista de eventos
const events = [
  {
    id: 1,
    title: "E-Coin Accelerate Global Summit 2026",
    subtitle: "Feb. 15, 2026 @ Beira & Nhamatanda, Mozambique",
    location: "Beira & Nhamatanda",
    date: "2026-02-15T09:00:00",
    displayDate: "Sun, Feb 15",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    link: "#",
  },
  {
    id: 2,
    title: "EKD Breakpoint 2026",
    subtitle: "Mar. 20, 2026 @ New York, US",
    location: "New York",
    date: "2026-03-20T10:00:00",
    displayDate: "Fri, Mar 20",
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=1200&q=80",
    link: "#",
  },
  {
    id: 3,
    title: "E-Pay International Conference",
    subtitle: "May. 9, 2026 @ Toronto, Canada",
    location: "Toronto",
    date: "2026-05-09T09:00:00",
    displayDate: "Sat, May 9",
    image:
      "https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=1200&q=80",
    link: "#",
  },
  {
    id: 4,
    title: "E-Chain Developers Expo 2026",
    subtitle: "July 12, 2026 @ London, UK",
    location: "London",
    date: "2026-07-12T09:00:00",
    displayDate: "Sun, Jul 12",
    image:
      "https://images.unsplash.com/photo-1486308510493-aa64833634ef?auto=format&fit=crop&w=1200&q=80",
    link: "#",
  },
];


      export default function EventsShowcase() {
  return (
    <section className="relative w-full bg-black text-white py-24 px-6 overflow-hidden">
      {/* FUNDO CINEMATOGRÁFICO */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.12),transparent_70%)]" />

      {/* CABEÇALHO */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto mb-14"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center md:text-left">
          Global <span className="text-[#D4AF37]">Events</span> & Conferences
        </h2>
        <p className="text-gray-400 mt-4 md:mt-0 text-center md:text-right max-w-md">
          Participe dos encontros oficiais da EKD Corporation, impulsionando o
          futuro da tecnologia, blockchain e economia corporativa.
        </p>
      </motion.div>


      {/* Carrossel horizontal */}
      <motion.div
        className="flex gap-8 overflow-x-auto px-8 pb-6 scrollbar-thin scrollbar-thumb-[#D4AF37]/30"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {events.map((event) => (
          <motion.div
            key={event.id}
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.3 }}
            className="relative min-w-[320px] md:min-w-[380px] lg:min-w-[420px] rounded-2xl overflow-hidden border border-gray-800 bg-[#0D0D0D]/70 shadow-xl hover:shadow-[0_0_25px_#D4AF3755] cursor-pointer"
          >
            {/* Imagem */}
            <img
              src={event.image}
              alt={event.title}
              className="object-cover w-full h-[280px] opacity-90 hover:opacity-100 transition duration-500"
            />

            {/* Conteúdo */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent p-6 flex flex-col justify-end">
              <p className="text-sm text-gray-300 mb-1">{event.subtitle}</p>
              <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
              <a
                href={event.link}
                className="inline-flex items-center gap-2 text-[#D4AF37] hover:underline text-sm"
              >
                Learn more →
              </a>
            </div>

            {/* Rodapé */}
            <div className="flex justify-between items-center bg-[#0D0D0D]/80 px-5 py-3 text-sm border-t border-gray-800">
              <span className="flex items-center gap-2 text-gray-300">
                📅 {event.displayDate}
              </span>
              <span className="flex items-center gap-2 text-gray-300">
                📍 {event.location}
              </span>
            </div>

            {/* Contador */}
            <div className="absolute top-4 right-4 bg-black/60 px-3 py-1.5 rounded-full border border-[#D4AF37]/40 backdrop-blur-sm">
              <Countdown targetDate={event.date} />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
