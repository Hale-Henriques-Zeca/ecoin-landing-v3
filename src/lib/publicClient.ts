import { createPublicClient, http } from "viem";
import { bscMainnet } from '@/lib/chains';

export const publicClient = createPublicClient({
  chain: bscMainnet,
  transport: http(),
});
