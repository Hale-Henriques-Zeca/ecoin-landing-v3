"use client";

interface Props {
  onInput: (value: string) => void;
  onDelete: () => void;
  onClear: () => void;
}

export default function Keypad({ onInput, onDelete, onClear }: Props) {
  const keys = [
    "1", "2", "3",
    "4", "5", "6",
    "7", "8", "9",
    "C", "0", "←"
  ];

  return (
    <div className="grid grid-cols-3 gap-3 w-full max-w-sm mx-auto mt-6">
      {keys.map((key) => (
        <button
          key={key}
          className={`
            py-5 rounded-xl font-bold text-lg shadow-lg
            transition-all border
            ${key === "C"
              ? "bg-red-700 border-red-500 text-white hover:bg-red-600"
              : key === "←"
                ? "bg-black/60 border-yellow-600 text-yellow-500 hover:bg-black/40"
                : "bg-black/60 border-yellow-600 text-yellow-500 hover:bg-black/40"
            }
          `}
          onClick={() => {
            if (key === "C") return onClear();
            if (key === "←") return onDelete();
            onInput(key);
          }}
        >
          {key}
        </button>
      ))}
    </div>
  );
}
