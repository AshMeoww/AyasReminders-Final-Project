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
                        <h3 className="text-4xl font-semibold text-[#108eb0] font-pixelify w-2xs">
                            Aya's Mother
                        </h3>
                        <p className="text-[#32374F] mt-4 font-figtree font-extralight text-left w-lg">
                        A caring mother who loves to leave notes as reminders.
                        </p>
                    </div>
                    <Image
                        src="/images/Characters/AyasMother-game.PNG"
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
                        <h3 className="text-4xl font-semibold text-[#88008a] font-pixelify w-2xs">
                            Eireen
                        </h3>
                        <p className="text-[#32374F] mt-4 font-figtree font-extralight text-left w-lg">
                        Aya’s best friend since childhood who brings out Aya’s inner feelings.
                        </p>
                    </div>
                    <Image
                        src="/images/Characters/Eireen-game.PNG"
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
                        <h3 className="text-4xl font-semibold text-[#5e2f0e] font-pixelify w-2xs">
                            Ray
                        </h3>
                        <p className="text-[#32374F] mt-4 font-figtree font-extralight text-left w-lg">
                        The big brother of the group. He is calm and collected with a witty sense of humor.
                        </p>
                    </div>
                    <Image
                        src="/images/Characters/Ray-game.PNG"
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
                            Laurie
                        </h3>
                        <p className="text-[#32374F] mt-4 font-figtree font-extralight text-left w-lg">
                        The group’s sarcastic, perpetually tired, and brutally honest friend.
                        </p>
                    </div>
                    <Image
                        src="/images/Characters/Laurie-game.PNG"
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
                        A silly student that brings the group embarrassment all the time.
                        </p>
                    </div>
                    <Image
                        src="/images/Characters/Fransette-game.PNG"
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
                            Sir Waffles
                        </h3>
                        <p className="text-[#32374F] mt-4 font-figtree font-extralight text-left w-lg">
                        Aya and the others’ teacher. His name is actually Waffles.
                        </p>
                    </div>
                    <Image
                        src="/images/Characters/Waffles-game.PNG"
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
                        Ma’am Austline
                        </h3>
                        <p className="text-[#32374F] mt-4 font-figtree font-extralight text-left w-lg">
                        Another teacher who is close to Sir Waffles. Scary, intimidating, but that was only during the first meeting.
                        </p>
                    </div>
                    <Image
                        src="/images/Characters/Austline-game.PNG"
                        alt="The Mystic"
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
