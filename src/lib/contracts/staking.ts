export const STAKING_CONTRACTS = {
  ECOIN: process.env.NEXT_PUBLIC_ECOIN_ADDRESS as `0x${string}`,
  STAKING: process.env.NEXT_PUBLIC_STREAMING_STAKING_ADDRESS as `0x${string}`,
  REFERRAL: process.env.NEXT_PUBLIC_REFERRAL_ADDRESS as `0x${string}`,
  FEE_COLLECTOR: process.env.NEXT_PUBLIC_CLAIM_FEE_COLLECTOR_ADDRESS as `0x${string}`,
} as const;
