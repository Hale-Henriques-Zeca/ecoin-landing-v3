"use client";

import { motion } from "framer-motion";
import { useState, useMemo, useEffect } from "react";
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
import EcoinWalletDashboard from "@/components/EcoinWalletDashboard";
import LiquidityWindow from "@/components/LiquidityWindow";
import ProtocolHealth from "@/components/ProtocolHealth";
import ProtocolSafety from "@/components/ProtocolSafety";
import { bsc } from "wagmi/chains";


type SwapToken = "ECOIN" | "USDT";

const TOKEN_CONFIG = {
  ECOIN: {
    address: CONTRACTS.ECOIN,
    decimals: 18,
  },
  USDT: {
    address: CONTRACTS.USDT,
    decimals: 18,
  },
} as const;

export default function EBCConvertPanel() {


  /* ================= WALLET HOOKS (SEMPRE NO TOPO) ================= */
  const { isConnected, address } = useAccount();
  const { disconnect } = useDisconnect();

  // 👇 ESTE HOOK SEMPRE É CHAMADO
  const {
    balances,
    isOwner,
  } = useDexWallet(); // NÃO colocar dentro de if
  

   /* 🔁 SWAP */
  const { writeContractAsync } = useWriteContract();

  /* 🔮 PRICE */
  const { data: ecoinPrice } = useReadContract({
    address: CONTRACTS.PRICE_ENGINE,
    abi: priceEngineAbi,
    functionName: "ecoinPriceUSDT",
  });

   

  const [mounted, setMounted] = useState(false);
  
  const [fromToken, setFromToken] = useState<SwapToken>("USDT");
  const [toToken, setToToken] = useState<SwapToken>("ECOIN");
  const [amount, setAmount] = useState("");
  
  const [txHash, setTxHash] = useState<`0x${string}` | null>(null);
  const [status, setStatus] = useState<string>("");
  
  function invertPair() {
  setFromToken(toToken);
  setToToken(fromToken);
}
  useEffect(() => setMounted(true), []);


  function safeFormatUnits(value: unknown, decimals: number) {
  if (typeof value === "bigint") return Number(formatUnits(value, decimals));
  return 0;
}

const price = safeFormatUnits(ecoinPrice, 18);
 
 useEffect(() => {
  if (fromToken === toToken) {
    if (fromToken === "ECOIN") {
      setToToken("USDT");
    } else {
      setToToken("ECOIN");
    }
  }
}, [fromToken, toToken]);

  /* 📊 OUTPUT */

 const calculation = useMemo(() => {
  if (!amount || !price) {
    return {
      gross: 0,
      feePercent: 0,
      fee: 0,
      net: 0,
      output: 0,
    };
  }

  const amt = Number(amount);
  if (!Number.isFinite(amt) || amt <= 0) {
    return {
      gross: 0,
      feePercent: 0,
      fee: 0,
      net: 0,
      output: 0,
    };
  }

  const gross = amt;

  // 🔥 ALINHADO COM CONTRACT
  const isExit = fromToken === "ECOIN";

  const feePercent = isExit ? 2.5 : 0.5;
  const fee = gross * (feePercent / 100);
  const net = gross - fee;

  let output = 0;

  if (isExit) {
    // ECOIN -> USDT
    output = net * price;
  } else {
    // USDT -> ECOIN
    output = net / price;
  }

  return {
    gross,
    feePercent,
    fee,
    net,
    output,
  };
}, [amount, price, fromToken]);

  

  /* -------------------- TX RECEIPT WATCH -------------------- */
  const { isLoading: txMining, isSuccess: txSuccess } =
    useWaitForTransactionReceipt({
      hash: txHash ?? undefined,
    });

  useEffect(() => {
    if (!txHash) return;
    if (txMining) setStatus("⛏️ Confirmando transação...");
    if (txSuccess) setStatus("✅ Conversão concluída!");
  }, [txHash, txMining, txSuccess]);

  /* -------------------- ACTION -------------------- */
  async function handleSwap() {
  if (!amount || !isConnected) return;

  const tokenIn = TOKEN_CONFIG[fromToken].address;
  const tokenOut = TOKEN_CONFIG[toToken].address;
  
  const parsedAmount = parseUnits(
  amount,
  TOKEN_CONFIG[fromToken].decimals
);



   // 0.5% slippage
const minAmountOut =
  previewAmountOut - (previewAmountOut * 50n) / 10000n;

    await writeContractAsync({
  address: tokenIn,
  abi: erc20Abi,
  functionName: "approve",
  args: [CONTRACTS.SWAP, parsedAmount],
  account: address,
  chain: bsc, 
});

await writeContractAsync({
  address: CONTRACTS.SWAP,
  abi: corporateSwapAbi,
  functionName: "convert",
  args: [tokenIn, tokenOut, parsedAmount, minAmountOut],
  account: address,
  chain: bsc,
});
  }

  const parsedAmount = useMemo(() => {
  if (!amount) return 0n;

  try {
    return parseUnits(amount, TOKEN_CONFIG[fromToken].decimals);
  } catch {
    return 0n;
  }
}, [amount, fromToken]);



type PreviewConvertReturn = {
  amountOut: bigint;
  feeUSDT: bigint;
  allowed: boolean;
}; 

const { data: previewData, error: previewError, isError: isPreviewError, isLoading: previewLoading, isSuccess: previewSuccess } = useReadContract({
  address: CONTRACTS.SWAP,
  abi: corporateSwapAbi,
  functionName: "previewConvert",
  args: [
    TOKEN_CONFIG[fromToken].address,
    TOKEN_CONFIG[toToken].address,
    parsedAmount,
  ],
  query: {
    enabled: parsedAmount > 0n && isConnected,
  },
});




// 🔥 Extrair retorno do preview (array do Solidity)
const previewTuple = previewData as [bigint, bigint, boolean] | undefined;

const amountOut = previewTuple?.[0] ?? 0n;
const feeUSDT = previewTuple?.[1] ?? 0n;
const allowed = previewTuple?.[2] ?? false;


// 🔒 Valores seguros
const previewAmountOut = amountOut;
const previewFeeUSDT = feeUSDT;
const previewAllowed = allowed === true

   /* ================= GUARD (APÓS TODOS OS HOOKS) ================= */

  if (!mounted) return null;

  /* ================= UI ================= */

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };



  return (
    <section className="w-full flex items-center justify-center py-24">

      {/* 🌌 FUNDO DA CARD */}
<div className="absolute inset-0 z-0">
  <div className="absolute inset-0 bg-black/70" />
  <div
    className="absolute inset-0 bg-cover bg-center opacity-60"
    style={{
      backgroundImage: "url('/images/Ecoin-Convert.jpg')",
    }}
  />
</div>


      {/* 🧠 CONTEÚDO */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="relative z-10 w-full max-w-md px-4"
      >
        <div className="space-y-6 text-center">

          {/* TÍTULO */}
          <h2 className="text-2xl font-extrabold text-white">
            Convert <span className="text-[#D4AF37]">E-Coin</span>
          </h2>

          <p className="text-xs text-gray-300">
            Conversão direta on-chain · Preço global oficial
          </p>

          {/* FROM */}
          <div className="bg-black/40 backdrop-blur-md border border-[#D4AF37]/30 rounded-xl p-4 text-left">
            <label className="text-xs text-gray-300">From</label>
            <div className="flex items-center justify-between mt-2">
              <input
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.0"
                className="w-full bg-transparent outline-none text-2xl text-white"
              />
              <select
  value={fromToken}
  onChange={(e) => setFromToken(e.target.value as SwapToken)}
  className="ml-3 bg-transparent text-[#D4AF37] font-semibold outline-none"
>
  <option value="ECOIN">E-Coin</option>
  <option value="USDT">USDT</option>
</select>
            </div>
          </div>

<button
  onClick={invertPair}
  className="text-[#D4AF37] text-3xl hover:scale-320 transition"
>
  ⇅
</button>

          {/* TO */}
<div className="bg-black/30 backdrop-blur-md border border-[#D4AF37]/20 rounded-xl p-4 text-left">
  <label className="text-xs text-gray-300">To</label>

  <div className="flex items-center justify-between mt-2">

    <div className="text-2xl text-white">
      {previewAmountOut > 0n
  ? Number(
      formatUnits(
        previewAmountOut,
        TOKEN_CONFIG[toToken].decimals
      )
    ).toFixed(6)
  : "0.000000"}
    </div>

    <select
      value={toToken}
      onChange={(e) => setToToken(e.target.value as SwapToken)}
      className="ml-3 bg-transparent text-[#D4AF37] font-semibold outline-none"
    >
      {fromToken === "ECOIN" && (
        <>
          <option value="USDT">USDT</option>
        </>
      )}

      {(fromToken === "USDT") && (
        <option value="ECOIN">E-Coin</option>
      )}
    </select>

  </div>
</div>
         

          {/* PRICE */}
          <div className="flex justify-between text-xs text-gray-300">
            <span>Price</span>
            <span className="text-[#D4AF37]">
              1 E-Coin = {price} USD
            </span>
          </div>

<LiquidityWindow />


<div className="bg-black/30 backdrop-blur-md border border-[#D4AF37]/20 rounded-xl p-4 text-left space-y-2 text-xs text-gray-300">

  <div className="flex justify-between">
    <span>Gross</span>
    <span>{calculation.gross.toFixed(6)} {fromToken}</span>
  </div>

  <div className="flex justify-between text-red-400">
    <span>Fee ({calculation.feePercent}%)</span>
    <span>-{calculation.fee.toFixed(6)} {fromToken}</span>
  </div>

  <div className="flex justify-between text-green-400">
    <span>Net Amount</span>
    <span>{calculation.net.toFixed(6)} {fromToken}</span>
  </div>

</div>


          {/* ================= ACTION ================= */}
{!isConnected ? (
  <ConnectButton.Custom>
    {({ openConnectModal }) => (
      <button
        onClick={openConnectModal}
        className="
          w-full py-2.5 rounded-full font-bold
          bg-gradient-to-r from-[#D4AF37] to-[#B8962E]
          text-black hover:brightness-110 transition
        "
      >
        CONNECT WALLET
      </button>
    )}
  </ConnectButton.Custom>
) : (
  <button
  onClick={handleSwap}
  disabled={
    !amount ||
    !previewAllowed ||
    parsedAmount === 0n
  }
    className="
      w-full py-2.5 rounded-full font-bold
      bg-gradient-to-r from-[#D4AF37] to-[#B8962E]
      text-black hover:brightness-110 transition
      disabled:opacity-40
    "
  >
    CONVERT
  </button>
)}

{!previewAllowed && amount && (
  <p className="text-red-400 text-xs">
    Pair not allowed or protocol phase restricted
  </p>
)}

<ProtocolHealth />

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

    {/* SALDOS */}
    <div className="text-sm text-gray-400 space-y-1 mt-4 text-left">
       <EcoinWalletDashboard />
    </div>
<ProtocolSafety />
    {/* ADMIN PANEL */}
    {isOwner && (
      <div className="mt-10">
        <ConverterAdminPanel />
      </div>
    )}
  </>
)}


          
        </div>
      </motion.div>

    
    </section>
  );
}
