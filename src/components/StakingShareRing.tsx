"use client";

type Props = {
  percent: number; // 0–100
};

export default function StakingShareRing({ percent }: Props) {
  const radius = 44;
  const stroke = 6;
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset =
    circumference - (percent / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-2">
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke="#1f2937"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="#D4AF37"
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${circumference} ${circumference}`}
          style={{ strokeDashoffset, transition: "stroke-dashoffset 0.6s" }}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
      </svg>

      <div className="text-sm text-[#D4AF37] font-semibold">
        {percent.toFixed(2)}%
      </div>

      <div className="text-xs text-gray-400">
        Your share
      </div>
    </div>
  );
}
