"use client";

import { useEffect, useState } from "react";

export default function QueryParamReader() {
  const [param, setParam] = useState<string | null>(null);

  useEffect(() => {
    // Só roda no browser
    const searchParams = new URLSearchParams(window.location.search);
    setParam(searchParams.get("param"));
  }, []);

  // Se não houver param, não renderiza nada
  if (!param) return null;

  return (
    <div className="text-gray-300 text-sm mb-2 text-center">
      Param recebido: {param}
    </div>
  );
}