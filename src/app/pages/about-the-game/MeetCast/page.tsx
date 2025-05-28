import Image from "next/image";

function MeetCast() {
    return (
        <div className="flex flex-col gap-12 p-18 bg-white">
            {/* Green Container with Header */}
            <div className="bg-[#2E2E2E] p-26 rounded-lg w-screen -ml-20 -mr-20">
                <h2 className="text-6xl font-bold text-[#4ADE80] font-geologica text-center">
                    All Original.
                </h2>
                <p className="text-white mt-4 font-figtree font-extralight text-center w-xl mx-auto">
                    To ensure a personal touch, the art and music found in the game are
                    all passionately made by the team, with some utilization of artificial
                    intelligence for efficiency.
                </p>
            </div>

            <div className="flex flex-col ml-20">
                {/* Card 1 */}
                <div
                    id="meet-cast"
                    className="flex items-center justify-between p-8 bg-white rounded-lg"
                >
                    <div className="flex flex-col gap-2 mt-20 mb-20">
                        <h3 className="text-6xl font-bold text-black font-geologica">
                            Meet the{" "}
                            <span className="font-pixelify text-[#00B10C]">Cast</span>
                        </h3>
                        <p className="text-black mt-4 font-figtree font-medium">
                            Get to know the other characters supporting Aya in this story.
                        </p>
                    </div>
                </div>

                {/* Card 2 */}
                <div
                    id="ayas-mother"
                    className="flex items-center justify-between p-8 bg-white"
                >
                    <div className="flex flex-col gap-2">
                        <h3 className="text-4xl font-semibold text-[#0B008A] font-pixelify w-2xs">
                            Aya's Mother
                        </h3>
                        <p className="text-[#32374F] mt-4 font-figtree font-extralight text-left w-lg">
                            Ashley Nicole D. Santos is the team’s project manager. She is the one responsible for the overall progress of the team, and also the coding of the website.
                        </p>
                    </div>
                    <Image
                        src="/images/sproutie_carbon.png"
                        alt="Aya's Mother"
                        width={200}
                        height={200}
                        className="mr-28"
                    />
                </div>

                {/* Card 3 */}
                <div
                    id="ayas-friend"
                    className="flex items-center justify-between p-8 bg-white"
                >
                    <div className="flex flex-col gap-2">
                        <h3 className="text-4xl font-semibold text-[#0B008A] font-pixelify w-2xs">
                            Eireen
                        </h3>
                        <p className="text-[#32374F] mt-4 font-figtree font-extralight text-left w-lg">
                            Aya's friend is a cheerful companion who helps her navigate the challenges of the story.
                        </p>
                    </div>
                    <Image
                        src="/images/sproutie_waste.png"
                        alt="Aya's Friend"
                        width={200}
                        height={200}
                        className="mr-28"
                    />
                </div>

                {/* Card 4 */}
                <div
                    id="mentor"
                    className="flex items-center justify-between p-8 bg-white"
                >
                    <div className="flex flex-col gap-2">
                        <h3 className="text-4xl font-semibold text-[#0B008A] font-pixelify w-2xs">
                            Ray
                        </h3>
                        <p className="text-[#32374F] mt-4 font-figtree font-extralight text-left w-lg">
                            Aya's mentor provides guidance and wisdom to help her overcome obstacles.
                        </p>
                    </div>
                    <Image
                        src="/images/sproutie_carbon.png"
                        alt="Aya's Mentor"
                        width={200}
                        height={200}
                        className="mr-28"
                    />
                </div>

                {/* Card 5 */}
                <div
                    id="villain"
                    className="flex items-center justify-between p-8 bg-white"
                >
                    <div className="flex flex-col gap-2">
                        <h3 className="text-4xl font-semibold text-[#8A0000] font-pixelify w-2xs">
                            Lourie
                        </h3>
                        <p className="text-[#32374F] mt-4 font-figtree font-extralight text-left w-lg">
                            A mysterious antagonist who challenges Aya at every turn.
                        </p>
                    </div>
                    <Image
                        src="/images/sproutie_waste.png"
                        alt="The Villain"
                        width={200}
                        height={200}
                        className="mr-28"
                    />
                </div>

                {/* Card 6 */}
                <div
                    id="sidekick"
                    className="flex items-center justify-between p-8 bg-white"
                >
                    <div className="flex flex-col gap-2">
                        <h3 className="text-4xl font-semibold text-[#008A8A] font-pixelify w-2xs">
                            Fransette
                        </h3>
                        <p className="text-[#32374F] mt-4 font-figtree font-extralight text-left w-lg">
                            A loyal companion who supports Aya in her journey.
                        </p>
                    </div>
                    <Image
                        src="/images/sproutie_carbon.png"
                        alt="The Sidekick"
                        width={200}
                        height={200}
                        className="mr-28"
                    />
                </div>

                {/* Card 7 */}
                <div
                    id="guardian"
                    className="flex items-center justify-between p-8 bg-white"
                >
                    <div className="flex flex-col gap-2">
                        <h3 className="text-4xl font-semibold text-[#4A008A] font-pixelify w-2xs">
                            The Guardian
                        </h3>
                        <p className="text-[#32374F] mt-4 font-figtree font-extralight text-left w-lg">
                            A protector who ensures Aya's safety during her adventures.
                        </p>
                    </div>
                    <Image
                        src="/images/sproutie_waste.png"
                        alt="The Guardian"
                        width={200}
                        height={200}
                        className="mr-28"
                    />
                </div>

                {/* Card 8 */}
                <div
                    id="mystic"
                    className="flex items-center justify-between p-8 bg-white"
                >
                    <div className="flex flex-col gap-2">
                        <h3 className="text-4xl font-semibold text-[#8A8A00] font-pixelify w-2xs">
                            The Mystic
                        </h3>
                        <p className="text-[#32374F] mt-4 font-figtree font-extralight text-left w-lg">
                            A wise character who provides Aya with magical insights.
                        </p>
                    </div>
                    <Image
                        src="/images/sproutie_carbon.png"
                        alt="The Mystic"
                        width={200}
                        height={200}
                        className="mr-28"
                    />
                </div>

                {/* Card 9 */}
                <div
                    id="rival"
                    className="flex items-center justify-between p-8 bg-white"
                >
                    <div className="flex flex-col gap-2">
                        <h3 className="text-4xl font-semibold text-[#8A4A00] font-pixelify w-2xs">
                            The Rival
                        </h3>
                        <p className="text-[#32374F] mt-4 font-figtree font-extralight text-left w-lg">
                            A competitive character who pushes Aya to her limits.
                        </p>
                    </div>
                    <Image
                        src="/images/sproutie_waste.png"
                        alt="The Rival"
                        width={200}
                        height={200}
                        className="mr-28"
                    />
                </div>
            </div>
        </div>
    );
}

export default MeetCast;
