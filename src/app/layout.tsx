import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import { Providers } from "./providers";
import { DexWalletProvider } from "@/contexts/DexWalletContext";
import { Toaster } from "react-hot-toast";


export const metadata: Metadata = {
  title: "E-Coin — EdenKingDom Coin",
  description: "The corporate Currency",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body>
        <Providers>
          <DexWalletProvider>
            <Header />
            {children}
            <Toaster position="bottom-center" />
          </DexWalletProvider>
        </Providers>
      </body>
    </html>
  );
}
