"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  FaTelegramPlane,
  FaTelegram,
  FaWhatsapp,
  FaTwitter,
  FaDiscord,
} from "react-icons/fa";
import {
  useAccount,
  useReadContract,
  useWriteContract,
  useWaitForTransactionReceipt,
} from "wagmi";
import { BsStars } from "react-icons/bs";
import { Snowfall } from "react-snowfall";
import ReferralModalContent from "@/components/ReferralModalContent";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useDisconnect } from "wagmi";
import StreamingAdminPanel from "@/components/StreamingAdminPanel";
import { useStreamingStaking } from "@/hooks/useStreamingStaking";
import StreamingStatsCard from "@/components/StreamingStatsCard";
import { controllerAbi } from "@/lib/abis/controllerAbi";
import { CONTRACTS } from "@/lib/contracts";
import { erc20Abi } from "viem";
import EcoinWalletDashboard from "@/components/EcoinWalletDashboard";
import StakingSecurityPanel from "@/components/StakingSecurityPanel";
import RewardStreamIndicator from "@/components/RewardStreamIndicator";
import RewardVelocity from "@/components/RewardVelocity";
import ProtocolHealth1 from "@/components/ProtocolHealth1";
import LiveRewardCounter from "@/components/LiveRewardCounter";
import ClaimGasNotice from "@/components/ClaimGasNotice";


export default function ECoinOnChainStaking() {
  /* ================= WALLET HOOKS (SEMPRE NO TOPO) ================= */
  const { isConnected, address } = useAccount();
  const { disconnect } = useDisconnect();

  const STAKING_OWNER =
  process.env.NEXT_PUBLIC_STAKING_OWNER?.toLowerCase();


  /* 🔐 WALLET */
  const [panelOpen, setPanelOpen] = useState(false);


   const [showModal, setShowModal] = useState(false);
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  /* ⛔ HYDRATION */
  const [mounted, setMounted] = useState(false);


  /* 📊 STAKING STATES */
  const [stakeAmount, setStakeAmount] = useState("");
  
  const staking = useStreamingStaking();

  const { data: isActive } = useReadContract({
  abi: controllerAbi,
  address: CONTRACTS.PROTOCOL_CONTROLLER,
  functionName: "stakingRewardsActive",
});

const { data: stakingLiquidity } = useReadContract({
  abi: erc20Abi,
  address: CONTRACTS.ECOIN,
  functionName: "balanceOf",
  args: [CONTRACTS.STREAMING_STAKING],
  chainId: 56,
});

const { data: allowance } = useReadContract({
  abi: erc20Abi,
  address: CONTRACTS.ECOIN,
  functionName: "allowance",
  args: address
    ? [address, CONTRACTS.STREAMING_STAKING]
    : undefined,
  chainId: 56,
  query: {
    enabled: !!address,
  },
});

  // quando a wallet conectar, abre o painel automaticamente
useEffect(() => {
  if (isConnected) {
    setPanelOpen(true);
  } else {
    setPanelOpen(false);
  }
}, [isConnected]);



  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isOwner =
  isConnected &&
  address &&
  STAKING_OWNER &&
  address.toLowerCase() === STAKING_OWNER;


  return (
    <section className="relative min-h-screen w-full bg-black text-white overflow-hidden">
      {/* 🌌 FUNDO */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/70" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{ backgroundImage: "url('/images/ECOIN-STAKING.png')" }}
        />
      </div>

      {/* 🧠 CONTEÚDO */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="relative z-10 min-h-screen flex items-center justify-center px-3"
      >
        <div className="w-full max-w-md bg-transparent p-4 sm:p-8 space-y-6 text-center">

          {/* TÍTULO */}
          <h1 className="text-xl sm:text-1xl font-extrabold">
            WEB3 Streaming Staking <br />
            <span className="text-[#D4AF37]">E-Coin — live cashflow On-Chain🚀</span>
          </h1>

<div className="flex justify-center mt-2">
  <span
    className={`px-3 py-1 rounded-full text-xs font-semibold ${
      isActive
        ? "bg-green-500/20 text-green-400"
        : "bg-red-500/20 text-red-400"
    }`}
  >
    {isActive ? "Staking Active" : "Staking Paused"}
  </span>
</div>
          <p className="text-gray-300 text-xs">
            Stake direto na blockchain (Binance Smart Chain).
          </p>
<p className="text-[20px] text-yellow-400 mt-6 text-center">
  Rewards are calculated on-chain in cashflow stream continuously.
  No fixed returns. No epochs. No guaranteed APY.
</p>

 <p className="text-xs text-yellow-400">
    
  </p>
          {/* CONNECT WALLET */}
        {!isConnected && (
  <ConnectButton.Custom>
    {({ openConnectModal }) => (
      <button
        onClick={openConnectModal}
        className="w-full py-2.5 rounded-full font-semibold
        bg-gradient-to-r from-[#22C55E] to-[#16A34A]"
      >
        CONECTAR CARTEIRA
      </button>
    )}
  </ConnectButton.Custom>
)}

{isOwner && (
  <div className="mt-12">
    <StreamingAdminPanel />
  </div>
)}


{isConnected && !panelOpen && (
  <button
    onClick={() => setPanelOpen(true)}
    className="w-full py-2.5 rounded-full font-semibold
    bg-gradient-to-r from-[#3B82F6] to-[#06B6D4]"
  >
    ABRIR STAKING STREAM
  </button>
)}



          {/* STAKING PANEL */}
          {isConnected && panelOpen && (
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="space-y-5 text-left"
            >

<StreamingStatsCard />
<LiveRewardCounter
 pending={Number(staking.pending ?? 0)}
/>
<StakingSecurityPanel />

<RewardStreamIndicator />

<RewardVelocity
 pending={Number(staking.pending ?? 0)}
 totalStaked={Number(staking.total ?? 0)}
/>

<ProtocolHealth1
 liquidity={stakingLiquidity ? Number(stakingLiquidity)/1e18 : 0}
 pending={Number(staking.pending ?? 0)}
/>

              {/* AMOUNT */}
              <div className="bg-black/50 border border-gray-700 rounded-xl p-4">
                {address && (
  <p className="text-xd text-red-400 text-center">
    Conectado: {address.slice(0, 6)}…{address.slice(-4)}
  </p>
)}

                <label className="text-xs text-gray-300">
                  Amount to Stake (E-Coin)
                </label>
                <input
                  type="number"
                  value={stakeAmount}
                  onChange={(e) => setStakeAmount(e.target.value)}
                  placeholder="Enter amount"
                  className="w-full mt-2 bg-transparent outline-none text-2xl text-white"
                />
              </div>

             {/* STREAMING INFO */}
<div className="bg-black/50 border border-gray-700 rounded-xl p-4 space-y-4">
  <p className="text-xs text-gray-300">
    Streaming Staking (Live On-Chain)
  </p>

  <div className="flex justify-between text-sm">
    <span className="text-gray-400">Your Stake</span>
    <span className="text-white font-semibold">
      {staking.userStake} E-Coin
    </span>
  </div>

  <div className="flex justify-between text-sm">
    <span className="text-gray-400">Unclaimed Rewards</span>
    <span className="text-green-400 font-semibold">
      {staking.pending} E-Coin
    </span>
  </div>

{Number(staking.pending ?? 0) > 0 && (
  <div className="mt-3 text-xs space-y-1 bg-black/40 border border-gray-700 rounded-xl p-3">
    <div className="flex justify-between">
      <span>Gross Reward</span>
      <span>{staking.pending} ECOIN</span>
    </div>

    <div className="flex justify-between text-red-400">
      <span>Claim Fee (1%)</span>
      <span>-{(Number(staking.pending) * 0.01).toFixed(6)} E-COIN</span>
    </div>

    <div className="flex justify-between text-green-400">
      <span>You Receive</span>
      <span>
        {(Number(staking.pending) * 0.99).toFixed(6)} E-COIN
      </span>
    </div>
  </div>
)}

  <div>
    <div className="flex justify-between text-xs text-gray-400 mb-1">
      <span>Your Share</span>
      <span>{staking.share.toFixed(2)}%</span>
    </div>

    <div className="h-2 w-full rounded-full bg-black/50 border border-gray-700 overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-[#D4AF37] to-[#3B82F6]"
        style={{ width: `${staking.share}%` }}
      />
    </div>
  </div>

<div className="bg-[#0B0E11] border border-[#1E2329] rounded-2xl p-6 space-y-6">

  <h2 className="text-lg font-bold text-white">
   Pool de Preparação para a listagem da E-Coin nas grandes corretoras globais.
  </h2>

{/* ===== LIQUIDITY MONITOR ===== */}
<div className="mt-3 bg-black/40 border border-yellow-500/30 rounded-xl p-3 text-xs space-y-1">
  <div className="flex justify-between">
    <span className="text-gray-400">Staking Liquidity</span>
    <span className="text-yellow-400">
      {stakingLiquidity ? Number(stakingLiquidity) / 1e18 : 0} E-COIN
    </span>
  </div>

  <div className="flex justify-between">
    <span className="text-gray-400">Your Pending</span>
    <span className="text-green-400">
      {staking.pending}
    </span>
  </div>

  <div className="flex justify-between">
    <span className="text-gray-400">Liquidity Coverage</span>
    <span className="text-white">
      {stakingLiquidity && Number(staking.pending) > 0
        ? (
            (Number(stakingLiquidity) /
              (Number(staking.pending) * 1e18)) *
            100
          ).toFixed(2)
        : "∞"}%
    </span>
  </div>
</div>


  <div className="grid grid-cols-2 gap-4">
    <div>
      <p className="text-xs text-gray-400">Total Value Locked</p>
      <p className="text-xm font-bold text-white">
        {staking.total} E-Coin
      </p>
    </div>

    <div>
      <p className="text-xs text-gray-400">Program Status</p>
      <p className={`font-semibold ${
        isActive ? "text-green-400" : "text-red-400"
      }`}>
        {isActive ? "Live" : "Paused"}
      </p>
    </div>

    <div>
      <p className="text-xs text-gray-400">Your Stake</p>
      <p className="text-xs text-white">
        {staking.userStake}
      </p>
    </div>

    <div>
      <p className="text-xs text-gray-400">Claimable Now</p>
      <p className="text-xs text-green-400">
        {staking.pending}
      </p>
    </div>
  </div>
</div>


  <p className="text-xs text-yellow-400 text-center">
    No epochs · No fixed APY · Rewards stream continuously in live cashflow ·🚀 
  </p>
 
</div>


              {/* ACTIONS */}
              <div className="flex flex-col gap-3 pt-2">
                <button
  onClick={async () => {
    try {
      await staking.stake(stakeAmount);
    } catch (e:any) {
      alert(e?.message || "Erro no stake");
    }
  }}
  className="w-full py-2.5 rounded-full font-bold bg-gradient-to-r from-[#D4AF37] to-[#3B82F6]"
>
  STAKE
</button>
<ClaimGasNotice />
<button
  disabled={Number(staking.pending) === 0}
  onClick={staking.claim}
  className={`w-full py-2.5 rounded-full font-semibold border transition
    ${
      Number(staking.pending) === 0
        ? "border-gray-600 text-gray-500 cursor-not-allowed"
        : "border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10"
    }`}
>
  CLAIM REWARD
</button>

{Number(staking.pending) === 0 && (
  <p className="text-yellow-400 text-xs text-center">
    Nothing to claim Yet. Rewards accruing…
  </p>
  
)}
<EcoinWalletDashboard />

<button
  onClick={async () => {
    try {
      await staking.unstake(stakeAmount);
    } catch (e:any) {
      alert(e?.message || "Erro no unstake");
    }
  }}
  className="w-full py-2.5 rounded-full font-semibold text-red-400 border border-red-500/30 hover:border-red-500 transition"
>
  UNSTAKE
</button>


                <button
  onClick={() => {
    disconnect();
    setPanelOpen(false);
  }}
  className="w-full py-2.5 rounded-full font-semibold
  bg-gradient-to-r from-[#fc0000]"
>
  Desconectar carteira
</button>

              </div>
            </motion.div>
          )}

{/* INVITE */}
            <div className="text-center mt-16">
              <button
                onClick={() => setShowModal(true)}
                className="bg-gradient-to-r from-[#00FF9C] to-[#00C3FF] text-black font-bold py-3 px-10 rounded-full"
              >
                🎁 Convidar Amigos
              </button>
            </div>
      
            {showModal && (
              <div
                onClick={() => setShowModal(false)}
                className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
              >
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="bg-[#0a0a0a] p-8 rounded-2xl border border-[#00FF9C]/30 w-[360px]"
                >
                  <h3 className="text-[#00FF9C] text-xl mb-4">
                    Referral System Dashboard
                  </h3>
      
                  <ReferralModalContent />
                </div>
              </div>
            )}

           {/* 🌐 FOOTER */}
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1, delay: 0.4 }}
 className="mt-12 flex flex-col items-center gap-3 text-[#D4AF37]"
>
  <p className="text-sm mb-3 text-gray-400">
     Conecte-se à comunidade E-Coin
  </p>

  <div className="flex justify-center gap-5 text-2xl">
            <a href="https://t.me/ecoin2026" target="_blank" rel="noopener noreferrer">
              <FaTelegramPlane />
            </a>
            <a href="https://x.com/CoinE28810" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
            <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
              <FaDiscord />
            </a>
            <a href="https://t.me/ecoin2025" target="_blank" rel="noopener noreferrer">
              <FaTelegram />
            </a>
            <a href="https://chat.whatsapp.com/G1F6USX5NrrLKikm7yiXXQ" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </a>
          </div>

  <BsStars className="text-3xl mt-5 animate-pulse text-[#D4AF37]" />
</motion.div>

        </div>

        
      </motion.div>


       

    </section>
  );
}
