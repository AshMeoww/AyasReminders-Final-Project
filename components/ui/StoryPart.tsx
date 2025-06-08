"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useVolume } from "@/components/context/VolumeContext";
import { useEco } from "@/components/context/ecoPointContext";
import { useStoryProgress } from "@/components/context/storyContext";
import { useStoryFlags } from "@/components/context/storyFlags";
import secondaryBg from "@/public/images/GameBG-colored.png";


type Dialogue = {
  character?: string;
  name?: string;
  text: string;
  background?: string;
  music?: string;
  condition?: (flags: { [key: string]: any }) => boolean;
  choices?: {
    text: string;
    nextIndex: number;
    ecoPoints?: number
    setState?: { [key: string]: any };
  }[];
  nextIndex?: number;
};

type StoryPartProps = {
  background: string;
  dialogues: Dialogue[];
  onEndRedirect?: string;
};


export default function StoryPart({ background: backgroundProp, dialogues, onEndRedirect }: StoryPartProps) {
  const { playSfx1, playSfx2, playTypingSfx, stopTypingSfx, setMusicSrc,  } = useVolume();
  const { ecoPoints, addEcoPoints } = useEco();
  const router = useRouter();
  const [jumpToIndex, setJumpToIndex] = useState<number | null>(null);
  const { dialogueIndex, setDialogueIndex, day, setDay, resetDialogue, background, setBackground, resetIndex } = useStoryProgress();  const [displayedLength, setDisplayedLength] = useState(0);
  const cancelTypingRef = useRef(false);
  const [dialogueHistory, setDialogueHistory] = useState<Dialogue[]>([]);
  const [showHistory, setShowHistory] = useState(false);
  const currentDialogue = dialogues[dialogueIndex];
  const { flags, setFlag } = useStoryFlags();
  const [currentBackground, setCurrentBackground] = useState(background || backgroundProp);
  const [fade, setFade] = useState(true);
  const [bg, setBg] = useState(currentBackground);
  const [currentIndex, setCurrentIndex] = useState(0);


  // Utility: Get next valid dialogue index based on condition
const getNextValidDialogueIndex = (
  startIndex: number,
  dialogues: Dialogue[],
  flags: any
): number => {
  for (let i = startIndex; i < dialogues.length; i++) {
    const d = dialogues[i];
    if (!d.condition || d.condition(flags)) return i;
  }
  return -1; // fallback if nothing matches
};

useEffect(() => {
  setFade(false);
  const timeout = setTimeout(() => {
    setBg(currentBackground); // change image source
    setFade(true);
  }, 400); // match transition duration

  return () => clearTimeout(timeout);
}, [currentBackground]);

useEffect(() => {
  if (currentDialogue?.music) {
    setMusicSrc(currentDialogue.music);
  }
}, [currentDialogue?.music, setMusicSrc]);

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
        if (!stopped) stopTypingSfx();
        return;
      }
      setDisplayedLength(i);
      await new Promise((r) => setTimeout(r, 25));
    }
    if (!stopped) stopTypingSfx();
  };

  type();

  return () => {
    cancelTypingRef.current = true;
    if (!stopped) stopTypingSfx();
  };
}, [currentDialogue]);

// Keyboard interaction
useEffect(() => {
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.code === "Space") {
      e.preventDefault(); // prevent scrolling
      if (displayedLength < currentDialogue.text.length) {
        cancelTypingRef.current = true;
      } else if (!currentDialogue.choices?.length) {
        handleClick();
      }
    }
  };

  window.addEventListener("keydown", handleKeyDown);
  return () => window.removeEventListener("keydown", handleKeyDown);
}, [displayedLength, currentDialogue]);

// Handle dialogue navigation
useEffect(() => {
  const validIndex = getNextValidDialogueIndex(dialogueIndex, dialogues, flags);
  if (validIndex !== dialogueIndex && validIndex !== -1) {
    setDialogueIndex(validIndex);
  }
}, [dialogueIndex, dialogues, flags]);

// Track dialogue history
useEffect(() => {
  if (dialogueIndex > 0) {
    setDialogueHistory((prev) => [...prev, dialogues[dialogueIndex]]);
  }
}, [dialogueIndex]);

// Handle background changes
useEffect(() => {
  const nextDialogue = dialogues[dialogueIndex];
  if (nextDialogue?.background) {
    setCurrentBackground(nextDialogue.background);
    setBackground(nextDialogue.background);
  }
}, [dialogueIndex, dialogues, setBackground]);

useEffect(() => {
  if (background && background !== currentBackground) {
    setCurrentBackground(background);
  }
}, [background]);

// Handle clicking to progress dialogue
const handleClick = () => {
  if (displayedLength < currentDialogue.text.length) {
    cancelTypingRef.current = true;
  } else if (currentDialogue.choices?.length) {
    return;
  } else if (currentDialogue.nextIndex !== undefined) {
    setDialogueIndex(currentDialogue.nextIndex);
  } else {
    if (onEndRedirect) {
      setDay(day + 1);
      router.push(onEndRedirect);
      resetIndex();
    }
  }
};

// Handle user choice selection
const handleChoiceClick = (
  nextIndex: number,
  ecoPoints?: number,
  setState?: { [key: string]: any }
) => {
  playSfx1();

  if (ecoPoints) addEcoPoints(ecoPoints);
  if (setState) {
    Object.entries(setState).forEach(([key, value]) => {
      setFlag(key, value);
    });
  }

  const validNextIndex = getNextValidDialogueIndex(nextIndex, dialogues, flags);
  if (validNextIndex !== -1) {
    setDialogueIndex(validNextIndex);
  } else {
    console.log("No valid dialogue to proceed to after choice.");
  }
};
  return (
    <div
      className="min-h-screen bg-white flex flex-col items-center justify-center relative p-8"
      onClick={handleClick}
    >
      {/* Reset Button */}
      <button
        className="absolute top-20 right-0 z-10 bg-white border-2 hover:bg-red-200 text-sm text-red-700 px-2 py-1"
        onClick={(e) => {
          e.stopPropagation();
          resetDialogue();
          playSfx1();
        }}
        onMouseEnter={() => playSfx2()}
      >
        Reset
      </button>
      {/* Settings and History */}
      <div className="fixed top-4 right-38 z-20 flex flex-col gap-8">

        {/* Settings Icon */}
        <div
          className="cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            playSfx1();
            router.push("/pages/story/setting");
          }}
          onMouseEnter={() => {
            playSfx2();
          }}
        >

          <Image
            src="/images/setting.png"
            alt="Settings"
            width={38}
            height={38}
            className="object-contain hover:brightness-125 transition md:w-8 md:h-8"
          />
        </div>
        {/* History Icon */}
        <div
          className="cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            playSfx1();
            setShowHistory(!showHistory);
          }}
          onMouseEnter={() => {
            playSfx2();
          }}
        >
          <Image
            src="/images/history.png"
            alt="History"
            width={38}
            height={38}
            className="object-contain hover:brightness-125 transition md:w-8 md:h-8"
          />
        </div>
      </div>
        {showHistory && (
        <div className="absolute top-0 right-68 w-[24vw] max-h-[50vh] bg-white border-3 border-black p-4 overflow-y-auto z-20">
          <ul className="text-sm space-y-2">
            {dialogueHistory.map((d, i) => (
              <li key={i}>
                <span className="font-bold text-black font-schoolbell">{d.name}</span>
                <span className="font-medium text-black font-schoolbell">: {d.text}</span> 
              </li>
            ))}
          </ul>
          <button
            className="mt-4 bg-black text-white px-2 py-1 text-xs"
            onClick={(e) => {
              e.stopPropagation();
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
      <div className="fixed top-0 left-0 w-full h-screen bg-gray-400 z-0">
      <div className="absolute top-0 left-0 w-full h-full z-[-1]">
        <Image
          src={secondaryBg}
          alt="Secondary Background"
          fill
          className="object-cover"
        />
      </div>
        <div className="relative w-[80vw] h-full mx-auto">
          {/* Image with fade */}
          <div
            className={`fade-transition relative w-full h-full ${fade ? "opacity-100" : "opacity-0"}`}
          >
            <Image
              src={bg}
              alt="Background"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div
            className={`absolute top-0 left-0 w-full h-full bg-white pointer-events-none transition-opacity duration-300 ${
              fade ? "opacity-0" : "opacity-100"
            }`}
          />
        </div>
      </div>


      {/* Dialogue Box */}
      <div className="fixed bottom-8 left-0 right-0 w-full max-w-4xl h-40 bg-white border-4 border-black p-4 mx-auto">
        {/* Name Box */}
        {currentDialogue.name && (
          <div className="text-gray-900 absolute -top-13 left-42 bg-white border-4 border-black w-30 h-10 text-base font-bold flex items-center justify-center font-schoolbell">
            {currentDialogue.name}
          </div>
        )}

        {/* Character Image */}
        {currentDialogue.character && (
          <div className="absolute -top-40 left-0 bg-white border-4 border-black w-40 h-37 flex items-center justify-center overflow-hidden">
            <Image
              src={currentDialogue.character}
              alt="Character"
              width={160}
              height={160}
              className="object-cover h-full  w-auto"
            />
          </div>
        )}

        {/* Dialogue Text */}
        <p className="text-gray-900 text-lg leading-relaxed overflow-auto font-schoolbell select-none">
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
              className="bg-white text-black py-3 px-5 hover:border-yellow-400 border-4 border-black w-full text-left"
              onClick={(e) => {
                e.stopPropagation();
                handleChoiceClick(choice.nextIndex, choice.ecoPoints, choice.setState);
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
