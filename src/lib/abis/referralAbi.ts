export const referralAbi = [
  {
    type: "function",
    name: "bindInviter",
    stateMutability: "nonpayable",
    inputs: [{ name: "inviter", type: "address" }],
    outputs: [],
  },
  {
    type: "function",
    name: "inviterOf",
    stateMutability: "view",
    inputs: [{ name: "invitee", type: "address" }],
    outputs: [{ name: "inviter", type: "address" }],
  },
  {
    type: "function",
    name: "pendingRewards",
    stateMutability: "view",
    inputs: [{ name: "inviter", type: "address" }],
    outputs: [{ name: "amount", type: "uint256" }],
  },
  {
    type: "function",
    name: "claim",
    stateMutability: "nonpayable",
    inputs: [],
    outputs: [],
  },
] as const;