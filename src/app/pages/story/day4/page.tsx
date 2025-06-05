
"use client";

import React from "react";
import StoryPart from "@/components/ui/StoryPart";

export default function Page1() {
  return (
    <div>
      <StoryPart
  background="/images/classroom.png"
  onEndRedirect="/pages/story/day4"
  dialogues={[
    {text: "A brand new day… and this time, you’re not as groggy.",nextIndex: 1,},
    {text: "It's starting to feel like muscle memory—",nextIndex: 2,},
    {text: "The stillness of the house, the morning light, and the sticky note waiting for you.",nextIndex: 3,},
    {text: "It reads: “Good morning, Aya. Let’s take care of what’s left behind. The world will thank you for it. <3”",nextIndex: 4,},
    {text: "You eat the last bit of leftover adobo from the fridge.",nextIndex: 5,},
    {text: "There’s not much, but enough.",nextIndex: 6,},
    {text: "You clean up, take a shower, unplug what’s unused, and head out to the bus stop.",nextIndex: 7,},
    {text: "The sky’s clear. The neighborhood is quiet.",nextIndex: 8,},
    {text: "Just the soft hum of tires on pavement as the bus arrives.", nextIndex: 9, },
    {text: "You arrive at school.",nextIndex: 10,},
    {
      character: "/char2.png",
      name: "Sir Waffles",
      text: "Morning, morning! I hope you’re all not too tired from yesterday’s… Chill Guy.",
      nextIndex: 11,
    },
    {
      character: "/char2.png",
      name: "Everyone",
      text: "(laughs)",
      nextIndex: 12,
    },
    {
      character: "/char2.png",
      name: "Sir Waffles",
      text: "Today we’re doing something simple, but important: a waste audit.",
      nextIndex: 13,
    },
    
    {text: "Will you turn it off now?",
      choices: [
        { text: "Yes. (Turn off AC and go to kitchen after closing the door.)", nextIndex: 16, ecoPoints: 5},
        { text: "Doesn’t matter. (Leave AC on and go to kitchen after closing the door.)", nextIndex: 17, ecoPoints: 5 },
        { text: "No, but I’ll come back for it later. (Leave door slightly open and go to kitchen.)", nextIndex: 18 },
      ],},
    {
      character: "/char2.png",
      name: "You",
      text: "You turned off the AC and then closed the door before heading to the kitchen.",
      nextIndex: 19,
    },
    {
      character: "/char2.png",
      name: "You",
      text: "You left the AC on but closed the door before heading to the kitchen.",
      nextIndex: 19,
    },
    {
      character: "/char2.png",
      name: "You",
      text: "You left the door slightly open and went to the kitchen, planning to come back for the AC later.",
      nextIndex: 19,
    },
    {
      character: "/char1.png",
      name: "Narrator",
      text: "You enter the kitchen and see breakfast waiting for you.",
    },
  ]}
/>

  
    </div>
  );
}