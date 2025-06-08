"use client";
import { useState } from "react";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";

function AyaDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center justify-center bg-white w-screen h-screen overflow-hidden">
      <div className="flex items-center rounded-lg p-8 w-4/5 bg-white">
        <div className="flex-1">
          <button
            onClick={toggleDropdown}
            className="flex items-center text-black font-bold text-left text-5xl p-0 mb-4 focus:outline-none font-geologica"
          >
            {/* Display text */}
            {isOpen ? (
              <>
                Meet&nbsp;
                <span className="font-pixelify text-[#1AB261]">Aya</span>
              </>
            ) : (
              <>
                Meet&nbsp;
                <span className="font-pixelify text-[#1AB261]">Aya</span>
              </>
            )}
            <IoIosArrowDown
              className={`ml-2 transform transition-transform ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </button>
          {!isOpen && (
            <p className="text-gray-600 leading-relaxed font-light mb-4">
              A girl whose days begin with a note—and whose choices echo louder
              than words.
            </p>
          )}
          {isOpen && (
            <div className="text-gray-800 leading-relaxed font-extralight font-figtree text-left">
              Aya is a quiet, introspective 15-year-old who lives in a small,
              sunlit home with her mother. She isn’t one to speak much—not
              because she doesn’t have anything to say, but because she’s always
              been more comfortable listening. Growing up with a mother who is
              mute, Aya learned early on that communication doesn’t always come
              in words. Her mother leaves her sticky notes every morning—gentle
              reminders, thoughtful advice, or simple encouragements—that help
              Aya get through each day. <br />
              <br /> Though shy and reserved, Aya has a curious heart. She
              notices the little things: how water runs too long, how lights
              stay on in empty rooms, how waste piles up when no one’s looking.
              Through small choices and quiet reflections, she begins to
              understand how caring for the world is deeply connected to caring
              for others—and for herself. Her story is one of gentle change,
              subtle realizations, and the quiet kind of love that lingers, even
              in silence.
            </div>
          )}
        </div>
        <div className="ml-8 flex-shrink-0">
          <Image
            src="/images/aya.png"
            alt="Aya"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default AyaDropdown;
