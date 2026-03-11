import { http, createConfig } from "wagmi";
import { bscMainnet } from '@/lib/chains';
import { walletConnect, injected } from "wagmi/connectors";

export const wagmiConfig = createConfig({
  chains: [bscMainnet],
  connectors: [
    injected(),
    walletConnect({
      projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,
    }),
  ],
  transports: {
    [bscMainnet.id]: http(),
  },
});
