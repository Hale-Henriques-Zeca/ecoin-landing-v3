"use client"

import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function WalletConnectUI() {
  return (
    <ConnectButton
      label="Connect Wallet"
      showBalance
      accountStatus="address"
      chainStatus="icon"
    />
  );
}
