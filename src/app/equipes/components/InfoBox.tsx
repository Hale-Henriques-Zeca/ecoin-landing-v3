export default function InfoBox() {
  return (
    <div className="w-[90%] max-w-3xl bg-[#111] border border-[#333] rounded-xl p-6 shadow-lg text-gray-300 mb-10">
      <h2 className="text-2xl font-bold text-[#D4AF37] mb-3">
        Como funcionam as bonificações?
      </h2>

      <p className="mb-3">
        Toda compra na Pré-Venda gera <span className="text-[#D4AF37] font-semibold">9%</span> de
        bonificações distribuídas em 7 níveis.  
        No Staking, as recompensas são distribuídas com um total de{" "}
        <span className="text-blue-400 font-semibold">1%</span> dividido em 2 níveis.
      </p>

      <p className="mb-3">
        Os valores são pagos em <span className="text-[#D4AF37] font-semibold">E-Coin</span> e
        podem ser utilizados em todos os serviços da EdenKingDom, convertidos
        em viagens, benefícios ou trocados por USDT e MZN.
      </p>

      <p className="mb-1">
        O sistema é completamente automatizado e transparente.
      </p>
    </div>
  );
}
