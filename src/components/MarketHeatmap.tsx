"use client"

export default function MarketHeatmap({data}){

return(

<div className="grid grid-cols-4 gap-3">

{data.map(asset=>{

const color =
asset.change > 0
? "bg-green-500/20"
: asset.change < 0
? "bg-red-500/20"
: "bg-gray-700/30"

return(

<div
key={asset.symbol}
className={`p-3 rounded-lg ${color}`}
>

<div className="font-bold">
{asset.symbol}
</div>

<div>
{asset.change.toFixed(2)}%
</div>

</div>

)

})}

</div>

)

}