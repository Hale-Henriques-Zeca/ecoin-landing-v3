export const erc20Abi = [
  { type: "function", name: "decimals", stateMutability: "view", inputs: [], outputs: [{ type: "uint8" }] },
  { type: "function", name: "symbol", stateMutability: "view", inputs: [], outputs: [{ type: "string" }] },
  { type: "function", name: "balanceOf", stateMutability: "view", inputs: [{ type: "address", name: "account" }], outputs: [{ type: "uint256" }] },
  { type: "function", name: "allowance", stateMutability: "view", inputs: [{ type: "address", name: "owner" }, { type: "address", name: "spender" }], outputs: [{ type: "uint256" }] },
  { type: "function", name: "approve", stateMutability: "nonpayable", inputs: [{ type: "address", name: "spender" }, { type: "uint256", name: "amount" }], outputs: [{ type: "bool" }] },
] as const;

export const stakingEpochAbi = [
  { type: "function", name: "EPOCH_DURATION", stateMutability: "view", inputs: [], outputs: [{ type: "uint256" }] },
  { type: "function", name: "currentEpoch", stateMutability: "view", inputs: [], outputs: [{ type: "uint256" }] },
  { type: "function", name: "lastEpochTime", stateMutability: "view", inputs: [], outputs: [{ type: "uint256" }] },
  { type: "function", name: "totalStaked", stateMutability: "view", inputs: [], outputs: [{ type: "uint256" }] },

  { type: "function", name: "users", stateMutability: "view", inputs: [{ type: "address", name: "" }], outputs: [
    { type: "uint256", name: "amount" },
    { type: "uint256", name: "rewardDebt" },
    { type: "uint256", name: "pendingRewards" },
  ]},

  { type: "function", name: "epochs", stateMutability: "view", inputs: [{ type: "uint256", name: "" }], outputs: [
    { type: "uint256", name: "rewardPool" },
    { type: "uint256", name: "totalStakedSnapshot" },
  ]},

  { type: "function", name: "stake", stateMutability: "nonpayable", inputs: [{ type: "uint256", name: "amount" }], outputs: [] },
  { type: "function", name: "unstake", stateMutability: "nonpayable", inputs: [{ type: "uint256", name: "amount" }], outputs: [] },
  { type: "function", name: "claim", stateMutability: "nonpayable", inputs: [], outputs: [] },
] as const;
