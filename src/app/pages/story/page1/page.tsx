
"use client";

import React from "react";
import StoryPart from "c:/Users/Administrator/Documents/GitHub/AyasReminders-Final-Project/components/ui/StoryPart";

export default function Page1() {
  return (
    <div>
      <StoryPart
         background="/images/aya.png"
         character="/images/Aids.png"
         name = "Aya"
         text="Hello, this is a test message."
       />
    </div>
  );
}