export const corporateSwapAbi = [
  {
    name: "convert",
    type: "function",
    stateMutability: "nonpayable",
    inputs: [
      { name: "tokenIn", type: "address" },
      { name: "tokenOut", type: "address" },
      { name: "amountIn", type: "uint256" },
      { name: "minAmountOut", type: "uint256" }
    ],
    outputs: []
  },
  {
    name: "previewConvert",
    type: "function",
    stateMutability: "view",
    inputs: [
      { name: "tokenIn", type: "address" },
      { name: "tokenOut", type: "address" },
      { name: "amountIn", type: "uint256" }
    ],
    outputs: [
      { name: "amountOut", type: "uint256" },
      { name: "feeUSDT", type: "uint256" },
      { name: "allowed", type: "bool" }
    ]
  }
];