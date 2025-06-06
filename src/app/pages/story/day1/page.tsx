
"use client";

import React from "react";
import StoryPart from "@/components/ui/StoryPart";

export default function Page1() {
  return (
    <div>
      <StoryPart
  background="/images/white.jpg"
  onEndRedirect="/pages/story/day2"
  dialogues={[
    { text: "Let’s start the day bright — but not too bright. Remember, even little lights matter....", nextIndex: 1, background: "/images/white.jpg" },
    { text: "Welcome to “Berdeston”. You have been here since you were born, and this city shaped who you are.", nextIndex: 2, background: "/images/Day1/Bedroom.PNG" },
    { text: "You live with your mother who works tirelessly for you, because your father died of an unfortunate accident. Nevertheless, you grew up well taken care of by your mother.", nextIndex: 3 },
    { text: "The sound of your alarm clock wakes you up. It’s time to get ready for school.", nextIndex: 4 },
    { text: "You found a sticky note near your table beside your bed! It says…", nextIndex: 5 },
    { text: "“Good morning, Aya! I left early for work, and I won’t come back until midnight. You don’t have to wait for me. There’s food left from last night, don’t let it go to waste! Love, Mom.”", nextIndex: 6 },
    { text: "Another sticky note was beside it. It reads:", nextIndex: 7 },
    { text: "“Also, remember to turn the AC off - you always forget it!”", nextIndex: 8 },
    { text: "And so, you make your bed. Just before you go out, you realize that the AC is still on. Will you turn it off now?", nextIndex: 9 },
    {
      text: "Choose an action:",
      choices: [
        { text: "Yes.", nextIndex: 10, setState: { acOff: false } },
        { text: "Doesn't matter", nextIndex: 11, setState: { acOff: true } },
        { text: "No.", nextIndex: 12, setState: { acOff: true } },
      ],
    },
    { text: "You turn off the AC and go to the kitchen after closing the door.", nextIndex: 13, background: "/images/Day1/BedroomOpen.PNG" },
    { text: "You left without closing the AC and went straight to the kitchen after closing the door", nextIndex: 13, background: "/images/Day1/BedroomOpen.PNG" },
    { text: "You leave without turning off the AC and go straight to the kitchen after closing the door.", nextIndex: 13, background: "/images/Day1/BedroomOpen.PNG" },
    { text: "You arrive at the kitchen. It’s clean, almost as if someone took care of it before they left.", nextIndex: 14 },
    { text: "Opening the fridge, you found the leftovers your mother was talking about. It’s…", nextIndex: 15, background: "/images/Day1/Kitchen.PNG" },
    { text: "Salad (a caesar salad you’ve always wanted to eat!)", nextIndex: 16 },
    { text: "Chicken Curry (the chicken curry you love!)", nextIndex: 17 },
    { text: "Chopsuey (your favorite dish: Chopsuey!)", nextIndex: 18 },
    { text: "What will you eat this morning?", nextIndex: 19, music: "/music/i_dont_know.mp3" },
    {
      text: "Choose your meal:",
      choices: [
        { text: "Leftovers from last night.", nextIndex: 20, setState: { eatOuside: false } },
        { text: "Canned food.", nextIndex: 22, setState: { eatOuside: false } },
        { text: "Buy from the carinderia outside.", nextIndex: 24, setState: { eatOuside: true } },
      ],
    },
    { text: "Keeping in mind your mother’s reminders, you eat the leftovers from last night.", nextIndex: 21 },
    { text: "A short while after eating, you decide it’s time to get your towel and bath.", nextIndex: 26 },
    { text: "Not wanting to prepare and eat the leftovers, you decide to eat canned food.", nextIndex: 23 },
    { text: "A short while after eating, you decide it’s time to get your towel and bath.", nextIndex: 26 },
    { text: "Wanting something different, you decide to buy something else later along the road.", nextIndex: 25 },
    { text: "After deciding to eat outside, you decide it’s time to get your towel and bath.", nextIndex: 26 },
    { text: "You get in the bathroom, lightly sing while bathing, and finish.", nextIndex: 27 },
    { text: "You dry yourself off, get dressed in your uniform, and fix your hair in front of the mirror.", nextIndex: 28, background: "/images/Day1/home.PNG" },
    { text: "You glance at the clock—it’s getting late.", nextIndex: 29 },
    { text: "Before grabbing your bag, you take one last look around the house. It’s quiet… but warm.", nextIndex: 30 },
    { text: "You remember your mom’s note and smile a little.", nextIndex: 31 },
    { text: "Then, with everything ready, you take a deep breath and head for the door.", nextIndex: 32 },
    { text: "Before you leave however, you notice a door slightly open.", condition: (flags) => flags.acOff === true, nextIndex: 33, background: "/images/Day1/BedroomOpen.PNG" },
    {
      text: "Do you want to flip the switch?",
      condition: (flags) => flags.acOff === true,
      choices: [
        { text: "Yes.", nextIndex: 34},
        { text: "No", nextIndex: 35 },
      ],
    },
    { text: "You go near the door, and realize the reason why you left it open. You now turn off the AC and leave your home.", condition: (flags) => flags.acOff === true, nextIndex: 36 },
    { text: "The door stayed as is", condition: (flags) => flags.acOff === true, nextIndex: 36 },
    { text: "You step outside of your home.", nextIndex: 37, background: "/images/cloud-bg.png" },
    { text: "It’s a bright Monday morning.", nextIndex: 38 },
    { text: "You hear birds chirping, your neighbors cleaning their yards, and vehicles running. .", nextIndex: 39 },

    { text: "You then go to Nanay, a long-time carinderia owner in your neighborhood.", condition: (flags) => flags.eatOuside === true, nextIndex: 40, background: "/images/Day1/Karenderya.PNG" },

    { character: "/images/Characters/Silhouette-game.PNG",
      name: "Nanay",
      text: "Good morning Aya, what would you like to eat for today?.", condition: (flags) => flags.eatOuside === true, nextIndex: 41 },
    
    { character: "/images/Characters/Silhouette-game.PNG",
      name: "Nanay",
      text: "You take a good look at Nanay’s dishes for today.", condition: (flags) => flags.eatOuside === true, nextIndex: 42 },
    { 
      text: "Pork Sisig, Ginataang Langka, and her specialty: Chicken Pastil, all caught your eye.", condition: (flags) => flags.eatOuside === true, nextIndex: 43 },
    {
      text: "Have you chosen?",
      condition: (flags) => flags.eatOuside === true,
      choices: [
        { text: "Pork Sisig", nextIndex: 44, },
        { text: "Ginataang Langka", nextIndex: 46, },
        { text: "Chicken Pastil", nextIndex: 48, },
      ],
    },
    { text: "The savory Pork Sisig wins your palate for today.", nextIndex: 45, condition: (flags) => flags.eatOuside === true, },
    { character: "/images/Characters/Silhouette-game.PNG",
      name: "Nanay",
      text: "Okay, one Pork Sisig for Aya! That will be 60 pesos only.", nextIndex: 50, condition: (flags) => flags.eatOuside === true, },
    
    { text: "The sweet and creamy Langka excites your appetite today.", nextIndex: 47, condition: (flags) => flags.eatOuside === true, },
    { character: "/images/Characters/Silhouette-game.PNG",
      name: "Nanay",
      text: "Okay, one Ginataang Langka for Aya! That will be 45 pesos only.", nextIndex: 50, condition: (flags) => flags.eatOuside === true, },
    
    { text: "Nanay’s specialty can never let you down", nextIndex: 49, condition: (flags) => flags.eatOuside === true, },
    { character: "/images/Characters/Silhouette-game.PNG",
      name: "Nanay",
      text: "Okay, one Chicken Pastil for Aya! That will be 35 pesos only.", nextIndex: 50, condition: (flags) => flags.eatOuside === true, },
    
    { text: "After paying for the meal, you sit down on the nearest dining table you can find, and eat.", nextIndex: 51, condition: (flags) => flags.eatOuside === true, },
    { text: "You feel full.", nextIndex: 52, condition: (flags) => flags.eatOuside === true, },
    
    { text: "Before going, you thank Nanay again for the meal.", nextIndex: 53, condition: (flags) => flags.eatOuside === true, },
    
    { character: "/images/Characters/Silhouette-game.PNG",
      name: "Nanay",
      text: "No problem Aya. Take care!", nextIndex: 54, condition: (flags) => flags.eatOuside === true, },
    
    
    { text: "You start walking to the nearest bus stop and wait once you arrive.", nextIndex: 55, background: "/images/Day1/Busstop.PNG"},
    { text: "Suddenly your best friend, Eireen, greets you from afar.", nextIndex: 56 },
    {
      name: "Eireen",
      character: "/images/Characters/Eireen-game.PNG",
      text: "AYAAAAA!!! I’m so happy we’ll go to school together! Say, how about we sit behind Mr. Custard this time?",
      nextIndex: 57
    },
    { text: "You look at Eireen, seemingly agreeing.", nextIndex: 58 },
    {
      name: "Eireen",
      character: "/images/Characters/Eireen-game.PNG",
      text: "I’ll take that as a yes. There’s the bus! Let’s go and hope no one sat behind Mr. Custard!",
      nextIndex: 59
    },
    { text: "The two of you enter the bus and fortunately, the seats behind the bus driver are free.", nextIndex: 60, background: "/images/Day1/Inside-bus.PNG" },
    {
      name: "Eireen",
      character: "/images/Characters/Eireen-game.PNG",
      text: "Woohoo !! Look at this view! I missed this so much. Do you think so too, Aya?",
      nextIndex: 61
    },
    { text: "You nod.", nextIndex: 62 },
    {
      name: "Eireen",
      character: "/images/Characters/Eireen-game.PNG",
      text: "Well, school is around 20 minutes away, so I guess I’ll just doze off in the meantime.",
      nextIndex: 63
    },
    {
      name: "Eireen",
      character: "/images/Characters/Eireen-game.PNG",
      text: "Hehe, I only got 4 hours of sleep last night! Spent the whooole night studying for the science quiz later.",
      nextIndex: 64
    },
    {
      name: "Eireen",
      character: "/images/Characters/Eireen-game.PNG",
      text: "Was it about energy? I already forgot! Anyways, wake me up later when we’re near, okay? Good night!",
      nextIndex: 65
    },
    {
      text: "After a few minutes, you turn to Eireen only to find out she’s already asleep.",
      nextIndex: 66
    },
    
    {
      text: "As for you, you decide to wander your eyes around outside and inside the bus.",
      nextIndex: 67
    },
    {
      text: "Students like you were having their own conversations with their friends, while some were asleep like Eireen.",
      nextIndex: 68
    },
    {
      text: "You look back straight ahead.",
      nextIndex: 69
    },
    {
      text: "You did not notice it, but school was just around the corner. Suddenly, the bus driver spoke.",
      nextIndex: 70
    },
    {
      name: "Bus Driver",
      character: "/images/Characters/Silhouette-game.PNG",
      text: "Pack your things up kids! We’re going to be there in like 2 minutes!",
      nextIndex: 71
    },
    {
      text: "And so, you and Eireen prepare yourselves to get out of the bus, and for a brand new day of school.",
      nextIndex: 72
    },
    {
      name: "Bus Driver",
      character: "/images/Characters/Silhouette-game.PNG",
      text: "Okay, we’re here kids! Don’t cause a ruckus! Move slowly.",
      nextIndex: 73
    },
    {
      text: "You and Eireen were the first to get off the bus.",
      nextIndex: 74
    },
    {
      name: "Eireen",
      character: "/images/Characters/Eireen-game.PNG",
      text: "Thanks Mr. Custard! See you around!",
      nextIndex: 75
    },
    {
      name: "Mr. Custard",
      character: "/images/Characters/Silhouette-game.PNG",
      text: "Alright Eireen, see you and Aya around as well!",
      nextIndex: 76
    },
    {
      text: "Slowly, the other students emerge from the bus as well and head to their classrooms. You and Eireen also do the same.",
      nextIndex: 77
    },
    {
      text: "On the way to your classroom, you notice posters posted on the walls of the hallway.",
      nextIndex: 78,
      background: "/images/Day1/schoolHallway.PNG"
    },
    {
      text: "They read: “WATT YOU CAN DO: SAVE ENERGY, ONE CHOICE AT A TIME.”",
      nextIndex: 79
    },
    {
      name: "Eireen",
      character: "/images/Characters/Eireen-game.PNG",
      text: "Man, they’ve been using that slogan for 6 years, can they think of a new one?",
      nextIndex: 80
    },
    {
      text: "A person appears from the shadows.",
      nextIndex: 81
    },
    {
      name: "???",
      character: "/images/Characters/Silhouette-game.PNG",
      text: "If it ain’t broke, don’t fix it.",
      nextIndex: 82
    },
    {
      name: "Eireen",
      character: "/images/Characters/Eireen-game.PNG",
      text: "Oh! Hi Ray! You surprised me for a bit there, didn’t think you’d be wandering around here.",
      nextIndex: 83
    },
    {
      name: "Ray",
      character: "/images/Characters/Ray-game.PNG",
      text: "Hahaha okay I’m sorry. But what do you mean? I always wander around.",
      nextIndex: 84
    },
    {
      name: "Eireen",
      character: "/images/Characters/Eireen-game.PNG",
      text: "Yeah, but not alone!",
      nextIndex: 85
    },
    {
      name: "Ray",
      character: "/images/Characters/Ray-game.PNG",
      text: "Ah, you mean the others? They’ll be late, so that’s why I’m just walking around, waiting until classes start. How’s Aya doing?",
      nextIndex: 86
    },
    
    {
      name: "Eireen",
      character: "/images/Characters/Eireen-game.PNG",
      text: "She looks sooooo happy as usual. Very talkative too.",
      nextIndex: 87
    },
    {
      text: "You chuckle.",
      nextIndex: 88
    },
    {
      name: "Ray",
      character: "/images/Characters/Ray-game.PNG",
      text: "Good old Aya I guess, looks good to me haha. Oh well. Let’s go inside the classroom.",
      nextIndex: 89
    },
    {
      name: "Eireen",
      character: "/images/Characters/Eireen-game.PNG",
      text: "You betcha.",
      nextIndex: 90
    },
    {
      text: "The three of you arrive at the classroom, where all of your classmates are busy in their own circles. Some are studying, and some are just idling around waiting for your teacher to arrive.",
      nextIndex: 91,
      background: "/images/Day1/Classroom2.PNG"
    },
    {
      text: "The door opens.",
      nextIndex: 92
    },
    {
      name: "???",
      character: "/images/Characters/Silhouette-game.PNG",
      text: "Good morning class!",
      nextIndex: 93
    },
    {
      name: "Everyone",
      character: "/images/Characters/Silhouette-game.PNG",
      text: "Good morning, Sir Waffles!",
      nextIndex: 94
    },
    {
      name: "Sir Waffles",
      character: "/images/Characters/Waffles-game.PNG",
      text: "Okay. So as you may know, we have a short quiz about energy today. Is everybody ready?",
      nextIndex: 95
    },
    {
      text: "Everyone gave off a mixed reaction. While Sir Waffles was talking, the door opened.",
      nextIndex: 96
    },
    {
      name: "Sir Waffles",
      character: "/images/Characters/Waffles-game.PNG",
      text: "Aiya, why are you two late again?",
      nextIndex: 97
    },
    {
      name: "??? & ???",
      character: "/images/Characters/Silhouette-game.PNG",
      text: "Hehe, sorry sir.",
      nextIndex: 98
    },
    {
      name: "????",
      character: "/images/Characters/Silhouette-game.PNG",
      text: "We kinda forgot about class today.. We thought it was a Sunday!",
      nextIndex: 99
    },
    {
      name: "Sir Waffles",
      character: "/images/Characters/Waffles-game.PNG",
      text: "You always say that Laurie.",
      nextIndex: 100
    },
    {
      name: "????",
      character: "/images/Characters/Silhouette-game.PNG",
      text: "Actually… the truth is she just doesn’t want to go to school toda-",
      nextIndex: 101
    },
    {
      name: "Laurie",
      character: "/images/Characters/Laurie-game.PNG",
      text: "YEAH I think we’ll stop there haha….. (don’t snitch me off Fransette!)",
      nextIndex: 102
    },
    {
      name: "Fransette",
      character: "/images/Characters/Fransette-game.PNG",
      text: "(hehe, sorry!)",
      nextIndex: 103
    },
    {
      name: "Sir Waffles",
      character: "/images/Characters/Waffles-game.PNG",
      text: "Okay, that’s enough for you two. Last five minutes to review!",
      nextIndex: 104
    },
    {
      text: "Laurie and Fransette approach the three of you to ask about the quiz.",
      nextIndex: 105
    },
    {
      name: "Fransette",
      character: "/images/Characters/Fransette-game.PNG",
      text: "So guys… it’s just a short quiz right?",
      nextIndex: 106
    },
    
    {
      name: "Eireen",
      character: "/images/Characters/Eireen-game.PNG",
      text: "Yeah! I don’t even know why I stayed up late last night heh…",
      nextIndex: 107
    },
    {
      name: "Ray",
      character: "/images/Characters/Ray-game.PNG",
      text: "You watched Netflix last night. You even posted it on your story.",
      nextIndex: 108
    },
    {
      name: "Laurie",
      character: "/images/Characters/Laurie-game.PNG",
      text: "And I thought you studied.",
      nextIndex: 109
    },
    {
      name: "Eireen",
      character: "/images/Characters/Eireen-game.PNG",
      text: "Woops.. Sorry Aya! But I really did study last night!",
      nextIndex: 110
    },
    {
      name: "Fransette",
      character: "/images/Characters/Fransette-game.PNG",
      text: "Then we’ll count on you later then.",
      nextIndex: 111
    },
    {
      name: "Ray",
      character: "/images/Characters/Ray-game.PNG",
      text: "I’ll… do my best to help you guys not get caught.",
      nextIndex: 112
    },
    {
      name: "Eireen",
      character: "/images/Characters/Eireen-game.PNG",
      text: "Hey! Cheating is bad! Isn’t that right Aya?",
      nextIndex: 113
    },
    {
      name: "Laurie",
      character: "/images/Characters/Laurie-game.PNG",
      text: "It’s just a short quiz…",
      nextIndex: 114
    },
    {
      name: "Eireen",
      character: "/images/Characters/Eireen-game.PNG",
      text: "Well, whatever. Just don’t be obvious when looking at my paper okay !!",
      nextIndex: 115
    },
    {
      name: "Fransette",
      character: "/images/Characters/Fransette-game.PNG",
      text: "Oookay captain!",
      nextIndex: 116
    },
    {
      name: "Sir Waffles",
      character: "/images/Characters/Sir Waffles-game.PNG",
      text: "Time is up everyone! Get a ¼ sheet of paper.",
      nextIndex: 117
    },
    {
      name: "Fransette",
      character: "/images/Characters/Fransette-game.PNG",
      text: "Sir ¼?",
      nextIndex: 118
    },
    {
      text: "The classroom was filled with laughter.",
      nextIndex: 119
    },
    {
      name: "Sir Waffles",
      character: "/images/Characters/Waffles-game.PNG",
      text: "…. You’re not only late, but you’re also deaf. Yes, ¼ sheet of paper..",
      nextIndex: 120
    },
    {
      text: "Everyone chuckled.",
      nextIndex: 121
    },
    {
      name: "Sir Waffles",
      character: "/images/Characters/Waffles-game.PNG",
      text: "Okay, ready?",
      nextIndex: 122
    },
    {
      name: "Everyone",
      character: "/images/Characters/Silhouette-game.PNG",
      text: "Yessss!",
      nextIndex: 123
    },
    {
      text: "1. Which habit helps reduce electricity use at home?",
      choices: [
        { text: "A. Leaving lights on for safety", nextIndex: 124, setState: { Q1: false } },
        { text: "B. Turning the TV volume low", nextIndex: 124, setState: { Q1: false }  },
        { text: "C. Using appliances only when needed", nextIndex: 124, setState: { Q1: true }   }
        
      ]
    },
    {
      text: "2. What is a simple way to save energy during the daytime?",
      choices: [
        { text: "A. Turning on more lights", nextIndex: 125, setState: { Q2: false } },
        { text: "B. Opening windows and using natural light", nextIndex: 125,setState: { Q2: true } },
        { text: "C. Using a lamp even when it's bright", nextIndex: 125, setState: { Q2: false } }
      ]
    },
    {
      text: "3. What is phantom power (also known as standby power)?",
      choices: [
        { text: "A. Power used by ghosts in the grid", nextIndex: 126, setState: { Q3: false } },
        { text: "B. Energy lost from unplugged devices", nextIndex: 126, setState: { Q3: true } },
        { text: "C. Energy consumed by electronics plugged in but not in use", nextIndex: 126, setState: { Q3: false } }
      ]
    },
    {
      text: "4. Which device generally consumes the most electricity when left running for hours?",
      choices: [
        { text: "A. Air conditioner", nextIndex: 127, setState: { Q4: true } },
        { text: "B. Laptop", nextIndex: 127, setState: { Q4: false } },   
        { text: "C. Radio", nextIndex: 127, setState: { Q4: false } }
      ]
    },
    {
      text: "5. Why should you unplug your charger when not in use?",
      choices: [
        { text: "A. It makes your phone charge faster later", nextIndex: 128, setState: { Q5: false } },
        { text: "B. It saves energy and avoids phantom power", nextIndex: 128, setState: { Q5: true } },
        { text: "C. It helps the wall socket rest", nextIndex: 128, setState: { Q5: false } }
      ]
    },
    {
      name: "Sir Waffles",
      character: "/images/Characters/Waffles-game.PNG",
      text: "Alright, everybody done?",
      nextIndex: 129
    }, 
    {
      name: "Student",
      character: "/images/Characters/Silhouette-game.PNG",
      text: "Sir, can you repeat number 3 please?",
      nextIndex: 130
    },
    {
      name: "Sir Waffles",
      character: "/images/Characters/Waffles-game.PNG",
      text: "Alright. (Repeats number 3) Is that all?",
      nextIndex: 131
    },
    {
      name: "Everyone",
      character: "/images/Characters/Silhouette-game.PNG",
      text: "Yes sir!",
      nextIndex: 132
    },
    {
      name: "Sir Waffles",
      character: "/images/Characters/Waffles-game.PNG",
      text: "Okay, exchange papers with your seatmate.",
      nextIndex: 133
    },
    {
      text: "You exchange papers with Eireen, Laurie with Fransette, and Ray with Fransette, which is Laurie’s paper.",
      nextIndex: 134
    },
    {
      name: "Fransette",
      character: "/images/Characters/Fransette-game.PNG",
      text: "(Looks at Ray’s answers) Wait what? Is number 3 not A?",
      nextIndex: 135
    },
    {
      name: "Laurie",
      character: "/images/Characters/Laurie-game.PNG",
      text: "You are not graduating.",
      nextIndex: 136
    },
    {
      name: "Ray",
      character: "/images/Characters/Ray-game.PNG",
      text: "Yeah, no.",
      nextIndex: 137
    },
    {
      text: "While the students were busy exchanging and comparing their papers, Sir Waffles was writing the correct answers on the board.",
      nextIndex: 138
    },
    {
      name: "Sir Waffles",
      character: "/images/Characters/Waffles-game.PNG",
      text: "Eyes here everyone! Here are the correct answers.",
      nextIndex: 139
    },
    {
      text: "Written on the board were the letters: C, B, C, A and B.",
      nextIndex: 140
    },
    {
      name: "Ray",
      character: "/images/Characters/Ray-game.PNG",
      text: "Sweet, perfect score.",
      nextIndex: 141
    },
    {
      name: "Eireen",
      character: "/images/Characters/Eireen-game.PNG",
      text: "Same here! I’m glad I watched Netflix.",
      nextIndex: 142
    },
    {
      name: "Laurie",
      character: "/images/Characters/Laurie-game.PNG",
      text: "I got four out of five, not bad.",
      nextIndex: 143
    },
    {
      name: "Fransette",
      character: "/images/Characters/Fransette-game.PNG",
      text: "Erm… I only got one right….",
      nextIndex: 144
    },
    {
      name: "Laurie",
      character: "/images/Characters/Laurie-game.PNG",
      text: "Honestly, I’d be more surprised if you got half the score.",
      nextIndex: 145
    },
    {
      name: "Fransette",
      character: "/images/Characters/Fransette-game.PNG",
      text: "Shut up Laurie !!!",
      nextIndex: 146
    },
    {
      name: "Eireen",
      character: "/images/Characters/Eireen-game.PNG",
      text: "How about you Aya? How many did you get right?",
      nextIndex: 147
    },
    { character: "/images/Characters/Ray-game.PNG",
      name: "Ray",
      text: "As expected from Aya..",
       condition: (flags) => flags.Q1 === true && flags.Q2 === true && flags.Q3 === true && flags.Q4 === true && flags.Q5 === true, nextIndex: 148 },
    {
    character: "/images/Characters/Laurie-game.PNG",
    name: "Laurie",
    text: "This girl will graduate, unlike a certain someone.",
    condition: (flags) => flags.Q1 && flags.Q2 && flags.Q3 && flags.Q4 && flags.Q5,
    nextIndex: 149
    },
    {
    character: "/images/Characters/Fransette-game.PNG",
    name: "Fransette",
    text: "That’s definitely not me…",
    condition: (flags) => flags.Q1 && flags.Q2 && flags.Q3 && flags.Q4 && flags.Q5,
    nextIndex: 153
    },
    {
    character: "/images/Characters/Ray-game.PNG",
    name: "Ray",
    text: "Only a little more",
    nextIndex: 151
    },
    {
    character: "/images/Characters/Laurie-game.PNG",
    name: "Laurie",
    text: "You’ll still graduate though.",
    nextIndex: 152
    },
    {
    character: "/images/Characters/Fransette-game.PNG",
    name: "Fransette",
    text: "You can take my score and add it to yours! Hehe!",
    nextIndex: 153
    },
    {
      name: "Eireen",
      character: "/images/Characters/Eireen-game.PNG",
      text: "Well, enough of that. At least the quiz is over. Good job Aya!",
      nextIndex: 154
    },
    {
      name: "Sir Waffles",
      character: "/images/Characters/Waffles-game.PNG",
      text: "Okay, that is it for our meeting today. You guys still have classes until later but because our time is limited and the developers are restricting us, this is where we’ll dismiss our class. See you tomorrow!",
      nextIndex: 155
    },
    {
      name: "Everyone",
      character: "/images/Characters/Silhouette-game.PNG",
      text: "Goodbye Sir Waffles!",
      nextIndex: 156
    },
    {
      name: "Eireen",
      character: "/images/Characters/Eireen-game.PNG",
      text: "Hey Aya, let’s go! Let’s talk on the way out." ,
      nextIndex: 157,
      background: "/images/Day1/schoolHallway.PNG"
    },
    {
      name: "Ray",
      character: "/images/Characters/Ray-game.PNG",
      text: "I’ll be heading off. See you guys tomorrow!",
      nextIndex: 158
    },
    {
      name: "Laurie",
      character: "/images/Characters/Laurie-game.PNG",
      text: "See ya! We’ll be on our way as well. Take care guys!",
      nextIndex: 159
    },
    {
      text: "Everyone bidded farewell to their classmates and friends, and started to go home. While on the way outside, Eireen decided to talk to Aya about something.",
      nextIndex: 160
    },
    {
      name: "Eireen",
      character: "/images/Characters/Eireen-game.PNG",
      text: "Hey uh… about the quiz earlier. It kinda reminded me of our electric bill this month. When I first saw that, I was like—how did it amount to 3000-something pesos?",
      nextIndex: 161
    },
    {
      text: "The road ahead is calm, swept gently by the wind. You glance at Eireen, brows raised just slightly—a look that says, yeah... how did it?",
      nextIndex: 162
    },
    {
      name: "Eireen",
      character: "/images/Characters/Eireen-game.PNG",
      text: "The quiz kinda explained it, but I still don’t get how small things make such a big impact. It’s weird. Maybe I’ll try to do some crazy energy saving things—just to test it. Seems like a fun little experiment, don’t you think, Aya?",
      nextIndex: 163
    },
    {
      text: "You don’t reply. But the corner of your mouth lifts, just a bit. You don’t need to speak. Eireen gets it.",
      nextIndex: 164
    },
    {
      name: "Eireen",
      character: "/images/Characters/Eireen-game.PNG",
      text: "Then I can check whether I’m the problem— Is my leaving the fan on, significant? Does that computer that stayed plugged in all day matter?",
      nextIndex: 165
    },
    {
      name: "Eireen",
      character: "/images/Characters/Eireen-game.PNG",
      text: "Am I really using too much electricity? It’s so hot! The AC’s practically part of the family now. Maybe I should just go outside more.",
      nextIndex: 166
    },
    {
      text: "The breeze wraps around you both, gentle and passing. Eireen’s voice tapers off into thought. Her words are fast, but her mind is elsewhere.",
      nextIndex: 167
    },
    {
      name: "Eireen",
      character: "/images/Characters/Eireen-game.PNG",
      text: "But… yeah. Maybe I’m just thinking about this wayyy too much.",
      nextIndex: 168
    },
    {
      name: "Aya",
      character: "/images/Characters/Aya-game.PNG",
      text: "…What’s important is that you're learning.",
      nextIndex: 169
    },
    {
      text: "Softly spoken. Barely a sound. But Eireen hears it. She always does. For a second, she doesn’t speak. Just smiles—a little lost, a little found. The weight in her shoulders seems to ease.",
      nextIndex: 170
    },
    {
      name: "Eireen",
      character: "/images/Characters/Eireen-game.PNG",
      text: "Yeah, well… there’s the bus. Let’s go, Aya!", background: "/images/Day1/Busstop.PNG",
      nextIndex: 171
    },
    {
      text: "The bus pulls up with a soft screech, its headlights blinking like tired eyes. You both climb aboard.",
      nextIndex: 172
    },
    {
      text: "A few stops later, you bid farewell to Eireen.",
      nextIndex: 173,
      background: "/images/Day1/Inside-bus.PNG"
    },
    {
      name: "Eireen",
      character: "/images/Characters/Eireen-game.PNG",
      text: "See you tomorrow, Aya! Don’t forget—like I always do!",
      nextIndex: 174
    },
    {
      text: "You smile. Just a little. Not too much. But enough.",
      nextIndex: 175
    },
    {
      text: "You arrive home.",
      nextIndex: 176,
      background: "/images/Day1/home.PNG"
    },
    {
      text: "Your mother hasn’t come back yet, but you’re too tired to wait for her.",
      nextIndex: 177
    },
    {
      text: "After changing into your sleeping clothes, you sit down for a quick dinner, the quiet of the house settling around you.",
      nextIndex: 178,
      background: "/images/Day1/Kitchen.PNG"
    },
    {
      text: "As you eat, your mind drifts back to the quiz from earlier—the questions about energy and saving power.",
      nextIndex: 179
    },
    {
      text: "On a small impulse, you get up and start checking the power outlets around the room, unplugging devices you forgot were still plugged in.",
      nextIndex: 180
    },
    {
      text: "Thankfully, there are only a few.",
      nextIndex: 181
    },
    {
      text: "You tidy up the kitchen, wash your plate, and finally settle back, feeling the day’s weight in your bones.",
      nextIndex: 182
    },
    {
      text: "You decide it’s time to call it a day.",
      nextIndex: 183,
      background: "/images/Day1/Bedroom.PNG"
    },
    
    {
      text: "A new experience awaits.",
      nextIndex: 184
    },
    {
      text: "Day 1: End...................................... ",
    }
     
  ]}
/>  
    </div>
  );
}