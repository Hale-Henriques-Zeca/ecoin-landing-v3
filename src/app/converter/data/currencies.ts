// src/app/converter/data/currencies.ts

export const currencies = [
  // 🟡 E-COIN (Moeda especial da EdenKingDom)
  {
    code: "ECOIN",
    name: "E-Coin",
    flag: "ec", // usaremos bandeira custom / ou fallback
    type: "special",
  },

  // 🔵 Moedas FIAT principais
  { code: "USD", name: "US Dollar", flag: "us", type: "fiat" },
  { code: "EUR", name: "Euro", flag: "eu", type: "fiat" },
  { code: "GBP", name: "British Pound", flag: "gb", type: "fiat" },
  { code: "MZN", name: "Mozambican Metical", flag: "mz", type: "fiat" },
  { code: "ZAR", name: "South African Rand", flag: "za", type: "fiat" },
  { code: "AOA", name: "Angolan Kwanza", flag: "ao", type: "fiat" },
  { code: "CAD", name: "Canadian Dollar", flag: "ca", type: "fiat" },
  { code: "BRL", name: "Brazilian Real", flag: "br", type: "fiat" },
  { code: "JPY", name: "Japanese Yen", flag: "jp", type: "fiat" },
  { code: "CNY", name: "Chinese Yuan", flag: "cn", type: "fiat" },
  { code: "INR", name: "Indian Rupee", flag: "in", type: "fiat" },
  { code: "AUD", name: "Australian Dollar", flag: "au", type: "fiat" },

  // 🟢 Stablecoins
  { code: "USDT", name: "Tether", flag: "us", type: "stable" },
  { code: "USDC", name: "USD Coin", flag: "us", type: "stable" },
  { code: "DAI", name: "DAI Stablecoin", flag: "us", type: "stable" },

  // 🟣 Criptomoedas
  { code: "BTC", name: "Bitcoin", flag: "btc", type: "crypto" },
  { code: "ETH", name: "Ethereum", flag: "eth", type: "crypto" },
  { code: "BNB", name: "BNB", flag: "bnb", type: "crypto" },
  { code: "SOL", name: "Solana", flag: "sol", type: "crypto" },
  { code: "XRP", name: "XRP", flag: "xrp", type: "crypto" },
  { code: "DOGE", name: "Dogecoin", flag: "doge", type: "crypto" },
  { code: "ADA", name: "Cardano", flag: "ada", type: "crypto" },
  { code: "TRX", name: "Tron", flag: "tr", type: "crypto" },
];
