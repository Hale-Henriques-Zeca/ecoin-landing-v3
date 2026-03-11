"use client";

const frames = [
  { label: "1s", ms: 1_000 },
  { label: "1m", ms: 60_000 },
  { label: "1h", ms: 3_600_000 },
  { label: "1D", ms: 86_400_000 },
  { label: "1M", ms: 2_592_000_000 },
  { label: "1Y", ms: 31_536_000_000 },
];

export default function TimeframeSelector({
  value,
  onChange,
}: {
  value: number;
  onChange: (ms: number) => void;
}) {
  return (
    <div className="flex gap-2 mb-3">
      {frames.map((f) => (
        <button
          key={f.label}
          onClick={() => onChange(f.ms)}
          className={`px-3 py-1 rounded-lg text-sm ${
            value === f.ms
              ? "bg-[#00FF9C] text-black"
              : "bg-black/40 text-gray-400"
          }`}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}
