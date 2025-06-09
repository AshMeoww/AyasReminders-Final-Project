"use client";
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes

function AyaReminders() {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handlePlayGame = () => {
        router.push("/play");
    };

<<<<<<< Updated upstream
    return (
        <div className="flex items-center justify-center bg-white w-screen h-screen overflow-hidden">
            <div className="flex items-center rounded-lg p-8 w-4/5 bg-white">
                <div className="flex-1">
                    <div className="text-black font-bold text-left text-8xl font-geologica">
                        {/* Display text */}
                        <span className="font-pixelify text-[#1AB261]">aya's</span>
                        <br />
                        <span className="font-pixelify mt-4">reminders</span>
                    </div>
                    <p className="text-gray-600 leading-relaxed mt-4 font-bold text-lef font-figtree">
                        Aya’s Reminders is a story-driven game where every choice shapes the
                        world around you.
                    </p>
                    <button
                        onClick={toggleDropdown}
                        className="mt-4 text-black focus:outline-none transform transition-transform"
                    >
                        <span
                            className={`text-4xl inline-block transform transition-transform duration-300 ${
                                isOpen ? "rotate-180" : "rotate-0"
                            }`}
                        >
                            ▲
                        </span>
                    </button>
                    {isOpen && (
                        <div className="text-gray-800 leading-relaxed font-extralight font-figtree text-left mt-4">
                            Guided by gentle notes left by her mother, Aya navigates everyday
                            situations that reveal the impact of our environmental decisions.
                            Through her journey, players are reminded not only of eco-friendly
                            habits, but of the quiet power in listening to those who care for
                            us—and the world we share.
                        </div>
                    )}
                    <button
                        onClick={handlePlayGame}
                        className="mt-6 px-6 py-3 bg-[#1AB261] text-white font-bold rounded-r-3xl shadow-md hover:bg-green-600 transition-colors"
                    >
                        Play Game
                    </button>
                </div>
                <div className="ml-8 flex-shrink-0">
                    <Image
                        src="/images/aya.png"
                        alt="Aya"
                        width={600}
                        height={600}
                        className="rounded-lg"
                    />
                </div>
=======
  return (
    <div className="flex items-center justify-center bg-white w-screen h-screen overflow-hidden">
      <div className="flex items-center rounded-lg p-8 w-4/5 bg-white">
        <div className="flex-1">
          <div className="text-black font-bold text-left text-8xl font-geologica">
            {/* Display text */}
            <span className="font-pixelify text-[#1AB261]">aya's</span>
            <br />
            <span className="font-pixelify mt-4">reminders</span>
          </div>
          <p className="text-gray-600 leading-relaxed mt-4 font-bold text-lef font-figtree">
            Aya’s Reminders is a story-driven game where every choice shapes the
            world around you.
          </p>
          <div className="flex items-center mt-6">
            <button
              onClick={toggleDropdown}
              className="mr-4 text-black focus:outline-none transform transition-transform"
            >
            </button>
            <button
              onClick={handlePlayGame}
              className="px-6 py-3 bg-[#1AB261] text-white font-bold rounded-r-3xl shadow-md hover:bg-green-600 transition-colors"
            >
              Play Game
            </button>
          </div>
          {isOpen && (
            <div className="text-gray-800 leading-relaxed font-extralight font-figtree text-left mt-4">
              Guided by gentle notes left by her mother, Aya navigates everyday
              situations that reveal the impact of our environmental decisions.
              Through her journey, players are reminded not only of eco-friendly
              habits, but of the quiet power in listening to those who care for
              us—and the world we share.
>>>>>>> Stashed changes
            </div>
        </div>
    );
}

export default AyaReminders;
