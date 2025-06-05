"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useStoryProgress } from "@/components/context/storyContext";


function EcoCard() {
  const router = useRouter(); 
  const { day } = useStoryProgress();
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start bg-forest bg-center pb-20">
      <h1 className="text-6xl font-bold text-black font-pixelify mt-36">
        <span className="font-pixelify text-[#1AB261]">aya's</span> reminders
      </h1>
      {/* header */}
      <div className="flex flex-col items-center mt-40">
        <div className="relative group">
          <img
            src="/images/ecocard1.png"
            alt="Description"
            className="my-image-class transition-transform duration-300 group-hover:scale-110"
          />
          {/* button */}
          <div className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-between text-white p-4">
            {/* placeholder target */}
            <button
              onClick={() => router.push(`/pages/story/day${day}`)}
              className="bg-[#1AB261] text-black px-10 py-3 rounded mt-56 font-bold text-lg border-4 border-black transition-transform duration-300 group-hover:scale-110 hover:bg-black hover:text-[#1AB261]"
            >
              CONTINUE
            </button>
          </div>
        </div>
        {/* impact summary */}
        <div className="flex mt-5 justify-between w-full px-10 gap-5">
          <div className="relative group">
            <img
              src="/images/ecocard2.png"
              alt="Description"
              className="my-image-class transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-opacity-50 flex flex-col text-white space-y-12 p-6 mt-12">
              {/* make props later */}
              <h1 className="transition-transform duration-300 group-hover:scale-110 font-geologica font-bold text-2xl text-center">
                YOUR IMPACT SUMMARY
              </h1>
              <p className="transition-transform duration-300 group-hover:scale-110 font-pixelify font-medium text-xl text-left">
                Water Saved:
              </p>
              <p className="transition-transform duration-300 group-hover:scale-110 font-pixelify font-medium text-xl text-left">
                Carbon Reduced:
              </p>
              <p className="transition-transform duration-300 group-hover:scale-110 font-pixelify font-medium text-xl text-left">
                Waste Avoided:
              </p>
              <h1 className="transition-transform duration-300 group-hover:scale-110 font-pixelify font-bold text-3xl text-center">
                "What haffen vella?"
              </h1>
            </div>
          </div>
          {/* eco score */}
          <div className="flex flex-col space-y-5">
            <div className="relative group">
              <img
              src="/images/ecocard3.png"
              alt="Description"
              className="my-image-class transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center text-white space-y-4">
              <h1 className="transition-transform duration-300 group-hover:scale-110 font-geologica font-bold text-2xl text-center">
                YOUR ECO SCORE
              </h1>
              <p className="transition-transform duration-300 group-hover:scale-110 font-pixelify font-medium text-5xl text-center">
                90
              </p>
              </div>
            </div>
            {/* sproutie images */}
            <div className="relative group">
              <img
              src="/images/ecocard3.png"
              alt="Description"
              className="my-image-class transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-opacity-50 flex flex-row items-center justify-center text-white space-x-4">
              <img
                src="/images/sproutie_carbon.png"
                alt="Sproutie 1"
                className="w-40 h-40 transition-transform duration-300 group-hover:scale-110"
              />
              <img
                src="/images/sproutie_waste.png"
                alt="Sproutie 2"
                className="w-40 h-40 transition-transform duration-300 group-hover:scale-110"
              />
              <img
                src="/images/sproutie_water.png"
                alt="Sproutie 3"
                className="w-40 h-40 transition-transform duration-300 group-hover:scale-110"
              />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EcoCard;
