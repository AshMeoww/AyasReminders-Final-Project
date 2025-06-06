
"use client";

import React from "react";
import StoryPart from "@/components/ui/StoryPart";

export default function Page6() {
  return (
    <div>
      <StoryPart
  background="/images/white.jpg"
  onEndRedirect="/pages/story/day7"
  dialogues={[
    {text: "Day 6: Kind words can grow greener things.........", nextIndex: 1, background: "/images/white.jpg"},
    {text: "It’s Saturday.", nextIndex: 2},
    {text: "The sun’s already out, but the air’s still cool.", nextIndex: 3, background: "/images/Day6/Garage-bike-day6.PNG"},
    {text: "You haven’t even changed yet, but you’re already looking outside.", nextIndex: 4},
    {text: "The bike’s waiting—", nextIndex: 5},
    {text: "and today, so are your friends.", nextIndex: 6},
    {text: "You get ready, pack some water, and leave a small note on the table:", nextIndex: 7},
    {text: "\"Going out for a while. Will be safe.\"", nextIndex: 8},
    {text: "You head out.", nextIndex: 9},

    {text: "Morning light warms the town park as you arrive.", nextIndex: 10, background: "/images/Day6/Townpark-day6.PNG"},
    {text: "You arrive at the meeting spot.", nextIndex: 11},

    {
    character: "/images/Characters/Ray-game.PNG",
    name: "Ray",
    text: "Ray’s already there, messing with his brakes.",
    nextIndex: 12,
    },
    {
    character: "/images/Characters/Fransette-game.PNG",
    name: "Fransette",
    text: "Fransette’s waving from a bench.",
    nextIndex: 13,
    },
    {
    character: "/images/Characters/Laurie-game.PNG",
    name: "Laurie",
    text: "Laurie’s got sunglasses on for some reason.",
    nextIndex: 14,
    },
    {
    character: "/images/Characters/Eireen-game.PNG",
    name: "Eireen",
    text: "Eireen greets you with her usual grin.",
    nextIndex: 15,
    },

    {
    character: "/images/Characters/Eireen-game.PNG",
    name: "Eireen",
    text: "You made it!! And you brought the bike!",
    nextIndex: 16,
    },
    {
    character: "/images/Characters/Fransette-game.PNG",
    name: "Fransette",
    text: "Group ride let’s goooo!",
    nextIndex: 17,
    },
    {
    character: "/images/Characters/Laurie-game.PNG",
    name: "Laurie",
    text: "Can we please get food first? I skipped breakfast.",
    nextIndex: 18,
    },
    {
    character: "/images/Characters/Ray-game.PNG",
    name: "Ray",
    text: "Let’s do a chill loop around first. Warm-up lang.",
    nextIndex: 19,
    },
    {
        text: "How do you spend the first hour?",
        choices: [
          { text: "Ride quietly and enjoy the breeze.", nextIndex: 20 },
          { text: "Chat with Eireen while riding.", nextIndex: 21 },
          { text: "Try to keep up with Ray and race a little.", nextIndex: 23 },
        ],
      },
      
      // Choice 1 Outcome – Ride quietly
      {
        text: "You keep to yourself, just feeling the rhythm of the road and the wind. Peaceful.",
        nextIndex: 25,
      },
      
      // Choice 2 Outcome – Chat with Eireen
      {
        character: "/images/Characters/Eireen-game.PNG",
        name: "Eireen",
        text: "So glad we’re all out like this.",
        nextIndex: 22,
      },
      {
        text: "You talk about the past week… and how today feels like a small reward.",
        nextIndex: 25,
      },
      
      // Choice 3 Outcome – Race with Ray
      {
        character: "/images/Characters/Ray-game.PNG",
        name: "Ray",
        text: "Oho? You wanna go?",
        nextIndex: 24,
      },
      {
        text: "You try to match his pace. You don’t win—but it’s fun.",
        nextIndex: 25,
      },
      
      // Rejoin after choice
      {
        text: "After a few loops and stops for water…",
        nextIndex: 26,
      },
      {
        character: "/images/Characters/Laurie-game.PNG",
        name: "Laurie",
        text: "Hey! Let’s play a game. Trivia time! Like that lesson on Day 1.",
        nextIndex: 27,
      },
      {
        character: "/images/Characters/Fransette-game.PNG",
        name: "Fransette",
        text: "Oh no, school follow-up?!",
        nextIndex: 28,
      },
      {
        character: "/images/Characters/Ray-game.PNG",
        name: "Ray",
        text: "C’mon, make it fun. Winner gets… first dibs on snacks.",
        nextIndex: 29,
      },
      {
        character: "/images/Characters/Eireen-game.PNG",
        name: "Eireen",
        text: "Let’s go! Aya, you're in too.",
        nextIndex: 30,
      },
      
      // Trivia Time
      {
        text: "[TRIVIA TIME – GROUP QUIZ] They gather under a tree and take turns asking questions. Each player gets one right—until it’s your turn.",
        nextIndex: 31,
      },
      {
        text: "Question:\nWhich of the following contributes the least to household water waste?",
        choices: [
          { text: "A. Leaving the faucet on while brushing", nextIndex: 32 },
          { text: "B. Taking 15-minute showers", nextIndex: 32 },
          { text: "C. Fixing a leaky pipe", nextIndex: 34 },
          { text: "D. Using a hose to clean driveways", nextIndex: 32 },
        ],
      },
      
      // Incorrect answer path
      {
        character: "/images/Characters/Laurie-game.PNG",
        name: "Laurie",
        text: "Nope! Leaky pipe was the trick one.",
        nextIndex: 33,
      },
      {
        character: "/images/Characters/Eireen-game.PNG",
        name: "Eireen",
        text: "We’ll get you on the next one, Aya.",
        nextIndex: 36,
      },
      
      // Correct answer path
      {
        character: "/images/Characters/Ray-game.PNG",
        name: "Ray",
        text: "Yo, she’s right!",
        nextIndex: 35,
      },
      {
        character: "/images/Characters/Fransette-game.PNG",
        name: "Fransette",
        text: "The leak one! Tiny drip, big waste!",
        nextIndex: 36,
      },
      
      // Wrap up
      {
        text: "The game goes on for a while. You laugh, snack, and get mildly competitive.",
        nextIndex: 37,
      },
      {
        text: "You laugh, snack, and get mildly competitive.",
        nextIndex: 38,
      },
      {
        text: "You all pass by a shaded rest area—but it’s littered with wrappers and plastic bottles.",
        nextIndex: 39,
        background: "/images/Day6/Area-with-trash-day6.PNG"
      },
      {
        character: "/images/Characters/Eireen-game.PNG",
        name: "Eireen",
        text: "Ugh. People can be so careless.",
        nextIndex: 40
      },
      {
        text: "[What do you do?]",
        choices: [
          { text: "Suggest cleaning it up together.", nextIndex: 41 },
          { text: "Quietly pick some up without saying anything.", nextIndex: 42 },
          { text: "Ignore it—it’s not yours.", nextIndex: 43 },
        ]
      },
      
      // Choice 1: Suggest cleaning
      {
        character: "/images/Characters/Aya-game.PNG",
        name: "Aya",
        text: "Let’s clean this.",
        nextIndex: 42
      },
      {
        text: "And to your surprise, everyone agrees.",
        nextIndex: 43
      },
      {
        text: "Small gesture. Big impact.",
        nextIndex: 49
      },
      
      // Choice 2: Quietly clean
      {
        text: "You start picking up trash without a word.",
        nextIndex: 45
      },
      {
        text: "One by one, the others follow.",
        nextIndex: 49
      },
      
      // Choice 3: Ignore it
      {
        text: "You sit nearby.",
        nextIndex: 47
      },
      {
        text: "It’s not yours, but it bothers you.",
        nextIndex: 48
      },
      {
        text: "Maybe next time.",
        nextIndex: 49
      },
      
      // Scene: Golden Afternoon
      {
        text: "Golden Afternoon, You all settle on a hillside.\nBikes laid down on the grass.\nSun hitting the leaves just right.",
        nextIndex: 50
        ,background: "/images/Day6/Hillside-bikes-day6.PNG"
      },
      {
        text: "Bikes laid down on the grass.\nSun hitting the leaves just right.",
        nextIndex: 51
      },
      {
        character: "/images/Characters/Ray-game.PNG",
        name: "Ray",
        text: "This… was actually a really good idea.",
        nextIndex: 52
      },
      {
        character: "/images/Characters/Laurie-game.PNG",
        name: "Laurie",
        text: "Okay, I forgive you all for dragging me out of bed.",
        nextIndex: 53
      },
      {
        character: "/images/Characters/Fransette-game.PNG",
        name: "Fransette",
        text: "Can we do this again next week? Or like, monthly?",
        nextIndex: 54
      },
      {
        character: "/images/Characters/Eireen-game.PNG",
        name: "Eireen",
        text: "I’m glad we’re all here.",
        nextIndex: 55
      },
      {
        text: "You’re glad, too.",
        nextIndex: 56
      },
      {
        text: "As everyone prepares to leave",
        nextIndex: 57
      },
      {
        text: "What do you say?",
        choices: [
          { text: "\"Let’s do this again.\"", nextIndex: 58 },
          { text: "Just smile and nod.", nextIndex: 59 },
          { text: "\"Next time… we bring more snacks.\"", nextIndex: 60 }
        ]
      },
      
      // Choice 1: “Let’s do this again.”
      {
        text: " Everyone agrees, excitedly.",
        nextIndex: 59
      },
      {
        text: "Plans are already being made.",
        nextIndex: 63
      },
      
      // Choice 2: Just smile and nod.
      {
        text: "They understand your silence.",
        nextIndex: 61
      },
      {
        text: "It’s a quiet agreement.",
        nextIndex: 63
      },
      
      // Choice 3: “Next time… we bring more snacks.”
      {
        character: "/images/Characters/Fransette-game.PNG",
        name: "Fransette",
        text: "YES. Finally, someone gets it!!",
        nextIndex: 63
      },
      
      // Closing Narration
      {
        text: "You ride home slowly.",
        nextIndex: 64
        , background: "/images/Day6/Townpark-sunset-day6.PNG"
      },
      {
        text: "The wind’s soft on your face.",
        nextIndex: 65
      },
      {
        text: "Your legs ache, but your heart is light.",
        nextIndex: 66
      },
      {
        text: "And somehow… the world feels a little gentler today.",
        nextIndex: 67
      },
      {
        text: "Day 6: End...................................... ",
      }
      
      
      

      

  ]}
/>
    </div>
  );
}