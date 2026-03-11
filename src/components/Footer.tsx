"use client";

import { motion } from "framer-motion";
import {FaInstagram, FaTiktok, FaFacebookF, FaYoutube, FaTelegramPlane, FaTelegram, FaWhatsapp, FaTwitter, FaDiscord } from "react-icons/fa";
export default function Footer() {


  return (
    <footer className="w-full bg-black border-t border-[#D4AF37]/20 pt-16 pb-10">
      {/* FUNDO CINEMATOGRÁFICO */}
<div className="absolute inset-0 -z-10 bg-gradient-to-b from-black via-[#1C1C1C] to-black">
  <motion.div
    animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#D4AF3733,transparent_70%)] opacity-40"
  />
</div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">


        {/* BRANDING FUSION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-[#D4AF37] font-semibold text-lg tracking-widest">
            EDENKINGDOM & E-COIN
          </h2>

          <p className="text-sm text-gray-400 mt-3 leading-relaxed">
            Construindo o maior ecossistema corporativo da nova era — tecnologia,
            finanças, educação, saúde, energia, logística, blockchain e inovação
            para as próximas gerações.
          </p>
        </motion.div>

        {/* COLUNA 1 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold text-[#D4AF37] mb-4">
            Institucional
          </h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="hover:text-white cursor-pointer">Sobre Nós</li>
            <li className="hover:text-white cursor-pointer">Documentação</li>
            <li className="hover:text-white cursor-pointer">Sustentabilidade</li>
            <li className="hover:text-white cursor-pointer">Website oficial da EKD Corporation</li>
            <li className="hover:text-white cursor-pointer">Carreiras da EdenKingDom Corporation</li>
          </ul>
        </motion.div>

        {/* COLUNA 2 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-xl font-semibold text-[#D4AF37] mb-4">
            Produtos & Serviços
          </h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="hover:text-white cursor-pointer">E-Coin</li>
            <li className="hover:text-white cursor-pointer">E-Pay</li>
            <li className="hover:text-white cursor-pointer">E-Chain</li>
            <li className="hover:text-white cursor-pointer">E-Pay TokenPad</li>
            <li className="hover:text-white cursor-pointer">EFTE</li>
          </ul>
        </motion.div>

{/* Escritórios Fisicos */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-xl font-semibold text-[#D4AF37] mb-4">
            Escritórios Físicos
          </h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>📍 Moçambique - Nhamatanda</li>
            <li>📍 Canadá - Toronto</li>
            <li>📍 USA - Nova Iorque</li>
            <li className="hover:text-white cursor-pointer">
            </li>
          </ul>
        </motion.div>

        {/* CONTACTO */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
>
  <h3 className="text-xl font-semibold text-[#D4AF37] mb-4">
    Contacto
  </h3>

  <div className="flex flex-wrap gap-3">
    <a
      href="mailto:support@edenkingdom.org"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#D4AF37]/10 border border-[#D4AF37]/40 rounded-full px-4 py-2 text-sm text-[#D4AF37] hover:bg-[#D4AF37]/20 hover:shadow-[0_0_10px_#D4AF37aa] transition-all"
    >
      🧠 EKD: support@edenkingdom.org
    </a>

    <a
      href="mailto:e-coin@edenkingdom.org"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#D4AF37]/10 border border-[#D4AF37]/40 rounded-full px-4 py-2 text-sm text-[#D4AF37] hover:bg-[#D4AF37]/20 hover:shadow-[0_0_10px_#D4AF37aa] transition-all"
    >
      🪙 E-Coin: e-coin@edenkingdom.org
    </a>

    <a
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#D4AF37]/10 border border-[#D4AF37]/40 rounded-full px-4 py-2 text-sm text-[#D4AF37] hover:bg-[#D4AF37]/20 hover:shadow-[0_0_10px_#D4AF37aa] transition-all"
    >
      💎 Central EKD — Atendimento 24/7
    </a>
  </div>
</motion.div>


        {/* COLUNA 1 */}
{/* REDES SOCIAIS DA E-COIN */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  <h3 className="text-xl font-semibold text-[#D4AF37] mb-4">Redes sociais da E-Coin</h3>
  <div className="flex gap-2 text-4xl">
                <a href="https://t.me/ecoin2026" target="_blank" rel="noopener noreferrer">
                  <FaTelegramPlane className="text-[#D4AF37] transition" />
                </a>
                <a href="https://x.com/CoinE28810?t=Dm9BWORAfzh5YcuqHYIUwQ&s=09" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="text-[#D4AF37] transition" />
                </a>
                <a href="https://t.me/ecoin2025" target="_blank" rel="noopener noreferrer">
                            <FaTelegram className="text-[#D4AF37] transition" />
                          </a>
                <a href="https://chat.whatsapp.com/G1F6USX5NrrLKikm7yiXXQ" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp className="text-[#D4AF37] transition" />
                </a> 
                <a href="https://discord.com/users/1443996675638300834" target="_blank" rel="noopener noreferrer">
                  <FaDiscord className="text-[#D4AF37] transition" /> 
                </a>         
              </div>

</motion.div>

{/* REDES SOCIAIS DO CEO */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  <h3 className="text-xl font-semibold text-[#D4AF37] mb-4">
    Redes sociais do CEO
  </h3>
    <div className="flex gap-5 text-4xl">
                
                <a href="https://instagram.com/athelstanatanas" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-[#D4AF37] transition" />
                </a>
                <a href="https://x.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="text-[#D4AF37] transition" />
                </a>
  
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF className="text-[#D4AF37] transition" /> 
                </a>    
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                  <FaTiktok className="text-[#D4AF37] transition" /> 
                </a>        
              
  </div>
</motion.div>


{/* REDES SOCIAIS DA EDENKINGDOM */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  <h3 className="text-xl font-semibold text-[#D4AF37] mb-4">
    Redes sociais da EdenKingDom
  </h3>

  <div className="flex flex-wrap gap-3">
    <a
      href="https://whatsapp.com/channel/0029VbBhPltJpe8j9HOdF501"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#D4AF37]/10 border border-[#D4AF37]/40 rounded-full px-4 py-2 text-sm text-[#D4AF37] hover:bg-[#D4AF37]/20 hover:shadow-[0_0_10px_#D4AF37aa] transition-all"
    >
      📢 Canal WhatsApp EKD Oficial
    </a>

    <div className="flex gap-2 text-2xl">
                <a href="https://t.me/EdenKingDom" target="_blank" rel="noopener noreferrer">
                  <FaTelegramPlane className="text-[#D4AF37] transition" />
                </a>
                <a href="https://instagram.com/edenkingdom.corp" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-[#D4AF37] transition" />
                </a>
                <a href="https://x.com/EdenkingdomCorp" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="text-[#D4AF37] transition" />
                </a>
                
                <a href="https://youtube.com/channel/UCA7ndIm6iUhybDU72KxcLKg" target="_blank" rel="noopener noreferrer">
                  <FaYoutube className="text-[#D4AF37] transition" />
                </a>

                <a href="https://discord.gg/HkNkSkBJ" target="_blank" rel="noopener noreferrer">
                  <FaDiscord className="text-[#D4AF37] transition" />
                </a>
                <a href="https://t.me/EKDCorp" target="_blank" rel="noopener noreferrer">
                            <FaTelegram className="text-[#D4AF37] transition" />
                          </a>
                <a href="https://chat.whatsapp.com/G1F6USX5NrrLKikm7yiXXQ" target="_blank" rel="noopener noreferrer">
                  <FaWhatsapp className="text-[#D4AF37] transition" /> 
                </a> 
                <a href="https://discord.com/users/1443996675638300834" target="_blank" rel="noopener noreferrer">
                  <FaDiscord className="text-[#D4AF37] transition" /> 
                </a>  
                <a href="https://facebook.com/share/p/17mv9drSUK" target="_blank" rel="noopener noreferrer">
                  <FaFacebookF className="text-[#D4AF37] transition" /> 
                </a>    
                <a href="https://tiktok.com/@edenkingdomcorp2025" target="_blank" rel="noopener noreferrer">
                  <FaTiktok className="text-[#D4AF37] transition" /> 
                </a>        
              </div>
  </div>
</motion.div>

      </div>

      {/* LINHA */}
      <div className="w-full border-t border-[#D4AF37]/20 mt-14"></div>

      {/* COPYRIGHT FUSION */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center mt-8 text-xs text-gray-500"
      >
        Since © 2025 to {new Date().getFullYear()} EdenKingDom Corporation — Built from Genesis, Designed for Eternity.
      </motion.div>
    </footer>
  );
}
