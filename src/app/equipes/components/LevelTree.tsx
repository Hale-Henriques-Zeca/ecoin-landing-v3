export default function LevelTree() {
  return (
    <div className="bg-[#0a0a0a] border border-[#333] rounded-xl p-6 shadow-xl">

      <h2 className="text-2xl font-bold text-[#D4AF37] mb-4 text-center">
        Estrutura de Níveis (Genealogia)
      </h2>

      <div className="flex flex-col items-center text-gray-300">

        <div className="py-2 px-4 bg-[#111] border border-[#444] rounded-lg">
          👑 Você (Líder)
        </div>

        <div className="mt-4 flex gap-6">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="py-2 px-4 bg-[#111] border border-[#444] rounded-lg"
            >
              🟡 Nível {i}
            </div>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-3 gap-4">
          {[3, 4, 5].map((i) => (
            <div
              key={i}
              className="py-2 px-4 bg-[#111] border border-[#444] rounded-lg"
            >
              🟡 Nível {i}
            </div>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-4 gap-4">
          {[6, 7].map((i) => (
            <div
              key={i}
              className="py-2 px-4 bg-[#111] border border-[#444] rounded-lg"
            >
              🟡 Nível {i}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
