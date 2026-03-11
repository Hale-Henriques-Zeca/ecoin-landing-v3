// src/components/PremiumDocumentVoice.tsx
"use client";

import { useState } from "react";

export default function PremiumDocumentVoice() {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const extractText = () => {
    const container = document.getElementById("voice-document-wrapper");
    if (!container) return "";

    const clone = container.cloneNode(true) as HTMLElement;

    clone.querySelectorAll("button").forEach(el => el.remove());
    clone.querySelectorAll("a").forEach(el => el.remove());
    clone.querySelectorAll("script").forEach(el => el.remove());

    return clone.innerText;
  };

  const detectLanguage = (text: string) =>
    /[ãõçéáíóú]/i.test(text) ? "pt-PT" : "en-US";

  const speak = () => {
    const text = extractText();
    if (!text) {
      alert("Nenhum texto encontrado.");
      return;
    }

    const sentences = text
      .replace(/\n/g, " ")
      .split(/(?<=[.?!])\s+/)
      .filter(Boolean);

    const lang = detectLanguage(text);

    speechSynthesis.cancel();
    setPlaying(true);

    const speakSentence = (index: number) => {
      if (index >= sentences.length) {
        setPlaying(false);
        setProgress(0);
        return;
      }

      const utterance = new SpeechSynthesisUtterance(sentences[index]);
      utterance.lang = lang;

      utterance.onstart = () => {
        setProgress((index / sentences.length) * 100);
      };

      utterance.onend = () => {
        speakSentence(index + 1);
      };

      speechSynthesis.speak(utterance);
    };

    speakSentence(0);
  };

  const pause = () => speechSynthesis.pause();
  const resume = () => speechSynthesis.resume();
  const stop = () => {
    speechSynthesis.cancel();
    setPlaying(false);
    setProgress(0);
  };

  return (
    <div className="mt-10 mb-12 text-center">

      {!playing && (
        <button
          onClick={speak}
          className="px-6 py-3 bg-[#D4AF37] text-black font-semibold rounded-xl"
        >
          ▶ Escutar Documento
        </button>
      )}

      {playing && (
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={pause}
            className="px-6 py-3 bg-yellow-500 text-black rounded-xl"
          >
            ⏸ Pausar
          </button>

          <button
            onClick={resume}
            className="px-6 py-3 bg-green-500 text-black rounded-xl"
          >
            ▶ Retomar
          </button>

          <button
            onClick={stop}
            className="px-6 py-3 bg-red-600 text-white rounded-xl"
          >
            ⏹ Parar
          </button>
        </div>
      )}

      {playing && (
        <div className="w-full bg-gray-800 rounded-full h-3 mt-6">
          <div
            className="bg-[#D4AF37] h-3 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </div>
  );
}