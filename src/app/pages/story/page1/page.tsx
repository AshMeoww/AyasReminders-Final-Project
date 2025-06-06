
"use client";

import React from "react";
import StoryPart from "c:/Users/Administrator/Documents/GitHub/AyasReminders-Final-Project/components/ui/StoryPart";

export default function Page1() {
  return (
    <div>



      <StoryPart
  background="/images/classroom.png"
  dialogues={[
    {
      text: "Welcome to “Berdeston”.",
      nextIndex: 1,
    },
    {
      text: "You have been here since you were born, and this city shaped who you are.",
      nextIndex: 2,
    },
    {

      text: "You live with your mother who works tirelessly for you,",
      nextIndex: 3,
    },
    {

      text: "because your father died of an unfortunate accident.",
      nextIndex: 4,
    },
    {

      text: "Nevertheless, you grew up well taken care of by your mother.",
      nextIndex: 5,
    },
    {

      text: "The sound of your alarm clock wakes you up.",
      nextIndex: 6,
    },
    {

      text: "It’s time to get ready for school.",
      nextIndex: 7,
    },
    {

      text: "You found a sticky note near your table beside your bed! It says…",
      nextIndex: 8,
    },
    {

      text: "“Good morning, Aya! I left early for work, and I won’t come back until midnight.",
      nextIndex: 9,
    },
    {

      text: "You don’t have to wait for me. There’s food left from last night, don’t let it go to waste!",
      nextIndex: 10,
    },
    {
      text: "Love, Mom.”",
      nextIndex: 11,
    },
    {
      text: "Another sticky note was beside it.",
      nextIndex: 12,
    },
    {
      text: "It reads “Also, remember to turn the AC off - you always forget it!”",
      nextIndex: 13,
    },
    {

      text: "And so, you make your bed.",
      nextIndex: 14,
    },
    {

      text: "Just before you go out, you realize that the AC is still on.",
      nextIndex: 15,
    },
    {
      text: "Will you turn it off now?",
      choices: [
        { text: "Yes. (Turn off AC and go to kitchen after closing the door.)", nextIndex: 16 },
        { text: "Doesn’t matter. (Leave AC on and go to kitchen after closing the door.)", nextIndex: 17 },
        { text: "No, but I’ll come back for it later. (Leave door slightly open and go to kitchen.)", nextIndex: 18 },
      ],
    },
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
      // end of this segment, no nextIndex needed unless story continues
    },
  ]}
/>

  

    </div>
  );
}