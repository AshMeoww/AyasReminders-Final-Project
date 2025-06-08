'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useStoryProgress } from "@/components/context/storyContext";
import { useVolume } from "@/components/context/VolumeContext";
import { useEffect, useState } from 'react';

export default function GameHome() {
  const router = useRouter();
  const { day,resetDialogue } = useStoryProgress();
  const {
    playSfx1, playSfx2, playMusic, setMusicSrc, playSfx3
    } = useVolume();
    const [showResetConfirm, setShowResetConfirm] = useState(false);
    const [showExitConfirm, setShowExitConfirm] = useState(false);
    
    useEffect(() => {
      setMusicSrc("/music/bgm/opening.mp3");
      playMusic();
    }, []);

  const handleReset = () => {
    playSfx1();
    resetDialogue();
    setShowResetConfirm(false);
    router.push(`/pages/story/day${day}`);
  };

  
  return (
    <div className="min-h-screen bg-white relative flex flex-col items-center justify-center px-6 py-8 sm:px-12">

      <div className="absolute top-0 right-0 h-[90vh] w-auto overflow-hidden z-0">
        <Image
          src="/images/aya.png"
          alt="Aya Character"
          width={800}
          height={100}
          className="object-cover h-full"
        />
      </div>

      <div className="absolute top-9 left-4 sm:top-41 sm:left-50 flex flex-col items-start">
        <h1 className="text-xl sm:text-6xl font-bold select-none font-pixelify">
          <span className="text-green-700 leading-tight block">aya's</span>
          <span className="text-gray-900 leading-tight block mt-1">reminders</span>
        </h1>

        <div className="mt-8 flex flex-col space-y-5">
          <button
            onClick={() => {
              playSfx3(); 
              setTimeout(() => {
                router.push(`/pages/story/day${day}`);
              }, 1000); 
            }}
            className="text-xl sm:text-xl text-green-600 font-medium font-schoolbell relative group flex items-center"
          >
            Start
            <span
              className="ml-4 w-0 h-0
              border-t-[8px] border-t-transparent
              border-b-[8px] border-b-transparent
              border-r-[12px] border-r-green-600
              opacity-0 group-hover:opacity-100
              transition-opacity duration-300"
            />
          </button>

          <button
        onClick={(e) => {
          e.stopPropagation();
          setShowResetConfirm(true);
          playSfx1();
        }}
        className="text-xl sm:text-xl text-gray-700 font-medium font-schoolbell relative group flex items-center"
      >
        New game
        <span
          className="ml-4 w-0 h-0
          border-t-[8px] border-t-transparent
          border-b-[8px] border-b-transparent
          border-r-[12px] border-r-green-600
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300"
        />
      </button>

      {showResetConfirm && (
  <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
    <h2 className="text-3xl font-normal font-schoolbell mb-11 text-center text-gray-900  mt-[-190px]" >Are you sure you want to start a new life?</h2>
    <div className="flex gap-8">
      <button
        onClick={handleReset}
        className="text-red-600 px-5 py-2 text-2xl font-medium font-schoolbell"
      >
        Yes
      </button>
      <button
        onClick={() => setShowResetConfirm(false)}
        className="text-green-500 px-5 py-2 text-2xl font-medium font-schoolbell"
      >
        No
      </button>
    </div>
    <img
      src="/images/sproutie.png"
      alt="Mascot or Decoration"
      className="absolute -bottom-25 left-1/2 transform -translate-x-1/2 w-100 h-auto"
    />
  </div>
)}



          <button
            onClick={() => router.push("/pages/story/setting")}
            className="text-xl sm:text-xl text-gray-700 font-medium font-schoolbell relative group flex items-center"
          >
            Setting
            <span
              className="ml-4 w-0 h-0
              border-t-[8px] border-t-transparent
              border-b-[8px] border-b-transparent
              border-r-[12px] border-r-green-600
              opacity-0 group-hover:opacity-100
              transition-opacity duration-300"
            />
          </button>

          <button
            onClick={() => {

              setShowExitConfirm(true);
              playSfx1();
            }}
            className="text-xl sm:text-xl text-gray-700 font-medium font-schoolbell relative group flex items-center"
          >
            Exit
            <span
              className="ml-4 w-0 h-0
              border-t-[8px] border-t-transparent
              border-b-[8px] border-b-transparent
              border-r-[12px] border-r-green-600
              opacity-0 group-hover:opacity-100
              transition-opacity duration-300"
            />
          </button>


          {showExitConfirm && (
  <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
    <h2 className="text-3xl font-normal font-schoolbell mb-11 text-center text-gray-900  mt-[-190px]" >Are you sure you want to exit Berdeston?</h2>
    <div className="flex gap-8">
      <button
        onClick={() => router.push(`/pages/get-started/Ecocard`)}
        className="text-red-600 px-5 py-2 text-2xl font-medium font-schoolbell"
      >
        Yes
      </button>
      <button
        onClick={() => setShowExitConfirm(false)}
        className="text-green-500 px-5 py-2 text-2xl font-medium font-schoolbell"
      >
        No
      </button>
    </div>
    <img
      src="/images/sproutie_water.png"
      alt="Mascot or Decoration"
      className="absolute -bottom-25 left-1/2 transform -translate-x-1/2 w-100 h-auto"
    />
  </div>
)}
        </div>
      </div>
    </div>
  );
}
