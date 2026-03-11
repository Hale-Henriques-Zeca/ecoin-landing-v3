"use client";



import QRCode from "react-qr-code";
import { Copy, Download, Share2 } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useMemo, useRef, useEffect } from "react";
import { parseUnits, formatUnits } from "viem";
import {
  useAccount,
  useReadContract,
  useWriteContract,
  useWaitForTransactionReceipt,
} from "wagmi";
import { CONTRACTS } from "@/lib/contracts";
import { erc20Abi } from "@/lib/abis/erc20Abi";
import { corporateSwapAbi } from "@/lib/abis/corporateSwapAbi";
import { priceEngineAbi } from "@/lib/abis/priceEngineAbi";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useDisconnect } from "wagmi";
import ConverterAdminPanel from "@/components/ConverterAdminPanel";
import { useDexWallet } from "@/contexts/DexWalletContext";
import { usePublicClient } from "wagmi";
import EcoinWalletDashboard from "@/components/EcoinWalletDashboard";




export default function EcoinLeaderMarketingEngine() {

  /* ================= WALLET HOOKS (SEMPRE NO TOPO) ================= */
    const { isConnected, address } = useAccount();
    const { disconnect } = useDisconnect();
  
    const publicClient = usePublicClient();
    
      
      const { writeContractAsync } = useWriteContract();
      
    // 👇 ESTE HOOK SEMPRE É CHAMADO
    const {
      balances,
      isOwner,
    } = useDexWallet(); // NÃO colocar dentro de if


  const referralLink = useMemo(() => {
    if (!address) return "";
    return `https://ecoin.edenkingdom.org/?ref=${address}`;
  }, [address]);

  const marketingText = useMemo(() => {
  if (!address) return "";

  return `🚀 Torna-te líder na nova economia Web3!

A E-Coin está a construir um ecossistema sustentável com staking real, buyback inteligente e infraestrutura on-chain.

🔥 Junta-te à minha equipa e cresce connosco.

🔗 Regista-te aqui:
${referralLink}

🏦 Meu endereço BEP20:
${address}

#ECoin #Web3 #CryptoLeadership`;
}, [address, referralLink]);


const copyMarketing = async () => {
  await navigator.clipboard.writeText(marketingText);
};


const shareMarketing = async () => {
  if (navigator.share) {
    await navigator.share({
      title: "E-Coin Web3 Invitation",
      text: marketingText,
    });
  } else {
    await navigator.clipboard.writeText(marketingText);
  }
};


  const [copiedLink, setCopiedLink] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);
  const qrRef = useRef<HTMLDivElement>(null);

  const copyLink = async () => {
    if (!referralLink) return;
    await navigator.clipboard.writeText(referralLink);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const copyAddress = async () => {
    if (!address) return;
    await navigator.clipboard.writeText(address);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };


const downloadQR = () => {
  if (!qrRef.current || !address) return;

  const svg = qrRef.current.querySelector("svg");
  if (!svg) return;

  const serializer = new XMLSerializer();
  const source = serializer.serializeToString(svg);

  const img = new Image();
  const svgBlob = new Blob([source], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(svgBlob);

  img.onload = () => {
    const canvas = document.createElement("canvas");

    // FORMATO INSTAGRAM PREMIUM
    canvas.width = 1080;
    canvas.height = 1350;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // 🔵 FUNDO GRADIENTE PROFUNDO
    const gradient = ctx.createLinearGradient(0, 0, 1080, 1350);
    gradient.addColorStop(0, "#0f172a");
    gradient.addColorStop(1, "#1e293b");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // 🟡 MOLDURA DOURADA
    ctx.strokeStyle = "#D4AF37";
    ctx.lineWidth = 8;
    ctx.strokeRect(40, 40, 1000, 1270);

    // 🟡 TÍTULO PRINCIPAL
    ctx.fillStyle = "#D4AF37";
    ctx.font = "bold 64px Arial";
    ctx.textAlign = "center";
    ctx.fillText("E-Coin Official Leader Invitation", 540, 160);

    // 🔹 Subtítulo
    ctx.fillStyle = "#ffffff";
    ctx.font = "32px Arial";
    ctx.fillText("Join My E-Coin Web3 Network", 540, 210);

    // ⚪ CAIXA BRANCA QR
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(240, 300, 600, 600);

    // QR
    ctx.drawImage(img, 260, 320, 560, 560);

    // 🔹 TEXTO REFERRAL
    ctx.fillStyle = "#ffffff";
    ctx.font = "28px Arial";
    ctx.fillText("Register Using My Link:", 540, 980);

    ctx.font = "24px Arial";

    const shortLink =
      referralLink.length > 45
        ? referralLink.slice(0, 45) + "..."
        : referralLink;

    ctx.fillText(shortLink, 540, 1030);

    // 🔹 ENDEREÇO
    ctx.font = "24px Arial";
    ctx.fillText("BEP20 Wallet:", 540, 1090);

    ctx.font = "22px Arial";
    ctx.fillText(address.slice(0, 21), 540, 1130);
    ctx.fillText(address.slice(21), 540, 1165);

    // 🟢 FOOTER
    ctx.font = "22px Arial";
    ctx.fillStyle = "#94a3b8";
    ctx.fillText("Powered by E-Coin Web3 Infrastructure", 540, 1290);

    // 📸 EXPORTA JPG REAL PREMIUM
    const jpgFile = canvas.toDataURL("image/jpeg", 1.0);

    const link = document.createElement("a");
    link.href = jpgFile;
    link.download = `Ecoin-Leader-Card-${address}.jpg`;
    link.click();

    URL.revokeObjectURL(url);
  };

  img.src = url;
};



  return (
    <div className="bg-black/40 border border-white/10 rounded-2xl p-8 mt-20">

      {/* TITLE */}
      <h2 className="text-3xl font-semibold text-[#D4AF37] mb-6 text-center">
        🚀 E-Coin Leader Marketing Engine
      </h2>

      <p className="text-gray-400 text-center max-w-3xl mx-auto mb-10">
        Ferramentas avançadas para líderes promoverem o ecossistema
        E-Coin através de links Web3, QR codes e conteúdos partilháveis.
      </p>

      {/* GRID PRINCIPAL */}
      <div className="grid md:grid-cols-2 gap-10">

        {/* LINK DE REFERÊNCIA */}
        <div>
          <h3 className="text-lg font-semibold text-[#D4AF37] mb-4">
            🔗 Link de Referência
          </h3>

          <div className="bg-black/60 border border-white/10 rounded-xl p-4 break-all">
            {isConnected ? referralLink : "Conecte a carteira"}
            
          </div>

          <button
            onClick={copyLink}
            disabled={!isConnected}
            className="mt-4 px-6 py-2 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#3B82F6] text-black font-semibold flex items-center gap-2 justify-center disabled:opacity-50"
          >
            <Copy size={16} />
            {copiedLink ? "Copiado ✓" : "Copiar Link"}
          </button>

<button
  onClick={downloadQR}
  className="mt-3 px-6 py-2 rounded-full border border-[#D4AF37]/40 text-[#D4AF37] font-semibold flex items-center gap-2 justify-center hover:bg-[#D4AF37]/10 transition"
>
  <Download size={16} />
  Download QR
</button>

          <button
  onClick={copyAddress}
  className="mt-4 px-6 py-2 rounded-full bg-gradient-to-r from-[#22C55E] to-[#3B82F6] text-black font-semibold flex items-center gap-2 justify-center"
>
  <Copy size={16} />
  {copiedAddress ? "Copiado ✓" : "Copiar Endereço"}
</button>


        </div>

        {/* ENDEREÇO BEP20 */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-[#D4AF37] mb-4">
            🏦 Endereço BEP20 (Carteira)
          </h3>

          {isConnected ? (
            <>
              <div className="bg-black/60 border border-white/10 rounded-xl p-4 break-all text-sm">
  {address}

</div>


{/* QR CODE */}
<div
  ref={qrRef}
  className="mt-6 bg-white p-4 inline-block rounded-xl"
>
  <QRCode
  value={address}
  size={300}
/>
</div>


<p className="text-xs text-gray-400 mt-3">
  QR contém apenas o endereço BEP20.
</p>


            </>
          ) : (
            <p className="text-gray-500">Conecte a carteira</p>
          )}
        </div>


      </div>

{/* ================= MINI DASHBOARD WALLET ================= */}
{!isConnected ? (
  <div className="pt-4">
    <ConnectButton label="Connect Wallet" showBalance />
  </div>
) : (
  <>
    {/* ENDEREÇO + DISCONNECT */}
    <div className="flex items-center justify-between mt-3 gap-3 text-xs text-gray-400">
      <span className="text-sm text-gray-300  py-2.5 rounded-full font-semibold
    bg-gradient-to-r from-[#D4AF37] to-[#06B6D4]">
        {address?.slice(0, 6)}…{address?.slice(-4)}
      </span>
      <button
        onClick={() => disconnect()}
        className="text-xs text-red-400 hover:text-red-300 transition py-2.5 rounded-full font-semibold bg-gradient-to-r from-[#fc0000]"
      >
        Disconnect Wallet
      </button>
   
        </div>
      </>
    )}

    {/* SALDOS */}
    <div className="text-sm text-gray-400 space-y-1 mt-4 text-left">
      <EcoinWalletDashboard />
    </div>

      {/* SOCIAL SHARE */}

     

      {isConnected && (
        <div className="mt-10 grid md:grid-cols-3 gap-6">

          <a
            href={`https://t.me/share/url?url=${referralLink}`}
            target="_blank"
            className="bg-black/60 border border-white/10 rounded-xl p-4 text-center hover:border-[#3B82F6]"
          >
            Telegram
          </a>

          <a
            href={`https://wa.me/?text=${referralLink}`}
            target="_blank"
            className="bg-black/60 border border-white/10 rounded-xl p-4 text-center hover:border-[#25D366]"
          >
            WhatsApp
          </a>

          <a
            href={`https://twitter.com/intent/tweet?url=${referralLink}`}
            target="_blank"
            className="bg-black/60 border border-white/10 rounded-xl p-4 text-center hover:border-[#1DA1F2]"
          >
            Twitter / X
          </a>

 <div className="md:col-span-3 bg-black/60 border border-white/10 rounded-xl p-6 space-y-4">

  <p className="text-sm text-gray-400 whitespace-pre-line">
    {marketingText}
  </p>

  <div className="flex gap-4 justify-center">

    <button
      onClick={copyMarketing}
      className="px-6 py-2 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#3B82F6] text-black font-semibold flex items-center gap-2"
    >
      <Copy size={16} />
      Copy Text
    </button>

    <button
      onClick={shareMarketing}
      className="px-6 py-2 rounded-full border border-[#22C55E] text-[#22C55E] font-semibold flex items-center gap-2 hover:bg-[#22C55E]/10 transition"
    >
      <Share2 size={16} />
      Share
    </button>

  </div>

</div>
        </div>
      )}

    </div>
  );
}