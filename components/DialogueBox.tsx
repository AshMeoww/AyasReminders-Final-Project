"use client";

import { useEffect, useState, useRef } from "react";

export default function DialogueBox({
  dialogues,
  onEnd,
  showFinalLine = true,
}: {
  dialogues: string[];
  onEnd: () => void;
  showFinalLine?: boolean;
}) {
  const [index, setIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!dialogues[index]) return;

    setDisplayedText("");
    setIsTyping(true);
    let charIndex = 0;
    const currentDialogue = dialogues[index];
    audioRef.current = new Audio("/click.wav");
    audioRef.current.volume = 0.05;

    intervalRef.current = setInterval(() => {
      if (charIndex < currentDialogue.length) {
        setDisplayedText((prev) => prev + currentDialogue.charAt(charIndex));
        audioRef.current?.play();
        charIndex++;
      } else {
        clearInterval(intervalRef.current!);
        setIsTyping(false);
        if (index === dialogues.length - 1 && onEnd) onEnd();
      }
    }, 30);

    return () => clearInterval(intervalRef.current!);
  }, [index]);

  const handleNext = () => {
    if (isTyping) {
      // Instantly complete the line
      clearInterval(intervalRef.current!);
      setDisplayedText(dialogues[index]);
      setIsTyping(false);
    } else if (index < dialogues.length - 1) {
      setIndex(index + 1);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div className="w-full p-4 bg-white bg-opacity-80 rounded-lg border-4 border-black shadow-md font-mono text-base relative">
      <p className="min-h-[80px] whitespace-pre-line">{displayedText}</p>

      <div className="mt-3 flex justify-between text-sm">
        <button
          onClick={handlePrev}
          disabled={index === 0}
          className={`underline ${index === 0 ? "text-gray-400" : "text-blue-600 hover:text-blue-800"}`}
        >
          ← Back
        </button>
        <button
          onClick={handleNext}
          className={`underline ${index === dialogues.length - 1 && !isTyping ? "text-gray-400" : "text-blue-600 hover:text-blue-800"}`}
        >
          {isTyping ? "Skip" : index === dialogues.length - 1 ? "Done" : "Next →"}
        </button>
      </div>
    </div>
  );
}
