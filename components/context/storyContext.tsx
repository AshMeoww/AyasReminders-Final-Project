'use client';
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type StoryProgressContextType = {
  dialogueIndex: number;
  setDialogueIndex: (index: number) => void;
  resetDialogue: () => void;
  day: number;
  setDay: (day: number) => void;
  background: string;
  setBackground: (bg: string) => void;
  resetIndex: () => void;
};

const StoryProgressContext = createContext<StoryProgressContextType | undefined>(undefined);

export function useStoryProgress() {
  const context = useContext(StoryProgressContext);
  if (!context) throw new Error("useStoryProgress must be used within StoryProgressProvider");
  return context;
}

export function StoryProgressProvider({ children }: { children: ReactNode }) {
  const [dialogueIndex, setDialogueIndexState] = useState(0);
  const [day, setDayState] = useState(1);
  const [background, setBackgroundState] = useState("");

  useEffect(() => {
    const storedDialogueIndex = localStorage.getItem("dialogueIndex");
    if (storedDialogueIndex) setDialogueIndexState(Number(storedDialogueIndex));

    const storedDay = localStorage.getItem("day");
    if (storedDay) setDayState(Number(storedDay));

    const storedBackground = localStorage.getItem("background");
    if (storedBackground) setBackgroundState(storedBackground);
  }, []);

  useEffect(() => {
    localStorage.setItem("dialogueIndex", dialogueIndex.toString());
  }, [dialogueIndex]);

  useEffect(() => {
    localStorage.setItem("day", day.toString());
  }, [day]);

  useEffect(() => {
    if (background) {
      localStorage.setItem("background", background);
    }
  }, [background]);

  const setDialogueIndex = (index: number) => {
    setDialogueIndexState(index);
  };

  const setDay = (newDay: number) => {
    setDayState(newDay);
  };

  const setBackground = (bg: string) => {
    setBackgroundState(bg);
  };

  const resetDialogue = () => {
    setDialogueIndexState(0);
    setDayState(1);
    setBackgroundState("");
  };

  const resetIndex = () => {
    setDialogueIndexState(0);
  };

  return (
    <StoryProgressContext.Provider
      value={{
        dialogueIndex,
        setDialogueIndex,
        resetDialogue,
        day,
        setDay,
        background,
        setBackground,
        resetIndex
      }}
    >
      {children}
    </StoryProgressContext.Provider>
  );
}
