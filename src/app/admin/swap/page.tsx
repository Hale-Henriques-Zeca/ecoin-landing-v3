"use client"

import { useEffect,useState } from "react"

export default function AdminSwap(){

const [data,setData] = useState([])

useEffect(()=>{

fetch("/api/swaps")
.then(r=>r.json())
.then(setData)

},[])

return(

<div className="p-10">

<h1 className="text-2xl mb-6">
Bridge Admin
</h1>

<table className="w-full border">

<thead>

<tr>

<th>User</th>
<th>Amount</th>
<th>Tron</th>
<th>Status</th>

</tr>

</thead>

<tbody>

{data.map((tx:any,i)=>(

<tr key={i}>

<td>{tx.user}</td>
<td>{tx.amount}</td>
<td>{tx.tron}</td>
<td>{tx.status}</td>

</tr>

))}

</tbody>

</table>

</div>

)

}