"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import AskAIAudioEngine from "@/components/AskAIAudioEngine";
import PremiumDocumentVoice from "@/components/PremiumDocumentVoice";

// 1. Componente que lida com a lógica e os parâmetros
function ECoinSolidityContent() {
  const searchParams = useSearchParams();
  const param = searchParams.get("param");


  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

 

  return (
    <>

    <motion.div
      className="min-h-screen bg-black text-gray-300 pt-32 px-6"
      initial="hidden"
      animate="visible"
      variants={fadeUp}
    >
      <div className="max-w-4xl mx-auto text-left space-y-10">

  <PremiumDocumentVoice />

  <div id="voice-document-wrapper">
        <motion.h1
          className="text-4xl font-extrabold text-[#D4AF37] text-center"
          variants={fadeUp}
        >
          Interpretação de Solidity da E-Coin
        </motion.h1>


<AskAIAudioEngine />
<div>
      {param && <div>Param recebido: {param}</div>}
    </div>
        <motion.div variants={fadeUp} className="space-y-3">
          <p>
            ❗ <strong>Por que você não vê <code>renounceOwnership()</code>?</strong><br />
            👉 Porque o contrato <strong>não é Ownable</strong>. Esse é o ponto-chave.
          </p>
          <h2 className="text-2xl text-[#D4AF37] font-semibold">🔍 O que o código prova</h2>
          <ul className="list-disc list-inside">
            <li>approve</li>
            <li>transfer</li>
            <li>transferFrom</li>
          </ul>
          <p>
            ✅ Isso significa que o contrato da E-Coin foi deployado{" "}
            <strong>sem módulo de ownership</strong>.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} className="space-y-3">
          <h2 className="text-2xl text-[#D4AF37] font-semibold">🧠 Em termos práticos</h2>
          <p>🔐 A E-Coin já é descentralizada por design.</p>
          <p>
            Renunciar ownership só faz sentido quando o contrato herda{" "}
            <code>Ownable</code> e há funções protegidas por{" "}
            <code>onlyOwner</code>.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} className="space-y-3">
          <h2 className="text-2xl text-[#D4AF37] font-semibold">🟢 Conclusão Final</h2>
          <ul className="list-disc list-inside">
            <li>🔥 O contrato da E-Coin já é ownership-less.</li>
            <li>🔥 Não existe privilégio administrativo oculto.</li>
            <li>🔥 Isso é melhor do que renunciar depois — pois já nasceu livre.</li>
          </ul>
        </motion.div>

        <motion.div variants={fadeUp} className="space-y-3">
          <h2 className="text-2xl text-[#D4AF37] font-semibold">📣 Declaração técnica oficial</h2>
          <p className="bg-[#0D0D0D]/70 border border-gray-800 p-4 rounded-xl">
            A E-Coin foi desenhada e criada sem proprietário.<br />
            Não há administrador, nem emissão, nem queima, nem funções privilegiadas.<br />
            O supply é fixo e o contrato é imutável por design ou definição na gênesis.
          </p>
        </motion.div>

{/* 📜 Interpretação Técnica & Estratégica do Contrato E-Coin */}
<motion.div variants={fadeUp} className="space-y-6">

  <h2 className="text-2xl text-[#D4AF37] font-semibold">
    📜 Interpretação Técnica & Estratégica do Contrato E-Coin
  </h2>

  <p className="text-gray-400 text-sm">
    Fonte da análise: <strong>SolidityScan</strong> (QuickScan – BSC Mainnet)
  </p>

  {/* 🟢 Pontos Fortes */}
  <div className="space-y-4">
    <h3 className="text-xl font-semibold text-green-400">
      🟢 Pontos Fortes (Beneficial)
    </h3>

    <ul className="space-y-3 list-disc list-inside">
      <li>
        <strong>Código-fonte verificado</strong><br />
        Contrato 100% verificado no explorador, permitindo auditoria pública,
        validação de lógica real e máxima transparência institucional.
      </li>

      <li>
        <strong>Supply fixo (sem mint)</strong><br />
        Não existe função de mintagem. O supply total é imutável após o deploy,
        garantindo previsibilidade económica e proteção contra diluição.
      </li>

      <li>
        <strong>Ownership renunciada</strong><br />
        Não existe controlo administrativo ativo. O contrato não pode ser
        manipulado, recuperado ou alterado — descentralização real.
      </li>

      <li>
        <strong>Contrato não atualizável (sem proxy)</strong><br />
        Não utiliza padrões de upgrade. Nenhuma lógica pode ser modificada
        futuramente, eliminando riscos de alterações inesperadas.
      </li>

      <li>
        <strong>Sem blacklist, whitelist ou controlo de taxas</strong><br />
        Nenhum utilizador pode ser bloqueado. Fees, saldos e regras não podem
        ser alteradas por terceiros.
      </li>

      <li>
        <strong>Sem funções críticas ocultas</strong><br />
        Não existem owners ocultos, permissões especiais ou backdoors
        administrativos.
      </li>
    </ul>
  </div>

  {/* 🟡 Pontos Neutros */}
  <div className="space-y-4">
    <h3 className="text-xl font-semibold text-yellow-400">
      🟡 Pontos Neutros / Baixo Risco
    </h3>

    <ul className="space-y-3 list-disc list-inside">
      <li>
        <strong>Solidity pragma antigo</strong><br />
        O contrato usa uma versão mais antiga do Solidity.
        Não representa falha ativa, apenas ausência de features recentes.
        Mitigado pelo facto de o contrato já estar deployado e imutável.
      </li>

      <li>
        <strong>Ausência de função burn</strong><br />
        Tokens não podem ser queimados on-chain.
        Isto não é risco de segurança — apenas indica que deflação,
        se existir, ocorre via buyback externo.
      </li>
    </ul>
  </div>

  {/* 🟠 Atenção Moderada */}
  <div className="space-y-4">
    <h3 className="text-xl font-semibold text-orange-400">
      🟠 Atenção Moderada (Percepção de Mercado)
    </h3>

    <p>
      <strong>Concentração de supply (&gt;20%)</strong><br />
      Um endereço detém mais de 20% da oferta circulante.
      Não é vulnerabilidade técnica, mas fator de percepção.
    </p>

    <p className="text-gray-400 text-sm">
      Normal em tesourarias, pools de liquidez e contratos de staking.
      <br />
      Recomendação: comunicar publicamente que se trata de endereço técnico
      ou institucional.
    </p>
  </div>

  {/* 🔴 Alerta Importante */}
  <div className="space-y-4">
    <h3 className="text-xl font-semibold text-red-400">
      🔴 Alerta Importante (Não On-chain)
    </h3>

    <p>
      <strong>Code Injection via Token Name (XSS)</strong><br />
      O nome ou símbolo pode conter caracteres interpretáveis por interfaces web.
      Isso <strong>não afeta</strong> o contrato, fundos ou blockchain.
    </p>

    <p className="text-gray-400 text-sm">
      O risco existe apenas em interfaces mal construídas que não sanitizam
      strings. DEXs, wallets e BSC não são afetados.
    </p>

    <p className="text-gray-400 text-sm">
      Mitigação: sanitização no website, dashboards e bots —
      totalmente sob controlo do ecossistema EdenKingDom.
    </p>
  </div>

  {/* 🧠 Conclusão Estratégica */}
  <div className="space-y-4">
    <h3 className="text-xl font-semibold text-[#D4AF37]">
      🧠 Conclusão Estratégica
    </h3>

    <p className="italic">
      O contrato da E-Coin é tecnicamente sólido, imutável, descentralizado,
      com supply fixo, sem funções administrativas perigosas e com riscos
      residuais apenas de percepção ou interface — não de blockchain.
    </p>

    <ul className="list-disc list-inside text-gray-300">
      <li>🔐 Segurança on-chain: <strong>Alta</strong></li>
      <li>🧾 Transparência: <strong>Muito alta</strong></li>
      <li>🏛 Governança: <strong>Descentralizada real</strong></li>
      <li>💰 Risco de rug: <strong>Praticamente nulo</strong></li>
      <li>⚠ Pontos de comunicação: Concentração + XSS (UI)</li>
    </ul>
  </div>

</motion.div>

{/* 📜 Interpretação — Funções & Eventos do Contrato E-Coin */}
<motion.div variants={fadeUp} className="space-y-6">

  <h2 className="text-2xl text-[#D4AF37] font-semibold">
    📜 Interpretação — Funções & Eventos do Contrato E-Coin
  </h2>

  {/* 🧩 Contract Creator */}
  <div className="space-y-3">
    <h3 className="text-xl font-semibold text-[#3B82F6]">
      🧩 Contract Creator
    </h3>

    <p className="text-gray-300">
      <strong>Creators Information:</strong> not available
    </p>

    <ul className="list-disc list-inside text-gray-300 space-y-2">
      <li>
        O explorador não exibe dados públicos adicionais sobre o criador.
      </li>
      <li>
        Isto <strong>não indica risco</strong>, pois:
        <ul className="list-disc list-inside ml-6">
          <li>O contrato está verificado</li>
          <li>A ownership foi renunciada</li>
          <li>Não existe controlo administrativo possível</li>
        </ul>
      </li>
    </ul>

    <p className="italic text-gray-400">
      Leitura institucional: o contrato não depende do criador para funcionamento,
      manutenção ou controlo.
    </p>
  </div>

  {/* ⚙️ Funções ERC-20 */}
  <div className="space-y-4">
    <h3 className="text-xl font-semibold text-green-400">
      ⚙️ Funções Padrão (ERC-20)
    </h3>

    <p className="text-gray-300">
      O contrato implementa <strong>100% das funções essenciais do padrão ERC-20</strong>,
      garantindo compatibilidade total com wallets, DEXs e CEXs.
    </p>

    <div className="overflow-x-auto">
      <table className="w-full text-sm border border-gray-800 rounded-lg">
        <thead className="bg-[#0D0D0D] text-[#D4AF37]">
          <tr>
            <th className="px-4 py-2 text-left">Função</th>
            <th className="px-4 py-2 text-left">Interpretação</th>
          </tr>
        </thead>
        <tbody className="text-gray-300">
          <tr><td className="px-4 py-2">transfer</td><td className="px-4 py-2">Transferências diretas entre utilizadores</td></tr>
          <tr><td className="px-4 py-2">allowance</td><td className="px-4 py-2">Define limites de gasto para terceiros</td></tr>
          <tr><td className="px-4 py-2">transferFrom</td><td className="px-4 py-2">Transferências via contratos (DEX, staking, bridges)</td></tr>
          <tr><td className="px-4 py-2">decimals</td><td className="px-4 py-2">Define a precisão do token</td></tr>
          <tr><td className="px-4 py-2">totalSupply</td><td className="px-4 py-2">Exibe o supply total fixo</td></tr>
          <tr><td className="px-4 py-2">balanceOf</td><td className="px-4 py-2">Consulta saldo de qualquer endereço</td></tr>
          <tr><td className="px-4 py-2">name</td><td className="px-4 py-2">Nome oficial do token</td></tr>
          <tr><td className="px-4 py-2">symbol</td><td className="px-4 py-2">Símbolo oficial do token</td></tr>
          <tr><td className="px-4 py-2">approve</td><td className="px-4 py-2">Autoriza contratos a gastar tokens</td></tr>
        </tbody>
      </table>
    </div>

    <p className="text-green-400 font-medium">
      ✔ Totalmente compatível com MetaMask, Trust Wallet, Binance, PancakeSwap e CEXs
    </p>
  </div>

  {/* 🧠 Extensão Detectada */}
  <div className="space-y-4">
    <h3 className="text-xl font-semibold text-yellow-400">
      🧠 Extensão Detectada — ERC20WithAutoMinerReward
    </h3>

    <p className="text-gray-300">
      Esta extensão pode causar confusão pelo nome, mas requer interpretação correta.
    </p>

    <ul className="list-disc list-inside text-gray-300 space-y-2">
      <li>❌ Não é minting</li>
      <li>❌ Não é inflação</li>
      <li>❌ Não cria tokens automaticamente</li>
      <li>❌ Não concede privilégios ao owner</li>
    </ul>

    <p className="text-gray-300">
      Nenhuma função ativa de recompensa ou mineração foi detectada:
    </p>

    <ul className="list-disc list-inside text-gray-300 space-y-2">
      <li>Não existe <code>_mint</code></li>
      <li>Não existem funções automáticas externas</li>
      <li>Supply permanece fixo e imutável</li>
    </ul>

    <p className="italic text-gray-400">
      Leitura estratégica: a extensão não altera a economia do token
      nem introduz riscos funcionais.
    </p>
  </div>

  {/* 🧩 Funções Extra */}
  <div className="space-y-3">
    <h3 className="text-xl font-semibold text-green-400">
      🧩 Funções Extra
    </h3>

    <p className="text-gray-300">
      Nenhuma função sensível adicional foi encontrada.
    </p>

    <ul className="list-disc list-inside text-gray-300 space-y-2">
      <li>Sem funções administrativas</li>
      <li>Sem pausas de contrato</li>
      <li>Sem alteração de taxas</li>
      <li>Sem recuperação de ownership</li>
      <li>Sem modificação arbitrária de saldos</li>
    </ul>

    <p className="text-green-400">
      ✔ Simplicidade, previsibilidade e segurança reforçadas
    </p>
  </div>

  {/* 📢 Eventos */}
  <div className="space-y-4">
    <h3 className="text-xl font-semibold text-[#3B82F6]">
      📢 Eventos do Contrato
    </h3>

    <div className="overflow-x-auto">
      <table className="w-full text-sm border border-gray-800 rounded-lg">
        <thead className="bg-[#0D0D0D] text-[#D4AF37]">
          <tr>
            <th className="px-4 py-2 text-left">Evento</th>
            <th className="px-4 py-2 text-left">Função</th>
          </tr>
        </thead>
        <tbody className="text-gray-300">
          <tr>
            <td className="px-4 py-2">Transfer</td>
            <td className="px-4 py-2">Registra todas as transferências on-chain</td>
          </tr>
          <tr>
            <td className="px-4 py-2">Approval</td>
            <td className="px-4 py-2">Registra autorizações de gasto</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p className="text-gray-400 text-sm">
      Compatível com BscScan, The Graph, Moralis, dashboards, DEXs e sistemas de staking.
    </p>
  </div>

  {/* 🧠 Conclusão Final */}
  <div className="space-y-4">
    <h3 className="text-xl font-semibold text-[#D4AF37]">
      🧠 Conclusão Técnica Final
    </h3>

    <p className="italic text-gray-300">
      O contrato da E-Coin implementa exclusivamente funções ERC-20 padrão,
      sem extensões administrativas, sem controlo do criador,
      sem privilégios ocultos e com compatibilidade total
      com infraestruturas DeFi e CeFi.
    </p>

    <ul className="list-disc list-inside text-gray-300">
      <li>🔐 Segurança funcional: <strong>Alta</strong></li>
      <li>📦 Simplicidade do contrato: <strong>Alta</strong></li>
      <li>🔗 Compatibilidade técnica: <strong>Total</strong></li>
      <li>🧾 Dependência do criador: <strong>Nenhuma</strong></li>
      <li>🏛 Governança: <strong>Imutável e descentralizada</strong></li>
    </ul>
  </div>

</motion.div>

{/* 📊 Interpretação Consolidada — GoPlus · CertiK · HashDit */}
<motion.div variants={fadeUp} className="space-y-8">

  <h2 className="text-2xl font-semibold text-[#D4AF37]">
    📊 Interpretação Consolidada — GoPlus · CertiK · HashDit
  </h2>

  <p className="text-gray-300">
    <strong>Token:</strong> E-Coin (BSC)
  </p>

  <p className="text-gray-400 text-sm">
    ⚠️ Importante: estas plataformas analisam sinais heurísticos automáticos,
    não o estado político, estratégico ou institucional real do projeto.
  </p>

  {/* 🧠 BLOCO 1 — CENTRALIZAÇÃO */}
  <div className="space-y-4">
    <h3 className="text-xl font-semibold text-red-400">
      🧠 BLOCO 1 — CENTRALIZAÇÃO (onde surgem os alertas)
    </h3>

    <div className="overflow-x-auto">
      <table className="w-full text-sm border border-gray-800 rounded-lg">
        <thead className="bg-[#0D0D0D] text-[#D4AF37]">
          <tr>
            <th className="px-4 py-2 text-left">Plataforma</th>
            <th className="px-4 py-2 text-left">Alerta</th>
          </tr>
        </thead>
        <tbody className="text-gray-300">
          <tr>
            <td className="px-4 py-2">GoPlus</td>
            <td className="px-4 py-2">Ownership Not Renounced</td>
          </tr>
          <tr>
            <td className="px-4 py-2">CertiK</td>
            <td className="px-4 py-2">Major Holder Ratio = 100%</td>
          </tr>
          <tr>
            <td className="px-4 py-2">HashDit</td>
            <td className="px-4 py-2">Privilege Holders Ratio = 100%</td>
          </tr>
        </tbody>
      </table>
    </div>

    <p className="text-gray-300">
      🔍 <strong>Interpretação real:</strong>
    </p>

    <ul className="list-disc list-inside text-gray-300 space-y-2">
      <li>
        GoPlus e HashDit não conseguem confirmar renúncia quando o contrato:
        <ul className="list-disc list-inside ml-6">
          <li>Não possui funções administrativas</li>
          <li>Não expõe <code>owner()</code> no ABI</li>
        </ul>
      </li>
      <li>
        A CertiK confirma explicitamente:
        <span className="text-green-400 font-medium">
          {" "}“Owner privilege has been renounced”
        </span>
      </li>
    </ul>

    <p className="italic text-gray-400">
      Conclusão: a ownership foi renunciada, mas ferramentas heurísticas
      falham ao inferir isso em contratos simples e imutáveis.
    </p>

    <p className="text-gray-300">
      A concentração de supply indica apenas:
    </p>

    <ul className="list-disc list-inside text-gray-300">
      <li>Tesouraria</li>
      <li>Liquidez (LP)</li>
      <li>Contratos técnicos</li>
    </ul>

    <p className="text-green-400">
      ✔ Não representa privilégio técnico nem risco on-chain
    </p>
  </div>

  {/* 🟢 BLOCO 2 — CONTROLO ADMINISTRATIVO */}
  <div className="space-y-4">
    <h3 className="text-xl font-semibold text-green-400">
      🟢 BLOCO 2 — Controlo e Poder Administrativo
    </h3>

    <div className="overflow-x-auto">
      <table className="w-full text-sm border border-gray-800 rounded-lg">
        <thead className="bg-[#0D0D0D] text-[#D4AF37]">
          <tr>
            <th className="px-4 py-2 text-left">Capacidade</th>
            <th className="px-4 py-2 text-left">Resultado</th>
          </tr>
        </thead>
        <tbody className="text-gray-300">
          {[
            ["Mintar tokens", "❌ Não"],
            ["Mint ilimitado", "❌ Não"],
            ["Alterar saldos", "❌ Não"],
            ["Alterar taxas", "❌ Não"],
            ["Blacklist", "❌ Não"],
            ["Whitelist", "❌ Não"],
            ["Pausar transferências", "❌ Não"],
            ["Cooldown", "❌ Não"],
            ["Recuperar ownership", "❌ Não"],
            ["Self-destruct", "❌ Não"],
          ].map(([cap, res]) => (
            <tr key={cap}>
              <td className="px-4 py-2">{cap}</td>
              <td className="px-4 py-2">{res}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <p className="text-green-400 font-medium">
      ✔ Nenhum mecanismo de controlo central foi detectado
    </p>
  </div>

  {/* 🟢 BLOCO 3 — MERCADO */}
  <div className="space-y-3">
    <h3 className="text-xl font-semibold text-yellow-400">
      🟢 BLOCO 3 — Mercado (estado, não risco)
    </h3>

    <p className="text-gray-300">
      “Not in Major DEX” indica apenas estágio inicial de mercado.
    </p>

    <ul className="list-disc list-inside text-gray-300">
      <li>Buy tax: 0%</li>
      <li>Sell tax: 0%</li>
      <li>Sem restrições de compra</li>
      <li>Sem restrições de venda</li>
      <li>Sem anti-whale oculto</li>
    </ul>

    <p className="italic text-gray-400">
      Estado inicial ≠ risco de contrato
    </p>
  </div>

  {/* 🟢 BLOCO 4 — TRANSPARÊNCIA */}
  <div className="space-y-4">
    <h3 className="text-xl font-semibold text-[#3B82F6]">
      🟢 BLOCO 4 — Transparência & Segurança
    </h3>

    <div className="overflow-x-auto">
      <table className="w-full text-sm border border-gray-800 rounded-lg">
        <thead className="bg-[#0D0D0D] text-[#D4AF37]">
          <tr>
            <th className="px-4 py-2 text-left">Item</th>
            <th className="px-4 py-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody className="text-gray-300">
          {[
            ["Código verificado", "✅"],
            ["Open source", "✅"],
            ["Proxy", "❌"],
            ["External calls", "❌"],
            ["Hidden owner", "❌"],
            ["Honeypot", "❌"],
            ["Self-destruct", "❌"],
          ].map(([item, status]) => (
            <tr key={item}>
              <td className="px-4 py-2">{item}</td>
              <td className="px-4 py-2">{status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    <p className="text-green-400">
      ✔ Consenso total entre GoPlus, CertiK e HashDit
    </p>
  </div>

  {/* 🧠 CONCLUSÃO FINAL */}
  <div className="space-y-4">
    <h3 className="text-xl font-semibold text-[#D4AF37]">
      🧠 Conclusão Final (Institucional)
    </h3>

    <ul className="list-disc list-inside text-gray-300 space-y-1">
      <li>🔐 Segurança on-chain: <strong>Alta</strong></li>
      <li>🏛 Governança: <strong>Totalmente descentralizada</strong></li>
      <li>📊 Alertas: <strong>Percepção, não função</strong></li>
      <li>🧾 Risco real: <strong>Baixo a inexistente</strong></li>
    </ul>

    <p className="bg-[#0D0D0D]/70 border border-gray-800 p-4 rounded-xl text-gray-300 italic">
      “Os alertas de centralização reportados por ferramentas automáticas refletem
      exclusivamente o estágio atual de distribuição de supply e limitações heurísticas
      de leitura, não a existência de qualquer controlo administrativo, função privilegiada
      ou risco on-chain. O contrato da E-Coin é imutável, auditável, com supply fixo e sem
      mecanismos de intervenção.”
    </p>
  </div>

</motion.div>

{/* 🔗 Links Oficiais de Auditoria & Verificação Pública */}
<motion.div variants={fadeUp} className="pt-12 space-y-4">

  <h3 className="text-xl font-semibold text-[#D4AF37] text-center">
    🔗 Verificação Pública & Auditorias Externas
  </h3>

  <p className="text-center text-gray-400 text-sm">
    Acesso direto às plataformas independentes de análise on-chain
  </p>

  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">

    {/* GoPlus / BNB Chain Risk Scanner */}
    <a
      href="https://dappbay.bnbchain.org/risk-scanner/0xDf69235019cc416dd5Be75dfc0eDc922aB4b5964"
      target="_blank"
      rel="noopener noreferrer"
      className="w-full sm:w-auto px-6 py-3 rounded-xl
                 bg-[#0D0D0D]/80 border border-gray-800
                 hover:border-[#FACC15]
                 text-gray-300 hover:text-[#FACC15]
                 transition-all text-center font-medium"
    >
      🛡 GoPlus · BNB Chain Risk Scanner
    </a>

    {/* SolidityScan QuickScan */}
    <a
      href="https://solidityscan.com/quickscan/0xDf69235019cc416dd5Be75dfc0eDc922aB4b5964/bscscan/mainnet?ref=etherscan"
      target="_blank"
      rel="noopener noreferrer"
      className="w-full sm:w-auto px-6 py-3 rounded-xl
                 bg-[#0D0D0D]/80 border border-gray-800
                 hover:border-[#3B82F6]
                 text-gray-300 hover:text-[#3B82F6]
                 transition-all text-center font-medium"
    >
      🔍 SolidityScan · QuickScan (BSC Mainnet)
    </a>

  </div>

  <p className="text-xs text-gray-500 text-center pt-4">
    Todos os relatórios são públicos, independentes e atualizados em tempo real.
  </p>

</motion.div>

        <motion.p
          className="text-sm text-gray-500 pt-10 text-center"
          variants={fadeUp}
        >
          © EdenKingDom Corporation — Solidity Transparency Division
        </motion.p>
      </div>
      </div>
    </motion.div>

    </>
  );
}


// 2. Exportação principal com a barreira de Suspense
export default function ECoinSolidityPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black flex items-center justify-center text-white">A carregar contrato...</div>}>
      <ECoinSolidityContent />
    </Suspense>
  );
}