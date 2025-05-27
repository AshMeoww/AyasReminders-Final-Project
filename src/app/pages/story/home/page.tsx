'use client';

import Link from "next/link";

export default function GameHome() {
  return (
    <div className="min-h-screen bg-white relative flex flex-col items-center justify-center px-6 py-8 sm:px-12">
      <div className="absolute top-9 left-4 sm:top-41 sm:left-50 flex flex-col items-start">
        <h1 className="text-xl sm:text-6xl font-bold select-none font-pixelify">
          <span className="text-green-700 leading-tight block">aya's</span>
          <span className="text-gray-900 leading-tight block mt-1">reminders</span>
        </h1>

        <div className="mt-8 flex flex-row space-x-32">
          <Link
            href="/pages/story/page1"
            className="text-xl sm:text-xl text-green-600 font-meduim font-schoolbell relative group flex items-center"
          > Start
          <span
          className="ml-4 w-0 h-0 
          border-t-[8px] border-t-transparent 
          border-b-[8px] border-b-transparent 
          border-r-[12px] border-r-green-600 
          opacity-0 group-hover:opacity-100 
          transition-opacity duration-300"
          />
          </Link>
          <Link
            href="/pages/story/setting"
            className="text-xl sm:text-xl text-gray-700 font-medium font-schoolbell relative group flex items-center"
          >Setting
          <span
          className="ml-4 w-0 h-0 
          border-t-[8px] border-t-transparent 
          border-b-[8px] border-b-transparent 
          border-r-[12px] border-r-green-600 
          opacity-0 group-hover:opacity-100 
          transition-opacity duration-300"
          />
          </Link>
        </div>
      </div>
    </div>
  );
}
