"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Settings } from "lucide-react";
import { useVolume } from "@/components/context/VolumeContext";
import { useEco } from "@/components/context/ecoPointContext";

type Dialogue = {
  character?: string;
  name?: string;
  text: string;
  background?: string;
  choices?: {
    text: string;
    nextIndex: number;
    ecoPoints?: number
  }[];
  nextIndex?: number;
};

type StoryPartProps = {
  background: string;
  dialogues: Dialogue[];
  onEndRedirect?: string;
};

export default function StoryPart({ background, dialogues, onEndRedirect }: StoryPartProps) {
  const { playSfx1, playSfx2, playTypingSfx, stopTypingSfx,  } = useVolume();
  const { ecoPoints, addEcoPoints } = useEco();
  const router = useRouter();
  const [jumpToIndex, setJumpToIndex] = useState<number | null>(null);
  const [dialogueIndex, setDialogueIndex] = useState(0);
  const [displayedLength, setDisplayedLength] = useState(0);
  const cancelTypingRef = useRef(false);
  const [dialogueHistory, setDialogueHistory] = useState<Dialogue[]>([]);
  const [showHistory, setShowHistory] = useState(false);
  const [currentBackground, setCurrentBackground] = useState(background);
  const currentDialogue = dialogues[dialogueIndex];

  // Typing effect
  useEffect(() => {
    cancelTypingRef.current = false;
    setDisplayedLength(0);
    playTypingSfx();
  
    let stopped = false;
  
    const type = async () => {
      for (let i = 1; i <= currentDialogue.text.length; i++) {
        if (cancelTypingRef.current) {
          setDisplayedLength(currentDialogue.text.length);
          if (!stopped) {
            stopTypingSfx();
            stopped = true;
          }
          return;
        }
        setDisplayedLength(i);
        await new Promise((r) => setTimeout(r, 25));
      }
      if (!stopped) {
        stopTypingSfx();
        stopped = true;
      }
    };
  
    type();
  
    return () => {
      cancelTypingRef.current = true;
      if (!stopped) {
        stopTypingSfx();
        stopped = true;
      }
    };
  }, [currentDialogue]);
  
  useEffect(() => {
    if (dialogueIndex > 0) {
      setDialogueHistory((prev) => [...prev, dialogues[dialogueIndex]]);
    }
  }, [dialogueIndex]);
  
  const handleClick = () => {
    if (displayedLength < currentDialogue.text.length) {
      cancelTypingRef.current = true;
    } else if (currentDialogue.choices && currentDialogue.choices.length > 0) {
      return;
    } else if (currentDialogue.nextIndex !== undefined) {
      setDialogueIndex(currentDialogue.nextIndex);
    } else {
      console.log("End of dialogue");
      if (onEndRedirect) {
        router.push(onEndRedirect);
      }
    }
  };
  
  
const handleChoiceClick = (nextIndex: number, ecoPoints?: number) => {
  playSfx1();
  setDialogueIndex(nextIndex);
  if (ecoPoints) addEcoPoints(ecoPoints);
  setDialogueIndex(nextIndex);
};

useEffect(() => {
  const nextDialogue = dialogues[dialogueIndex];
  if (nextDialogue?.background) {
    setCurrentBackground(nextDialogue.background);
  }
}, [dialogueIndex]);

  
  return (
    <div
      className="min-h-screen bg-white flex flex-col items-center justify-center relative p-8"
      onClick={handleClick}
    >
      {/* Settings Icon */}
      <div
        className="absolute top-4 right-40 cursor-pointer z-10"
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

        <button
  className="absolute top-15 right-0 z-10 bg-white border-2 hover:bg-gray-200 flex items-center justify-center"
  onClick={(e) => {
    e.stopPropagation();
    setShowHistory(!showHistory);
    playSfx1();
  }}
  onMouseEnter={() => playSfx2()}
  aria-label="View Dialogue History"
>
  <Image
    src="/history.svg"
    alt="History"
    width={20}
    height={20}
    className="object-contain"
  />
</button>
      </div>
      {showHistory && (
  <div className="absolute top-0 right-80 w-[24vw] max-h-[50vh] bg-white border-3 border-black p-4 overflow-y-auto z-20">
    <ul className="text-sm space-y-2">
      {dialogueHistory.map((d, i) => (
        <li key={i}>
          <span className="font-bold text-black font-schoolbell">{d.name}</span>
          <br></br>
          <span className="font-medium text-black font-schoolbell">{d.text}</span> 
        </li>
      ))}
    </ul>
    <button
      className="mt-4 bg-black text-white px-2 py-1 text-xs"
      onClick={(e) => {
        playSfx1();
        setShowHistory(false)
      }}
      onMouseEnter={() => playSfx2()}
    >
      Close
    </button>
  </div>
)}

      {/* Background Image */}
      <div className="fixed top-0 h-screen w-[80vw] overflow-hidden ">
        <Image
          src={currentBackground}
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Dialogue Box */}
      <div className="fixed bottom-13 left-0 right-0 w-full max-w-3xl h-40 bg-white border-4 border-black p-4 mx-auto">
        {/* Name Box */}
        {currentDialogue.name && (
          <div className="text-gray-900 absolute -top-15 left-44 bg-white border-4 border-black w-30 h-10 text-sm font-bold flex items-center justify-center">
            {currentDialogue.name}
          </div>
        )}

        {/* Character Image */}
        {currentDialogue.character && (
          <div className="absolute -top-42 left-0 bg-white border-4 border-black w-40 h-37 flex items-center justify-center">
            <Image
              src={currentDialogue.character}
              alt="Character"
              width={150}
              height={150}
              className="object-contain"
            />
          </div>
        )}
        {/* Dialogue Text */}
        <p className="text-gray-900 text-lg leading-relaxed overflow-auto font-schoolbell">
          {currentDialogue.text.slice(0, displayedLength)}
        </p>
        {currentDialogue.choices && currentDialogue.choices.length > 0 && (
        <div
          className="absolute right-0 bottom-40 flex flex-col-reverse items-end space-y-reverse space-y-2 w-[19vw] max-w-sm"
          style={{
            opacity: displayedLength === currentDialogue.text.length ? 1 : 0,
            pointerEvents: displayedLength === currentDialogue.text.length ? "auto" : "none",
            transition: "opacity 0.3s ease",
          }}
        >
          {currentDialogue.choices.map((choice, index) => (
            <button
              key={index}
              className="bg-white text-black py-3 px-5 hover:bg-gray-600 border-4 border-black w-full text-left"
              onClick={(e) => {
                e.stopPropagation();
                handleChoiceClick(choice.nextIndex, choice.ecoPoints);
              }}
              onMouseEnter={() => playSfx2()}
              disabled={displayedLength !== currentDialogue.text.length}
            >
              {choice.text}
            </button>
          ))}
        </div>
      )}
      </div>    
    </div>
  );
}
