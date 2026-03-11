// src/lib/chains.ts
export interface Chain {
  id: number;
  name: string;
  network: string;
  nativeCurrency: { name: string; symbol: string; decimals: number };
  rpcUrls: { default: { http: string[] } };
  blockExplorers: { default: { name: string; url: string } };
  testnet: boolean;
}

export const bscMainnet: Chain = {
  id: 56,
  name: 'Binance Smart Chain Mainnet',
  network: 'bsc',
  nativeCurrency: {
    name: 'Binance Coin',
    symbol: 'BNB',
    decimals: 18,
  },
  rpcUrls: {
    default: { http: ['https://bsc-dataseed.binance.org'] },
  },
  blockExplorers: {
    default: { name: 'BscScan', url: 'https://bscscan.com' },
  },
  testnet: false,
};