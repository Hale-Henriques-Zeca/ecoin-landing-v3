"use client";

import { useState } from "react";
import { Globe, Search } from "lucide-react";
import { LANGUAGES_ULTRA } from "@/data/languages";

export default function LanguageSelector({ onLangChange }: any) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const filtered = LANGUAGES_ULTRA.filter((l) =>
    l.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative">
      {/* 🌍 BOTÃO PRINCIPAL */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 bg-black/70 border border-[#D4AF37] rounded-full px-5 py-2 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all shadow-lg backdrop-blur-xl"
      >
        <Globe size={18} />
        Idioma
      </button>

      {/* 🔽 MENU ULTRA */}
      {open && (
        <div className="absolute right-0 mt-3 w-72 bg-black/80 border border-[#D4AF37] rounded-2xl backdrop-blur-xl shadow-2xl p-4 max-h-96 overflow-y-scroll animate-fadeIn">
          
          {/* 🔍 SEARCH BAR */}
          <div className="flex items-center gap-2 bg-black/40 px-3 py-2 rounded-lg border border-[#D4AF37]/30 mb-3">
            <Search size={16} className="text-[#D4AF37]" />
            <input
              type="text"
              placeholder="Pesquisar idioma..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="bg-transparent text-white placeholder-gray-400 outline-none flex-1"
            />
          </div>

          {/* 🌐 LISTA DE IDIOMAS*/}
          {filtered.map((lang) => (
            <button
              key={lang.code}
              className="flex items-center gap-3 p-2 w-full text-left rounded-lg hover:bg-[#D4AF37]/20 transition"
              onClick={(e) => {
  e.preventDefault();
  e.stopPropagation();
  onLangChange(lang.code);
  setOpen(false);
}}
            >
              <img
                src={`https://flagcdn.com/w40/${lang.flag}.png`}
                className="w-6 h-4 rounded-sm border border-black"
              />
              <span className="text-white">{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
