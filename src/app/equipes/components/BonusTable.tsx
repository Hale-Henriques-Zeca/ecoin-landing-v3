const presaleLevels = [
  { level: 1, percent: "5.10%" },
  { level: 2, percent: "1.10%" },
  { level: 3, percent: "1.00%" },
  { level: 4, percent: "0.90%" },
  { level: 5, percent: "0.50%" },
  { level: 6, percent: "0.30%" },
  { level: 7, percent: "0.10%" },
];

const stakingLevels = [
  { level: 1, percent: "0.90%" },
  { level: 2, percent: "0.10%" },
];

export default function BonusTable() {
  return (
    <div className="w-[90%] max-w-3xl rounded-xl bg-[#111] border border-[#333] p-6 shadow-lg">

      <h2 className="text-2xl font-bold text-[#D4AF37] mb-4">
        Tabela Geral de Bonificações
      </h2>

      <table className="w-full text-left text-gray-300">
        <thead>
          <tr className="text-[#D4AF37] border-b border-[#333]">
            <th className="py-2">Nível</th>
            <th className="py-2">Percentual</th>
            <th className="py-2">Categoria</th>
          </tr>
        </thead>

        <tbody>
          {presaleLevels.map((l) => (
            <tr key={l.level} className="border-b border-[#222]">
              <td className="py-2">{l.level}</td>
              <td className="py-2">{l.percent}</td>
              <td className="py-2 text-yellow-600 font-bold">Pré-Venda</td>
            </tr>
          ))}

          {stakingLevels.map((l) => (
            <tr key={l.level} className="border-b border-[#222]">
              <td className="py-2">{l.level}</td>
              <td className="py-2">{l.percent}</td>
              <td className="py-2 text-blue-400 font-bold">Staking</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}
