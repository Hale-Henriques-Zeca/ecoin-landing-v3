"use client";

import { useState } from "react";
import { currencies } from "../data/currencies";
import { Search } from "lucide-react";

interface Props {
  label?: string;
  currency: string; // moeda atual
  setCurrency?: (code: string) => void; // função para mudar a moeda
  amount?: string | number; // valor numérico
  setAmount?: (val: string) => void; // função para mudar o valor
  readOnly?: boolean; // se o campo é somente leitura
}

export default function CurrencySelector({
  label,
  currency,
  setCurrency,
  amount,
  setAmount,
  readOnly = false,
}: Props) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const selected = currencies.find((c) => c.code === currency);

  const filtered = currencies.filter(
    (c) =>
      c.name.toLowerCase().includes(query.toLowerCase()) ||
      c.code.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative mb-4">
      {label && (
        <p className="text-gray-300 mb-1 text-sm tracking-wide uppercase">
          {label}
        </p>
      )}

      {/* BOTÃO PRINCIPAL */}
      <button
        type="button"
        onClick={() => !readOnly && setOpen(!open)}
        className={`w-full px-4 py-3 bg-black/60 border border-yellow-600 
          rounded-xl flex items-center justify-between text-yellow-500 
          hover:bg-black/40 transition-all backdrop-blur-sm shadow-lg ${
            readOnly ? "cursor-not-allowed opacity-70" : ""
          }`}
      >
        <div className="flex items-center gap-3">
          {selected?.flag && (
            <img
              src={selected.flag}
              alt={selected.name}
              className="w-6 h-6 rounded-md border border-black"
            />
          )}
          <span className="font-semibold">{selected?.code || "?"}</span>
        </div>
        <span className="text-gray-400 text-sm">{selected?.name}</span>
      </button>

      {/* INPUT DE VALOR */}
      {amount !== undefined && (
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount && setAmount(e.target.value)}
          readOnly={readOnly}
          placeholder="Insira o valor..."
          className={`mt-2 w-full px-4 py-3 bg-black/40 border border-yellow-700 
            rounded-lg text-right text-white font-semibold focus:outline-none 
            focus:ring-2 focus:ring-yellow-600 transition ${
              readOnly ? "cursor-not-allowed opacity-70" : ""
            }`}
        />
      )}

      {/* DROPDOWN */}
      {open && (
        <div
          className="absolute z-50 mt-2 w-full max-h-96 bg-black/90 
          border border-yellow-700 rounded-xl backdrop-blur-xl 
          overflow-y-auto shadow-2xl p-3"
        >
          {/* SEARCH BAR */}
          <div
            className="flex items-center gap-2 mb-3 bg-black/50 px-3 py-2 
            rounded-lg border border-yellow-700/30"
          >
            <Search size={16} className="text-yellow-600" />
            <input
              className="bg-transparent flex-1 text-white placeholder-gray-400 outline-none"
              placeholder="Pesquisar moeda..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          {/* LISTA DE MOEDAS */}
          {filtered.map((c) => (
            <button
              key={c.code}
              onClick={() => {
                if (setCurrency) setCurrency(c.code);
                setOpen(false);
              }}
              className="flex items-center gap-3 w-full text-left p-2 
              rounded-lg hover:bg-yellow-600/20 transition"
            >
              <img
                src={c.flag}
                alt={c.name}
                className="w-6 h-6 rounded-md border border-black"
              />
              <div>
                <p className="text-white font-semibold">{c.code}</p>
                <p className="text-gray-400 text-xs">{c.name}</p>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
