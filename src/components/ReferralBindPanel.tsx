"use client";

import { useEffect, useState } from "react";
import { useReferral } from "@/hooks/useReferral";
import ReferralQRScanner from "@/components/ReferralQRScanner";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function ReferralBindPanel() {

  const { bindInviter } = useReferral();
  const { getInviter } = useReferral();

  const [upline, setUpline] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [showScanner, setShowScanner] = useState(false);

  const searchParams = useSearchParams();

useEffect(() => {
  const ref = searchParams.get("ref");
  if (ref) {
    setUpline(ref);
  }
}, []);

const isValidAddress = (addr: string) =>
  /^0x[a-fA-F0-9]{40}$/.test(addr);

useEffect(() => {
  getInviter().then((inv) => {
    if (inv && inv !== "0x0000000000000000000000000000000000000000") {
      setDone(true);
    }
  });
}, []);

  return (
    <div className="bg-black/40 border border-[#D4AF37]/20 rounded-2xl p-6 space-y-5">

      <h3 className="text-lg font-semibold text-[#D4AF37]">
        🔗 Vincular Upline (Imutável)
      </h3>

      <p className="text-sm text-gray-400">
        Insira ou escaneie o QR Code do seu <strong>Upline</strong>.
        <br />
        <span className="text-yellow-400">
          ⚠️ Só pode ser feito UMA vez e não pode ser alterado.
        </span>
      </p>

      <input
        value={upline}
        onChange={(e) => setUpline(e.target.value)}
        placeholder="0x..."
        className="w-full p-3 bg-black border border-[#D4AF37]/30 rounded-xl text-sm text-white"
      />

      {/* BOTÃO SCAN */}
      <button
        onClick={() => setShowScanner(true)}
        className="w-full py-2 rounded-xl border border-[#3B82F6]/30 text-sm hover:bg-[#3B82F6]/10 transition"
      >
        📷 Scan Upline QR
      </button>

      {showScanner && (
        <ReferralQRScanner
          onScan={(addr) => {
            setUpline(addr);
            setShowScanner(false);
          }}
        />
      )}

      <button
        disabled={!isValidAddress(upline) || loading || done}
        onClick={async () => {
          try {
            setLoading(true);
            await bindInviter(upline);
            setDone(true);
          } finally {
            setLoading(false);
          }
        }}
        className={`w-full py-3 rounded-xl font-semibold transition ${
          done
            ? "bg-gray-600 text-gray-300"
            : "bg-gradient-to-r from-[#D4AF37] to-[#3B82F6] text-black"
        }`}
      >
        {done ? "Upline Vinculado ✓" : loading ? "Salvando..." : "Salvar Upline"}
      </button>

      {done && (
  <div className="bg-red-900/30 border border-red-500/30 p-3 rounded-xl text-sm text-red-400">
    Upline já vinculado. Operação irreversível.
  </div>
)}

    </div>
  );
}