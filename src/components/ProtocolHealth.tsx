"use client";

import { useReadContract } from "wagmi";
import { CONTRACTS } from "@/lib/contracts";
import { corporateSwapAbi } from "@/lib/abis/corporateSwapAbi";
import { formatUnits } from "viem";

export default function ProtocolHealth(){

const { data:coverage } = useReadContract({
 address:CONTRACTS.SWAP,
 abi:corporateSwapAbi,
 functionName:"coverageRatio"
});

const { data:treasury } = useReadContract({
 address:CONTRACTS.SWAP,
 abi:corporateSwapAbi,
 functionName:"treasuryUSDValue"
});

const ratio = coverage ? Number(coverage)/100 : 0;

const treasuryUSD =
 treasury
 ? Number(formatUnits(treasury as bigint,18))
 : 0;

let health="Critical";

if(ratio>120) health="Very Strong";
else if(ratio>100) health="Strong";
else if(ratio>80) health="Moderate";

return(

<div className="bg-black/40 border border-[#D4AF37]/20 rounded-xl p-5 mt-6">

<h4 className="text-[#D4AF37] font-semibold mb-4">
Protocol Health
</h4>

<div className="space-y-2 text-sm text-gray-300">

<div className="flex justify-between">
<span>Coverage Ratio</span>
<span>{ratio.toFixed(2)}%</span>
</div>

<div className="flex justify-between">
<span>Treasury Value</span>
<span>${treasuryUSD.toLocaleString()}</span>
</div>

<div className="flex justify-between">
<span>Protocol Health</span>
<span>{health}</span>
</div>

</div>

</div>

);

}