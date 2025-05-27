import Link from "next/link";
import Image from "next/image";

function Objectives() {
    const objectives = [
        { id: "reduce-waste", src: "/images/sproutie_waste.png", alt: "Objective 1" },
        { id: "reduce-carbon", src: "/images/sproutie_carbon.png", alt: "Objective 2" },
        { id: "save-water-resources", src: "/images/sproutie_water.png", alt: "Objective 3" },
    ];

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
                {objectives.map((objective) => (
                    <Link
                        key={objective.id}
                        href={`pages/about-the-game/Objectives#${objective.id}`}
                        scroll={false} // Prevents automatic scrolling
                        className="rounded-lg transform transition-transform duration-300 hover:scale-110 cursor-pointer"
                    >
                        <Image
                            src={objective.src}
                            alt={objective.alt}
                            width={256}
                            height={256}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default Objectives;
