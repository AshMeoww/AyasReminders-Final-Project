"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useStoryProgress } from "@/components/context/storyContext";

export default function GameHome() {
  const router = useRouter();
  const { day } = useStoryProgress();

  return (
    <div className="min-h-screen bg-white relative flex flex-col items-center justify-center px-6 py-8 sm:px-12">

      <div className="absolute bottom-0 right-0 h-auto w-auto overflow-hidden z-0">
        <Image
          src="/images/aya-home.png"
          alt="Aya Character"
          width={800}
          height={100}
          className="object-cover"
        />
      </div>

      <div className="absolute top-9 left-4 sm:top-41 sm:left-50 flex flex-col items-start">
        <h1 className="text-xl sm:text-6xl font-bold select-none font-pixelify">
          <span className="text-green-700 leading-tight block">aya's</span>
          <span className="text-gray-900 leading-tight block mt-1">
            reminders
          </span>
        </h1>

        <div className="mt-8 flex flex-row space-x-32">
          <button
            onClick={() => router.push(`/pages/story/day${day}`)}
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
        </div>
      </div>
    </div>
  );
}
