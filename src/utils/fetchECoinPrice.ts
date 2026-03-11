import axios from "axios";

/**
 * 🔐 Fonte oficial do preço da E-Coin
 * Endpoint interno (controlado pela EdenKingDom)
 *
 * Atualmente:
 * - Preço fixo mock: $0.30
 * Futuramente:
 * - Leitura direta da E-SWAP on-chain
 */

const API_URL = "/api/ecoin-price";

export async function fetchECoinPrice() {
  try {
    const res = await axios.get(API_URL);
    const data = res.data;

    if (!data || typeof data.price !== "number") {
      console.warn("⚠️ API E-Coin retornou dados inválidos:", data);
      return null;
    }

    return {
      price: data.price,        // 💰 preço oficial
      volume: null,             // 🔜 virá da E-Swap
      liquidity: null,          // 🔜 virá da E-Swap
      change24h: null,          // 🔜 virá da E-Swap
      source: data.source,      // ex: "E-SWAP (mock)"
      status: data.status,      // ex: "ok" | "paused"
    };

  } catch (err) {
    console.error("❌ Erro ao buscar preço da E-Coin:", err);
    return null;
  }
}
