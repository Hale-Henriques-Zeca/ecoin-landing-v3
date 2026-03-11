"use client";

import Image from "next/image";

export default function CryptoHistoricalExample() {
  return (
    <div className="w-full max-w-5xl mx-auto space-y-10">

      <div className="space-y-4 text-gray-300 leading-relaxed">

        <h3 className="text-2xl font-bold text-[#D4AF37]">
          📈 Exemplos Históricos de Valorização no Mercado Cripto
        </h3>

        <p>
          Das três vantagens apresentadas, a primeira vantagem é a mais poderosa e lucrativa.
          Um dos exemplos grandes e históricos foi com as moedas <b>Solana</b> e <b>Bitcoin</b>.
        </p>

        <p>
          A <b>Solana (SOL)</b> foi lançada em abril de 2020 com um preço inicial em torno de
          <b> US$ 0,77</b>. Durante o seu primeiro ano, a criptomoeda teve uma valorização
          significativa, fechando 2020 valendo aproximadamente <b>US$ 1,80</b>.
        </p>

        <p className="font-semibold text-white">
          Resumo da Solana em 2020
        </p>

        <ul className="list-disc pl-6 space-y-1">
          <li>Preço de Lançamento (Abril 2020): Aproximadamente US$ 0,77</li>
          <li>Preço de Fechamento (Dezembro 2020): Aproximadamente US$ 1,80</li>
          <li>Preço Mínimo: Cerca de US$ 0,51</li>
          <li>Preço Máximo: Cerca de US$ 4,96</li>
          <li>
            Tendência: A moeda teve um ano de estreia positivo, começando baixa
            e valorizando até o final do ano.
          </li>
        </ul>

        <p>
          Já para o ano de <b>2021</b>, a Solana teve um crescimento explosivo,
          consolidando-se como uma das principais altcoins do mercado.
        </p>

        <p className="font-semibold text-white">
          Destaques da Solana em 2021
        </p>

        <ul className="list-disc pl-6 space-y-1">
          <li>Início de 2021: US$ 1,80</li>
          <li>Pico (Setembro/Novembro 2021): Ultrapassou US$ 250</li>
          <li>Valorização anual superior a 9.000%</li>
        </ul>

        <p>
          Em resumo, quem investiu no início viu uma valorização massiva,
          com a moeda crescendo exponencialmente à medida que seu
          ecossistema DeFi e NFTs crescia.
        </p>

      </div>


      {/* IMAGEM SOLANA */}
      <div className="rounded-xl overflow-hidden border border-gray-800">
        <Image
          src="/images/solana-history2.png"
          alt="Solana historical price chart"
          width={1200}
          height={600}
          className="w-full h-auto"
        />
      </div>


      {/* BITCOIN */}
      <div className="space-y-4 text-gray-300 leading-relaxed">

        <p>
          O mesmo aconteceu com o <b>Bitcoin</b>, que apresentou uma das maiores
          valorizações da história dos mercados financeiros.
        </p>

        <p className="font-semibold text-white">
          Preço histórico do Bitcoin
        </p>

        <ul className="list-disc pl-6 space-y-1">
          <li>2009: Bitcoin não valia nenhum centavo de dólar</li>
          <li>2010: Bitcoin chegou a valer US$ 0,39</li>
          <li>2011: Bitcoin rompeu US$ 1 e chegou a US$ 3,14</li>
          <li>2012: Bitcoin encerrou o ano valendo US$ 12</li>
          <li>2013: Bitcoin chegou a valer US$ 1.120</li>
          <li>2014: Bitcoin caiu e fechou o ano valendo US$ 300</li>
          <li>2015: Bitcoin subiu para US$ 450</li>
          <li>2016: Bitcoin voltou a valer US$ 1.000</li>
          <li>2017: Bitcoin alcançou US$ 20.000</li>
          <li>2018: Bitcoin caiu para US$ 17.675</li>
          <li>2019: Pico de US$ 13.796</li>
          <li>2020: Superou US$ 29.000</li>
          <li>2021: Chegou a US$ 63.075</li>
          <li>2022: Ultrapassou US$ 64.978</li>
          <li>2023: Bitcoin chegou a US$ 44.012</li>
          <li>2024: Bitcoin ultrapassou US$ 107.000</li>
          <li>2025: Bitcoin alcança US$ 123.221</li>
        </ul>

      </div>


      {/* IMAGEM BITCOIN */}
      <div className="rounded-xl overflow-hidden border border-gray-800">
        <Image
          src="/images/bitcoin-history.png"
          alt="Bitcoin historical price chart"
          width={1200}
          height={600}
          className="w-full h-auto"
        />
      </div>

    </div>
  );
}