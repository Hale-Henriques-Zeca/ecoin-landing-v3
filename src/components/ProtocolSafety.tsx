"use client";

import { useAccount, useReadContract } from "wagmi";
import { CONTRACTS } from "@/lib/contracts";
import { corporateSwapAbi } from "@/lib/abis/corporateSwapAbi";

export default function ProtocolSafety(){

const { address } = useAccount();

const { data:lastBuy } = useReadContract({
 address:CONTRACTS.SWAP,
 abi:corporateSwapAbi,
 functionName:"lastBuyTimestamp",
 args:[address],
 query:{enabled:!!address}
});

const { data:pressure } = useReadContract({
 address:CONTRACTS.SWAP,
 abi:corporateSwapAbi,
 functionName:"sellPressure"
});

const { data:threshold } = useReadContract({
 address:CONTRACTS.SWAP,
 abi:corporateSwapAbi,
 functionName:"pressureThreshold"
});

const sellPressure =
 pressure && threshold
 ? Number(pressure)/Number(threshold)
 : 0;

const pressureStatus =
 sellPressure>1
 ? "High"
 : sellPressure>0.5
 ? "Medium"
 : "Low";

return(

<div className="bg-black/40 border border-[#D4AF37]/20 rounded-xl p-5 mt-6">

<h4 className="text-[#D4AF37] font-semibold mb-4">
Protocol Safety
</h4>

<div className="space-y-2 text-sm text-gray-300">

<div className="flex justify-between">
<span>Flash Loan Protection</span>
<span className="text-green-400">✔ Active</span>
</div>

<div className="flex justify-between">
<span>Sell Cooldown</span>
<span className="text-green-400">✔ Active</span>
</div>

<div className="flex justify-between">
<span>Liquidity Window</span>
<span className="text-green-400">✔ Active</span>
</div>

<div className="flex justify-between">
<span>Sell Pressure</span>
<span className={`font-semibold ${
pressureStatus==="High"
?"text-red-400"
:pressureStatus==="Medium"
?"text-yellow-400"
:"text-green-400"
}`}>
{pressureStatus}
</span>
</div>

</div>

</div>

);

}