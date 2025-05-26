"use client";
import React from "react";
import { Geologica, Figtree, Pixelify_Sans } from "next/font/google";
import Image from "next/image";
import { useState } from "react";

function AboutUs() {
    return (
        <div className="relative min-h-screen flex flex-col items-center justify-start bg-classroom2 bg-center pb-20">
            <h1 className="text-6xl font-bold text-[#F9F964] font-geologic mt-20">
                Meet 22°C
            </h1>
            <p className="text-white mt-8 font-figtree font-bold text-4xl w-4xl text-center px-4">
                Hailing from Cavite State University - Main Campus, 22°C is a team of
                four behind the creation of “aya’s reminders”.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16 px-4">
                {[
                    {
                        name: "Ash",
                        image: "/images/Ash.png",
                        roles: ["Project Manager", "Developer", "Visual Artist"],
                        hoverText: "Ashley Nicole Santos is the team’s project manager. She is the one responsible for the overall progress of the team, and also the coding of the website."
                    },
                    {
                        name: "Aids",
                        image: "/images/Aids.png",
                        roles: ["Developer", "Story Designer", "Game Designer"],
                        hoverText: "Adrian G. Mangampat is the team’s spearhead for the game. In addition to programming, he is the one responsible for the game’s development by checking his teammates’ work on the game.",
                    },
                    {
                        name: "Narcel",
                        image: "/images/Narcel.png",
                        roles: ["Project Lead", "UI/UX Designer", "Audio Composer"],
                        hoverText: "Marc Rancel R. Bongalos is the team’s member responsible for the auditory elements found in the game and website.  Additionally, he is also involved in designing this project.",
                    },
                    {
                        name: "Jossaine",
                        image: "/images/Jossaine.png",
                        roles: ["Visual Artist", "Content Writer", "Game Designer"],
                        hoverText: "Jossanah Ellaine C. Peji is the team’s main artist. She is responsible for the visual elements seen in this project, especially inside the game. She is part of the design team and maintains the material in this website up to date.",
                    },
                ].map((member, index) => (
                    <HoverCard key={index} member={member} />
                ))}
            </div>
        </div>
    );
}

function HoverCard({ member }: { member: any }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative flex flex-row items-center p-8 bg-gray-800/50 backdrop-blur-sm rounded-lg group hover:bg-gray-700/80 transition-all duration-300"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {isHovered ? (
                <p className="text-white text-lg font-figtree font-semibold text-center w-xs flex items-center justify-center ml-20">
                    {member.hoverText}
                </p>
            ) : (
                <>
                    <div className="flex flex-col mr-8">
                        <h3
                            className="text-4xl font-bold text-white mb-4 text-left"
                            style={{ fontFamily: "Pixelify Sans" }}
                        >
                            {member.name}
                        </h3>
                        <Image
                            src={member.image}
                            alt={`${member.name} image`}
                            width={300}
                            height={225}
                            className="rounded-lg"
                        />
                    </div>
                    <ul className="text-white text-lg font-figtree font-semibold text-left space-y-2">
                        {member.roles.map((role: string, i: number) => (
                            <li key={i}>{role}</li>
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
}

export default AboutUs;
