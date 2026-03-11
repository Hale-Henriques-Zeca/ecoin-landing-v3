"use client";

import { useState } from "react";
import { useAccount, useReadContract, useWriteContract } from "wagmi";
import { formatUnits, parseUnits, isAddress } from "viem";
import { CONTRACTS } from "@/lib/contracts";
import { priceEngineAbi } from "@/lib/abis/priceEngineAbi";
import { corporateSwapAbi } from "@/lib/abis/corporateSwapAbi";
import { erc20Abi } from "@/lib/abis/erc20Abi";
import { usePublicClient } from "wagmi";
import { bsc } from "wagmi/chains";

/* ================= VAULT ABI ================= */

const vaultAbi = [
  {
    name: "deposit",
    type: "function",
    stateMutability: "nonpayable",
    inputs: [
      { name: "token", type: "address" },
      { name: "amount", type: "uint256" }
    ],
    outputs: []
  },
  {
    name: "withdraw",
    type: "function",
    stateMutability: "nonpayable",
    inputs: [
      { name: "token", type: "address" },
      { name: "amount", type: "uint256" },
      { name: "to", type: "address" }
    ],
    outputs: []
  },
  {
    name: "owner",
    type: "function",
    stateMutability: "view",
    inputs: [],
    outputs: [{ type: "address" }]
  }
];

export default function LiquidityAdminPanel() {

const { address, isConnected } = useAccount();
const { writeContractAsync } = useWriteContract();

const [amount, setAmount] = useState("");
const [withdrawTo, setWithdrawTo] = useState("");

/* ================= OWNER ================= */

const { data: owner } = useReadContract({
 address: CONTRACTS.LIQUIDITY_VAULT,
 abi: vaultAbi,
 functionName: "owner"
});

const isOwner =
  typeof owner === "string" &&
  typeof address === "string" &&
  owner.toLowerCase() === address.toLowerCase();
/* ================= BALANCE ================= */

const { data: balance } = useReadContract({
 address: CONTRACTS.USDT,
 abi: erc20Abi,
 functionName: "balanceOf",
 args: [CONTRACTS.LIQUIDITY_VAULT],
 query: { refetchInterval: 4000 }
});

const formattedBalance = balance
 ? formatUnits(balance, 18)
 : "—";

/* ================= ACTIONS ================= */

async function deposit() {

 if (!amount) return;

 const parsed = parseUnits(amount, 18);

 await writeContractAsync({
  address: CONTRACTS.USDT,
  abi: erc20Abi,
  functionName: "approve",
  args: [CONTRACTS.LIQUIDITY_VAULT, parsed],
  account: address,   // <- wallet conectada
  chain: bsc          // <- Binance Smart Chain
});

 await writeContractAsync({
  address: CONTRACTS.LIQUIDITY_VAULT,
  abi: vaultAbi,
  functionName: "deposit",
  args: [CONTRACTS.USDT, parsed],
  account: address,
  chain: bsc
});

}

async function withdraw() {

 if (!amount || !withdrawTo) return;

 const parsed = parseUnits(amount, 18);

 await writeContractAsync({
  address: CONTRACTS.LIQUIDITY_VAULT,
  abi: vaultAbi,
  functionName: "withdraw",
  args: [CONTRACTS.USDT, parsed, withdrawTo],
  account: address,
  chain: bsc
});

}

/* ================= UI ================= */

if (!isConnected) {
 return (
   <div className="text-gray-400 text-sm border border-[#D4AF37]/30 rounded-xl p-4">
     Connect admin wallet
   </div>
 );
}

return (

<div className="mt-12 space-y-6 border border-[#D4AF37]/30 rounded-2xl p-6 bg-black/40 backdrop-blur-md">

<h3 className="text-[#D4AF37] font-bold text-lg">
Liquidity Vault — Admin
</h3>

<div className="text-sm text-gray-300 flex justify-between">
<span>Vault Balance</span>
<span className="text-green-400 font-mono">{formattedBalance} USDT</span>
</div>

<input
 value={amount}
 onChange={(e)=>setAmount(e.target.value)}
 placeholder="Amount"
 className="w-full bg-transparent border border-[#D4AF37]/30 rounded-lg px-3 py-2 text-white"
/>

<div className="flex gap-3">

<button
 onClick={deposit}
 className="px-4 py-2 rounded-lg bg-green-500 text-black font-semibold"
>
Deposit
</button>

</div>

<input
 value={withdrawTo}
 onChange={(e)=>setWithdrawTo(e.target.value)}
 placeholder="Withdraw address"
 className="w-full bg-transparent border border-[#D4AF37]/30 rounded-lg px-3 py-2 text-white"
/>

<button
 onClick={withdraw}
 disabled={!isOwner}
 className="px-4 py-2 rounded-lg bg-red-500 text-black font-semibold disabled:opacity-40"
>
{isOwner ? "Withdraw" : "Not Vault Owner"}
</button>

</div>

);

}