import Link from "next/link";

function Objectives() {
    return (
        <div className="flex flex-col gap-12 p-8 bg-white">
            {/* Green Container with Header */}
            <div className="bg-[#1AB261] p-12 rounded-lg w-full">
                <h2 className="text-5xl font-bold text-white font-geologica text-center">
                    aya's objectives
                </h2>
            </div>

            {/* Images Section */}
            <div className="flex flex-wrap justify-center gap-6 mt-6">
                <Link href="/about-the-game/objectives/waste">
                    <img
                        src="/images/sproutie_waste.png"
                        alt="Objective 1"
                        className="w-64 h-64 rounded-lg transform transition-transform duration-300 hover:scale-110 cursor-pointer"
                    />
                </Link>
                <Link href="/about-the-game/objectives/carbon">
                    <img
                        src="/images/sproutie_carbon.png"
                        alt="Objective 2"
                        className="w-64 h-64 rounded-lg transform transition-transform duration-300 hover:scale-110 cursor-pointer"
                    />
                </Link>
                <Link href="/about-the-game/objectives/water">
                    <img
                        src="/images/sproutie_water.png"
                        alt="Objective 3"
                        className="w-64 h-64 rounded-lg transform transition-transform duration-300 hover:scale-110 cursor-pointer"
                    />
                </Link>
            </div>
        </div>
    );
}

export default Objectives;
