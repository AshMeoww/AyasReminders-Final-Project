
"use client";

import React from "react";
import StoryPart from "@/components/ui/StoryPart";
import { saveChoice, EcoChoice } from "@/utils/saveChoice";

export default function Page5() {

  const handleChoice = (choice: EcoChoice) => {
    console.log("Choice clicked:", choice);
    saveChoice(choice);
  };
  return (
    <div>
      <StoryPart
  background="/images/classroom.png"
  onEndRedirect="/pages/get-started/Ecocard"
  dialogues={[
    {text: "It’s Saturday.", nextIndex: 1},
    {text: "It’s Saturday.", nextIndex: 2},
    {text: "The sun’s already out, but the air’s still cool.", nextIndex: 3},
    {text: "The bike’s waiting—", nextIndex: 5},
    {text: " and today, so are your friends.", nextIndex: 6},
    {text: "There’s not much, but enough.", nextIndex: 7},
    {text: "You get ready, pack some water, and leave a small note on the table:", nextIndex: 8},
    {text: "Going out for a while. Will be safe.", nextIndex: 9},
    {text: "You head out.", nextIndex: 10},
    
    {text: "You arrive at the meeting spot.", nextIndex: 11},
    {
      character: "/char2.png",
      name: "Sir Waffles",
      text: "Morning, morning! I hope you’re all not too tired from yesterday’s… Chill Guy.",
      nextIndex: 12,
    },
    {
      character: "/char2.png",
      name: "Everyone",
      text: "(laughs)",
      nextIndex: 13,
    },
    {
      character: "/char2.png",
      name: "Sir Waffles",
      text: "Today we’re doing something simple, but important: a waste audit.",
      nextIndex: 14,
    },
    
    {
      text: "Will you turn it off now?",
      choices: [
        { text: "Yes. (Turn off AC and go to kitchen after closing the door.)", nextIndex: 17, ecoPoints: 5 },
        { text: "Doesn’t matter. (Leave AC on and go to kitchen after closing the door.)", nextIndex: 18, ecoPoints: 5 },
        { text: "No, but I’ll come back for it later. (Leave door slightly open and go to kitchen.)", nextIndex: 19 },
      ],
    },
    {
      character: "/char2.png",
      name: "You",
      text: "You turned off the AC and then closed the door before heading to the kitchen.",
      nextIndex: 20,
    },
    {
      character: "/char2.png",
      name: "You",
      text: "You left the AC on but closed the door before heading to the kitchen.",
      nextIndex: 20,
    },
    {
      character: "/char2.png",
      name: "You",
      text: "You left the door slightly open and went to the kitchen, planning to come back for the AC later.",
      nextIndex: 20,
    },
    {
      character: "/char1.png",
      name: "Narrator",
      text: "You enter the kitchen and see breakfast waiting for you.",
    }
  
  ]}
/>

  
    </div>
  );
}