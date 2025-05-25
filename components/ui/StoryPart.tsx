"use client";

import React from "react";
import Image from "next/image";
import { Settings } from "lucide-react"; 

type StoryPartProps = {
  imageSrc: string;
  imageAlt: string;
  text: string;
};

export default function StoryPart({ imageSrc, imageAlt, text }: StoryPartProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center relative p-8">
      {/* Settings Icon in the top-right corner */}
      <div className="absolute top-4 right-4 cursor-pointer">
        <Settings className="w-6 h-6 text-gray-600 hover:text-black" />
      </div>

      {/* Centered Image */}
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={300}
        height={300}
        className="object-contain"
      />

      {/* Story Text */}
      <p className="mt-6 max-w-xl text-center text-gray-800 text-lg">
        {text}
      </p>
    </div>
  );
}
