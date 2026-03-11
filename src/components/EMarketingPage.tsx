"use client";

import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function EMarketingPage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-ekd-pearl">

      {/* 🎬 FUNDO CINEMATOGRÁFICO */}
      <div className="absolute inset-0">
        {/* Base preta */}
        <div className="absolute inset-0 bg-ekd-black" />

        {/* Glow pink */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(225,29,138,0.35),transparent_45%)]" />

        {/* Glow ocean */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(0,119,182,0.25),transparent_50%)]" />

        {/* Linha dourada sutil */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(245,196,0,0.08),transparent)]" />
      </div>

      {/* CONTEÚDO */}
      <section className="relative z-10 max-w-6xl mx-auto px-8 py-28">

        <h1 className="text-5xl md:text-6xl font-extrabold text-ekd-pink leading-tight">
          E-Marketing <br />
          <span className="text-ekd-pearl">EdenKingDom Marketing Division</span>
        </h1>

        <p className="mt-8 max-w-3xl text-lg text-ekd-pearl/80">
          A E-Marketing é mais uma fonte de renda. Não funciona como liderança de comunidade, mas sim como um promotor profissional de marcas dentro do ecossistema EdenKingDom.
        </p>

        <p className="mt-6 max-w-3xl text-ekd-pearl/80">
          O E-Marketing é responsável pela promoção estratégica das marcas, serviços e iniciativas internas da EdenKingDom Corporation, em escala global.
        </p>

        <ul className="list-disc ml-6 mt-6 space-y-3 text-ekd-pearl/90">
          <li>Campanhas institucionais e corporativas</li>
          <li>Eventos, exposições e ativações físicas</li>
          <li>Branding, identidade e reputação institucional</li>
          <li>Infraestruturas publicitárias (LEDs, outdoors, torres)</li>
          <li>Conteúdos, documentos, whitepapers e media</li>
        </ul>

        <div className="mt-12 max-w-4xl space-y-6 text-ekd-pearl/85">
          <p>
            Os líderes de equipes podem ampliar os seus horizontes abrindo uma conta gratuita de promoção. Ao criar sua conta, você torna‑se um promotor oficial de marcas da EdenKingDom.
          </p>

          <p>
            Basta acompanhar os conteúdos publicados pelos profissionais da divisão — documentários, vídeos, depoimentos, factos sociais, saúde pública, dia a dia da organização, marcas, produtos e serviços.
          </p>

          <p>
            Quanto mais pessoas visualizarem, acessarem e utilizarem os serviços através dos seus redirecionamentos e comunicações, mais você ganha.
          </p>

          <p>
            Você também ganha ao investir dentro da plataforma, e igualmente o público ganha ao assistir, partilhar e interagir com conteúdos — especialmente dentro da nossa futura rede social Socialização (S), com monetização integrada.
          </p>

          <p className="text-ekd-pink font-semibold">
            Aqui todos ganham — uma economia de participação e divulgação real.
          </p>
        </div>

        {/* BOTÃO ACESSAR */}
        <div className="mt-14 flex flex-wrap gap-4">
          <a
            href="https://emarketing.edenkingdom.org"
            target="_blank"
            className="border border-ekd-ocean text-ekd-ocean hover:bg-ekd-ocean hover:text-ekd-black transition px-8 py-4 rounded-xl inline-flex items-center gap-2"
          >
            Acessar a Plataforma E-Marketing <ExternalLink size={18} />
          </a>
        </div>

      </section>
    </main>
  );
}
