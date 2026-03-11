// src/components/AskAIAudioEngine.tsx
"use client";

import { useState, useRef } from "react";
import { useSearchParams } from "next/navigation";

export default function AskAIAudioEngine() {

  const searchParams = useSearchParams();
  const value = searchParams.get("param");

  const [text, setText] = useState("");
  const [response, setResponse] = useState("");
  const [recording, setRecording] = useState(false);

  const recognitionRef = useRef<any>(null);

  // 🎤 START RECORDING
  const startRecording = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Speech Recognition not supported in this browser.");
      return;
    }

    const recognition = new (window as any).webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setText(transcript);
    };

    recognition.start();
    recognitionRef.current = recognition;
    setRecording(true);
  };

  const stopRecording = () => {
    recognitionRef.current?.stop();
    setRecording(false);
  };

  // 🧠 ASK AI
  const askAI = async () => {
    if (!text) return;

    const res = await fetch("/api/ask-ai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question: text }),
    });

    const data = await res.json();
    setResponse(data.answer);

    speak(data.answer);
  };

  // 🔊 TEXT TO SPEECH
  const speak = (message: string) => {
    const utterance = new SpeechSynthesisUtterance(message);
    utterance.lang = "en-US";
    speechSynthesis.speak(utterance);
  };

  return (
    <div className="mt-10 w-full max-w-xl mx-auto bg-[#111] border border-[#D4AF37]/30 p-6 rounded-2xl shadow-lg space-y-4">

      <h3 className="text-[#D4AF37] font-semibold text-lg text-center">
        🎙 E-Coin AI Voice Research Engine
      </h3>

      {/* Mostrar valor do search param */}
    {value && (
      <div className="text-gray-300 text-sm mb-2 text-center">
        Param recebido: {value}
      </div>
    )}


      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Ask something about E-Coin..."
        className="w-full px-4 py-3 rounded-xl bg-black text-white border border-gray-700"
      />

      <div className="flex gap-3 justify-center">

        <button
          onClick={recording ? stopRecording : startRecording}
          className={`px-4 py-2 rounded-xl font-semibold ${
            recording
              ? "bg-red-600 text-white"
              : "bg-[#D4AF37] text-black"
          }`}
        >
          {recording ? "Stop 🎤" : "Record 🎤"}
        </button>

        <button
          onClick={askAI}
          className="px-4 py-2 rounded-xl bg-black text-white border border-[#D4AF37]"
        >
          Ask AI ✨
        </button>

      </div>

      {response && (
        <div className="bg-black border border-gray-700 p-4 rounded-xl text-gray-300 text-sm">
          {response}
        </div>
      )}
    </div>
  );
}