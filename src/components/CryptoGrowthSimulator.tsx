"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { useReadContract } from "wagmi";
import { priceEngineAbi } from "@/lib/abis/priceEngineAbi";
import { CONTRACTS } from "@/lib/contracts";
import { formatUnits } from "viem";
import EcoinFutureSimulator from "@/components/EcoinFutureSimulator"
import {
Chart as ChartJS,
CategoryScale,
LinearScale,
PointElement,
LineElement,
Tooltip,
Filler
} from "chart.js"

import { Line } from "react-chartjs-2"

ChartJS.register(
CategoryScale,
LinearScale,
PointElement,
LineElement,
Tooltip,
Filler
)

export default function CryptoGrowthSimulator() {

  const [investment,setInvestment] = useState(100)
  const [year,setYear] = useState(2017)
  const [coin,setCoin] = useState("BTC")
  const [result,setResult] = useState<number | null>(null)
  const [chartData,setChartData] = useState<any>(null)

  const [currentPrices,setCurrentPrices] = useState<any>({})



/* ===========================
   E-COIN PRICE (REAL DATA)
=========================== */

const { data: ecoinPriceRaw } = useReadContract({
 address: CONTRACTS.PRICE_ENGINE,
 abi: priceEngineAbi,
 functionName: "ecoinPriceUSDT",
 query: { refetchInterval: 5000 }
})

let ecoinPrice = 0;

if (ecoinPriceRaw !== undefined && typeof ecoinPriceRaw === "bigint") {
  ecoinPrice = Number(formatUnits(ecoinPriceRaw, 18));
} 


/* ===========================
   HISTORICAL START PRICES
=========================== */

const historicalPrices:any = {

BTC:{
2010:0.39,
2011:3.14,
2012:12,
2013:1120,
2014:300,
2015:450,
2016:1000,
2017:20000,
2018:17675,
2019:13796,
2020:29000,
2021:63075,
2022:64978,
2023:44012,
},

ETH:{
2016:10,
2017:300,
2018:1300,
2019:180,
2020:730,
2021:4800,
2022:3800,
2023:2200
},

BNB:{
2017:0.11,
2018:13,
2019:38,
2020:39,
2021:690,
2022:500,
2023:310
},

SOL:{
2020:0.77,
2021:250,
2022:120,
2023:180
},

ECOIN:{
2025: ecoinPrice || 1,
2026: ecoinPrice || 1
}

}


/* ===========================
   FETCH LIVE PRICES
=========================== */

const fetchPrices = async()=>{

try{

const btc = await axios.get(
"https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT"
)

const eth = await axios.get(
"https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT"
)

const bnb = await axios.get(
"https://api.binance.com/api/v3/ticker/price?symbol=BNBUSDT"
)

const sol = await axios.get(
"https://api.binance.com/api/v3/ticker/price?symbol=SOLUSDT"
)

setCurrentPrices({

BTC:Number(btc.data.price),
ETH:Number(eth.data.price),
BNB:Number(bnb.data.price),
SOL:Number(sol.data.price),
ECOIN:ecoinPrice

})

}catch(err){

console.log("price error",err)

}

}


/* ===========================
   UPDATE PRICES
=========================== */

useEffect(()=>{

fetchPrices()

const interval = setInterval(fetchPrices,15000)

return ()=>clearInterval(interval)

},[ecoinPrice])


/* ===========================
   CALCULATE GROWTH
=========================== */

const calculateGrowth = ()=>{

const coinHistory = historicalPrices[coin]

if(!coinHistory) return

const availableYears = Object.keys(coinHistory).map(Number)

const closestYear =
availableYears.reverse().find(y => y <= year)

const startPrice = coinHistory[closestYear]

const currentPrice = currentPrices[coin]

if(!startPrice || !currentPrice) return

const coins = investment / startPrice

const value = coins * currentPrice

setResult(value)

/* ======================
BUILD GROWTH CHART
====================== */

const years = []
const values = []

for(let y = closestYear; y <= new Date().getFullYear(); y++){

years.push(y)

const price =
coinHistory[y] ||
currentPrice

values.push(coins * price)

}

setChartData({

labels: years,

datasets:[{

label:`$${investment} invested in ${coin}`,

data: values,

borderColor:"#D4AF37",

backgroundColor:"rgba(212,175,55,0.15)",

fill:true,

tension:0.3

}]

})

}


/* ===========================
   UI
=========================== */

return(


<div translate="no" className="w-full max-w-4xl mx-auto space-y-8">

<div className="text-center space-y-2">

<h2 className="text-3xl font-bold text-[#D4AF37]">
🚀 Crypto Growth Simulator
</h2>

<p className="text-gray-400">
See how much a past investment could be worth today.
</p>

</div>


<div className="bg-[#0D0D0D] border border-gray-800 rounded-xl p-8 space-y-6">

{/* INVESTMENT */}

<div>

<label className="text-gray-300 text-sm">
Initial Investment ($)
</label>

<input
type="number"
value={investment}
onChange={(e)=>setInvestment(Number(e.target.value))}
className="w-full mt-1 bg-black border border-gray-700 rounded-lg p-2 text-white"
/>

</div>


{/* COIN */}

<div>

<label className="text-gray-300 text-sm">
Cripto
</label>

<select
translate="no"
value={coin}
onChange={(e)=>setCoin(e.target.value)}
className="w-full mt-1 bg-black border border-gray-700 rounded-lg p-2 text-white"
>

<option translate="no" value="BTC">Bitcoin</option>
<option translate="no" value="ETH">Ethereum</option>
<option translate="no" value="BNB">BNB</option>
<option translate="no" value="SOL">Solana</option>
<option translate="no" value="ECOIN">E-Coin</option>
</select>

</div>


{/* YEAR */}

<div>

<label className="text-gray-300 text-sm">
Year of Purchase
</label>

<select
value={year}
onChange={(e)=>setYear(Number(e.target.value))}
className="w-full mt-1 bg-black border border-gray-700 rounded-lg p-2 text-white"
>

<option value="2010">2010</option>
<option value="2011">2011</option>
<option value="2012">2012</option>
<option value="2013">2013</option>
<option value="2014">2014</option>
<option value="2015">2015</option>
<option value="2016">2016</option>
<option value="2017">2017</option>
<option value="2018">2018</option>
<option value="2019">2019</option>
<option value="2020">2020</option>
<option value="2021">2021</option>
<option value="2022">2022</option>
<option value="2023">2023</option>
<option value="2023">2024</option>
<option value="2024">2025</option>
<option value="2025">2025</option>
<option value="2026">2026</option>
</select>

</div>


{/* BUTTON */}

<button
onClick={calculateGrowth}
className="w-full bg-[#D4AF37] text-black font-semibold py-3 rounded-lg hover:opacity-90"
>

Calculate Growth

</button>


{/* RESULT */}

{result &&(

<div className="bg-black border border-gray-700 rounded-xl p-6 text-center">

<p className="text-gray-400">
Estimated value today
</p>

<p className="text-3xl font-bold text-green-400 mt-2">

${result.toLocaleString()}

</p>

</div>

)}

{chartData && (

<div className="bg-black border border-gray-700 rounded-xl p-6">

<p className="text-gray-400 text-center mb-4">

Growth of your investment over time

</p>

<Line
data={chartData}
options={{
plugins:{legend:{display:false}},
scales:{
x:{ticks:{color:"#aaa"}},
y:{ticks:{color:"#aaa"}}
}
}}
/>

</div>

)}

<EcoinFutureSimulator />
</div>

</div>

)

}