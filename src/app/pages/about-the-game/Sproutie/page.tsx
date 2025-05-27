"use client";
import { useState } from "react";
import Image from "next/image";

function SproutieDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center justify-center bg-white w-screen h-screen overflow-hidden">
      <div className="flex items-center rounded-lg p-8 w-4/5 bg-white">
        <div className="mr-8 flex-shrink-0">
          <Image
            src="/images/sproutie.png"
            alt="Sproutie"
            width={400}
            height={400}
            className="rounded-lg"
          />
        </div>
        <div className="flex-1">
          <div className="text-right">
            <button
              onClick={toggleDropdown}
              className="flex items-center text-black font-bold text-right text-5xl p-0 mb-4 focus:outline-none font-geologica"
            >
              {isOpen ? (
                <>
                  Enter&nbsp;
                  <span className="font-pixelify text-[#1AB261]">
                    Berdeston
                  </span>
                </>
              ) : (
                <>
                  Enter&nbsp;
                  <span className="font-pixelify text-[#1AB261]">
                    Berdeston
                  </span>
                </>
              )}
              <span
                className={`ml-2 transform transition-transform ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
              >
                ▼
              </span>
            </button>
          </div>
          {!isOpen && (
            <p className="text-gray-600 leading-relaxed font-light mb-4">
              A quiet town where life feels ordinary, but where small daily
              choices about the environment quietly shape the future.
            </p>
          )}
          {isOpen && (
            <div className="text-gray-800 leading-relaxed font-extralight font-figtree text-left">
              Aya’s Reminders is a short, choice-driven story game about the
              quiet power of care, memory, and everyday decisions. You play as
              Aya, a soft-spoken 15-year-old who wakes up each day to find a new
              sticky note left by her mother before leaving for work. These
              notes serve as gentle guides—not just for chores or routines, but
              for the small, meaningful choices that shape how we treat the
              world around us. <br />
              <br /> Set over the course of a few days, your actions—like
              conserving water, managing waste, or reducing energy use—subtly
              shape Aya’s environment and reflect the messages left for her.
              With a soft art style, a slow ambient soundtrack, and a calm
              narrative rhythm, the game invites you to pause and think, not
              just about eco-friendly habits, but about the people who try to
              teach us gently. <br />
              <br />
              As the story unfolds, players begin to sense that Aya’s bond with
              her mother is deeper than it first seems. Her mother is
              mute—unable to speak—and the sticky notes are more than reminders;
              they’re her voice, her way of connecting, and of guiding Aya with
              quiet strength. <br />
              <br />
              Aya’s Reminders is a heartfelt reflection on the things we throw
              away, the things we hold on to, and the people who shape us in
              silence.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SproutieDropdown;
