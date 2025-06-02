"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import DialogueBox from "@/components/DialogueBox";
import { saveChoice, EcoChoice } from "@/utils/saveChoice";

export default function Day1() {
  const [showChoices, setShowChoices] = useState(false);
  const router = useRouter();

  const dialogues = [
    "  The sound of your alarm clock wakes you up.",
    "  It’s time to get ready for school.",
    "  You found a sticky note near your bed. It says:",
    `"  Good morning, Aya! I left early for work.`,
    " Love, Mom.",
    "  You stretch and stand. The AC is still running. Will you turn it off?",
  ];

  const handleChoice = (choice: EcoChoice) => {
    saveChoice(choice);
    router.push("/pages/story/Day2");
  };

  return (
    <main className="min-h-screen bg-bedroom bg-cover bg-center flex flex-col items-center justify-between px-4 py-6 font-pixel text-sm text-black relative">

      {/* Exit Button */}
      <div className="absolute top-4 left-4">
        <button
          onClick={() => router.push("/")}
          className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded border-4 border-black pixelated"
        >
          Exit Game
        </button>
      </div>

      {/* Progress bar */}
      <div className="w-full max-w-4xl text-xs text-center uppercase tracking-widest bg-white bg-opacity-80 py-2 border-4 border-black mb-2">
        Day 1 of 7
      </div>

      {/* Character Display */}
      {/* <div className="w-full max-w-4xl flex justify-center items-center h-[300px] mb-2">
        <img src="/characters/aya.png" alt="Aya" className="h-full object-contain pixelated" />
      </div> */}

      {/* Dialogue Box */}
      <div className="w-full max-w-4xl">
        <DialogueBox
          dialogues={dialogues}
          onEnd={() => setShowChoices(true)}
          showFinalLine={true}
        />
      </div>

      {/* Choices */}
      {showChoices && (
        <div className="w-full max-w-4xl flex flex-wrap justify-center gap-3 mt-4">
          <button
            onClick={() => handleChoice({ id: "turn-off-ac", water: 0, carbon: 10, waste: 0 })}
            className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded border-4 border-black pixelated"
          >
            Turn off the AC
          </button>
          <button
            onClick={() => handleChoice({ id: "leave-ac-on", water: 0, carbon: -5, waste: 0 })}
            className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded border-4 border-black pixelated"
          >
            Leave it on
          </button>
        </div>
      )}
    </main>
  );
}
