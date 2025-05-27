'use client';

import Image from "next/image";
import Link from "next/link";

export default function GameHome() {
  return (
    <div className="min-h-screen bg-white relative flex flex-col items-center justify-center px-6 py-8 sm:px-12">
    <div className="absolute top-4 left-4 sm:top-12 sm:left-12">
        <h1 className="text-xl sm:text-3xl font-bold text-gray-900 select-none font-pixelify">
            Aya's Reminder
        </h1>
    </div>


      {/* Centered Start/Option Links */}
      <div className="text-center mt-32 sm:mt-48 space-y-6">
        <Link
          href="/story/page1"
          className="text-3xl sm:text-4xl text-green-600 hover:underline font-semibold transition duration-200"
        >
          Start
        </Link>
        <br />
        <Link
          href="/pages/options"
          className="text-2xl sm:text-3xl text-gray-700 hover:underline font-medium transition duration-200"
        >
          Options
        </Link>
      </div>
    </div>
  );
}
