import { useReadContract } from "wagmi"
import { formatUnits } from "viem"
import { priceEngineAbi } from "@/lib/abis/priceEngineAbi"
import { CONTRACTS } from "@/lib/contracts"

export function useEcoinPrice(){

const { data } = useReadContract({
 address: CONTRACTS.PRICE_ENGINE as `0x${string}`,
 abi: priceEngineAbi,
 functionName: "ecoinPriceUSDT",
 query:{ refetchInterval:5000 }
})

return data ? Number(formatUnits(data as bigint, 18)) : 0

}