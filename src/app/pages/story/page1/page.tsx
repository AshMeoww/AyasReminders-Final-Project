
"use client";

import React from "react";
import StoryPart from "c:/Users/Administrator/Documents/GitHub/AyasReminders-Final-Project/components/ui/StoryPart";

export default function Page1() {
  return (
    <div>
      <StoryPart
         imageSrc="/bike.jpg"
         imageAlt="Dark cave entrance"
         text="You find a dark cave. It's cold, and something seems to be watching you. Do you enter or turn back?"
       />
    </div>
  );
}