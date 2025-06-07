
"use client";

import React from "react";
import StoryPart from "@/components/ui/StoryPart";

export default function Page5() {
  return (
    <div>
      <StoryPart
  background="/images/classroom.png"
  onEndRedirect="/pages/story/day6   "
  dialogues={[
    {text: "It’s Saturday.", nextIndex: 1},
    { text: "Today feels different.", nextIndex: 2 },
    { text: "The air is cooler, and a quiet breeze slips through the window.", nextIndex: 3 },
    { text: "As expected, a note waits beside you. It reads:", nextIndex: 4 },
    { text: "“Good morning, sweetheart! I have a surprise for you outside.", nextIndex: 5 },
    { text: "I prepared your father’s old bike.", nextIndex: 6 },
    { text: "It still has a lot of life left in it—", nextIndex: 7 },
    { text: "Maybe it just needs someone gentle enough to try.”", nextIndex: 8 },
    { text: "Outside, leaning near the gate, is the old bike—helmet resting on the handlebar.", nextIndex: 9 },
    { text: "You remember it well.", nextIndex: 10 },
    { text: "Your father taught you how to ride using that very frame.", nextIndex: 11 },
    { text: "Just looking at it brings back the quiet sound of laughter, the wobble of early tries,", nextIndex: 12 },
    { text: "and the steadiness of someone always holding on.", nextIndex: 13 },
    { text: "You move through your morning routine.", nextIndex: 14 },
    { text: "Eat. Shower. Unplug. Prepare.", nextIndex: 15 },
    { text: "But just as you’re about to head out, your eyes land on the bike again.", nextIndex: 16 },
    { text: "You pause.", nextIndex: 17 },
    { text: "You set your things down.", nextIndex: 18 },
    { text: "You're not running late.", nextIndex: 19 },
    { 
      text: "Do you…", 
      choices: [
        { text: "Take the bike.", nextIndex: 20, setState: { takeBike: true } },
        { text: "Walk to the bus stop like usual.", nextIndex: 28, setState: { takeBike: false } }
      ]
    },


    {
      text: "You brought the bike.",
      nextIndex: 21
    },
    {
      text: "You put on the helmet and ride to your school.",
      nextIndex: 22
    },
    {
      text: "At school, your classmates are surprised to see you cycling.",
      nextIndex: 23
    },
    {
      name: "Ray",
      character: "/images/Characters/Ray-game.PNG",
      text: "Doing something different today, huh.",
      nextIndex: 24
    },
    {
      name: "Ray",
      character: "/images/Characters/Ray-game.PNG",
      text: "Our teacher’s different today, too.",
      nextIndex: 25
    },
    {
      name: "Eireen",
      character: "/images/Characters/Eireen-game.PNG",
      text: "Hey, I recognize that bike!",
      nextIndex: 26
    },
    {
      text: "You smile and chuckle, like greeting them a good morning.",
      nextIndex: 27
    },
    {
      text: "Shortly after, the three of you enter class.",
      nextIndex: 34
    },


    {
      text: "You continue with your routine.",
      nextIndex: 29
    },
    {
      text: "Riding the bike feels tiring, and riding the bus is more comfortable.",
      nextIndex: 30
    },
    {
      text: "At school, Eireen and Ray greet you.",
      nextIndex: 31
    },
    {
      name: "Eireen",
      character: "/images/Characters/Eireen-game.PNG",
      text: "Good morning Aya! Excited for today?",
      nextIndex: 32
    },
    {
      name: "Ray",
      character: "/images/Characters/Ray-game.PNG",
      text: "I think Ma’am Austline’s our teacher for today.",
      nextIndex: 33
    },
    {
      text: "You nod in excitement, and make your way to the classroom.",
      nextIndex: 34
    },


    {
      name: "Ms. Austline",
      character: "/images/Characters/Austline-game.PNG",
      text: "Don’t worry—no wrong answers.",
      nextIndex: 35,
    },
    {
      name: "Ms. Austline",
      character: "/images/Characters/Austline-game.PNG",
      text: " Bus? Car? Bike? Did anyone walk?",
      nextIndex: 36,
    },
    { 
      text: "Do you…", 
      choices: [
        { text: "(Raise your hand and quietly say, \"I biked.\")", nextIndex: 37 },
        { text: "Walk to the bus stop like usual.", nextIndex: 43 }
      ]
    },
    
    {
      name: "Ms. Austline",
      character: "/images/Characters/Austline-game.PNG",
      text: "Aya....thank you.",
      nextIndex: 38
    },
    {
      name: "Ms. Austline",
      character: "/images/Characters/Austline-game.PNG",
      text: "The bicycle is a gentle, brilliant way to move.",
      nextIndex: 39
    },
    {
      name: "Ms. Austline",
      character: "/images/Characters/Austline-game.PNG",
      text: "It takes effort, sure—but it gives something in return.",
      nextIndex: 40
    },
    {
      name: "Ms. Austline",
      character: "/images/Characters/Austline-game.PNG",
      text: "A little freedom. A little peace. And no emissions.",
      nextIndex: 41
    },
    {
      text: "Some students glance your way, surprised. A few nod. Eireen smiles.",
      nextIndex: 42
    },
    {
      name: "Ms. Austline",
      character: "/images/Characters/Austline-game.PNG",
      text: "We forget that the way we move can shape how we feel.",
      nextIndex: 57
    },
    
    
    {
      text: "There’s a pause. Then, Fransette speaks up from the second row.",
      nextIndex: 44
    },
    {
      name: "Fransette",
      character: "/images/Characters/Fransette-game.PNG",
      text: "I took the car today… with my dad.",
      nextIndex: 45
    },
    {
      name: "Fransette",
      character: "/images/Characters/Fransette-game.PNG",
      text: "But it’s super traffic on Fridays.",
      nextIndex: 46
    },
    {
      name: "Fransette",
      character: "/images/Characters/Fransette-game.PNG",
      text: "I wish we could bike like we used to.",
      nextIndex: 47
    },
    {
      name: "Ma’am Austline",
      character: "/images/Characters/Ma’amAustline-game.PNG",
      text: "Thank you, Fransette. That’s honest.",
      nextIndex: 48
    },
    {
      name: "Ma’am Austline",
      character: "/images/Characters/Ma’amAustline-game.PNG",
      text: "Sometimes we know better, but it’s not always easy.",
      nextIndex: 49
    },
    {
      name: "Ma’am Austline",
      character: "/images/Characters/Ma’amAustline-game.PNG",
      text: "What matters is that we start noticing.",
      nextIndex: 50
    },
    {
      text: "She looks at the board again, then back to the class.",
      nextIndex: 51
    },
    {
      name: "Ma’am Austline",
      character: "/images/Characters/Ma’amAustline-game.PNG",
      text: "We move through the world every day—but how often do we stop to ask how?",
      nextIndex: 52
    },
    {
      text: "The bell rings for lunch.",
      nextIndex: 53
    },
    {
      text: "As you pack your things, Ma’am Austline delivers one final message:",
      nextIndex: 54
    },
    {
      name: "Ma’am Austline",
      character: "/images/Characters/Ma’amAustline-game.PNG",
      text: "While you eat, think about this—",
      nextIndex: 55
    },
    {
      name: "Ma’am Austline",
      character: "/images/Characters/Ma’amAustline-game.PNG",
      text: "How far did your lunch travel?",
      nextIndex: 56
    },
    {
      name: "Ma’am Austline",
      character: "/images/Characters/Ma’amAustline-game.PNG",
      text: "And when you travel this weekend, could you do it differently?",
      nextIndex: 57
    },
    

    {
      text: "At lunch, the conversation shifts from carbon footprints to weekend plans.",
      nextIndex: 58
    },
    {
      name: "Eireen",
      character: "/images/Characters/Eireen-game.PNG",
      text: "Hey… it’s Saturday tomorrow, right?",
      nextIndex: 59
    },
    {
      name: "Laurie",
      character: "/images/Characters/Laurie-game.PNG",
      text: "Finally…",
      nextIndex: 60
    },
    {
      name: "Fransette",
      character: "/images/Characters/Fransette-game.PNG",
      text: "Let’s go somewhere! Maybe the eco-park?",
      nextIndex: 61
    },
    {
      name: "Ray",
      character: "/images/Characters/Ray-game.PNG",
      text: "If we all bring bikes, it’s basically zero emissions, right?",
      nextIndex: 62
    },
    {
      condition: (flags) => flags.takeBike === true,
      name: "Eireen",
      character: "/images/Characters/Eireen-game.PNG",
      text: "(grinning at you) Aya, you’re bringing yours, right?",
      nextIndex: 63
    },
    {
      condition: (flags) => flags.takeBike === true,
      text: "You hesitate for a second.",
      nextIndex: 64
    },
    {
      condition: (flags) => flags.takeBike === true,
      text: "Your father’s bike… it held up well this morning.",
      nextIndex: 65
    },
    {
      condition: (flags) => flags.takeBike === true,
      text: "And it felt surprisingly easy. Peaceful, even.",
      nextIndex: 70
    },
    {
      name: "Eireen",
      character: "/images/Characters/Eireen-game.PNG",
      text: "(grinning at you) Aya, how about you? Don’t you have a bike?",
      nextIndex: 67
    },
    {
      text: "Right.",
      nextIndex: 68
    },
    {
      text: "Eireen’s your best friend, of course she knows.",
      nextIndex: 69
    },
    {
      text: "It just so happens to be the perfect timing your mother brought it out.",
      nextIndex: 70
    },
    {
      text: "Do you say…",
      choices: [
        {
          text: "“Yeah, I’ll bring it.”",
          nextIndex: 71
        },
        {
          text: "“Maybe. If it doesn’t rain.”",
          nextIndex: 71
        },
        {
          text: "(Just smile and nod.)",
          nextIndex: 71
        }
      ]
    },
    {
      name: "Ray",
      character: "/images/Characters/Ray-game.PNG",
      text: "Awesome. Let’s pack snacks too. And no plastic, please. I’ll judge.",
      nextIndex: 72
    },
    {
      text: "You all laugh.",
      nextIndex: 73
    },
    {
      text: "It’s a plan now.",
      nextIndex: 74
    },
    {
      text: "The bell rings, and you all go back to class.",
      nextIndex: 75
    },
    {
      text: "After a while, classes were dismissed and everyone was going home.",
      nextIndex: 76
    },
    {
      name: "Eireen",
      character: "/images/Characters/Eireen-game.PNG",
      text: "Don’t forget, tomorrow yeah?",
      nextIndex: 77
    },
    
    {
      name: "Ray",
      character: "/images/Characters/Ray-game.PNG",
      text: "Okay.",
      nextIndex: 78
    },
    {
      name: "Laurie",
      character: "/images/Characters/Laurie-game.PNG",
      text: "Yeah, yeah.",
      nextIndex: 79
    },
    {
      name: "Fransette",
      character: "/images/Characters/Fransette-game.PNG",
      text: "Can’t wait mannn!",
      nextIndex: 80
    },
    {
      name: "Eireen",
      character: "/images/Characters/Eireen-game.PNG",
      text: "Alright, see y’all tomorrow!",
      nextIndex: 81
    },
    {
      text: "You and Eireen bid farewell to the three of them and make your way outside too.",
      nextIndex: 82
    },
    
    {
      condition: (flags) => flags.takeBike === true,
      text: "The two of you approach the bike, appreciating its beauty and remembering the past.",
      nextIndex: 83
    },
    {
      condition: (flags) => flags.takeBike === true,
      name: "Eireen",
      character: "/images/Characters/Eireen-game.PNG",
      text: "Man… this bike was your father’s, right?",
      nextIndex: 84
    },
    {
      condition: (flags) => flags.takeBike === true,
      name: "Eireen",
      character: "/images/Characters/Eireen-game.PNG",
      text: "His bike is in good hands still,",
      nextIndex: 85
    },
    {
      condition: (flags) => flags.takeBike === true,
      name: "Eireen",
      character: "/images/Characters/Eireen-game.PNG",
      text: "And I hope he’s in a better place.",
      nextIndex: 86
    },
    {
      condition: (flags) => flags.takeBike === true,
      text: "After a few moments of silence, you decide to ride your bike.",
      nextIndex: 87
    },
    {
      condition: (flags) => flags.takeBike === true,
      name: "Aya",
      text: "See you tomorrow.",
      nextIndex: 88
    },
    {
      condition: (flags) => flags.takeBike === true,
      name: "Eireen",
      character: "/images/Characters/Eireen-game.PNG",
      text: "Huh? O-oh yeah… See you Aya!",
      nextIndex: 89
    },
    {
      condition: (flags) => flags.takeBike === true,
      text: "And so, you pedal your way home.",
      nextIndex: 90
    },
    {
      condition: (flags) => flags.takeBike === true,
      text: "You get home, drop your bag by the door, and head to the kitchen.",
      nextIndex: 91
    },
    {
      condition: (flags) => flags.takeBike === true,
      text: "There’s leftover food in the fridge—still fine. You eat, wash up, then head to your room.",
      nextIndex: 92
    },
    {
      condition: (flags) => flags.takeBike === true,
      text: "You scroll on your phone for a bit.",
      nextIndex: 93
    },
    {
      condition: (flags) => flags.takeBike === true,
      text: "Mostly half-looking at things.",
      nextIndex: 94
    },
    {
      condition: (flags) => flags.takeBike === true,
      text: "But your mind’s somewhere else.",
      nextIndex: 95
    },
    {
      condition: (flags) => flags.takeBike === true,
      text: "Your eyes land on the bike helmet sitting on the desk.",
      nextIndex: 96
    },
    {
      condition: (flags) => flags.takeBike === true,
      text: "You forgot you brought it in.",
      nextIndex: 97
    },
    
    {
      condition: (flags) => flags.takeBike === true,
      text: "You pick it up, turn it over in your hands.",
      nextIndex: 98
    },
    {
      condition: (flags) => flags.takeBike === true,
      text: "It’s old, but solid.",
      nextIndex: 99
    },
    {
      condition: (flags) => flags.takeBike === true,
      text: "You smile to yourself, just a little.",
      nextIndex: 100
    },
    {
      condition: (flags) => flags.takeBike === true,
      text: "Tomorrow’s gonna be different.",
      nextIndex: 101
    },
    {
      condition: (flags) => flags.takeBike === true,
      text: "Something to look forward to.",
      nextIndex: 102
    },
    {
      condition: (flags) => flags.takeBike === true,
      text: "You set the helmet down.",
      nextIndex: 103
    },
    {
      condition: (flags) => flags.takeBike === true,
      text: "Then lie back on the bed.",
      nextIndex: 104
    },
    {
      condition: (flags) => flags.takeBike === true,
      text: "“Maybe it’ll be fun.”",
      nextIndex: 105
    },
    {
      condition: (flags) => flags.takeBike === true,
      text: "You hope it’ll be fun.",
      nextIndex: 106
    },
    
    
    {
      text: "The two of you wait at the bus stop, and chat about tomorrow.",
      nextIndex: 107
    },
    {
      name: "Eireen",
      character: "/images/Characters/Eireen-game.PNG",
      text: "Hey, it’s your father’s bike right?",
      nextIndex: 108
    },
    {
      name: "Eireen",
      character: "/images/Characters/Eireen-game.PNG",
      text: "It’s nice that I’ll get to see it again.",
      nextIndex: 109
    },
    {
      name: "Eireen",
      character: "/images/Characters/Eireen-game.PNG",
      text: "Aren't you excited?",
      nextIndex: 110
    },
    {
      text: "Of course you are.",
      nextIndex: 111
    },
    {
      text: "You get to ride a bike again, it’s your father’s too.",
      nextIndex: 112
    },
    {
      name: "Eireen",
      character: "/images/Characters/Eireen-game.PNG",
      text: "Well, here’s the bus. Let’s go!",
      nextIndex: 113
    },
    {
      text: "You both board the bus, and patiently wait to arrive at your homes.",
      nextIndex: 114
    },
    {
      text: "Nearing yours, Eireen woke up to your efforts.",
      nextIndex: 115
    },
    {
      name: "Aya",
      text: "Let’s have fun tomorrow.",
      nextIndex: 116
    },
    {
      name: "Eireen",
      character: "/images/Characters/Eireen-game.PNG",
      text: "W-what? Yeah..! Of course. See ya!",
      nextIndex: 117
    },
    
    {
      text: "Eireen was startled. But nevertheless, she appreciates your words.",
      nextIndex: 118
    },
    {
      text: "You get home, drop your bag by the door, and head to the kitchen.",
      nextIndex: 119
    },
    {
      text: "There’s leftover food in the fridge—still fine. You eat, wash up, then head to your room.",
      nextIndex: 120
    },
    {
      text: "You scroll on your phone for a bit.",
      nextIndex: 121
    },
    {
      text: "Mostly half-looking at things.",
      nextIndex: 122
    },
    {
      text: "But your mind’s somewhere else.",
      nextIndex: 123
    },
    {
      text: "You remember the bike outside.",
      nextIndex: 124
    },
    {
      text: "You didn’t ride it this morning—maybe it felt too sudden.",
      nextIndex: 125
    },
    {
      text: "But it’s there. Waiting.",
      nextIndex: 126
    },
    {
      text: "And tomorrow feels like the right time.",
      nextIndex: 127
    },
    {
      text: "You smile to yourself, just a little.",
      nextIndex: 128
    },
    {
      text: "Tomorrow’s gonna be different.",
      nextIndex: 129
    },
    {
      text: "Something to look forward to.",
      nextIndex: 130
    },
    {
      text: "You roll onto your side and pull the blanket over you.",
      nextIndex: 131
    },
    {
      text: "And stare at the ceiling.",
      nextIndex: 132
    },
    {
      text: "“Maybe it’ll be fun.”",
      nextIndex: 133
    },
    {
      text: "You hope it’ll be fun.",
      nextIndex: 134
    }
    
 
  
  ]}
/>

  
    </div>
  );
}