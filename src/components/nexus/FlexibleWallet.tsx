"use client";

import { useAccount } from "wagmi";

export default function FlexibleWallet(){

const {address,isConnected}=useAccount();

return(

<div className="bg-black/40 border border-white/10 rounded-2xl p-8 mt-12">

<h2 className="text-2xl text-[#D4AF37] mb-6 text-center">
👛 Flexible Web3 Wallet
</h2>

{isConnected ? (

<div className="text-center">

<p className="text-gray-400 mb-4">
Connected Address
</p>

<div className="bg-black/60 p-4 rounded-xl break-all">
{address}
</div>

<p className="text-gray-400 mt-6">
Receive BNB or E-Coin even without external wallet.
Funds can later be withdrawn.
</p>

</div>

) : (

<p className="text-center text-gray-400">
Connect wallet to activate smart wallet
</p>

)}

</div>

);

}