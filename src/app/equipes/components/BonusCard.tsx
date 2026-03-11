export default function BonusCard({
  title,
  percent,
  levels,
  items,
  color,
}: any) {
  return (
    <div
      className={`p-6 rounded-xl bg-gradient-to-br ${color} border border-[#D4AF37]/30 shadow-xl`}
    >
      <h2 className="text-2xl font-bold text-black drop-shadow-sm">
        {title}
      </h2>

      <p className="text-black text-lg font-semibold mt-1">
        {percent} total — {levels}
      </p>

      <ul className="mt-4 text-black font-medium space-y-1">
        {items.map((i: any, idx: number) => (
          <li key={idx}>• {i}</li>
        ))}
      </ul>
    </div>
  );
}
