"use client";

import { useRef, useState } from "react";

export default function DocumentVoicePlayer() {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [paused, setPaused] = useState(false);

  let utteranceRef: SpeechSynthesisUtterance | null = null;

  const getPageText = () => {
    if (!contentRef.current) return "";

    const cloned = contentRef.current.cloneNode(true) as HTMLElement;

    // Remove botões e elementos interativos
    cloned.querySelectorAll("button").forEach(el => el.remove());
    cloned.querySelectorAll("a").forEach(el => el.remove());

    return cloned.innerText;
  };

  const play = () => {
    const text = getPageText();
    if (!text) return;

    utteranceRef = new SpeechSynthesisUtterance(text);
    utteranceRef.lang = "pt-PT";
    utteranceRef.rate = 1;

    utteranceRef.onend = () => {
      setPlaying(false);
      setPaused(false);
    };

    speechSynthesis.cancel();
    speechSynthesis.speak(utteranceRef);

    setPlaying(true);
    setPaused(false);
  };

  const pause = () => {
    speechSynthesis.pause();
    setPaused(true);
  };

  const resume = () => {
    speechSynthesis.resume();
    setPaused(false);
  };

  const stop = () => {
    speechSynthesis.cancel();
    setPlaying(false);
    setPaused(false);
  };

  return (
    <>
      <div className="flex flex-wrap justify-center gap-4 mt-8 mb-8">

        {!playing && (
          <button
            onClick={play}
            className="px-6 py-3 bg-[#D4AF37] text-black font-semibold rounded-xl shadow-lg"
          >
            ▶ Escutar Documento
          </button>
        )}

        {playing && !paused && (
          <button
            onClick={pause}
            className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-xl"
          >
            ⏸ Pausar
          </button>
        )}

        {playing && paused && (
          <button
            onClick={resume}
            className="px-6 py-3 bg-green-500 text-black font-semibold rounded-xl"
          >
            ▶ Retomar
          </button>
        )}

        {playing && (
          <button
            onClick={stop}
            className="px-6 py-3 bg-red-600 text-white font-semibold rounded-xl"
          >
            ⏹ Parar
          </button>
        )}

      </div>

      {/* WRAPPER DO CONTEÚDO */}
      <div ref={contentRef}>
        {/* Aqui o conteúdo da página será envolvido */}
      </div>
    </>
  );
}