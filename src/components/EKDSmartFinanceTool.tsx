"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Line } from "react-chartjs-2";
import { JsonRpcProvider } from "ethers";
import axios from "axios";
import { useReadContract } from "wagmi";
import { priceEngineAbi } from "@/lib/abis/priceEngineAbi";
import { CONTRACTS } from "@/lib/contracts";
import { formatUnits } from "viem";
import { useEcoinPrice } from "@/hooks/useEcoinPrice"
import { currencies } from "@/data/currencies"
import CurrencyDropdown from "@/components/CurrencyDropdown"


export default function EKDSmartFinanceTool() {
 

  const { data: ecoinPriceRaw } = useReadContract({
 address: CONTRACTS.PRICE_ENGINE,
 abi: priceEngineAbi,
 functionName: "ecoinPriceUSDT",
 query: { refetchInterval: 5000 }
})

const ecoinPrice =
typeof ecoinPriceRaw === "bigint"
  ? Number(formatUnits(ecoinPriceRaw, 18))
  : 0

 const [prevEcoinPrice, setPrevEcoinPrice] = useState<number | null>(null)
const [ecoinChange, setEcoinChange] = useState<number>(0)

useEffect(() => {

if(!ecoinPrice) return

if(prevEcoinPrice !== null){

const change =
((ecoinPrice - prevEcoinPrice) / prevEcoinPrice) * 100

setEcoinChange(change)

}

setPrevEcoinPrice(ecoinPrice)

},[ecoinPrice]) 

  const [mode, setMode] = useState<"converter" | "calculator" | "market">("converter");

  // ====== CALCULATOR ======
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");

  const handleKey = (key: string) => {
  if (key === "C") {
    // Limpa tudo
    setExpression("");
    setResult("");
    return;
  }

  if (key === "DEL") {
    // Apaga apenas o último caractere
    setExpression((prev) => prev.slice(0, -1));
    return;
  }

  if (key === "=") {
    try {
      const sanitized = expression
        .replace(/÷/g, "/")
        .replace(/×/g, "*");

      const evalResult = eval(sanitized);
      setResult(evalResult.toString());
    } catch {
      setResult("Error");
    }
    return;
  }

  // Evita escrever depois de erro
  if (result === "Error") {
    setResult("");
    setExpression(key);
    return;
  }

  // Adiciona tecla normalmente
  setExpression((prev) => prev + key);
};


  const calculatorKeys = [
  "C", "DEL", "%", "÷",
  "7", "8", "9", "-",
  "4", "5", "6", "+",
  "1", "2", "3", "×",
  "0", ".", "=",      
];


  // ====== CONVERTER ======
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("MZN");
  const [amount, setAmount] = useState<number | string>("");
  const [converted, setConverted] = useState<number | null>(null);
  const [rate, setRate] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);

  // conversão automática
useEffect(()=>{

if(!amount || rate === null){
setConverted(null)
return
}

setConverted(Number(amount) * rate)

},[amount,rate])

useEffect(()=>{

fetchLiveRate(fromCurrency,toCurrency)

},[fromCurrency,toCurrency])


 
const getUSDPrice = async (symbol:string) => {

if(symbol === "USD") return 1

if(symbol === "E-COIN") return ecoinPrice

/* CRYPTO */

const cryptoMap:any = {
USDT: "tether"
}

if(cryptoMap[symbol]){

const res = await axios.get(
`https://api.coingecko.com/api/v3/simple/price?ids=${cryptoMap[symbol]}&vs_currencies=usd`
)

return res.data[cryptoMap[symbol]].usd
}

/* CRYPTO via BINANCE */

const cryptoSymbols = ["BTC","ETH","BNB","USDT"]

if(cryptoSymbols.includes(symbol)){

const res = await axios.get(
`https://api.binance.com/api/v3/ticker/price?symbol=${symbol}USDT`
)

return Number(res.data.price)
}
/* FIAT */
const res = await axios.get(
`https://open.er-api.com/v6/latest/USD`
)

return 1 / res.data.rates[symbol]

}


 const fetchLiveRate = async (from:string,to:string) => {

setLoading(true)

try{

const fromUSD = await getUSDPrice(from)
const toUSD = await getUSDPrice(to)

const rateValue = fromUSD / toUSD

setRate(rateValue)

return rateValue

}catch(err){

console.log("FX error",err)

setRate(null)

return null

}finally{

setLoading(false)

}

}



  // ====== MARKET DASHBOARD ======
  const [marketData, setMarketData] = useState<
    { symbol: string; price: number; change: number }[]
  >([]);

  const fetchMarketData = async () => {

try {

const btc = await axios.get(
"https://api.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT"
)

const eth = await axios.get(
"https://api.binance.com/api/v3/ticker/24hr?symbol=ETHUSDT"
)

const bnb = await axios.get(
"https://api.binance.com/api/v3/ticker/24hr?symbol=BNBUSDT"
)

const usdt = 1

setMarketData([

{
symbol: "E-COIN",
price: Number(ecoinPrice.toFixed(6)),
change: Number(ecoinChange.toFixed(3))
},

{
symbol: "BTC",
price: Number(btc.data.lastPrice),
change: Number(btc.data.priceChangePercent)
},

{
symbol: "ETH",
price: Number(eth.data.lastPrice),
change: Number(eth.data.priceChangePercent)
},

{
symbol: "BNB",
price: Number(bnb.data.lastPrice),
change: Number(bnb.data.priceChangePercent)
},

{
symbol: "USDT",
price: usdt,
change: 0
}

])

} catch(err){

console.log("Market API error", err)

}

}

  useEffect(() => {

if(!ecoinPrice) return

fetchMarketData()

const interval = setInterval(fetchMarketData,10000)

return () => clearInterval(interval)

},[ecoinPrice])

  const chartData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        fill: true,
        label: `${fromCurrency} → ${toCurrency}`,
        data: [
(rate ?? 1) * 0.98,
(rate ?? 1) * 1.01,
(rate ?? 1) * 0.99,
(rate ?? 1) * 1.02,
(rate ?? 1)
], 
        borderColor: "#D4AF37",
        backgroundColor: "rgba(212,175,55,0.1)",
        tension: 0.3,
      },
    ],
  };

  return (
    <section className="relative w-full bg-black text-white py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.12),transparent_70%)]" />

      {/* TÍTULO CENTRAL */}
      <div className="flex flex-col items-center justify-center mb-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          EKD <span className="text-[#D4AF37]">Smart Finance Tool</span>
        </h2>
        <div className="flex items-center gap-3 bg-[#0D0D0D]/70 border border-gray-800 rounded-full p-2">
          {["converter", "calculator", "market"].map((tab) => (
            <button
              key={tab}
              onClick={() => setMode(tab as any)}
              className={`px-5 py-2 rounded-full text-sm capitalize transition ${
                mode === tab
                  ? "bg-[#D4AF37]/20 text-[#D4AF37]"
                  : "text-gray-400 hover:text-[#D4AF37]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* CONTEÚDO CENTRALIZADO */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-md mx-auto"
      >
        {mode === "converter" && (
          <div className="bg-[#0D0D0D]/80 border border-gray-800 rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4 text-[#D4AF37]">Converter</h3>
            <div className="flex justify-between mb-4">
              <span className="text-sm text-gray-400">Live Exchange</span>
              <span className="text-xs text-gray-500">{new Date().toLocaleDateString()}</span>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <CurrencyDropdown
                value={fromCurrency}
                onChange={setFromCurrency}
                />
                <button onClick={() => [setFromCurrency(toCurrency), setToCurrency(fromCurrency)]} className="text-[#D4AF37] hover:text-white text-2xl">
                  ↔
                </button>
                <CurrencyDropdown
                value={toCurrency}
                onChange={setToCurrency}
                />
              </div>

              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount..."
                className="w-full bg-transparent border border-gray-700 p-3 rounded-lg text-xl text-[#D4AF37] focus:outline-none"
              />

              <div className="text-2xl mt-2">
                ={" "}
                <span className="text-[#D4AF37]">
                  {loading ? "Loading..." : converted !== null ? converted : "—"}
                </span>{" "}
                {toCurrency}
              </div>

              <div className="h-44 mt-6">
                <Line data={chartData} options={{ plugins: { legend: { display: false } } }} />
              </div>
            </div>
          </div>
        )}

        {mode === "calculator" && (
          <div className="bg-[#0D0D0D]/80 border border-gray-800 rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4 text-[#D4AF37]">Calculator</h3>
            <div className="bg-black/70 border border-gray-700 rounded-lg p-4 text-right mb-4">
              <div className="text-gray-400 text-sm">{expression}</div>
              <div className="text-3xl font-semibold text-[#D4AF37]">
                {result || "0"}
              </div>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {calculatorKeys.map((key) => (
                <button
                  key={key}
                  onClick={() => handleKey(key === "÷" ? "/" : key === "×" ? "*" : key)}
                  className={`py-3 rounded-lg text-lg font-semibold transition ${
                    key === "="
                      ? "bg-[#D4AF37] text-black hover:bg-[#f1c95a]"
                      : "bg-[#111]/70 hover:bg-[#222] text-white"
                  }`}
                >
                  {key}
                </button>
              ))}
            </div>
          </div>
        )}

        {mode === "market" && (
          <div className="bg-[#0D0D0D]/80 border border-gray-800 rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-4 text-[#D4AF37]">Live Market Dashboard</h3>
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="text-gray-400 border-b border-gray-800">
                  <th className="py-2">Asset</th>
                  <th className="py-2">Price (USD)</th>
                  <th className="py-2">Change</th>
                </tr>
              </thead>
              <tbody>
                {marketData.map((coin) => (
                  <tr key={coin.symbol} className="border-b border-gray-900">
                    <td className="py-2 font-semibold">{coin.symbol}</td>
                    <td className="py-2">${coin.price.toFixed(6)}</td>
                    <td
                      className={`py-2 ${
                        coin.change > 0
                          ? "text-green-400"
                          : coin.change < 0
                          ? "text-red-400"
                          : "text-gray-400"
                      }`}
                    >
                      {coin.change > 0 ? "+" : ""}
                      {coin.change}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </motion.div>
    </section>
  );
}
