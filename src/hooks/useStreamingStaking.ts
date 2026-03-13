"use client";

import { useAccount, useReadContract, useWriteContract } from "wagmi";
import { parseUnits, formatUnits } from "viem";
import { stakingStreamingAbi } from "@/lib/abis/stakingStreamingAbi";
import { CONTRACTS } from "@/lib/contracts";
import { erc20Abi } from "@/lib/abis/erc20Abi";
import { usePublicClient } from "wagmi";
import { bsc } from "wagmi/chains";


const STAKING = CONTRACTS.STREAMING_STAKING as `0x${string}`;


export function useStreamingStaking() {
  const { address } = useAccount();
  const { writeContractAsync } = useWriteContract();
  const publicClient = usePublicClient({ chainId: 56 });

  const { data: totalStaked } = useReadContract({
    abi: stakingStreamingAbi,
    address: STAKING,
    functionName: "totalStaked",
  });

  const { data: userData } = useReadContract({
    abi: stakingStreamingAbi,
    address: STAKING,
    functionName: "users",
    args: address ? [address] : undefined,
    query: { enabled: !!address },
  });

  const { data: pending } = useReadContract({
    abi: stakingStreamingAbi,
    address: STAKING,
    functionName: "pendingRewards",
    args: address ? [address] : undefined,
    query: { enabled: !!address },
  });

  async function stake(amount: string) {
  if (!amount || !address || Number(amount) <= 0) return;

  const bn = parseUnits(amount, 18);

  // 🔎 Verificar allowance atual

  const ECOIN = CONTRACTS.ECOIN as `0x${string}`;

  if (!publicClient) return;

const allowance = await publicClient.readContract({
  address: ECOIN,
  abi: erc20Abi,
  functionName: "allowance",
  args: [address as `0x${string}`, STAKING],
}) as bigint;

  // 🔐 Se não houver allowance suficiente → approve
  if (allowance < bn) {
      await writeContractAsync({
        address: CONTRACTS.ECOIN as `0x${string}`,
        abi: erc20Abi,
        functionName: "approve",
        args: [STAKING, bn],
        account: address as `0x${string}`, 
        chain: bsc,
      });
    }

  // 🚀 Executar stake
  return writeContractAsync({
    abi: stakingStreamingAbi,
    address: STAKING,
    functionName: "stake",
    args: [bn],
    account: address as `0x${string}`, 
    chain: bsc,
  });
}

  async function unstake(amount: string) {
    const bn = parseUnits(amount, 18);
    return writeContractAsync({
      abi: stakingStreamingAbi,
      address: STAKING,
      functionName: "unstake",
      args: [bn],
      account: address as `0x${string}`, 
      chain: bsc,
    });
  }

  async function claim() {
    return writeContractAsync({
      abi: stakingStreamingAbi,
      address: STAKING,
      functionName: "claim",
      account: address as `0x${string}`, 
      chain: bsc,
    });
  }

  const userStake = userData ? formatUnits(userData[0], 18) : "0";
  const total = totalStaked ? formatUnits(totalStaked, 18) : "0";
  const pendingFormatted = pending ? formatUnits(pending, 18) : "0";

  const share =
    Number(total) > 0
      ? (Number(userStake) / Number(total)) * 100
      : 0;

  return {
    total,
    userStake,
    pending: pendingFormatted,
    share,
    stake,
    unstake,
    claim,
  };
}