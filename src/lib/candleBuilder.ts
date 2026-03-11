export type Candle = {
  time: number;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  trades: number;
  vwap: number;
};

export function updateCandles(
  candles: Candle[],
  price: number,
  volume: number,
  timestamp: number,
  timeframeMs = 1000 // 🔥 1 segundo (pode ser 1ms se quiseres)
): Candle[] {
  const bucketTime =
    Math.floor(timestamp / timeframeMs) * timeframeMs;

  const last = candles[candles.length - 1];

  if (!last || last.time !== bucketTime) {
    return [
      ...candles,
      {
        time: bucketTime,
        open: price,
        high: price,
        low: price,
        close: price,
        volume,
        trades: 1,
        vwap: price,
      },
    ];
  }

  const newVolume = last.volume + volume;
  const newVWAP =
    (last.vwap * last.volume + price * volume) /
    newVolume;

  last.high = Math.max(last.high, price);
  last.low = Math.min(last.low, price);
  last.close = price;
  last.volume = newVolume;
  last.trades += 1;
  last.vwap = newVWAP;

  return [...candles.slice(0, -1), last];
}
