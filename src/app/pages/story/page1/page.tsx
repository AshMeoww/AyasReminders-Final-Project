
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
        character: "/char1.png",
        name: "Narrator",
        text: "You enter a quiet forest.",
      },
      {

        character: "/char1.png",
        name: "Narrator",
        text: "You see a fork in the road. Do you...",
        choices: [
          { text: "Take the left path", nextIndex: 3 },
          { text: "Take the right path", nextIndex: 4 },
        ]
      },
      {

        character: "/char2.png",
        name: "Narrator",
        text: "You walk deeper into the woods.", // This will be skipped because of choice
      },
      {

        character: "/char3.png",
        name: "Left Path",
        text: "You took the left path and find a cabin.",
      },
      {

        character: "/char4.png",
        name: "Right Path",
        text: "You took the right path and see a lake.",
      },
  ]}
/>

    </div>
  );
}