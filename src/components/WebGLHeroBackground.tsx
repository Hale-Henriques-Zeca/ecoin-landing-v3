"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const GlobeChartBackground = dynamic(
  () => import("./GlobeChartBackground"),
  { ssr: false }
);

export default function WebGLHeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 pointer-events-none">
      <Suspense fallback={null}>
        <GlobeChartBackground
          price={1}
          treasury="0"
          stakingRatio="0%"
          buybackBalance={0n}
        />
      </Suspense>
    </div>
  );
}