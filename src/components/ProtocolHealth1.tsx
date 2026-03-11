"use client";

export default function ProtocolHealth1({liquidity,pending}:{liquidity:number,pending:number}){

let status="Healthy";
let color="text-green-400";

if(liquidity<pending*3){
 status="Moderate";
 color="text-yellow-400";
}

if(liquidity<pending){
 status="Risk";
 color="text-red-400";
}

return(

<div className="bg-black/50 border border-gray-700 rounded-xl p-4">

<p className="text-xs text-gray-400 mb-2">
Protocol Health
</p>

<div className="flex justify-between text-sm">

<span className="text-gray-400">
Liquidity Status
</span>

<span className={`font-semibold ${color}`}>
{status}
</span>

</div>

</div>

);

}