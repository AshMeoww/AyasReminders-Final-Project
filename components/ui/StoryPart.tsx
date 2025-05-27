"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Settings } from "lucide-react";
import { useVolume } from "@/components/context/VolumeContext";

type StoryPartProps = {
  background: string;
  character: string;
  name: string;
  text: string;
};



export default function StoryPart({ background, character, name, text }: StoryPartProps) {
  const { masterVolume, musicVolume, playSfx1, playSfx2, } = useVolume();
  const router = useRouter();
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let isCancelled = false;

    const typeText = async () => {
      setDisplayedText(""); // reset before typing
      if (!text || typeof text !== "string") return;

      for (let i = 0; i < text.length; i++) {
        if (isCancelled) break;
        await new Promise((resolve) => setTimeout(resolve, 30));
        setDisplayedText((prev) => prev + text[i]);
      }
    };

    typeText();

    return () => {
      isCancelled = true;
    };
  }, [text]);
  
  
  
  


  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center relative p-8">
      

      {/* Settings Icon */}
      <div
        className="absolute top-4 right-4 cursor-pointer"
        onClick={() => {
          playSfx1()
          router.push("/pages/story/setting")
        }}
        onMouseEnter={() => {
          playSfx2()
        }}
      >
        <Settings className="w-6 h-6 text-gray-600 hover:text-black" />
      </div>

      {/* Story Image */}
      <Image
        src={background}
        alt="Background"
        width={300}
        height={300}
        className="object-contain"
      />

 
      {/* Dialogue box */}
      <div className="fixed bottom-13 left-0 right-0 w-full max-w-2xl h-40 bg-white border-3 border-black p-4 mx-auto">
  {/* Name box */}
  <div className=" text-gray-900 absolute -top-14 left-45 bg-white border-3 border-black  px-3 py-1 text-sm font-bold">
  {name}
  </div>

  {/* Image container */}
<div className="absolute -top-42  left-0 bg-white border-3 border-black w-40 h-37 flex items-center justify-center ">
  <Image
    src={character}
    alt="Character"
    width={150}
    height={150}
    className="object-contain"
  />
</div>


  {/* Dialogue text */}
  <p className="text-gray-900 text-lg leading-relaxed overflow-auto font-schoolbell">
    {displayedText}
  </p>
</div>

    </div>
  );
}
