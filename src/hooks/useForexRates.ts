import { useState, useEffect } from "react"
import axios from "axios"

export function useForexRates(base="USD"){

const [rates,setRates] = useState<any>({})
const [loading,setLoading] = useState(true)

useEffect(()=>{

async function loadRates(){

try{

const res = await axios.get(
`https://open.er-api.com/v6/latest/${base}`
)

setRates(res.data.rates)

}catch(e){

console.log("Forex error",e)

}finally{

setLoading(false)

}

}

loadRates()

},[base])

return {rates,loading}

}