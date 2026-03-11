
// src/app/EcoinBusinessPresentation/page.tsx
"use client"; 

import { useState, useEffect, } from "react";
import { motion } from "framer-motion";
import AskAIAudioEngine from "@/components/AskAIAudioEngine";
import DocumentVoicePlayer from "@/components/DocumentVoicePlayer";
import PremiumDocumentVoice from "@/components/PremiumDocumentVoice";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import MyComponentUsingSearchParams from "./MyComponentUsingSearchParams";
import QueryParamReader from "@/components/QueryParamReader";



function PresentationContent() {
  const searchParams = useSearchParams();
    const value = searchParams.get("param");


    const [param, setParam] = useState<string | null>(null);

  // Lê query param só client-side
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    setParam(searchParams.get("param"));
  }, []);

  const handlePrint = () => {
    if (typeof window !== "undefined") window.print();
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <>
      {/* SECTION 1–4 — INTRODUÇÃO E VISÃO GERAL */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        className="relative min-h-screen w-full overflow-hidden text-gray-300 pt-32 pb-24 px-6"
      >
        {/* 🌌 FUNDO ESTILO IMAGEM */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-[#f0e6cc]/10 via-[#001F2F]/80 to-black opacity-90" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(212,175,55,0.15),transparent_70%)] blur-3xl" />
          <div
      className="absolute inset-0 bg-[url('/images/capa-bg.jpg')] bg-cover bg-center opacity-35"
      aria-hidden="true"
    />
        </div>
        <div className="max-w-5xl mx-auto text-center space-y-16">

          {/* SECTION 1 — INTRO */}
          <motion.header variants={fadeUp} className="space-y-6">
            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl font-extrabold text-[#D4AF37] drop-shadow-[0_0_20px_rgba(212,175,55,0.5)]"
            >
              EDENKINGDOM COIN (E-COIN)
            </motion.h1>

           <PremiumDocumentVoice />

            <motion.p
              variants={fadeUp}
              className="text-lg sm:text-xl text-white/90 font-medium tracking-wide"
            >
              A Moeda Corporativa da Nova Era Econômica Global —{" "}
              <span className="text-[#D4AF37]">
                a era da economia da informação.
              </span>
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-lg sm:text-3xl text-white/90 font-bold mb-4 tracking-wide"
            >
              <span className="text-[#D4AF37]">
                E-Coin Business Presentation — Apresentação oficial da moeda
                corporativa (E-Coin)
              </span>
            </motion.p>

            <motion.div variants={fadeUp} className="pt-4">
              <button
                onClick={handlePrint}
                className="bg-[#D4AF37] text-black font-semibold py-4 px-8 rounded-xl shadow-lg hover:scale-105 transition-all"
              >
                ⬇ Baixar / Imprimir E-Coin Business Presentation
              </button>
{/* Componente que lê query param */}
      <QueryParamReader />
              <AskAIAudioEngine />
              <Suspense fallback={<div>Loading...</div>}>
      <MyComponentUsingSearchParams />
    </Suspense>
              {/* Mostrar valor do search param */}
    {value && (
      <div className="text-gray-300 text-sm mb-2 text-center">
        Param recebido: {value}
      </div>
    )}

{/* Mostrar param */}
        {param && <div className="text-gray-300 text-sm mt-2">Param recebido: {param}</div>}
            </motion.div>
          </motion.header>

          {/* SECTION 2 — VISÃO */}
          <motion.div
            variants={fadeUp}
            className="bg-[#0D0D0D]/70 border border-[#D4AF37]/20 rounded-3xl shadow-[0_0_25px_rgba(212,175,55,0.15)] p-8 sm:p-10 text-left"
          >
            <h2 className="text-2xl sm:text-3xl text-[#D4AF37] font-bold mb-4">
              🌍 Visão Corporativa
            </h2>
            <p className="text-gray-300 leading-relaxed">
              A <span className="text-[#D4AF37] font-semibold">E-Coin</span>{" "}
              representa o início da economia inteligente da{" "}
              <span className="text-[#D4AF37]">EdenKingDom Corporation</span>.
              Mais do que uma criptomoeda, ela é o motor financeiro de todo o
              ecossistema, conectando pagamentos, staking, marketplace, serviços
              corporativos e governança descentralizada em uma rede unificada e
              transparente.
            </p>
          </motion.div>

          {/* SECTION 3 — UTILIDADE */}
          <motion.div
            variants={fadeUp}
            className="bg-[#0D0D0D]/70 border border-[#D4AF37]/20 rounded-3xl shadow-[0_0_25px_rgba(212,175,55,0.15)] p-8 sm:p-10 text-left"
          >
            <h2 className="text-2xl sm:text-3xl text-[#D4AF37] font-bold mb-4">
              💠 Utilidade & Valor
            </h2>
            <ul className="list-disc list-inside space-y-3 text-gray-300 leading-relaxed">
              <li>Pagamentos dentro do ecossistema corporativo EdenKingDom;</li>
              <li>
                Staking automatizado (temporário - durante 6 depois passamos para buy-back stream cashflow on chain) e painel Web3
                E-Coin Convert exclusivo da corporacao stilo binance convert panel;
              </li>
              <li>
                Conversão híbrida fiat-cripto através do sistema E-Pay e
                E-Exchange (EFTE);
              </li>
              <li>
                Integração total com PancakeSwap, EFTE, E-Coin Corporate Convert (E-Swap) e
                liquidez institucional;
              </li>
              <li>
                Governança baseada em utilidade e participação real da
                comunidade.
              </li>
            </ul>
          </motion.div>

          {/* SECTION 4 — ESTRATÉGIA */}
          <motion.div
            variants={fadeUp}
            className="bg-[#0D0D0D]/70 border border-[#D4AF37]/20 rounded-3xl shadow-[0_0_25px_rgba(212,175,55,0.15)] p-8 sm:p-10 text-left"
          >
            <h2 className="text-2xl sm:text-3xl text-[#D4AF37] font-bold mb-4">
              🚀 Estratégia de Expansão
            </h2>
            <p className="text-gray-300 leading-relaxed">
              A apresentação da E-Coin define as etapas de integração global e
              expansão institucional. O objetivo é consolidar a credibilidade da
              EdenKingDom através de listagens DEX, CEX, E-Exchange (EFTE) e E-Coin Convertor (E-Swap),
              liquidez programática, estabilidade de valor e transparência total
              no ecossistema corporativo.
            </p>
          </motion.div>
        </div>
      </motion.section>

{/* SECTION 5 — ÍNDICE GERAL */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-20"
>
  {/* 🌄 Fundo inspirado na imagem */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1205]/90 via-[#000]/95 to-[#0a0a0a]/100" />
          <div
            className="absolute inset-0 bg-[url('/images/index-bg.jpg')] bg-cover bg-center opacity-25"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/10 via-transparent to-transparent blur-3xl" />
        </div>


  {/* Conteúdo do índice */}
  <div className="max-w-5xl mx-auto text-left text-gray-200 space-y-8">
    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#D4AF37] mb-8 text-center">
      📘 ÍNDICE GERAL – E-COIN BUSINESS PRESENTATION{" "}
      <span className="text-white text-xl sm:text-2xl block">
        (VERSÃO 1)
      </span>
    </h2>

    <p className="text-sm sm:text-base text-gray-400 italic leading-relaxed mb-6">
      Note: este índice não é real, apenas contextual e sem referências reais às
      páginas dentro dos slides de apresentação, por não ser um documento
      digitado em Microsoft Word ou Office que gera o índice automático, mas sim
      direto do Canva.
    </p>

    {/* CAPA E INTRODUÇÃO */}
    <div className="space-y-2">
      <h3 className="text-xl sm:text-2xl font-semibold text-[#D4AF37]">
        CAPA E INTRODUÇÃO
      </h3>
      <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base leading-relaxed">
        <li>
          Capa Institucional – A Moeda Corporativa da Nova Era Econômica Global
        </li>
        <li>Sumário Executivo</li>
        <li>
          Apresentação Institucional – EdenKingDom Corporation & E-Coin Vision
        </li>
        <li>
          Frase-chave:{" "}
          <span className="italic text-[#D4AF37]">
            “Construída desde o Gênesis, projetada para a Eternidade.”
          </span>
        </li>
      </ul>
    </div>

    {/* PARTE I */}
    <div className="space-y-2">
      <h3 className="text-xl sm:text-2xl font-semibold text-[#D4AF37] mt-8">
        PARTE I – A HISTÓRIA DO DINHEIRO E A CHEGADA DA E-COIN{" "}
        <span className="text-sm text-gray-400">(p. 5 – 22)</span>
      </h3>
      <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base leading-relaxed space-y-1">
        <li>💰 A Evolução do Dinheiro — Da Troca Direta à Era Digital</li>
        <li>🌾 As Origens – Escambo e Mercadorias-Moeda</li>
        <li>⚖ As Primeiras Moedas Metálicas</li>
        <li>📜 O Papel como Moeda</li>
        <li>🏦 O Surgimento dos Bancos</li>
        <li>🪙 O Padrão-Ouro</li>
        <li>💳 A Era dos Cartões e Pagamentos Eletrónicos</li>
        <li>🌐 O Dinheiro Eletrónico e as Carteiras Digitais</li>
        <li>🚀 2009 – A Revolução das Criptomoedas</li>
        <li>👑 2025 – EdenKingDom Coin (E-Coin): A Moeda Corporativa da Nova Era</li>
        <li>🌍 Conclusão – Do Escambo à Economia Digital</li>
      </ul>
    </div>

    {/* PARTE II */}
    <div className="space-y-2">
      <h3 className="text-xl sm:text-2xl font-semibold text-[#D4AF37] mt-8">
        PARTE II – MOEDAS FORTES E COMPARAÇÃO COM A E-COIN{" "}
        <span className="text-sm text-gray-400">(p. 23 – 50)</span>
      </h3>
      <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base leading-relaxed space-y-1">
        <li>🌍 As Seis Faces do Poder Financeiro Mundial</li>
        <li>💎 Bitcoin (BTC)</li>
        <li>👑 E-Coin (EdenKingDom Coin)</li>
        <li>🇰🇼 Dinar Kuwaitiano (KWD)</li>
        <li>🇲🇿 Metical Moçambicano (MZN)</li>
        <li>🇺🇸 Dólar Americano (USD)</li>
        <li>🇻🇪 Bolívar Venezuelano (VES)</li>
        <li>💡 Reflexão Econômica: “Sem Estrutura, Nenhuma Moeda Sobrevive.”</li>
        <li>📊 Tabela Comparativa das Seis Moedas (2025)</li>
        <li>💠 Destaque Especial: Singularidade Estrutural da E-Coin</li>
        <li>🌟 Conclusão: A Nova Força Monetária</li>
      </ul>
    </div>
  </div>
</motion.section>

{/* SECTION 6 — PARTE III – CASOS HISTÓRICOS GLOBAIS E PERSPECTIVAS */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-20"
>
  {/* 🌄 Fundo inspirado na imagem */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1205]/90 via-[#000]/95 to-[#0a0a0a]/100" />
          <div
            className="absolute inset-0 bg-[url('/images/index-2-bg.jpg')] bg-cover bg-center opacity-25"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/10 via-transparent to-transparent blur-3xl" />
        </div>

  {/* Conteúdo */}
  <div className="max-w-5xl mx-auto text-left text-gray-200 space-y-8">
    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#D4AF37] mb-6 text-center">
      PARTE III – CASOS HISTÓRICOS GLOBAIS E PERSPECTIVAS ESTRATÉGICAS{" "}
      <span className="text-sm text-gray-400 block">(p. 51 – 95)</span>
    </h2>

    {/* Introdução */}
    <div className="space-y-3">
      <h3 className="text-lg sm:text-xl font-semibold text-[#D4AF37]">
        📘 Introdução Geral – Panorama Regulatório e Histórico
      </h3>
      <p className="text-sm sm:text-base leading-relaxed text-gray-300">
        Esta secção analisa o desenvolvimento global das criptomoedas e suas implicações políticas e econômicas para a E-Coin enquanto moeda corporativa de nova geração.
      </p>
    </div>

    {/* Países que Adotaram */}
    <div className="space-y-2">
      <h3 className="text-lg sm:text-xl font-semibold text-[#D4AF37]">
        🏛 Países que Adotaram Criptomoedas Oficialmente
      </h3>
      <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base leading-relaxed">
        <li>1⃣ El Salvador</li>
        <li>2⃣ República Centro-Africana</li>
        <li>3⃣ Ilhas Marshall</li>
      </ul>
    </div>

    {/* Países Regulados */}
    <div className="space-y-2">
      <h3 className="text-lg sm:text-xl font-semibold text-[#D4AF37]">
        🌐 Países com Criptomoedas Legalizadas ou Reguladas Parcialmente (2025)
      </h3>
      <p className="text-sm sm:text-base text-gray-300">
        🌏 Ásia | 🌍 Europa | 🌎 Américas | 🌍 África | 🌊 Oceânia
      </p>
    </div>

    {/* Casos Regionais */}
    <div className="space-y-1 text-sm sm:text-base leading-relaxed text-gray-300">
      <p>🇻🇪 Venezuela – Colapso e Hiperinflação</p>
      <p>🇳🇬 Nigéria – Fintech e Inclusão Financeira P2P</p>
      <p>🇹🇷 Turquia – Proteção Contra Inflação</p>
      <p>🇰🇪 Quénia – Integração Cripto + Mobile Money</p>
      <p>🇿🇦 África do Sul – Regulação e Licenças Digitais</p>
    </div>

    {/* Moçambique */}
    <div className="space-y-2">
      <h3 className="text-lg sm:text-xl font-semibold text-[#D4AF37] mt-6">
        🇲🇿 Relatório Personalizado para Moçambique
      </h3>
      <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base leading-relaxed space-y-1">
        <li>Contexto Atual</li>
        <li>Oportunidades para a E-Coin</li>
        <li>Riscos & Pontos de Atenção</li>
        <li>Roadmap de Implementação</li>
        <li>Resumo Executivo</li>
      </ul>
    </div>
  </div>
</motion.section>

{/* SECTION 8 — PARTE IV – E-COIN | ESTRUTURA TÉCNICA E FINANCEIRA */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-20"
>
  {/* 🌄 Fundo inspirado na imagem */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1205]/90 via-[#000]/95 to-[#0a0a0a]/100" />
          <div
            className="absolute inset-0 bg-[url('/images/index-3-bg.jpg')] bg-cover bg-center opacity-25"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/10 via-transparent to-transparent blur-3xl" />
        </div>

  {/* Conteúdo */}
  <div className="max-w-5xl mx-auto text-left text-gray-200 space-y-8">
    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#D4AF37] mb-6 text-center">
      PARTE IV – E-COIN | ESTRUTURA TÉCNICA E FINANCEIRA{" "}
      <span className="text-sm text-gray-400 block">(p. 96 – 152)</span>
    </h2>

    <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base leading-relaxed space-y-2">
      <li>👑 E-Coin — EdenKingDom Corporation (África / Internacional)</li>
      <li>🟨 Convite ao Novo Marco Histórico</li>
      <li>🟦 Reflexão e Oportunidade</li>
      <li>🌍 Um Novo Capítulo na História das Criptomoedas</li>
      <li>🪙 Chegou a Vez da EdenKingDom Coin (E-Coin)</li>
      <li>🚀 O Chamado para a Nova Era da Economia da Informação</li>
      <li>💰 A Fundação Financeira da EdenKingDom Corporation</li>
      <li>⚙ Controle de Distribuição e Fornecimento</li>
      <li>⚖ Diferenciais da E-Coin</li>
      <li>🔐 Segurança e Transparência</li>
      <li>🚀 Expansão e Listagem Global</li>
      <li>💼 Benefícios para Titulares e Investidores</li>
      <li>🔢 Modelo de Staking – Pagamentos dos investidores em staking (Stakers & E-Coiners)</li>
      <li>💎 Origem dos Fundos (Taxas pagas no Conversor & Stake Claimers)</li>
      <li>📊 Earnings Distribution – instantâneo - Cashflow on Chain</li>
      <li>🔄 Variações do APR (Annual Percentage Rate)</li>
      <li>💳 Retirada e Integração com Pré-Venda</li>
      <li>📈 Sem Faixas de APR Diário – Exemplos e Cenários</li>
      <li>🧾 Transparência Pública – Nada Escondido</li>
      <li>🧮 Exemplo Numérico Completo – Cálculo instantâneo do Reward Pool</li>
      <li>📜 Resumo Geral – Sustentabilidade e Conclusão</li>
    </ul>
  </div>
</motion.section>

{/* SECTION 9 — PARTE V – SISTEMAS INTEGRADOS E EXPANSÃO CORPORATIVA */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-20"
>
  {/* 🌄 Fundo inspirado na imagem */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1205]/90 via-[#000]/95 to-[#0a0a0a]/100" />
          <div
            className="absolute inset-0 bg-[url('/images/index-4-bg.jpg')] bg-cover bg-center opacity-25"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/10 via-transparent to-transparent blur-3xl" />
        </div>

  {/* Conteúdo */}
  <div className="max-w-5xl mx-auto text-left text-gray-200 space-y-8">
    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#D4AF37] mb-6 text-center">
      PARTE V – SISTEMAS INTEGRADOS E EXPANSÃO CORPORATIVA{" "}
      <span className="text-sm text-gray-400 block">(p. 153 – 185)</span>
    </h2>

    <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base leading-relaxed space-y-2">
      <li>👥 Liderança de Comunidades e Sistema de Referência</li>
      <li>📊 Distribuição de Receitas do Pré-Sale</li>
      <li>
        🌐 Sistema de Bônus e Níveis de Recompensas (7 níveis + 2 níveis staking)
      </li>
      <li>🧭 How to Start Your E-Coin Business (Guia Passo a Passo)</li>
      <ul className="ml-6 list-disc list-inside text-gray-400 space-y-1">
        <li>Criar Wallet DEX</li>
        <li>Conectar à Plataforma Oficial</li>
        <li>Comprar E-Coin na Pré-Venda</li>
        <li>Ativar Staking & Receber Recompensas</li>
        <li>Auto-Claim / Auto-Compounding</li>
        <li>Usar E-Coin em Serviços e Marketplace</li>
      </ul>
      <li>💵 EdenKingDom Buy Crypto (EBC) – Plataforma OTC USDT ↔ e-Mola</li>
      <li>🌟 Sistema de Referência no EBC</li>
      <li>💬 Mensagem Final – A Revolução Financeira e Social</li>
    </ul>

    <h3 className="text-xl sm:text-2xl font-semibold text-[#D4AF37] mt-8">
      PARTE VI – MÓDULO INTERNO E-JOB{" "}
      <span className="text-sm text-gray-400">(p. 186 – 206)</span>
    </h3>

    <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base leading-relaxed space-y-2">
      <li>👑 EdenKingDom Job (E-JOB) – Sistema de Empregos e Pagamentos</li>
      <li>📱 Aplicativo Corporativo Global</li>
      <li>🎯 Missão, Visão e Objetivos</li>
      <li>💡 Automação de Contratação e Pagamentos</li>
      <li>🌍 Impacto Econômico e Social</li>
      <li>📈 Integração com E-Coin | E-Pay | Painel de Salários</li>
      <li>🧭 Conclusão Final – Emprego, Dignidade e Crescimento</li>
    </ul>

    <h3 className="text-xl sm:text-2xl font-semibold text-[#D4AF37] mt-8">
      APÊNDICES E ANEXOS{" "}
      <span className="text-sm text-gray-400">(p. 207 – 216)</span>
    </h3>

    <ul className="list-disc list-inside text-gray-300 text-sm sm:text-base leading-relaxed space-y-2">
      <li>📘 Glossário Técnico E-Coin</li>
      <li>📊 Tabela de Conversão e Liquidez</li>
      <li>🔒 Endereço Oficial do Contrato E-Coin (BSC Scan)</li>
      <li>🌐 Canais Oficiais de Contato (E-Mail, Website, Telegram)</li>
      <li>🏛 Referências Internacionais e Fontes Acadêmicas</li>
      <li>💠 Notas Corporativas EdenKingDom Corporation</li>
      <li>✅ Total estimado: 206 páginas</li>
    </ul>
  </div>
</motion.section>

      {/* SECTION 10 — A EVOLUÇÃO DO DINHEIRO */}
      <motion.section
        variants={fadeUp}
        className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
      >
        {/* 🌄 Fundo inspirado na imagem */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1205]/90 via-[#000]/95 to-[#0a0a0a]/100" />
          <div
            className="absolute inset-0 bg-[url('/images/evolution-bg.jpg')] bg-cover bg-center opacity-25"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/10 via-transparent to-transparent blur-3xl" />
        </div>

        {/* Conteúdo principal */}
        <div className="max-w-5xl mx-auto text-left text-gray-200 space-y-8">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#D4AF37] mb-6 text-center">
            💰 A Evolução do Dinheiro —{" "}
            <span className="text-white">
              Da Troca Direta à Era da Moeda EdenKingDom (E-Coin)
            </span>
          </h2>

          {/* 1️⃣ Troca Direta */}
          <div className="space-y-3">
            <h3 className="text-lg sm:text-xl font-semibold text-[#D4AF37]">
              🌿 1. As Origens — Troca Direta (Escambo) – 6.000 a.C.
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-gray-300">
              Nos estágios iniciais da civilização, os humanos realizavam trocas
              diretas de bens e serviços: animais, plantações, ferramentas e
              tecidos. Esse sistema, conhecido como{" "}
              <strong>escambo</strong>, exigia que ambas as partes desejassem
              exatamente o que a outra oferecia — tornando o comércio lento e
              ineficiente.
            </p>
            <p className="text-sm sm:text-base leading-relaxed text-gray-400">
              Além disso, a posse de bens como animais e terras era usada como
              forma de reserva de valor, embora ainda sem um meio de troca
              universal.
            </p>
            <p className="text-xs text-gray-500">👉 (Fonte: Credit Karma)</p>
          </div>

          {/* 2️⃣ Mercadorias-Moeda */}
          <div className="space-y-3">
            <h3 className="text-lg sm:text-xl font-semibold text-[#D4AF37]">
              🪙 2. Mercadorias-Moeda (Commodity Money) – 3.000 a.C.
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-gray-300">
              Com o tempo, surgiram formas intermediárias: conchas, sal, grãos e
              peles. Esses bens tinham valor porque eram úteis ou raros. Logo,
              os metais — ouro, prata e bronze — tornaram-se preferidos pela
              durabilidade, divisibilidade e aceitação social.
            </p>
            <p className="text-xs text-gray-500">👉 (Fonte: Medium)</p>
          </div>

          {/* 3️⃣ Moedas Metálicas */}
          <div className="space-y-3">
            <h3 className="text-lg sm:text-xl font-semibold text-[#D4AF37]">
              ⚖️ 3. As Primeiras Moedas Metálicas – 630 a.C.
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-gray-300">
              No Reino da Lídia (atual Turquia) e na China, foram cunhadas as
              primeiras moedas padronizadas. Elas trouxeram facilidade de
              transporte, autenticação e confiança pública — marcando o
              nascimento do dinheiro como o conhecemos hoje.
            </p>
            <p className="text-xs text-gray-500">👉 (Fonte: Investopedia)</p>
          </div>
        </div>
      </motion.section>

{/* SECTION 6 — O PAPEL COMO MOEDA ATÉ A ERA DOS CARTÕES */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌄 Fundo inspirado na imagem */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1205]/90 via-[#000]/95 to-[#0a0a0a]/100" />
          <div
            className="absolute inset-0 bg-[url('/images/evolution-part2-bg.jpg')] bg-cover bg-center opacity-25"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/10 via-transparent to-transparent blur-3xl" />
        </div>

  {/* 📜 Conteúdo principal */}
  <div className="max-w-5xl mx-auto text-left text-gray-200 space-y-8">
    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#D4AF37] mb-6 text-center">
      PARTE II — DO PAPEL COMO MOEDA À ERA DOS CARTÕES (1020 d.C – 1966)
    </h2>

    <div className="space-y-6 text-gray-300 text-sm sm:text-base leading-relaxed">
      <p>
        <span className="text-[#D4AF37] font-semibold">📜 4. O Papel como Moeda – 1020 d.C.</span><br />
        A China foi pioneira na introdução das notas de papel, que substituíram as moedas nas transações de grande valor.
        As notas facilitavam o comércio de longa distância e reduziram a dependência de metais preciosos.<br />
        👉 <span className="italic text-gray-400">(Fonte: Credit Karma)</span>
      </p>

      <p>
        <span className="text-[#D4AF37] font-semibold">🏦 5. O Surgimento dos Bancos – 1100–1200 d.C.</span><br />
        Durante a Idade Média, nasceram os primeiros bancos e sistemas de crédito na Europa.
        Eles guardavam metais preciosos, registravam depósitos e emprestavam valores.
        Foi o início da confiança institucional e do conceito de moeda fiduciária — baseada não no valor intrínseco,
        mas na confiança no emissor.<br />
        👉 <span className="italic text-gray-400">(Fonte: Investopedia)</span>
      </p>

      <p>
        <span className="text-[#D4AF37] font-semibold">🪙 6. O Padrão-Ouro – 1860</span><br />
        A Europa adotou o <span className="font-semibold">Gold Standard</span>, que ligava o valor das moedas às reservas de ouro.
        O sistema garantiu estabilidade e confiança internacional durante o século XIX.
        Contudo, também limitou a flexibilidade dos governos em tempos de crise.
      </p>

      <p>
        <span className="text-[#D4AF37] font-semibold">💳 7. A Era dos Cartões e Pagamentos Eletrónicos – 1950s – 1966</span><br />
        Nos Estados Unidos, surgem os primeiros cartões de crédito e débito.
        Com eles, o dinheiro físico começou a perder protagonismo.
        As transações tornaram-se mais rápidas e seguras, dando origem à era dos pagamentos digitais
        e transferências bancárias globais.<br />
        👉 <span className="italic text-gray-400">(Fonte: Credit Karma)</span>
      </p>
    </div>
  </div>
</motion.section>

{/* SECTION 7 — O DINHEIRO ELETRÔNICO, CRIPTOMOEDAS E E-COIN */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌄 Fundo inspirado na imagem */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#1a1205]/90 via-[#000]/95 to-[#0a0a0a]/100" />
    <div
      className="absolute inset-0 bg-[url('/images/evolution-part3-bg.jpg')] bg-cover bg-center opacity-25"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/10 via-transparent to-transparent blur-3xl" />
  </div>

  {/* 📜 Conteúdo principal */}
  <div className="max-w-5xl mx-auto text-left text-gray-200 space-y-10">
    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#D4AF37] text-center mb-8">
      PARTE III — DO DINHEIRO ELETRÔNICO À E-COIN (SÉCULO XXI – 2025)
    </h2>

    {/* 8️⃣ Dinheiro Eletrônico */}
    <div className="space-y-3">
      <h3 className="text-lg sm:text-xl font-semibold text-[#D4AF37]">
        🌐 8. O Dinheiro Eletrônico e as Carteiras Digitais – Século XXI
      </h3>
      <p className="text-sm sm:text-base leading-relaxed text-gray-300">
        Com o avanço da internet e dos dispositivos móveis, o dinheiro transformou-se em bits e dados.
        Surgiram carteiras digitais (<em>wallets</em>), pagamentos instantâneos e o conceito de uma sociedade sem dinheiro físico.
        Governos e bancos criaram as <strong>CBDCs</strong> (Moedas Digitais de Bancos Centrais) e <em>stablecoins</em> lastreadas em ativos reais.
      </p>
      <p className="text-xs text-gray-500">👉 (Fonte: Wikipedia)</p>
    </div>

    {/* 9️⃣ Revolução das Criptomoedas */}
    <div className="space-y-3">
      <h3 className="text-lg sm:text-xl font-semibold text-[#D4AF37]">
        🚀 9. 2009 – A Revolução das Criptomoedas
      </h3>
      <p className="text-sm sm:text-base leading-relaxed text-gray-300">
        O nascimento do <strong>Bitcoin</strong> marcou a maior ruptura da história monetária.
        Uma moeda descentralizada, transparente e imutável, operando sem bancos ou governos, movida por <em>blockchain</em>.
        O Bitcoin provou que é possível confiar no código em vez de instituições.
      </p>
      <p className="text-xs text-gray-500">👉 (Fonte: Wise)</p>
    </div>

    {/* 🔟 E-Coin */}
    <div className="space-y-3">
      <h3 className="text-lg sm:text-xl font-semibold text-[#D4AF37]">
        👑 10. 2025 — EdenKingDom Coin (E-Coin): A Moeda Corporativa da Nova Era
      </h3>
      <p className="text-sm sm:text-base leading-relaxed text-gray-300">
        A história entra agora em uma nova etapa: <strong>a Era da E-Coin</strong>.<br />
        Lançada em 2025 pela <span className="text-[#D4AF37] font-semibold">EdenKingDom Corporation</span>,
        a E-Coin simboliza a fusão entre tecnologia, economia e propósito social.
      </p>

      <ul className="list-disc list-inside space-y-2 text-gray-300 leading-relaxed ml-4">
        <li>
          💠 <strong>Moeda corporativa global</strong> com base real em múltiplos setores
          (educação, saúde, energia, construção, transporte e marketplace).
        </li>
        <li>🛡️ 100 % auditável <em>on-chain</em>, sem manipulação humana.</li>
        <li>💰 <strong>Staking diário automático</strong>, recompensas proporcionais e transparentes.</li>
        <li>🌐 Liquidez real sustentada por atividades produtivas.</li>
        <li>
          ♻️ Estabilidade sustentável, combinando <em>blockchain</em>, governança e utilidade prática.
        </li>
      </ul>

      <p className="text-sm sm:text-base italic text-gray-400">
        “A E-Coin não é apenas uma moeda — é o elo entre o valor real e o valor digital.”
        <br />
        <span className="text-[#D4AF37]">EdenKingDom Corporation</span> – Construída desde o Gênesis, projetada para a Eternidade.
      </p>
    </div>
  </div>
</motion.section>

{/* SECTION 8 — CONCLUSÃO DA EVOLUÇÃO DO DINHEIRO */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-20 sm:py-28 px-6 rounded-3xl mt-16 text-center"
>
  {/* 🌄 Fundo inspirado na imagem */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#1a1205]/90 via-[#000]/95 to-[#0a0a0a]/100" />
    <div
      className="absolute inset-0 bg-[url('/images/evolution-conclusion-bg.jpg')] bg-cover bg-center opacity-25"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/10 via-transparent to-transparent blur-3xl" />
  </div>

  {/* 📜 Conteúdo principal */}
  <div className="max-w-4xl mx-auto text-gray-200 space-y-8">
    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#D4AF37] mb-6">
      🌍 Conclusão — Do Escambo à Economia Digital
    </h2>

    <p className="text-lg sm:text-xl leading-relaxed text-white/90 font-light">
      A trajetória do dinheiro é uma jornada de confiança, inovação e transformação:
    </p>

    <div className="text-base sm:text-lg leading-relaxed text-gray-300 space-y-2">
      <p>💱 Do escambo e das terras ao ouro e papel.</p>
      <p>💰 Das notas aos cartões.</p>
      <p>🌐 Do eletrônico ao blockchain.</p>
      <p>👑 E, finalmente, à <span className="text-[#D4AF37] font-semibold">E-Coin</span>, que une valor real, utilidade corporativa e transparência global.</p>
    </div>

    {/* ✨ Frase final */}
    <h3 className="text-xl sm:text-2xl mt-10 font-bold text-[#D4AF37] italic">
      “E-Coin — A nova era da economia do Éden.”
    </h3>

    {/* Linha decorativa */}
    <div className="h-px w-2/2 mx-auto bg-gradient-to-r from-transparent via-[#D4AF37]/150 to-transparent mt-8" />
  </div>
</motion.section>

{/* SECTION 9 — MOEDAS FORTES E COMPARAÇÃO GLOBAL */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌄 Fundo inspirado na imagem */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#1a1205]/90 via-[#000]/95 to-[#0a0a0a]/100" />
    <div
      className="absolute inset-0 bg-[url('/images/global-currencies-bg.jpg')] bg-cover bg-center opacity-25"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/10 via-transparent to-transparent blur-3xl" />
  </div>

  {/* 📜 Conteúdo principal */}
  <div className="max-w-5xl mx-auto text-left text-gray-200 space-y-10">
    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#D4AF37] text-center mb-8">
      🪙 MOEDAS FORTES A NÍVEL GLOBAL E COMPARAÇÃO COM A E-COIN
    </h2>

    <p className="text-base sm:text-lg leading-relaxed text-gray-300 text-center">
      🌍 <strong>As Seis Faces do Poder e da Fragilidade Financeira Mundial</strong><br />
      O valor de uma moeda revela o poder, a confiança e a sustentabilidade de uma nação ou corporação.
      Nesta análise, comparamos seis moedas que representam os extremos da economia global moderna:
    </p>

    {/* Lista das seis moedas */}
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-300 text-sm sm:text-base leading-relaxed">
      <li>💎 <strong>Bitcoin (BTC)</strong> — A revolução digital descentralizada.</li>
      <li>👑 <strong>E-Coin (EdenKingDom Coin)</strong> — A moeda corporativa da nova era.</li>
      <li>🇴🇰 <strong>Dinar Kuwaitiano (KWD)</strong> — Símbolo da estabilidade e do poder real.</li>
      <li>🇲🇿 <strong>Metical Moçambicano (MZN)</strong> — Esperança e resiliência africana.</li>
      <li>🇺🇸 <strong>Dólar Americano (USD)</strong> — O padrão financeiro global.</li>
      <li>🇻🇪 <strong>Bolívar Venezuelano (VES)</strong> — O símbolo do colapso econômico.</li>
    </ul>

    {/* Análise detalhada do Bitcoin */}
    <div className="space-y-3 mt-10">
      <h3 className="text-lg sm:text-xl font-semibold text-[#D4AF37]">
        💎 Bitcoin (BTC): O Pioneiro da Liberdade Financeira
      </h3>
      <p className="text-sm sm:text-base leading-relaxed text-gray-300">
        O <strong>Bitcoin</strong> é a revolução digital descentralizada que transformou o conceito de dinheiro.
        Criado em 2009, é uma criptomoeda livre de bancos e governos, baseada em um código público e auditável.
        Sua escassez — limitada a 21 milhões de unidades — cria um valor intrínseco de confiança.
      </p>
      <ul className="text-sm sm:text-base text-gray-400 space-y-1">
        <li>📅 Ano de criação: 2009</li>
        <li>🔗 Tipo: Criptomoeda descentralizada</li>
        <li>💲 Preço atual do momento de produção deste Documento (2025): <strong>US$ 113,700</strong></li> 
      </ul>
      <p className="italic text-gray-400">
        “O Bitcoin é o ouro digital — um manifesto de liberdade financeira.”
      </p>
      <p className="text-gray-400 text-sm">
        Apesar da volatilidade, é a referência universal para todas as criptomoedas modernas.
      </p>
    </div>
  </div>
</motion.section>

{/* SECTION 11 — E-COIN: A MOEDA CORPORATIVA DA NOVA ERA */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌄 Fundo visual padrão */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#1a1205]/90 via-[#000]/95 to-[#0a0a0a]/100" />
    <div
      className="absolute inset-0 bg-[url('/images/ecoin-corporate-era-bg.jpg')] bg-cover bg-center opacity-25"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/10 via-transparent to-transparent blur-3xl" />
  </div>

  {/* 📜 Conteúdo */}
  <div className="max-w-5xl mx-auto text-left text-gray-200 space-y-10">
    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#D4AF37] text-center mb-8">
      👑 EdenKingDom Coin (E-Coin): A Moeda Corporativa da Nova Era da Economia de Informação
    </h2>

    {/* Dados básicos */}
    <div className="space-y-2 text-gray-300">
      <ul className="text-sm sm:text-base text-gray-400 space-y-1">
        <li>📅 <strong>Ano de criação:</strong> 2025</li>
        <li>🔗 <strong>Tipo:</strong> Moeda corporativa digital com supply fixo</li>
        <li>💎 <strong>Oferta total (Max Supply):</strong> 100 % emitida na gênese (sem futuras emissões)</li>
        <li>💲 <strong>Preço atual:</strong> US$ 0,30</li>
      </ul>

      <p className="leading-relaxed">
        A <strong>E-Coin</strong> é uma moeda corporativa descentralizada da 
        <span className="text-[#D4AF37] font-semibold"> EdenKingDom Corporation </span>
        com emissão única e definitiva. Diferente das moedas fiduciárias ou tokens inflacionários, 
        a E-Coin nasceu completa — o seu total de unidades foi emitido apenas uma vez, 
        garantindo escassez perpétua, estabilidade e valorização progressiva.
      </p>
    </div>

    {/* 💠 Características Centrais */}
    <div className="space-y-4 mt-6">
      <h3 className="text-lg sm:text-xl font-semibold text-[#D4AF37]">
        💠 Características Centrais
      </h3>
      <ul className="list-disc list-inside space-y-2 text-gray-300 leading-relaxed ml-4">
        <li>🔒 <strong>Supply fixo e imutável</strong> — nenhuma nova emissão será possível;</li>
        <li>💰 <strong>Lastro real</strong> — sustentada pelas receitas multissetoriais da EdenKingDom Corporation;</li>
        <li>💹 <strong>Crescimento orgânico</strong> — o valor da moeda se eleva conforme o ecossistema corporativo cresce;</li>
        <li>⚖️ <strong>Transparência total</strong> — verificação pública on-chain;</li>
        <li>🕊️ <strong>Independência financeira</strong> — sem controle político nem especulativo.</li>
      </ul>

      <p className="italic text-gray-400">
        “A E-Coin é uma criação única — uma moeda com origem e propósitos eternos, 
        não inflacionária, inalterável e corporativamente legítima.”
      </p>

      <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
        Criada pela <span className="text-[#D4AF37] font-semibold">EdenKingDom Corporation</span>, 
        inspirada no Bitcoin pela sua característica imutável, 
        a E-Coin representa a fusão entre o valor real e o digital, 
        sustentada por receitas corporativas multissetoriais 
        (educação, energia, construção, saúde, tecnologia e transportes).
      </p>
    </div>

    {/* 💠 Vantagens */}
    <div className="space-y-3 mt-6">
      <h3 className="text-lg sm:text-xl font-semibold text-[#D4AF37]">
        💠 Vantagens
      </h3>
      <ul className="list-disc list-inside space-y-2 text-gray-300 leading-relaxed ml-4">
        <li>🌍 Liquidez global auditável;</li>
        <li>💎 Staking automático e recompensas diárias;</li>
        <li>🔍 Transparência total on-chain.</li>
      </ul>

      <p className="italic text-gray-400">
        “A E-Coin é a primeira moeda corporativa global — o elo entre valor real e propósito.”
      </p>
    </div>
  </div>
</motion.section>

{/* SECTION 12 — DINAR, METICAL E DÓLAR */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌄 Fundo visual padrão */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#1a1205]/90 via-[#000]/95 to-[#0a0a0a]/100" />
    <div
      className="absolute inset-0 bg-[url('/images/world-currencies-bg.jpg')] bg-cover bg-center opacity-25"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/10 via-transparent to-transparent blur-3xl" />
  </div>

  {/* 📜 Conteúdo principal */}
  <div className="max-w-5xl mx-auto text-left text-gray-200 space-y-10">
   
    {/* 🇴🇰 Dinar Kuwaitiano */}
    <div className="space-y-3">
      <h3 className="text-lg sm:text-xl font-semibold text-[#D4AF37]">
        🇴🇰 Dinar Kuwaitiano (KWD): O Símbolo da Estabilidade Real
      </h3>
      <ul className="text-sm sm:text-base text-gray-400 space-y-1">
        <li>📅 <strong>Ano de criação:</strong> 1960</li>
        <li>💲 <strong>Valor atual:</strong> US$ 3,25 = 1 dinar</li>
        <li>🏦 <strong>Base de valor:</strong> Petróleo e reservas cambiais</li>
      </ul>
      <p className="text-sm sm:text-base leading-relaxed text-gray-300">
        O <strong>Dinar</strong> é a moeda mais valorizada do mundo, resultado de um modelo econômico sólido e controlado.
        Sua força vem da exportação de petróleo e da disciplina fiscal nacional.
      </p>
      <p className="italic text-gray-400">
        “O Dinar é sinônimo de riqueza verdadeira e estabilidade.”
      </p>
    </div>

    {/* 🇲🇿 Metical Moçambicano */}
    <div className="space-y-3">
      <h3 className="text-lg sm:text-xl font-semibold text-[#D4AF37]">
        🇲🇿 Metical Moçambicano (MZN): O Desafio da Transformação
      </h3>
      <ul className="text-sm sm:text-base text-gray-400 space-y-1">
        <li>📅 <strong>Ano de criação:</strong> 1980</li>
        <li>💲 <strong>Valor atual:</strong> MZN 63.9 = US$ 1</li>
        <li>🏦 <strong>Base de valor:</strong> Economia em desenvolvimento</li>
      </ul>
      <p className="text-sm sm:text-base leading-relaxed text-gray-300">
        O <strong>Metical</strong> representa a luta das economias emergentes. 
        Apesar da inflação e da dependência externa, Moçambique possui recursos naturais e humanos 
        capazes de impulsionar o crescimento e fortalecer a sua soberania financeira.
      </p>
      <p className="italic text-gray-400">
        “O Metical simboliza a esperança africana em busca da soberania financeira.”
      </p>
    </div>

    {/* 🇺🇸 Dólar Americano */}
    <div className="space-y-3">
      <h3 className="text-lg sm:text-xl font-semibold text-[#D4AF37]">
        🇺🇸 Dólar Americano (USD): O Padrão Mundial
      </h3>
      <ul className="text-sm sm:text-base text-gray-400 space-y-1">
        <li>📅 <strong>Ano de criação:</strong> 1792</li>
        <li>🔗 <strong>Tipo:</strong> Moeda fiduciária global</li>
        <li>💪 <strong>Força:</strong> Baseado na maior economia do planeta</li>
      </ul>
      <p className="text-sm sm:text-base leading-relaxed text-gray-300">
        O <strong>Dólar</strong> é o pilar central do comércio internacional, 
        estando presente em mais de 80 % das transações financeiras mundiais. 
        Sua influência molda políticas, investimentos e mercados em escala global.
      </p>
      <p className="italic text-gray-400">
        “O Dólar é o eixo do sistema econômico global.”
      </p>
    </div>
  </div>
</motion.section>

{/* SECTION 13 — BOLÍVAR VENEZUELANO */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌄 Fundo padrão */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#1a1205]/90 via-[#000]/95 to-[#0a0a0a]/100" />
    <div
      className="absolute inset-0 bg-[url('/images/bolivar-collapse-bg.jpg')] bg-cover bg-center opacity-25"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/10 via-transparent to-transparent blur-3xl" />
  </div>

  {/* 📜 Conteúdo */}
  <div className="max-w-5xl mx-auto text-left text-gray-200 space-y-10">
    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#D4AF37] text-center mb-8">
      🇻🇪 Bolívar Venezuelano (VES): A Lição do Colapso Econômico
    </h2>

    <ul className="text-sm sm:text-base text-gray-400 space-y-1">
      <li>📅 <strong>Ano de criação:</strong> 1879 (atual versão, 2018)</li>
      <li>🔗 <strong>Tipo:</strong> Moeda fiduciária nacional</li>
      <li>💲 <strong>Valor atual:</strong> US$ 1 ≈ VES 35 milhões (hiperinflação acumulada)</li>
      <li>🏦 <strong>Base de valor:</strong> Petróleo – economia estatal</li>
      <li>⚠️ <strong>Causas do colapso:</strong> Corrupção, hiperinflação e má gestão econômica</li>
    </ul>

    <p className="text-sm sm:text-base leading-relaxed text-gray-300">
      O <strong>Bolívar Venezuelano</strong> tornou-se um símbolo de como a má governança destrói o valor de uma moeda.  
      A perda de confiança interna e internacional levou o país a um cenário de colapso total.
    </p>

    <p className="italic text-gray-400 text-center">
      “O Bolívar é o lembrete de que sem estrutura, nenhuma moeda sobrevive.”
    </p>

    <p className="text-sm sm:text-base leading-relaxed text-gray-300">
      Essa frase foi escolhida para resumir o verdadeiro motivo do colapso venezuelano — e, ao mesmo tempo, 
      contrasta diretamente com a filosofia da <strong>E-Coin</strong>: construída sobre estrutura, transparência e valor real.
    </p>

    {/* 💔 Significado literal */}
    <div className="space-y-4 mt-6">
      <h3 className="text-lg sm:text-xl font-semibold text-[#D4AF37]">
        💔 O Significado Literal
      </h3>
      <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
        O Bolívar Venezuelano (VES) foi uma das moedas mais fortes da América Latina no século XX, 
        mas desabou por fatores estruturais e políticos:
      </p>
      <ul className="list-disc list-inside space-y-1 text-gray-400 ml-4">
        <li>Falta de diversificação econômica – dependência total do petróleo;</li>
        <li>Má gestão das finanças públicas;</li>
        <li>Impressão descontrolada de dinheiro sem lastro;</li>
        <li>Corrupção estatal e colapso da produção interna;</li>
        <li>Perda de confiança nacional e internacional.</li>
      </ul>

      <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
        Em resumo, não foi apenas inflação — foi a ausência de estrutura econômica sólida. 
        Sem produção, sem credibilidade, sem base real, a moeda virou apenas papel.
      </p>
    </div>
  </div>
</motion.section>

{/* SECTION 14 — REFLEXÃO ECONÔMICA */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌄 Fundo padrão */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#1a1205]/90 via-[#000]/95 to-[#0a0a0a]/100" />
    <div
      className="absolute inset-0 bg-[url('/images/venezuela-reflexao-bg.jpg')] bg-cover bg-center opacity-25"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/10 via-transparent to-transparent blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-5xl mx-auto text-left text-gray-200 space-y-10">
    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#D4AF37] text-center mb-8">
      💡 Reflexão Econômica
    </h2>

    <p className="italic text-gray-400 text-center text-sm sm:text-base">
      “O Bolívar é o lembrete de que sem estrutura, nenhuma moeda sobrevive.  
      Porque o verdadeiro valor não está no papel, mas no sistema que o sustenta.”
    </p>

    <p className="text-sm sm:text-base leading-relaxed text-gray-300">
      O <strong>Bolívar Venezuelano</strong> tornou-se o símbolo mais marcante de como uma nação pode perder o valor da sua própria moeda.  
      A dependência exclusiva do petróleo, a emissão descontrolada e a destruição da confiança pública levaram o país a uma crise sem precedentes,  
      em que o dinheiro perdeu o seu propósito e o povo, o seu poder de compra.
    </p>

    {/* 🧩 Significado Conceitual */}
    <div className="space-y-4 mt-8">
      <h3 className="text-lg sm:text-xl font-semibold text-[#D4AF37]">
        🧩 O Significado Conceitual
      </h3>
      <p className="text-sm sm:text-base leading-relaxed text-gray-300">
        Quando digo <em>“sem estrutura, nenhuma moeda sobrevive”</em>, estou transmitindo que o valor de uma moeda não depende apenas de quanto ela vale em dólares,  
        mas de quão sustentável é o sistema que a sustenta:
      </p>
      <ul className="list-disc list-inside space-y-1 text-gray-400 ml-4">
        <li>O <strong>Bitcoin</strong> sobrevive porque tem estrutura matemática e descentralizada;</li>
        <li>O <strong>Dólar</strong> sobrevive porque tem estrutura institucional e econômica sólida;</li>
        <li>O <strong>Dinar</strong> sobrevive porque tem estrutura baseada em recursos reais (petróleo);</li>
        <li>A <strong>E-Coin</strong> foi criada exatamente para ter estrutura corporativa e multissetorial, evitando os erros que destruíram o Bolívar.</li>
      </ul>
    </div>

    {/* 👑 Significado Filosófico */}
    <div className="space-y-4 mt-8">
      <h3 className="text-lg sm:text-xl font-semibold text-[#D4AF37]">
        👑 O Significado Filosófico
      </h3>
      <p className="text-sm sm:text-base leading-relaxed text-gray-300">
        A frase é também um alerta e uma lição histórica:
      </p>
      <p className="italic text-gray-400">
        “Nenhuma moeda — seja estatal, digital ou corporativa — pode se manter viva sem base, sem propósito e sem gestão transparente.”
      </p>

      <p className="text-sm sm:text-base leading-relaxed text-gray-300">
        É um contraponto direto à fragilidade das moedas criadas sem estratégia, e uma defesa da <strong>E-Coin</strong> como projeto  
        concebido com estrutura desde o Gênesis:
      </p>

      <ul className="list-disc list-inside space-y-1 text-gray-400 ml-4">
        <li>🏦 Lastro real (receitas corporativas e ativos físicos);</li>
        <li>🔗 Transparência blockchain;</li>
        <li>⚙️ Controle inteligente de emissão e circulação;</li>
        <li>🧭 Governança descentralizada, mas organizada.</li>
      </ul>
    </div>
  </div>
</motion.section>

{/* SECTION 15 — COMPARAÇÃO GERAL DAS SEIS MOEDAS */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌄 Fundo padrão */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#1a1205]/90 via-[#000]/95 to-[#0a0a0a]/100" />
    <div
      className="absolute inset-0 bg-[url('/images/global-currencies-comparison-bg.jpg')] bg-cover bg-center opacity-25"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/10 via-transparent to-transparent blur-3xl" />
  </div>

  {/* 📊 Conteúdo principal */}
  <div className="max-w-6xl mx-auto text-center text-gray-200 space-y-10">
    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#D4AF37] mb-10">
      📊 Comparação Geral das Seis Moedas (2025)
    </h2>

    <div className="overflow-x-auto rounded-2xl shadow-lg border border-[#D4AF37]/30">
      <table className="min-w-full text-sm sm:text-base border-collapse">
        <thead className="bg-[#D4AF37]/10 text-[#D4AF37]">
          <tr className="text-left">
            <th className="py-3 px-4">💰 Moeda</th>
            <th className="py-3 px-4">Tipo</th>
            <th className="py-3 px-4">Ano</th>
            <th className="py-3 px-4">Supply / Emissão</th>
            <th className="py-3 px-4">Valor Atual (2025)</th>
            <th className="py-3 px-4">Base de Valor</th>
            <th className="py-3 px-4">Força Principal</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-700/40">
          {/* Bitcoin */}
          <tr className="hover:bg-[#D4AF37]/5 transition">
            <td className="py-3 px-4 font-semibold text-blue-300">💎 Bitcoin (BTC)</td>
            <td className="py-3 px-4">Criptomoeda</td>
            <td className="py-3 px-4">2009</td>
            <td className="py-3 px-4">Fixo – 21 milhões de unidades</td>
            <td className="py-3 px-4">US$ 113 700</td>
            <td className="py-3 px-4">Escassez digital</td>
            <td className="py-3 px-4">Descentralização global</td>
          </tr>

          {/* E-Coin */}
          <tr className="hover:bg-[#D4AF37]/5 transition">
            <td className="py-3 px-4 font-semibold text-yellow-300">👑 E-Coin</td>
            <td className="py-3 px-4">Moeda corporativa digital (Cripto)</td>
            <td className="py-3 px-4">2025</td>
            <td className="py-3 px-4">Fixo – sem futuras emissões</td>
            <td className="py-3 px-4">US$ 0,30</td>
            <td className="py-3 px-4">Receitas corporativas reais</td>
            <td className="py-3 px-4">Escassez + lastro real e Descentralização global</td>
          </tr>

          {/* Dinar */}
          <tr className="hover:bg-[#D4AF37]/5 transition">
            <td className="py-3 px-4 font-semibold text-amber-200">🇰🇼 Dinar Kuwaitiano (KWD)</td>
            <td className="py-3 px-4">Moeda fiduciária</td>
            <td className="py-3 px-4">1960</td>
            <td className="py-3 px-4">Emissão controlada pelo Estado</td>
            <td className="py-3 px-4">US$ 3,25</td>
            <td className="py-3 px-4">Petróleo e reservas cambiais</td>
            <td className="py-3 px-4">Estabilidade macroeconômica</td>
          </tr>

          {/* Metical */}
          <tr className="hover:bg-[#D4AF37]/5 transition">
            <td className="py-3 px-4 font-semibold text-green-300">🇲🇿 Metical (MZN)</td>
            <td className="py-3 px-4">Moeda nacional</td>
            <td className="py-3 px-4">1980</td>
            <td className="py-3 px-4">Emissão dependente do Banco Central</td>
            <td className="py-3 px-4">60 MZN = US$ 1</td>
            <td className="py-3 px-4">Economia emergente</td>
            <td className="py-3 px-4">Potencial de crescimento</td>
          </tr>

          {/* Dólar */}
          <tr className="hover:bg-[#D4AF37]/5 transition">
            <td className="py-3 px-4 font-semibold text-gray-200">🇺🇸 Dólar (USD)</td>
            <td className="py-3 px-4">Moeda global</td>
            <td className="py-3 px-4">1792</td>
            <td className="py-3 px-4">Emissão contínua (fiat)</td>
            <td className="py-3 px-4">Padrão mundial</td>
            <td className="py-3 px-4">Economia dos EUA</td>
            <td className="py-3 px-4">Confiança internacional</td>
          </tr>

          {/* Bolívar */}
          <tr className="hover:bg-[#D4AF37]/5 transition">
            <td className="py-3 px-4 font-semibold text-red-400">🇻🇪 Bolívar (VES)</td>
            <td className="py-3 px-4">Moeda nacional</td>
            <td className="py-3 px-4">2018</td>
            <td className="py-3 px-4">Emissão inflacionária descontrolada</td>
            <td className="py-3 px-4">US$ 1 ≈ VES 35 mi</td>
            <td className="py-3 px-4">Petróleo (colapsado)</td>
            <td className="py-3 px-4">Exemplo de fracasso econômico</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</motion.section>

{/* SECTION 16 — DESTAQUE ESPECIAL E-COIN */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌄 Fundo padrão */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#1a1205]/90 via-[#000]/95 to-[#0a0a0a]/100" />
    <div
      className="absolute inset-0 bg-[url('/images/ecoin-structural-uniqueness-bg.jpg')] bg-cover bg-center opacity-25"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/10 via-transparent to-transparent blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-5xl mx-auto text-left text-gray-200 space-y-10">
    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#D4AF37] text-center mb-8">
      💠 Destaque Especial: A E-Coin e sua Singularidade Estrutural
    </h2>

    {/* 🔒 Emissão Única e Fixa */}
    <div className="space-y-3">
      <h3 className="text-lg sm:text-xl font-semibold text-[#D4AF37]">🔒 Emissão Única e Fixa</h3>
      <p className="text-sm sm:text-base leading-relaxed text-gray-300">
        A <strong>E-Coin</strong> é uma moeda de supply permanente, emitida apenas uma vez no momento da sua criação (2025), 
        com o contrato-mãe bloqueado para novas emissões futuras.  
        Isso garante <strong>escassez perpétua</strong>, <strong>valorização sustentável</strong> e total 
        <strong> imunidade à inflação digital</strong>.
      </p>
    </div>

    {/* 💬 Resumo de Valor */}
    <div className="space-y-3">
      <h3 className="text-lg sm:text-xl font-semibold text-[#D4AF37]">💬 Resumo de Valor</h3>
      <p className="italic text-gray-400 text-center">
        “Enquanto outras moedas se sustentam por governos, bancos ou commodities,  
        a <strong>E-Coin</strong> é sustentada pela estrutura corporativa real da <strong>EdenKingDom Corporation</strong>,  
        tornando-se a ponte entre o valor tangível e o digital.”
      </p>
    </div>

    {/* 🌟 Conclusão: A Nova Força Monetária */}
    <div className="space-y-3">
      <h3 className="text-lg sm:text-xl font-semibold text-[#D4AF37]">
        🌟 Conclusão: A Nova Força Monetária
      </h3>
      <p className="text-sm sm:text-base leading-relaxed text-gray-300">
        As moedas são reflexos das estruturas que as sustentam:
      </p>
      <ul className="list-disc list-inside text-gray-400 ml-4 space-y-1">
        <li>💎 O <strong>Bitcoin</strong> — é liberdade.</li>
        <li>🇰🇼 O <strong>Dinar</strong> — é estabilidade.</li>
        <li>🇺🇸 O <strong>Dólar</strong> — é poder.</li>
        <li>🇲🇿 O <strong>Metical</strong> — é esperança.</li>
        <li>🇻🇪 O <strong>Bolívar</strong> — é o alerta.</li>
        <li>👑 A <strong>E-Coin</strong> — é a fusão entre propósito, valor real e tecnologia.</li>
      </ul>
    </div>

    {/* 👑 Encerramento */}
    <div className="text-center space-y-3 mt-8">
      <h3 className="text-xl sm:text-2xl font-bold text-[#D4AF37]">
        👑 E-Coin – A Moeda Corporativa da Nova Economia Global
      </h3>
      <p className="italic text-gray-400 text-lg sm:text-xl">
        🪙 “E-Coin — Criada para durar, feita para confiar.  
        Porque o valor verdadeiro nunca se imprime, constrói-se.”
      </p>
    </div>
  </div>
</motion.section>

{/* SECTION 17 — MENSAGEM OFICIAL: UTILIDADE REAL */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌄 Fundo padrão */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#1a1205]/90 via-[#000]/95 to-[#0a0a0a]/100" />
    <div
      className="absolute inset-0 bg-[url('/images/ecoin-utility-message-bg.jpg')] bg-cover bg-center opacity-25"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/10 via-transparent to-transparent blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-5xl mx-auto text-left text-gray-200 space-y-10">
    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#D4AF37] text-center mb-6">
      🌍 Mensagem Oficial — Utilidade Real da E-Coin, E-USD e E-Genesis
    </h2>


    <p className="text-sm sm:text-base leading-relaxed text-gray-300">
      A <strong>E-Coin</strong> não é apenas mais uma criptomoeda.  
      Ela nasce como um dos nossos principais investimentos estratégicos, integrada ao coração da <strong>EdenKingDom Corporation</strong>  
      e desenhada para ter utilidade real na vida das pessoas.
    </p>

    {/* 🔋 1. Recarga e Pagamentos do Dia a Dia */}
    <div className="space-y-3">
      <h3 className="text-lg sm:text-xl font-semibold text-green-400">
        🔋 1. Recarga e Pagamentos do Dia a Dia
      </h3>
      <p className="text-sm sm:text-base leading-relaxed text-gray-300">
        A <strong>E-Coin</strong> poderá ser usada como:
      </p>
      <ul className="list-disc list-inside text-gray-400 ml-4 space-y-1">
        <li>Método de recarga nos nossos sistemas;</li>
        <li>Meio de pagamento em serviços corporativos;</li>
        <li>Transferências rápidas, seguras e globais;</li>
        <li>Envio e recebimento de dinheiro entre amigos, família e parceiros.</li>
      </ul>
      <p className="text-yellow-400 font-semibold mt-2">
        👉 Não é uma moeda para ficar parada: é uma moeda para ser usada.
      </p>
    </div>

    {/* ⚡ 2. Negociação Inteligente */}
    <div className="space-y-3 mt-8">
      <h3 className="text-lg sm:text-xl font-semibold text-orange-400">
        ⚡ 2. Negociação Inteligente: Ordens Limitadas e a Mercado
      </h3>
      <p className="text-sm sm:text-base leading-relaxed text-gray-300">
        A nossa Exchange - EFTE permitirá:
      </p>
      <ul className="list-disc list-inside text-gray-400 ml-4 space-y-1">
        <li>Compra e venda instantânea (<em>market orders</em>);</li>
        <li>Negociação estratégica (<em>limit orders</em>);</li>
       
        <li>Conversão direta entre <strong>E-Coin</strong>, <strong>E-USD</strong> e <strong>E-Genesis</strong>.</li>
      </ul>
      <p className="text-gray-300 mt-2">
        Com o tempo, isto transformará a <strong>E-Coin</strong> num ativo vivo,  
        com <strong>liquidez real</strong> e <strong>utilidade prática</strong>.
      </p>
    </div>
  </div>
</motion.section>

{/* SECTION 18 — ARBITRAGEM INTELIGENTE + E-ATM */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌄 Fundo padrão */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#1a1205]/90 via-[#000]/95 to-[#0a0a0a]/100" />
    <div
      className="absolute inset-0 bg-[url('/images/ecoin-ai-arbitrage-bg.jpg')] bg-cover bg-center opacity-25"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/10 via-transparent to-transparent blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-5xl mx-auto text-left text-gray-200 space-y-10">
    {/* 🤖 Arbitragem Inteligente */}
    <div>
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#D4AF37] text-center mb-8">
        🤖 3. Arbitragem Inteligente — Powered by E-AI
      </h2>
      <p className="text-sm sm:text-base leading-relaxed text-gray-300">
        Assim que atingirmos massa crítica de usuários, introduziremos a terceira modalidade de negociação:
        <strong> arbitragem automatizada</strong> com tecnologia <strong>E-AI</strong>, a nossa inteligência artificial corporativa.
      </p>
      <ul className="list-disc list-inside text-gray-400 ml-4 mt-3 space-y-1">
        <li>Negociação automática (<em>HFT AI Powered Buy Low & Sell High (E-Coin) - in milseconds for profitability</em>);</li>;
        <li>Comprar criptomoedas a preços baixos;</li>
        <li>Vender a preços mais altos automaticamente;</li>
        <li>Aproveitar oportunidades sem esforço.</li>
      </ul>
      <p className="text-yellow-400 font-semibold mt-4">
        👉 E-AI fará aquilo que nenhum sistema tradicional faz hoje:  
        <strong>arbitragem totalmente integrada à blockchain corporativa.</strong>
      </p>
    </div>

    {/* 🏦 E-Coin como Moeda Oficial dos Caixas Eletrônicos */}
    <div className="mt-10">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#D4AF37] text-center mb-8">
        🏦 4. E-Coin como Moeda Oficial dos Nossos Caixas Eletrônicos
      </h2>
      <p className="text-sm sm:text-base leading-relaxed text-gray-300">
        Os nossos caixas eletrônicos de criptomoedas (<strong>E-Pay Crypto ATM & E-Pay Vault, E-Pay Banking Card, E-Pay TokenPad, E-Chain, E-Share, EFTE-CEX, E-Coin Converter (E-Swap), etc</strong>) trabalharão exclusivamente com <strong>E-Coin</strong>.
      </p>
      <p className="text-gray-300 mt-3">Isso cria:</p>
      <ul className="list-disc list-inside text-gray-400 ml-4 mt-1 space-y-1">
        <li>Procura constante;</li>
        <li>Utilidade irreversível;</li>
        <li>Circulação natural da moeda.</li>
      </ul>
    </div>
  </div>
</motion.section>

{/* SECTION 19 — MOÇAMBIQUE E EXPANSÃO GLOBAL */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌄 Fundo padrão */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#1a1205]/90 via-[#000]/95 to-[#0a0a0a]/100" />
    <div
      className="absolute inset-0 bg-[url('/images/ecoin-mozambique-expansion-bg.jpg')] bg-cover bg-center opacity-25"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/10 via-transparent to-transparent blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-5xl mx-auto text-left text-gray-200 space-y-10">
    {/* 🇲🇿 5. O Meu País Começará Sua Jornada Com a E-Coin */}
    <div>
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#D4AF37] text-center mb-8">
        🇲🇿 5. O Meu País Começará Sua Jornada Com a E-Coin
      </h2>
      <p className="text-sm sm:text-base leading-relaxed text-gray-300">
        <strong>Moçambique</strong> — e vários países africanos — estão na fase inicial de adoção de criptomoedas.
      </p>
      <p className="text-sm sm:text-base leading-relaxed text-gray-300 mt-2">
        A <strong>E-Coin</strong> será:
      </p>
      <ul className="list-disc list-inside text-gray-400 ml-4 mt-1 space-y-1">
        <li>Uma porta de entrada segura para milhões de novos usuários;</li>
        <li>Um meio de inclusão financeira real;</li>
        <li>Uma ferramenta de pagamentos acessível e moderna.</li>
      </ul>
      <p className="text-gray-300 mt-3">
        A <strong>E-Coin</strong> começa local — com os meus melhores amigos entusiastas locais,  
        por uma oferta à nossa amizade no mundo cripto.  
        <br />
        <span className="text-[#D4AF37] font-semibold">Mas foi desenhada para crescer globalmente.</span>
      </p>
    </div>

    {/* 🌐 6. Listagem em Corretoras Globais */}
    <div className="mt-10">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#D4AF37] text-center mb-8">
        🌐 6. Listagem em Corretoras Globais e Expansão Internacional
      </h2>
      <p className="text-sm sm:text-base leading-relaxed text-gray-300">
        Assim que a liquidez e a adoção aumentarem, habilitaremos:
      </p>
      <ul className="list-disc list-inside text-gray-400 ml-4 mt-2 space-y-1">
        <li>Listagem em grandes <em>exchanges</em> internacionais;</li>
        <li>Criação de um mercado global de <strong>E-Coin</strong>;</li>
        <li>Abertura para traders profissionais e iniciantes.</li>
      </ul>
      <p className="text-yellow-400 font-semibold mt-3">
        👉 A E-Coin, E-USD e E-Genesis serão usadas tanto dentro da nossa rede corporativa  
        quanto nas grandes plataformas globais.
      </p>
    </div>
  </div>
</motion.section>

{/* SECTION 20 — OFERTA LIMITADA E RESUMO PODEROSO */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌄 Fundo cinematográfico padrão */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#1a1205]/90 via-[#000]/95 to-[#0a0a0a]/100" />
    <div
      className="absolute inset-0 bg-[url('/images/ecoin-limited-offer-bg.jpg')] bg-cover bg-center opacity-25"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/10 via-transparent to-transparent blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-5xl mx-auto text-left text-gray-200 space-y-10">
    {/* 💎 Oferta Muito Limitada */}
    <div>
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#D4AF37] text-center mb-8">
        💎 7. Oferta Muito Limitada — Utilidade Muito Alta
      </h2>
      <p className="text-sm sm:text-base leading-relaxed text-gray-300">
        A <strong>escassez</strong> é uma das maiores forças do token:
      </p>
      <ul className="list-disc list-inside text-gray-400 ml-4 mt-2 space-y-1">
        <li>Oferta limitada;</li>
        <li>Circulação consistente;</li>
        <li>Demanda crescente pelo uso real.</li>
      </ul>
      <p className="text-gray-300 mt-4">
        Isso cria um ambiente de:
      </p>
      <ul className="list-disc list-inside text-gray-400 ml-4 mt-1 space-y-1">
        <li>Estabilidade,</li>
        <li>Crescimento orgânico,</li>
        <li>Valorização saudável ao longo do tempo.</li>
      </ul>
    </div>

    {/* 🌟 Resumo Poderoso */}
    <div className="mt-10">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#D4AF37] text-center mb-8">
        🌟 Resumo Poderoso
      </h2>
      <p className="text-sm sm:text-base leading-relaxed text-gray-300">
        A razão pela qual as pessoas vão adquirir <strong>E-Coin</strong>, <strong>E-USD</strong> e <strong>E-Genesis</strong> é simples:
        <br />
        Elas têm <strong>utilidade real</strong>.
      </p>

      <div className="text-gray-200 mt-4 space-y-2">
        <p>💠 Você não guarda — <span className="text-[#D4AF37] font-semibold">você usa.</span></p>
        <p>💠 Você não imagina — <span className="text-[#D4AF37] font-semibold">você movimenta.</span></p>
        <p>💠 Você não espera — <span className="text-[#D4AF37] font-semibold">você participa.</span></p>
      </div>

      <p className="text-gray-300 mt-6">
        <strong>E-Coin</strong> será usada para:
      </p>
      <ul className="list-disc list-inside text-gray-400 ml-4 mt-1 space-y-1">
        <li>Comprar, vender e arbitrar;</li>
        <li>Pagar serviços corporativos;</li>
        <li>Movimentar dinheiro no dia a dia;</li>
        <li>Interagir com a E-AI;</li>
        <li>Operar em exchanges internacionais;</li>
        <li>Utilizar os nossos caixas eletrônicos <strong>E-Pay Crypto ATM e mais</strong>.</li>
      </ul>

      <p className="text-yellow-400 font-semibold mt-4">
        ➡️ A E-Coin, é uma moeda viva, com propósito, utilidade e tecnologia contemporânea e do futuro das proximas gerações.
      </p>
    </div>
  </div>
</motion.section>

{/* SECTION 21 — COMPARAÇÃO MERCADO VS APOSTAS */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌄 Fundo cinematográfico padrão */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#1a1205]/90 via-[#000]/95 to-[#0a0a0a]/100" />
    <div
      className="absolute inset-0 bg-[url('/images/ecoin-vs-betting-bg.jpg')] bg-cover bg-center opacity-25"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/10 via-transparent to-transparent blur-3xl" />
  </div>

  {/* Conteúdo principal */}
  <div className="max-w-5xl mx-auto text-left text-gray-200 space-y-10">
    {/* 🔍 Título e Introdução */}
    <div>
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#D4AF37] text-center mb-8">
        🔍 COMPARAÇÃO REAL ENTRE: O Mercado Financeiro / Cripto ou E-Coin <br /> vs <br /> Sistemas de Apostas (Betting / Aviator / Futebol)
      </h2>

      <p className="text-sm sm:text-base leading-relaxed text-gray-300">
        A maior falha das pessoas é tentar comparar <strong>finanças</strong> com <strong>jogos de aposta</strong>,  
        mas na realidade eles são <span className="text-[#D4AF37] font-semibold">opostos em estrutura, lógica, risco, resultado e propósito</span>.
      </p>

      <p className="text-gray-400 mt-4 italic">
        A seguir está a explicação completa:
      </p>
    </div>

    {/* 💼 Mercado Financeiro / Cripto / E-Coin */}
    <div className="border-l-4 border-[#D4AF37]/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#D4AF37] mb-3">
        💼 Mercado Financeiro / Cripto / E-Coin
      </h3>
      <ul className="list-disc list-inside text-gray-300 space-y-1">
        <li>Baseado em <strong>análise, estrutura e utilidade real</strong>;</li>
        <li>Envolve <strong>planejamento, estudo e gestão de risco</strong>;</li>
        <li>O retorno é proporcional à <strong>inovação e adoção do projeto</strong>;</li>
        <li>A perda ocorre por má gestão, não por sorte ou azar;</li>
        <li>O sucesso é consequência de <strong>educação financeira e visão de longo prazo</strong>.</li>
      </ul>
      <p className="text-gray-400 mt-3 italic">
        “No mercado financeiro, o lucro nasce da estrutura — não do acaso.”
      </p>
    </div>

    {/* 🎰 Sistemas de Apostas */}
    <div className="border-l-4 border-red-500/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-red-500 mb-3">
        🎰 Sistemas de Apostas (Betting / Aviator / Futebol)
      </h3>
      <ul className="list-disc list-inside text-gray-300 space-y-1">
        <li>Baseado em <strong>probabilidades e sorte momentânea</strong>;</li>
        <li>Não há criação de valor, apenas redistribuição de perdas e ganhos;</li>
        <li>O lucro de um vem da <strong>perda do outro</strong>;</li>
        <li>Não há utilidade, nem crescimento sustentável;</li>
        <li>Gera dependência psicológica e não riqueza real.</li>
      </ul>
      <p className="text-gray-400 mt-3 italic">
        “Nas apostas, o jogo é o produto — não existe valor, apenas risco.”
      </p>
    </div>

    {/* ⚖️ Conclusão Comparativa */}
    <div className="text-center mt-10">
      <h3 className="text-2xl font-bold text-[#D4AF37] mb-4">
        ⚖️ Diferença Fundamental
      </h3>
      <p className="text-gray-300 leading-relaxed">
        Enquanto o <strong>mercado financeiro</strong> e a <strong>E-Coin</strong> constroem valor através de <strong>estrutura, propósito e inovação</strong>,  
        os <strong>sistemas de aposta</strong> vivem de <strong>azar, vício e instabilidade</strong>.
      </p>
      <p className="text-yellow-400 font-semibold mt-4">
        💠 A E-Coin não é um jogo — é uma economia estruturada, viva e auditável.
      </p>
    </div>
  </div>
</motion.section>

{/* SECTION 22 — DIFERENTES POR NATUREZA E PROPÓSITO */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌄 Fundo cinematográfico padrão */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#1a1205]/90 via-[#000]/95 to-[#0a0a0a]/100" />
    <div
      className="absolute inset-0 bg-[url('/images/ecoin-diferencas-bg.jpg')] bg-cover bg-center opacity-25"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/10 via-transparent to-transparent blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-5xl mx-auto text-left text-gray-200 space-y-10">
    {/* 🟦 Título */}
    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#D4AF37] text-center mb-8">
      🟦 1. Diferentes por Natureza e Propósito
    </h2>

    {/* 🪙 Mercado Financeiro / Cripto */}
    <div className="border-l-4 border-[#D4AF37]/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#D4AF37] mb-3">
        🪙 Mercado Financeiro / Cripto
      </h3>
      <p className="text-gray-300 leading-relaxed">
        Criado para <strong>transferência de valor, poupança, investimento, tecnologia, transações e economia real</strong>.  
        É um sistema que move nações, impulsiona empresas e sustenta a infraestrutura global.
      </p>

      <ul className="list-disc list-inside text-gray-400 mt-3 space-y-1">
        <li>Movimenta economias e países;</li>
        <li>É regulado ou semi-regulado;</li>
        <li>Baseado em <strong>oferta, demanda, liquidez e tecnologia</strong>;</li>
        <li>Tem <strong>segurança, utilidade, comunidade e fluxo econômico natural</strong>;</li>
        <li>Opera com <strong>mecanismos matemáticos e fundamentos reais</strong>.</li>
      </ul>

      <p className="text-gray-400 italic mt-3">
        “O mercado financeiro não é um jogo — é a base sobre a qual o mundo moderno opera.”
      </p>
    </div>

    {/* 🎰 Sistemas de Apostas */}
    <div className="border-l-4 border-red-500/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-red-500 mb-3">
        🎰 Sistemas de Apostas (Betting, Aviator, Jogos)
      </h3>
      <p className="text-gray-300 leading-relaxed">
        Criados com o propósito de <strong>entretenimento, emoção e risco imediato</strong>,  
        os sistemas de apostas não geram valor produtivo nem impacto econômico real.
      </p>

      <ul className="list-disc list-inside text-gray-400 mt-3 space-y-1">
        <li>Baseados em <strong>adrenalina e instinto</strong>, não em estratégia;</li>
        <li>Não produzem valor real nem desenvolvimento social;</li>
        <li>O sistema sempre vence no longo prazo;</li>
        <li>O usuário aposta <strong>contra</strong> a própria plataforma;</li>
        <li>Gera vício e dependência, não riqueza nem estabilidade.</li>
      </ul>

      <p className="text-gray-400 italic mt-3">
        “Nos jogos, o lucro é ilusão; a perda é estatística.”
      </p>
    </div>

    {/* 🧭 Conclusão */}
    <div className="text-center mt-10">
      <p className="text-gray-300 leading-relaxed">
        O <strong>Mercado Financeiro e Cripto</strong> existe para <strong>gerar valor, inovação e progresso</strong>.  
        As <strong>apostas</strong> existem apenas para <strong>entreter e consumir o risco</strong>.
      </p>
      <p className="text-[#D4AF37] font-semibold mt-4">
        💠 A E-Coin foi criada para o lado produtivo da história — não para o lado especulativo.
      </p>
    </div>
  </div>
</motion.section>

{/* SECTION 23 — LÓGICA DO SISTEMA */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌄 Fundo cinematográfico padrão */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#1a1205]/90 via-[#000]/95 to-[#0a0a0a]/100" />
    <div
      className="absolute inset-0 bg-[url('/images/ecoin-logica-sistema-bg.jpg')] bg-cover bg-center opacity-25"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/10 via-transparent to-transparent blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-5xl mx-auto text-left text-gray-200 space-y-10">
    {/* 🟥 Título */}
    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#D4AF37] text-center mb-8">
      🟥 2. Lógica do Sistema
    </h2>

    {/* 🪙 Mercado Financeiro / Cripto */}
    <div className="border-l-4 border-[#D4AF37]/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#D4AF37] mb-3">
        🪙 Mercado Financeiro / Cripto
      </h3>
      <p className="text-gray-300 leading-relaxed">
        Funciona baseado em variáveis naturais e econômicas, que refletem o comportamento coletivo e o crescimento real dos mercados:
      </p>

      <ul className="list-disc list-inside text-gray-400 mt-3 space-y-1">
        <li>Oferta e procura;</li>
        <li>Volatilidade natural e orgânica;</li>
        <li>Liquidez de mercado;</li>
        <li>Análise técnica e fundamental;</li>
        <li>Tecnologia blockchain e transparência pública;</li>
        <li>Eventos econômicos e inovações reais;</li>
        <li>Crescimento e adoção global;</li>
      </ul>

      <p className="text-gray-400 italic mt-3">
        “O mercado é como um organismo vivo — ninguém controla diretamente, ele reage à realidade.”
      </p>
    </div>

    {/* 🎰 Betting (Apostas) */}
    <div className="border-l-4 border-red-500/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-red-500 mb-3">
        🎰 Betting (Apostas)
      </h3>
      <p className="text-gray-300 leading-relaxed">
        Funciona baseado em <strong>probabilidades artificiais</strong> e algoritmos pré-programados para manter a lucratividade da plataforma:
      </p>

      <ul className="list-disc list-inside text-gray-400 mt-3 space-y-1">
        <li>Probabilidade programada e previsível;</li>
        <li>Algoritmos criados para dar lucro à empresa;</li>
        <li>RTP (Return to Player) controlado e fixo;</li>
        <li>Casas de aposta limitam riscos e ganhos;</li>
        <li>“Odd makers” contratam matemáticos para controlar o resultado;</li>
        <li>O sistema define quando paga, quanto paga e quando recolhe tudo.</li>
      </ul>

      <p className="text-gray-400 italic mt-3">
        “Em apostas, nada é natural — tudo é calculado para que o jogador perca mais do que ganha.”
      </p>
    </div>

    {/* ⚖️ Conclusão Comparativa */}
    <div className="text-center mt-10">
      <p className="text-gray-300 leading-relaxed">
        O <strong>Mercado Financeiro e Cripto</strong> reage ao mundo real —  
        <strong>as apostas</strong> reagem apenas ao código que decide o seu destino.
      </p>
      <p className="text-[#D4AF37] font-semibold mt-4">
        💠 A E-Coin segue a lógica natural da economia — não o algoritmo da sorte.
      </p>
    </div>
  </div>
</motion.section>

{/* SECTION 24 — POSSIBILIDADE DE CRESCIMENTO */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌄 Fundo cinematográfico padrão */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#1a1205]/90 via-[#000]/95 to-[#0a0a0a]/100" />
    <div
      className="absolute inset-0 bg-[url('/images/ecoin-crescimento-bg.jpg')] bg-cover bg-center opacity-25"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/10 via-transparent to-transparent blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-5xl mx-auto text-left text-gray-200 space-y-10">
    {/* 🟩 Título */}
    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#D4AF37] text-center mb-8">
      🟩 3. Possibilidade de Crescimento
    </h2>

    {/* 🪙 Criptomoedas com utilidade real */}
    <div className="border-l-4 border-[#D4AF37]/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#D4AF37] mb-3">
        🪙 Criptomoedas com utilidade real
      </h3>
      <p className="text-gray-300 leading-relaxed">
        As criptomoedas com propósito e utilidade prática podem crescer de forma sustentável e orgânica, 
        baseadas em adoção, tecnologia e uso real na economia.
      </p>

      <ul className="list-disc list-inside text-gray-400 mt-3 space-y-1">
        <li>Podem subir organicamente;</li>
        <li>Valorizam conforme a adoção aumenta;</li>
        <li>Tornam-se meios de pagamento reais;</li>
        <li>São usadas por empresas e marketplaces;</li>
        <li>Movem economias e setores produtivos;</li>
        <li>Geram empregos, ecossistemas e inovação.</li>
      </ul>

      <p className="text-gray-300 mt-3">
        <strong>Exemplo:</strong> Bitcoin começou a US$ 0.0008 — hoje vale dezenas de milhares de dólares.  
        O crescimento foi o resultado de <span className="text-[#D4AF37] font-semibold">utilidade, confiança e adoção global</span>.
      </p>

      <p className="text-gray-400 italic mt-3">
        “Toda moeda com propósito real encontra o seu valor no tempo.”
      </p>
    </div>

    {/* 🎰 Apostas */}
    <div className="border-l-4 border-red-500/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-red-500 mb-3">
        🎰 Apostas
      </h3>
      <p className="text-gray-300 leading-relaxed">
        No universo das apostas, não existe construção de valor, nem crescimento sustentável — apenas rotação de risco e perda acumulada.
      </p>

      <ul className="list-disc list-inside text-gray-400 mt-3 space-y-1">
        <li>Você nunca “investe” — você <strong>joga</strong>;</li>
        <li>Você nunca constrói patrimônio;</li>
        <li>Não existe valorização nem holding;</li>
        <li>Não há liquidez crescente nem utilidade real;</li>
        <li>A plataforma sempre ganha mais do que distribui.</li>
      </ul>

      <p className="text-gray-400 italic mt-3">
        “Em apostas, o crescimento é um mito — a roleta sempre volta ao zero.”
      </p>
    </div>

    {/* 🧭 Conclusão */}
    <div className="text-center mt-10">
      <p className="text-gray-300 leading-relaxed">
        Enquanto o <strong>mercado financeiro</strong> e as <strong>criptomoedas úteis</strong> constroem valor,  
        as <strong>apostas</strong> apenas reciclam perdas.
      </p>
      <p className="text-[#D4AF37] font-semibold mt-4">
        💠 A E-Coin representa o lado produtivo do crescimento real — onde o valor nasce do uso, e não do acaso.
      </p>
    </div>
  </div>
</motion.section>

{/* SECTION 25 — RISCO: DIFERENTE NATUREZA */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌄 Fundo cinematográfico padrão */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#1a1205]/90 via-[#000]/95 to-[#0a0a0a]/100" />
    <div
      className="absolute inset-0 bg-[url('/images/ecoin-risco-bg.jpg')] bg-cover bg-center opacity-25"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/10 via-transparent to-transparent blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-5xl mx-auto text-left text-gray-200 space-y-10">
    {/* 🟨 Título */}
    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#D4AF37] text-center mb-8">
      🟨 4. Risco: Diferente Natureza
    </h2>

    {/* 🪙 Cripto */}
    <div className="border-l-4 border-[#D4AF37]/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#D4AF37] mb-3">
        🪙 Cripto
      </h3>
      <p className="text-gray-300 leading-relaxed">
        O risco nas criptomoedas é calculado e mensurável, resultado direto de fatores de mercado reais, como volatilidade, oferta e liquidez.
      </p>

      <ul className="list-disc list-inside text-gray-400 mt-3 space-y-1">
        <li>Volatilidade natural do mercado;</li>
        <li>Oferta e demanda em constante ajuste;</li>
        <li>Volume e movimentação de investidores;</li>
        <li>Market makers e correções de preço;</li>
        <li>Eventos macroeconômicos e geopolíticos;</li>
        <li>Liquidez e profundidade de mercado;</li>
      </ul>

      <p className="text-gray-300 mt-3">
        Mesmo no pior cenário, ainda há <span className="text-[#D4AF37] font-semibold">valor residual</span>,  
        pois o ativo continua existindo, com base em utilidade, tecnologia e propriedade digital.
      </p>

      <p className="text-gray-400 italic mt-3">
        “No mundo cripto, o risco é o preço da oportunidade — não o fim do jogo.”
      </p>
    </div>

    {/* 🎰 Apostas */}
    <div className="border-l-4 border-red-500/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-red-500 mb-3">
        🎰 Apostas
      </h3>
      <p className="text-gray-300 leading-relaxed">
        Nas apostas, o risco é <strong>imediato e absoluto</strong>.  
        O jogador depende unicamente da sorte e do algoritmo que sempre favorece a casa.
      </p>

      <ul className="list-disc list-inside text-gray-400 mt-3 space-y-1">
        <li>Perda total em questão de segundos;</li>
        <li>Ausência total de valor residual;</li>
        <li>Sistema programado para prevalecer;</li>
        <li>Sem controle de perdas nem previsibilidade;</li>
        <li>Emoção e vício aumentam o risco psicológico.</li>
      </ul>

      <p className="text-gray-400 italic mt-3">
        “Nas apostas, o risco não é mensurado — é inevitável.”
      </p>
    </div>

    {/* ⚖️ Conclusão */}
    <div className="text-center mt-10">
      <p className="text-gray-300 leading-relaxed">
        O risco na <strong>E-Coin</strong> é fruto de mercado e análise.  
        O risco nas <strong>apostas</strong> é fruto de sorte e programação.
      </p>
      <p className="text-[#D4AF37] font-semibold mt-4">
        💠 A diferença está na natureza: uma constrói valor, a outra o consome.
      </p>
    </div>
  </div>
</motion.section>

{/* SECTION 26 — TRANSPARÊNCIA */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌄 Fundo cinematográfico padrão */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#1a1205]/90 via-[#000]/95 to-[#0a0a0a]/100" />
    <div
      className="absolute inset-0 bg-[url('/images/ecoin-transparencia-bg.jpg')] bg-cover bg-center opacity-25"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/10 via-transparent to-transparent blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-5xl mx-auto text-left text-gray-200 space-y-10">
    {/* 🟧 Título */}
    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#D4AF37] text-center mb-8">
      🟧 5. Transparência
    </h2>

    {/* 🪙 Blockchain */}
    <div className="border-l-4 border-[#D4AF37]/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#D4AF37] mb-3">
        🪙 Blockchain
      </h3>
      <p className="text-gray-300 leading-relaxed">
        A base da <strong>E-Coin</strong> é a transparência total.  
        Todas as transações e contratos são públicos e rastreáveis, garantindo confiança e integridade.
      </p>

      <ul className="list-disc list-inside text-gray-400 mt-3 space-y-1">
        <li>100% pública e imutável;</li>
        <li>Cada transação é rastreável e verificável;</li>
        <li>Smart contracts são auditáveis por qualquer pessoa;</li>
        <li>Código-fonte aberto e transparente;</li>
        <li>Liquidez e volume visíveis em tempo real.</li>
      </ul>

      <p className="text-gray-400 italic mt-3">
        “Na blockchain, a verdade não depende da confiança — ela é visível.”
      </p>
    </div>

    {/* 🎰 Aviator / Jogos / Betting */}
    <div className="border-l-4 border-red-500/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-red-500 mb-3">
        🎰 Aviator / Jogos / Betting
      </h3>
      <p className="text-gray-300 leading-relaxed">
        Em contraste, as plataformas de apostas funcionam em sistemas fechados e opacos,  
        onde o usuário nunca tem acesso ao funcionamento real do algoritmo.
      </p>

      <ul className="list-disc list-inside text-gray-400 mt-3 space-y-1">
        <li>Sistema fechado e centralizado;</li>
        <li>Código e dados ocultos do público;</li>
        <li>Algoritmos internos potencialmente manipuláveis;</li>
        <li>Resultados não auditáveis pelo usuário;</li>
        <li>Probabilidades escondidas e controladas pela empresa.</li>
      </ul>

      <p className="text-gray-400 italic mt-3">
        “Nas apostas, o que você não vê é exatamente o que te faz perder.”
      </p>
    </div>

    {/* ⚖️ Conclusão */}
    <div className="text-center mt-10">
      <p className="text-gray-300 leading-relaxed">
        A <strong>E-Coin</strong> opera com total transparência.  
        As <strong>apostas</strong> operam no escuro.
      </p>
      <p className="text-[#D4AF37] font-semibold mt-4">
        💠 A diferença é clara: confiança se constrói com transparência, não com sorte.
      </p>
    </div>
  </div>
</motion.section>

{/* SECTION 27 — QUEM PERDE E QUEM GANHA */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌄 Fundo cinematográfico padrão */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#1a1205]/90 via-[#000]/95 to-[#0a0a0a]/100" />
    <div
      className="absolute inset-0 bg-[url('/images/ecoin-quemganha-bg.jpg')] bg-cover bg-center opacity-25"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/10 via-transparent to-transparent blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-5xl mx-auto text-left text-gray-200 space-y-10">
    {/* 🟪 Título */}
    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#D4AF37] text-center mb-8">
      🟪 6. Quem Perde e Quem Ganha?
    </h2>

    {/* 🪙 Cripto */}
    <div className="border-l-4 border-[#D4AF37]/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#D4AF37] mb-3">
        🪙 Cripto
      </h3>
      <p className="text-gray-300 leading-relaxed">
        No ecossistema cripto, <strong>todos podem ganhar</strong> se o mercado cresce e se a adoção aumenta.  
        É um modelo de criação e partilha de valor, sustentado por tecnologia, comunidade e produtividade.
      </p>

      <ul className="list-disc list-inside text-gray-400 mt-3 space-y-1">
        <li>Traders — lucram com movimentações e volume;</li>
        <li>Holders — valorizam com o crescimento do ecossistema;</li>
        <li>Empresas — integram e ampliam utilidades;</li>
        <li>Desenvolvedores — constroem soluções e são recompensados;</li>
        <li>Governos — arrecadam e estimulam inovação;</li>
        <li>Países — atraem investimentos e progresso.</li>
      </ul>

      <p className="text-gray-400 italic mt-3">
        “A criptoeconomia é colaborativa: quanto mais cresce, mais todos ganham.”
      </p>
    </div>

    {/* 🎰 Apostas */}
    <div className="border-l-4 border-red-500/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-red-500 mb-3">
        🎰 Apostas
      </h3>
      <p className="text-gray-300 leading-relaxed">
        Nos jogos e apostas, o sistema é de <strong>redistribuição, não de criação</strong> de valor.  
        Para alguém ganhar, outro precisa perder — e quase sempre, o sistema é o maior ganhador.
      </p>

      <ul className="list-disc list-inside text-gray-400 mt-3 space-y-1">
        <li>Lucro de um vem da perda de outro;</li>
        <li>O sistema é programado para ganhar sempre mais;</li>
        <li>Não há criação de riqueza — apenas rotação de perdas;</li>
        <li>É um ecossistema sem produtividade nem propósito real.</li>
      </ul>

      <p className="text-gray-400 italic mt-3">
        “Nas apostas, a única constante é a vitória do sistema.”
      </p>
    </div>

    {/* ⚖️ Conclusão */}
    <div className="text-center mt-10">
      <p className="text-gray-300 leading-relaxed">
        A <strong>E-Coin</strong> constrói valor que se multiplica.  
        As <strong>apostas</strong> apenas giram valor que se esgota.
      </p>
      <p className="text-[#D4AF37] font-semibold mt-4">
        💠 Na E-Coin, o sucesso é coletivo. Nas apostas, o prejuízo é compartilhado.
      </p>
    </div>
  </div>
</motion.section>

{/* SECTION 28 — BASE MATEMÁTICA */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌄 Fundo cinematográfico padrão */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#1a1205]/90 via-[#000]/95 to-[#0a0a0a]/100" />
    <div
      className="absolute inset-0 bg-[url('/images/ecoin-basematematica-bg.jpg')] bg-cover bg-center opacity-25"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/10 via-transparent to-transparent blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-5xl mx-auto text-left text-gray-200 space-y-10">
    {/* 🟫 Título */}
    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#D4AF37] text-center mb-8">
      🟫 7. Base Matemática
    </h2>

    {/* 🪙 Cripto */}
    <div className="border-l-4 border-[#D4AF37]/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#D4AF37] mb-3">
        🪙 Cripto
      </h3>
      <p className="text-gray-300 leading-relaxed">
        O universo das criptomoedas é sustentado por <strong>matemática real e verificável</strong>,  
        baseada em princípios de descentralização, segurança e consenso global.
      </p>

      <ul className="list-disc list-inside text-gray-400 mt-3 space-y-1">
        <li>Probabilidades naturais do mercado;</li>
        <li>Modelos econômicos previsíveis e auditáveis;</li>
        <li>Adoção global e descentralizada;</li>
        <li>Algoritmos de consenso: Proof-of-Work e Proof-of-Stake;</li>
        <li>Funções criptográficas (hashing, validação e integridade de blocos).</li>
      </ul>

      <p className="text-gray-400 italic mt-3">
        “Na blockchain, a matemática é a lei — e o código é o juiz.”
      </p>
    </div>

    {/* 🎰 Betting */}
    <div className="border-l-4 border-red-500/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-red-500 mb-3">
        🎰 Betting
      </h3>
      <p className="text-gray-300 leading-relaxed">
        As plataformas de apostas utilizam <strong>simulações matemáticas artificiais</strong>  
        criadas para controlar o risco e garantir lucro constante à empresa.
      </p>

      <ul className="list-disc list-inside text-gray-400 mt-3 space-y-1">
        <li>Probabilidades definidas pelo sistema, não pela realidade;</li>
        <li>Resultados simulados, não naturais;</li>
        <li>Controle total do risco pelo operador;</li>
        <li>Modelos fechados, sem auditoria pública;</li>
        <li>O lucro do sistema é matematicamente inevitável.</li>
      </ul>

      <p className="text-gray-400 italic mt-3">
        “Na aposta, a matemática não é imparcial — é programada para vencer o jogador.”
      </p>
    </div>

    {/* ⚖️ Conclusão */}
    <div className="text-center mt-10">
      <p className="text-gray-300 leading-relaxed">
        A <strong>E-Coin</strong> é guiada por algoritmos descentralizados e matematicamente justos.  
        As <strong>apostas</strong> são guiadas por cálculos ocultos e unilateralmente controlados.
      </p>
      <p className="text-[#D4AF37] font-semibold mt-4">
        💠 Uma é ciência aplicada; a outra, simulação lucrativa.
      </p>
    </div>
  </div>
</motion.section>

{/* SECTION 29 — CONCLUSÃO FINAL */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌄 Fundo cinematográfico padrão */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a2a]/90 via-[#000]/95 to-[#0a0a0a]/100" />
    <div
      className="absolute inset-0 bg-[url('/images/ecoin-conclusao-bg.jpg')] bg-cover bg-center opacity-25"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#3B82F6]/10 via-transparent to-transparent blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-5xl mx-auto text-left text-gray-200 space-y-10">
    {/* 🔵 Título */}
    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3B82F6] text-center mb-8">
      🔵 8. Conclusão Final — A Diferença é Enorme
    </h2>

    {/* 🪙 Mercado Financeiro / Cripto */}
    <div className="border-l-4 border-[#D4AF37]/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#D4AF37] mb-3">
        🪙 Mercado Financeiro / Cripto
      </h3>
      <p className="text-gray-300 leading-relaxed mb-4">
        O mercado financeiro e o universo cripto formam um ecossistema vivo que <strong>cria valor real</strong>,  
        impulsiona economias e constrói o futuro digital da humanidade.
      </p>

      <ul className="list-disc list-inside text-gray-400 mt-3 space-y-1">
        <li>✔ Cria valor;</li>
        <li>✔ Movimenta economias;</li>
        <li>✔ Produz riqueza;</li>
        <li>✔ Permite investimento;</li>
        <li>✔ Tem utilidade prática;</li>
        <li>✔ É regulado (ou caminha para isso);</li>
        <li>✔ Funciona com base na realidade global.</li>
      </ul>

      <p className="text-gray-300 mt-6 leading-relaxed">
        👉 É <span className="text-[#3B82F6] font-semibold">economia</span>.  
        É <span className="text-[#D4AF37] font-semibold">tecnologia</span>.  
        É <span className="text-[#22C55E] font-semibold">futuro</span>.  
        É <span className="text-white font-bold">investimento</span>.
      </p>

      <p className="text-gray-400 italic mt-4">
        “A E-Coin representa a união definitiva entre propósito, valor real e tecnologia.”  
      </p>
    </div>

    {/* ⚖️ Encerramento visual */}
    <div className="text-center mt-12">
      <p className="text-[#D4AF37] text-lg sm:text-xl font-semibold mb-3">
        💠 E-Coin — A Moeda Corporativa da Nova Era Econômica Global
      </p>
      <p className="text-gray-400">
        Construída desde o Gênesis.  
        Projetada para a Eternidade.
      </p>
    </div>
  </div>
</motion.section>

{/* SECTION 30 — CONCLUSÃO FINAL DE APOSTAS */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌄 Fundo cinematográfico vermelho-púrpura */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#2a0000]/90 via-[#000]/95 to-[#0a0a0a]/100" />
    <div
      className="absolute inset-0 bg-[url('/images/ecoin-apostasfinal-bg.jpg')] bg-cover bg-center opacity-25"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/10 via-transparent to-[#7B1FA2]/20 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-5xl mx-auto text-left text-gray-200 space-y-10">
    {/* 🎰 Apostas / Betting */}
    <div className="border-l-4 border-red-500/70 pl-6">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-red-500 mb-6">
        🎰 Apostas / Betting
      </h2>

      <ul className="list-disc list-inside text-gray-400 space-y-1">
        <li>❌ Não criam valor;</li>
        <li>❌ Não movimentam economia;</li>
        <li>❌ Não produzem riqueza;</li>
        <li>❌ Não têm utilidade real;</li>
        <li>❌ Jogas contra a própria plataforma;</li>
        <li>❌ Sistema programado para te fazer perder.</li>
      </ul>

      <p className="text-gray-300 mt-6 leading-relaxed">
        👉 É <span className="text-red-400 font-semibold">entretenimento</span>.  
        <br />
        ❌ <span className="text-white font-semibold">Não é investimento.</span>
      </p>
    </div>

    {/* 🟣 Mensagem do CEO */}
    <div className="border-t border-[#D4AF37]/30 pt-10 text-center">
      <h3 className="text-xl sm:text-2xl font-bold text-[#D4AF37] mb-4">
        🟣 Mensagem Oficial do CEO — EdenKingDom Corporation
      </h3>
      <blockquote className="italic text-lg sm:text-xl text-gray-300 leading-relaxed">
        “Cripto é <span className='text-[#3B82F6] font-semibold'>tecnologia financeira</span>.<br/>
        Apostas são <span className='text-red-400 font-semibold'>entretenimento matemático</span>.<br/>
        <span className='text-[#D4AF37] font-semibold'>Uma cria riqueza</span>.<br/>
        <span className='text-white font-semibold'>A outra redistribui perda.</span>”
      </blockquote>
      <p className="text-sm text-gray-500 mt-4">
        — <span className="text-[#D4AF37] font-semibold">CEO da EdenKingDom Corporation</span>
      </p>
    </div>
  </div>
</motion.section>

{/* SECTION 31 — CASOS HISTÓRICOS GLOBAIS DE CRIPTO-ATIVOS */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌄 Fundo cinematográfico azul-dourado */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-[#000]/95 to-[#0a0a0a]/100" />
    <div
      className="absolute inset-0 bg-[url('/images/ecoin-casoshistoricos-bg.jpg')] bg-cover bg-center opacity-25"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/10 via-transparent to-[#3B82F6]/20 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-5xl mx-auto text-left text-gray-200 space-y-10">
    {/* 📘 Título */}
    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3B82F6] text-center mb-8">
      📘 CASOS HISTÓRICOS GLOBAIS DE CRIPTO-ATIVOS & PERSPECTIVAS ESTRATÉGICAS DA E-COIN
    </h2>

    {/* 🌍 Introdução Geral */}
    <div className="border-l-4 border-[#D4AF37]/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#D4AF37] mb-3">
        🌍 Introdução Geral
      </h3>
      <p className="text-gray-300 leading-relaxed mb-4">
        Este apêndice apresenta um panorama <strong>histórico, regulatório e estratégico</strong> das criptomoedas no cenário global,  
        com foco em casos reais de adoção, especialmente em contextos <strong>africanos e lusófonos</strong>.
      </p>
      <p className="text-gray-400 leading-relaxed">
        O objetivo é compreender como governos e populações reagiram à ascensão das moedas digitais — e como essas experiências
        orientam as <strong>perspectivas estratégicas da E-Coin</strong> dentro do ecossistema da <strong>EdenKingDom Corporation</strong>.
      </p>
    </div>

    {/* 🏛️ Países que Adotaram Criptomoedas */}
    <div className="border-l-4 border-[#3B82F6]/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#3B82F6] mb-3">
        🏛️ Países que Adotaram Criptomoedas Oficialmente
      </h3>
      <p className="text-gray-300 leading-relaxed mb-4">
        O uso estatal das criptomoedas ultrapassa a especulação.  
        Ele envolve <strong>inovação tecnológica, inclusão financeira e soberania monetária</strong>.
      </p>
      <p className="text-gray-400">
        Alguns países se destacam por regulamentar e integrar o ecossistema cripto em suas economias,  
        criando pontes entre tecnologia e governança moderna.  
        É nesse contexto que a <strong>E-Coin</strong> se projeta como <strong>moeda corporativa-regional</strong>,  
        destinada a operar com <strong>responsabilidade, transparência e valor real</strong>.
      </p>
    </div>

    {/* 🇵🇭 Filipinas */}
    <div className="border-l-4 border-[#22C55E]/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#22C55E] mb-3">
        🇵🇭 Filipinas
      </h3>
      <p className="text-gray-300 leading-relaxed mb-4">
        As Filipinas são hoje um <strong>epicentro de adoção cripto</strong> no Sudeste Asiático,  
        pioneiras na emissão de licenças oficiais para exchanges sob regulação do <strong>Banco Central (BSP)</strong>.
      </p>
      <p className="text-gray-400 leading-relaxed">
        O país vive uma explosão em ecossistemas <strong>play-to-earn, Web3 e DeFi</strong> (Axie Infinity nasceu lá).  
        Mais de <strong>15 milhões de filipinos</strong> já possuem criptomoedas, impulsionando uma economia digital vibrante.
      </p>
      <p className="text-gray-400 italic mt-3">
        “As Filipinas provaram que quando há regulação e visão tecnológica, o povo adota — e o país cresce.”
      </p>
    </div>

    {/* 🌐 Conclusão */}
    <div className="text-center mt-12">
      <p className="text-[#D4AF37] text-lg sm:text-xl font-semibold mb-3">
        🌐 A lição das Filipinas é clara:
      </p>
      <p className="text-gray-300 leading-relaxed">
        O futuro das moedas digitais pertence àqueles que unem <strong>educação, estrutura e propósito</strong>.  
        A <strong>E-Coin</strong> nasce sobre esses três pilares — pronta para <strong>transformar o continente africano</strong>  
        e inspirar o mundo com uma <strong>moeda corporativa com valor real</strong>.
      </p>
      <p className="text-gray-400 italic mt-4">
        “E-Coin — Da visão à estrutura. Da estrutura à confiança. Da confiança ao futuro.”
      </p>
    </div>
  </div>
</motion.section>

{/* SECTION 32 — PAÍSES QUE OFICIALIZARAM CRIPTOMOEDAS */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌄 Fundo cinematográfico institucional */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-[#000]/95 to-[#0a0a0a]/100" />
    <div
      className="absolute inset-0 bg-[url('/images/ecoin-cripto-paises-oficiais-bg.jpg')] bg-cover bg-center opacity-25"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/10 via-transparent to-[#3B82F6]/20 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-5xl mx-auto text-left text-gray-200 space-y-10">
    {/* 📘 Título */}
    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3B82F6] text-center mb-8">
      🌍 Países Pioneiros na Oficialização de Criptomoedas
    </h2>

    {/* 📖 Introdução */}
    <div className="border-l-4 border-[#D4AF37]/70 pl-6">
      <p className="text-gray-300 leading-relaxed mb-4">
        Ao longo da última década, alguns países tomaram decisões históricas ao
        <strong> reconhecer oficialmente criptomoedas ou moedas digitais</strong>
        como parte integrante dos seus sistemas económicos e financeiros.
      </p>
      <p className="text-gray-400 leading-relaxed">
        Abaixo destacam-se <strong>três casos amplamente documentados</strong>,
        com seus continentes, motivações estratégicas e formas de utilização
        governamental. Embora existam outros projetos menos visíveis, estes
        representam os exemplos mais claros de adoção soberana.
      </p>
    </div>

    {/* 🇸🇻 El Salvador */}
    <div className="border-l-4 border-[#F59E0B]/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#F59E0B] mb-3">
        🇸🇻 El Salvador — América Central
      </h3>

      <p className="text-gray-300 leading-relaxed mb-4">
        El Salvador tornou-se o <strong>primeiro país do mundo</strong> a adotar
        o <strong>Bitcoin (BTC)</strong> como moeda de curso legal,
        coexistindo oficialmente com o <strong>Dólar Americano (USD)</strong>.
      </p>

      <p className="text-gray-400 leading-relaxed mb-4">
        A decisão colocou o país no centro do debate económico global e marcou
        um ponto de viragem na relação entre Estados soberanos e cripto-ativos.
      </p>

      {/* 📌 Motivos */}
      <div className="mt-6 space-y-3">
        <p className="text-[#D4AF37] font-semibold">
          🎯 Motivações Estratégicas:
        </p>

        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>
            <strong>Inclusão financeira</strong> de milhões de cidadãos sem acesso
            ao sistema bancário tradicional.
          </li>
          <li>
            <strong>Facilitação de remessas internacionais</strong>, que representam
            uma parcela significativa da economia nacional.
          </li>
          <li>
            <strong>Atração de investimento, inovação tecnológica</strong> e
            posicionamento global como país pioneiro.
          </li>
        </ul>
      </div>

      {/* 🏛️ Uso governamental */}
      <div className="mt-6">
        <p className="text-[#3B82F6] font-semibold mb-2">
          🏛️ Aplicação Governamental:
        </p>
        <p className="text-gray-400 leading-relaxed">
          O governo lançou a <strong>Chivo Wallet</strong>, carteira digital oficial
          do Estado, permitindo pagamentos em <strong>BTC e USD</strong>.
          A aceitação do Bitcoin tornou-se obrigatória para os agentes económicos,
          consolidando o seu uso no quotidiano nacional.
        </p>
      </div>

      <p className="text-gray-400 italic mt-4">
        “El Salvador mostrou que soberania monetária também pode ser digital.”
      </p>
    </div>
  </div>
</motion.section>

{/* SECTION 33 — SIGNIFICADO DE ADOTAR BITCOIN COMO MOEDA DE CURSO LEGAL */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌄 Fundo cinematográfico educativo */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-[#000]/95 to-[#0a0a0a]/100" />
    <div
      className="absolute inset-0 bg-[url('/images/ecoin-significado-curso-legal-btc-bg.jpg')] bg-cover bg-center opacity-25"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/10 via-transparent to-[#3B82F6]/20 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-5xl mx-auto text-left text-gray-200 space-y-10">
    {/* 💬 Título */}
    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3B82F6] text-center mb-8">
      💬 O que significa “Adotar o Bitcoin (BTC) como moeda de curso legal ao lado do USD”
    </h2>

    {/* 📘 Explicação geral */}
    <div className="border-l-4 border-[#D4AF37]/70 pl-6">
      <p className="text-gray-300 leading-relaxed mb-4">
        Quando se diz que um país <strong>adotou o Bitcoin como moeda de curso legal</strong>,
        isso significa que o <strong>governo reconhece oficialmente o Bitcoin como dinheiro legítimo</strong>,
        com o mesmo valor jurídico que a moeda tradicional do país.
      </p>
      <p className="text-gray-400 leading-relaxed">
        Nesse contexto, o Bitcoin deixa de ser apenas um ativo digital ou investimento
        e passa a ser tratado como <strong>meio oficial de pagamento</strong>.
      </p>
    </div>

    {/* ⚖️ Explicação simples */}
    <div className="border-l-4 border-[#3B82F6]/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#3B82F6] mb-3">
        ⚖️ Em termos simples
      </h3>
      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>
          Pessoas e empresas podem usar <strong>Bitcoin para pagar produtos, serviços,
          impostos e dívidas</strong>, assim como fariam com a moeda nacional.
        </li>
        <li>
          Os comerciantes são <strong>obrigados a aceitar Bitcoin</strong> como forma de pagamento,
          salvo exceções práticas (ex.: ausência de internet).
        </li>
        <li>
          O Estado reconhece o Bitcoin como <strong>dinheiro verdadeiro</strong>,
          e não apenas como ativo especulativo.
        </li>
      </ul>
    </div>

    {/* 💵 Ao lado do USD */}
    <div className="border-l-4 border-[#22C55E]/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#22C55E] mb-3">
        💵 O significado de “ao lado do USD”
      </h3>
      <p className="text-gray-300 leading-relaxed mb-4">
        A expressão <strong>“ao lado do USD”</strong> indica que o país
        <strong>não substituiu o Dólar Americano</strong>,
        mas sim adicionou o Bitcoin como <strong>segunda moeda oficial</strong>.
      </p>
      <p className="text-gray-400 leading-relaxed">
        Na prática, isso significa que <strong>duas moedas legais coexistem</strong>
        na economia nacional: o <strong>USD</strong> e o <strong>Bitcoin (BTC)</strong>.
      </p>
    </div>

    {/* 🌎 Exemplo prático */}
    <div className="border-l-4 border-[#F59E0B]/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#F59E0B] mb-3">
        🌎 Exemplo prático — El Salvador
      </h3>
      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>
          É possível pagar um café, uma casa ou uma passagem de transporte público
          usando <strong>Bitcoin ou USD</strong>.
        </li>
        <li>
          Os preços podem ser exibidos <strong>tanto em BTC quanto em USD</strong>.
        </li>
        <li>
          O governo criou carteiras digitais oficiais, como a
          <strong> Chivo Wallet</strong>, para facilitar a adoção em massa.
        </li>
      </ul>
    </div>

    {/* 🔍 Conclusão */}
    <div className="text-center mt-12">
      <p className="text-[#D4AF37] text-lg sm:text-xl font-semibold mb-3">
        🔍 Em essência
      </p>
      <p className="text-gray-300 leading-relaxed">
        Adotar o Bitcoin como moeda de curso legal é uma decisão
        <strong>económica, política e estratégica</strong>,
        que redefine a relação entre Estado, dinheiro e tecnologia.
      </p>
      <p className="text-gray-400 italic mt-4">
        “Quando o dinheiro muda, a economia muda — e a soberania também.”
      </p>
    </div>
  </div>
</motion.section>

{/* SECTION 34 — RESUMO SIMPLIFICADO: CURSO LEGAL DO BITCOIN */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌄 Fundo cinematográfico institucional */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-[#000]/95 to-[#0a0a0a]/100" />
    <div
      className="absolute inset-0 bg-[url('/images/ecoin-resumo-simplificado-curso-legal-bg.jpg')] bg-cover bg-center opacity-25"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/10 via-transparent to-[#3B82F6]/20 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-5xl mx-auto text-left text-gray-200 space-y-10">
    {/* 🧩 Título */}
    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#22C55E] text-center mb-8">
      🧩 Resumo Simplificado
    </h2>

    {/* 📊 Tabela */}
    <div className="overflow-x-auto rounded-2xl border border-white/10 bg-black/40 backdrop-blur">
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="bg-white/5">
            <th className="px-6 py-4 text-lg font-bold text-[#D4AF37]">
              Termo
            </th>
            <th className="px-6 py-4 text-lg font-bold text-red-500">
              Significado
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-white/10">
          <tr>
            <td className="px-6 py-5 text-blue-400 font-semibold">
              “Moeda de curso legal”
            </td>
            <td className="px-6 py-5 text-gray-300">
              Dinheiro oficialmente reconhecido por lei
            </td>
          </tr>

          <tr>
            <td className="px-6 py-5 text-green-400 font-semibold">
              “Ao lado do USD”
            </td>
            <td className="px-6 py-5 text-gray-300">
              Bitcoin e Dólar coexistem como moedas oficiais
            </td>
          </tr>

          <tr>
            <td className="px-6 py-5 text-white font-semibold">
              Efeito prático
            </td>
            <td className="px-6 py-5 text-yellow-400">
              Qualquer cidadão pode usar Bitcoin para pagar legalmente
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</motion.section>

{/* SECTION 35 — OUTROS PAÍSES COM ADOÇÃO OFICIAL DE CRIPTOMOEDAS */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌄 Fundo cinematográfico institucional */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-[#000]/95 to-[#0a0a0a]/100" />
    <div
      className="absolute inset-0 bg-[url('/images/ecoin-republica-centro-africana-ilhas-marshall-bg.jpg')] bg-cover bg-center opacity-25"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/10 via-transparent to-[#3B82F6]/20 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-5xl mx-auto text-left text-gray-200 space-y-12">
    {/* 📘 Título */}
    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3B82F6] text-center mb-8">
      🌍 Outros Países que Oficializaram Criptomoedas
    </h2>

    {/* 🇨🇫 República Centro-Africana */}
    <div className="border-l-4 border-[#22C55E]/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#22C55E] mb-3">
        🇨🇫 República Centro-Africana — África
      </h3>

      <p className="text-gray-300 leading-relaxed mb-4">
        Em <strong>abril de 2022</strong>, a República Centro-Africana adotou o
        <strong>Bitcoin como moeda de curso legal</strong>,
        coexistindo com a sua moeda nacional anterior.
      </p>

      <div className="mt-4">
        <p className="text-[#D4AF37] font-semibold mb-2">
          🎯 Motivações:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>
            <strong>Estimular a inclusão financeira</strong> num país com baixo
            acesso a serviços bancários e infraestrutura limitada.
          </li>
          <li>
            Utilizar a criptomoeda como ferramenta para
            <strong>atrair tecnologia, investimento e revitalizar a economia local</strong>.
          </li>
        </ul>
      </div>

      <div className="mt-4">
        <p className="text-[#3B82F6] font-semibold mb-2">
          🏛️ Fins governamentais:
        </p>
        <p className="text-gray-400 leading-relaxed">
          Legalização do Bitcoin para que empresas e negócios pudessem
          aceitá-lo formalmente, integrando-o como
          <strong>meio oficial de pagamento</strong>.
        </p>
      </div>
    </div>

    {/* 🇲🇭 Ilhas Marshall */}
    <div className="border-l-4 border-[#F59E0B]/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#F59E0B] mb-3">
        🇲🇭 Ilhas Marshall — Oceânia
      </h3>

      <p className="text-gray-300 leading-relaxed mb-4">
        As Ilhas Marshall anunciaram a adoção de uma criptomoeda nacional,
        chamada <strong>Sovereign (SOV)</strong>,
        com a intenção de que fosse
        <strong>moeda de curso legal ao lado do USD</strong>.
      </p>

      <div className="mt-4">
        <p className="text-[#D4AF37] font-semibold mb-2">
          🎯 Motivações:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>
            <strong>Reduzir a dependência do Dólar Americano (USD)</strong>
            e alcançar maior soberania monetária.
          </li>
          <li>
            Criar <strong>novas fontes de receita para o governo</strong> por meio
            da emissão de tokens e utilizar blockchain para
            <strong>melhorar transações</strong>.
          </li>
        </ul>
      </div>

      <div className="mt-4">
        <p className="text-[#3B82F6] font-semibold mb-2">
          🏛️ Fins governamentais:
        </p>
        <p className="text-gray-400 leading-relaxed">
          A legislação prevê que a <strong>SOV</strong> seja aceita para
          <strong>pagamento de impostos, dívidas públicas</strong> e utilizada
          por cidadãos e comerciantes como meio legal de pagamento.
        </p>
      </div>
    </div>

    {/* 🌐 Fecho */}
    <div className="text-center mt-12">
      <p className="text-[#D4AF37] text-lg sm:text-xl font-semibold mb-3">
        🌐 Visão global
      </p>
      <p className="text-gray-300 leading-relaxed">
        Estes casos demonstram que a adoção de criptomoedas por Estados soberanos
        não segue um único modelo, mas responde a
        <strong>necessidades económicas, tecnológicas e estratégicas específicas</strong>.
      </p>
      <p className="text-gray-400 italic mt-4">
        “A moeda muda conforme a realidade do país — não o contrário.”
      </p>
    </div>
  </div>
</motion.section>

{/* SECTION 36 — OBSERVAÇÕES IMPORTANTES E CONCLUSÃO */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌄 Fundo cinematográfico analítico */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-[#000]/95 to-[#0a0a0a]/100" />
    <div
      className="absolute inset-0 bg-[url('/images/ecoin-observacoes-conclusao-adocao-cripto-bg.jpg')] bg-cover bg-center opacity-25"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/10 via-transparent to-[#3B82F6]/20 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-5xl mx-auto text-left text-gray-200 space-y-12">
    {/* 📘 Título */}
    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3B82F6] text-center mb-8">
      📌 Observações Importantes e Análise Crítica
    </h2>

    {/* 🇸🇻 El Salvador */}
    <div className="border-l-4 border-[#F59E0B]/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#F59E0B] mb-3">
        🇸🇻 El Salvador
      </h3>
      <p className="text-gray-300 leading-relaxed">
        Apesar da adoção formal do Bitcoin como moeda de curso legal,
        diversas análises indicam que o
        <strong>uso efetivo por cidadãos e empresas permaneceu relativamente baixo</strong>,
        e que os resultados práticos ficaram
        <strong>aquém das expectativas iniciais</strong>.
      </p>
    </div>

    {/* 🇨🇫 República Centro-Africana */}
    <div className="border-l-4 border-[#22C55E]/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#22C55E] mb-3">
        🇨🇫 República Centro-Africana
      </h3>
      <p className="text-gray-300 leading-relaxed">
        No caso da República Centro-Africana, o período de vigência foi curto
        e enfrentou
        <strong>desafios significativos</strong>,
        como limitações de infraestrutura de
        <strong>internet e energia</strong>,
        além de dúvidas quanto à viabilidade prática.
      </p>
      <p className="text-gray-400 leading-relaxed mt-2">
        Contudo, com a modernização gradual das condições estruturais,
        o cenário encontra-se atualmente
        <strong>mais controlado e estável</strong>.
      </p>
    </div>

    {/* 🇲🇭 Ilhas Marshall */}
    <div className="border-l-4 border-[#D4AF37]/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#D4AF37] mb-3">
        🇲🇭 Ilhas Marshall
      </h3>
      <p className="text-gray-300 leading-relaxed">
        Embora a lei que prevê a adoção da criptomoeda nacional tenha sido aprovada,
        surgiram
        <strong>preocupações relacionadas a ajustes técnicos, regulatórios
        e de infraestrutura</strong>.
      </p>
      <p className="text-gray-400 leading-relaxed mt-2">
        Ainda assim, o modelo apresenta
        <strong>menor grau de desafio</strong>
        quando comparado a outros contextos mais complexos.
      </p>
    </div>

    {/* 📎 Observações adicionais */}
    <div className="border-l-4 border-[#3B82F6]/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#3B82F6] mb-3">
        📎 Observações Adicionais
      </h3>
      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>
          Pouquíssimos países adotaram criptomoedas como
          <strong>moeda de curso legal em pé de igualdade</strong>
          com moedas tradicionais.
        </li>
        <li>
          Mesmo nos casos existentes, persistem
          <strong>desafios estruturais</strong>:
          infraestrutura, educação da população,
          volatilidade e aceitação limitada.
        </li>
        <li>
          Muitos países optaram por
          <strong>modelos moderados</strong>,
          como permissão de uso ou reconhecimento legal parcial,
          sem curso legal pleno.
        </li>
      </ul>
    </div>

    {/* 🧠 Conclusão */}
    <div className="text-center mt-12">
      <p className="text-[#D4AF37] text-lg sm:text-xl font-semibold mb-3">
        🧠 Conclusão
      </p>
      <p className="text-gray-300 leading-relaxed">
        Estes exemplos revelam motivações distintas para a adoção de criptomoedas
        ou moedas digitais estatais —
        <strong>inclusão financeira, atração de investimento,
        soberania monetária e inovação tecnológica</strong>.
      </p>
      <p className="text-gray-400 leading-relaxed mt-3">
        No entanto, também demonstram que
        <strong>adotar não é sinónimo de sucesso automático</strong>.
        Infraestrutura, educação, regulação eficaz
        e estabilidade macroeconómica são fatores críticos
        para resultados sustentáveis.
      </p>
      <p className="text-gray-400 italic mt-4">
        “A tecnologia abre portas — mas são as bases que sustentam o futuro.”
      </p>
    </div>
  </div>
</motion.section>

{/* SECTION 39 — PAÍSES COM CRIPTOMOEDAS LEGALIZADAS OU REGULADAS (2025) */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌄 Fundo cinematográfico geopolítico */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-[#000]/95 to-[#0a0a0a]/100" />
    <div
      className="absolute inset-0 bg-[url('/images/ecoin-paises-cripto-reguladas-2025-bg.jpg')] bg-cover bg-center opacity-30"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/10 via-transparent to-[#3B82F6]/20 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-6xl mx-auto text-left text-gray-200 space-y-10">
    {/* 🌐 Título */}
    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3B82F6] text-center mb-4">
      🌐 Países com Criptomoedas Legalizadas, Reguladas ou Reconhecidas Parcialmente (2025)
    </h2>

    {/* 🧭 Subtítulo */}
    <p className="text-center text-gray-300 max-w-4xl mx-auto">
      Modelo de referência global para o
      <strong> enquadramento estratégico da E-Coin</strong>  
      no ecossistema da <strong>EdenKingDom Corporation</strong>
    </p>

    {/* 📊 Tabela por continentes */}
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-10">
      {/* ÁSIA */}
      <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
        <h3 className="text-xl font-bold text-[#D4AF37] mb-3">🌏 Ásia</h3>
        <ul className="space-y-1 text-gray-300">
          <li>🇯🇵 Japão</li>
          <li>🇸🇬 Singapura</li>
          <li>🇦🇪 Emirados Árabes Unidos</li>
          <li>🇰🇷 Coreia do Sul</li>
          <li>🇵🇭 Filipinas</li>
          <li>🇮🇳 Índia</li>
          <li>🇭🇰 Hong Kong</li>
          <li>🇹🇭 Tailândia</li>
          <li>🇲🇾 Malásia</li>
          <li>🇮🇩 Indonésia</li>
        </ul>
      </div>

      {/* EUROPA */}
      <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
        <h3 className="text-xl font-bold text-[#3B82F6] mb-3">🌍 Europa</h3>
        <ul className="space-y-1 text-gray-300">
          <li>🇩🇪 Alemanha</li>
          <li>🇨🇭 Suíça</li>
          <li>🇵🇹 Portugal</li>
          <li>🇪🇪 Estónia</li>
          <li>🇳🇱 Países Baixos</li>
          <li>🇫🇷 França</li>
          <li>🇬🇧 Reino Unido</li>
          <li>🇪🇸 Espanha</li>
          <li>🇸🇪 Suécia</li>
          <li>🇦🇱 Albânia</li>
        </ul>
      </div>

      {/* AMÉRICA DO NORTE */}
      <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
        <h3 className="text-xl font-bold text-[#22C55E] mb-3">🌎 América do Norte</h3>
        <ul className="space-y-1 text-gray-300">
          <li>🇺🇸 Estados Unidos</li>
          <li>🇨🇦 Canadá</li>
          <li>🇲🇽 México</li>
          <li>🇧🇸 Bahamas</li>
          <li>🇵🇦 Panamá</li>
        </ul>
      </div>

      {/* AMÉRICA DO SUL */}
      <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
        <h3 className="text-xl font-bold text-[#F59E0B] mb-3">🌎 América do Sul</h3>
        <ul className="space-y-1 text-gray-300">
          <li>🇧🇷 Brasil</li>
          <li>🇦🇷 Argentina</li>
          <li>🇨🇱 Chile</li>
          <li>🇨🇴 Colômbia</li>
          <li>🇻🇪 Venezuela</li>
        </ul>
      </div>

      {/* ÁFRICA */}
      <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
        <h3 className="text-xl font-bold text-[#EF4444] mb-3">🌍 África</h3>
        <ul className="space-y-1 text-gray-300">
          <li>🇳🇬 Nigéria</li>
          <li>🇰🇪 Quénia</li>
          <li>🇿🇦 África do Sul</li>
          <li>🇹🇿 Tanzânia</li>
          <li>🇬🇭 Gana</li>
          <li>🇨🇫 República Centro-Africana</li>
          <li>🇲🇺 Ilhas Maurícias</li>
          <li>🇺🇬 Uganda</li>
          <li>🇪🇬 Egito</li>
          <li>🇲🇦 Marrocos</li>
        </ul>
      </div>

      {/* OCEÂNIA */}
      <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
        <h3 className="text-xl font-bold text-[#06B6D4] mb-3">🌊 Oceânia</h3>
        <ul className="space-y-1 text-gray-300">
          <li>🇦🇺 Austrália</li>
          <li>🇳🇿 Nova Zelândia</li>
        </ul>
      </div>
    </div>

    {/* 📌 Nota final */}
    <div className="border-l-4 border-[#D4AF37]/70 pl-6 mt-10">
      <p className="text-gray-300 leading-relaxed">
        Este panorama global demonstra que o reconhecimento das criptomoedas
        ocorre de forma <strong>gradual e regulada</strong>,
        reforçando a importância de um
        <strong>modelo estratégico sólido</strong>
        como o proposto pela <strong>E-Coin</strong>.
      </p>
    </div>
  </div>
</motion.section>

{/* SECTION 38 — VENEZUELA: COLAPSO, HIPERINFLAÇÃO E A ASCENSÃO DO BITCOIN */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌄 Fundo cinematográfico histórico-económico */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-[#000]/95 to-[#0a0a0a]/100" />
    <div
      className="absolute inset-0 bg-[url('/images/ecoin-venezuela-hiperinflacao-bitcoin-bg.jpg')] bg-cover bg-center opacity-25"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/10 via-transparent to-[#3B82F6]/20 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-5xl mx-auto text-left text-gray-200 space-y-12">
    {/* 📘 Título */}
    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3B82F6] text-center mb-8">
      🇻🇪 Venezuela — Colapso Económico, Hiperinflação e o Bitcoin como Refúgio
    </h2>

    {/* 📉 Contexto */}
    <div className="border-l-4 border-[#EF4444]/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#EF4444] mb-3">
        📉 Contexto: Colapso e hiperinflação
      </h3>
      <p className="text-gray-300 leading-relaxed mb-3">
        Entre <strong>2016 e 2020</strong>, a Venezuela enfrentou uma das
        <strong>piores hiperinflações da história moderna</strong>.
        O Banco Central passou a imprimir grandes quantidades de bolívares
        para cobrir déficits públicos, destruindo o valor da moeda nacional.
      </p>
      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>Inflação anual superior a <strong>1.000.000%</strong>.</li>
        <li>Preços de bens básicos (pão, café, alimentos) mudavam diariamente.</li>
        <li>
          Salários pagos em bolívares perdiam valor
          <strong>antes mesmo de serem utilizados</strong>.
        </li>
      </ul>
    </div>

    {/* 💵 Queda de confiança */}
    <div className="border-l-4 border-[#F59E0B]/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#F59E0B] mb-3">
        💵 Queda de confiança na moeda
      </h3>
      <p className="text-gray-300 leading-relaxed">
        Quando uma população perde a confiança na sua moeda nacional,
        passa a procurar meios alternativos de preservar valor — que:
      </p>
      <ul className="list-disc list-inside text-gray-300 space-y-2 mt-3">
        <li>não dependam do governo,</li>
        <li>possam ser transferidos facilmente,</li>
        <li>e mantenham valor real ao longo do tempo.</li>
      </ul>
      <p className="text-gray-400 leading-relaxed mt-3">
        Esse cenário abriu espaço para duas alternativas principais:
        o <strong>Dólar Americano (USD)</strong> e as
        <strong>criptomoedas</strong>.
      </p>
    </div>

    {/* 🪙 Bitcoin */}
    <div className="border-l-4 border-[#D4AF37]/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#D4AF37] mb-3">
        🪙 Por que o Bitcoin ganhou força
      </h3>
      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>
          Não pode ser impresso arbitrariamente
          (limite fixo de <strong>21 milhões</strong> de unidades).
        </li>
        <li>
          Funciona de forma global,
          mesmo sem acesso ao sistema bancário tradicional.
        </li>
        <li>
          Permite transferências internacionais
          <strong>sem bancos</strong>,
          crucial em um país sob sanções.
        </li>
        <li>
          Tornou-se um
          <strong>refúgio de valor digital</strong>
          frente à desvalorização constante.
        </li>
      </ul>

      <div className="mt-4">
        <p className="text-[#3B82F6] font-semibold mb-2">
          📌 Na prática:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>
            Famílias passaram a receber
            <strong>remessas em Bitcoin</strong>
            de parentes no exterior.
          </li>
          <li>
            Pequenos comerciantes começaram a aceitá-lo
            em lojas, cafés e mercados.
          </li>
          <li>
            Plataformas <strong>P2P</strong>, como a LocalBitcoins,
            tornaram-se extremamente populares.
          </li>
        </ul>
      </div>
    </div>

    {/* 🔎 Fecho */}
    <div className="text-center mt-12">
      <p className="text-[#D4AF37] text-lg sm:text-xl font-semibold mb-3">
        🔎 Lição histórica
      </p>
      <p className="text-gray-300 leading-relaxed">
        O caso venezuelano demonstra que,
        quando a moeda estatal colapsa,
        <strong>a população encontra caminhos alternativos</strong>
        para proteger valor e sobreviver economicamente.
      </p>
      <p className="text-gray-400 italic mt-4">
        “Quando a confiança desaparece, o dinheiro muda.”
      </p>
    </div>
  </div>
</motion.section>

{/* SECTION 40 — STABLECOINS, USDT/USDC E A RESPOSTA DO GOVERNO */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌄 Fundo cinematográfico económico-digital */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-[#000]/95 to-[#0a0a0a]/100" />
    <div
      className="absolute inset-0 bg-[url('/images/ecoin-stablecoins-usdt-usdc-venezuela-bg.jpg')] bg-cover bg-center opacity-25"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/10 via-transparent to-[#3B82F6]/20 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-5xl mx-auto text-left text-gray-200 space-y-12">
    {/* 📘 Título */}
    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3B82F6] text-center mb-8">
      💸 Stablecoins, USDT/USDC e a Reação do Governo Venezuelano
    </h2>

    {/* 💸 Stablecoins */}
    <div className="border-l-4 border-[#22C55E]/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#22C55E] mb-3">
        💸 Por que as stablecoins se tornaram ainda mais importantes
      </h3>
      <p className="text-gray-300 leading-relaxed mb-4">
        Apesar do potencial do Bitcoin como alternativa monetária,
        sua <strong>alta volatilidade</strong> representava um desafio,
        com variações de preço que podiam
        <strong>ultrapassar 10% em um único dia</strong>.
      </p>

      <p className="text-gray-400 leading-relaxed mb-3">
        Nesse contexto, surgiram as <strong>stablecoins</strong> —
        moedas digitais lastreadas em dólar, como
        <strong>USDT</strong> e <strong>USDC</strong>,
        oferecendo vantagens práticas decisivas:
      </p>

      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>
          <strong>Estabilidade de preço</strong>
          (1 USDT ≈ 1 USD).
        </li>
        <li>
          <strong>Transferência digital rápida</strong>,
          via blockchain, sem bancos ou fronteiras.
        </li>
        <li>
          <strong>Proteção contra a inflação local</strong>,
          mantendo valor em dólar.
        </li>
      </ul>

      <div className="mt-4">
        <p className="text-[#3B82F6] font-semibold mb-2">
          📌 Na prática, na Venezuela:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>
            Pessoas e empresas passaram a
            <strong>armazenar valor em USDT</strong>.
          </li>
          <li>
            <strong>Salários começaram a ser pagos</strong>
            em stablecoins.
          </li>
          <li>
            Bolívares eram trocados por USDT
            no <strong>mercado paralelo</strong>.
          </li>
          <li>
            Transações <strong>P2P</strong> via Telegram,
            Binance P2P e WhatsApp tornaram-se comuns.
          </li>
        </ul>
      </div>
    </div>

    {/* ⚙️ Governo */}
    <div className="border-l-4 border-[#EF4444]/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#EF4444] mb-3">
        ⚙️ Como o governo reagiu
      </h3>
      <p className="text-gray-300 leading-relaxed mb-4">
        Diante da perda de controlo monetário,
        o governo venezuelano tentou reagir
        criando sua própria moeda digital estatal,
        chamada <strong>Petro (PTR)</strong>,
        supostamente lastreada em petróleo.
      </p>

      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>
          O Petro <strong>não conquistou confiança pública</strong>,
          por ser totalmente controlado pelo Estado.
        </li>
        <li>
          Não houve adoção significativa,
          enquanto <strong>Bitcoin e USDT continuaram a crescer</strong>.
        </li>
      </ul>

      <p className="text-gray-400 italic mt-4">
        “A confiança não se decreta — constrói-se.”
      </p>
    </div>

    {/* 🔍 Fecho */}
    <div className="text-center mt-12">
      <p className="text-[#D4AF37] text-lg sm:text-xl font-semibold mb-3">
        🔍 Lição estratégica
      </p>
      <p className="text-gray-300 leading-relaxed">
        A experiência venezuelana mostra que,
        em cenários de crise,
        <strong>as pessoas escolhem estabilidade,
        utilidade e confiança</strong> —
        mesmo que fora do sistema estatal.
      </p>
      <p className="text-gray-400 italic mt-4">
        “Não é a moeda que impõe valor — é a confiança coletiva.”
      </p>
    </div>
  </div>
</motion.section>

{/* SECTION 41 — VENEZUELA: RESULTADOS E LIÇÕES ESTRATÉGICAS */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌄 Fundo cinematográfico analítico */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-[#000]/95 to-[#0a0a0a]/100" />
    <div
      className="absolute inset-0 bg-[url('/images/ecoin-venezuela-resultados-licoes-cripto-bg.jpg')] bg-cover bg-center opacity-25"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/10 via-transparent to-[#3B82F6]/20 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-5xl mx-auto text-left text-gray-200 space-y-12">
    {/* 📘 Título */}
    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3B82F6] text-center mb-8">
      📈 Venezuela — Resultados Práticos e Lições Fundamentais
    </h2>

    {/* 📈 Resultados */}
    <div className="border-l-4 border-[#22C55E]/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#22C55E] mb-3">
        📈 Resultados
      </h3>
      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>
          A Venezuela tornou-se um dos países com
          <strong> maior adoção de criptomoedas do mundo</strong>.
        </li>
        <li>
          O uso <strong>prático superou o especulativo</strong>:
          cripto era utilizada para <strong>sobrevivência económica</strong>,
          não apenas investimento.
        </li>
        <li>
          A experiência demonstrou que,
          quando o sistema monetário tradicional colapsa,
          as criptomoedas funcionam como
          <strong> economia paralela real e funcional</strong>.
        </li>
      </ul>
    </div>

    {/* 🧭 O que ensina */}
    <div className="border-l-4 border-[#F59E0B]/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#F59E0B] mb-3">
        🧭 O que isso ensina
      </h3>
      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>
          <strong>Confiança</strong> é o principal pilar de qualquer moeda.
        </li>
        <li>
          Criptomoedas e stablecoins podem
          <strong>sustentar economias em colapso</strong>,
          especialmente onde há baixa confiança institucional
          ou restrições bancárias.
        </li>
        <li>
          Sistemas <strong>descentralizados tornam-se vitais </strong>
          quando o Estado falha em garantir estabilidade monetária.
        </li>
      </ul>
    </div>

    {/* 📚 Histórico e dados */}
    <div className="border-l-4 border-[#3B82F6]/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#3B82F6] mb-3">
        📚 Histórico e contexto recente
      </h3>
      <p className="text-gray-300 leading-relaxed mb-3">
        A Venezuela enfrentou uma grave crise económica e monetária,
        marcada pela forte desvalorização do bolívar,
        inflação galopante e
        <strong> tensão extrema nos sistemas tradicionais de câmbio</strong>.
      </p>
      <p className="text-gray-400 leading-relaxed mb-3">
        Em resposta à instabilidade,
        muitos venezuelanos recorreram às criptomoedas —
        especialmente <strong>stablecoins ligadas ao dólar</strong> —
        como meio de preservação de valor e pagamento mais estável.
      </p>

      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>
          Entre <strong>julho de 2023 e julho de 2024</strong>,
          cerca de <strong>47%</strong> das transações até
          <strong> $10.000</strong> foram realizadas com stablecoins.
        </li>
        <li>
          O volume de transações cripto cresceu
          aproximadamente <strong>110% em 2024</strong>,
          atingindo estimativas de cerca de 
          <strong> $20 biliões</strong>.
        </li>
        <li>
          No ranking global de adoção da <strong>Chainalysis (2024)</strong>,
          a Venezuela ocupou o
          <strong>13.º lugar mundial</strong>.
        </li>
      </ul>
    </div>

    {/* 🔎 Fecho */}
    <div className="text-center mt-12">
      <p className="text-[#D4AF37] text-lg sm:text-xl font-semibold mb-3">
        🔎 Síntese estratégica
      </p>
      <p className="text-gray-300 leading-relaxed">
        O caso venezuelano confirma que,
        quando a moeda estatal perde credibilidade,
        <strong> as pessoas escolhem sistemas que funcionam</strong>,
        independentemente da sua origem.
      </p>
      <p className="text-gray-400 italic mt-4">
        “A economia real adapta-se antes da política.”
      </p>
    </div>
  </div>
</motion.section>

{/* SECTION 42 — USOS, IMPLICAÇÕES E LIÇÕES PARA A E-COIN | TRANSIÇÃO PARA A NIGÉRIA */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌄 Fundo cinematográfico social-económico */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-[#000]/95 to-[#0a0a0a]/100" />
    <div
      className="absolute inset-0 bg-[url('/images/ecoin-usos-implicacoes-licoes-nigeria-bg.jpg')] bg-cover bg-center opacity-25"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/10 via-transparent to-[#3B82F6]/20 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-5xl mx-auto text-left text-gray-200 space-y-12">
    {/* 📘 Título */}
    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3B82F6] text-center mb-8">
      🔎 Usos Reais, Implicações e Lições Estratégicas
    </h2>

    {/* 💸 Usos e implicações */}
    <div className="border-l-4 border-[#22C55E]/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#22C55E] mb-3">
        💸 Usos e implicações
      </h3>
      <p className="text-gray-300 leading-relaxed mb-3">
        Em contextos de crise monetária, as criptomoedas passaram a ser utilizadas
        como ferramentas práticas do dia a dia, especialmente para
        <strong> envio de remessas</strong> e
        <strong>pagamento de bens e serviços</strong>,
        onde o bolívar ou o dólar eram difíceis de obter
        ou estavam sujeitos a controles rigorosos.
      </p>
      <p className="text-gray-400 leading-relaxed">
        As <strong>stablecoins</strong> emergiram como um verdadeiro
        <strong>“dólar digital”</strong> dentro da economia venezuelana,
        com uso crescente por empresas e indivíduos
        como reserva de valor e meio de troca funcional.
      </p>
    </div>

    {/* 🧭 Lições para a E-Coin */}
    <div className="border-l-4 border-[#F59E0B]/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#F59E0B] mb-3">
        🧭 Lições para a E-Coin
      </h3>
      <p className="text-gray-300 leading-relaxed mb-3">
        Este caso demonstra que, em ambientes de
        <strong>hiperinflação</strong> ou de
        <strong>baixa confiança monetária</strong>,
        os cripto-ativos podem tornar-se instrumentos de
        <strong>substituição</strong> ou de
        <strong>“escape” de valor</strong>.
      </p>
      <p className="text-gray-400 leading-relaxed mb-3">
        Contudo, também evidencia riscos relevantes:
        forte dependência do
        <strong>contexto regulatório</strong>,
        da <strong>infraestrutura tecnológica</strong>
        (internet, acesso a carteiras)
        e da <strong>vulnerabilidade a sanções externas</strong>.
      </p>
      <p className="text-gray-300 leading-relaxed">
        Para a <strong>E-Coin</strong>, especialmente em jurisdições instáveis
        ou vulneráveis, torna-se essencial preparar
        <strong>mecanismos de adoção gradual</strong>,
        <strong>educação contínua dos utilizadores</strong>
        e <strong>planos de contingência</strong> —
        exatamente como já está a ser feito através da
        <strong>elucidação e formação da comunidade</strong>.
      </p>
    </div>

    {/* 🇳🇬 Nigéria */}
    <div className="border-l-4 border-[#16A34A]/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#16A34A] mb-3">
        🇳🇬 Nigéria — Histórico e contexto
      </h3>
      <p className="text-gray-300 leading-relaxed mb-3">
        A Nigéria destaca-se como um dos países africanos
        com <strong>maior taxa de adoção de criptomoedas</strong>.
        Em <strong>2024</strong>, figurou entre os líderes mundiais
        em proporção da população que possui ou utiliza cripto-ativos.
      </p>
      <p className="text-gray-400 leading-relaxed">
        Os principais fatores incluem a
        <strong>depreciação contínua da moeda local (naira)</strong>,
        limitações no sistema bancário tradicional,
        uma <strong>população jovem</strong>
        e elevada penetração de
        <strong>telemóveis e internet</strong>,
        criando um ambiente propício para
        <strong>soluções digitais de valor</strong>.
      </p>
    </div>

    {/* 🔎 Fecho */}
    <div className="text-center mt-12">
      <p className="text-[#D4AF37] text-lg sm:text-xl font-semibold mb-3">
        🔎 Ponte estratégica
      </p>
      <p className="text-gray-300 leading-relaxed">
        A transição da Venezuela para a Nigéria mostra que,
        embora os contextos sejam distintos,
        <strong> a busca por estabilidade, acesso e confiança</strong>
        é um denominador comum que orienta
        a adoção de criptomoedas em diferentes realidades.
      </p>
      <p className="text-gray-400 italic mt-4">
        “Onde há necessidade real, a tecnologia encontra o seu propósito.”
      </p>
    </div>
  </div>
</motion.section>

{/* SECTION 43 — NIGÉRIA: USOS, IMPLICAÇÕES E LIÇÕES PARA A E-COIN */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌄 Fundo cinematográfico fintech-africano */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-[#000]/95 to-[#0a0a0a]/100" />
    <div
      className="absolute inset-0 bg-[url('/images/ecoin-nigeria-usos-implicacoes-p2p-regulacao-bg.jpg')] bg-cover bg-center opacity-25"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/10 via-transparent to-[#22C55E]/20 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-5xl mx-auto text-left text-gray-200 space-y-12">
    {/* 📘 Título */}
    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#22C55E] text-center mb-8">
      🇳🇬 Nigéria — Usos Práticos, Implicações e Lições Estratégicas
    </h2>

    {/* 💸 Usos e implicações */}
    <div className="border-l-4 border-[#22C55E]/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#22C55E] mb-3">
        💸 Usos e implicações
      </h3>
      <p className="text-gray-300 leading-relaxed mb-3">
        Na Nigéria, observa-se um uso intensivo de
        <strong> plataformas P2P (peer-to-peer)</strong>
        para a troca de stablecoins ou criptomoedas por moeda local,
        bem como para <strong>envio de remessas</strong>
        e <strong>preservação de valor fora do sistema bancário</strong>.
      </p>
      <p className="text-gray-400 leading-relaxed">
        Este modelo permite contornar barreiras tradicionais,
        oferecendo acesso direto a valor digital em um contexto
        onde os serviços financeiros formais
        nem sempre atendem à totalidade da população.
      </p>
    </div>

    {/* ⚖️ Regulação */}
    <div className="border-l-4 border-[#F59E0B]/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#F59E0B] mb-3">
        ⚖️ Regulação em evolução
      </h3>
      <p className="text-gray-300 leading-relaxed mb-3">
        O ambiente regulatório permanece
        <strong>em constante evolução</strong>,
        com preocupações das autoridades relacionadas ao uso de cripto
        em <strong>operações não reguladas</strong>,
        <strong>especulação cambial</strong>
        e potenciais riscos sistémicos.
      </p>
      <p className="text-gray-400 leading-relaxed">
        Mudanças rápidas de política pública
        podem impactar diretamente
        o funcionamento de plataformas, liquidez
        e a adoção generalizada.
      </p>
    </div>

    {/* 🧭 Lições para a E-Coin */}
    <div className="border-l-4 border-[#3B82F6]/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#3B82F6] mb-3">
        🧭 Lições para a E-Coin
      </h3>
      <p className="text-gray-300 leading-relaxed mb-3">
        A experiência nigeriana demonstra que,
        quando os métodos tradicionais de acesso a valor
        e remoção de barreiras bancárias são frágeis,
        <strong>a adoção de cripto-ativos pode emergir com força</strong>.
      </p>
      <p className="text-gray-400 leading-relaxed mb-3">
        Para a <strong>E-Coin</strong>, em Moçambique ou em outros países africanos,
        torna-se estratégico observar e adaptar
        <strong>modelos P2P</strong> e o uso de
        <strong>stablecoins</strong>
        dentro de um ecossistema fintech local.
      </p>
      <p className="text-gray-300 leading-relaxed">
        Conclui-se também a necessidade de
        <strong>monitorizar a regulamentação de forma contínua</strong>,
        uma vez que alterações rápidas de política
        podem impactar diretamente
        o modelo de negócio da <strong>E-Coin</strong>.
      </p>
    </div>

    {/* 🔎 Fecho */}
    <div className="text-center mt-12">
      <p className="text-[#D4AF37] text-lg sm:text-xl font-semibold mb-3">
        🔎 Diretriz estratégica
      </p>
      <p className="text-gray-300 leading-relaxed">
        O equilíbrio entre inovação,
        conformidade regulatória
        e educação do utilizador
        será determinante para a
        <strong>sustentabilidade da E-Coin em África</strong>.
      </p>
      <p className="text-gray-400 italic mt-4">
        “A adaptação contínua é a base da sobrevivência financeira.”
      </p>
    </div>
  </div>
</motion.section>

{/* SECTION 44 — TURQUIA E QUÉNIA: CONTEXTO, USOS E LIÇÕES */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌄 Fundo cinematográfico macroeconómico */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-[#000]/95 to-[#0a0a0a]/100" />
    <div
      className="absolute inset-0 bg-[url('/images/ecoin-turquia-quenia-adocao-cripto-bg.jpg')] bg-cover bg-center opacity-25"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/10 via-transparent to-[#22C55E]/20 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-5xl mx-auto text-left text-gray-200 space-y-12">
    {/* 📘 Título */}
    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3B82F6] text-center mb-8">
      🌍 Turquia e Quénia — Inflação, Adoção Cripto e Lições Estratégicas
    </h2>

    {/* 🇹🇷 Turquia */}
    <div className="border-l-4 border-[#EF4444]/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#EF4444] mb-3">
        🇹🇷 Turquia — Histórico e contexto
      </h3>
      <p className="text-gray-300 leading-relaxed mb-3">
        A Turquia tem enfrentado
        <strong>elevada inflação</strong> e
        <strong>forte desvalorização da lira turca</strong>,
        o que levou muitos cidadãos a recorrerem
        às <strong>criptomoedas como mecanismo de proteção de valor</strong>.
      </p>
      <p className="text-gray-400 leading-relaxed">
        Estudos indicam que uma
        <strong>parcela significativa da população</strong>
        investiu ou utilizou cripto-ativos,
        motivada por fatores macroeconómicos como
        inflação persistente e instabilidade monetária.
      </p>

      <div className="mt-4">
        <p className="text-[#F59E0B] font-semibold mb-2">
          💸 Usos e implicações
        </p>
        <p className="text-gray-300 leading-relaxed">
          Em contextos de perda de valor da moeda nacional,
          o uso de cripto torna-se
          <strong>funcional e não apenas especulativo</strong>,
          sendo utilizado para
          <strong>proteger poupanças</strong>
          e realizar
          <strong>pagamentos ou transferências internacionais</strong>.
        </p>
        <p className="text-gray-400 leading-relaxed mt-2">
          A combinação de
          <strong>população jovem tecnicamente capacitada</strong>,
          acesso móvel e
          mecanismos digitais de pagamento
          favorece a adoção em larga escala.
        </p>
      </div>

      <div className="mt-4">
        <p className="text-[#3B82F6] font-semibold mb-2">
          🧭 Lições para o projeto
        </p>
        <p className="text-gray-300 leading-relaxed">
          O caso turco demonstra que
          <strong>fatores macroeconómicos</strong>
          como inflação e desvalorização
          são fortes impulsionadores da adoção cripto —
          uma variável essencial a considerar
          ao definir mercados-alvo.
        </p>
        <p className="text-gray-400 leading-relaxed mt-2">
          Modelos de cripto e fintech podem
          <strong>complementar serviços financeiros tradicionais</strong>
          quando estes falham em oferecer
          estabilidade ou valor real.
        </p>
      </div>
    </div>

    {/* 🇰🇪 Quénia */}
    <div className="border-l-4 border-[#22C55E]/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#22C55E] mb-3">
        🇰🇪 Quénia — Histórico e contexto
      </h3>
      <p className="text-gray-300 leading-relaxed mb-3">
        O Quénia apresenta uma das
        <strong>maiores taxas de adoção de criptomoedas em África</strong>.
        Em <strong>2024</strong>, o país figurou entre os que
        <strong>mais cresceram em volume de transações cripto</strong>.
      </p>
      <p className="text-gray-400 leading-relaxed mb-3">
        Um relatório da <strong>TRM Labs</strong> indicou que
        o Quénia
        <strong>duplicou o volume de transações</strong>
        entre 2023 e 2024.
      </p>
      <p className="text-gray-400 leading-relaxed">
        Segundo a <strong>Chainalysis</strong>,
        o país ocupou a
        <strong>28.ª posição global</strong>
        no ranking de adoção em 2024.
      </p>

      <div className="mt-4">
        <p className="text-[#D4AF37] font-semibold mb-2">
          🏦 Envolvimento do setor bancário
        </p>
        <p className="text-gray-300 leading-relaxed">
          Um inquérito do
          <strong>Central Bank of Kenya (2024)</strong>
          revelou que
          <strong>31% dos bancos</strong>
          consideravam
          <strong>altamente provável</strong>
          o envolvimento com ativos virtuais,
          sinalizando uma mudança estrutural
          no sistema financeiro local.
        </p>
      </div>
    </div>

    {/* 🔎 Fecho */}
    <div className="text-center mt-12">
      <p className="text-[#D4AF37] text-lg sm:text-xl font-semibold mb-3">
        🔎 Síntese estratégica
      </p>
      <p className="text-gray-300 leading-relaxed">
        Turquia e Quénia demonstram que,
        apesar de contextos distintos,
        <strong>a instabilidade monetária,
        a juventude digital
        e a inovação financeira</strong>
        convergem para impulsionar
        a adoção de cripto-ativos.
      </p>
      <p className="text-gray-400 italic mt-4">
        “Onde a moeda falha, a tecnologia responde.”
      </p>
    </div>
  </div>
</motion.section>

{/* SECTION 45 — QUÉNIA: MOTIVAÇÕES, REGULAÇÃO E LIÇÕES PARA A E-COIN */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌄 Fundo cinematográfico fintech-africano */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-[#000]/95 to-[#0a0a0a]/100" />
    <div
      className="absolute inset-0 bg-[url('/images/ecoin-kenya-mobile-money-cripto-regulacao-bg.jpg')] bg-cover bg-center opacity-25"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/10 via-transparent to-[#22C55E]/20 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-5xl mx-auto text-left text-gray-200 space-y-12">
    {/* 📘 Título */}
    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#22C55E] text-center mb-8">
      🇰🇪 Quénia — Mobile Money, Cripto e Diretrizes Estratégicas
    </h2>

    {/* 💡 Motivações e usos */}
    <div className="border-l-4 border-[#22C55E]/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#22C55E] mb-3">
        💡 Motivações e usos
      </h3>
      <p className="text-gray-300 leading-relaxed mb-3">
        O Quénia beneficia de uma
        <strong>infraestrutura robusta de mobile money</strong>,
        liderada por soluções como o <strong>M-Pesa</strong>,
        o que facilita a integração natural de
        <strong>cripto-ativos e pagamentos digitais</strong>.
      </p>
      <p className="text-gray-400 leading-relaxed mb-3">
        Neste contexto, as criptomoedas são utilizadas como
        <strong>alternativa financeira</strong>
        em ambientes onde o acesso bancário é limitado,
        bem como para
        <strong>pagamentos entre jovens</strong>,
        <strong>envio de remessas</strong>
        e <strong>transações de pequeno valor</strong>.
      </p>
      <p className="text-gray-300 leading-relaxed">
        Este padrão realça fortemente a função de
        <strong>inclusão financeira</strong>,
        mais do que a especulação.
      </p>
    </div>

    {/* ⚖️ Regulação e implicações */}
    <div className="border-l-4 border-[#F59E0B]/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#F59E0B] mb-3">
        ⚖️ Regulação e implicações
      </h3>
      <p className="text-gray-300 leading-relaxed mb-3">
        O governo do Quénia tem avançado no sentido de
        <strong>regular formalmente os ativos virtuais</strong>.
        Em <strong>dezembro de 2024</strong>,
        foi apresentado um projeto de política nacional sobre
        <strong>Virtual Assets e Virtual Asset Service Providers (VASPs)</strong>.
      </p>
      <p className="text-gray-400 leading-relaxed mb-3">
        No mesmo ano, o Quénia foi incluído,
        pela primeira vez, numa
        <strong>“grey list” da Financial Action Task Force (FATF)</strong>,
        devido a preocupações com
        <strong>lavagem de dinheiro via cripto</strong>.
      </p>
      <p className="text-gray-300 leading-relaxed">
        Este fator acende alertas importantes para
        <strong>regulação futura mais rigorosa</strong>,
        algo que, embora desafiante,
        também sinaliza maturação do ecossistema.
      </p>
    </div>

    {/* 🧭 Lições para a E-Coin */}
    <div className="border-l-4 border-[#3B82F6]/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#3B82F6] mb-3">
        🧭 Lições para a E-Coin
      </h3>
      <p className="text-gray-300 leading-relaxed mb-3">
        Para o projeto <strong>E-Coin</strong>,
        o Quénia representa um
        <strong>modelo africano de referência</strong>,
        combinando alta adoção de fintech,
        cripto-ativos e
        uma população jovem digitalmente ativa.
      </p>
      <p className="text-gray-400 leading-relaxed mb-3">
        Em mercados como Moçambique ou similares,
        destacam-se lições claras:
      </p>
      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>
          Priorizar uma abordagem
          <strong>mobile-first</strong>,
          integrada a fintechs locais
          e acompanhada de
          <strong>literacia digital</strong>.
        </li>
        <li>
          Focar em
          <strong>micropagamentos</strong>,
          envio de valor e
          integração com serviços locais,
          gerando impacto real no quotidiano.
        </li>
        <li>
          Reconhecer que a
          <strong>regulação está em construção</strong>:
          há oportunidade, mas também risco,
          exigindo
          <strong>antecipação de conformidade</strong>
          (AML/KYC, licenças VASP)
          desde o início.
        </li>
      </ul>
    </div>

    {/* 🔎 Fecho */}
    <div className="text-center mt-12">
      <p className="text-[#D4AF37] text-lg sm:text-xl font-semibold mb-3">
        🔎 Diretriz-chave
      </p>
      <p className="text-gray-300 leading-relaxed">
        O sucesso em África passa por alinhar
        <strong>tecnologia, inclusão e conformidade</strong>
        — transformando risco regulatório
        em vantagem estratégica.
      </p>
      <p className="text-gray-400 italic mt-4">
        “Onde há inclusão, a inovação cria raízes.”
      </p>
    </div>
  </div>
</motion.section>

{/* SECTION 46 — ÁFRICA DO SUL: REGULAÇÃO, INSTITUCIONALIZAÇÃO E LIÇÕES */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌄 Fundo cinematográfico institucional-regulatório */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-[#000]/95 to-[#0a0a0a]/100" />
    <div
      className="absolute inset-0 bg-[url('/images/ecoin-africa-do-sul-regulacao-cripto-institucional-bg.jpg')] bg-cover bg-center opacity-25"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/10 via-transparent to-[#3B82F6]/20 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-5xl mx-auto text-left text-gray-200 space-y-12">
    {/* 📘 Título */}
    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3B82F6] text-center mb-8">
      🇿🇦 África do Sul — Regulação, Institucionalização e Diretrizes Estratégicas
    </h2>

    {/* 🇿🇦 Histórico e contexto */}
    <div className="border-l-4 border-[#3B82F6]/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#3B82F6] mb-3">
        🇿🇦 Histórico e contexto
      </h3>
      <p className="text-gray-300 leading-relaxed mb-3">
        A África do Sul é uma das
        <strong>maiores economias da África Austral</strong>
        e tem avançado de forma consistente
        para a <strong>institucionalização dos ativos digitais</strong>.
      </p>
      <p className="text-gray-400 leading-relaxed mb-3">
        Desde <strong>abril de 2025</strong>,
        o país passou a aplicar a
        <strong>“Travel Rule”</strong>
        para ativos cripto,
        alinhando-se às
        <strong>normas internacionais de compliance</strong>.
      </p>
      <p className="text-gray-400 leading-relaxed">
        Relatórios indicam que o regulador financeiro
        (<strong>Financial Sector Conduct Authority — FSCA</strong>)
        aprovou <strong>59 licenças</strong>
        para negócios de criptoativos em <strong>2024</strong>,
        sinalizando maturidade regulatória.
      </p>
    </div>

    {/* 💡 Motivações e usos */}
    <div className="border-l-4 border-[#22C55E]/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#22C55E] mb-3">
        💡 Motivações e usos
      </h3>
      <p className="text-gray-300 leading-relaxed mb-3">
        Na África do Sul, o uso de criptomoedas
        estende-se para além da especulação,
        abrangendo
        <strong>investimento</strong>,
        <strong>serviços financeiros estruturados</strong>
        e <strong>utilização institucional</strong>.
      </p>
      <p className="text-gray-400 leading-relaxed">
        Observa-se integração com
        <strong>plataformas de trading</strong>,
        crescimento de
        <strong>fintechs reguladas</strong>
        e interesse em
        <strong>serviços de valor acrescentado</strong>,
        como custódia e mercados secundários.
      </p>
    </div>

    {/* ⚖️ Regulação e implicações */}
    <div className="border-l-4 border-[#F59E0B]/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#F59E0B] mb-3">
        ⚖️ Regulação e implicações
      </h3>
      <p className="text-gray-300 leading-relaxed mb-3">
        O país tem reforçado a
        <strong>supervisão regulatória</strong>,
        implementando
        <strong>licenciamento formal</strong>
        e normas robustas de
        <strong>compliance</strong>
        para serviços de ativos digitais.
      </p>
      <p className="text-gray-400 leading-relaxed">
        A aplicação da
        <strong>Travel Rule</strong>,
        incluindo recolha de dados de
        remetente e destinatário
        para transações acima de certos valores,
        demonstra a transição de um modelo
        <strong>informal para um ambiente regulado</strong>.
      </p>
    </div>

    {/* 🧭 Lições para a AltaTec / E-Coin */}
    <div className="border-l-4 border-[#D4AF37]/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#D4AF37] mb-3">
        🧭 Lições para a EdenKingDom Corporation e a E-Coin
      </h3>
      <p className="text-gray-300 leading-relaxed mb-3">
        Para a <strong>EKD Corporation</strong>,
        a África do Sul serve como
        <strong> benchmark regional </strong> 
        de como a regulação tende a evoluir:
        não apenas aceitação de cripto,
        mas <strong>framework regulatória,
        supervisão ativa e integração institucional</strong>.
      </p>
      <p className="text-gray-400 leading-relaxed mb-3">
        Se o modelo da <strong>E-Coin </strong>
        for implementado em Moçambique
        ou expandido para a África Austral,
        será estratégico antecipar
        <strong> conformidade regulatória </strong>
        desde o início.
      </p>
      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>
          Abertura futura a
          <strong> investidores institucionais</strong>.
        </li>
        <li>
          Expansão para
          <strong> serviços de trading, custódia
          e mercado secundário</strong>.
        </li>
        <li>
          <strong>Conformidade como diferencial competitivo</strong>,
          reduzindo riscos de interrupção
          ou perceção de informalidade.
        </li>
      </ul>
    </div>

    {/* 🔎 Fecho */}
    <div className="text-center mt-12">
      <p className="text-[#D4AF37] text-lg sm:text-xl font-semibold mb-3">
        🔎 Direção estratégica
      </p>
      <p className="text-gray-300 leading-relaxed">
        Mercados africanos maduros mostram que
        <strong> estar pronto para a regulação
        não é um obstáculo,
        mas um acelerador de crescimento sustentável</strong>.
      </p>
      <p className="text-gray-400 italic mt-4">
        “Regulação não trava inovação — estrutura-a.”
      </p>
    </div>
  </div>
</motion.section>

{/* SECTION 47 — RELATÓRIO MOÇAMBIQUE: CONTEXTO ACTUAL */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌄 Fundo cinematográfico institucional-moçambicano */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-[#000]/95 to-[#0a0a0a]/100" />
    <div
      className="absolute inset-0 bg-[url('/images/ecoin-mocambique-contexto-cripto-relatorio-bg.jpg')] bg-cover bg-center opacity-25"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/10 via-transparent to-[#22C55E]/20 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-5xl mx-auto text-left text-gray-200 space-y-12">
    {/* 📘 Título */}
    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#22C55E] text-center mb-8">
      🇲🇿 Relatório Personalizado para Moçambique — Cripto-Ativos & E-Coin
    </h2>

    {/* 📚 Contexto actual */}
    <div className="border-l-4 border-[#22C55E]/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#22C55E] mb-3">
        1️⃣ Contexto actual em Moçambique
      </h3>

      <p className="text-gray-300 leading-relaxed mb-3">
        Em Moçambique, ainda
        <strong>não existe um enquadramento legal específico</strong>
        que regule cripto-ativos ou NFTs.
        Estes instrumentos encontram-se,
        na prática, numa zona
        <strong>legalmente “cinzenta”</strong>.
      </p>

      <p className="text-gray-400 leading-relaxed mb-3">
        O <strong>Banco de Moçambique</strong>
        regula transações em divisas estrangeiras
        e controlos cambiais ao abrigo da
        <strong>Lei n.º 11/2009</strong>
        e outros diplomas,
        o que pode
        <strong>influenciar indiretamente</strong>
        operações relacionadas com cripto-ativos.
      </p>

      <p className="text-gray-300 leading-relaxed mb-3">
        Em termos de
        <strong>adoção e infraestrutura</strong>,
        estima-se que apenas cerca de
        <strong>21% da população</strong>
        tenha acesso regular e confiável à Internet,
        o que representa uma
        <strong>limitação estrutural relevante</strong>
        para soluções digitais em larga escala.
      </p>

      <p className="text-gray-400 leading-relaxed mb-3">
        Estudos e observações locais indicam que
        o uso de <strong>Bitcoin</strong> e outros ativos digitais
        ainda se encontra numa
        <strong>fase inicial</strong>,
        geralmente associado a
        investimento ou
        preservação de valor,
        com níveis elevados de cautela.
      </p>

      <p className="text-gray-300 leading-relaxed">
        Há também indicações de que
        <strong>pagamentos com stablecoins</strong>
        (como <strong>USDT</strong>)
        começam a ganhar atenção,
        sobretudo para
        <strong>remessas</strong> e
        <strong>pagamentos de maior valor</strong>,
        embora ainda
        <strong>não façam parte do quotidiano massivo</strong>.
      </p>
    </div>

    {/* 🔎 Fecho */}
    <div className="text-center mt-12">
      <p className="text-[#D4AF37] text-lg sm:text-xl font-semibold mb-3">
        🔎 Enquadramento inicial
      </p>
      <p className="text-gray-300 leading-relaxed">
        O cenário moçambicano apresenta
        <strong>restrições reais</strong>,
        mas também
        <strong>espaço estratégico</strong>
        para modelos bem estruturados,
        educacionais e preparados
        para evolução regulatória —
        base sobre a qual a
        <strong>E-Coin</strong>
        pode ser construída.
      </p>
      <p className="text-gray-400 italic mt-4">
        “Onde o enquadramento é incipiente, a preparação faz a diferença.”
      </p>
    </div>
  </div>
</motion.section>

{/* SECTION 48 — MOÇAMBIQUE: OPORTUNIDADES PARA A E-COIN */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌄 Fundo cinematográfico inovação-social */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-[#000]/95 to-[#0a0a0a]/100" />
    <div
      className="absolute inset-0 bg-[url('/images/ecoin-mocambique-oportunidades-inclusao-pilotos-bg.jpg')] bg-cover bg-center opacity-25"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/10 via-transparent to-[#22C55E]/20 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-5xl mx-auto text-left text-gray-200 space-y-12">
    {/* 📘 Título */}
    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#22C55E] text-center mb-8">
      🇲🇿 Oportunidades Estratégicas para a E-Coin em Moçambique
    </h2>

    {/* 💡 Inclusão financeira */}
    <div className="border-l-4 border-[#22C55E]/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#22C55E] mb-3">
        💡 Inclusão financeira
      </h3>
      <p className="text-gray-300 leading-relaxed">
        Dado o <strong>baixo nível de bancarização</strong> e a
        <strong>fiabilidade limitada dos sistemas tradicionais</strong>,
        existe espaço para a <strong>EdenKingDom Corporation</strong>
        introduzir soluções inovadoras de
        <strong>pagamento digital</strong> e
        <strong>serviços baseados em blockchain ou cripto</strong>,
        capazes de alcançar
        <strong>populações sub-servidas</strong>.
      </p>
    </div>

    {/* 🌍 Remessas e pagamentos transfronteiriços */}
    <div className="border-l-4 border-[#3B82F6]/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#3B82F6] mb-3">
        🌍 Pagamentos transfronteiriços e remessas
      </h3>
      <p className="text-gray-300 leading-relaxed">
        A utilização de <strong>cripto-ativos ou stablecoins</strong>
        para <strong>remessas</strong> e
        <strong>pagamentos internacionais</strong>
        pode reduzir significativamente
        <strong>custos e tempo de processamento</strong>,
        sendo especialmente relevante
        em <strong>zonas rurais</strong>
        ou com menor infraestrutura financeira.
      </p>
    </div>

    {/* 🧩 Modelo serviço + tokenização */}
    <div className="border-l-4 border-[#F59E0B]/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#F59E0B] mb-3">
        🧩 Modelo “serviço como retorno” + tokenização
      </h3>
      <p className="text-gray-300 leading-relaxed mb-3">
        Modelos como os serviços da E-Social <strong> Entrepreneur Empower Division </strong> ou
        <strong> “Buy Your Seat” </strong>
        podem integrar um token como a
        <strong> E-Coin</strong>,
        funcionando como
        <strong> meio de valor</strong>,
        <strong> recompensa </strong>
        ou <strong> participação indireta </strong>.
      </p>
      <p className="text-gray-400 leading-relaxed">
        Existe aqui uma oportunidade clara
        para ser <strong> pioneiro </strong>
        num ambiente ainda
        <strong> pouco regulamentado </strong>,
        desde que acompanhado de
        educação e responsabilidade.
      </p>
    </div>

    {/* 🧪 Pilotos e inovação */}
    <div className="border-l-4 border-[#D4AF37]/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#D4AF37] mb-3">
        🧪 Pilotos e inovação local
      </h3>
      <p className="text-gray-300 leading-relaxed">
        A adoção de <strong> zonas piloto </strong>
        — como <strong> Nhamatanda </strong> —
        permite testar modelos de
        <strong> tokens, microfinanças e serviços digitais </strong>
        antes de uma expansão nacional.
      </p>
      <p className="text-gray-400 leading-relaxed mt-2">
        Este método reduz risco,
        gera aprendizagem prática
        e aproveita o contexto atual
        de <strong> flexibilidade regulatória </strong>.
      </p>
    </div>

    {/* 🔎 Fecho */}
    <div className="text-center mt-12">
      <p className="text-[#D4AF37] text-lg sm:text-xl font-semibold mb-3">
        🔎 Visão estratégica
      </p>
      <p className="text-gray-300 leading-relaxed">
        Moçambique oferece um cenário onde
        <strong> inovação responsável </strong>,
        <strong> impacto social </strong>
        e <strong> tecnologia financeira </strong>
        podem convergir —
        posicionando a <strong> E-Coin </strong>
        como instrumento de valor real e utilidade prática.
      </p>
      <p className="text-gray-400 italic mt-4">
        “Começar pequeno, aprender rápido e escalar com solidez.”
      </p>
    </div>
  </div>
</motion.section>

{/* SECTION 49 — MOÇAMBIQUE: RISCOS E PONTOS DE ATENÇÃO */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌄 Fundo cinematográfico prudencial */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-[#000]/95 to-[#0a0a0a]/100" />
    <div
      className="absolute inset-0 bg-[url('/images/ecoin-mocambique-riscos-compliance-governanca-bg.jpg')] bg-cover bg-center opacity-25"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#EF4444]/10 via-transparent to-[#D4AF37]/20 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-5xl mx-auto text-left text-gray-200 space-y-12">
    {/* 📘 Título */}
    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#EF4444] text-center mb-8">
      🇲🇿 Riscos & Pontos de Atenção para a E-Coin
    </h2>

    {/* ⚖️ Incerteza regulatória */}
    <div className="border-l-4 border-[#EF4444]/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#EF4444] mb-3">
        ⚖️ Incerteza regulatória
      </h3>
      <p className="text-gray-300 leading-relaxed">
        A ausência de um
        <strong> marco legal específico </strong>
        para cripto-ativos em Moçambique
        implica o risco de surgirem
        <strong> regras mais rígidas de forma inesperada </strong>.
      </p>
      <p className="text-gray-400 leading-relaxed mt-2">
        Torna-se essencial
        <strong> antecipar requisitos de compliance </strong>
        (KYC/AML, licenciamento, relatórios),
        mitigando impactos regulatórios futuros
        sobre o modelo da <strong> E-Coin </strong>.
      </p>
    </div>

    {/* 🌐 Infraestrutura limitada */}
    <div className="border-l-4 border-[#3B82F6]/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#3B82F6] mb-3">
        🌐 Infraestrutura limitada
      </h3>
      <p className="text-gray-300 leading-relaxed">
        O número elevado de pessoas
        sem acesso a
        <strong> internet de qualidade </strong>
        ou que utilizam
        <strong> smartphones antigos </strong>
        limita a adoção rápida
        de soluções digitais avançadas.
      </p>
      <p className="text-gray-400 leading-relaxed mt-2">
        Estratégias
        <strong> mobile-light </strong>,
        interfaces simples
        e soluções híbridas
        serão fundamentais.
      </p>
    </div>

    {/* 📉 Confiança e volatilidade */}
    <div className="border-l-4 border-[#F59E0B]/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#F59E0B] mb-3">
        📉 Confiança, volatilidade e educação
      </h3>
      <p className="text-gray-300 leading-relaxed">
        O uso de cripto-ativos como
        <strong>mecanismo de valor</strong>
        exige
        <strong> educação contínua dos utilizadores </strong>,
        uma vez que a
        volatilidade,
        a falta de familiaridade
        e os riscos de fraude
        podem comprometer a aceitação.
      </p>
    </div>

    {/* 💱 Controles cambiais */}
    <div className="border-l-4 border-[#22C55E]/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#22C55E] mb-3">
        💱 Controles cambiais
      </h3>
      <p className="text-gray-300 leading-relaxed">
        O <strong> Banco de Moçambique </strong>
        exerce controlo rigoroso
        sobre transações cambiais.
        Qualquer operação envolvendo
        <strong> valor internacional </strong>
        ou cripto-ativos
        pode colidir com esta estrutura.
      </p>
      <p className="text-gray-400 leading-relaxed mt-2">
        Será indispensável
        <strong> aconselhamento jurídico local </strong>
        para estruturar operações
        em conformidade.
      </p>
    </div>

    {/* 🔐 Segurança e fraude */}
    <div className="border-l-4 border-[#D4AF37]/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#D4AF37] mb-3">
        🔐 Segurança e fraude
      </h3>
      <p className="text-gray-300 leading-relaxed">
        Em ambientes emergentes,
        os riscos de
        <strong> fraude </strong>,
        <strong> contabilidade informal </strong>
        e
        <strong> utilização indevida de tokens </strong>
        tendem a ser mais elevados.
      </p>
      <p className="text-gray-400 leading-relaxed mt-2">
        Implementar
        <strong> governança aberta </strong>,
        mecanismos de
        <strong> segurança robusta </strong>
        e transparência
        será um
        <strong> diferencial competitivo </strong>
        para a <strong> E-Coin </strong>.
      </p>
    </div>

    {/* 🔎 Fecho */}
    <div className="text-center mt-12">
      <p className="text-[#D4AF37] text-lg sm:text-xl font-semibold mb-3">
        🔎 Princípio de prudência
      </p>
      <p className="text-gray-300 leading-relaxed">
        O sucesso da <strong> E-Coin </strong>
        em Moçambique dependerá
        da capacidade de
        <strong> equilibrar inovação com prudência </strong>,
        antecipando riscos
        antes que se tornem obstáculos.
      </p>
      <p className="text-gray-400 italic mt-4">
        “Crescer com cautela é crescer para durar.”
      </p>
    </div>
  </div>
</motion.section>

{/* SECTION 50 — MOÇAMBIQUE: ROADMAP DA E-COIN */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌄 Fundo cinematográfico de planeamento estratégico */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-[#000]/95 to-[#0a0a0a]/100" />
    <div
      className="absolute inset-0 bg-[url('/images/ecoin-mocambique-roadmap-fases-implementacao-bg.jpg')] bg-cover bg-center opacity-25"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/10 via-transparent to-[#22C55E]/20 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-6xl mx-auto text-left text-gray-200 space-y-14">
    {/* 📘 Título */}
    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#22C55E] text-center mb-8">
      🇲🇿 Roadmap da E-Coin Proposto para Moçambique  
      <span className="block text-sm sm:text-base text-gray-400 mt-2">
        (E-Coin já operacional a nível global)
      </span>
    </h2>

    {/* 🧭 Fase 1 */}
    <div className="border-l-4 border-[#3B82F6]/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#3B82F6] mb-4">
        🧭 Fase 1 — Diagnóstico & Preparação (0–6 meses)
      </h3>
      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>
          <strong> Avaliação jurídica: </strong> contratação de consultoria local
          para mapear implicações legais de cripto-ativos e ativos digitais
          em Moçambique.
        </li>
        <li>
          <strong> Educação & sensibilização: </strong> desenvolvimento de
          materiais educativos para colaboradores e público-alvo
          sobre tokens, cripto, riscos e boas práticas.
        </li>
        <li>
          <strong> Infraestrutura: </strong> escolha de tecnologia
          (blockchain pública ou permissionada),
          carteira digital compatível com smartphones regionais
          e interface local simplificada.
        </li>
        <li>
          <strong> Piloto interno: </strong> lançamento de um
          <strong> E-Coin piloto </strong>,
          restrito a colaboradores e testers,
          para recolha de feedback e ajustes iniciais.
        </li>
      </ul>
    </div>

    {/* 🚀 Fase 2 */}
    <div className="border-l-4 border-[#22C55E]/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#22C55E] mb-4">
        🚀 Fase 2 — Lançamento Piloto Local (6–18 meses)
      </h3>
      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>
          <strong> Zona piloto: </strong> seleção de uma comunidade em
          <strong> Nhamatanda </strong>
          para introduzir pagamentos ou retornos via token/cripto
          nos serviços da E-Social <strong> Entrepreneur Empower Division </strong> ou <strong>Buy Your Seat</strong>.
        </li>
        <li>
          <strong> Parceria local: </strong> formação de parceria com
          fintech local ou agente de pagamentos
          para facilitar integração operacional.
        </li>
        <li>
          <strong> Monitorização: </strong> definição de métricas claras
          de adoção, transações, feedback,
          custos operacionais e ocorrências de fraude.
        </li>
        <li>
          <strong> Ajustes regulatórios: </strong> acompanhamento contínuo
          da legislação local e da regulamentação cambial,
          com adaptação do modelo sempre que necessário.
        </li>
      </ul>
    </div>

    {/* 🌍 Fase 3 */}
    <div className="border-l-4 border-[#D4AF37]/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#D4AF37] mb-4">
        🌍 Fase 3 — Escala & Integração (18–36 meses)
      </h3>
      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>
          <strong> Expansão nacional: </strong> caso o piloto demonstre
          resultados positivos,
          expansão gradual para outras províncias.
        </li>
        <li>
          <strong> Diversificação de serviços: </strong> inclusão de
          <strong> stablecoins </strong> ou mecanismos de valor mais estável
          para utilizadores com perfil de menor risco.
        </li>
        <li>
          <strong> Conformidade e transparência: </strong> apresentação de
          relatórios de auditoria externa,
          arquitetura clara de smart contracts
          e disclosures para investidores e utilizadores.
        </li>
        <li>
          <strong> Preparação para regulação: </strong> criação de plano
          para inscrição futura como
          <strong> Prestador de Serviços de Ativos Virtuais (VASP)</strong>,
          antecipando enquadramento legal futuro.
        </li>
      </ul>
    </div>

    {/* 🔎 Fecho */}
    <div className="text-center mt-12">
      <p className="text-[#D4AF37] text-lg sm:text-xl font-semibold mb-3">
        🔎 Visão de execução
      </p>
      <p className="text-gray-300 leading-relaxed">
        O roadmap proposto permite que a <strong> E-Coin </strong>
        avance em Moçambique de forma
         <strong> progressiva, segura e alinhada à realidade local</strong>,
        aproveitando a experiência global
        enquanto constrói bases sólidas para o futuro.
      </p>
      <p className="text-gray-400 italic mt-4">
        “Planeamento hoje é liberdade amanhã.”
      </p>
    </div>
  </div>
</motion.section>

{/* SECTION 51 — MOÇAMBIQUE: RESUMO EXECUTIVO */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌄 Fundo cinematográfico executivo */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-[#000]/95 to-[#0a0a0a]/100" />
    <div
      className="absolute inset-0 bg-[url('/images/ecoin-mocambique-resumo-executivo-bg.jpg')] bg-cover bg-center opacity-25"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/15 via-transparent to-[#3B82F6]/20 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-5xl mx-auto text-left text-gray-200 space-y-12">
    {/* 📘 Título */}
    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#D4AF37] text-center mb-8">
      📘 Resumo Executivo — Moçambique
    </h2>

    {/* 🧠 Síntese */}
    <div className="border-l-4 border-[#3B82F6]/70 pl-6">
      <p className="text-gray-300 leading-relaxed mb-4">
        Moçambique apresenta um <strong> mercado com elevado potencial </strong>
        para inovação em cripto-ativos e activos digitais,
        impulsionado pela <strong> baixa infraestrutura bancária </strong>,
        pela forte presença do <strong> sector informal </strong>
        e pela <strong> adoção crescente de soluções digitais </strong>.
      </p>
      <p className="text-gray-400 leading-relaxed">
        Este contexto cria uma base fértil para novos modelos financeiros,
        especialmente aqueles que combinam
        <strong> tecnologia, inclusão e educação </strong>.
      </p>
    </div>

    {/* 🚀 Oportunidade */}
    <div className="border-l-4 border-[#22C55E]/70 pl-6">
      <p className="text-gray-300 leading-relaxed">
        Para a <strong> E-Coin </strong> da
        <strong> EdenKingDom Corporation </strong>,
        este cenário representa uma <strong> oportunidade estratégica </strong>
        para posicionar-se como <strong> pioneira </strong>
        num ambiente ainda pouco explorado,
        mas com necessidades reais e urgentes.
      </p>
    </div>

    {/* ⚠️ Prudência estratégica */}
    <div className="border-l-4 border-[#F59E0B]/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#F59E0B] mb-4">
        ⚠️ Princípios de atuação responsável
      </h3>
      <p className="text-gray-300 leading-relaxed mb-4">
        No entanto, esta oportunidade exige uma atuação
        <strong>prudente, estruturada e responsável</strong>,
        com preparação desde o primeiro momento em quatro pilares essenciais:
      </p>
      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li><strong>Governança</strong> clara e transparente;</li>
        <li><strong>Tecnologia</strong> segura, escalável e adaptada ao contexto local;</li>
        <li><strong>Educação</strong> contínua dos utilizadores e parceiros;</li>
        <li><strong>Fiscal e regulatório</strong>, antecipando compliance e supervisão futura.</li>
      </ul>
    </div>

    {/* ⚖️ Regulação */}
    <div className="border-l-4 border-[#8B5CF6]/70 pl-6">
      <p className="text-gray-300 leading-relaxed">
        O enquadramento regulatório em Moçambique
         <strong> ainda é incerto </strong>,
        o que representa simultaneamente
        <strong> risco </strong> e <strong> flexibilidade </strong>.
        Quem se preparar desde já estará melhor posicionado
        para adaptar-se quando regras mais claras surgirem.
      </p>
    </div>

    {/* 🔎 Fecho */}
    <div className="text-center mt-12">
      <p className="text-[#D4AF37] text-lg sm:text-xl font-semibold mb-3">
        🔎 Conclusão estratégica
      </p>
      <p className="text-gray-300 leading-relaxed">
        A <strong> E-Coin </strong> tem condições para crescer em Moçambique
        de forma <strong> sustentável, inclusiva e alinhada ao futuro</strong>,
        desde que avance com visão, disciplina e responsabilidade institucional.
      </p>
      <p className="text-gray-400 italic mt-4">
        “O verdadeiro pioneiro não corre — prepara o terreno.”
      </p>
    </div>
  </div>
</motion.section>

{/* SECTION 52 — E-COIN: VISÃO CORPORATIVA GLOBAL */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌄 Fundo cinematográfico corporativo global */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-[#000]/95 to-[#0a0a0a]/100" />
    <div
      className="absolute inset-0 bg-[url('/images/ecoin-edenkingdom-global-corporate-vision-bg.jpg')] bg-cover bg-center opacity-25"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/15 via-transparent to-[#8B5CF6]/20 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-5xl mx-auto text-left text-gray-200 space-y-12">
    {/* 👑 Título */}
    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#D4AF37] text-center mb-8">
      👑 E-Coin — EdenKingDom Corporation  
      <span className="block text-sm sm:text-base text-gray-400 mt-2">
        África / Internacional
      </span>
    </h2>

    {/* 🪙 Definição */}
    <div className="border-l-4 border-[#3B82F6]/70 pl-6">
      <p className="text-gray-300 leading-relaxed">
        A <strong> E-Coin </strong> é a
         <strong> criptomoeda corporativa BEP-20 </strong>
        da <strong> EdenKingDom Corporation </strong>,
        concebida para operar como
         <strong> infraestrutura financeira digital </strong>
        dentro de um ecossistema empresarial e social global.
      </p>
    </div>

    {/* 💡 Inspiração */}
    <div className="border-l-4 border-[#22C55E]/70 pl-6">
      <p className="text-gray-300 leading-relaxed">
        O seu desenho estratégico inspira-se em
        <strong> modelos regulados e funcionais </strong>
        observados em países como:
      </p>
      <ul className="list-disc list-inside text-gray-300 mt-3 space-y-1">
        <li><strong>Japão</strong> (Ásia) — integração regulada e adoção institucional;</li>
        <li><strong>Suíça</strong> (Europa) — estabilidade, compliance e inovação financeira;</li>
        <li><strong>Nigéria</strong> (África) — adoção massiva, P2P e inclusão financeira.</li>
      </ul>
    </div>

    {/* 🌍 Funções */}
    <div className="border-l-4 border-[#F59E0B]/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#F59E0B] mb-4">
        🌍 Funções principais da E-Coin
      </h3>
      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li><strong>Pagamentos digitais</strong> dentro do ecossistema EdenKingDom;</li>
        <li><strong>Recompensas</strong> por participação, serviços ou desempenho;</li>
        <li><strong>Staking</strong> e modelos de retorno estruturado;</li>
        <li><strong>Governança descentralizada</strong> aplicada a decisões do ecossistema.</li>
      </ul>
    </div>

    {/* 🔐 Enquadramento */}
    <div className="border-l-4 border-[#8B5CF6]/70 pl-6">
      <p className="text-gray-300 leading-relaxed">
        A E-Coin é desenhada desde a origem para estar
        <strong> alinhada com normas internacionais </strong>,
        incluindo princípios de
        <strong> KYC </strong>, <strong> AML </strong> e recomendações da
        <strong> FATF </strong>,
        assegurando sustentabilidade, legitimidade e integração futura
        com ambientes regulados.
      </p>
    </div>

    {/* ⚜️ Propósito */}
    <div className="border-l-4 border-[#D4AF37]/70 pl-6">
      <p className="text-gray-300 leading-relaxed">
        O propósito central da <strong> E-Coin </strong> é
        <strong> transformar o ecossistema financeiro africano </strong>
        num modelo de
        <strong> estabilidade, inclusão e eficiência </strong>,
        com capacidade de projeção e relevância global.
      </p>
    </div>

    {/* 🔗 Fontes */}
    <div className="mt-10 text-center">
      <p className="text-[#3B82F6] font-semibold mb-4">
        🔗 Fontes confiáveis (referência estratégica)
      </p>
      <ul className="text-gray-400 space-y-1 text-sm">
        <li>Investopedia — Cryptocurrency Regulations Around the World</li>
        <li>EMCD — Legality of Cryptocurrency by Country and Territory</li>
        <li>iDenfy — Global Crypto Regulations Overview</li>
        <li>Proelium Law LLP — Global Regulation Tracker</li>
        <li>Global Citizen Solutions — Most Crypto Friendly Countries 2025</li>
      </ul>
    </div>

    {/* 🏁 Fecho */}
    <div className="text-center mt-12">
      <p className="text-[#D4AF37] text-lg sm:text-xl font-semibold mb-3">
        🏁 Visão final
      </p>
      <p className="text-gray-300 leading-relaxed">
        A <strong> E-Coin </strong> não nasce como especulação,
        mas como <strong> infraestrutura corporativa de valor </strong>,
        preparada para operar em África
        e dialogar com o mundo.
      </p>
      <p className="text-gray-400 italic mt-4">
        “Uma moeda é forte quando a visão é maior do que o preço.”
      </p>
    </div>
  </div>
</motion.section>

{/* SECTION 53 — CONVITE AO NOVO MARCO HISTÓRICO */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-20 sm:py-28 px-6 rounded-3xl mt-20"
>
  {/* 🌄 Fundo cinematográfico manifesto */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-[#000]/95 to-[#050505]/100" />
    <div
      className="absolute inset-0 bg-[url('/images/ecoin-convite-novo-marco-historico-bg.jpg')] bg-cover bg-center opacity-30"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/20 via-transparent to-[#3B82F6]/25 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-5xl mx-auto text-center text-gray-200 space-y-10">
    {/* 🟨 Título */}
    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#D4AF37]">
      🟨 Convite ao Novo Marco Histórico
    </h2>

    {/* 📘 Manifesto */}
    <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
      O <strong> EDENKINGDOM COIN (E-COIN) </strong> representa um
      <strong> avanço significativo </strong> na forma como corporações
      interagem com a economia global baseada na informação.
      Esta moeda digital foi projetada para
      <strong> facilitar transações rápidas, seguras e eficientes </strong>
      dentro de um ecossistema empresarial moderno,
      promovendo redução de custos operacionais
      e aumento de produtividade.
    </p>

    <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
      O <strong> E-COIN </strong> aproveita
      <strong> tecnologias de ponta como blockchain </strong>
      para garantir transparência, confiança e rastreabilidade,
      permitindo que empresas e indivíduos participem de uma
      <strong> economia verdadeiramente sem fronteiras </strong>.
      Ao remover intermediários desnecessários,
      abre-se espaço para relações económicas mais diretas,
      justas e eficientes.
    </p>

    <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
      Além disso, esta moeda corporativa promove
      <strong> inclusão financeira real </strong>,
      oferecendo acesso a mercados globais
      para <strong> pequenas e médias empresas </strong>
      que historicamente estiveram limitadas
      por barreiras económicas, geográficas ou estruturais.
    </p>

    <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
      Com o <strong> E-COIN </strong>,
      a promessa de uma economia
      <strong> global, interconectada e orientada por dados </strong>
      deixa de ser conceito e aproxima-se da realidade,
      impulsionando <strong> inovação, crescimento e colaboração </strong>
      em múltiplos setores.
    </p>

    {/* 🏁 Fecho */}
    <div className="pt-6">
      <p className="text-[#D4AF37] text-lg sm:text-xl font-semibold">
        🌍 O futuro da economia não será apenas digital —  
        será cooperativo, transparente e global.
      </p>
      <p className="text-gray-400 italic mt-4">
        “E-Coin — quando a visão se transforma em infraestrutura.”
      </p>
    </div>
  </div>
</motion.section>

{/* SECTION 54 — REFLEXÃO & NOVA CHANCE / OPORTUNIDADE */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-20 sm:py-28 px-6 rounded-3xl mt-20"
>
  {/* 🌄 Fundo cinematográfico reflexivo */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-[#000]/95 to-[#050505]/100" />
    <div
      className="absolute inset-0 bg-[url('/images/ecoin-reflexao-nova-chance-oportunidade-bg.jpg')] bg-cover bg-center opacity-30"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/20 via-transparent to-[#3B82F6]/25 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-6xl mx-auto text-center text-gray-200 space-y-10">
    {/* 🟦 Título */}
    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3B82F6]">
      🟦 Reflexão, Uma Nova Chance & Oportunidade
    </h2>

    {/* 📘 Reflexão */}
    <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
      Para este <strong> novo marco histórico </strong>, não fique de fora.
      Ao longo da história recente, existiram muitos que
      <strong> não acreditaram no início </strong> daquilo que hoje chamamos
      de potências globais — projetos que, no seu nascimento,
      eram vistos apenas como “dizeres”.
    </p>

    <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
      A <strong> EdenKingDom Coin (E-Coin) </strong> apresenta-se a si agora,
      neste <strong> exato momento histórico — ano de 2025 </strong>,
      tal como essas tecnologias se apresentaram no passado
      a quem duvidou do seu potencial.
      Hoje, esses potenciais são visíveis
      <strong> na prática </strong>.
    </p>

    {/* 💎 Exemplos históricos */}
    <div className="border border-[#D4AF37]/20 rounded-2xl p-6 bg-black/30 backdrop-blur-sm">
      <ul className="text-left text-gray-300 space-y-3">
        <li>
          💎 <strong> Bitcoin (BTC) </strong> — origem em 2009;
          preço atual em torno de
          <strong> “cento e treze mil e setecentos dólares americanos ”</strong>
          (≈ US$ 113,700).
        </li>
        <li>
          ⚙️ <strong> Ethereum (ETH) </strong> — origem em 2015;
          preço atual em torno de
          <strong> “quatro mil e oitenta dólares americanos” </strong>
          (≈ US$ 4,080).
        </li>
        <li>
          🔶 <strong>Binance Coin (BNB)</strong> — origem em 2017;
          preço atual em torno de
          <strong> “mil cento e trinta e dois dólares americanos”</strong>
          (≈ US$ 1,132).
        </li>
        <li>
          🌞 <strong>Solana (SOL)</strong> — origem em 2020;
          preço atual em torno de
          <strong> “cento e noventa e seis dólares americanos”</strong>
          (≈ US$ 196).
        </li>
        <li>
          💬 <strong>TON (The Open Network)</strong> — ligada à rede social Telegram;
          valor em torno de
          <strong> “dois dólares americanos”</strong>
          (≈ US$ 2),
          representando a nova geração de <strong>tokens sociais</strong>.
        </li>
        <li>
          🌐 Outras potências globais:
          <strong>Cardano (ADA)</strong>, <strong>Avalanche (AVAX)</strong>,
          <strong>XRP (Ripple)</strong>, <strong>Polygon (MATIC)</strong>,
          <strong>Tron (TRX)</strong> e <strong>Chainlink (LINK)</strong>.
        </li>
      </ul>
    </div>

    {/* 🔎 Fecho reflexivo */}
    <div className="pt-6">
      <p className="text-[#D4AF37] text-lg sm:text-xl font-semibold">
        🔎 A história ensina:
      </p>
      <p className="text-gray-300 leading-relaxed">
        Toda grande transformação começa com
        <strong>visão, coragem e decisão</strong>.
        A <strong>E-Coin</strong> surge como
        <strong>uma nova chance</strong>
        para participar conscientemente
        de um ecossistema em construção —
        antes que ele se torne consenso.
      </p>
      <p className="text-gray-400 italic mt-4">
        “O futuro não espera por quem duvida.”
      </p>
    </div>
  </div>
</motion.section>

{/* SECTION 55 — E SE VOCÊ TIVESSE INVESTIDO NO INÍCIO? */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-20 sm:py-28 px-6 rounded-3xl mt-20"
>
  {/* 🌄 Fundo cinematográfico de oportunidade */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-[#000]/95 to-[#050505]/100" />
    <div
      className="absolute inset-0 bg-[url('/images/ecoin-e-se-voce-tivesse-investido-no-inicio-bg.jpg')] bg-cover bg-center opacity-30"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/25 via-transparent to-[#22C55E]/25 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-5xl mx-auto text-center text-gray-200 space-y-10">
    {/* 🟨 Título */}
    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#D4AF37]">
      🟨 “E Se Você Tivesse Investido no Início?”
    </h2>

    {/* 📘 Reflexão */}
    <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
      E se você tivesse tido a oportunidade de adquirir
      <strong> Bitcoin, Ethereum, Binance Coin (BNB) ou Solana </strong>
      logo no início destes projetos
      que hoje representam <strong>luxo, riqueza e poder económico global</strong>,
      movimentando finanças a cada
      <strong> dia, hora, minuto, segundo e até frações de segundo</strong>?
    </p>

    <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
      Muitos ouviram falar, muitos duvidaram,
      e apenas alguns decidiram participar quando
      <strong> quase ninguém acreditava</strong>.
      Hoje, os resultados estão à vista.
    </p>

    {/* 💬 Mensagem E-Coin */}
    <div className="border border-[#3B82F6]/25 rounded-2xl p-6 bg-black/30 backdrop-blur-sm">
      <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
        A <strong>EdenKingDom Coin (E-Coin)</strong> surge para dizer-lhe
        que <strong>ainda não é tarde</strong>.
        Ainda existe a chance de participar
        em <strong>movimentos transformadores de vidas e finanças</strong>,
        com visão global, estrutura corporativa
        e propósito real.
      </p>
    </div>

    {/* 💰 Preço da Pré-venda */}
    <div className="border-2 border-[#D4AF37]/40 rounded-3xl p-8 bg-black/40">
      <p className="text-gray-400 uppercase tracking-widest text-sm mb-2">
        Preço inicial da Pré-Venda
      </p>
      <p className="text-3xl sm:text-4xl font-extrabold text-[#D4AF37] mb-3">
        $0,30
      </p>
      <p className="text-gray-300 leading-relaxed">
        Hoje, a <strong>EdenKingDom Coin (E-Coin)</strong>
        custa <strong>$0,30</strong>
        (zero ponto três dólares americanos)
        e posiciona-se no início de
        <strong> uma grande oportunidade financeira global</strong>.
      </p>
    </div>

    {/* 🏁 Fecho */}
    <div className="pt-6">
      <p className="text-[#22C55E] text-lg sm:text-xl font-semibold">
        🚀 As oportunidades não se repetem —  
        apenas mudam de nome.
      </p>
      <p className="text-gray-400 italic mt-4">
        “O início é onde o futuro começa.”
      </p>
    </div>
  </div>
</motion.section>

{/* SECTION 56 — UM NOVO CAPÍTULO NA HISTÓRIA DAS CRIPTOMOEDAS */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-20 sm:py-28 px-6 rounded-3xl mt-20"
>
  {/* 🌄 Fundo cinematográfico histórico */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-[#000]/95 to-[#050505]/100" />
    <div
      className="absolute inset-0 bg-[url('/images/ecoin-novo-capitulo-historia-criptomoedas-bg.jpg')] bg-cover bg-center opacity-30"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#3B82F6]/20 via-transparent to-[#D4AF37]/20 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-6xl mx-auto text-center text-gray-200 space-y-10">
    {/* 🌍 Título */}
    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3B82F6]">
      🌍 Um Novo Capítulo na História das Criptomoedas
    </h2>

    {/* 📖 Subtítulo */}
    <p className="text-[#D4AF37] text-lg sm:text-xl font-semibold italic">
      “Do Bitcoin à Nova Era: A Revolução Continua”
    </p>

    {/* 📘 Contexto histórico */}
    <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
      Ao longo da última década, o mundo testemunhou o nascimento de
      <strong> gigantes tecnológicos e financeiros</strong>
      que transformaram profundamente o sistema financeiro global,
      redefinindo conceitos de valor, confiança e descentralização.
    </p>

    {/* 🪙 Linha histórica */}
    <div className="border border-[#3B82F6]/20 rounded-2xl p-6 bg-black/30 backdrop-blur-sm text-left">
      <ul className="text-gray-300 space-y-3">
        <li>
          💎 <strong>Bitcoin (BTC)</strong> — o pioneiro que abriu o caminho
          para a <strong>descentralização financeira</strong>.
        </li>
        <li>
          ⚙️ <strong>Ethereum (ETH)</strong> — a revolução dos
          <strong>contratos inteligentes</strong>
          e das finanças descentralizadas (DeFi).
        </li>
        <li>
          🔶 <strong>Binance Coin (BNB)</strong> — a força que impulsiona
          o <strong>maior ecossistema de exchange</strong> do planeta.
        </li>
        <li>
          🌞 <strong>Solana (SOL)</strong> — símbolo de
          <strong>velocidade e escalabilidade</strong>
          no universo blockchain.
        </li>
        <li>
          💬 <strong>TON (The Open Network)</strong> — potência descentralizada
          nascida da rede social Telegram,
          já com valor superior a <strong>US$ 2 por token</strong>,
          demonstrando o poder das <strong>comunidades digitais</strong>.
        </li>
      </ul>
    </div>

    {/* 🌐 Outros projetos */}
    <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
      Outras potências globais, como
      <strong> Cardano (ADA)</strong>,
      <strong> Avalanche (AVAX)</strong>,
      <strong> XRP (Ripple)</strong>,
      <strong> Polygon (MATIC)</strong>,
      <strong> Tron (TRX)</strong> e
      <strong> Chainlink (LINK)</strong>,
      continuam a moldar os alicerces
      da <strong>economia descentralizada</strong>.
    </p>

    {/* 🔮 Transição */}
    <div className="pt-6">
      <p className="text-[#D4AF37] text-lg sm:text-xl font-semibold">
        Mas agora, o mundo prepara-se para
        <strong> o próximo grande marco desta evolução</strong>.
      </p>
      <p className="text-gray-400 italic mt-4">
        “Não fique de fora do próximo grande capítulo.”
      </p>
    </div>
  </div>
</motion.section>

{/* SECTION 57 — CHEGOU A VEZ DA EDENKINGDOM COIN */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-20 sm:py-28 px-6 rounded-3xl mt-20"
>
  {/* 🌄 Fundo cinematográfico institucional */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-[#000]/95 to-[#050505]/100" />
    <div
      className="absolute inset-0 bg-[url('/images/ecoin-chegou-a-vez-da-edenkingdom-coin-bg.jpg')] bg-cover bg-center opacity-30"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/25 via-transparent to-[#3B82F6]/25 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-6xl mx-auto text-center text-gray-200 space-y-10">
    {/* 🪙 Título */}
    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#D4AF37]">
      🪙 Chegou a Vez da EdenKingDom Coin (E-Coin)
    </h2>

    {/* 📘 Declaração */}
    <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
      A <strong>EdenKingDom Coin (E-Coin)</strong> não é apenas mais uma criptomoeda —
      é a <strong>primeira moeda corporativa global</strong> projetada para
      <strong>unir governos, empresas e pessoas</strong>
      dentro de um mesmo ecossistema
      <strong>transparente, sustentável e com liquidez real</strong>.
    </p>

    <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
      Construída sobre <strong>contratos inteligentes auditáveis</strong>
      e sustentada por <strong>receitas corporativas multissetoriais</strong>
      da <strong>EdenKingDom Corporation</strong>,
      a E-Coin nasce com um propósito claro:
      <strong>infraestrutura económica real, não especulação</strong>.
    </p>

    {/* ⚙️ Pilares */}
    <div className="border border-[#D4AF37]/25 rounded-2xl p-6 bg-black/30 backdrop-blur-sm text-left">
      <ul className="text-gray-300 space-y-3">
        <li>
          ⚖️ <strong>Estabilidade com propósito real</strong>,
          baseada em atividade económica e não em hype especulativo.
        </li>
        <li>
          🌐 <strong>Utilidade prática</strong> aplicada a
          educação, saúde, construção, transporte,
          marketplace e energia.
        </li>
        <li>
          💰 <strong>Recompensas sustentáveis</strong>,
          distribuídas via <strong>staking diário</strong>
          através de um sistema justo, transparente e <strong>on-chain</strong>.
        </li>
        <li>
          🛡️ <strong>Transparência absoluta</strong>,
          sem manipulação humana,
          com operações <strong>100% auditáveis em blockchain</strong>.
        </li>
      </ul>
    </div>

    {/* 🏁 Fecho */}
    <div className="pt-6">
      <p className="text-[#22C55E] text-lg sm:text-xl font-semibold">
        “Chegou a hora da EdenKingDom Coin (E-Coin).”
      </p>
      <p className="text-gray-300 leading-relaxed mt-2">
        A sua <strong>nova chance e oportunidade</strong>
        neste novo marco histórico —
        tal como aconteceu na era e na vez da
        <strong>Bitcoin (BTC)</strong>.
      </p>
      <p className="text-gray-400 italic mt-4">
        “Toda era tem a sua moeda. Toda visão tem o seu momento.”
      </p>
    </div>
  </div>
</motion.section>

{/* SECTION 58 — O CHAMADO PARA A NOVA ERA DA ECONOMIA DA INFORMAÇÃO */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-24 sm:py-32 px-6 rounded-3xl mt-24"
>
  {/* 🌄 Fundo cinematográfico épico */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-[#000]/95 to-[#050505]/100" />
    <div
      className="absolute inset-0 bg-[url('/images/ecoin-chamado-nova-era-economia-informacao-bg.jpg')] bg-cover bg-center opacity-30"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/30 via-transparent to-[#3B82F6]/30 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-6xl mx-auto text-center text-gray-200 space-y-10">
    {/* 🚀 Título */}
    <h2 className="text-2xl sm:text-4xl font-extrabold text-[#D4AF37]">
      🚀 O Chamado para a Nova Era da Economia da Informação
    </h2>

    {/* 📘 Manifesto */}
    <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
      Vivemos o <strong>renascimento do conceito de valor</strong>.
      O dinheiro deixa de ser apenas papel
      e transforma-se em <strong>energia digital corporativa</strong>,
      capaz de gerar <strong>riqueza compartilhada</strong>,
      <strong>auditável</strong> e <strong>duradoura</strong>.
    </p>

    {/* 🌟 Destaque */}
    <p className="text-[#22C55E] text-lg sm:text-xl font-semibold">
      🌟 “Esta é a vez da EdenKingDom Coin (E-Coin) —  
      o símbolo da nova economia do Éden  
      (EdenKingDom Corporation).”
    </p>

    {/* 🌍 Convite */}
    <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
      Aproveite este <strong>marco histórico</strong>
      e torne-se parte do futuro.
      A era da <strong>economia inteligente</strong>,
      <strong>transparente</strong> e <strong>global</strong>
      já começou com a <strong>EdenKingDom Coin (E-Coin)</strong>.
    </p>

    {/* 🔔 Fecho direto */}
    <div className="pt-6">
      <p className="text-[#D4AF37] text-xl sm:text-2xl font-bold">
        Não perca mais tempo.
      </p>
      <p className="text-gray-400 italic mt-3">
        “Toda nova era começa com uma decisão.”
      </p>
    </div>
  </div>
</motion.section>

{/* SECTION 59 — A FUNDAÇÃO FINANCEIRA DA EDENKINGDOM CORPORATION */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-24 sm:py-32 px-6 rounded-3xl mt-24"
>
  {/* 🌄 Fundo cinematográfico estrutural */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-[#000]/95 to-[#050505]/100" />
    <div
      className="absolute inset-0 bg-[url('/images/ecoin-fundacao-financeira-edenkingdom-bg.jpg')] bg-cover bg-center opacity-30"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/30 via-transparent to-[#22C55E]/25 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-6xl mx-auto text-center text-gray-200 space-y-10">
    {/* 🏛️ Título */}
    <h2 className="text-2xl sm:text-4xl font-extrabold text-[#D4AF37]">
      🏛️ A Fundação Financeira da EdenKingDom Corporation
    </h2>

    {/* 📘 Definição */}
    <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
      A <strong>EdenKingDom Coin (E-Coin)</strong> é o
      <strong>pilar económico</strong> do ecossistema
      <strong>EdenKingDom (EKD)</strong>,
      concebida para <strong>unificar pagamentos</strong>,
      <strong>investimentos</strong> e
      <strong>governança digital</strong>
      numa única infraestrutura financeira corporativa.
    </p>

    {/* 🌐 Setores */}
    <div className="border border-[#3B82F6]/25 rounded-2xl p-6 bg-black/30 backdrop-blur-sm">
      <p className="text-gray-300 mb-4">
        A E-Coin foi projetada para operar de forma transversal
        em múltiplos setores estratégicos:
      </p>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-left text-gray-300">
        <li>🏗️ <strong>Construção</strong></li>
        <li>🚉 <strong>Transporte</strong></li>
        <li>💡 <strong>Energia</strong></li>
        <li>🏥 <strong>Saúde</strong></li>
        <li>🎓 <strong>Educação</strong></li>
        <li>🛍️ <strong>Mercado</strong></li>
        <li>🌿 <strong>Reciclagem</strong></li>
        <li>🪙 <strong>Mineração</strong></li>
      </ul>
    </div>

    {/* 📈 Estrutura económica */}
    <div className="border-l-4 border-[#22C55E]/70 pl-6 text-left max-w-4xl mx-auto">
      <p className="text-gray-300 leading-relaxed">
        A base económica da E-Coin assenta em princípios claros:
      </p>
      <ul className="list-disc list-inside text-gray-300 mt-3 space-y-2">
        <li>
          <strong>Oferta inicial limitada</strong>,
          assegurando escassez programada;
        </li>
        <li>
          <strong>Liquidez real</strong>,
          sustentada por atividade corporativa multissetorial;
        </li>
        <li>
          <strong>Governança transparente</strong>,
          executada por contratos inteligentes auditáveis.
        </li>
      </ul>
    </div>

    {/* 🔎 Fecho */}
    <div className="pt-6">
      <p className="text-[#22C55E] text-lg sm:text-xl font-semibold">
        🔎 Uma fundação forte sustenta um ecossistema duradouro.
      </p>
      <p className="text-gray-400 italic mt-4">
        “Quando o valor tem base real, o crescimento torna-se sustentável.”
      </p>
    </div>
  </div>
</motion.section>

{/* SECTION 60 — CONTROLE INICIAL DE DISTRIBUIÇÃO & FORNECIMENTO */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-24 sm:py-32 px-6 rounded-3xl mt-24"
>
  {/* 🌄 Fundo cinematográfico técnico */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-[#000]/95 to-[#050505]/100" />
    <div
      className="absolute inset-0 bg-[url('/images/ecoin-controle-distribuicao-fornecimento-bg.jpg')] bg-cover bg-center opacity-30"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/30 via-transparent to-[#3B82F6]/25 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-6xl mx-auto text-center text-gray-200 space-y-12">
    {/* 💰 Título */}
    <h2 className="text-2xl sm:text-4xl font-extrabold text-[#D4AF37]">
      💰 Controle Inicial de Distribuição e Fornecimento
    </h2>

    {/* 📊 Tabela */}
    <div className="overflow-x-auto border border-[#3B82F6]/25 rounded-2xl bg-black/40 backdrop-blur-sm">
      <table className="min-w-full text-left text-gray-300">
        <thead className="bg-black/60">
          <tr>
            <th className="px-6 py-4 font-semibold">Categoria</th>
            <th className="px-6 py-4 font-semibold">Percentagem</th>
            <th className="px-6 py-4 font-semibold">Descrição</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#3B82F6]/20">
          <tr>
            <td className="px-6 py-4">Presale & Early Adopters</td>
            <td className="px-6 py-4 font-bold text-[#22C55E]">20%</td>
            <td className="px-6 py-4">
              Captação inicial e expansão comunitária
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4">Pool de Liquidez</td>
            <td className="px-6 py-4 font-bold text-[#22C55E]">30%</td>
            <td className="px-6 py-4">
              Estabilidade e trocas rápidas em DEX / CEX
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4">Staking & Recompensas</td>
            <td className="px-6 py-4 font-bold text-[#22C55E]">15%</td>
            <td className="px-6 py-4">
              Recompensas diárias e incentivo ao holding
              via <strong>Smart Pool</strong>
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4">Tesouraria Corporativa</td>
            <td className="px-6 py-4 font-bold text-[#22C55E]">25%</td>
            <td className="px-6 py-4">
              Buy-Back, reservas estratégicas e crescimento
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4">Desenvolvimento & Parcerias</td>
            <td className="px-6 py-4 font-bold text-[#22C55E]">5%</td>
            <td className="px-6 py-4">
              Integrações técnicas, expansão e marketing
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4">Equipa & Fundadores</td>
            <td className="px-6 py-4 font-bold text-[#22C55E]">5%</td>
            <td className="px-6 py-4">
              Time-lock aplicado para governança sustentável
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* ⚙️ Mecanismo de controlo */}
    <div className="border-l-4 border-[#F59E0B]/70 pl-6 text-left max-w-5xl mx-auto">
      <p className="text-gray-300 leading-relaxed mb-4">
        ⚙️ O contrato da <strong>E-Coin</strong> <strong>não possui funções de mint ou burn</strong>.
        Todo o controlo de fornecimento é realizado exclusivamente
        através do <strong>Buy-Back Engine</strong>.
      </p>
      <p className="text-gray-300 leading-relaxed">
        Apenas o <strong>endereço oficial da Tesouraria da EKD</strong>
        pode executar operações de recompra,
        sempre com <strong>auditorias independentes</strong>
        e <strong>aprovação da comunidade</strong>
        para novas emissões,
        evitando inflação descontrolada ou manipulação da oferta.
      </p>
    </div>

    {/* 📚 Referência */}
    <div className="pt-6">
      <p className="text-[#3B82F6] font-semibold">
        📚 Para mais informações
      </p>
      <p className="text-gray-400 text-sm mt-2">
        Consulte o <strong>Whitepaper da E-Coin</strong> e o
        <strong> E-Coin Solidity Interpretation</strong>
        para detalhes técnicos completos.
      </p>
    </div>

    {/* 🔎 Fecho */}
    <div className="pt-4">
      <p className="text-[#22C55E] text-lg sm:text-xl font-semibold">
        🔎 Oferta controlada é sinónimo de confiança.
      </p>
      <p className="text-gray-400 italic mt-3">
        “Transparência hoje garante sustentabilidade amanhã.”
      </p>
    </div>
  </div>
</motion.section>

{/* SECTION 61 — DIFERENCIAIS DA MOEDA EDENKINGDOM COIN (E-COIN) */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-24 sm:py-32 px-6 rounded-3xl mt-24"
>
  {/* 🌄 Fundo cinematográfico institucional */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-[#000]/95 to-[#050505]/100" />
    <div
      className="absolute inset-0 bg-[url('/images/ecoin-diferenciais-estrategicos-bg.jpg')] bg-cover bg-center opacity-30"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/30 via-transparent to-[#3B82F6]/25 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-6xl mx-auto text-center text-gray-200 space-y-14">
    {/* ⚖️ Título */}
    <h2 className="text-2xl sm:text-4xl font-extrabold text-[#D4AF37]">
      ⚖️ Diferenciais da Moeda EdenKingDom Coin (E-Coin)
    </h2>

    {/* 🔹 Grid de diferenciais */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
      
      {/* Liquidez garantida */}
      <div className="bg-black/40 border border-[#22C55E]/30 rounded-2xl p-6 backdrop-blur-sm">
        <h3 className="text-lg font-bold text-[#22C55E] mb-3">
          🟡 Liquidez Garantida
        </h3>
        <p className="text-gray-300 leading-relaxed">
          A liquidez da <strong>E-Coin</strong> é sustentada por
          <strong> receitas multissetoriais reais da EKD </strong>
          e pelo capital estruturado da <strong>pré-venda</strong>,
          assegurando estabilidade e profundidade de mercado.
        </p>
      </div>

      {/* Casos de uso reais */}
      <div className="bg-black/40 border border-[#3B82F6]/30 rounded-2xl p-6 backdrop-blur-sm">
        <h3 className="text-lg font-bold text-[#3B82F6] mb-3">
          🔵 Casos de Uso Reais
        </h3>
        <p className="text-gray-300 leading-relaxed">
          A E-Coin possui <strong> utilidade prática imediata </strong>
          em pagamentos digitais, marketplace,
          turismo, educação, saúde e serviços corporativos,
          integrados ao ecossistema EdenKingDom.
        </p>
      </div>

      {/* Modelo anti-especulativo */}
      <div className="bg-black/40 border border-[#F59E0B]/30 rounded-2xl p-6 backdrop-blur-sm">
        <h3 className="text-lg font-bold text-[#F59E0B] mb-3">
          🟢 Modelo Anti-Especulativo
        </h3>
        <p className="text-gray-300 leading-relaxed">
          O valor da E-Coin é fundamentado no
          <strong> crescimento económico real da EdenKingDom Corporation</strong>,
          reduzindo dependência de hype, pump & dump
          ou manipulação de mercado.
        </p>
      </div>

      {/* Staking sustentável */}
      <div className="bg-black/40 border border-[#22C55E]/30 rounded-2xl p-6 backdrop-blur-sm">
        <h3 className="text-lg font-bold text-[#22C55E] mb-3">
          🪙 Staking Sustentável
        </h3>
        <p className="text-gray-300 leading-relaxed">
          Sistema de <strong>recompensas diárias proporcionais</strong>,
          distribuídas por <strong> Stream CashFlow </strong>,
          garantindo previsibilidade,
          equilíbrio económico e sustentabilidade de longo prazo.
        </p>
      </div>

      {/* Sistema de indicação */}
      <div className="bg-black/40 border border-[#3B82F6]/30 rounded-2xl p-6 backdrop-blur-sm">
        <h3 className="text-lg font-bold text-[#3B82F6] mb-3">
          🌐 Sistema de Indicação
        </h3>
        <p className="text-gray-300 leading-relaxed">
          Bónus <strong>multinível automáticos</strong>,
          executados por smart contracts,
          promovendo crescimento orgânico,
          transparência total e meritocracia.
        </p>
      </div>

      {/* Governança implícita */}
      <div className="bg-black/40 border border-[#D4AF37]/30 rounded-2xl p-6 backdrop-blur-sm">
        <h3 className="text-lg font-bold text-[#D4AF37] mb-3">
          🏛️ Governança Corporativa
        </h3>
        <p className="text-gray-300 leading-relaxed">
          A E-Coin integra governança clara,
          auditorias independentes e controlo comunitário,
          alinhando interesses de utilizadores,
          investidores e da corporação.
        </p>
      </div>
    </div>

    {/* 🔎 Fecho */}
    <div className="pt-6 max-w-4xl mx-auto">
      <p className="text-[#22C55E] text-lg sm:text-xl font-semibold mb-3">
        🔎 Uma moeda feita para durar
      </p>
      <p className="text-gray-400 leading-relaxed">
        A EdenKingDom Coin não foi criada para especulação de curto prazo,
        mas para sustentar um <strong>ecossistema económico real,
        auditável e global</strong>.
      </p>
    </div>
  </div>
</motion.section>

{/* SECTION 62 — SEGURANÇA & TRANSPARÊNCIA */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-24 sm:py-32 px-6 rounded-3xl mt-24"
>
  {/* 🌄 Fundo cinematográfico de segurança */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/95 via-[#000]/95 to-[#050505]/100" />
    <div
      className="absolute inset-0 bg-[url('/images/ecoin-seguranca-transparencia-bg.jpg')] bg-cover bg-center opacity-30"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#3B82F6]/30 via-transparent to-[#22C55E]/25 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-6xl mx-auto text-center text-gray-200 space-y-14">
    {/* 🔐 Título */}
    <h2 className="text-2xl sm:text-4xl font-extrabold text-[#3B82F6]">
      🔐 Segurança e Transparência
    </h2>

    {/* 🔒 Blocos de segurança */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
      
      {/* Contratos auditados */}
      <div className="bg-black/40 border border-[#22C55E]/30 rounded-2xl p-6 backdrop-blur-sm">
        <h3 className="text-lg font-bold text-[#22C55E] mb-3">
          ✅ Contratos Inteligentes Auditados
        </h3>
        <p className="text-gray-300 leading-relaxed">
          Todos os contratos da <strong> E-Coin </strong> são
          <strong> código aberto</strong>,
          auditáveis publicamente e
          <strong> verificados no BscScan</strong>,
          garantindo confiança técnica e transparência total. A <strong> E-Coin </strong> foi publicamente auditada com as seguintes entidades: <strong> Certik </strong>, <strong> Hashdit </strong> e a <strong> GoPlus </strong>.
        </p>
      </div>

      {/* Proteção antidumping */}
      <div className="bg-black/40 border border-[#F59E0B]/30 rounded-2xl p-6 backdrop-blur-sm">
        <h3 className="text-lg font-bold text-[#F59E0B] mb-3">
          🛡️ Proteção Anti-dumping & Liquidação 
        </h3>
        <p className="text-gray-300 leading-relaxed">
          A E-Coin utiliza <strong> mecanismos automáticos como Buy-Back Engine </strong>
          de controlo de preço e liquidez,
          reduzindo riscos de dumping e quebra de bancas e ou liquidação de Contas de traders e holders,
          manipulação de mercado ou choques abruptos.
        </p>
      </div>

      {/* Transparência total */}
      <div className="bg-black/40 border border-[#3B82F6]/30 rounded-2xl p-6 backdrop-blur-sm">
        <h3 className="text-lg font-bold text-[#3B82F6] mb-3">
          🌐 Transparência Total
        </h3>
        <p className="text-gray-300 leading-relaxed">
          Todas as transações da E-Coin são
          <strong> registadas na blockchain </strong>,
          públicas, imutáveis e
          <strong> totalmente rastreáveis </strong>
          por qualquer utilizador.
        </p>
      </div>
    </div>

    {/* 📜 Declaração institucional */}
    <div className="max-w-4xl mx-auto border-l-4 border-[#D4AF37]/70 pl-6 text-left">
      <p className="text-gray-300 leading-relaxed italic">
        “A E-Coin opera sob <strong> auditoria permanente </strong>
        e com <strong> total transparência na blockchain</strong> —
        nenhum dado é ocultado do público.”
      </p>
    </div>

    {/* 🔎 Fecho */}
    <div className="pt-6">
      <p className="text-[#22C55E] text-lg sm:text-xl font-semibold mb-3">
        🔎 Confiança não se promete — constrói-se
      </p>
      <p className="text-gray-400 leading-relaxed">
        Segurança, transparência e verificabilidade
        são os pilares que sustentam a
        <strong> credibilidade de longo prazo </strong>
        da EdenKingDom Coin.
      </p>
    </div>
  </div>
</motion.section>

{/* SECTION 63 — EXPANSÃO & LISTAGEM GLOBAL */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-24 sm:py-32 px-6 rounded-3xl mt-24"
>
  {/* 🌄 Fundo cinematográfico global */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/95 via-[#000]/95 to-[#050505]/100" />
    <div
      className="absolute inset-0 bg-[url('/images/ecoin-expansao-listagem-global-bg.jpg')] bg-cover bg-center opacity-30"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/30 via-transparent to-[#3B82F6]/30 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-6xl mx-auto text-center text-gray-200 space-y-14">
    {/* 🚀 Título */}
    <h2 className="text-2xl sm:text-4xl font-extrabold text-[#D4AF37]">
      🚀 Expansão e Listagem Global
    </h2>

    {/* 🌍 Introdução */}
    <p className="text-gray-300 leading-relaxed text-base sm:text-lg max-w-4xl mx-auto">
      A <strong>EdenKingDom Coin (E-Coin)</strong> segue um plano de
      <strong> expansão progressiva e estratégica</strong>,
      garantindo liquidez, visibilidade global e
      integração com infraestruturas financeiras internacionais.
    </p>

    {/* 🧭 Etapas */}
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 text-left">
      {/* Etapa 1 */}
      <div className="bg-black/40 border border-[#22C55E]/30 rounded-2xl p-6 backdrop-blur-sm">
        <h3 className="text-lg font-bold text-[#22C55E] mb-3">
          1️⃣ Pré-Listagem (DEX)
        </h3>
        <p className="text-gray-300 leading-relaxed">
          A E-Coin inicia a sua jornada de mercado com
          <strong> listagem em DEXs estratégicas</strong>,
          incluindo a <strong>EBC DEX (E-Swap)</strong>,
          <strong>PancakeSwap</strong> e outras DEXs,
          ao preço inicial de <strong>US$ 0,30</strong>.
        </p>
      </div>

      {/* Etapa 2 */}
      <div className="bg-black/40 border border-[#3B82F6]/30 rounded-2xl p-6 backdrop-blur-sm">
        <h3 className="text-lg font-bold text-[#3B82F6] mb-3">
          2️⃣ Listagem em Corretoras Globais (CEX)
        </h3>
        <p className="text-gray-300 leading-relaxed">
          Expansão para corretoras centralizadas de alcance mundial,
          incluindo <strong>EBC CEX</strong>,
          <strong>Binance</strong>, <strong>OKX</strong>, <strong>Kraken</strong>,
          <strong>Bybit</strong>, <strong>Bitget</strong>, <strong>BingX</strong>,
          <strong>HTX</strong>, <strong>CEX.io</strong>, <strong>Bitfinex</strong>,
          <strong>Bitmart</strong>, <strong>Coinbase</strong>, <strong>VALR</strong>
          e outras plataformas globais.
        </p>
      </div>

      {/* Etapa 3 */}
      <div className="bg-black/40 border border-[#F59E0B]/30 rounded-2xl p-6 backdrop-blur-sm">
        <h3 className="text-lg font-bold text-[#F59E0B] mb-3">
          3️⃣ Parcerias & Gateways
        </h3>
        <p className="text-gray-300 leading-relaxed">
          Integração com <strong>parcerias institucionais</strong>
          e <strong>gateways de pagamento</strong>,
          permitindo uso da E-Coin em
          serviços reais, comércio digital e soluções corporativas.
        </p>
      </div>
    </div>

    {/* 🌐 Fecho institucional */}
    <div className="pt-6 max-w-4xl mx-auto">
      <p className="text-[#D4AF37] text-lg sm:text-xl font-semibold mb-3">
        🌐 Uma estratégia global, construída por etapas
      </p>
      <p className="text-gray-400 leading-relaxed">
        A expansão da E-Coin prioriza
        <strong> solidez, liquidez e conformidade</strong>,
        preparando o ecossistema para
        <strong> adoção institucional e crescimento sustentável</strong>
        a longo prazo.
      </p>
    </div>
  </div>
</motion.section>


{/* SECTION 64 — COMPROMISSO FUTURO & BENEFÍCIOS */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-24 sm:py-32 px-6 rounded-3xl mt-24"
>
  {/* 🌄 Fundo cinematográfico institucional */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/95 via-[#000]/95 to-[#050505]/100" />
    <div
      className="absolute inset-0 bg-[url('/images/ecoin-compromisso-futuro-beneficios-bg.jpg')] bg-cover bg-center opacity-30"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/30 via-transparent to-[#3B82F6]/30 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-6xl mx-auto text-center text-gray-200 space-y-14">
    {/* 💎 Título */}
    <h2 className="text-2xl sm:text-4xl font-extrabold text-[#D4AF37]">
      💎 Compromisso Futuro
    </h2>

    {/* 📘 Compromisso institucional */}
    <p className="text-gray-300 leading-relaxed text-base sm:text-lg max-w-4xl mx-auto">
      A <strong>EdenKingDom Corporation (EKD)</strong> assume um compromisso
      permanente de garantir que a
      <strong> EdenKingDom Coin (E-Coin)</strong>
      esteja sempre alinhada com fundamentos sólidos,
      crescimento real e visão de longo prazo.
    </p>

    {/* 🔗 Pilares */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
      <div className="bg-black/40 border border-[#3B82F6]/30 rounded-2xl p-6 backdrop-blur-sm">
        <p className="text-[#3B82F6] font-bold mb-2">
          🔹 Infraestrutura Sólida
        </p>
        <p className="text-gray-300">
          Baseada em operações corporativas reais,
          multissetoriais e sustentáveis.
        </p>
      </div>

      <div className="bg-black/40 border border-[#22C55E]/30 rounded-2xl p-6 backdrop-blur-sm">
        <p className="text-[#22C55E] font-bold mb-2">
          🔹 Governança Transparente
        </p>
        <p className="text-gray-300">
          Decisões orientadas por regras on-chain,
          auditorias e participação comunitária.
        </p>
      </div>

      <div className="bg-black/40 border border-[#F59E0B]/30 rounded-2xl p-6 backdrop-blur-sm">
        <p className="text-[#F59E0B] font-bold mb-2">
          🔹 Liquidez Sustentável
        </p>
        <p className="text-gray-300">
          Suportada por receitas reais,
          buy-back estratégico e gestão responsável.
        </p>
      </div>

      <div className="bg-black/40 border border-[#D4AF37]/40 rounded-2xl p-6 backdrop-blur-sm">
        <p className="text-[#D4AF37] font-bold mb-2">
          🔹 Expansão Contínua
        </p>
        <p className="text-gray-300">
          Crescimento internacional progressivo,
          alinhado com regulação e adoção real.
        </p>
      </div>
    </div>

    {/* 💼 Benefícios */}
    <div className="max-w-4xl mx-auto border-l-4 border-[#22C55E]/70 pl-6 text-left">
      <h3 className="text-xl sm:text-2xl font-bold text-[#22C55E] mb-4">
        💼 Benefícios para Titulares e Investidores
      </h3>

      <ul className="list-disc list-inside text-gray-300 space-y-3">
        <li>
          <strong>💸 Compras automáticas com cashback</strong>:
          geração contínua de recompensas em E-Coin.
        </li>
        <li>
          <strong>🪙 Staking diário</strong>:
          renda sustentável, auditável e
          contributiva para a liquidez do ecossistema.
        </li>
        <li>
          <strong>📈 Participação real nos lucros</strong>:
          alinhada ao crescimento e desempenho da EKD.
        </li>
      </ul>
    </div>

    {/* 🏛️ Declaração final */}
    <div className="pt-8">
      <p className="text-[#D4AF37] text-xl sm:text-2xl font-bold">
        “Construído desde o Gênesis,
        projetado para a eternidade.”
      </p>
    </div>
  </div>
</motion.section>

{/* SECTION 65 — MODELO DE STAKING: PAGAMENTOS DOS EPOCHS DIÁRIOS */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-24 sm:py-32 px-6 rounded-3xl mt-24"
>
  {/* 🌄 Fundo cinematográfico técnico */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/95 via-[#000]/95 to-[#050505]/100" />
    <div
      className="absolute inset-0 bg-[url('/images/ecoin-modelo-staking-epochs-bg.jpg')] bg-cover bg-center opacity-35"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#3B82F6]/35 via-transparent to-[#22C55E]/25 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-6xl mx-auto text-gray-200 space-y-14">
    {/* 🔷 Título */}
    <h2 className="text-2xl sm:text-4xl font-extrabold text-[#3B82F6] text-center">
      🧮 Modelo de Staking: Pagamentos dos investidores em staking (Stakers & E-Coiners)
    </h2>

    {/* 📘 Conceito Central */}
    <div className="border-l-4 border-[#D4AF37]/70 pl-6 max-w-4xl mx-auto">
      <h3 className="text-xl sm:text-2xl font-bold text-[#D4AF37] mb-3">
        📌 Conceito Central
      </h3>
      <p className="text-gray-300 leading-relaxed mb-3">
        O sistema de <strong>Stream Staking CashFlow On-Chain</strong> é o mecanismo que define
        <strong> quando e como</strong> os rendimentos são distribuídos
        aos participantes do <strong>staking da E-Coin</strong>.
      </p>
      <p className="text-gray-400 leading-relaxed">
        Todo o processo é executado <strong>on-chain</strong>,
        com base em <strong>fundos reais e limitados</strong>.
        Não existe promessa de rendimento fixo.
      </p>
    </div>

    {/* 🧠 Fórmula */}
    <div className="bg-black/50 border border-[#3B82F6]/30 rounded-2xl p-8 backdrop-blur-sm text-center max-w-4xl mx-auto">
      <h3 className="text-xl sm:text-2xl font-bold text-[#3B82F6] mb-6">
        🧾 Fórmula Oficial
      </h3>

      <div className="bg-white/90 text-black rounded-xl p-6 inline-block">
        <p className="text-lg sm:text-xl font-mono font-semibold">
          Recompensa<sub>usuário</sub> =
          <span className="mx-2">Stake<sub>usuário</sub></span>
          ÷
          <span className="mx-2">Stake<sub>total</sub></span>
          ×
          <span className="ml-2">Pool<sub>dia</sub></span>
        </p>
      </div>
    </div>

    {/* ⚙️ Características */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center max-w-5xl mx-auto">
      <div className="bg-black/40 border border-[#22C55E]/30 rounded-2xl p-6 backdrop-blur-sm">
        <p className="text-[#22C55E] text-lg font-bold mb-2">
          ⚙️ Automático
        </p>
        <p className="text-gray-300">
          Distribuição executada por contratos inteligentes,
          sem intervenção humana.
        </p>
      </div>

      <div className="bg-black/40 border border-[#3B82F6]/30 rounded-2xl p-6 backdrop-blur-sm">
        <p className="text-[#3B82F6] text-lg font-bold mb-2">
          📊 Proporcional
        </p>
        <p className="text-gray-300">
          Cada utilizador recebe exatamente
          de acordo com a sua participação no staking total.
        </p>
      </div>

      <div className="bg-black/40 border border-[#F59E0B]/30 rounded-2xl p-6 backdrop-blur-sm">
        <p className="text-[#F59E0B] text-lg font-bold mb-2">
          🔍 Transparente
        </p>
        <p className="text-gray-300">
          Todos os cálculos e pagamentos
          são públicos e verificáveis na blockchain.
        </p>
      </div>
    </div>

    {/* 📜 Declaração final */}
    <div className="max-w-4xl mx-auto text-center pt-8">
      <p className="text-gray-400 italic">
        “O sistema de staking da E-Coin é 100% auditável
        e baseado em contratos inteligentes,
        sem qualquer forma de manipulação humana.”
      </p>
    </div>
  </div>
</motion.section>

{/* SECTION 66 — ORIGEM DOS FUNDOS (EPOCH POOL) */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-24 sm:py-32 px-6 rounded-3xl mt-24"
>
  {/* 🌄 Fundo cinematográfico financeiro */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/95 via-[#000]/95 to-[#050505]/100" />
    <div
      className="absolute inset-0 bg-[url('/images/ecoin-origem-fundos-epoch-pool-bg.jpg')] bg-cover bg-center opacity-35"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/30 via-transparent to-[#3B82F6]/30 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-6xl mx-auto text-gray-200 space-y-14">
    {/* 💎 Título */}
    <h2 className="text-2xl sm:text-4xl font-extrabold text-[#D4AF37] text-center">
      💎 Origem dos Fundos (Taxas pagas no Conversor & Stake Claimers)
    </h2>

    {/* 📘 Introdução */}
    <div className="max-w-4xl mx-auto border-l-4 border-[#22C55E]/70 pl-6">
      <p className="text-gray-300 leading-relaxed mb-3">
        No ecossistema da <strong>EdenKingDom Coin (E-Coin)</strong>,
        <strong> não existe criação de dinheiro novo</strong>,
        nem redistribuição artificial entre utilizadores.
      </p>
      <p className="text-gray-400 leading-relaxed">
        O <strong>Reward Pool</strong> (fundo de recompensas diárias)
        é abastecido exclusivamente por
        <strong> fontes legítimas e verificáveis</strong>.
      </p>
    </div>

    {/* 🏦 Fontes do Epoch Pool */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto">
      {/* Pré-venda */}
      <div className="bg-black/40 border border-[#3B82F6]/30 rounded-2xl p-6 backdrop-blur-sm">
        <h3 className="text-lg font-bold text-[#3B82F6] mb-3">
          🪙 Pré-Venda
        </h3>
        <p className="text-gray-300 leading-relaxed">
          <strong>15%</strong> de cada compra de E-Coin
          durante a pré-venda é
          <strong> enviado automaticamente</strong>
          para o pool diário de recompensas.
        </p>
      </div>

      {/* Tesouraria */}
      <div className="bg-black/40 border border-[#F59E0B]/30 rounded-2xl p-6 backdrop-blur-sm">
        <h3 className="text-lg font-bold text-[#F59E0B] mb-3">
          🏛️ Tesouraria EKD
        </h3>
        <p className="text-gray-300 leading-relaxed">
          Lucros reais da <strong>EdenKingDom Corporation</strong>,
          provenientes de vendas, serviços,
          exchanges internas e externas, taxas pagas no Conversor corporativo da E-Coin (E-Swap) & Stake Claimers
          reforçam continuamente o Reward Pool.
        </p>
      </div>

      {/* Reservas */}
      <div className="bg-black/40 border border-[#22C55E]/30 rounded-2xl p-6 backdrop-blur-sm">
        <h3 className="text-lg font-bold text-[#22C55E] mb-3">
          💰 Reservas de Estabilização
        </h3>
        <p className="text-gray-300 leading-relaxed">
          Reservas estratégicas garantem
          <strong> liquidez e estabilidade</strong>
          nos primeiros ciclos,
          especialmente durante listagens iniciais.
        </p>
      </div>
    </div>

    {/* 📌 Regra fundamental */}
    <div className="max-w-4xl mx-auto border-l-4 border-[#D4AF37]/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#D4AF37] mb-3">
        📌 Regra Fundamental
      </h3>
      <p className="text-gray-300 leading-relaxed mb-3">
        O contrato inteligente
        <strong> distribui apenas o que já existe no pool e o que acabou de chegar das taxas pagas no Conversor corporativo da E-Coin (E-Swap) & Stake Claimers instantânea e continuamente em cashflow On-Chain </strong>.
      </p>
      <p className="text-gray-400 leading-relaxed">
        Se não há fundos no Reward Pool,
        <strong> não há pagamento</strong> —
        garantindo sustentabilidade total do sistema.
        O pool é sempre abastecido em
        <strong> E-Coin antes da distribuição</strong>.
      </p>
    </div>

    {/* 📜 Declaração final */}
    <div className="max-w-4xl mx-auto text-center pt-8">
      <p className="text-gray-400 italic">
        “Cada E-Coin no pool representa
        <strong> valor real</strong> proveniente de atividades corporativas —
        não há criação artificial de fundos.”
      </p>
    </div>
  </div>
</motion.section>

{/* SECTION 67 — DISTRIBUIÇÃO DE GANHOS: COMO CADA USUÁRIO RECEBE */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-24 sm:py-32 px-6 rounded-3xl mt-24"
>
  {/* 🌄 Fundo cinematográfico educativo */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-[#000]/90 to-[#050505]/95" />
    <div
      className="absolute inset-0 bg-[url('/images/ecoin-distribuicao-ganhos-usuarios-bg.jpg')] bg-cover bg-center opacity-35"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/30 via-transparent to-[#22C55E]/25 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-6xl mx-auto text-gray-200 space-y-14">
    {/* 📊 Título */}
    <h2 className="text-2xl sm:text-4xl font-extrabold text-[#D4AF37] text-center">
      📊 Distribuição de Ganhos — Como Cada Usuário Recebe?
    </h2>

    {/* 🔢 Etapas de cálculo */}
    <div className="max-w-4xl mx-auto border-l-4 border-[#3B82F6]/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#3B82F6] mb-4">
        🧮 Etapas de Cálculo instantâneo do Reward Pool (CashFlow On-Chain)
      </h3>
      <ol className="list-decimal list-inside text-gray-300 space-y-2">
        <li>
          O contrato calcula quanto há no
          <strong> pool de recompensas</strong>
          (valor total disponível instantâneo em E-Coin).
        </li>
        <li>
          Soma o total investido de todos os utilizadores
          (<strong>staking total</strong>).
        </li>
        <li>
          Distribui o pool
          <strong> proporcionalmente</strong>
          entre os participantes.
        </li>
        <li>
          Cada utilizador recebe
          <strong> exatamente de acordo com a sua participação</strong>.
        </li>
      </ol>
    </div>

    {/* 📌 Exemplo prático */}
    <div className="bg-black/50 border border-[#22C55E]/30 rounded-2xl p-8 backdrop-blur-sm max-w-5xl mx-auto">
      <h3 className="text-xl sm:text-2xl font-bold text-[#22C55E] mb-6">
        💡 Exemplo Prático
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-300">
        <div>
          <p className="font-semibold text-[#D4AF37]">Piscina do Dia</p>
          <p>Valor total diário disponível em E-Coin</p>
        </div>
        <div className="font-bold text-[#22C55E]">
          10.000 E-Coins
        </div>

        <div>
          <p className="font-semibold text-[#D4AF37]">Total em Staking</p>
          <p>Total investido somado entre todos os utilizadores</p>
        </div>
        <div className="font-bold text-[#22C55E]">
          1.000.000 E-Coins
        </div>

        <div>
          <p className="font-semibold text-[#D4AF37]">Usuário com</p>
          <p>50.000 E-Coins em staking</p>
        </div>
        <div className="font-bold text-[#22C55E]">
          Participação de 5%
        </div>

        <div>
          <p className="font-semibold text-[#D4AF37]">Recompensa Diária</p>
          <p>Proporcional à participação</p>
        </div>
        <div className="font-bold text-[#22C55E]">
          500 E-Coins
        </div>
      </div>
    </div>

    {/* 📜 Nota técnica */}
    <div className="max-w-4xl mx-auto text-center pt-6">
      <p className="text-gray-400 italic">
        “O cálculo é automático e proporcional à participação de cada investidor.
        Nada é aleatório — tudo é matemático, transparente e auditável.”
      </p>
    </div>
  </div>
</motion.section>

{/* SECTION 68 — POR QUE O APR MUDA (A FAVOR DE QUE MUDE) */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-24 sm:py-32 px-6 rounded-3xl mt-24"
>
  {/* 🌄 Fundo cinematográfico educativo */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-[#000]/90 to-[#050505]/95" />
    <div
      className="absolute inset-0 bg-[url('/images/ecoin-apr-dinamico-sustentabilidade-bg.jpg')] bg-cover bg-center opacity-35"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/25 via-transparent to-[#22C55E]/25 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-6xl mx-auto text-gray-200 space-y-14">
    {/* 🔄 Título */}
    <h2 className="text-2xl sm:text-4xl font-extrabold text-[#D4AF37] text-center">
      🔄 Por Que o APR Muda (E Por Que Isso É Bom)
    </h2>

    {/* 📘 Introdução */}
    <div className="max-w-4xl mx-auto border-l-4 border-[#3B82F6]/70 pl-6">
      <p className="text-gray-300 leading-relaxed mb-3">
        Os rendimentos instantâneos (<strong>APR — Annual Percentage Rate</strong>)
        da <strong>E-Coin</strong> <strong>não são fixos</strong>.
      </p>
      <p className="text-gray-400 leading-relaxed">
        Eles variam conforme o
        <strong> comportamento real do ecossistema e utilidade real e instantânea dos E-Coiners</strong>,
        garantindo <strong>sustentabilidade</strong>,
        <strong> equilíbrio</strong> e <strong>transparência</strong>.
      </p>
    </div>

    {/* ⚖️ Fatores */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
      {/* Fator 1 */}
      <div className="bg-black/40 border border-[#22C55E]/30 rounded-2xl p-6 backdrop-blur-sm">
        <h3 className="text-lg font-bold text-[#22C55E] mb-3">
          💧 Tamanho do Pool instantâneo
        </h3>
        <p className="text-gray-300 leading-relaxed mb-2">
          Se a tesouraria ou as compras da pré-venda e ou as Taxas pagas no Conversor & Stake Claimers aumentam,
          o <strong> pool diário cresce</strong>.
        </p>
        <p className="text-gray-400">
          ➜ Pool maior → <strong>usuários ganham mais</strong><br />
          ➜ Pool menor → <strong>percentuais caem ou usuários ganham menos</strong>
        </p>
      </div>

      {/* Fator 2 */}
      <div className="bg-black/40 border border-[#3B82F6]/30 rounded-2xl p-6 backdrop-blur-sm">
        <h3 className="text-lg font-bold text-[#3B82F6] mb-3">
          📊 Total em Staking
        </h3>
        <p className="text-gray-300 leading-relaxed mb-2">
          Se mais pessoas fazem staking,
          o <strong>pool é dividido entre mais participantes</strong>.
        </p>
        <p className="text-gray-400">
          ➜ Mais stakers → cada um recebe um pouco menos<br />
          ➜ Menos stakers → cada um recebe mais
        </p>
      </div>
    </div>

    {/* ✅ Sustentabilidade */}
    <div className="max-w-4xl mx-auto border-l-4 border-[#22C55E]/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#22C55E] mb-3">
        ✅ Por Que Isso É Sustentável
      </h3>
      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>
          Não depende de <strong> novos usuários </strong>
          para pagar os antigos.
        </li>
        <li>
          Depende apenas do
          <strong> tamanho real do pool </strong>
          e da <strong> participação on-chain </strong>.
        </li>
        <li>
          Modelo <strong>anti-pirâmide</strong>,
          sem promessas artificiais de retorno fixo.
        </li>
      </ul>
    </div>

    {/* 📜 Declaração final */}
    <div className="max-w-4xl mx-auto text-center pt-8">
      <p className="text-gray-400 italic">
        “Na E-Coin, o rendimento é justo ao desempenho real —
        um reflexo do equilíbrio entre liquidez,
        staking e transparência.”
      </p>
    </div>
  </div>
</motion.section>

{/* SECTION 69 — RETIRADA & INTEGRAÇÃO COM PRÉ-VENDA */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-24 sm:py-32 px-6 rounded-3xl mt-24"
>
  {/* 🌄 Fundo cinematográfico de fluxo financeiro */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/95 via-[#000]/95 to-[#050505]/100" />
    <div
      className="absolute inset-0 bg-[url('/images/ecoin-retirada-integracao-presale-bg.jpg')] bg-cover bg-center opacity-35"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#3B82F6]/30 via-transparent to-[#22C55E]/30 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-6xl mx-auto text-gray-200 space-y-14">
    {/* 💳 Título */}
    <h2 className="text-2xl sm:text-4xl font-extrabold text-[#3B82F6] text-center">
      💳 Retirada e Integração com Pré-Venda
    </h2>

    {/* 🔁 Fluxo funcional */}
    <div className="max-w-5xl mx-auto border-l-4 border-[#D4AF37]/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#D4AF37] mb-4">
        🔁 Fluxo Funcional — Pré-Venda
      </h3>

      <ol className="list-decimal list-inside text-gray-300 space-y-3">
        <li>
          Compras na pré-venda são feitas em
          <strong> USDT (BEP-20)</strong>.
        </li>
        <li>
          O valor é automaticamente convertido em
          <strong> E-Coin</strong>
          (ex.: <strong>1 USDT = 3,33 E-Coins</strong>,
          custo unitário de <strong> $0,30</strong>).
        </li>
        <li>
          <strong>15%</strong> de cada compra é enviado
          <strong> diretamente ao Reward Pool</strong>.
        </li>
        <li>
          O valor restante é direcionado à
          <strong> Tesouraria EKD </strong>
          para reinvestimento e
          <strong> liquidez em DEXs e CEXs</strong>.
        </li>
        <li>
          Cada compra reforça o
          <strong> staking diário</strong>,
          a estabilidade corporativa
          e a liquidez da E-Coin.
        </li>
      </ol>

      <p className="text-gray-400 mt-4">
        ➜ Assim, <strong>cada compra fortalece o staking diário de todos</strong>.
      </p>
    </div>

    {/* 💼 Retirada */}
    <div className="max-w-5xl mx-auto border-l-4 border-[#22C55E]/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#22C55E] mb-4">
        2️⃣ Retirada (Claim)
      </h3>
      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>
          O usuário pode chamar manualmente a função
          <strong> claim()</strong>.
        </li>
        <li>
          Ou permitir que o contrato execute
          <strong> auto-claim </strong>
          no próximo depósito ou retirada. Mas esta funcao nao esta disponível no Stream Staking Cashflow On-Chain - havia no pre-venda apenas.
        </li>
      </ul>
    </div>

    {/* 🔄 Swap / Venda */}
    <div className="max-w-5xl mx-auto border-l-4 border-[#F59E0B]/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#F59E0B] mb-4">
        3️⃣ Swap / Vender / Converter (E-Coin ↔ USDT)
      </h3>
      <p className="text-gray-300 leading-relaxed mb-3">
        O usuário pode converter, fazer swap ou vender
        <strong> ganhos, bônus de referência ou parte do stake</strong>
        diretamente na propria DEX: <strong>E-Coin Converter (E-Swap), EFTE (E-Excgange) e brevemente na PancakeSwap</strong>.
      </p>
      <p className="text-gray-400 leading-relaxed">
        A E-Coin já se encontra <strong>pré-listada</strong>
        e com <strong>liquidez robusta</strong>
        no par <strong>E-Coin / USDT</strong>,
        permitindo uso imediato como
        <strong> meio de sustento diário</strong>.
      </p>
      <p className="text-gray-400 mt-3">
        ➜ Os ganhos são creditados em
        <strong> E-Coin na carteira do usuário</strong>,
        podendo ser convertidos para USDT
        a qualquer momento pelo coporate/Institucional E-Coin Converter (E-Sawp).
      </p>
    </div>

    {/* 💡 Nota final */}
    <div className="max-w-4xl mx-auto text-center pt-8">
      <p className="text-gray-300 font-semibold mb-2">
        💡 Tudo é automático, auditável e controlado por smart contracts.
      </p>
      <p className="text-gray-400 italic">
        “Cada compra fortalece o ecossistema E-Coin —
        criando um ciclo virtuoso entre pré-venda,
        liquidez e staking sustentável.”
      </p>
    </div>
  </div>
</motion.section>

{/* SECTION 70 — FAIXAS DE APR DIÁRIO (EXEMPLOS) */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-24 sm:py-32 px-6 rounded-3xl mt-24"
>
  {/* 🌄 Fundo cinematográfico analítico */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/95 via-[#000]/95 to-[#050505]/100" />
    <div
      className="absolute inset-0 bg-[url('/images/ecoin-faixas-apr-diario-cenarios-bg.jpg')] bg-cover bg-center opacity-35"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#3B82F6]/30 via-transparent to-[#D4AF37]/30 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-6xl mx-auto text-gray-200 space-y-14">
    {/* 📈 Título */}
    <h2 className="text-2xl sm:text-4xl font-extrabold text-[#D4AF37] text-center">
      📈 Sem Faixas de APR Diário - tudo pago instantânea (Exemplos)
    </h2>

    {/* 💡 Conceito Central */}
    <div className="max-w-4xl mx-auto border-l-4 border-[#22C55E]/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#22C55E] mb-3">
        💡 Conceito Central
      </h3>
      <p className="text-gray-300 leading-relaxed mb-3">
        O <strong>APR (Annual Percentage Rate)</strong> representa
        a taxa de retorno anualizada de um investimento.
        No contexto da <strong>E-Coin</strong>, ele é usado como
        <strong> mecanismo estratégico</strong> de redistribuição
        de ganhos provenientes de um <strong>pool comum real</strong>.
      </p>
      <p className="text-gray-400 leading-relaxed">
        O APR reflete a <strong>variação sustentável dos rendimentos diários</strong>,
        baseada exclusivamente no desempenho real do ecossistema.
      </p>
    </div>

    {/* 🏦 Aplicação em DeFi */}
    <div className="max-w-4xl mx-auto border-l-4 border-[#3B82F6]/70 pl-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#3B82F6] mb-3">
        🏦 Aplicação em DeFi
      </h3>
      <p className="text-gray-300 leading-relaxed">
        Em plataformas DeFi, o APR é amplamente utilizado para indicar
        retornos potenciais em <strong>staking</strong>,
        <strong>liquidez</strong>, <strong>earn</strong> ou
        <strong>empréstimos</strong> (ex.: Binance Earn, OKX Staking).
      </p>
    </div>

    {/* 📊 Tabela de cenários */}
    <div className="bg-black/50 border border-[#D4AF37]/30 rounded-2xl p-8 backdrop-blur-sm max-w-5xl mx-auto">
      <h3 className="text-xl sm:text-2xl font-bold text-[#D4AF37] mb-6 text-center">
        📊 Tabela de Cenários (Exemplos)
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
        {/* Conservador */}
        <div className="border border-[#22C55E]/30 rounded-xl p-5 bg-black/40">
          <p className="text-[#22C55E] font-bold mb-2">
            🔹 Conservador
          </p>
          <p className="text-lg font-semibold text-gray-200">
            0,10% – 0,30%
          </p>
          <p className="text-gray-400 mt-2">
            Fase inicial, estruturação
          </p>
        </div>

        {/* Normal */}
        <div className="border border-[#3B82F6]/30 rounded-xl p-5 bg-black/40">
          <p className="text-[#3B82F6] font-bold mb-2">
            🔸 Normal
          </p>
          <p className="text-lg font-semibold text-gray-200">
            0,15% – 0,40%
          </p>
          <p className="text-gray-400 mt-2">
            Operação estável
          </p>
        </div>

        {/* Forte */}
        <div className="border border-[#F59E0B]/30 rounded-xl p-5 bg-black/40">
          <p className="text-[#F59E0B] font-bold mb-2">
            🔺 Forte
          </p>
          <p className="text-lg font-semibold text-gray-200">
            0,40% – 1,00%
          </p>
          <p className="text-gray-400 mt-2">
            Alta demanda e expansão
          </p>
        </div>
      </div>

      <p className="text-gray-400 text-center mt-6">
        📍 Nenhum valor é fixo — tudo depende do
        <strong> volume real no pool </strong>
        e do <strong> total em staking</strong>.
      </p>
    </div>

    {/* 📜 Declaração final */}
    <div className="max-w-4xl mx-auto text-center pt-8">
      <p className="text-gray-400 italic">
        “O desempenho da E-Coin é calculado com base
        em resultados reais e verificados —
        não há promessas, apenas transparência e equilíbrio.”
      </p>
    </div>
  </div>
</motion.section>

{/* SECTION 71 — TRANSPARÊNCIA PÚBLICA */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-24 sm:py-32 px-6 rounded-3xl mt-24"
>
  {/* 🌄 Fundo cinematográfico de auditoria */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/95 via-[#000]/95 to-[#050505]/100" />
    <div
      className="absolute inset-0 bg-[url('/images/ecoin-transparencia-publica-nada-escondido-bg.jpg')] bg-cover bg-center opacity-35"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#3B82F6]/30 via-transparent to-[#D4AF37]/30 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-6xl mx-auto text-gray-200 space-y-14">
    {/* 🧾 Título */}
    <h2 className="text-2xl sm:text-4xl font-extrabold text-[#D4AF37] text-center">
      🧾 Transparência Pública — “Nada Escondido”
    </h2>

    {/* Introdução */}
    <div className="max-w-4xl mx-auto text-center">
      <p className="text-gray-300 leading-relaxed">
        Todos os movimentos do sistema de <strong>staking</strong> e
        <strong> distribuição da E-Coin</strong> são
        <strong> públicos, rastreáveis e auditáveis</strong>.
      </p>
      <p className="text-gray-400 mt-4">
        A EdenKingDom garante transparência em tempo real,
        diretamente via <strong>blockchain</strong> e
        <strong> painéis oficiais de verificação</strong>.
      </p>
    </div>

    {/* ✅ Checklist de Transparência */}
    <div className="bg-black/50 border border-[#D4AF37]/30 rounded-2xl p-8 backdrop-blur-sm max-w-5xl mx-auto">
      <h3 className="text-xl sm:text-2xl font-bold text-[#22C55E] mb-6 text-center">
        ✅ Checklist Diário de Transparência
      </h3>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className="border-b border-[#D4AF37]/40">
              <th className="py-3 px-4 text-[#D4AF37] font-semibold">
                Indicador
              </th>
              <th className="py-3 px-4 text-[#D4AF37] font-semibold">
                Descrição / Origem
              </th>
            </tr>
          </thead>

          <tbody className="text-gray-300">
            <tr className="border-b border-white/10">
              <td className="py-3 px-4">💰 Pool do distribuição instantâneo (E-Coin)</td>
              <td className="py-3 px-4">
                Valor total destinado às recompensas instantâneas
              </td>
            </tr>

            <tr className="border-b border-white/10">
              <td className="py-3 px-4">🪙 Total em staking</td>
              <td className="py-3 px-4">
                Quantidade total de E-Coin travada pelos investidores
              </td>
            </tr>

            <tr className="border-b border-white/10">
              <td className="py-3 px-4">📈 APR diário realizado</td>
              <td className="py-3 px-4">
                Percentual efetivo pago conforme o pool instantâneo de distribuição
              </td>
            </tr>

            <tr className="border-b border-white/10">
              <td className="py-3 px-4">🔗 Hash das transações</td>
              <td className="py-3 px-4">
                Links diretos das funções <code>Reward Pool()</code> e <code>closeStream & Claim()</code>
              </td>
            </tr>

            <tr>
              <td className="py-3 px-4">🧮 Cálculo automático</td>
              <td className="py-3 px-4">
                Execução via smart contract, sem intervenção humana
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-400 text-center mt-6">
        📍 Esses dados podem ser publicados no
        <strong> painel público</strong> ou
        <strong> canal oficial do Telegram EKD dependendo da disponibilidade dos nossos agentes de marketing division</strong>.
      </p>
    </div>

    {/* 📜 Frase institucional */}
    <div className="max-w-4xl mx-auto text-center pt-8">
      <p className="text-gray-400 italic">
        “A transparência é o novo poder.
        Na EdenKingDom, cada E-Coin tem um histórico
        público e verificável em blockchain.”
      </p>
    </div>
  </div>
</motion.section>

{/* SECTION — PAINEL DE LINKS OFICIAIS | EDENKINGDOM CORPORATION */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌌 Fundo cinematográfico institucional */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-black/95 to-black" />
    <div
      className="absolute inset-0 bg-[url('/images/ekd-painel-links-oficiais-bg.jpg')] 
                 bg-cover bg-center opacity-30"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/20 via-transparent to-[#3B82F6]/20 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-6xl mx-auto text-gray-200 space-y-12">
    {/* Título */}
    <div className="text-center">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3B82F6]">
        🌐 Painel de Links Oficiais — EdenKingDom Corporation
      </h2>
      <p className="text-gray-400 mt-3">
        🔗 Redes corporativas e institucionais verificadas
      </p>
    </div>

    {/* Tabela */}
    <div className="overflow-x-auto rounded-xl border border-white/10 bg-black/40 backdrop-blur">
      <table className="w-full text-left text-sm sm:text-base">
        <thead className="bg-white/5 text-[#D4AF37]">
          <tr>
            <th className="px-4 py-3">Plataforma</th>
            <th className="px-4 py-3">Nome / Página</th>
            <th className="px-4 py-3">Link</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-white/10">
          <tr>
            <td className="px-4 py-3">📸 Instagram (Corp.)</td>
            <td className="px-4 py-3">Corporação EdenKingDom</td>
            <td className="px-4 py-3 text-blue-400">
              instagram.com/edenkingdom.corp
            </td>
          </tr>

          <tr>
            <td className="px-4 py-3">👑 Instagram (CEO)</td>
            <td className="px-4 py-3">Athelstan Pateron Atanas</td>
            <td className="px-4 py-3 text-blue-400">
              instagram.com/athelstanatanas
            </td>
          </tr>

          <tr>
            <td className="px-4 py-3">🕊 X (CEO)</td>
            <td className="px-4 py-3">@AthelstanAtanas</td>
            <td className="px-4 py-3 text-blue-400">
              x.com/AthelstanAtanas
            </td>
          </tr>

          <tr>
            <td className="px-4 py-3">🕊 X (Corp.)</td>
            <td className="px-4 py-3">@EdenKingDomCorp</td>
            <td className="px-4 py-3 text-blue-400">
              x.com/EdenkingdomCorp
            </td>
          </tr>

          <tr>
            <td className="px-4 py-3">📘 Facebook (Corp.)</td>
            <td className="px-4 py-3">Página oficial</td>
            <td className="px-4 py-3 text-blue-400">
              facebook.com/share/p/17mv9drSUK
            </td>
          </tr>

          <tr>
            <td className="px-4 py-3">📘 Facebook (CEO)</td>
            <td className="px-4 py-3">Página oficial do CEO</td>
            <td className="px-4 py-3 text-blue-400">
              facebook.com/share/p/1Cvuw7CCPN
            </td>
          </tr>

          <tr>
            <td className="px-4 py-3">📹 YouTube</td>
            <td className="px-4 py-3">Canal oficial da EKD</td>
            <td className="px-4 py-3 text-blue-400">
              youtube.com/channel/UCA7ndIm6iUhybDU72KxcLKg
            </td>
          </tr>

          <tr>
            <td className="px-4 py-3">🎵 TikTok</td>
            <td className="px-4 py-3">@edenkingdomcorp2025</td>
            <td className="px-4 py-3 text-blue-400">
              tiktok.com/@edenkingdomcorp2025
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Nota final */}
    <div className="text-center text-gray-400 italic">
      “Todos os canais acima são oficiais, públicos e verificados —
      a voz institucional da EdenKingDom Corporation.”
    </div>
  </div>
</motion.section>

{/* SECTION — CANAIS DE COMUNICAÇÃO DIRETA | EDENKINGDOM */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌌 Fundo cinematográfico institucional */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-black/95 to-black" />
    <div
      className="absolute inset-0 bg-[url('/images/ekd-canais-comunicacao-direta-bg.jpg')]
                 bg-cover bg-center opacity-30"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/20 via-transparent to-[#3B82F6]/20 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-6xl mx-auto text-gray-200 space-y-12">
    {/* Título */}
    <div className="text-center">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3B82F6]">
        💬 Canais de Comunicação Direta
      </h2>
      <p className="text-gray-400 mt-3">
        Comunicação oficial, suporte e comunidades EdenKingDom
      </p>
    </div>

    {/* Tabela */}
    <div className="overflow-x-auto rounded-xl border border-white/10 bg-black/40 backdrop-blur">
      <table className="w-full text-left text-sm sm:text-base">
        <thead className="bg-white/5 text-[#D4AF37]">
          <tr>
            <th className="px-4 py-3">Tipo</th>
            <th className="px-4 py-3">Nome / Canal</th>
            <th className="px-4 py-3">Link</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-white/10">
          <tr>
            <td className="px-4 py-3">💬 Canal do Telegram</td>
            <td className="px-4 py-3">Corporação EdenKingDom</td>
            <td className="px-4 py-3 text-blue-400">t.me/EKDCorp</td>
          </tr>

          <tr>
            <td className="px-4 py-3">👥 Grupo Geral do Telegram</td>
            <td className="px-4 py-3">Corporação EdenKingDom</td>
            <td className="px-4 py-3 text-blue-400">t.me/EdenKingDom</td>
          </tr>

          <tr>
            <td className="px-4 py-3">🏛 Grupo Telegram EFTE</td>
            <td className="px-4 py-3">
              EdenKingDom Financial Tools Empire (EFTE) <br />
              <span className="text-xs text-gray-400">
                (plataforma de câmbio e negociação EKD)
              </span>
            </td>
            <td className="px-4 py-3 text-blue-400">
              t.me/EU2emeB9Zb0k
            </td>
          </tr>

          <tr>
            <td className="px-4 py-3">📲 Canal do WhatsApp</td>
            <td className="px-4 py-3">Canal EKD</td>
            <td className="px-4 py-3 text-blue-400">
              whatsapp.com/channel/0029VaPbiqB9HOdF501
            </td>
          </tr>

          <tr>
            <td className="px-4 py-3">🪙 Grupo WhatsApp E-Coin</td>
            <td className="px-4 py-3">Pré-venda e Staking</td>
            <td className="px-4 py-3 text-blue-400">
              chat.whatsapp.com/GE8VxFJkLm7y
            </td>
          </tr>

          <tr>
            <td className="px-4 py-3">💼 Grupo WhatsApp EFTE</td>
            <td className="px-4 py-3">EdenKingDom Financial Tools Empire (EFTE)</td>
            <td className="px-4 py-3 text-blue-400">
              chat.whatsapp.com/GE7Z3s4eK7OrOIWu
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Nota final */}
    <div className="text-center text-gray-400 italic">
      “Todos os canais acima são oficiais, monitorados e fazem parte
      da infraestrutura de comunicação da EdenKingDom Corporation.”
    </div>
  </div>
</motion.section>

{/* SECTION — LIDERANÇA DE COMUNIDADES & SISTEMA DE REFERÊNCIA | EKD */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌌 Fundo cinematográfico institucional */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-black/95 to-black" />
    <div
      className="absolute inset-0 bg-[url('/images/ekd-lideranca-comunidades-referencia-bg.jpg')]
                 bg-cover bg-center opacity-30"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/20 via-transparent to-[#3B82F6]/20 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-6xl mx-auto text-gray-200 space-y-12">
    {/* Título */}
    <div className="text-center">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3B82F6]">
        👥 Liderança de Comunidades & Sistema de Referência
      </h2>
      <p className="text-gray-400 mt-3">
        Crescimento colaborativo, recompensas automáticas e transparência on-chain
      </p>
    </div>

    {/* Introdução */}
    <div className="border-l-4 border-[#D4AF37]/70 pl-6 space-y-4">
      <p className="text-gray-300 leading-relaxed">
        A <strong>EdenKingDom Coin (E-Coin)</strong>, assim como toda a
        <strong> EdenKingDom Corporation (EKD)</strong>, adota um sistema inovador
        de recompensas que incentiva o <strong>crescimento colaborativo das comunidades</strong>
        e o fortalecimento de líderes locais.
      </p>
      <p className="text-gray-400 leading-relaxed">
        Cada interação económica no ecossistema contribui para um ciclo virtuoso
        de valor, participação e impacto social real.
      </p>
    </div>

    {/* Pré-Sale */}
    <div className="border-l-4 border-[#3B82F6]/70 pl-6 space-y-4">
      <h3 className="text-xl sm:text-2xl font-bold text-[#3B82F6]">
        📊 Distribuição de Receitas do Pré-Sale
      </h3>
      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>
          🌱 O poder da E-Coin vem das <strong>comunidades e líderes locais</strong>.
        </li>
        <li>
          💬 Cada compra ou pagamento gera renda para toda a rede,
          de forma <strong>automática, transparente e on-chain</strong>.
        </li>
        <li>
          💰 <strong>100% do valor da compra</strong> é entregue ao comprador/holder
          em <strong>E-Coin</strong>.
        </li>
      </ul>
    </div>

    {/* Tabela de distribuição */}
    <div className="overflow-x-auto rounded-xl border border-white/10 bg-black/40 backdrop-blur">
      <table className="w-full text-left text-sm sm:text-base">
        <thead className="bg-white/5 text-[#D4AF37]">
          <tr>
            <th className="px-4 py-3">Destino</th>
            <th className="px-4 py-3">Percentual</th>
            <th className="px-4 py-3">Finalidade</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-white/10">
          <tr>
            <td className="px-4 py-3">💸 Fundo de Referência</td>
            <td className="px-4 py-3">10%</td>
            <td className="px-4 py-3">
              Bonificações e expansão comunitária
            </td>
          </tr>

          <tr>
            <td className="px-4 py-3">🏦 Liquidez (CEX / DEX)</td>
            <td className="px-4 py-3">50% dos 90% internos</td>
            <td className="px-4 py-3">
              Estabilidade de preço e swapabilidade
              (PancakeSwap e outras DEX/CEX)
            </td>
          </tr>

          <tr>
            <td className="px-4 py-3">🪙 Pool de Staking</td>
            <td className="px-4 py-3">15%</td>
            <td className="px-4 py-3">
              Pagamento das Epochs Diárias
            </td>
          </tr>

          <tr>
            <td className="px-4 py-3">❤️ E-Doação / Projetos Sociais</td>
            <td className="px-4 py-3">10%</td>
            <td className="px-4 py-3">
              Construções públicas e assistência social
            </td>
          </tr>

          <tr>
            <td className="px-4 py-3">🧱 Fundo Ecossistêmico</td>
            <td className="px-4 py-3">15%</td>
            <td className="px-4 py-3">
              Suporte institucional EdenKingDom Corporation
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Nota final */}
    <div className="text-center text-gray-400 italic">
      📍 A tesouraria distribui automaticamente cada fração,
      mantendo <strong>rastreabilidade total on-chain</strong> e
      eliminando qualquer intervenção humana.
    </div>
  </div>
</motion.section>

{/* SECTION — SISTEMA DE BÔNUS & NÍVEIS DE RECOMPENSAS | EKD */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌌 Fundo cinematográfico institucional */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-black/95 to-black" />
    <div
      className="absolute inset-0 bg-[url('/images/ekd-sistema-bonus-niveis-recompensas-bg.jpg')]
                 bg-cover bg-center opacity-30"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/20 via-transparent to-[#3B82F6]/20 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-6xl mx-auto text-gray-200 space-y-12">
    {/* Título */}
    <div className="text-center">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3B82F6]">
        🌐 Sistema de Bônus & Níveis de Recompensas
      </h2>
      <p className="text-gray-400 mt-3">
        Crescimento em rede, incentivos proporcionais e distribuição on-chain
      </p>
    </div>

    {/* Introdução */}
    <div className="border-l-4 border-[#D4AF37]/70 pl-6 space-y-4">
      <p className="text-gray-300 leading-relaxed">
        O sistema de bônus da <strong>EdenKingDom Coin (E-Coin)</strong> foi
        projetado para recompensar <strong>liderança, educação e crescimento sustentável</strong>,
        respeitando princípios de proporcionalidade, transparência e rastreabilidade em blockchain.
      </p>
    </div>

    {/* Pré-venda */}
    <div className="border-l-4 border-[#3B82F6]/70 pl-6 space-y-4">
      <h3 className="text-xl sm:text-2xl font-bold text-[#3B82F6]">
        💎 Pré-Venda — 7 Níveis (9% Total)
      </h3>

      <div className="overflow-x-auto rounded-xl border border-white/10 bg-black/40 backdrop-blur">
        <table className="w-full text-left text-sm sm:text-base">
          <thead className="bg-white/5 text-[#D4AF37]">
            <tr>
              <th className="px-4 py-3">Nível</th>
              <th className="px-4 py-3">Percentual</th>
              <th className="px-4 py-3">Representação</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            <tr><td className="px-4 py-3">1️⃣</td><td className="px-4 py-3">5.10%</td><td className="px-4 py-3">🔰 Upline direto</td></tr>
            <tr><td className="px-4 py-3">2️⃣</td><td className="px-4 py-3">1.10%</td><td className="px-4 py-3">🌿 Segundo nível</td></tr>
            <tr><td className="px-4 py-3">3️⃣</td><td className="px-4 py-3">1.00%</td><td className="px-4 py-3">🌼 Terceiro nível</td></tr>
            <tr><td className="px-4 py-3">4️⃣</td><td className="px-4 py-3">0.90%</td><td className="px-4 py-3">🌺 Quarto nível</td></tr>
            <tr><td className="px-4 py-3">5️⃣</td><td className="px-4 py-3">0.50%</td><td className="px-4 py-3">🍀 Quinto nível</td></tr>
            <tr><td className="px-4 py-3">6️⃣</td><td className="px-4 py-3">0.30%</td><td className="px-4 py-3">🌸 Sexto nível</td></tr>
            <tr><td className="px-4 py-3">7️⃣</td><td className="px-4 py-3">0.10%</td><td className="px-4 py-3">🌻 Sétimo nível</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    {/* Staking */}
    <div className="border-l-4 border-[#22C55E]/70 pl-6 space-y-4">
      <h3 className="text-xl sm:text-2xl font-bold text-[#22C55E]">
        💠 Staking — 2 Níveis (1% Total)
      </h3>

      <div className="overflow-x-auto rounded-xl border border-white/10 bg-black/40 backdrop-blur">
        <table className="w-full text-left text-sm sm:text-base">
          <thead className="bg-white/5 text-[#D4AF37]">
            <tr>
              <th className="px-4 py-3">Nível</th>
              <th className="px-4 py-3">Percentual</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            <tr><td className="px-4 py-3">1️⃣</td><td className="px-4 py-3">0.90%</td></tr>
            <tr><td className="px-4 py-3">2️⃣</td><td className="px-4 py-3">0.10%</td></tr>
          </tbody>
        </table>
      </div>
    </div>

    {/* Uso dos bônus */}
    <div className="border-l-4 border-[#F59E0B]/70 pl-6 space-y-4">
      <h3 className="text-xl sm:text-2xl font-bold text-[#F59E0B]">
        📦 Recompensas Pagas em E-Coin
      </h3>
      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>💳 Uso como créditos internos (transporte, serviços, salários, marketplace)</li>
        <li>✈️ Conversão em viagens ou descontos</li>
        <li>💵 Troca por USDT via E-Coin Corverter futuramente na PancakeSwap depois de adicionarmos liquidez no par - ou por Fiat/Crypto via EdenKingDom Financial Tools Empire (EFTE) ou Binance, etc</li>
      </ul>
    </div>

    {/* Nota final */}
    <div className="text-center text-gray-400 italic">
      Todas as bonificações são calculadas automaticamente por smart contracts,
      garantindo <strong>justiça, sustentabilidade e transparência absoluta</strong>.
    </div>
  </div>
</motion.section>

{/* SECTION — COMO INICIAR SEU NEGÓCIO COM E-COIN | EKD */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌌 Fundo cinematográfico educativo */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-black/95 to-black" />
    <div
      className="absolute inset-0 bg-[url('/images/ekd-como-iniciar-negocio-ecoin-bg.jpg')]
                 bg-cover bg-center opacity-30"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/20 via-transparent to-[#3B82F6]/20 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-5xl mx-auto text-gray-200 space-y-12">
    {/* Título */}
    <div className="text-center">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3B82F6]">
        🧭 Como iniciar seu negócio com a EdenKingDom Coin (E-Coin)
      </h2>
      <p className="text-[#D4AF37] mt-3 italic">
        “Comece pequeno, pense grande. Este ano você pode se tornar milionário com a E-Coin.”
      </p>
    </div>

    {/* Passo 1 */}
    <div className="border-l-4 border-[#3B82F6]/70 pl-6 space-y-4">
      <h3 className="text-xl sm:text-2xl font-bold text-[#3B82F6]">
        👣 Passo 1 — Crie uma carteira DEX
      </h3>

      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>
          📱 Instale uma carteira compatível:
          <strong> Trust Wallet</strong>, <strong>MetaMask</strong>,
          <strong> SafePal</strong> ou <strong>Binance Web3</strong>.
        </li>
        <li>
          🔗 Selecione a rede <strong>BNB Smart Chain (BEP-20)</strong>.
        </li>
        <li>
          ➕ Importe o token <strong>E-Coin</strong> manualmente:
        </li>
      </ul>

      {/* Dados do token */}
      <div className="mt-4 rounded-xl bg-black/40 border border-white/10 p-4 space-y-2 text-sm sm:text-base">
        <p><strong>Contrato:</strong> <span className="text-[#22C55E]">0xDf69235019cc416dd5Be75dfc0eDc922aB4b5964</span></p>
        <p><strong>Nome:</strong> EdenKingDom Coin</p>
        <p><strong>Símbolo:</strong> E-Coin</p>
        <p><strong>Decimais:</strong> 18</p>
      </div>
    </div>

    {/* Aviso de segurança */}
    <div className="border-l-4 border-red-500/70 pl-6 space-y-3">
      <h4 className="text-lg font-bold text-red-400">
        ⚠️ Aviso de Segurança Importante
      </h4>
      <ul className="list-disc list-inside text-gray-300 space-y-1">
        <li>Nunca compartilhe suas <strong>12 palavras de recuperação</strong>.</li>
        <li>Nunca revele sua <strong>chave privada</strong>.</li>
        <li>
          ✅ Anote as palavras em papel e guarde em
          <strong> local seguro e offline</strong>.
        </li>
      </ul>
    </div>

    {/* Nota final */}
    <div className="text-center text-gray-400 italic">
      A sua carteira é a sua identidade financeira no ecossistema EdenKingDom.
      Proteja-a como protege o seu futuro.
    </div>
  </div>
</motion.section>

{/* SECTION — ENTRANDO NA PLATAFORMA | EKD */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌌 Fundo cinematográfico educativo */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-black/95 to-black" />
    <div
      className="absolute inset-0 bg-[url('/images/ekd-entrando-plataforma-ecoin-bg.jpg')]
                 bg-cover bg-center opacity-30"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/20 via-transparent to-[#3B82F6]/20 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-5xl mx-auto text-gray-200 space-y-12">
    {/* Título */}
    <div className="text-center">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3B82F6]">
        🌍 Entrando na Plataforma EdenKingDom
      </h2>
      <p className="text-gray-400 mt-3">
        Acesso direto, descentralizado e sem burocracia
      </p>
    </div>

    {/* Passo 2 */}
    <div className="border-l-4 border-[#22C55E]/70 pl-6 space-y-4">
      <h3 className="text-xl sm:text-2xl font-bold text-[#22C55E]">
        👣 Passo 2 — Acesse o App / Mini-App ou Site Oficial da E-Coin
      </h3>

      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>
          🔌 Conecte a sua <strong>carteira DEX</strong>
          (Trust Wallet, MetaMask, SafePal ou Binance Web3).
        </li>
        <li>
          🚫 <strong>Não é necessário</strong> criar conta, login ou senha.
        </li>
        <li>
          🌐 A plataforma é <strong>100% descentralizada</strong> e integrada
          diretamente à <strong>BscScan</strong>.
        </li>
      </ul>
    </div>

    {/* Segurança */}
    <div className="border-l-4 border-[#3B82F6]/70 pl-6 space-y-3">
      <h4 className="text-lg font-bold text-[#3B82F6]">
        🔒 Privacidade e Segurança
      </h4>
      <ul className="list-disc list-inside text-gray-300 space-y-1">
        <li>
          Nenhum dado pessoal é exigido
          (nome, e-mail, telefone ou documentos).
        </li>
        <li>
          Todas as ações são executadas <strong>via blockchain</strong>.
        </li>
        <li>
          A sua carteira é a sua identidade — <strong>você mantém o controle total</strong>.
        </li>
      </ul>
    </div>

    {/* Nota final */}
    <div className="text-center text-gray-400 italic">
      Na EdenKingDom, o acesso é simples, a soberania é do usuário
      e a confiança é garantida pela tecnologia blockchain.
    </div>
  </div>
</motion.section>

{/* SECTION — COMPRANDO E-COIN (PRÉ-VENDA) | EKD */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌌 Fundo cinematográfico educativo */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-black/95 to-black" />
    <div
      className="absolute inset-0 bg-[url('/images/ekd-comprando-ecoin-presale-bg.jpg')]
                 bg-cover bg-center opacity-30"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/20 via-transparent to-[#3B82F6]/20 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-5xl mx-auto text-gray-200 space-y-12">
    {/* Título */}
    <div className="text-center">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3B82F6]">
        💵 Comprando EdenKingDom Coin (E-Coin)
      </h2>
      <p className="text-gray-400 mt-3">
        Compra simples, transparente e automática via blockchain
      </p>
    </div>

    {/* Passo 3 */}
    <div className="border-l-4 border-[#22C55E]/70 pl-6 space-y-4">
      <h3 className="text-xl sm:text-2xl font-bold text-[#22C55E]">
        👣 Passo 3 — Como comprar E-Coin na pré-venda?
      </h3>

      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>
          💱 <strong>Moeda aceita:</strong> USDT (<strong>BEP-20</strong>).
        </li>
        <li>
          🔢 Digite o valor e veja o <strong>cálculo instantâneo</strong>
          (ex.: <em>1 ou 100 USDT → 3,33 ou 333 E-Coin</em>).
        </li>
        <li>
          💸 <strong>Compra mínima:</strong> apenas <strong>0,1 USDT</strong>.
        </li>
        <li>
          ✅ Após a confirmação, a <strong>E-Coin é adicionada automaticamente</strong>
          à sua carteira.
        </li>
      </ul>
    </div>

    {/* Distribuição da compra */}
    <div className="border-l-4 border-[#3B82F6]/70 pl-6 space-y-4">
      <h4 className="text-lg sm:text-xl font-bold text-[#3B82F6]">
        📊 Distribuição automática da compra
      </h4>

      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>
          🪙 <strong>15%</strong> de cada compra é direcionado ao
          <strong> fundo de staking (Epoch Pool)</strong>.
        </li>
        <li>
          🏛️ Apenas a <strong>parcela destinada ao Tesouro EKD</strong>
          é separada para liquidez e reinvestimento.
        </li>
        <li>
          💎 Para o usuário/cliente/titular,
          <strong>100% do valor em E-Coin</strong> correspondente à compra
          é devidamente entregue.
        </li>
      </ul>
    </div>

    {/* Nota final */}
    <div className="text-center text-gray-400 italic">
      Cada compra fortalece o ecossistema E-Coin,
      reforça o staking diário e aumenta a liquidez do token.
    </div>
  </div>
</motion.section>

{/* SECTION — FAZENDO STAKING & GANHANDO | EKD */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌌 Fundo cinematográfico educativo */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-black/95 to-black" />
    <div
      className="absolute inset-0 bg-[url('/images/ekd-fazendo-staking-ganhando-bg.jpg')]
                 bg-cover bg-center opacity-30"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/20 via-transparent to-[#3B82F6]/20 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-5xl mx-auto text-gray-200 space-y-12">
    {/* Título */}
    <div className="text-center">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3B82F6]">
        💰 Fazendo Staking (investir) para ganhar mais 🚀
      </h2>
      <p className="text-gray-400 mt-3">
        Transforme E-Coins em renda diária sustentável
      </p>
    </div>

    {/* Passo 4 */}
    <div className="border-l-4 border-[#22C55E]/70 pl-6 space-y-4">
      <h3 className="text-xl sm:text-2xl font-bold text-[#22C55E]">
        👣 Passo 4 — Ative o Stream Staking
      </h3>

      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>
          💎 Acesse o painel <strong>“E-Coin Stream Staking”</strong>.
        </li>
        <li>
          🖱️ Introduza o valor em E-Coin que pretende investir e clique em <strong>Stake</strong>,
          insira a quantidade desejada.
        </li>
        <li>
          🔐 Confirme a transação na sua carteira
          (<strong>MetaMask</strong> ou equivalente).
        </li>
      </ul>
    </div>

    {/* Funcionamento */}
    <div className="border-l-4 border-[#3B82F6]/70 pl-6 space-y-4">
      <h4 className="text-lg sm:text-xl font-bold text-[#3B82F6]">
        📈 Como funcionam os ganhos
      </h4>

      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>
          🪙 Seus <strong>E-Coin ficam bloqueados </strong>
          durante o período de staking que quiseres e podes remover o seu investimento a qualquer altura que quiseres clicando em <strong> Unstake</strong>.
        </li>
        <li>
          💹 Os ganhos instantâneos variam entre
          <strong> 0,1% e 1%</strong>, sobre o seu investimento e conforme o desempenho do ecossistema.
        </li>
        <li>
          ⚖️ Recompensas <strong>sustentáveis e proporcionais </strong>
          ao tamanho do pool de recompensas sustentado por actividades reais do ecossistema e ao total em staking.
        </li>
      </ul>
    </div>

    {/* Nota final */}
    <div className="text-center text-gray-400 italic">
      O staking da E-Coin é baseado em valor real,
      liquidez corporativa e regras automáticas on-chain —
      sem promessas irreais, apenas resultados transparentes.
    </div>
  </div>
</motion.section>

{/* SECTION — EPOCHS DIÁRIOS & CLAIM DE RECOMPENSAS | EKD */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌌 Fundo cinematográfico institucional */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-black/95 to-black" />
    <div
      className="absolute inset-0 bg-[url('/images/ekd-epochs-diarios-claim-recompensas-bg.jpg')]
                 bg-cover bg-center opacity-30"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/20 via-transparent to-[#3B82F6]/20 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-5xl mx-auto text-gray-200 space-y-12">
    {/* Título */}
    <div className="text-center">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3B82F6]">
        ⏳ Lucros & Pagamentos instantâneas & Recebimento de Recompensas
      </h2>
      <p className="text-gray-400 mt-3">
        Ciclos automáticos, auditoria pública e ganhos contínuos
      </p>
    </div>

    {/* Epochs */}
    <div className="border-l-4 border-[#22C55E]/70 pl-6 space-y-4">
      <h3 className="text-xl sm:text-2xl font-bold text-[#22C55E]">
        📅 Como funciona a distribuição instantânea dos ganhos?
      </h3>

      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>
          ⏱️ A cada <strong>instante que ocorrem os claims e converts de E-Coin</strong>, o contrato Stream Staking, fecha instantânea e automaticamente
          um ciclo (<strong>stream cashflow - distribuição instantânea de 10% dos 0.5% & 2.5% de taxas de convert assim como 40% de 1% de taxa de Claim</strong>).
        </li>
        <li>
          💰 O sistema mostra o <strong>total do pool de recompensas instantâneo</strong>.
        </li>
        <li>
          📈 Exibe o <strong>APR ou % da sua participação no Stream Staking e quanto tu tens disponivel a resgatar ou fazer Claim </strong>.

        </li>
        <li>
          🔗 Publica o <strong>hash da transação</strong> no
          <strong> BscScan</strong> — <strong>100% auditável</strong>.
        </li>
      </ul>
    </div>

    {/* Recebendo recompensas */}
    <div className="border-l-4 border-[#3B82F6]/70 pl-6 space-y-4">
      <h3 className="text-xl sm:text-2xl font-bold text-[#3B82F6]">
        🎁 Recebendo suas Recompensas
      </h3>

      <h4 className="text-lg font-semibold text-gray-300">
        👣 Passo 6 — Claim
      </h4>

      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>
          🎉 Acesse a aba <strong>“Recompensas”</strong>.
        </li>
        <li>
          🖱️ Clique em <strong>Claim</strong> para receber os ganhos acumulados.
        </li>
        
      </ul>
    </div>

    {/* Nota final */}
    <div className="text-center text-gray-400 italic">
      Tudo funciona de forma automática, transparente e on-chain.
      Você escolhe: receber, reinvestir ou combinar ambos —
      o contrato executa com precisão matemática.
    </div>
  </div>
</motion.section>

{/* SECTION — USANDO SUAS E-COIN | EKD */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌌 Fundo cinematográfico educativo */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-black/95 to-black" />
    <div
      className="absolute inset-0 bg-[url('/images/ekd-usando-suas-ecoin-bg.jpg')]
                 bg-cover bg-center opacity-30"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/20 via-transparent to-[#3B82F6]/20 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-5xl mx-auto text-gray-200 space-y-12">
    {/* Título */}
    <div className="text-center">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3B82F6]">
        🛒 Usando Suas EdenKingDom Coin (E-Coin)
      </h2>
      <p className="text-gray-400 mt-3">
        Liberdade total de uso, conversão e reinvestimento
      </p>
    </div>

    {/* Passo 7 */}
    <div className="border-l-4 border-[#22C55E]/70 pl-6 space-y-4">
      <h3 className="text-xl sm:text-2xl font-bold text-[#22C55E]">
        👣 Passo 7 — Use como quiser
      </h3>

      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>
          ♻️ <strong>Reinvista</strong> seus ganhos realizando um
          <strong> novo staking</strong>.
        </li>
        <li>
          💱 <strong>Converta</strong> E-Coin para
          <strong> USDT</strong> no nosso E-Coin Converter, Sell via EFTE (E-Exchange) e futuramente via <strong>PancakeSwap</strong>
          (par E-Coin/USDT).
        </li>
        <li>
          🏪 <strong>Pague produtos e serviços</strong> dentro do
          <strong> EdenKingDom Marketplace </strong>, EFC, CarWashing, etc e em parceiros do ecossistema.
        </li>
      </ul>
    </div>

    {/* Utilidade */}
    <div className="border-l-4 border-[#3B82F6]/70 pl-6 space-y-4">
      <h4 className="text-lg sm:text-xl font-bold text-[#3B82F6]">
        🌐 Utilidade prática e liquidez real
      </h4>

      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>
          A E-Coin foi criada para <strong>uso real</strong>,
          não apenas para holding.
        </li>
        <li>
          O usuário escolhe entre <strong>consumir, converter ou reinvestir</strong>.
        </li>
        <li>
          Todas as operações são <strong>on-chain, auditáveis e transparentes</strong>.
        </li>
      </ul>
    </div>

    {/* Nota final */}
    <div className="text-center text-gray-400 italic">
      A E-Coin é valor em movimento:
      você decide como usar — o ecossistema garante liquidez,
      utilidade e sustentabilidade.
    </div>
  </div>
</motion.section>

{/* SECTION — QUESTÕES DE REFLEXÃO SOBRE DINHEIRO DIGITAL | EKD */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌌 Fundo cinematográfico reflexivo */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-black/95 to-black" />
    <div
      className="absolute inset-0 bg-[url('/images/ekd-questoes-reflexao-dinheiro-digital-bg.jpg')]
                 bg-cover bg-center opacity-30"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/15 via-transparent to-[#3B82F6]/15 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-5xl mx-auto text-gray-200 space-y-12">
    {/* Título */}
    <div className="text-center">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#3B82F6]">
        💭 Questões de Reflexão sobre Dinheiro Digital, Bitcoin e E-Coin
      </h2>
      <p className="text-gray-400 mt-3">
        Educação financeira, responsabilidade e valor real
      </p>
    </div>

    {/* Questão 1 */}
    <div className="border-l-4 border-[#22C55E]/70 pl-6 space-y-4">
      <h3 className="text-xl sm:text-2xl font-bold text-[#22C55E]">
        1️⃣ De onde vem o dinheiro em cripto?
      </h3>
      <p className="text-gray-300 leading-relaxed">
        O dinheiro em criptomoedas <strong>não surge do nada</strong>.
        Ele é resultado direto de um processo legítimo de
        <strong> criação de valor</strong>, que pode ocorrer de várias formas:
      </p>
      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>💱 Compra direta em exchanges com moeda fiduciária (USD, MZN, etc.)</li>
        <li>⛏️ Mineração (Bitcoin): validação de blocos com gasto de energia</li>
        <li>🪙 Staking (E-Coin, Ethereum, etc.): bloqueio de fundos para manter a rede</li>
        <li>🛒 Pagamento por serviços ou vendas realizadas em cripto</li>
        <li>🎁 Recompensas institucionais (airdrops, programas oficiais)</li>
      </ul>
      <p className="text-gray-400 italic">
        💡 Nenhum criptoativo nasce sem investimento, energia ou troca de valor real.
      </p>
    </div>

    {/* Questão 2 */}
    <div className="border-l-4 border-[#3B82F6]/70 pl-6 space-y-4">
      <h3 className="text-xl sm:text-2xl font-bold text-[#3B82F6]">
        2️⃣ Criptomoedas podem ser “achadas no chão”?
      </h3>
      <p className="text-gray-300 leading-relaxed">
        A resposta é <strong>não</strong>.
        Criptomoedas não existem fisicamente e cada unidade é
        <strong>registrada e rastreável na blockchain</strong>.
      </p>
      <p className="text-gray-300 leading-relaxed">
        Ninguém “deixa cair” Bitcoin ou E-Coin —
        mas pode <strong>perder o acesso à carteira</strong>
        ao esquecer a chave privada ou frase de recuperação.
      </p>
      <p className="text-gray-400 italic">
        “Em cripto, a responsabilidade e a segurança são pessoais e invioláveis.”
      </p>
    </div>

    {/* Questão 3 */}
    <div className="border-l-4 border-[#F59E0B]/70 pl-6 space-y-4">
      <h3 className="text-xl sm:text-2xl font-bold text-[#F59E0B]">
        3️⃣ As formas de adquirir Bitcoin ou E-Coin são legais?
      </h3>
      <p className="text-gray-300 leading-relaxed">
        <strong>Sim</strong>, desde que realizadas dentro de
        <strong> canais legítimos e transparentes</strong>, como:
      </p>
      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>🏦 Plataformas reguladas (Binance, Coinbase, Kraken, OKX, Bitget)</li>
        <li>📜 Smart contracts auditados (caso da E-Coin)</li>
        <li>🤝 Trocas P2P registradas e rastreáveis</li>
        <li>📈 Programas de staking e mineração validados</li>
      </ul>
      <p className="text-gray-400 italic">
        Essas práticas são reconhecidas internacionalmente,
        desde que não envolvam lavagem de dinheiro, evasão fiscal ou golpes.
      </p>
    </div>

    {/* Conclusão */}
    <div className="text-center text-gray-400 italic">
      Educação financeira é a base da liberdade digital.
      Entender de onde vem o valor é o primeiro passo para usá-lo com consciência.
    </div>
  </div>
</motion.section>

{/* SECTION — PERCEPÇÃO PÚBLICA SOBRE CRIPTOMOEDAS | EKD */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌌 Fundo cinematográfico */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-black/95 to-black" />
    <div
      className="absolute inset-0 bg-[url('/images/ekd-percepcao-publica-cripto-reflexao-bg.jpg')]
                 bg-cover bg-center opacity-30"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/20 via-transparent to-[#3B82F6]/15 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-6xl mx-auto text-gray-200 space-y-12">
    {/* Título */}
    <div className="text-center">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FACC15]">
        🧠 O que as pessoas geralmente pensam sobre essas questões?
      </h2>
      <p className="text-gray-400 mt-3">
        As percepções variam muito conforme o nível de informação
      </p>
    </div>

    {/* Tabela de percepções */}
    <div className="overflow-x-auto rounded-xl border border-white/10">
      <table className="w-full text-sm sm:text-base">
        <thead className="bg-white/5 text-[#FACC15]">
          <tr>
            <th className="px-4 py-3 text-left">Tipo de pessoa</th>
            <th className="px-4 py-3 text-left">Pensamento comum</th>
            <th className="px-4 py-3 text-left">Explicação real</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10">
          <tr>
            <td className="px-4 py-3 font-semibold">Céticos</td>
            <td className="px-4 py-3">“Cripto é dinheiro do nada.”</td>
            <td className="px-4 py-3 text-gray-300">
              Ignoram que há liquidez, energia, capital e valor real por trás do processo.
            </td>
          </tr>
          <tr>
            <td className="px-4 py-3 font-semibold">Curiosos</td>
            <td className="px-4 py-3">“Quero entender, mas é complexo.”</td>
            <td className="px-4 py-3 text-gray-300">
              Falta educação financeira digital e comunicação clara.
            </td>
          </tr>
          <tr>
            <td className="px-4 py-3 font-semibold">Investidores</td>
            <td className="px-4 py-3">“É o futuro inevitável.”</td>
            <td className="px-4 py-3 text-gray-300">
              Entendem a tecnologia, o valor descentralizado e o potencial econômico.
            </td>
          </tr>
          <tr>
            <td className="px-4 py-3 font-semibold">Desinformados</td>
            <td className="px-4 py-3">“É fraude ou lavagem.”</td>
            <td className="px-4 py-3 text-gray-300">
              Julgam sem conhecer a natureza técnica e a rastreabilidade da blockchain.
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Nota de verdade */}
    <p className="text-center text-[#22C55E] font-semibold">
      ✔️ A verdade é que a blockchain é a tecnologia mais auditável e rastreável do planeta.
    </p>

    {/* Perguntas frequentes */}
    <div className="space-y-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#3B82F6]">
        ❓ As perguntas que o público mais faz sobre Bitcoin e E-Coin
      </h3>

      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>“Como posso começar?”</li>
        <li>“É seguro?”</li>
        <li>“Posso perder meu dinheiro?”</li>
        <li>“É legal no meu país?”</li>
        <li>“Qual a diferença entre Bitcoin e E-Coin?”</li>
        <li>“Posso transformar E-Coin em dinheiro real?”</li>
      </ul>

      <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-2">
        <p className="font-semibold text-[#FACC15]">📌 Respostas resumidas:</p>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Sim, comprando de forma legítima e guardando na sua própria carteira.</li>
          <li>Sim, desde que proteja suas chaves privadas.</li>
          <li>Sim, se for descuidado ou cair em esquemas falsos.</li>
          <li>Sim, é legal na maioria dos países com regulamentação parcial.</li>
          <li>Bitcoin é descentralizado e deflacionário; E-Coin não apenas é corporativa, sustentável e com liquidez institucional mas tambem é descentralizado e deflacionário.</li>
        </ul>
      </div>
    </div>
  </div>
</motion.section>

{/* SECTION — O QUE GOVERNOS E INSTITUIÇÕES PENSAM | EKD */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌆 Fundo institucional */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-black/95 to-black" />
    <div
      className="absolute inset-0 bg-[url('/images/ekd-governos-instituicoes-cripto-visao-bg.jpg')]
                 bg-cover bg-center opacity-35"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/15 via-transparent to-[#3B82F6]/20 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-6xl mx-auto text-gray-200 space-y-12">
    {/* Título */}
    <div className="text-center">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FACC15]">
        🏛️ O que os governos e instituições pensam?
      </h2>
      <p className="text-gray-400 mt-3">
        As instituições veem a criptoeconomia sob três prismas principais
      </p>
    </div>

    {/* Tabela institucional */}
    <div className="overflow-x-auto rounded-xl border border-white/10">
      <table className="w-full text-sm sm:text-base">
        <thead className="bg-white/5 text-[#FACC15]">
          <tr>
            <th className="px-4 py-3 text-left">Perspectiva</th>
            <th className="px-4 py-3 text-left">Posição</th>
            <th className="px-4 py-3 text-left">Exemplo</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/10">
          <tr>
            <td className="px-4 py-3 font-semibold">Banco Central</td>
            <td className="px-4 py-3">
              Cautela. Vê risco de perda de controlo monetário.
            </td>
            <td className="px-4 py-3 text-gray-300">
              Banco de Moçambique ainda não regula transações externas em cripto.
            </td>
          </tr>
          <tr>
            <td className="px-4 py-3 font-semibold">Governos</td>
            <td className="px-4 py-3">
              Interesse crescente em tributação e rastreio.
            </td>
            <td className="px-4 py-3 text-gray-300">
              EUA, UE e Brasil já regulam parcialmente.
            </td>
          </tr>
          <tr>
            <td className="px-4 py-3 font-semibold">Empresas Privadas</td>
            <td className="px-4 py-3">
              Adoção acelerada.
            </td>
            <td className="px-4 py-3 text-gray-300">
              Tesla, PayPal, VISA e bancos digitais já operam com cripto.
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    {/* Resultado */}
    <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
      <p className="text-[#22C55E] font-semibold">
        ✔️ As criptomoedas não são inimigas dos governos, mas novas ferramentas
        de política monetária descentralizada.
      </p>
      <p className="text-gray-300 mt-2">
        Quando bem reguladas, geram inclusão, inovação e receita fiscal.
      </p>
    </div>

    {/* Percepção estratégica */}
    <div className="space-y-4">
      <h3 className="text-xl sm:text-2xl font-bold text-[#3B82F6]">
        🔍 Percepções sobre Bitcoin, E-Coin, E-USD e E-Genesis
      </h3>

      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li><strong>Bitcoin</strong> é a semente da liberdade financeira.</li>
        <li>
          <strong>E-Coin</strong> é a evolução — uma moeda corporativa com liquidez
          real, integração institucional e utilidade prática.
        </li>
        <li><strong>E-USD</strong> é ponte entre estabilidade e adoção — um ativo digital indexado ao dólar para transações seguras, previsíveis e escaláveis.</li>
        <li>
          <strong>E-Genesis</strong> é o futuro estatal — o elo entre cripto e economia
          global, servindo como estabilização institucional da EdenKingDom.
        </li>
      </ul>
    </div>

    {/* Conclusão */}
    <div className="bg-gradient-to-r from-[#D4AF37]/10 to-[#3B82F6]/10 border border-white/10 rounded-xl p-6">
      <h3 className="text-xl font-bold text-[#FACC15] mb-3">
        🏁 Conclusão Geral
      </h3>
      <p className="text-gray-300 leading-relaxed">
        O dinheiro não é papel nem número — é energia de confiança.
        <br />
        As criptomoedas transferem essa energia para um ambiente mais livre,
        justo e transparente.
        <br />
        <strong className="text-white">
          Bitcoin abriu o caminho.  
          E-Coin, E-USD e E-Genesis pavimentam a estrada da próxima civilização financeira.
        </strong>
      </p>
    </div>
  </div>
</motion.section>

{/* SECTION — CRIPTOMOEDAS: AMEAÇA OU SOLUÇÃO | EKD */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌍 Fundo estratégico */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-black/95 to-black" />
    <div
      className="absolute inset-0 bg-[url('/images/ekd-cripto-solucao-transformacao-economica-bg.jpg')]
                 bg-cover bg-center opacity-35"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/20 via-transparent to-[#3B82F6]/20 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-6xl mx-auto text-gray-200 space-y-12">

    {/* Título */}
    <div className="text-center space-y-4">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FACC15]">
        ⚖️ As Criptomoedas São uma Ameaça ou uma Solução?
      </h2>
      <p className="text-gray-400 max-w-3xl mx-auto">
        Não são uma ameaça — são um sintoma de uma transformação econômica inevitável.
      </p>
    </div>

    {/* Bloco 1 */}
    <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
      <p className="leading-relaxed">
        As criptomoedas surgem quando o sistema financeiro convencional deixa de
        atender as necessidades reais do cidadão e não acompanha a velocidade
        da globalização.
      </p>

      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>Limites cambiais severos (ex: teto de USD em países emergentes)</li>
        <li>Comércio eletrônico internacional inacessível</li>
        <li>Moedas nacionais sem liquidez externa</li>
      </ul>

      <p className="text-[#22C55E] font-semibold">
        👉 Nesse contexto, as criptomoedas tornam-se a única ponte entre o cidadão
        e a economia mundial.
      </p>
    </div>

    {/* Bloco 2 */}
    <div className="space-y-4">
      <h3 className="text-xl sm:text-2xl font-bold text-[#3B82F6]">
        💡 O Verdadeiro Problema: Falta de Liquidez e Produção Nacional
      </h3>

      <p className="text-gray-300 leading-relaxed">
        Um país que não produz bens com valor de exportação — como automóveis,
        tecnologia, energia ou produtos industriais — não consegue gerar entrada
        consistente de divisas estrangeiras.
      </p>

      <div className="bg-black/40 border border-white/10 rounded-xl p-5 space-y-2">
        <p>❌ Sem exportação → sem entrada de moeda estrangeira</p>
        <p>❌ Sem moeda estrangeira → sem liquidez internacional</p>
        <p>❌ Sem liquidez → bancos limitados a operações internas</p>
      </div>

      <p className="text-gray-300">
        Isso impede o cidadão de comprar cursos internacionais, importar
        mercadorias, pagar fornecedores externos ou participar da economia digital.
      </p>

      <p className="text-[#FACC15] font-semibold">
        As criptomoedas — especialmente tokens corporativos como a E-Coin —
        preenchem esse vazio ao circular globalmente, fora do câmbio tradicional.
      </p>
    </div>

    {/* Bloco 3 */}
    <div className="space-y-4">
      <h3 className="text-xl sm:text-2xl font-bold text-[#22C55E]">
        🌐 O Papel da E-Coin e da EdenKingDom na Nova Era Comercial
      </h3>

      <p className="text-gray-300 leading-relaxed">
        A EdenKingDom Corporation integra produção real com liquidez digital.
        Enquanto o sistema bancário tradicional trava, a EdenKingDom:
      </p>

      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>Cria ativos produtivos locais (indústria, energia, infraestrutura)</li>
        <li>Gera valor interno real</li>
        <li>Converte esse valor em liquidez digital via E-Coin, E-USD e E-Genesis</li>
        <li>Devolve autonomia monetária e poder de compra global</li>
      </ul>

      <div className="bg-gradient-to-r from-[#D4AF37]/10 to-[#3B82F6]/10 border border-white/10 rounded-xl p-6">
        <p className="font-semibold text-white">
          ⚙️ Em termos simples:
        </p>
        <p className="text-gray-300 mt-2">
          O país deixa de ser um consumidor dependente e torna-se um
          produtor industrial e digital conectado ao mundo.
        </p>
      </div>
    </div>

  </div>
</motion.section>

{/* SECTION — CRIPTOMOEDAS REFORMAM OS BANCOS | EKD */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🏦 Fundo institucional */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-black/95 to-black" />
    <div
      className="absolute inset-0 bg-[url('/images/ekd-cripto-reforma-bancaria-futuro-liquidez-bg.jpg')]
                 bg-cover bg-center opacity-35"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/20 via-transparent to-[#3B82F6]/20 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-6xl mx-auto text-gray-200 space-y-12">

    {/* Título */}
    <div className="text-center space-y-4">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FACC15]">
        🪙 As Criptomoedas Não Enfraquecem os Bancos — Reformam-nos
      </h2>
      <p className="text-gray-400 max-w-3xl mx-auto">
        O verdadeiro desafio não é a cripto — é a estagnação institucional.
      </p>
    </div>

    {/* Bloco 4 */}
    <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
      <p className="leading-relaxed">
        A ideia de que as criptomoedas são uma ameaça aos bancos é equivocada.
        Elas não destroem o sistema financeiro — elas exigem que ele evolua.
      </p>

      <p className="text-gray-300">
        Um banco central moderno deveria:
      </p>

      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>Integrar blockchain e stablecoins reguladas</li>
        <li>Permitir o uso de cripto para importações e exportações</li>
        <li>Atuar como fiscalizador e educador — não como bloqueador</li>
      </ul>

      <p className="text-[#22C55E] font-semibold">
        A E-Genesis é um modelo híbrido: stablecoin com paridade garantida e
        lastro corporativo e produtivo, coexistindo com moedas fiduciárias.
      </p>
    </div>

    {/* Bloco 5 */}
    <div className="space-y-4">
      <h3 className="text-xl sm:text-2xl font-bold text-[#3B82F6]">
        🧠 O Caso de Moçambique: Uma Economia à Espera de Modernização
      </h3>

      <p className="text-gray-300 leading-relaxed">
        Limitar o gasto externo a USD 500 é como tentar conter o oceano com um balde.
        Isso não protege a economia — sufoca-a.
      </p>

      <div className="bg-black/40 border border-white/10 rounded-xl p-5 space-y-2">
        <p>❌ Jovens e empreendedores ficam presos financeiramente</p>
        <p>❌ Comércio digital internacional torna-se inviável</p>
        <p>❌ O país perde competitividade global</p>
      </div>

      <p className="text-gray-300">
        Para avançar, o país precisa de:
      </p>

      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>Industrialização local (EdenKingDom Motors, Build+, Fibers)</li>
        <li>Digitalização monetária (E-Coin, E-Pay, E-Genesis)</li>
        <li>Reforma bancária tecnológica</li>
        <li>Inclusão da blockchain nas políticas nacionais</li>
      </ul>
    </div>

    {/* Bloco 6 */}
    <div className="space-y-4">
      <h3 className="text-xl sm:text-2xl font-bold text-[#22C55E]">
        🔮 Conclusão: O Futuro da Liquidez Global
      </h3>

      <p className="text-gray-300 leading-relaxed">
        O Bitcoin abriu o caminho.
        Moedas corporativas funcionais como a E-Coin representam o próximo passo:
        a ponte entre economias locais e o sistema financeiro global.
      </p>

      <div className="bg-gradient-to-r from-[#D4AF37]/10 to-[#3B82F6]/10 border border-white/10 rounded-xl p-6">
        <p className="font-semibold text-white">
          ⚠️ A verdadeira ameaça não são as criptomoedas,
        </p>
        <p className="text-gray-300 mt-2">
          mas a resistência à inovação.
          Quem não se adapta à economia digital torna-se economicamente invisível.
        </p>
      </div>
    </div>

  </div>
</motion.section>

{/* SECTION — UTILIDADE DOS BANCOS NA ERA DIGITAL | EKD */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🏦 Fundo reflexivo */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-black/95 to-black" />
    <div
      className="absolute inset-0 bg-[url('/images/ekd-utilidade-bancos-era-digital-bg.jpg')]
                 bg-cover bg-center opacity-35"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/20 via-transparent to-[#3B82F6]/20 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-6xl mx-auto text-gray-200 space-y-12">

    {/* Título */}
    <div className="text-center space-y-4">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FACC15]">
        🏦 A Grande Questão: Qual é a Utilidade dos Bancos na Era Digital?
      </h2>
      <p className="text-gray-400 max-w-4xl mx-auto">
        Quando a tecnologia avança, mas o sistema financeiro permanece preso ao século passado,
        a pergunta deixa de ser teórica — torna-se urgente.
      </p>
    </div>

    {/* Questionamento central */}
    <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
      <p className="leading-relaxed">
        É legítimo perguntar: qual é a verdadeira utilidade dos bancos,
        se em pleno século XXI ainda exigem presença física para autorizar
        transferências simples e bloqueiam a liberdade financeira dos cidadãos?
      </p>

      <p className="text-gray-300">
        Em Moçambique, por exemplo, para transferir valores relativamente modestos,
        o cidadão é obrigado a enfrentar balcões, formulários, assinaturas
        e justificações extensas — um processo burocrático, invasivo e, muitas vezes, humilhante.
      </p>
    </div>

    {/* Burocracia e desconfiança */}
    <div className="space-y-4">
      <h3 className="text-xl sm:text-2xl font-bold text-[#EF4444]">
        💰 Burocracia e Desconfiança Sistémica
      </h3>

      <p className="text-gray-300 leading-relaxed">
        Em vez de confiança, valores elevados em conta despertam suspeita.
        Bloqueios, investigações desnecessárias, retenções indevidas
        e processos opacos tornam-se comuns.
      </p>

      <div className="bg-black/40 border border-white/10 rounded-xl p-5 space-y-2">
        <p>❌ Subornos e bloqueios arbitrários</p>
        <p>❌ Retenção indevida de fundos</p>
        <p>❌ Inversão do princípio de presunção de inocência</p>
      </div>

      <p className="text-gray-300">
        Parece que, em certos contextos, prosperar é crime.
        A estrutura não admite riqueza limpa fora do círculo político dominante.
      </p>
    </div>

    {/* Exemplo real */}
    <div className="space-y-4">
      <h3 className="text-xl sm:text-2xl font-bold text-[#3B82F6]">
        📺 Exemplo Real e Reflexão Social
      </h3>

      <p className="text-gray-300 leading-relaxed">
        Casos públicos ilustram essa fragilidade institucional:
        cidadãos e figuras públicas enfrentam entraves para utilizar
        recursos legítimos destinados a projetos e pagamentos reais.
      </p>

      <p className="text-gray-300">
        Isso revela insegurança jurídica e operacional —
        algo incompatível com uma economia que pretende ser moderna e competitiva.
      </p>
    </div>

    {/* Conclusão */}
    <div className="bg-gradient-to-r from-[#D4AF37]/10 to-[#3B82F6]/10 border border-white/10 rounded-xl p-6 space-y-3">
      <p className="font-semibold text-white">
        ⚠️ O ponto mais grave:
      </p>
      <p className="text-gray-300">
        O sistema bancário, que deveria proteger,
        passou a punir.
      </p>
      <p className="text-gray-300 italic">
        Liberdade financeira não é ameaça — é direito.
      </p>
    </div>

  </div>
</motion.section>

{/* SECTION — O NOVO CENÁRIO GLOBAL | EKD */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌍 Fundo cinematográfico global */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-black/95 to-black" />
    <div
      className="absolute inset-0 bg-[url('/images/ekd-novo-cenario-global-bancos-vs-economia-digital-bg.jpg')]
                 bg-cover bg-center opacity-35"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/20 via-transparent to-[#3B82F6]/20 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-6xl mx-auto text-gray-200 space-y-12">

    {/* Título */}
    <div className="text-center space-y-4">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FACC15]">
        🌍 O Novo Cenário Global
      </h2>
      <p className="text-gray-400 max-w-4xl mx-auto">
        Enquanto alguns sistemas permanecem presos ao passado,
        o mundo financeiro já entrou definitivamente na era digital.
      </p>
    </div>

    {/* Avanço global */}
    <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
      <p className="leading-relaxed">
        Em países como Japão, China, Malásia, Estados Unidos
        e nações da União Europeia, criptomoedas e pagamentos digitais
        são meios legais, funcionais e integrados há anos.
      </p>

      <p className="text-gray-300">
        Qualquer cidadão pode comprar, vender, investir e pagar
        por produtos ou serviços sem depender de autorizações físicas,
        limites cambiais absurdos ou burocracias humilhantes.
      </p>

      <p className="text-gray-300">
        Encomendas internacionais são feitas em minutos,
        e os produtos chegam à porta do cliente —
        algo ainda impensável em economias onde o digital engatinha.
      </p>
    </div>

    {/* Falta de produção */}
    <div className="space-y-4">
      <h3 className="text-xl sm:text-2xl font-bold text-[#EF4444]">
        🏭 Falta de Produção e Retrocesso Sistémico
      </h3>

      <p className="text-gray-300 leading-relaxed">
        Muitos países africanos, incluindo Moçambique,
        não possuem uma base industrial diversificada.
        O PIB depende quase exclusivamente de recursos naturais brutos,
        sem transformação local nem valor agregado.
      </p>

      <div className="bg-black/40 border border-white/10 rounded-xl p-5 space-y-2">
        <p>❌ Compramos quase tudo do exterior</p>
        <p>❌ Dependemos de moedas estrangeiras</p>
        <p>❌ Perdemos liquidez interna</p>
        <p>❌ Bancos bloqueiam em vez de facilitar</p>
      </div>

      <p className="text-gray-300">
        O resultado é um sistema financeiro parado no tempo,
        com práticas quase feudais em plena era da
        inteligência artificial e blockchain.
      </p>
    </div>

    {/* Conclusão */}
    <div className="bg-gradient-to-r from-[#D4AF37]/10 to-[#3B82F6]/10 border border-white/10 rounded-xl p-6 space-y-4">
      <h3 className="text-xl sm:text-2xl font-bold text-[#22C55E]">
        💡 Conclusão
      </h3>

      <p className="text-gray-300 leading-relaxed">
        O problema não é a existência dos bancos —
        é o modelo ultrapassado com que operam.
      </p>

      <p className="text-gray-300">
        A pergunta já não é se precisamos dos bancos,
        mas se os bancos ainda servem às pessoas
        ou apenas a si mesmos.
      </p>

      <p className="font-semibold text-white">
        Na nova era digital, quem não se adapta será substituído.
      </p>

      <p className="text-gray-400 italic">
        Bloquear o avanço financeiro de um povo
        é bloquear o desenvolvimento de uma nação.
      </p>
    </div>

  </div>
</motion.section>

{/* SECTION — OFERTAS E PROPOSTAS AO MUNDO | COMPROMISSO GLOBAL EKD */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌐 Fundo cinematográfico global */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-black/95 to-black" />
    <div
      className="absolute inset-0 bg-[url('/images/ekd-compromisso-global-ofertas-ao-mundo-bg.jpg')]
                 bg-cover bg-center opacity-35"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/20 via-transparent to-[#3B82F6]/20 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-6xl mx-auto text-gray-200 space-y-14">

    {/* Título */}
    <div className="text-center space-y-4">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FACC15]">
        🌐 Ofertas e Propostas ao Mundo
      </h2>
      <p className="text-gray-400 max-w-4xl mx-auto">
        Compromisso global da EdenKingDom Corporation com o
        desenvolvimento real, sustentável e humano.
      </p>
    </div>

    {/* Declaração global */}
    <div className="border-l-4 border-[#22C55E]/70 pl-6 space-y-4">
      <p className="leading-relaxed text-gray-300">
        A <strong>EdenKingDom Corporation</strong> declara ao mundo que está pronta
        para cooperar com todas as nações onde houver circulação,
        adoção e crescimento efetivo da <strong>EdenKingDom Coin (E-Coin)</strong>.
      </p>

      <p className="text-gray-300">
        Onde houver fluxo da <strong>E-Coin</strong>, haverá
        <strong> desenvolvimento real</strong> —
        pois cada transação representa investimento humano,
        social e estrutural, e não apenas economia digital.
      </p>
    </div>

    {/* Áreas de atuação */}
    <div className="space-y-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#3B82F6]">
        🛠 Áreas de Atuação Global
      </h3>

      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>🏗️ Construção de estradas e pontes modernas</li>
        <li>🏥 Hospitais e centros de saúde com tecnologia avançada</li>
        <li>🎓 Escolas e universidades técnicas digitais</li>
        <li>🚄 Linhas de trem elétrico e de alta velocidade</li>
        <li>💧 Água potável, energia sustentável e redes digitais seguras</li>
        <li>🏭 Zonas industriais e <em>fintech hubs</em> integrados ao mundo</li>
      </ul>
    </div>

    {/* Cooperação */}
    <div className="bg-black/40 border border-white/10 rounded-xl p-6 space-y-4">
      <h3 className="text-xl sm:text-2xl font-bold text-[#22C55E]">
        🤝 Natureza da Cooperação
      </h3>

      <p className="text-gray-300 leading-relaxed">
        Todos os projetos serão executados pelo setor privado da
        <strong> EdenKingDom Corporation</strong>,
        em cooperação direta com governos que desejem alinhar-se
        à nova economia digital global.
      </p>

      <p className="text-gray-300">
        A EdenKingDom não substitui o Estado —
        <strong> auxilia-o a modernizar-se</strong>,
        a reencontrar eficiência, soberania e inclusão tecnológica.
      </p>

      <blockquote className="border-l-4 border-[#D4AF37]/70 pl-4 italic text-gray-400">
        “Não queremos ser a única força econômica —
        queremos ser o impulso que faz o governo reencontrar
        o seu lugar no progresso global.”
        <br />
        <span className="text-sm">
          — Dr. Athelstan Pateron Atanas, CEO Global & Fundador Sénior
        </span>
      </blockquote>
    </div>

    {/* Missão universal */}
    <div className="bg-gradient-to-r from-[#D4AF37]/10 to-[#3B82F6]/10
                    border border-white/10 rounded-xl p-6 space-y-4">
      <h3 className="text-xl sm:text-2xl font-bold text-[#FACC15]">
        🌍 Missão Universal
      </h3>

      <p className="text-gray-300 leading-relaxed">
        O propósito da EdenKingDom é ajudar os povos e governos
        a integrarem-se plenamente na economia digital global,
        com autonomia, dignidade e soberania.
      </p>

      <p className="text-gray-300">
        A EdenKingDom não é apenas uma corporação —
        <strong> é uma aliança entre povos, inovação e humanidade</strong>.
      </p>

      <p className="text-gray-400 italic">
        “Se o mundo caminhar para o progresso, caminharemos à frente.
        Se o mundo parar, continuaremos a construir.”
        <br />
        — EdenKingDom Corporation · Built from Genesis, Designed for Eternity
      </p>
    </div>

  </div>
</motion.section>

{/* SECTION — REFLEXÃO FINAL: TRABALHO, RIQUEZA E CIVILIZAÇÃO | EKD */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌍 Fundo cinematográfico reflexivo */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-black/95 to-black" />
    <div
      className="absolute inset-0 bg-[url('/images/ekd-reflexao-final-trabalho-riqueza-civilizacao-bg.jpg')]
                 bg-cover bg-center opacity-35"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/20 via-transparent to-[#3B82F6]/20 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-6xl mx-auto text-gray-200 space-y-14">

    {/* Título */}
    <div className="text-center space-y-4">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FACC15]">
        💬 Reflexão Final — Trabalho, Riqueza e Civilização na Era da E-Coin
      </h2>
      <p className="text-gray-400 max-w-4xl mx-auto">
        A economia digital não elimina o trabalho — redefine o valor do ser humano.
      </p>
    </div>

    {/* Questão central */}
    <div className="border-l-4 border-[#EF4444]/70 pl-6 space-y-4">
      <h3 className="text-xl sm:text-2xl font-bold text-[#EF4444]">
        ⚖️ A Questão Central
      </h3>

      <p className="text-gray-300 leading-relaxed">
        Surge uma pergunta inevitável:
        <strong> “Se as pessoas tiverem dinheiro e suas necessidades básicas resolvidas,
        quem irá trabalhar?”</strong>
      </p>

      <p className="text-gray-300">
        A resposta é clara:
        <strong> a E-Coin não cria preguiça, cria consciência</strong>.
        A abundância não elimina o trabalho — transforma o tipo de trabalho.
      </p>

      <p className="text-gray-300">
        O que muda não é o esforço humano,
        mas o seu <strong>nível de qualificação, dignidade e valorização</strong>.
      </p>
    </div>

    {/* Problema atual */}
    <div className="space-y-4">
      <h3 className="text-xl sm:text-2xl font-bold text-[#F97316]">
        👷‍♂️ O Problema Atual: A Mão de Obra Barata
      </h3>

      <p className="text-gray-300 leading-relaxed">
        O sofrimento atual não vem da tecnologia,
        mas da ausência de empregos dignos.
        A pobreza força milhões a aceitar qualquer trabalho,
        mesmo sendo altamente qualificados.
      </p>

      <p className="text-gray-300">
        Em Moçambique — e em muitos países —
        um licenciado trabalha como técnico N4,
        símbolo de uma <strong>exploração estrutural da mão de obra</strong>.
      </p>

      <p className="text-gray-300">
        A corrupção sistémica agrava o problema,
        chegando ao absurdo de <strong>se pagar para conseguir emprego</strong>.
        Este é o verdadeiro inimigo do trabalho digno —
        não a revolução digital.
      </p>
    </div>

    {/* Solução */}
    <div className="bg-black/40 border border-white/10 rounded-xl p-6 space-y-4">
      <h3 className="text-xl sm:text-2xl font-bold text-[#22C55E]">
        🪙 A Solução: Estabilização e Justiça Económica
      </h3>

      <p className="text-gray-300 leading-relaxed">
        A <strong>E-Coin</strong> surge para estabilizar a economia popular
        e alinhar salários com o custo real da vida global.
      </p>

      <p className="text-gray-300">
        Hoje, quase tudo é precificado em moeda estrangeira,
        enquanto os salários permanecem baixos.
        Isso é <strong>escravidão moderna</strong> — e precisa acabar.
      </p>

      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>Trabalho digno e qualificado</li>
        <li>Salários justos e compatíveis com a realidade global</li>
        <li>Mecanização de tarefas pesadas e perigosas</li>
      </ul>
    </div>

    {/* Civilização da eficiência */}
    <div className="space-y-4">
      <h3 className="text-xl sm:text-2xl font-bold text-[#3B82F6]">
        🤖 A Civilização da Eficiência
      </h3>

      <p className="text-gray-300 leading-relaxed">
        No futuro próximo, a tecnologia assumirá as tarefas mais duras,
        enquanto o ser humano evolui para funções técnicas,
        intelectuais e criativas.
      </p>

      <div className="bg-black/40 border border-white/10 rounded-xl p-5 space-y-2">
        <p>🚰 Infraestruturas com máquinas inteligentes</p>
        <p>⚡ Energia gerida por robótica de precisão</p>
        <p>🌾 Agricultura automatizada e sustentável</p>
        <p>🧹 Limpeza urbana com veículos inteligentes</p>
      </div>

      <p className="text-gray-300">
        O resultado será a redução do desemprego estrutural
        e o nascimento de uma sociedade altamente qualificada.
      </p>
    </div>

    {/* Fecho */}
    <div className="bg-gradient-to-r from-[#D4AF37]/10 to-[#3B82F6]/10
                    border border-white/10 rounded-xl p-6 space-y-4 text-center">
      <p className="font-semibold text-white text-lg">
        A E-Coin não ameaça o trabalho.
        Ela resgata a dignidade do ser humano.
      </p>

      <p className="text-gray-400 italic">
        Se não evoluirmos, criaremos uma geração de talentos frustrados.
        Se evoluirmos, construiremos uma nova civilização.
      </p>
    </div>

  </div>
</motion.section>

{/* SECTION — ALERTA CIVILIZACIONAL & CONCLUSÃO FINAL | EKD */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌆 Fundo cinematográfico final */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-black/95 to-black" />
    <div
      className="absolute inset-0 bg-[url('/images/ekd-alerta-civilizacional-conclusao-final-bg.jpg')]
                 bg-cover bg-center opacity-35"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/25 via-transparent to-[#3B82F6]/25 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-6xl mx-auto text-gray-200 space-y-16">

    {/* Título */}
    <div className="text-center space-y-4">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FACC15]">
        🏙 O Alerta Civilizacional
      </h2>
      <p className="text-gray-400 italic">
        “A civilização começa hoje, comigo e contigo.”
      </p>
    </div>

    {/* Alerta */}
    <div className="border-l-4 border-[#EF4444]/70 pl-6 space-y-4">
      <p className="text-gray-300 leading-relaxed">
        Se não facilitarmos o progresso agora,
        seremos nós mesmos as vítimas da estagnação.
      </p>

      <p className="text-gray-300">
        Enquanto em países como o Japão a honestidade social é regra,
        em outras nações o caos moral nasce da desigualdade,
        da exclusão e da falta de dignidade económica.
      </p>

      <p className="text-gray-300 font-semibold">
        A EdenKingDom Corporation não quer apenas criar riqueza —
        quer criar <strong>civilização</strong>.
      </p>

      <p className="text-gray-400 italic">
        “Estamos a dar o nosso passo largo — falta o teu.”
      </p>
    </div>

    {/* Verdade sobre a E-Coin */}
    <div className="bg-black/40 border border-white/10 rounded-xl p-6 space-y-4">
      <h3 className="text-xl sm:text-2xl font-bold text-[#22C55E]">
        💎 A Verdade sobre a E-Coin
      </h3>

      <p className="text-gray-300">
        Nunca afirmamos que a <strong>E-Coin</strong> é gratuita.
        Ela não é airdrop, nem promessa vazia.
      </p>

      <p className="text-gray-300">
        Para possuir E-Coin, é necessário primeiro possuir
        <strong> valor real</strong>.
        Cada E-Coin representa capital legítimo
        dentro do ecossistema EdenKingDom.
      </p>

      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>O investimento inicial cria liquidez</li>
        <li>O staking garante crescimento e recompensas</li>
        <li>As comissões são pagas exclusivamente em E-Coin</li>
        <li>Comunidades e líderes impulsionam a expansão global</li>
      </ul>

      <p className="text-gray-300">
        Essa estrutura gera <strong>estabilidade,
        valorização contínua e crescimento sustentável</strong>.
      </p>
    </div>

    {/* Chamado à humanidade */}
    <div className="space-y-4">
      <h3 className="text-xl sm:text-2xl font-bold text-[#3B82F6]">
        🌍 Chamado à Humanidade
      </h3>

      <p className="text-gray-300 leading-relaxed">
        A EdenKingDom Corporation não nasceu para substituir governos —
        nasceu para <strong>reerguer civilizações</strong>.
      </p>

      <p className="text-gray-300">
        Com o avanço da E-Coin, cada país participante verá
        aumento real de produtividade, emprego e desenvolvimento social.
      </p>

      <blockquote className="border-l-4 border-[#D4AF37]/70 pl-4 italic text-gray-400">
        “Se o mundo quer progresso, nós já estamos nele.<br />
        Se o mundo quer justiça, nós somos o modelo.<br />
        Se o mundo quer civilização, nós somos o início.”
        <br />
        <span className="text-sm">
          — Dr. Athelstan Pateron Atanas,
          CEO Global & Fundador Sénior
        </span>
      </blockquote>
    </div>

    {/* Conclusão final */}
    <div className="bg-gradient-to-r from-[#D4AF37]/15 to-[#3B82F6]/15
                    border border-white/10 rounded-xl p-8 space-y-4 text-center">
      <p className="text-white text-lg font-semibold">
        A E-Coin não é uma fuga do trabalho —
        é a redenção do trabalhador.
      </p>

      <p className="text-gray-300">
        Ela devolve dignidade, autonomia
        e o direito de viver de acordo
        com o valor que se produz.
      </p>

      <p className="text-gray-400 italic">
        A pobreza não é destino — é sistema.
        E nós viemos para mudá-lo.
      </p>

      <p className="font-bold text-[#FACC15]">
        Somos a EdenKingDom Corporation.<br />
        A civilização começa hoje, contigo.<br />
        Estamos prontos — e o futuro já começou.
      </p>
    </div>

  </div>
</motion.section>

{/* SECTION — TESTEMUNHO DE LIDERANÇA & ORIGEM DO PROPÓSITO | EKD */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🧾 Fundo cinematográfico histórico */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-black/95 to-black" />
    <div
      className="absolute inset-0 bg-[url('/images/ekd-testemunho-lideranca-origem-proposito-bg.jpg')]
                 bg-cover bg-center opacity-35"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/25 via-transparent to-[#3B82F6]/25 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-6xl mx-auto text-gray-200 space-y-16">

    {/* Título */}
    <div className="text-center space-y-4">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FACC15]">
        🧾 Testemunho de Liderança e Origem do Propósito
      </h2>
      <p className="text-gray-400">
        A história por trás da E-Coin e da E-Pay
      </p>
    </div>

    {/* Introdução */}
    <div className="border-l-4 border-[#EF4444]/70 pl-6 space-y-4">
      <p className="text-gray-300 leading-relaxed">
        Nós, a <strong>EdenKingDom Corporation</strong>,
        já possuímos uma base massiva de ativos digitais
        estruturados, garantidos e preparados para liquidez global.
      </p>

      <p className="text-gray-300">
        Ainda assim, há quem nos acuse, sem estudo ou compreensão,
        de práticas ilegítimas.
      </p>

      <p className="text-gray-400 italic">
        Antes de julgar, estudem.
        Antes de acusar, compreendam a história.
      </p>
    </div>

    {/* Origem da revolução */}
    <div className="space-y-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#3B82F6]">
        🕰️ O Início da Revolução — 2009 e o Nascimento do Bitcoin
      </h3>

      <p className="text-gray-300 leading-relaxed">
        O ano de 2009 marcou o início da maior revolução financeira
        desde a criação do sistema bancário moderno:
        o nascimento do <strong>Bitcoin (BTC)</strong>,
        a primeira moeda digital descentralizada do mundo.
      </p>
    </div>

    {/* Eventos cruciais */}
    <div className="bg-black/40 border border-white/10 rounded-xl p-6 space-y-6">
      <h4 className="text-lg sm:text-xl font-bold text-[#22C55E]">
        📜 Eventos Cruciais
      </h4>

      <div className="space-y-4">
        <p className="text-gray-300">
          <strong>⛏️ Mineração do Bloco Gênesis</strong><br />
          Em 3 de janeiro de 2009, Satoshi Nakamoto minerou
          o primeiro bloco do Bitcoin — o Bloco Gênesis —
          dando origem ao sistema financeiro descentralizado.
        </p>

        <p className="text-gray-300">
          <strong>📰 Mensagem Cravada na História</strong><br />
          “The Times 03/Jan/2009 Chancellor on brink of second bailout for banks.”
        </p>

        <p className="text-gray-400 italic">
          Uma crítica direta à corrupção bancária
          e à impressão descontrolada de dinheiro
          durante a crise financeira de 2008.
        </p>

        <p className="text-gray-300">
          <strong>🔗 Primeira Transação da História</strong><br />
          Em 12 de janeiro de 2009,
          ocorreu a primeira transação peer-to-peer
          entre Satoshi Nakamoto e Hal Finney.
        </p>
      </div>
    </div>

    {/* Legado */}
    <div className="bg-gradient-to-r from-[#D4AF37]/15 to-[#3B82F6]/15
                    border border-white/10 rounded-xl p-6 space-y-4">
      <h4 className="text-lg sm:text-xl font-bold text-[#FACC15]">
        🌱 O Legado de 2009
      </h4>

      <p className="text-gray-300 leading-relaxed">
        Nascia ali o conceito de dinheiro sem bancos,
        sem governos e sem intermediários.
      </p>

      <p className="text-gray-300">
        Um sistema baseado em <strong>blockchain</strong> —
        um livro-razão público, imutável e transparente.
      </p>

      <p className="text-gray-400 italic">
        Era o nascimento de uma nova confiança digital.
      </p>
    </div>

  </div>
</motion.section>

{/* SECTION — O ESPÍRITO DA E-COIN: PROVA DE VALOR | EKD */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 💠 Fundo cinematográfico conceitual */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-black/95 to-black" />
    <div
      className="absolute inset-0 bg-[url('/images/ekd-espirito-ecoin-prova-de-valor-bg.jpg')]
                 bg-cover bg-center opacity-35"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/25 via-transparent to-[#3B82F6]/25 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-6xl mx-auto text-gray-200 space-y-16">

    {/* Título */}
    <div className="text-center space-y-4">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FACC15]">
        💠 O Espírito da E-Coin
      </h2>
      <p className="text-gray-400 italic">
        Prova de valor, não de fala
      </p>
    </div>

    {/* Prova de valor */}
    <div className="border-l-4 border-[#22C55E]/70 pl-6 space-y-4">
      <p className="text-gray-300 leading-relaxed">
        A <strong>E-Coin</strong> nasce no mesmo espírito do Bitcoin,
        mas com uma evolução clara e responsável.
      </p>

      <p className="text-gray-300">
        Enquanto o Bitcoin é <strong>Proof of Work</strong>,
        a E-Coin é <strong>Proof of Stake</strong> e
        <strong> Proof of Finance</strong>.
      </p>

      <p className="text-gray-400 italic">
        “Quem possui E-Coin é porque realmente investiu nela.”
      </p>
    </div>

    {/* Liquidez real */}
    <div className="space-y-4">
      <p className="text-gray-300 leading-relaxed">
        Assim como para ter saldo no M-Pesa, Paypal, Cash App, Pix, Mercado Pago, stripe, etc é necessário depositar,
        para ter E-Coin é preciso converter dinheiro fiduciário
        (MZN, USD, Rand, Real, etc.) e fazer staking.
      </p>

      <p className="text-gray-300">
        Nada é imaginário.
        Tudo é <strong>liquidez real, convertida e rastreável</strong>.
      </p>

      <p className="text-gray-300">
        Na E-Coin, o valor nasce da
        <strong> confiança, transparência e mérito</strong>,
        não da especulação vazia.
      </p>
    </div>

    {/* Energia financeira */}
    <div className="bg-black/40 border border-white/10 rounded-xl p-6 space-y-4">
      <p className="text-gray-300 leading-relaxed">
        No Bitcoin, o minerador investe energia elétrica.
      </p>

      <p className="text-gray-300">
        Na E-Coin, o participante investe
        <strong> energia financeira real</strong> —
        liquidez que dá vida à rede,
        sustenta o ecossistema
        e garante crescimento equilibrado.
      </p>
    </div>

    {/* União de nações */}
    <div className="space-y-4">
      <h3 className="text-xl sm:text-2xl font-bold text-[#3B82F6]">
        💱 Porque a E-Coin Une Nações
      </h3>

      <p className="text-gray-300 leading-relaxed">
        O sistema E-Coin conecta países e continentes
        sem exigir que bancos centrais exportem liquidez.
      </p>

      <p className="text-gray-400 italic">
        “A liquidez volta a circular pelo mundo
        e não se perde nas fronteiras políticas.”
      </p>

      <p className="text-gray-300">
        Cada transação E-Coin é uma ponte entre economias —
        África, Europa, América e Ásia —
        com a blockchain a executar automaticamente
        o que antes exigia meses de burocracia.
      </p>
    </div>

    {/* Experiência pessoal */}
    <div className="bg-gradient-to-r from-[#D4AF37]/15 to-[#3B82F6]/15
                    border border-white/10 rounded-xl p-6 space-y-4">
      <h3 className="text-xl sm:text-2xl font-bold text-[#FACC15]">
        🧭 Experiência Pessoal — Da Dificuldade à Criação
      </h3>

      <p className="text-gray-300 leading-relaxed">
        A motivação da E-Coin não veio da teoria,
        mas da vida real.
      </p>

      <p className="text-gray-300">
        Durante anos, eu,
        <strong>Athelstan Pateron Atanas</strong>,
        vivi a frustração de não conseguir levantar
        dinheiro ganho com trabalho honesto.
      </p>

      <p className="text-gray-300">
        Pagamentos internacionais demoravam meses
        ou simplesmente não chegavam.
        Bancos recusavam, sistemas travavam,
        e a dignidade era posta em causa.
      </p>

      <p className="text-gray-400 italic">
        Chegou-se ao absurdo de enviar dinheiro físico em voos
        para contornar bloqueios bancários.
        Isso é desumano, retrógrado e insustentável.
      </p>
    </div>

  </div>
</motion.section>

{/* SECTION — SISTEMA GLOBAL DE PAGAMENTOS | E-PAY */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌐 Fundo tecnológico global */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-black/95 to-black" />
    <div
      className="absolute inset-0 bg-[url('/images/ekd-epay-sistema-global-pagamentos-bg.jpg')]
                 bg-cover bg-center opacity-35"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#3B82F6]/25 via-transparent to-[#D4AF37]/25 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-6xl mx-auto text-gray-200 space-y-16">

    {/* Cabeçalho */}
    <div className="text-center space-y-4">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FACC15]">
        🌐 Sistema Global de Pagamentos — E-PAY
      </h2>
      <p className="text-gray-400 italic">
        “O novo PayPal da Era Digital da EdenKingDom”
      </p>
    </div>

    {/* Descrição */}
    <div className="space-y-4">
      <p className="text-gray-300 leading-relaxed">
        O <strong>E-PAY</strong> é o sistema global de pagamentos da
        <strong> EdenKingDom Corporation</strong>,
        inspirado no modelo do PayPal e do PIX brasileiro,
        porém com <strong>liquidez própria</strong>,
        autonomia monetária e integração total
        com carteiras digitais e APIs bancárias globais.
      </p>

      <p className="text-gray-300">
        Este sistema permite enviar e receber dinheiro
        <strong> instantaneamente</strong> em qualquer parte do mundo,
        superando as limitações impostas
        pelos bancos centrais tradicionais.
      </p>
    </div>

    {/* Carteira E-Pay */}
    <div className="bg-black/40 border border-white/10 rounded-xl p-6 space-y-4">
      <h3 className="text-xl sm:text-2xl font-bold text-[#3B82F6]">
        💳 Carteira E-PAY
      </h3>

      <ul className="list-disc list-inside space-y-2 text-gray-300">
        <li>Recarga via Visa, cartões locais, e-wallets e mobile money</li>
        <li>M-Pesa, e-Mola, mCash, Ponto24, SIMO Rede</li>
        <li>Stripe, WeChat Pay, MTN Money</li>
        <li>O Pay, Alipay, WeChat, PIX, MercadoPago</li>
        <li>Klarna, Revolut e outros gateways globais</li>
      </ul>

      <p className="text-gray-300">
        Suporta criptomoedas como
        <strong> E-Coin, E-Genesis, E-USD </strong>
        e moedas fiduciárias.
      </p>

      <p className="text-gray-400 italic">
        Opera com liquidez entendida própria,
        independente de reservas de bancos centrais.
      </p>
    </div>

    {/* Diagrama de APIs */}
    <div className="space-y-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#FACC15]">
        ⚙️ Diagrama E-Bridge — Conectores Globais (APIs)
      </h3>

      <div className="overflow-x-auto">
        <table className="w-full border border-white/10 rounded-xl overflow-hidden">
          <thead className="bg-white/10">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-300">
                Tipo de Connector
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-300">
                API / Sistema
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-300">
                Região Principal
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-300">
                Função Principal
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-white/10 bg-black/40">
            <tr>
              <td className="px-4 py-3">💳Pagamentos Universais</td>
              <td className="px-4 py-3">VisaNet API</td>
              <td className="px-4 py-3">Global</td>
              <td className="px-4 py-3">Processamento de cartões Visa</td>
            </tr>
            <tr>
              <td className="px-4 py-3">💳Pagamentos Universais</td>
              <td className="px-4 py-3">Mastercard Developer API</td>
              <td className="px-4 py-3">Global</td>
              <td className="px-4 py-3">Processamento de cartões Mastercard</td>
            </tr>
            <tr>
              <td className="px-4 py-3">💰Pagamentos Digitais</td>
              <td className="px-4 py-3">PayPal REST API</td>
              <td className="px-4 py-3">Global</td>
              <td className="px-4 py-3">Transferências e-commerce e pessoais</td>
            </tr>
            <tr>
              <td className="px-4 py-3">📱Pagamentos Móveis</td>
              <td className="px-4 py-3">Google Pay JS API</td>
              <td className="px-4 py-3">Global</td>
              <td className="px-4 py-3">Pagamentos Android e Web</td>
            </tr>
            <tr>
              <td className="px-4 py-3">🍎Pagamentos Móveis</td>
              <td className="px-4 py-3">Apple Pay Merchant ID</td>
              <td className="px-4 py-3">Global</td>
              <td className="px-4 py-3">Pagamentos iOS e dispositivos Apple</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  </div>
</motion.section>

{/* SECTION — TABELA ÚNICA | SISTEMAS DE PAGAMENTO GLOBAIS */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌍 Fundo global */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-black/95 to-black" />
    <div
      className="absolute inset-0 bg-[url('/images/ekd-epay-global-payment-systems-bg.jpg')]
                 bg-cover bg-center opacity-30"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#3B82F6]/20 via-transparent to-[#D4AF37]/20 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-6xl mx-auto text-gray-200 space-y-10">

    {/* Cabeçalho */}
    <div className="text-center space-y-3">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FACC15]">
        🌐 Tabela Única — Sistemas de Pagamento Globais Integrados ao E-Pay
      </h2>
      <p className="text-gray-400 italic">
        EdenKingDom Corporation — Infraestrutura Financeira Global
      </p>
    </div>

    {/* Tabela */}
    <div className="overflow-x-auto">
      <table className="w-full border border-white/10 rounded-xl overflow-hidden bg-black/40">
        <thead className="bg-white/10">
          <tr>
            <th className="px-4 py-4 text-left text-sm font-semibold text-gray-300">
              🌍 Continente / Região
            </th>
            <th className="px-4 py-4 text-left text-sm font-semibold text-gray-300">
              💳 Sistemas de Pagamento Integrados
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-white/10 text-sm sm:text-base">

          <tr>
            <td className="px-4 py-4 font-semibold">🌐 Global / Universal</td>
            <td className="px-4 py-4 text-gray-300">
              VisaNet API · Mastercard Developer API · PayPal REST API ·
              Google Pay JS API · Apple Pay Merchant ID ·
              E-Genesis (Stablecoin) · E-Coin · USDT · BNB
            </td>
          </tr>

          <tr>
            <td className="px-4 py-4 font-semibold">🌍 África</td>
            <td className="px-4 py-4 text-gray-300">
              M-Pesa · MTN Mobile Money · Orange Money ·
              Chipper Cash · OPay · Mukuru ·
              Ponto24 · SIMO Rede · e-Mola · mCash
            </td>
          </tr>

          <tr>
            <td className="px-4 py-4 font-semibold">🌏 Ásia / Pacífico</td>
            <td className="px-4 py-4 text-gray-300">
              Alipay · WeChat Pay · GCash · OVO · Touch ’n Go ·
              eWallet · GrabPay · Paytm · MoMo Wallet
            </td>
          </tr>

          <tr>
            <td className="px-4 py-4 font-semibold">🇪🇺 Europa</td>
            <td className="px-4 py-4 text-gray-300">
              iDEAL · Bancontact · Swish · Wero · Revolut · Klarna
            </td>
          </tr>

          <tr>
            <td className="px-4 py-4 font-semibold">🌎 América Latina</td>
            <td className="px-4 py-4 text-gray-300">
              PIX · Mercado Pago · RecargaPay · AstroPay ·
              Nubank Pay · PagSeguro · StoneCo ·
              Ualá · PicPay · Cielo · Yape
            </td>
          </tr>

          <tr>
            <td className="px-4 py-4 font-semibold">🇺🇸 América do Norte</td>
            <td className="px-4 py-4 text-gray-300">
              Cash App · PayPal · Stripe
            </td>
          </tr>

        </tbody>
      </table>
    </div>

    {/* Nota final */}
    <p className="text-center text-gray-400 italic">
      “O E-Pay conecta continentes, moedas e pessoas — sem fronteiras bancárias.”
    </p>

  </div>
</motion.section>

<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
      {/* 🌍 Fundo cinematográfico testemunhal */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-black/95 to-black" />
    <div
      className="absolute inset-0 bg-[url('/images/ekd-motivacoes-pessoais-fundamentos-epay-ecoin-bg.jpg')]
                 bg-cover bg-center opacity-35"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/20 via-transparent to-[#3B82F6]/20 blur-3xl" />
  </div>

      {/* 🔹 CONTEÚDO */}
      <div className="max-w-5xl mx-auto text-left text-white">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#D4AF37] mb-6">
          💬 20. Motivações Pessoais e Fundamentos Econômicos
        </h2>

<h2 className="text-1xl sm:text-2xl font-bold text-[#D4AF37] mb-6">
          A origem real da E-Pay e da EdenKingDom Coin (E-Coin)
        </h2>

        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
          A criação da <span className="text-white font-semibold"> E-Pay </span> e da{" "}
          <span className="text-white font-semibold">E-Coin</span> não nasceu de teoria
          académica nem de especulação financeira. Ela nasceu da{" "}
          <span className="text-white font-semibold"> experiência real </span>, vivida
          durante anos dentro de um sistema financeiro que falha com o cidadão moderno,
          especialmente em economias emergentes.
        </p>

        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
          Durante anos de prestação de serviços digitais e projetos internacionais,
          pagamentos legítimos demoravam semanas, meses — ou simplesmente não chegavam —
          devido à falta estrutural de liquidez, barreiras cambiais e exclusão das moedas
          locais das grandes cestas monetárias globais.
        </p>

        <div className="border-l-4 border-[#D4AF37] pl-6 my-8 text-gray-300">
          <p className="italic">
            “Trabalhar online era permitido. Receber o pagamento era um privilégio
            incerto.”
          </p>
        </div>

        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
          A insegurança cibernética, bloqueios arbitrários, burocracia excessiva e a
          dependência de intermediários estrangeiros tornaram evidente que o problema não
          era individual, mas <span className="text-white font-semibold"> sistémico </span>.
        </p>

        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
          Foi nesse contexto que surgiu a decisão inevitável: criar um sistema onde o
          valor circula livremente, de forma transparente, auditável e global. Assim
          nasceram a <span className="text-white font-semibold"> E-Pay </span> — como
          infraestrutura de pagamentos globais — e a{" "}
          <span className="text-white font-semibold"> E-Coin </span> — como unidade de valor
          corporativa com liquidez real.
        </p>

        <div className="mt-10 text-[#D4AF37] font-semibold text-lg">
          “Quando o sistema falha com o cidadão, inovar deixa de ser opção —
          torna-se obrigação.”
        </div>

        {/* Introdução */}
    <div className="border-l-4 border-[#3B82F6]/70 pl-6 space-y-4">
      <p className="text-gray-300 leading-relaxed">
        Tudo isto surge em resposta direta às
        <strong> limitações pessoais e estruturais </strong>
        que enfrentei durante vários anos de atuação neste ramo,
        enquanto ainda estudava.
      </p>

      <p className="text-gray-300 leading-relaxed">
        A vida nunca foi fácil —
        especialmente ao tentar receber pagamentos por serviços
        prestados via internet e não conseguir levantá-los,
        devido às restrições do sistema financeiro tradicional
        do meu país.
      </p>
    </div>

    {/* Dificuldades enfrentadas */}
    <div className="bg-black/40 border border-red-500/20 rounded-xl p-6 space-y-4">
      <h3 className="text-xl sm:text-2xl font-bold text-red-400">
        ⚠️ As Dificuldades Enfrentadas
      </h3>

      <p className="text-gray-300 leading-relaxed">
        Um simples saque via <strong> Visa </strong> podia demorar
        um mês inteiro — ou nunca cair —
        devido à falta de reservas de liquidez
        e à não participação da moeda fiduciária local
        nas grandes cestas monetárias internacionais
        como <strong> USD, EURO, RAND e REAL </strong>.
      </p>

      <p className="text-gray-300 leading-relaxed">
        Essa exclusão faz com que,
        mesmo na vizinha <strong> África do Sul </strong>,
        bancos como o <strong> Standard Bank </strong>
        ou o <strong> Millennium BIM </strong>
        dificultem transações simples com Moçambique.
      </p>
    </div>

    {/* Insegurança cibernética */}
    <div className="bg-gradient-to-r from-[#3B82F6]/15 to-[#020617]/40
                    border border-white/10 rounded-xl p-6 space-y-4">
      <h3 className="text-xl sm:text-2xl font-bold text-[#3B82F6]">
        🔐 Insegurança Cibernética e Confiança Pública
      </h3>

      <p className="text-gray-300 leading-relaxed">
        Outro obstáculo crítico é a
        <strong> insegurança cibernética</strong>,
        que fragiliza tanto as operações bancárias
        quanto a confiança pública no sistema financeiro.
      </p>

      <p className="text-gray-400 italic">
        Quando o sistema falha em proteger e servir,
        torna-se inevitável criar algo novo.
      </p>
    </div>

    {/* Conclusão */}
    <div className="text-center mt-12 space-y-4">
      <p className="text-[#D4AF37] text-lg sm:text-xl font-semibold">
        Foi nesse contexto que nasceram a E-Pay e a E-Coin
      </p>
      <p className="text-gray-400 italic">
        Não como teoria, mas como resposta prática
        a um problema real vivido todos os dias.
      </p>
    </div>

      </div>
    </motion.section>

{/* SECTION — A BATALHA DIGITAL E O ISOLAMENTO TECNOLÓGICO | EKD */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌐 Fundo cinematográfico tecnológico */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-black/95 to-black" />
    <div
      className="absolute inset-0 bg-[url('/images/ekd-batalha-digital-isolamento-tecnologico-bg.jpg')]
                 bg-cover bg-center opacity-35"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/20 via-transparent to-[#3B82F6]/20 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-6xl mx-auto text-gray-200 space-y-16">

    {/* Título */}
    <div className="text-center space-y-4">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FACC15]">
        🧠 A Batalha Digital e o Isolamento Tecnológico
      </h2>
      <p className="text-gray-400 italic">
        Quando a tecnologia existe, mas o acesso é negado
      </p>
    </div>

    {/* Testemunho */}
    <div className="border-l-4 border-[#3B82F6]/70 pl-6 space-y-4">
      <p className="text-gray-300 leading-relaxed">
        Enquanto eu enfrentava todas essas barreiras,
        via pessoas de outros países com acesso rápido,
        fluído e moderno às transações digitais.
      </p>

      <p className="text-gray-300 leading-relaxed">
        Muitos recomendavam o uso de aplicações com
        <strong> Inteligência Artificial (AI)</strong>
        para gerir negócios, pagamentos e investimentos.
      </p>
    </div>

    {/* Bloqueios tecnológicos */}
    <div className="bg-black/40 border border-red-500/20 rounded-xl p-6 space-y-4">
      <p className="text-gray-300 leading-relaxed">
        Mas, ao instalar esses aplicativos,
        surgiam mensagens como:
      </p>

      <ul className="list-disc list-inside text-red-400 space-y-2">
        <li>“Os serviços não estão disponíveis no seu país.”</li>
        <li>“O seu dispositivo não é compatível.”</li>
      </ul>

      <p className="text-gray-300 leading-relaxed">
        E mesmo quando o aplicativo abria,
        o país não aparecia listado
        ou as funcionalidades eram severamente limitadas.
      </p>
    </div>

    {/* Diagnóstico */}
    <div className="space-y-4">
      <p className="text-gray-300 leading-relaxed">
        Essas restrições tecnológicas são o reflexo direto
        de um sistema financeiro ainda
        <strong> fechado, defasado e excludente</strong>.
      </p>
    </div>

    {/* Inclusão financeira */}
    <div className="bg-gradient-to-r from-[#D4AF37]/15 to-[#020617]/40
                    border border-white/10 rounded-xl p-6 space-y-4">
      <h3 className="text-xl sm:text-2xl font-bold text-[#D4AF37]">
        🌍 Um País Que Precisa de Acesso, Não de Barreiras
      </h3>

      <p className="text-gray-300 leading-relaxed">
        Se tanto se fala em desenvolvimento sustentável,
        ele precisa começar pela
        <strong> inclusão financeira real</strong>.
      </p>

      <p className="text-gray-300 leading-relaxed">
        Não se pode falar em progresso quando apenas o governo
        tem acesso a transações internacionais de alto valor,
        enquanto o cidadão comum fica de fora.
      </p>
    </div>

    {/* Contrassensos */}
    <div className="border-l-4 border-[#F97316]/70 pl-6 space-y-3">
      <p className="text-gray-300">É um contrassenso:</p>
      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>M-Pesa, e-Mola e mCash funcionam quase só em Maputo;</li>
        <li>Abertura de conta mCash pode levar um mês inteiro;</li>
        <li>Sistema bancário universitário demora dias para confirmar propinas;</li>
        <li>Toda tentativa de modernização é travada por burocracia excessiva.</li>
      </ul>
    </div>

    {/* Conclusão */}
    <div className="text-center mt-12 space-y-4">
      <p className="text-[#FACC15] text-lg sm:text-xl font-semibold">
        O problema não é a falta de tecnologia —
      </p>
      <p className="text-gray-400 italic">
        é a negação sistemática do acesso a ela.
      </p>
    </div>

  </div>
</motion.section>

{/* SECTION — A SOLUÇÃO: E-PAY COMO PONTE GLOBAL | EKD */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌍 Fundo cinematográfico global */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-black/95 to-black" />
    <div
      className="absolute inset-0 bg-[url('/images/ekd-epay-ponte-global-solucao-bg.jpg')]
                 bg-cover bg-center opacity-35"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/25 via-transparent to-[#3B82F6]/25 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-6xl mx-auto text-gray-200 space-y-16">

    {/* Título */}
    <div className="text-center space-y-4">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FACC15]">
        💡 A Solução: E-Pay como Ponte Global
      </h2>
      <p className="text-gray-400 italic">
        Conectando cidadãos ao sistema financeiro global
      </p>
    </div>

    {/* Origem da solução */}
    <div className="border-l-4 border-[#22C55E]/70 pl-6 space-y-4">
      <p className="text-gray-300 leading-relaxed">
        Foi diante dessa realidade de bloqueios,
        exclusão tecnológica e limitações financeiras
        que nasceu a ideia do <strong>E-Pay</strong>,
        o sistema global de pagamentos da
        <strong> EdenKingDom Corporation</strong>.
      </p>

      <p className="text-gray-300 leading-relaxed">
        O E-Pay foi projetado para ligar o cidadão moçambicano —
        e qualquer cidadão do mundo —
        ao ecossistema digital e financeiro global.
      </p>
    </div>

    {/* Funcionamento */}
    <div className="bg-black/40 border border-white/10 rounded-xl p-6 space-y-4">
      <p className="text-gray-300 leading-relaxed">
        Com o E-Pay, pagamentos, transferências e saques
        são realizados de forma
        <strong> instantânea, segura e transparente</strong>,
        sem depender de bancos centrais
        ou redes financeiras fechadas.
      </p>

      <p className="text-gray-300">
        A blockchain substitui a burocracia,
        e a tecnologia devolve autonomia ao cidadão.
      </p>
    </div>

    {/* Integração global */}
    <div className="space-y-4">
      <p className="text-gray-300 leading-relaxed">
        O E-Pay integra-se a
        <strong> universidades, empresas, governos
        e instituições internacionais</strong>,
        democratizando o acesso financeiro
        e conectando continentes em tempo real.
      </p>

      <p className="text-gray-300">
        África, Ásia, Europa e Américas
        passam a operar num mesmo fluxo digital,
        sem barreiras artificiais.
      </p>
    </div>

    {/* Valor das criptomoedas */}
    <div className="bg-gradient-to-r from-[#3B82F6]/15 to-[#020617]/40
                    border border-white/10 rounded-xl p-6 space-y-4">
      <h3 className="text-xl sm:text-2xl font-bold text-[#3B82F6]">
        🪙 A Verdade sobre o Valor das Criptomoedas
      </h3>

      <p className="text-gray-300 leading-relaxed">
        Assim como o Bitcoin surgiu em 2008–2009
        em resposta à crise financeira global,
        a <strong>E-Coin</strong> nasce como resposta
        à crise de liquidez e exclusão digital.
      </p>

      <p className="text-gray-300">
        Nem o Bitcoin nem a E-Coin são
        “dinheiro imaginário”.
        Ambos representam
        <strong> liquidez real</strong>,
        baseada em confiança digital
        e capital humano.
      </p>
    </div>

    {/* Reflexão soberania */}
    <div className="border-l-4 border-[#F97316]/70 pl-6 space-y-4">
      <p className="text-gray-300 leading-relaxed">
        Se o Banco de Moçambique criasse hoje
        uma criptomoeda,
        muitos entenderiam mal —
        achariam tratar-se de “dinheiro inventado”.
      </p>

      <p className="text-gray-300 leading-relaxed">
        Mas, na verdade,
        trata-se de um instrumento moderno
        de <strong>soberania financeira</strong>,
        capaz de permitir que um país
        opere, troque e prospere
        além das fronteiras.
      </p>
    </div>

    {/* Assinatura */}
    <div className="text-center mt-12 space-y-3">
      <p className="text-gray-400 italic">
        “Reflitam nisto.”
      </p>
      <p className="text-[#FACC15] font-semibold">
        — Dr. Athelstan Pateron Atanas  
        <span className="block text-gray-400 font-normal">
          CEO Global & Fundador Sénior — EdenKingDom Corporation
        </span>
      </p>
    </div>

  </div>
</motion.section>

{/* SECTION — SESSÃO CRIPTO INTEGRADA & CONCLUSÃO E-PAY | EKD */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🌐 Fundo cinematográfico de integração global */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-black/95 to-black" />
    <div
      className="absolute inset-0 bg-[url('/images/ekd-epay-sessao-cripto-integrada-bg.jpg')]
                 bg-cover bg-center opacity-35"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/25 via-transparent to-[#3B82F6]/25 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-6xl mx-auto text-gray-200 space-y-16">

    {/* Título */}
    <div className="text-center space-y-4">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FACC15]">
        🪙 Sessão Cripto Integrada
      </h2>
      <p className="text-gray-400 italic">
        Estabilidade, interoperabilidade e liquidez global
      </p>
    </div>

    {/* Integração de ativos */}
    <div className="border-l-4 border-[#22C55E]/70 pl-6 space-y-4">
      <p className="text-gray-300 leading-relaxed">
        Para garantir a <strong>estabilidade do ecossistema</strong>,
        o sistema <strong>E-Pay</strong> integra múltiplas camadas
        de ativos digitais e financeiros:
      </p>

      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>
          <strong>E-Coin</strong> → Criptomoeda oficial da EdenKingDom,
          com função de utilidade, governança e crescimento.
        </li>
        <li>
          <strong>E-Genesis (3-in-1)</strong> → Stablecoin institucional
          responsável por estabilizar o ecossistema.
        </li>
        <li>
          <strong>USDT e BNB compatíveis</strong> →
          Liquidez externa e interoperabilidade global.
        </li>
      </ul>
    </div>

    {/* Resumo */}
    <div className="bg-black/40 border border-white/10 rounded-xl p-6 space-y-4">
      <h3 className="text-xl sm:text-2xl font-bold text-[#3B82F6]">
        🧠 Resumo Estratégico
      </h3>

      <p className="text-gray-300 leading-relaxed">
        O <strong>E-Pay (EdenKingDom)</strong> é o primeiro sistema
        global híbrido que une
        <strong> infraestrutura bancária tradicional,
        blockchain, fintechs regionais e APIs globais</strong>,
        operando sob a rede <strong>E-Bridge</strong>.
      </p>

      <p className="text-gray-300">
        Pagamentos, remessas, compras e investimentos
        fluem sem fronteiras,
        conectando África, Ásia, Europa e Américas
        numa única malha financeira descentralizada.
      </p>

      <p className="text-gray-400 italic">
        “O E-Pay não é um novo PayPal —
        é o sistema circulatório da nova economia mundial.”
      </p>
    </div>

    {/* Conclusão */}
    <div className="bg-gradient-to-r from-[#3B82F6]/15 to-[#020617]/40
                    border border-white/10 rounded-xl p-6 space-y-4">
      <h3 className="text-xl sm:text-2xl font-bold text-[#FACC15]">
        🌐 Conclusão
      </h3>

      <p className="text-gray-300 leading-relaxed">
        O que a EdenKingDom faz não é fantasia
        nem especulação —
        é uma <strong>resposta concreta
        a necessidades reais</strong>.
      </p>

      <p className="text-gray-300">
        Criamos o <strong>E-Pay</strong> e a <strong>E-Coin</strong>
        para que nenhum jovem, empreendedor ou estudante —
        em Moçambique ou em qualquer país —
        precise esperar meses por um saque
        ou veja o seu esforço bloqueado
        por sistemas que não o reconhecem.
      </p>
    </div>

    {/* Ponte universal */}
    <div className="border-l-4 border-[#F97316]/70 pl-6 space-y-4">
      <p className="text-gray-300 leading-relaxed">
        O E-Pay não é apenas um sistema de pagamentos —
        é uma <strong>ponte económica universal</strong>
        que une:
      </p>

      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>Bancos tradicionais</li>
        <li>Criptomoedas</li>
        <li>Fintechs regionais</li>
        <li>Governos e cidadãos</li>
      </ul>
    </div>

    {/* Assinatura */}
    <div className="text-center mt-12 space-y-3">
      <p className="text-gray-400 italic">
        “A E-Coin nasce do sacrifício e da experiência.  
        O E-Pay nasce da vontade de libertar o mundo
        das suas próprias fronteiras financeiras.”
      </p>

      <p className="text-[#FACC15] font-semibold">
        — Dr. Athelstan Pateron Atanas  
        <span className="block text-gray-400 font-normal">
          CEO Global & Fundador Sénior — EdenKingDom Corporation
        </span>
      </p>
    </div>

  </div>
</motion.section>

{/* SECTION — DECLARAÇÃO PESSOAL E PROFISSIONAL DO FUNDADOR | EKD */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🕊️ Fundo cinematográfico institucional */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-black/95 to-black" />
    <div
      className="absolute inset-0 bg-[url('/images/ekd-declaracao-fundador-posicao-oficial-bg.jpg')]
                 bg-cover bg-center opacity-35"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/25 via-transparent to-[#3B82F6]/25 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-5xl mx-auto text-gray-200 space-y-16">

    {/* Título */}
    <div className="text-center space-y-4">
      <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FACC15]">
        ⚖️ Declaração Pessoal e Profissional do Fundador Sénior Global
      </h2>
      <p className="text-gray-400 italic">
        Posição oficial perante governos, instituições e o mundo
      </p>
    </div>

    {/* Autor */}
    <div className="text-center space-y-2">
      <p className="text-lg font-semibold text-[#D4AF37]">
        Dr. Athelstan Pateron Atanas
      </p>
      <p className="text-gray-400">
        Fundador Sénior & CEO Global — EdenKingDom Corporation
      </p>
    </div>

    {/* Posição oficial */}
    <div className="border-l-4 border-[#22C55E]/70 pl-6 space-y-4">
      <h3 className="text-xl sm:text-2xl font-bold text-[#22C55E]">
        🕊️ Posição e Aviso Oficial
      </h3>

      <p className="text-gray-300 leading-relaxed">
        Por meio desta declaração,
        torno <strong>pública, permanente e inequívoca</strong>
        a minha posição individual, profissional
        e civilizacional perante
        governos, instituições e corporações
        de todo o mundo.
      </p>
    </div>

    {/* Formação */}
    <div className="bg-black/40 border border-white/10 rounded-xl p-6 space-y-4">
      <h3 className="text-xl sm:text-2xl font-bold text-[#3B82F6]">
        1️⃣ Estudos e Formação Acadêmica
      </h3>

      <p className="text-gray-300 leading-relaxed">
        Estudei <strong>leis</strong>,
        múltiplos programas de <strong>MBA</strong>
        e diversas <strong>engenharias</strong>,
        possuindo uma formação ampla
        que atravessa fronteiras disciplinares.
      </p>

      <p className="text-gray-300">
        Não necessito especificar títulos,
        pois a minha trajetória fala
        pela <strong>prática</strong>,
        não pela ostentação.
      </p>

      <p className="text-gray-300">
        Não Estou a concorrer a cargos públicos nem políticos, pelo meu parecer na liderança corporativa,
        tampouco a vagas privadas.
      </p>
    </div>

  </div>
</motion.section>

{/* SECTION — AUTONOMIA, INTEGRIDADE E DIFERENÇA CIVILIZACIONAL | EKD */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* ⚖️ Fundo cinematográfico institucional */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-black/95 to-black" />
    <div
      className="absolute inset-0 bg-[url('/images/ekd-autonomia-intelectual-diferenca-civilizacional-bg.jpg')]
                 bg-cover bg-center opacity-35"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/25 via-transparent to-[#3B82F6]/25 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-5xl mx-auto text-gray-200 space-y-16">

    {/* 2️⃣ Autonomia Profissional */}
    <div className="border-l-4 border-[#22C55E]/70 pl-6 space-y-4">
      <h3 className="text-xl sm:text-2xl font-bold text-[#22C55E]">
        2️⃣ Autonomia Profissional e Intelectual
      </h3>

      <p className="text-gray-300 leading-relaxed">
        Declaro, de forma <strong>irrevogável</strong>,
        que não sou político, nem pretendo ser.
      </p>

      <p className="text-gray-300">
        Rejeito qualquer tentativa de associação
        a partidos, movimentos ou interesses governamentais.
      </p>

      <p className="text-gray-300">
        A minha independência é
        <strong> intelectual, moral, tecnológica e corporativa</strong>,
        e não depende de favores públicos ou privados.
      </p>
    </div>

    {/* 3️⃣ Direito de escolha */}
    <div className="bg-black/40 border border-white/10 rounded-xl p-6 space-y-4">
      <h3 className="text-xl sm:text-2xl font-bold text-[#3B82F6]">
        3️⃣ Direito de Escolha e Integridade Pessoal
      </h3>

      <p className="text-gray-300 leading-relaxed">
        Tenho pleno direito jurídico e humano
        de escolha profissional e ideológica,
        assegurado pelas convenções internacionais
        e constituições modernas.
      </p>

      <p className="text-gray-300">
        Qualquer tentativa de
        <strong> coação, manipulação ou aliciamento político</strong>
        configurará violação de direitos fundamentais
        e será tratada judicialmente
        pelos meus advogados e conselheiros jurídicos internacionais.
      </p>

      <p className="text-gray-400 italic">
        Este aviso tem valor legal preventivo
        e de autoproteção.
      </p>
    </div>

    {/* 4️⃣ Diferença civilizacional */}
    <div className="bg-gradient-to-r from-[#D4AF37]/15 to-[#020617]/40
                    border border-white/10 rounded-xl p-6 space-y-4">
      <h3 className="text-xl sm:text-2xl font-bold text-[#FACC15]">
        4️⃣ Diferença Civilizacional da EdenKingDom
      </h3>

      <p className="text-gray-300 leading-relaxed">
        A <strong>EdenKingDom Corporation</strong>
        não é partido, nem governo.
      </p>

      <p className="text-gray-300">
        É uma instituição
        <strong> civilizacional e económica</strong>,
        que opera com base em
        conhecimento, ética, inovação
        e fé racional.
      </p>

      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>Aqui, as finanças movem princípios, não ideologias.</li>
        <li>Aqui, a inteligência cria soberania, não servidão.</li>
        <li>Aqui, ninguém é escravo de povos — somos construtores de humanidade.</li>
      </ul>
    </div>

  </div>
</motion.section>

{/* SECTION — VOCAÇÃO EDUCACIONAL E COMPROMISSO FINAL | EKD */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 📘 Fundo cinematográfico educacional */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-black/95 to-black" />
    <div
      className="absolute inset-0 bg-[url('/images/ekd-vocacao-educacional-mentor-civilizacional-bg.jpg')]
                 bg-cover bg-center opacity-35"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/25 via-transparent to-[#3B82F6]/25 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-5xl mx-auto text-gray-200 space-y-16">

    {/* 5️⃣ Motivação pessoal */}
    <div className="border-l-4 border-[#FACC15]/70 pl-6 space-y-4">
      <h3 className="text-xl sm:text-2xl font-bold text-[#FACC15]">
        5️⃣ Motivação Pessoal e Vocação Natural
      </h3>

      <p className="text-gray-300 leading-relaxed">
        Desde criança, sempre fui apaixonado por ensinar.
        A minha vocação é
        <strong> acadêmica, filosófica e educativa</strong>.
      </p>

      <p className="text-gray-300">
        Por isso, defino o meu papel dentro da
        <strong> EdenKingDom Corporation</strong>
        como <strong>palestrante, professor e mentor civilizacional</strong>.
      </p>
    </div>

    {/* Formação académica */}
    <div className="bg-black/40 border border-white/10 rounded-xl p-6 space-y-4">
      <p className="text-gray-300 leading-relaxed">
        Durante as minhas formações acadêmicas a nível superior,
        explorei competências em diversas áreas do conhecimento:
      </p>

      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>
          Ensino de Inglês, com habilidades em ensino de Francês
          (Universidade Pedagógica de Moçambique);
        </li>
        <li>
          Desenvolvimento Local e Relações Internacionais
          (Universidade Lúrio de Moçambique);
        </li>
        <li>
          Direito (Universidade Eduardo Mondlane);
        </li>
        <li>
          Gestão, Marketing e Relações Públicas.
        </li>
      </ul>

      <p className="text-gray-300">
        Atualmente, atuo principalmente de forma
        <strong> digital e internacional</strong>,
        com foco em educação,
        direito humanitário
        e desenvolvimento organizacional.
      </p>
    </div>

    {/* Conclusão final */}
    <div className="bg-gradient-to-r from-[#D4AF37]/15 to-[#020617]/40
                    border border-white/10 rounded-xl p-6 space-y-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#22C55E]">
        🔑 Conclusão e Cláusula Final
      </h3>

      <p className="text-gray-400 italic leading-relaxed">
        “Não preciso de cargo para servir.
        <br />
        Não preciso de palco para ensinar.
        <br />
        O conhecimento é o meu trono,
        e a consciência, a minha coroa.”
      </p>

      <p className="text-gray-300 leading-relaxed">
        Reafirmo, assim, o meu compromisso com o
        <strong> progresso ético, educacional e tecnológico da humanidade</strong>,
        e a minha plena fidelidade à
        <strong> EdenKingDom Corporation</strong>,
        onde encontro a única estrutura digna
        da minha competência e visão.
      </p>
    </div>

    {/* Assinatura */}
    <div className="text-right space-y-1 text-gray-400">
      <p className="font-semibold text-gray-200">
        Dr. Athelstan Pateron Atanas
      </p>
      <p>Fundador & CEO Global – EdenKingDom Corporation</p>
      <p className="text-sm">© 2025 EdenKingDom Global Authority</p>
    </div>

  </div>
</motion.section>

{/* SECTION — MOÇAMBIQUE E A EXCLUSÃO FINANCEIRA | EKD */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-16 sm:py-24 px-6 rounded-3xl mt-16"
>
  {/* 🇲🇿 Fundo cinematográfico geopolítico */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/90 via-black/95 to-black" />
    <div
      className="absolute inset-0 bg-[url('/images/ekd-mocambique-exclusao-financeira-visao-global-bg.jpg')]
                 bg-cover bg-center opacity-35"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/25 via-transparent to-[#3B82F6]/25 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-6xl mx-auto text-gray-200 space-y-16">

    {/* Exclusão financeira */}
    <div className="border-l-4 border-[#EF4444]/70 pl-6 space-y-4">
      <h3 className="text-xl sm:text-2xl font-bold text-[#FACC15]">
        🇲🇿 Moçambique e a Exclusão Financeira
      </h3>

      <p className="text-gray-300 leading-relaxed">
        Em Moçambique, sistemas como
        <strong> M-Pesa, e-Mola e mCash</strong>
        funcionam quase exclusivamente em centros urbanos como Maputo —
        e mesmo assim com limitações graves.
      </p>

      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>Demora excessiva para abertura de contas;</li>
        <li>Ineficiência no suporte ao cliente;</li>
        <li>Ausência de interoperabilidade real;</li>
        <li>Lentidão extrema nas confirmações de pagamentos.</li>
      </ul>

      <p className="text-gray-300">
        Até pagamentos universitários de propinas
        demoram <strong>uma semana</strong> para serem reconhecidos.
      </p>

      <p className="text-gray-400 italic">
        Isso não é atraso tecnológico —
        é <strong>negligência sistêmica</strong>.
      </p>
    </div>

    {/* Formação e experiência */}
    <div className="bg-black/40 border border-white/10 rounded-xl p-6 space-y-4">
      <h3 className="text-xl sm:text-2xl font-bold text-[#3B82F6]">
        🌎 O Treinamento e a Visão Global
      </h3>

      <p className="text-gray-300 leading-relaxed">
        A minha trajetória no setor digital começou
        em <strong>Vendas e Registos de SIM e M-Pesa</strong>
        pela Vodacom.
      </p>

      <p className="text-gray-300">
        A partir daí, evoluí trabalhando com
        <strong> SuperLife</strong>
        e, posteriormente,
        <strong> uTrading.io</strong>,
        onde finalmente passei a trabalhar
        com tecnologia de verdade —
        ao lado de equipes internacionais,
        desenvolvedores, traders
        e líderes comunitários globais.
      </p>
    </div>

    {/* uTrading e liderança */}
    <div className="space-y-4">
      <p className="text-gray-300 leading-relaxed">
        Na uTrading.io, participei ativamente
        do desenvolvimento de produto,
        formações técnicas,
        reuniões globais,
        e atuei como
        <strong> treinador de trading e IA </strong>
        utilizando APIs de bots automatizados.
      </p>

      <p className="text-gray-300">
        Foi essa vivência prática que me preparou
        para liderar aquilo que hoje me foi confiado:
        a <strong>EdenKingDom Corporation</strong>,
        como CEO Global & Fundador Sénior.
      </p>
    </div>

    {/* Comunidade global */}
    <div className="bg-gradient-to-r from-[#D4AF37]/15 to-[#020617]/40
                    border border-white/10 rounded-xl p-6 space-y-4">
      <p className="text-gray-300 leading-relaxed">
        Trabalhei com irmãos e líderes globais:
        <strong> Paulo Machado</strong>,
        <strong> Adão</strong>,
        líderes dos EUA,
        <strong> Líder Sérgio, wesley </strong> e muito mais líderes do Brasil,
        e líderes de toda África
        e do mundo em geral,
        formando uma comunidade sólida e consciente.
      </p>

      <p className="text-gray-300">
        O <strong>Brasil</strong> sempre me inspirou —
        o mercado cripto mais forte da América Latina,
        referência em inovação,
        PIX,
        Binance Latino
        e inclusão financeira em massa.
      </p>
    </div>

    {/* União global */}
    <div className="text-center space-y-4">
      <p className="text-gray-300 leading-relaxed">
        Hoje, <strong> Latinos, PALOPs, CPLPs e Africanos </strong>
        estão se unindo através da
        <strong> E-Coin </strong>.
      </p>

      <p className="text-gray-400 italic">
        Nada — nem fronteiras,
        nem preconceitos —
        impedirá a sua
        <strong> fluidez global</strong>.
      </p>
    </div>

  </div>
</motion.section>

{/* SECTION — ACORDA, ÁFRICA | CHAMADO CIVILIZACIONAL EKD */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-20 sm:py-28 px-6 rounded-3xl mt-20"
>
  {/* 🌍 Fundo cinematográfico pan-africano */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/95 via-black/95 to-black" />
    <div
      className="absolute inset-0 bg-[url('/images/ekd-acorda-africa-progresso-fintech-bg.jpg')]
                 bg-cover bg-center opacity-30"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/30 via-transparent to-[#3B82F6]/30 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-6xl mx-auto text-gray-200 space-y-16">

    {/* Título */}
    <div className="text-center space-y-4">
      <h2 className="text-2xl sm:text-4xl font-extrabold text-[#FACC15]">
        🌍 Acorda, África
      </h2>
      <p className="text-gray-400 italic">
        É preciso acordar antes que seja tarde.
      </p>
    </div>

    {/* Abertura */}
    <div className="border-l-4 border-[#3B82F6]/70 pl-6 space-y-4">
      <p className="text-gray-300 leading-relaxed">
        Quando o público despertar, vai se aliar naturalmente às moedas digitais e digitalizadas —
        como o <strong>Rand</strong>, o <strong>Dólar</strong>, o <strong> Bitcoin </strong>, o <strong> USDT</strong>, <strong> E-USD</strong>, <strong> E-Coin </strong>
        e outras criptomoedas já em circulação em países vizinhos.
      </p>
    </div>

    {/* África do Sul como benchmark */}
    <div className="bg-black/40 border border-white/10 rounded-xl p-6 space-y-6">
      <h3 className="text-xl sm:text-2xl font-bold text-[#22C55E]">
        🇿🇦 África do Sul — Pioneira em solo africano
      </h3>

      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>Tem <strong> FinTechs globais </strong>;</li>
        <li>Possui <strong> ATMs de criptomoedas </strong>;</li>
        <li>Mantém <strong> corretoras</strong> e bolsas de ativos digitais;</li>
        <li>Opera em mercados de ações e <strong> criptoativos reais</strong>.</li>
      </ul>

      <p className="text-gray-300 font-semibold">
        E nós? Até quando dormiremos?
      </p>
    </div>

    {/* Frase forte / reflexão */}
    <div className="bg-gradient-to-r from-[#D4AF37]/20 to-[#020617]/50 border border-white/10 rounded-xl p-6 space-y-4">
      <p className="text-gray-300 leading-relaxed">
        Até quando o frango do vizinho será o único cheiro que sentimos?
      </p>

      <p className="text-gray-400 italic">
        “Isso é país, ou é apenas território com leis que estancam o ar fresco do progresso?”
      </p>
    </div>

    {/* Mensagem final */}
    <div className="border-l-4 border-[#F59E0B]/70 pl-6 space-y-4">
      <h3 className="text-xl sm:text-2xl font-bold text-[#F59E0B]">
        ⚠️ Mensagem Final
      </h3>

      <p className="text-gray-300 leading-relaxed">
        Pense bem nisto.
        <strong> Somos a EdenKingDom Corporation. </strong>
        Podes perder a tua fatia se a cabeça não regular.
      </p>

      <p className="text-gray-400 italic">
        “Aguardamos a tua melhoria, irmão FinTech — de norte a sul, do Zumbo ao Índico.”
      </p>

      <p className="text-gray-300 font-semibold">
        Que vergonha. Tanto espaço, e tão pouca visão.
      </p>
    </div>

    {/* Fecho institucional */}
    <div className="text-center pt-8 border-t border-white/10 space-y-2">
      <p className="text-[#FACC15] font-semibold">
        EdenKingDom Corporation
      </p>
      <p className="text-gray-400 italic">
        Built from Genesis, Designed for Eternity.
      </p>
    </div>

  </div>
</motion.section>

{/* SECTION — DA EXPERIÊNCIA À SABEDORIA | CONCLUSÃO EKD */}
<motion.section
  variants={fadeUp}
  className="relative w-full overflow-hidden py-20 sm:py-28 px-6 rounded-3xl mt-20"
>
  {/* 🧠 Fundo cinematográfico conclusivo */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/95 via-black/95 to-black" />
    <div
      className="absolute inset-0 bg-[url('/images/ekd-da-experiencia-a-sabedoria-conclusao-bg.jpg')]
                 bg-cover bg-center opacity-35"
      aria-hidden="true"
    />
    <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/30 via-transparent to-[#3B82F6]/30 blur-3xl" />
  </div>

  {/* Conteúdo */}
  <div className="max-w-6xl mx-auto text-gray-200 space-y-20">

    {/* Título */}
    <div className="text-center space-y-4">
      <h2 className="text-2xl sm:text-4xl font-extrabold text-[#FACC15]">
        🧠 Da Experiência à Sabedoria
      </h2>
      <p className="text-gray-400 italic">
        “O que veem hoje é resultado de anos de experiência,
        sacrifício e trabalho silencioso.”
      </p>
    </div>

    {/* Jornada pessoal */}
    <div className="border-l-4 border-[#22C55E]/70 pl-6 space-y-4">
      <p className="text-gray-300 leading-relaxed">
        Fui promotor, operador, vendedor, estudante,
        programador, formador
        e hoje fui confiado a ser
        <strong> CEO Global & Fundador Sénior </strong>
        e líder global da
        <strong> EdenKingDom Corporation </strong>.
      </p>

      <p className="text-gray-300">
        Tenho orgulho de cada etapa vivida,
        porque <strong> cada dor virou força </strong>
        e <strong> cada barreira virou tecnologia</strong>.
      </p>
    </div>

    {/* Impacto vs diplomas */}
    <div className="bg-black/40 border border-white/10 rounded-xl p-6 space-y-4">
      <p className="text-gray-300 leading-relaxed">
        Não me defino por diplomas —
        <strong>defino-me pelo impacto</strong>.
      </p>

      <p className="text-gray-300">
        Diplomas não são selos de grandeza —
        são apenas carimbos de passagem.
      </p>

      <p className="text-gray-300">
        Mas o <strong>impacto social</strong>,
        a <strong>visão </strong>
        e a <strong>ação transformadora</strong>,
        esses sim,
        definem quem somos.
      </p>
    </div>

    {/* Conclusão institucional */}
    <div className="space-y-4">
      <h3 className="text-xl sm:text-2xl font-bold text-[#3B82F6]">
        🏛️ Conclusão
      </h3>

      <p className="text-gray-300 leading-relaxed">
        A <strong> EdenKingDom Corporation </strong>
        é o resultado de uma jornada pessoal
        e coletiva de superação —
        um sonho que se transformou
        em <strong> sistema financeiro global </strong>,
        com <strong>E-Pay</strong>,
        <strong> E-Coin</strong>, <strong> E-USD </strong>
        e <strong> E-Genesis </strong>
        como ferramentas de libertação.
      </p>
    </div>

    {/* Declarações fortes */}
    <div className="bg-gradient-to-r from-[#D4AF37]/20 to-[#020617]/50
                    border border-white/10 rounded-xl p-6 space-y-4">
      <p className="text-gray-300 italic">
        “Não pedimos ajuda — oferecemos soluções.”
      </p>
      <p className="text-gray-300 italic">
        “Não buscamos piedade — buscamos parceria.”
      </p>
      <p className="text-gray-300 italic">
        “Não fugimos da responsabilidade — criamos o futuro.”
      </p>
    </div>

    {/* Vocação */}
    <div className="space-y-4">
      <p className="text-gray-300 leading-relaxed">
        Eu não sou apenas um estudioso —
        sou um <strong> palestrante nato </strong>,
        <strong> formador </strong>
        e <strong> criador de pontes </strong>.
      </p>

      <p className="text-gray-300">
        Desde criança, amei ensinar.
        E hoje ensino aquilo que o mundo
        ainda vai aprender:
      </p>

      <p className="text-gray-400 italic">
        “A liberdade financeira nasce
        onde a coragem vence a limitação.”
      </p>
    </div>

    {/* Assinatura final */}
    <div className="text-center pt-8 border-t border-white/10 space-y-2">
      <p className="text-[#FACC15] font-semibold">
        EdenKingDom Corporation
      </p>
      <p className="text-gray-400 italic">
        Built from Genesis, Designed for Eternity.
      </p>
    </div>

  </div>
</motion.section>

    </>
  );
}

// 2. Exportação principal envolvida em Suspense
export default function EcoinBusinessPresentation() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-white">Carregando...</div>}>
      <PresentationContent />
    </Suspense>
  );
}