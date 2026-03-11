"use client"

export default function CryptoRanking({coins}){

return(

<table className="w-full">

<thead>
<tr>
<th>#</th>
<th>Coin</th>
<th>Price</th>
<th>24h</th>
</tr>
</thead>

<tbody>

{coins.map((coin,i)=>(

<tr key={coin.symbol}>

<td>{i+1}</td>

<td className="flex items-center gap-2">
<img src={coin.logo} width={20}/>
{coin.symbol}
</td>

<td>${coin.price.toFixed(6)}</td>

<td className={
coin.change>0
?"text-green-400"
:"text-red-400"
}>
{coin.change.toFixed(2)}%
</td>

</tr>

))}

</tbody>

</table>

)

}