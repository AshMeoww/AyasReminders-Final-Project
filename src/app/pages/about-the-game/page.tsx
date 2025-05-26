import Image from "next/image";

function AboutGame() {
    return (
        <div className="outer-container">
            <div className="relative min-h-screen flex flex-col items-center justify-start bg-cloudHeader bg-center pb-20 mt-18">
                <h1 className="text-6xl font-bold text-[#F9F964] font-geologic mt-20 drop-shadow-lg">
                    About the Game
                </h1>
                <p className="text-white mt-8 font-figtree font-extralight text-4xl w-4xl text-center px-4 drop-shadow-md">
                    Aya’s Reminders is a story-driven game where every choice shapes the world around you.
                </p>
            </div>

            <div>
                <SproutieDropdown />
            </div>
            <div>
                <AyaDropdown />
            </div>
            <div>
                <Objectives />
            </div>
        </div>
    );
}

import SproutieDropdown from "./Sproutie /page";
import AyaDropdown from "./Aya/page";
import Objectives from "./Objectives/page";

export default AboutGame;
