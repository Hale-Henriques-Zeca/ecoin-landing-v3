import { useAccount, useWalletClient } from "wagmi";
import { publicClient } from "@/lib/publicClient";
import { referralAbi } from "@/lib/abis/referralAbi";
import { CONTRACTS } from "@/lib/contracts";
import { isAddress } from "viem";
import { bsc } from "wagmi/chains";

export function useReferral() {
  const { address } = useAccount();
  const { data: walletClient } = useWalletClient();

   /* ===================== BIND ===================== */
  async function bindInviter(upline: string): Promise<void> {
    if (!walletClient || !address) {
      throw new Error("Wallet not connected");
    }

    if (!isAddress(upline)) {
      throw new Error("Invalid inviter address");
    }

    await walletClient.writeContract({
  address: CONTRACTS.REFERRAL as `0x${string}`,
  abi: referralAbi,
  functionName: "bindInviter",
  args: [upline],
  chain: bsc,
  account: address as `0x${string}`,
});
  }

  /* ===================== READ ===================== */
  async function getInviter(): Promise<string | null> {
  if (!address) return null;

  return (await publicClient.readContract({
    address: CONTRACTS.REFERRAL as `0x${string}`,
    abi: referralAbi,
    functionName: "inviterOf",
    args: [address as `0x${string}`],
  })) as string;
}

  async function getPendingRewards(): Promise<bigint> {
  if (!address) return 0n;

  return (await publicClient.readContract({
    address: CONTRACTS.REFERRAL as `0x${string}`,
    abi: referralAbi,
    functionName: "pendingRewards",
    args: [address as `0x${string}`],
  })) as bigint;
}


  /* ===================== CLAIM ===================== */
  async function claimRewards(): Promise<void> {
    if (!walletClient || !address) {
      throw new Error("Wallet not connected");
    }

    await walletClient.writeContract({
  address: CONTRACTS.REFERRAL as `0x${string}`,
  abi: referralAbi,
  functionName: "claim",
  args: [],
  chain: bsc,
  account: address as `0x${string}`,
});
  }

  return {
    bindInviter,        // ✅ AGORA EXISTE
    getInviter,
    getPendingRewards,
    claimRewards,
  };
}
