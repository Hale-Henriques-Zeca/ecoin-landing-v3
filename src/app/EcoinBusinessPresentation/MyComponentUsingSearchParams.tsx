// src/app/EcoinBusinessPresentation/MyComponentUsingSearchParams.tsx
"use client";

import { useSearchParams } from "next/navigation";

export default function MyComponentUsingSearchParams() {
  const searchParams = useSearchParams();
  const value = searchParams.get("param");

  return <>{value && <div>Param recebido: {value}</div>}</>;
}