export const feeCollectorAbi = [
  {
    type: "function",
    name: "injectReward",
    stateMutability: "nonpayable",
    inputs: [{ name: "amount", type: "uint256" }],
    outputs: [],
  },
  {
    type: "function",
    name: "previewClaim",
    stateMutability: "pure",
    inputs: [{ name: "amount", type: "uint256" }],
    outputs: [
      { name: "fee", type: "uint256" },
      { name: "net", type: "uint256" },
    ],
  },
  {
    type: "function",
    name: "owner",
    stateMutability: "view",
    inputs: [],
    outputs: [{ type: "address" }],
  },
] as const;
