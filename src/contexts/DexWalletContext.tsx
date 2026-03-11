"use client";

import {
  createContext,
  useContext,
  ReactNode,
} from "react";
import {
  useAccount,
  useReadContract,
} from "wagmi";
import { erc20Abi } from "viem";
import { CONTRACTS, GOVERNANCE_SAFE } from "@/config/dexContracts";
import { useBalance } from "wagmi";
import { bscMainnet } from '@/lib/chains';

type DexWalletState = {
  address?: string;
  isConnected: boolean;
  isOwner: boolean;

  balances: {
  ecoin: bigint;
  eusd: bigint;
  bnb: bigint;
  usdt: bigint;
};

  swapPaused: boolean;
  refresh: () => void;
};

const DexWalletContext =
  createContext<DexWalletState | null>(null);

export function DexWalletProvider({
  children,
}: {
  children: ReactNode;
}) {
  const { address, isConnected } = useAccount();

  /* ---------------- OWNER CHECK ---------------- */

  const isOwner =
    !!address &&
    address.toLowerCase() ===
      GOVERNANCE_SAFE.toLowerCase();

  /* ---------------- BALANCES ---------------- */

const ecoin = useReadContract({
  address: CONTRACTS.ECOIN as `0x${string}`,
  abi: erc20Abi,
  functionName: "balanceOf",
  args: address ? [address] : undefined,
  query: { enabled: !!address },
});

  const eusd = useReadContract({
  address: CONTRACTS.EUSD as `0x${string}`,
  abi: erc20Abi,
  functionName: "balanceOf",
  args: address ? [address] : undefined,
  query: { enabled: !!address },
});

  const bnbBalance = useBalance({
  address,
  query: { enabled: !!address },
});

const usdtBalance = useReadContract({
  address: CONTRACTS.USDT as `0x${string}`,
  abi: erc20Abi,
  functionName: "balanceOf",
  args: address ? [address] : undefined,
  chainId: bscMainnet.id,
  query: { enabled: !!address },
});

  /* ---------------- SWAP PAUSED ---------------- */



  function refresh() {
  ecoin.refetch();
  eusd.refetch();
  usdtBalance.refetch();
  bnbBalance.refetch();
 
}

  return (
    <DexWalletContext.Provider
      value={{
        address,
        isConnected,
        isOwner,
        balances: {
  ecoin: ecoin.data ?? 0n,
  eusd: eusd.data ?? 0n,
  bnb: bnbBalance.data?.value ?? 0n,
  usdt: usdtBalance.data ?? 0n,
},
  swapPaused: false,
refresh,
      }}
    >
      {children}
    </DexWalletContext.Provider>
  );
}

/* ---------------- HOOK ---------------- */

export function useDexWallet() {
  const ctx = useContext(DexWalletContext);
  if (!ctx) {
    throw new Error(
      "useDexWallet must be used inside DexWalletProvider"
    );
  }
  return ctx;
}
