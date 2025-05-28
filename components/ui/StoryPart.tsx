"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Settings } from "lucide-react";
import { useVolume } from "@/components/context/VolumeContext";

type Dialogue = {
  character: string;
  name: string;
  text: string;
  choices?: {
    text: string;
    nextIndex: number;
  }[];
};

type StoryPartProps = {
  background: string;
  dialogues: Dialogue[];
};

export default function StoryPart({ background, dialogues }: StoryPartProps) {
  const { playSfx1, playSfx2 } = useVolume();
  const router = useRouter();

  const [dialogueIndex, setDialogueIndex] = useState(0);
  const [displayedLength, setDisplayedLength] = useState(0);
  const cancelTypingRef = useRef(false);

  const currentDialogue = dialogues[dialogueIndex];

  // Typing effect: reveal text letter by letter
  useEffect(() => {
    cancelTypingRef.current = false;
    setDisplayedLength(0);

    const type = async () => {
      for (let i = 1; i <= currentDialogue.text.length; i++) {
        if (cancelTypingRef.current) {
          setDisplayedLength(currentDialogue.text.length);
          return;
        }
        setDisplayedLength(i);
        await new Promise((r) => setTimeout(r, 30));
      }
    };

    type();

    return () => {
      cancelTypingRef.current = true;
    };
  }, [currentDialogue]);

  // Handle clicking dialogue box
  const handleClick = () => {
    if (displayedLength < currentDialogue.text.length) {
      // Skip typing animation
      cancelTypingRef.current = true;
    } else if (currentDialogue.choices && currentDialogue.choices.length > 0) {
      // If choices exist, do nothing on dialogue click to avoid skipping
      return;
    } else if (dialogueIndex < dialogues.length - 1) {
      setDialogueIndex((prev) => prev + 1);
    } else {
      console.log("End of dialogue");
    }
  };

  // Handle choice selection
  const handleChoiceClick = (nextIndex: number) => {
    playSfx1();
    setDialogueIndex(nextIndex);
  };

  return (
    <div
      className="min-h-screen bg-white flex flex-col items-center justify-center relative p-8"
      onClick={handleClick}
    >
      {/* Settings Icon */}
      <div
        className="absolute top-4 right-4 cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          playSfx1();
          router.push("/pages/story/setting");
        }}
        onMouseEnter={() => {
          playSfx2();
        }}
      >
        <Settings className="w-6 h-6 text-gray-600 hover:text-black" />
      </div>

      {/* Background Image */}
      <Image
        src={background}
        alt="Background"
        width={1000}
        height={300}
        className="object-contain"
      />

      {/* Dialogue Box */}
      <div className="fixed bottom-13 left-0 right-0 w-full max-w-3xl h-40 bg-white border-4 border-black p-4 mx-auto">
        {/* Name Box */}
        <div className="text-gray-900 absolute -top-15 left-44 bg-white border-4 border-black w-30 h-10 text-sm font-bold flex items-center justify-center">
          {currentDialogue.name}
        </div>

        {/* Character Image */}
        <div className="absolute -top-42 left-0 bg-white border-4 border-black w-40 h-37 flex items-center justify-center">
          <Image
            src={currentDialogue.character}
            alt="Character"
            width={150}
            height={150}
            className="object-contain"
          />
        </div>

        {/* Dialogue Text */}
        <p className="text-gray-900 text-lg leading-relaxed overflow-auto font-schoolbell">
          {currentDialogue.text.slice(0, displayedLength)}
        </p>
        {currentDialogue.choices && currentDialogue.choices.length > 0 && (
        <div
        className="absolute flex flex-col space-y-5  -top-37 right-0 "
        style={{
          opacity: displayedLength === currentDialogue.text.length ? 1 : 0,
          pointerEvents: displayedLength === currentDialogue.text.length ? "auto" : "none",
          transition: "opacity 0.3s ease", // optional fade effect
        }}
        >
          {currentDialogue.choices.map((choice, index) => (
            <button
              key={index}
              className="bg-white text-black py-3 px-5  hover:bg-gray-600 border-4 border-black w-[14vw] max-w-sm text-left"
              onClick={(e) => {
                e.stopPropagation();
                handleChoiceClick(choice.nextIndex);
              }}
              disabled={displayedLength !== currentDialogue.text.length}
            >
              {choice.text}
            </button>
          ))}
        </div>
      )}
      </div>

      {/* Choices: shown after typing finishes */}
      
    </div>
  );
}
