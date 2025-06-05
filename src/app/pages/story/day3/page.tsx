
"use client";

import React from "react";
import StoryPart from "c:/Users/Administrator/Documents/GitHub/AyasReminders-Final-Project/components/ui/StoryPart";

export default function Page1() {
  return (
    <div>
      <StoryPart
  background="/images/classroom.png"
  onEndRedirect="/pages/story/day4"
  dialogues={[
    {text: "A brand new day, but same old routine.",nextIndex: 1,},
    {text: "You wake up feeling a little groggy,",nextIndex: 2,},
    {text: "But just like any other day, your mother is gone and a sticky note greets you.,",nextIndex: 3,},
    {text: "It reads: “Good morning Aya, it’s time to start your day again! Everything still has use, don’t let it go to waste. <3”",nextIndex: 4,},
    {text: "And so, you get up from your bed and go to the kitchen to eat some breakfast.",nextIndex: 5,},
    {text: "Ate the leftovers, carefully wash the plates, and take a bath.",nextIndex: 6,},
    {text: "Then get dressed in your school uniform, make sure unused appliances are unplugged, and walk to the bus stop.",nextIndex: 7,},
    {text: "Same old routine, can you even keep this up?",nextIndex: 8,},
    {text: "The bus arrives.", nextIndex: 9, },
    {text: "You board it and wait for it to arrive at your school.",nextIndex: 10,},
    {
      character: "/char2.png",
      name: "?????",
      text: "Hey Aya",
      nextIndex: 11,
    },
    {
        character: "/char2.png",
        name: "?????",
        text: "We’re here.",
        nextIndex: 12,
    },
    {text: "You didn’t notice you fell asleep.",nextIndex: 13,},
    {text: "Thankfully, Laurie woke you up.",nextIndex: 14,},
    {text: "The two of you get off the bus, and make your way to your classroom, again.",nextIndex: 15,},
    {text: "What new will the class bring today?",nextIndex: 16,},
    {
      character: "/char2.png",
      name: "Sir Waffles",
      text: "Okay, good morning everyone!",
      nextIndex: 17,
    },
    {
      character: "/char2.png",
      name: "Everyone",
      text: "Good morning, Sir Waffles!",
      nextIndex: 18,
    },
    {
      character: "/char2.png",
      name: "Sir Waffles",
      text: "As you can see, I’m back and now have the strength to come to class today.",
      nextIndex: 19,
    },
    {
      character: "/char1.png",
      name: "Sir Waffles",
      text: "Don’t believe whatever Ma’am Austline said yesterday. (winking)",
      nextIndex: 20,
    },
    {text: "Everyone laughed. This atmosphere, you rarely feel it at home now.",nextIndex: 21,},
    {
      character: "/char1.png",
      name: "Sir Waffles",
      text: "Anyways, today we will be making… An assemblage!",
      nextIndex: 22,
    },
    {
      character: "/char1.png",
      name: "Fransette",
      text: "OOOOOH, I KNOW THIS!",
      nextIndex: 23,
    },
    {
      character: "/char1.png",
      name: "Sir Waffles",
      text: "Basically, an assemblage is a work of art made from combining unrelated objects.",
      nextIndex: 24,
    },  
    {
      character: "/char1.png",
      name: "Sir Waffles",
      text: "Today, however, we will be using recycled materials.",
      nextIndex: 25,
    },  
    {
      character: "/char1.png",
      name: "Sir Waffles",
      text: "I brought with me materials you all can use, just don’t hoard them all okay?",
      nextIndex: 26,
    },  
    {
      character: "/char1.png",
      name: "Sir Waffles",
      text: "You can now start in teams of five.",
      nextIndex: 27,
    },  
    {
      character: "/char1.png",
      name: "Fransette",
      text: "Can we make chill guy?",
      nextIndex: 28,
    },  
    {
      character: "/char1.png",
      name: "Laurie",
      text: "Chill what?",
      nextIndex: 29,
    },  
    {
      character: "/char1.png",
      name: "Ray",
      text: "It’s from a meme.",
      nextIndex: 30,
    }, 
    {
      character: "/char1.png",
      name: "Ray",
      text: "It’s from a meme.",
      nextIndex: 30,
    }, 
    {
      character: "/char1.png",
      name: "Ray",
      text: "It’s from a meme.",
      nextIndex: 30,
    }, 
  ]}
/>

  
    </div>
  );
}