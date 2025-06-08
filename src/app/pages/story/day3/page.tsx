
"use client";

import React from "react";
import StoryPart from "@/components/ui/StoryPart";

export default function Page1() {
  return (
    <div>
      <StoryPart
        background="/images/white.jpg"
  onEndRedirect="/pages/story/day4"
  dialogues={[
    {text: "Day 3: Before you throw it, ask: Can it go again?", nextIndex: 1},
    {text: "A brand new day, but same old routine.", nextIndex: 2, background: "/images/Day3/Bedroom-day3.PNG"},
    {text: "You wake up feeling a little groggy,", nextIndex: 3},
    {text: "But just like any other day, your mother is gone and a sticky note greets you.", nextIndex: 4},
    {text: "It reads: “Good morning Aya, it’s time to start your day again! Everything still has use, don’t let it go to waste. <3”", nextIndex: 5},
    {text: "And so, you get up from your bed and go to the kitchen to eat some breakfast.", nextIndex: 6,  background: "/images/Day3/Kitchen-day3.PNG"},
    {text: "Ate the leftovers, carefully wash the plates, and take a bath.", nextIndex: 7},
    {text: "Then get dressed in your school uniform, make sure unused appliances are unplugged, and walk to the bus stop.", nextIndex: 8, background: "/images/Day2/Prepare-unif.PNG"},
    {text: "Same old routine, can you even keep this up?", nextIndex: 9},
    {text: "The bus arrives.", nextIndex: 10, background: "/images/Day3/InsideBus-day3.PNG"},
    {text: "You board it and wait for it to arrive at your school.", nextIndex: 11},
    {
      character: "/images/Characters/Silhouette-game.PNG",
      name: "?????",
      text: "Hey Aya",
      nextIndex: 12
    },
    {
      character: "/images/Characters/Silhouette-game.PNG",
      name: "?????",
      text: "We’re here.",
      nextIndex: 13
    },
    {text: "You didn’t notice you fell asleep.", nextIndex: 14},
    {text: "Thankfully, Laurie woke you up.", nextIndex: 15},
    {text: "The two of you get off the bus, and make your way to your classroom, again.", nextIndex: 16},
    {text: "What new will the class bring today?", nextIndex: 17, background: "/images/Day3/Classroom-day3.PNG"},
    {
      character: "/images/Characters/Waffles-game.PNG",
      name: "Sir Waffles",
      text: "Okay, good morning everyone!",
      nextIndex: 18
    },
    {
      character: "/images/Characters/Silhouette-game.PNG",
      name: "Everyone",
      text: "Good morning, Sir Waffles!",
      nextIndex: 19
    },
    {
      character: "/images/Characters/Waffles-game.PNG",
      name: "Sir Waffles",
      text: "As you can see, I’m back and now have the strength to come to class today.",
      nextIndex: 20
    },
    {
      character: "/images/Characters/Waffles-game.PNG",
      name: "Sir Waffles",
      text: "Don’t believe whatever Ma’am Austline said yesterday. (winking)",
      nextIndex: 21
    },
    {text: "Everyone laughed. This atmosphere, you rarely feel it at home now.", nextIndex: 22},
    {
      character: "/images/Characters/Waffles-game.PNG",
      name: "Sir Waffles",
      text: "Anyways, today we will be making… An assemblage!",
      nextIndex: 23
    },
    {
      character: "/images/Characters/Fransette-game.PNG",
      name: "Fransette",
      text: "OOOOOH, I KNOW THIS!",
      nextIndex: 24
    },
    {
      character: "/images/Characters/Waffles-game.PNG",
      name: "Sir Waffles",
      text: "Basically, an assemblage is a work of art made from combining unrelated objects.",
      nextIndex: 25
    },
    {
      character: "/images/Characters/Waffles-game.PNG",
      name: "Sir Waffles",
      text: "Today, however, we will be using recycled materials.",
      nextIndex: 26
    },
    {
      character: "/images/Characters/Waffles-game.PNG",
      name: "Sir Waffles",
      text: "I brought with me materials you all can use, just don’t hoard them all okay?",
      nextIndex: 27
      , background: "/images/Day3/Cd_newspaper-day3.PNG"
    },
    {
      character: "/images/Characters/Waffles-game.PNG",
      name: "Sir Waffles",
      text: "You can now start in teams of five.",
      nextIndex: 28
    },
    {
      character: "/images/Characters/Fransette-game.PNG",
      name: "Fransette",
      text: "Can we make chill guy?",
      nextIndex: 29
    },
    {
      character: "/images/Characters/Laurie-game.PNG",
      name: "Laurie",
      text: "Chill what?",
      nextIndex: 30
    },
    {
      character: "/images/Characters/Ray-game.PNG",
      name: "Ray",
      text: "It’s from a meme.",
      nextIndex: 31
    },
    {
      character: "/images/Characters/Fransette-game.PNG",
      name: "Fransette",
      text: "Yeah! The dog with human clothes!",
      nextIndex: 32,
    },
    {
      character: "/images/Characters/Laurie-game.PNG",
      name: "Laurie",
      text: "Er.. okay.",
      nextIndex: 33,
    },
    {
      character: "/images/Characters/Eireen-game.PNG",
      name: "Eireen",
      text: "Well, there’s newspapers here, CD’s, cardboard……",
      nextIndex: 34,
    },
    {
      text: "As they discuss what to do, you wonder to yourself - do people even completely commit to environmental decisions?",
      nextIndex: 35,
    },
    {
      text: "Why are you even doing this…?",
      nextIndex: 36,
    },
    {
      text: "For what?",
      nextIndex: 37,
    },
    {
      text: "You’re home alone, no one’s watching, why should you?",
      nextIndex: 38,
    },
    {
      text: "Your head becomes cloudy.",
      nextIndex: 39,
    },
    {
      character: "/images/Characters/Eireen-game.PNG",
      name: "Eireen",
      text: "Aya, we’ll start, come help us!",
      nextIndex: 40,
    },
    {
      text: "And yet, you still helped your friends.",
      nextIndex: 41,
    },
    {
      text: "A few minutes later…",
      nextIndex: 42,
    },
    {
      character: "/images/Characters/Fransette-game.PNG",
      name: "Fransette",
      text: "Wow. What a masterpiece.",
      nextIndex: 43,
      background: "/images/Day3/Classroom-day3.PNG"
    },
    {
      character: "/images/Characters/Eireen-game.PNG",
      name: "Eireen",
      text: "Yeah, not gonna lie.",
      nextIndex: 44,
    },
    {
      character: "/images/Characters/Waffles-game.PNG",
      name: "Sir Waffles",
      text: "Is everyone done?",
      nextIndex: 45,
    },
    {
      character: "/images/Characters/Everyone-game.PNG",
      name: "Everyone",
      text: "Yes sir!",
      nextIndex: 46,
    },
    {
      character: "/images/Characters/Waffles-game.PNG",
      name: "Sir Waffles",
      text: "Alright, take your seats with your groupmates and…",
      nextIndex: 47,
    },
    {
      character: "/images/Characters/Waffles-game.PNG",
      name: "Sir Waffles",
      text: "We’ll start from the back.",
      nextIndex: 48,
    },
    {
      character: "/images/Characters/Silhouette-game.PNG",
      name: "Student",
      text: "Aw dang it!",
      nextIndex: 49,
    },
    {
      character: "/images/Characters/Silhouette-game.PNG",
      name: "Everyone",
      text: "Hahahahaha..",
      nextIndex: 50,
    },
    {
      character: "/images/Characters/Ray-game.PNG",
      name: "Ray",
      text: "Looks like we’re going last.",
      nextIndex: 51,
    },
    {
      character: "/images/Characters/Laurie-game.PNG",
      name: "Laurie",
      text: "Oh look, a calendar made from paper and sticks!",
      nextIndex: 52,
    },
    {
      text: "From calendars to Christmas decor, to even a Minecraft helmet, the class created very interesting things.",
      nextIndex: 53,
    },
    {
      text: "And now, it’s your group’s turn.",
      nextIndex: 54,
    },
    {
      character: "/images/Characters/Fransette-game.PNG",
      name: "Fransette",
      text: "We present to you… CHILL GUY!",
      nextIndex: 55,
    },
    {
      character: "/images/Characters/Eireen-game.PNG",
      name: "Eireen",
      text: "Made from various paper, CD’s, and cardboard…",
      nextIndex: 56,
    },
    {
      character: "/images/Characters/Laurie-game.PNG",
      name: "Laurie",
      text: "He’s definitely chill.",
      nextIndex: 57,
    },
    {
      character: "/images/Characters/Ray-game.PNG",
      name: "Ray",
      text: "I got nothing to say.",
      nextIndex: 58,
    },
    {
      text: "Everyone clapped at your group’s work, and you see their faces smiling -",
      nextIndex: 59,
    },
    {
      text: "The various little pieces you guys had, is now a full artwork.",
      nextIndex: 60,
    },
    {
      text: "Small amounts may look insignificant, but together, they get recognized.",
      nextIndex: 61,
    },
    {
      text: "You now remember why you do what you do.",
      nextIndex: 62,
    },
    {
      text: "They are never worthless.",
      nextIndex: 63,
    },
    {
      text: "You are helping.",
      nextIndex: 64,
    },
    {
      character: "/images/Characters/Eireen-game.PNG",
      name: "Eireen",
      text: "Hey, our group killed it earlier!",
      nextIndex: 65,
      background: "/images/Day3/RoadSunset-day3.PNG"
    },
    {
      character: "/images/Characters/Eireen-game.PNG",
      name: "Eireen",
      text: "Fransette really likes it whenever it’s about reusing and recycling things.",
      nextIndex: 66,
    },
    {
      character: "/images/Characters/Eireen-game.PNG",
      name: "Eireen",
      text: "Honestly, it’s just easier to buy a new one than to fix or reuse something... Even if it still works.",
      nextIndex: 67,
    },
    {
      character: "/images/Characters/Eireen-game.PNG",
      name: "Eireen",
      text: "Rather than making an effort to create something that is probably not even good.",
      nextIndex: 68,
    },
    {
      character: "/images/Characters/Eireen-game.PNG",
      name: "Eireen",
      text: "I mean, that’s how I experience it most of the time.",
      nextIndex: 69,
    },
    {
      text: "You understand Eireen.",
      nextIndex: 70,
    },
    {
      text: "Why will you even use a struggling pen?",
      nextIndex: 71,
    },
    {
      text: "Why would you bother reusing a plastic water bottle?",
      nextIndex: 72,
    },
    {
      character: "/images/Characters/Eireen-game.PNG",
      name: "Eireen",
      text: "But… even still.",
      nextIndex: 73,
    },
    {
      character: "/images/Characters/Eireen-game.PNG",
      name: "Eireen",
      text: "We don’t always have to be like this.",
      nextIndex: 74,
    },
    {
      character: "/images/Characters/Eireen-game.PNG",
      name: "Eireen",
      text: "It’s enough that we know we should.",
      nextIndex: 75,
    },
    {
      character: "/images/Characters/Eireen-game.PNG",
      name: "Eireen",
      text: "It’s enough that we do it as much as possible.",
      nextIndex: 76,
    },
    {
      character: "/images/Characters/Aya-game.PNG",
      name: "Aya",
      text: "Yeah… It all adds up.",
      nextIndex: 77,
    },
    {
      character: "/images/Characters/Aya-game.PNG",
      name: "Aya",
      text: "Let’s go home.",
      nextIndex: 78,
    },
    {
      character: "/images/Characters/Eireen-game.PNG",
      name: "Eireen",
      text: "Y..yeah!",
      nextIndex: 79,
    },
    {
      text: "You board the bus home, wait, and bid farewell to each other.",
      nextIndex: 80,
    },
    {
      text: "Your home is welcoming you once again, ready to look over you.",
      nextIndex: 81,
      background: "/images/Day3/HomeSunset-day3.PNG"
    },
    {
      text: "Inside, a couple of okay-looking paper bags are left on the kitchen counter.",
      nextIndex: 82,
      background: "/images/Day3/Paperbag-day3.PNG"
    },
    {
      text: "What will you do?",
      choices: [
        {
          text: "Keep them.",
          nextIndex: 83,
        },
        {
          text: "Throw them away.",
          nextIndex: 84,
        },
      ],
    },
    {
      text: "You store them somewhere hidden.",
      nextIndex: 85,
    },
    {
      text: "You pick them up and put them in the trash can.",
      nextIndex: 85,
    },
    {
      text: "The paper bags gave you an idea.",
      nextIndex: 86,
    },
    {
      text: "One that you realized you need to do.",
      nextIndex: 87,
    },
    {
      text: "You place your bag down and sit.",
      nextIndex: 88,
      background: "/images/Day3/schoolBag-day3.PNG"
    },
    {
      text: "It feels heavier than usual — you wonder why.",
      nextIndex: 89,
    },
    {
      text: "You unzip it.",
      nextIndex: 90,
    },
    {
      text: "Wrappers. Receipts. A leaking pen. A random pebble.",
      nextIndex: 91,
    },
    {
      text: "You sigh.",
      nextIndex: 92,
    },
    {
      text: "Maybe… it’s time to clean this mess.",
      nextIndex: 93,
    },
    {
      text: "Clean your bag?",
      choices: [
        {
          text: "Yes, I’ll clean it now",
          nextIndex: 94,
        },
        {
          text: "Not yet. Maybe another day.",
          nextIndex: 108,
        },
        {
          text: "I’ll just throw everything away",
          nextIndex: 111,
        },
      ],
    },
    {
      text: "You take everything out and lay them on the table.",
      nextIndex: 95,
    },
    {
      text: "One by one.",
      nextIndex: 96,
    },
    {
      text: "Old test paper. A quiz paper from weeks ago, full of doodles and red marks."
      , background: "/images/Day3/OldtestPaper-day3.PNG",
      choices: [
        {
          text: "Use the back as scratch paper.",
          nextIndex: 97,
        },
        {
          text: "Recycle it.",
          nextIndex: 97,
        },
        {
          text: "Tear it and throw it out.",
          nextIndex: 97,
        },
      ],
    },
    {
      text: "A pen that barely writes. It’s low on ink, but not empty yet.",
      choices: [
        {
          text: "Keep it. It still works..",
          nextIndex: 98,
        },
        {
          text: "Toss it. You have better pens.",
          nextIndex: 98,
        },
        {
          text: "Put it in your “almost-dead pens” pouch",
          nextIndex: 98,
        },
      ],
      background: "/images/Day3/Pen-day3.PNG"
    },
    {
      text: "A candy wrapper. Tiny. Almost nothing.",
      choices: [
        {
          text: "Bin it.",
          nextIndex: 99,
        },
        {
          text: "Stuff it into a side pocket — you’ll decide later.",
          nextIndex: 99,
        },
        {
          text: "Try folding it into a star. Just because.",
          nextIndex: 99,
        },
      ],
      background: "/images/Day3/CandyWrapper-day3.PNG"
    },
    {
      text: "The last thing you find is a pressed flower.",
      nextIndex: 100,
      background: "/images/Day3/PressedFlower-day3.PNG"
    },
    {
      text: "From when...?",
      nextIndex: 101,
    },
    {
      text: "You gently place it aside.",
      nextIndex: 102,
    },
    {
      text: "Not trash.",
      nextIndex: 103,
    },
    {
      text: "In the end, your bag feels different —",
      nextIndex: 104,
    },
    {
      text: "Still yours, but clearer.",
      nextIndex: 105,
    },
    {
      text: "So many little things inside — just like your day.",
      nextIndex: 106,
    },
    {
      text: "Messy. Funny. Heavy. Small.",
      nextIndex: 107,
    },
    {
      text: "But you kept what matters.",
      nextIndex: 116,
    },

    //Later Dialogue
    {
      text: "You look at the contents. Then zip it back up.",
      nextIndex: 109,
    },
    {
      text: "Later.",
      nextIndex: 110,
    },
    {
      text: " Maybe you’re too tired. Maybe you’re just used to it now.",
      nextIndex: 116,
    },

    //Throw Dialogue
    {
      text: "You empty the whole bag into the trash bin.",
      nextIndex: 112,
      background: "/images/Day3/TrashCan-day3.PNG"
    },
    {
      text: "Quick. Clean. Done.",
      nextIndex: 113,
    },
    {
      text: "But as you walk away, you pause.",
      nextIndex: 114,
    },
    {
      text: "Was that pen still working?",
      nextIndex: 115,
    },
    {
      text: "Was that pen still working? Too late now.",
      nextIndex: 116,
    },
    {
      text: "Now you’ve taken care of that, you finally eat and prepare for sleep.",
      nextIndex: 117,
      background: "/images/Day2/Bedroom-night.PNG"
    },
    {
      text: "Just like yesterday.",
      nextIndex: 118,
    },
    {
      text: "And the other day.",
      nextIndex: 119,
    },
    {
      text: "Tomorrow might be different.",
      nextIndex: 120,
    },
    {
      text: "Day 3: End.......",
    },
    

	




    
    
    
    
  ]}
/>

  
    </div>
  );
}