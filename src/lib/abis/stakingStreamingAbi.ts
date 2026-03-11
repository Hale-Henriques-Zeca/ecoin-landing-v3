export const stakingStreamingAbi = [

  // ===== READS =====
  {
    type: "function",
    name: "totalStaked",
    stateMutability: "view",
    inputs: [],
    outputs: [{ type: "uint256" }],
  },

  {
  type: "function",
  name: "injectReward",
  stateMutability: "nonpayable",
  inputs: [
    {
      name: "amount",
      type: "uint256"
    }
  ],
  outputs: []
},

  {
    type: "function",
    name: "accRewardPerShare",
    stateMutability: "view",
    inputs: [],
    outputs: [{ type: "uint256" }],
  },

  {
    type: "function",
    name: "pendingRewards",
    stateMutability: "view",
    inputs: [{ type: "address" }],
    outputs: [{ type: "uint256" }],
  },

  {
    type: "function",
    name: "users",
    stateMutability: "view",
    inputs: [{ type: "address" }],
    outputs: [
      { type: "uint256" },
      { type: "uint256" },
      { type: "uint256" },
    ],
  },

  // 🔹 NOVAS LEITURAS PARA SECURITY PANEL

  {
    type: "function",
    name: "lastClaim",
    stateMutability: "view",
    inputs: [{ type: "address" }],
    outputs: [{ type: "uint256" }],
  },

  {
    type: "function",
    name: "stakeTimestamp",
    stateMutability: "view",
    inputs: [{ type: "address" }],
    outputs: [{ type: "uint256" }],
  },

  {
    type: "function",
    name: "lastStream",
    stateMutability: "view",
    inputs: [],
    outputs: [{ type: "uint256" }],
  },

  {
    type: "function",
    name: "CLAIM_COOLDOWN",
    stateMutability: "view",
    inputs: [],
    outputs: [{ type: "uint256" }],
  },

  {
    type: "function",
    name: "MIN_STAKE_TIME",
    stateMutability: "view",
    inputs: [],
    outputs: [{ type: "uint256" }],
  },

  {
    type: "function",
    name: "STREAM_RATE",
    stateMutability: "view",
    inputs: [],
    outputs: [{ type: "uint256" }],
  },

  // ===== WRITES =====

  {
    type: "function",
    name: "stake",
    stateMutability: "nonpayable",
    inputs: [{ type: "uint256" }],
    outputs: [],
  },

  {
    type: "function",
    name: "unstake",
    stateMutability: "nonpayable",
    inputs: [{ type: "uint256" }],
    outputs: [],
  },

  {
    type: "function",
    name: "claim",
    stateMutability: "nonpayable",
    inputs: [],
    outputs: [],
  },

  // ===== EVENTS =====

  {
    type: "event",
    name: "Staked",
    inputs: [
      { indexed: true, name: "user", type: "address" },
      { indexed: false, name: "amount", type: "uint256" },
    ],
  },

  {
    type: "event",
    name: "Unstaked",
    inputs: [
      { indexed: true, name: "user", type: "address" },
      { indexed: false, name: "amount", type: "uint256" },
    ],
  },

  {
    type: "event",
    name: "Claimed",
    inputs: [
      { indexed: true, name: "user", type: "address" },
      { indexed: false, name: "amount", type: "uint256" },
    ],
  },

] as const;