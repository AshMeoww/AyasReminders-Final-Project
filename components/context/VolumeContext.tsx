"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
  useRef,
} from "react";
import { usePathname } from "next/navigation";

type VolumeContextType = {
  masterVolume: number;
  setMasterVolume: (v: number) => void;
  musicVolume: number;
  setMusicVolume: (v: number) => void;
  sfxVolume: number;
  setSfxVolume: (v: number) => void;
  playSfx1: () => void;
  playSfx2: () => void;
  playSfx3: () => void;
  playMusic: () => void;
  stopMusic: () => void;
  playTypingSfx: () => void;
  stopTypingSfx: () => void;
  setMusicSrc: (src: string) => void;
};

const VolumeContext = createContext<VolumeContextType | undefined>(undefined);

export function useVolume() {
  const context = useContext(VolumeContext);
  if (!context) {
    throw new Error("useVolume must be used within VolumeProvider");
  }
  return context;
}

export function VolumeProvider({ children }: { children: ReactNode }) {
  const [masterVolume, setMasterVolume] = useState(1);
  const [musicVolume, setMusicVolume] = useState(1);
  const [sfxVolume, setSfxVolume] = useState(1);

  const [musicSrc, setMusicSrc] = useState("/music/home.mp3");

  const musicRef = useRef<HTMLAudioElement>(null);
  const sfxRef1 = useRef<HTMLAudioElement>(null);
  const sfxRef2 = useRef<HTMLAudioElement>(null);
  const sfxRef3 = useRef<HTMLAudioElement>(null);
  const typingRef = useRef<HTMLAudioElement>(null);
  const pathname = usePathname();

  // Auto play or pause music based on route and musicSrc changes
  useEffect(() => {
    if (!musicRef.current) return;
  
    const inStory = pathname?.startsWith("/pages/story");
  
    // Only update src if it has changed
    if (musicRef.current.src !== window.location.origin + musicSrc) {
      musicRef.current.src = musicSrc;
      musicRef.current.load();
    }
  
    musicRef.current.volume = masterVolume * musicVolume;
  
    if (inStory) {
      // Only play if not already playing
      if (musicRef.current.paused) {
        musicRef.current.play().catch(() => {});
      }
    } else {
      musicRef.current.pause();
      musicRef.current.currentTime = 0;
    }
  }, [pathname, masterVolume, musicVolume, musicSrc]);

  // Functions to play music and sfx
  function playMusic() {
    if (musicRef.current && musicRef.current.paused) {
      musicRef.current.play();
    }
  }

  function stopMusic() {
    if (musicRef.current) {
      musicRef.current.pause();
      musicRef.current.currentTime = 0;
    }
  }

  function playSfx1() {
    if (sfxRef1.current) {
      sfxRef1.current.volume = masterVolume * sfxVolume;
      sfxRef1.current.currentTime = 0;
      sfxRef1.current.play();
    }
  }

  function playSfx2() {
    if (sfxRef2.current) {
      sfxRef2.current.volume = masterVolume * sfxVolume;
      sfxRef2.current.currentTime = 0;
      sfxRef2.current.play();
    }
  }

  function playSfx3() {
    if (sfxRef3.current) {
      sfxRef3.current.volume = masterVolume * sfxVolume;
      sfxRef3.current.currentTime = 0;
      sfxRef3.current.play();
    }
  }

  function playTypingSfx() {
    if (typingRef.current) {
      typingRef.current.volume = masterVolume * sfxVolume;
      typingRef.current.loop = true;
      typingRef.current.currentTime = 0;
      typingRef.current.play().catch(() => {});
    }
  }

  function stopTypingSfx() {
    if (typingRef.current) {
      typingRef.current.pause();
      typingRef.current.currentTime = 0;
    }
  }

  return (
    <VolumeContext.Provider
      value={{
        masterVolume,
        setMasterVolume,
        musicVolume,
        setMusicVolume,
        sfxVolume,
        setSfxVolume,
        playMusic,
        playSfx1,
        playSfx2,
        playSfx3,
        stopMusic,
        playTypingSfx,
        stopTypingSfx,
        setMusicSrc,  // <-- expose setter here
      }}
    >
      {/* Global audio players, hidden */}
      <audio ref={musicRef} src={musicSrc} loop />
      <audio ref={sfxRef1} src="/sfx/sfx1.mp3" />
      <audio ref={sfxRef2} src="/sfx/sfx2.mp3" />
      <audio ref={sfxRef3} src="/sfx/home.mp3" />
      <audio ref={typingRef} src="/sfx/typing.mp3" />

      {children}
    </VolumeContext.Provider>
  );
}