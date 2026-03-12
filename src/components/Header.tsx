"use client";

import Link from "next/link";
import { useEffect } from "react";
import LanguageSelector from "@/components/LanguageSelector";

export default function Header() {
  useEffect(() => {
    const lang = localStorage.getItem("EKD_LANG") || "en";
  }, []);

  const handleLangChange = (lang: string) => {
    localStorage.setItem("EKD_LANG", lang);
  };

  return (
    <header className="w-full fixed top-0 z-50 bg-black/40 backdrop-blur-xl">
      <div className="relative mx-auto max-w-7xl h-16 px-6 flex items-center">

        {/* LEFT — LOGO */}
        <div className="absolute left-6 flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/ecoin-logo.png"
              alt="E-Coin"
              className="h-8 w-auto"
            />
            <span className="font-semibold text-[#F9D13E]">
              E-Coin
            </span>
          </Link>
        </div>

        {/* TRUE CENTER — NAV */}
        <nav className="absolute left-1/2 -translate-x-1/2 flex items-center gap-8 text-sm font-medium text-[#F9D13E]">
          <Link href="/">Home</Link>
          <Link href="/equipes">Team Leader</Link>
        </nav>

        {/* RIGHT — LANGUAGE */}
        <div className="absolute right-6 flex items-center">
          <LanguageSelector onLangChange={handleLangChange} />
        </div>

      </div>
    </header>
  );
}