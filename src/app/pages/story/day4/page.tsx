
"use client";

import React from "react";
import StoryPart from "@/components/ui/StoryPart";

export default function Page4() {
  return (
    <div>
      <StoryPart
  background="/images/white.jpg"
  onEndRedirect="/pages/story/day5"
  dialogues={[
    {text: "Day 4: Everything goes somewhere — make sure it goes where it should..........", nextIndex: 1, background: "/images/Day4/Bedroom-day4.PNG"},
    {text: "A brand new day… and this time, you’re not as groggy.", nextIndex: 2},
    {text: "It's starting to feel like muscle memory—", nextIndex: 3},
    {text: "The stillness of the house, the morning light, and the sticky note waiting for you.", nextIndex: 4},
    {text: "It reads: “Good morning, Aya. Let’s take care of what’s left behind. The world will thank you for it. <3”", nextIndex: 5},
    {text: "You eat the last bit of leftover adobo from the fridge.", nextIndex: 6},
    {text: "There’s not much, but enough.", nextIndex: 7},
    {text: "You clean up, take a shower, unplug what’s unused, and head out to the bus stop.", nextIndex: 8, background: "/images/Day3/Busstop-day3.PNG"},
    {text: "The sky’s clear. The neighborhood is quiet.", nextIndex: 9},
    {text: "Just the soft hum of tires on pavement as the bus arrives.", nextIndex: 10, background: "/images/Day2/School.PNG"},
    {text: "You arrive at school.", nextIndex: 11},
    {
      character: "/images/Characters/Waffles-game.PNG",
      name: "Sir Waffles",
      text: "Morning, morning! I hope you’re all not too tired from yesterday’s… Chill Guy.",
      nextIndex: 12,
      background: "/images/Day4/Classroom-day4.PNG"
    },
    {
      character: "/images/Characters/Silhouette-game.PNG",
      name: "Everyone",
      text: "(laughs)",
      nextIndex: 13,
    },
    {
      character: "/images/Characters/Waffles-game.PNG",
      name: "Sir Waffles",
      text: "Today we’re doing something simple, but important: a waste audit.",
      nextIndex: 14,
    },
    {
      character: "/images/Characters/Waffles-game.PNG",
      name: "Sir Waffles",
      text: "We'll go around the school in small groups and take note of what kinds of waste are most common—plastic, food, paper, that sort of thing.",
      nextIndex: 15,
    },
    {
      character: "/images/Characters/Waffles-game.PNG",
      name: "Sir Waffles",
      text: "No need to clean everything up, just… observe, tally, and reflect.",
      nextIndex: 16,
    },
    {
      character: "/images/Characters/Waffles-game.PNG",
      name: "Sir Waffles",
      text: "We’ll regroup and talk about what we saw.",
      nextIndex: 17,
    },
    {
      character: "/images/Characters/Fransette-game.PNG",
      name: "Fransette",
      text: "Does this mean we’re officially garbage inspectors?!",
      nextIndex: 18,
    },
    {
      character: "/images/Characters/Ray-game.PNG",
      name: "Ray",
      text: "We should get badges.",
      nextIndex: 19,
    },
    {
      character: "/images/Characters/Waffles-game.PNG",
      name: "Sir Waffles",
      text: "I’ll leave that to your creativity. Alright, groups of five!",
      nextIndex: 20,
    },
    {
      text: "You and the others head out with a clipboard and pen.",
      nextIndex: 21,
      background: "/images/Day4/SchoolGrounds-day4.PNG"
    },
    {
      text: "Around the school grounds, you notice the usual: Plastic wrappers stuffed between benches. A half-eaten sandwich under a tree. Crumpled worksheets near the canteen.",
      nextIndex: 22,
    },
    {
      character: "/images/Characters/Eireen-game.PNG",
      name: "Eireen",
      text: "I mean… this isn’t terrible, but it’s everywhere.",
      nextIndex: 23,
    },
    {
      character: "/images/Characters/Laurie-game.PNG",
      name: "Laurie",
      text: "Even the faculty lounge trash bin had takeout trays.",
      nextIndex: 24,
    },
    {
      character: "/images/Characters/Ray-game.PNG",
      name: "Ray",
      text: "I saw a full soda bottle just… sitting on top of the garbage can. Not in it. On it.",
      nextIndex: 25,
      background: "/images/Day4/Soda_garbageCan-day4.PNG"
    },
    {
      character: "/images/Characters/Fransette-game.PNG",
      name: "Fransette",
      text: "Hey I think that’s still drinkable!",
      nextIndex: 26,
    },
    {
      character: "/images/Characters/Ray-game.PNG",
      name: "Ray",
      text: "You want it?",
      nextIndex: 27,
    },
    {
      text: "Everyone laughs. But your eyes linger on the bottle.",
      nextIndex: 28,
    },
    {
      text: "What do you do about the soda bottle?",
      choices: [
        {
          text: "Pick it up and empty it properly.",
          nextIndex: 29,
        },
        {
          text: "Leave it—someone else will deal with it.",
          nextIndex: 30,
        },
        {
          text: "Suggest to Ray and Fransette that it should be reported as a pattern.",
          nextIndex: 31,
        },
      ],
    },

    {
      text: "You feel a little awkward, but at least it won’t end up spilling everywhere.",
      nextIndex: 32
    },
    {
      text: "You're not really in the mood to touch other people's trash.",
      nextIndex: 32
    },
    {
      text: "This keeps happening. It's not just about one bottle.",
      nextIndex: 32
    },
    {
      text: "You quietly jot it all down. One tally for each.",
      nextIndex: 33
    },
    {
      text: "When you all return to the classroom…",
      nextIndex: 34,
      background: "/images/Day4/Classroom-day4.PNG"
    },
    {
      character: "/images/Characters/Waffles-game.PNG",
      name: "Sir Waffles",
      text: "So—what did we learn?",
      nextIndex: 35
    },
    {
      character: "/images/Characters/Fransette-game.PNG",
      name: "Fransette",
      text: "That people throw like… 90% snack-related trash?",
      nextIndex: 36
    },
    {
      character: "/images/Characters/Ray-game.PNG",
      name: "Ray",
      text: "And most of it could’ve been avoided. Reusables, better planning, all that.",
      nextIndex: 37
    },
    {
      character: "/images/Characters/Waffles-game.PNG",
      name: "Sir Waffles",
      text: "Ray, Fransette—good observations.",
      nextIndex: 38
    },
    {
      character: "/images/Characters/Waffles-game.PNG",
      name: "Sir Waffles",
      text: "But you, Aya. What do you think?",
      nextIndex: 39
    },
    {
      text: "You weren’t expecting to be asked.",
      nextIndex: 40
    },
    {
      text: "This is a rare occurrence that you will speak.",
      nextIndex: 41
    },
    {
      text: "How do you respond?",
      choices: [
        {
          text: "“It’s all small things. But they pile up.”",
          nextIndex: 42
        },
        {
          text: "“Most people don’t even notice what they waste.”",
          nextIndex: 43
        },
        {
          text: "“It’s not just about what’s thrown away. It’s how people treat what they have.”",
          nextIndex: 44
        }
      ]
    },
    {
      text: "You keep your answer short, but honest.",
      nextIndex: 45
    },
    {
      text: "You sound a little sharper than you meant to.",
      nextIndex: 45
    },
    {
      text: "Your tone is thoughtful, and the class goes quiet for a moment.",
      nextIndex: 45
    },
    {
      character: "/images/Characters/Waffles-game.PNG",
      name: "Sir Waffles",
      text: "Exactly. Waste isn’t just what we throw away. It’s what we decide we can’t use anymore.",
      nextIndex: 46
    },
    {
      character: "/images/Characters/Waffles-game.PNG",
      name: "Sir Waffles",
      text: "Keep that in mind as you head home.",
      nextIndex: 47
    },
    {
      text: "On your way outside, a conversation is initiated by Eireen.",
      nextIndex: 48,
      background: "/images/Day1/schoolHallway.PNG"
    },
    {
      character: "/images/Characters/Eireen-game.PNG",
      name: "Eireen",
      text: "Hey, good job earlier.",
      nextIndex: 49
    },
    {
      character: "/images/Characters/Eireen-game.PNG",
      name: "Eireen",
      text: "Honestly I was a bit scared because I thought you weren’t going to answer Sir Waffles but…",
      nextIndex: 50
    },
    {
      character: "/images/Characters/Eireen-game.PNG",
      name: "Eireen",
      text: "You’re starting to talk more.",
      nextIndex: 51
    },
    {
      character: "/images/Characters/Eireen-game.PNG",
      name: "Eireen",
      text: "Keep that up, Aya.",
      nextIndex: 52
    },
    {
      character: "/images/Characters/Eireen-game.PNG",
      name: "Eireen",
      text: "Little things add up right?",
      choices: [
        {
          text: "“Yeah. They do.”",
          nextIndex: 53
        },
        {
          text: "(Stay quiet.)",
          nextIndex: 53
        }
      ]
    },
    {
      character: "/images/Characters/Eireen-game.PNG",
      name: "Eireen",
      text: "Yeah!! Let’s go home.",
      nextIndex: 54
    },
    {
      character: "/images/Characters/Eireen-game.PNG",
      name: "Eireen",
      text: "I figured. That’s the Aya I know!",
      nextIndex: 55
    },
    {
      text: "Your answer in class—it just came out.",
      nextIndex: 56,
      background: "/images/Day3/Roadsunset-day3.PNG"
    },
    {
      text: "You didn’t plan it. You rarely speak up.",
      nextIndex: 57
    },
    {
      text: "But maybe some things… are worth saying out loud.",
      nextIndex: 58
    },
    {
      text: "Later, at home, you open the door and see a new sticky note waiting on the fridge.",
      nextIndex: 59,
      background: "/images/Day1/Kitchen.PNG"
    },
    {
      text: "It reads:",
      nextIndex: 60
    },
    {
      text: "“One person’s trash can be another’s chance. Thanks for keeping your eyes open. <3”",
      nextIndex: 61
    },
    {
      text: "You set your bag down.",
      nextIndex: 62
    },
    {
      text: "It’s not much.",
      nextIndex: 63
    },
    {
      text: "But maybe it is."
      ,nextIndex: 64
    },
    {
      text: "Day 4 : End...................................... ",
    }

  ]}
/>
 
    </div>
  );
}