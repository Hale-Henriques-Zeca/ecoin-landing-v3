"use client";

import { useEffect, useRef } from "react";
import {
  createChart,
  IChartApi,
  ISeriesApi,
  CandlestickData,
} from "lightweight-charts";

type Props = {
  candles: (CandlestickData & { volume: number })[];
};

// Interface customizada para o TypeScript
interface ChartWithSeries extends IChartApi {
  addCandlestickSeries: (options?: any) => ISeriesApi<"Candlestick">;
  addHistogramSeries: (options?: any) => ISeriesApi<"Histogram">;
}

export default function DexPriceChart({ candles }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const chartRef = useRef<ChartWithSeries | null>(null);
  const candleSeries = useRef<ISeriesApi<"Candlestick"> | null>(null);
  const volumeSeries = useRef<ISeriesApi<"Histogram"> | null>(null);

  useEffect(() => {
    if (!ref.current || chartRef.current) return;

    const chart = createChart(ref.current, {
      height: 360,
      layout: {
        background: { color: "transparent" },
        textColor: "#9ca3af",
      },
      grid: {
        vertLines: { color: "rgba(255,255,255,0.05)" },
        horzLines: { color: "rgba(255,255,255,0.05)" },
      },
      crosshair: { mode: 1 },
      timeScale: { timeVisible: true },
    }) as ChartWithSeries;

    candleSeries.current = chart.addCandlestickSeries({
      upColor: "#00FF9C",
      downColor: "#ef4444",
      wickUpColor: "#00FF9C",
      wickDownColor: "#ef4444",
      borderVisible: false,
    });

    volumeSeries.current = chart.addHistogramSeries({
      priceFormat: { type: "volume" },
      priceScaleId: "",
      color: "#1f2937",
    });

    chartRef.current = chart;
  }, []);

  useEffect(() => {
    if (!candleSeries.current || !volumeSeries.current) return;

    candleSeries.current.setData(candles);

    volumeSeries.current.setData(
      candles.map((c) => ({
        time: c.time,
        value: c.volume,
        color: c.close >= c.open ? "#00FF9C55" : "#ef444455",
      }))
    );
  }, [candles]);

  return <div ref={ref} className="w-full h-full" />;
}