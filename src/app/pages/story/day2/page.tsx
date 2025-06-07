"use client";

import React from "react";
import StoryPart from "@/components/ui/StoryPart";

export default function Page2() {
  return (
    <div>
      <StoryPart
        background="/images/white.jpg"
        onEndRedirect="/pages/story/day3"
        dialogues={[
          { text: "", nextIndex: 1 },
          { text: "It’s Tuesday! You wake up with a brand new sticky note beside you. It reads:", nextIndex: 2, background: "/images/Day1/Bedroom.PNG" },
          { text: "“I hope you had a great night's sleep sweetheart! I bought new toothbrushes yesterday so you can replace yours. It’s already been 3 months since you used that! As always, take care Aya <3”", nextIndex: 3 },
          { text: "Another one reads: “Every drop adds up — let it run and that's 50 pesos down the drain. Love, Mom 💧”", nextIndex: 4 },
          { text: "As usual, you make your bed and turn off the AC and lights before you go to the kitchen. On the kitchen table, you notice three toothbrushes - each with a different color.", nextIndex: 5 , background: "/images/Day2/3toothbrushes.PNG"},
          { text: "What will you pick?", nextIndex: 6 },
          {
            text: "Choose your toothbrush:",
            choices: [
              { text: "Blue", nextIndex: 7, setState: { blue : true } },
              { text: "Green", nextIndex: 8, setState: { green : true } },
              { text: "White", nextIndex: 9, setState: { white : true } },
            ],
          },
          { text: "You chose Blue.", nextIndex: 10, background: "/images/Day2/Toothpaste-toothbrush-blue.PNG" },
          { text: "You chose Green.", nextIndex: 10, background: "/images/Day2/Toothpaste-toothbrush-green.PNG" },
          { text: "You chose White.", nextIndex: 10, background: "/images/Day2/Toothpaste-toothbrush-white.PNG" },

          {
            text: "Before brushing your teeth, you check the fridge. Fortunately, your mother left you something. The sticky note on it reads: “Here’s your breakfast for today. Eat well :)”. It’s still warm — almost like she just made it. You enjoy the pancakes made by your mother. After eating, you pour yourself a glass of water. It's...",
            nextIndex: 11,
            background: "/images/Day1/kitchen.PNG"
          },
          {
            text: "How full is your glass?",
            choices: [
              { text: "Filled to the brim", nextIndex: 12 },
              { text: "Half full", nextIndex: 17 },
            ],
          },

          // Filled to the brim branch
          {
            text: "Some water drops, and you start drinking it. You did not finish it however. Will you continue drinking it?",
            nextIndex: 13,
            background: "/images/Day2/Water-Full.PNG"
          },
          {
            text: "Will you keep drinking?",
            choices: [
              { text: "Yes", nextIndex: 14, setState: { leftGlass : false } },
              { text: "Later", nextIndex: 15, setState: { leftGlass : true } },
              { text: "No", nextIndex: 16, setState: { leftGlass : false } },
            ],
          },
          { text: "Your tummy feels weird - you can feel the water.", nextIndex: 18 }, // after Yes
          { text: "You’ll come back for it later.", nextIndex: 18 },  
          { text: "You decide to throw it in the sink.", nextIndex: 18 },                // after Later or No

          // Half full branch
          { text: "You drank what you put in. Not a single drop was wasted.", nextIndex: 18,background: "/images/Day2/Water-half.PNG" },

          { text: "After finishing breakfast, you now get ready to take a bath. You prepare your school uniform for later, take your towel, and get in the bathroom. There’s still water in the pail, what will you do?", nextIndex: 19, background: "/images/Day2/Bathroom-pail.PNG" },
          {
            text: "What will you do with the water in the pail?",
            choices: [
              { text: "Keep it", nextIndex: 20 },
              { text: "Throw it", nextIndex: 21 },
            ],
          },
          { text: "You fill the pail without throwing the water away.", nextIndex: 22 },
          { text: "You throw the water away and fill the pail with new water.", nextIndex: 22 },

          { text: "As the water runs, you take a bath. You notice the pail is nearly overflowing, so you think about what you’ll do.", nextIndex: 23,background: "/images/Day2/Bathroom-pail-overflow.PNG" },
          {
            text: "How do you manage the running water?",
            choices: [
              { text: "Let the water run", nextIndex: 24 },
              { text: "Turn the faucet off", nextIndex: 25 },
              { text: "Reduce the water flow", nextIndex: 26 },
            ],
          },
          { text: "As you see the overflowing pail, you feel a bit uneasy. Something inside tells you this isn’t right. It feels wasteful, but also easy to ignore.", nextIndex: 27 }, // after Let the water run
          { text: "You turn the faucet off and manage the water wisely - only turning it when you need more.", nextIndex: 27 },
          { text: "You let it run, but weaker to stop it from overflowing.", nextIndex: 27 },

          { text: "You scrub with soap and rinse off. The water runs warm, steady — it feels comforting. But you wonder: how many people don’t get this luxury. While bathing, you can't help but wonder - will we ever run out of water?", nextIndex: 28 },
          { text: "Anyways, you pat yourself dry and get your brand new Blue toothbrush. You get some toothpaste and hold the faucet.", nextIndex: 31 ,condition: (flags) => flags.blue === true },
          { text: "Anyways, you pat yourself dry and get your brand new Green toothbrush. You get some toothpaste and hold the faucet.", nextIndex: 31 ,condition: (flags) => flags.green === true },
          { text: "Anyways, you pat yourself dry and get your brand new White toothbrush. You get some toothpaste and hold the faucet.", nextIndex: 31 ,condition: (flags) => flags.white === true },
          { text: "How will you use water?", nextIndex: 32 },
          {
            text: "Choose what will you do:",
            choices: [
              { text: "Open the faucet throughout", nextIndex: 33 },
              { text: "Use a glass", nextIndex: 34 },
            ],
          },
          {
            text: "You turn on the faucet, wet the toothpaste, and brush your teeth while the faucet is open. You lightly rinse your mouth and toothbrush after.",
            nextIndex: 35,
          },
          {
            text: "You get a glass and fill it with water, then use that for brushing your teeth.",
            nextIndex: 35,
          },
          {
            text: "Your teeth now look amazing.",
            nextIndex: 36,condition: (flags) => flags.leftGlass === true 
          },
          {
            text: "You change into your school uniform, prepare your things, but feel like you’re forgetting something.",
            nextIndex: 37,condition: (flags) => flags.leftGlass === true 
          },
          {
            text: "You go to the kitchen and see the half-empty glass of water you left earlier.",
            nextIndex: 38,condition: (flags) => flags.leftGlass === true 
          },
          {
            text: "What will you do?",
            condition: (flags) => flags.leftGlass === true,
            choices: [
              { text: "Drink it", nextIndex: 39 },
              { text: "Throw it", nextIndex: 40 }
            ]
          },
          {
            text: "You feel refreshed.",
            nextIndex: 41,condition: (flags) => flags.leftGlass === true 
          },
          {
            text: "You throw it in the sink.",
            nextIndex: 41,condition: (flags) => flags.leftGlass === true 
          },
          {
            text: "After dealing with the glass of water, you now head to the bus stop to go to school.",
            nextIndex: 42,condition: (flags) => flags.leftGlass === true 
          },
          {
            text: "A few minutes pass.",
            nextIndex: 43
          },
          {
            name: "Mr. Custard",
            character: "/images/Characters/Silhouette-game.PNG",
            text: "Good morning! Hop on Aya!",
            nextIndex: 44
          },
          {
            text: "And so, you board the school bus and patiently wait to arrive at the school.",
            nextIndex: 45
          },
          {
            name: "Mr. Custard",
            character: "/images/Characters/Silhouette-game.PNG",
            text: "We’re here kids! Don’t push each other okay?",
            nextIndex: 46
          },
          {
            name: "Everyone",
            character: "/images/Characters/Silhouette-game.PNG",
            text: "Okay Mr. Custard!!",
            nextIndex: 47
          },
          {
            text: "You get off the bus and find the school keepers watering the grass and plants surrounding the school.",
            nextIndex: 48
          },
          {
            text: "On your left, you see and hear Ray and Eireen chatting.",
            nextIndex: 49
          },
          {
            name: "Ray",
            character: "/images/Characters/Ray-game.PNG",
            text: "As I was saying, Sir Waffles won’t be our teacher for today. I’ve heard the substitute is scary.",
            nextIndex: 50
          },
          {
            name: "Eireen",
            character: "/images/Characters/Eireen-game.PNG",
            text: "Really?",
            nextIndex: 51
          },
          {
            name: "Ray",
            character: "/images/Characters/Ray-game.PNG",
            text: "Let’s hope not though.",
            nextIndex: 52
          },
          {
            name: "Ray",
            character: "/images/Characters/Ray-game.PNG",
            text: "......",
            nextIndex: 53 
          },
          {
            name: "Ray",
            character: "/images/Characters/Ray-game.PNG",
            text: "Oh look, it’s Aya.",
            nextIndex: 54
          },
          {
            text: "You approach each other, exchange greetings as you head to your classroom. The peaceful hallway is disturbed by a noisy Laurie and Fransette, as they argue as usual.",
            nextIndex: 55,
          },
          {
            name: "Laurie",
            character: "/images/Characters/Laurie-game.PNG",
            text: "HEY! I told you I don’t have your phone!",
            nextIndex: 56,
          },
          {
            name: "Fransette",
            character: "/images/Characters/Fransette-game.PNG",
            text: "YOU DO! STOP MESSING WITH MEEEE!",
            nextIndex: 57,
          },
          {
            name: "Ray",
            character: "/images/Characters/Ray-game.PNG",
            text: "These guys…",
            nextIndex: 58,
          },
          {
            text: "As they fight over Fransette’s missing phone, you notice the phone is peeking out of Laurie’s bag pocket. Seeing Fransette in a state of panic, you decide to point it out.",
            nextIndex: 59,
          },
          {
            name: "Fransette",
            character: "/images/Characters/Fransette-game.PNG",
            text: "There’s my phone! *grabs it from Laurie’s bag pocket*",
            nextIndex: 60,
          },
          {
            name: "Laurie",
            character: "/images/Characters/Laurie-game.PNG",
            text: "Aw dang it Aya….",
            nextIndex: 61,
          },
          {
            text: "She said melancholically.",
            nextIndex: 62,
          },
          {
            name: "Fransette",
            character: "/images/Characters/Fransette-game.PNG",
            text: "I knew you took it haha! You can’t fool me.",
            nextIndex: 63,
          },
          {
            name: "Laurie",
            character: "/images/Characters/Laurie-game.PNG",
            text: "Okay fineee, I’m sorry!",
            nextIndex: 64,
          },
          {
            name: "Fransette",
            character: "/images/Characters/Fransette-game.PNG",
            text: "Apology accepted.",
            nextIndex: 65,
          },
          {
            name: "Eireen",
            character: "/images/Characters/Eireen-game.PNG",
            text: "These two easily switch up like a light oh my god.",
            nextIndex: 66,
          },
          {
            name: "Ray",
            character: "/images/Characters/Ray-game.PNG",
            text: "Hey, that’s better than brewing bad blood.",
            nextIndex: 67,
          },
          {
            name: "Eireen",
            character: "/images/Characters/Eireen-game.PNG",
            text: "Okay, good point. Anywayssss….",
            nextIndex: 68,
          },
          {
            text: "In the distance, you notice a female teacher heading towards your classroom. She is wearing glasses, has a serious look, and is kind of scary to approach.",
            nextIndex: 69,
          },
          {
            name: "Ray",
            character: "/images/Characters/Ray-game.PNG",
            text: "I guess that’s the new teacher.",
            nextIndex: 70,
          },
          {
            name: "Laurie",
            character: "/images/Characters/Laurie-game.PNG",
            text: "What happened to Sir Waffles?",
            nextIndex: 71,
          },
          {
            name: "Ray",
            character: "/images/Characters/Ray-game.PNG",
            text: "Not sure.",
            nextIndex: 72,
          },
          {
            name: "Ray",
            character: "/images/Characters/Ray-game.PNG",
            text: "Probably woke up late like you guys do all the time.",
            nextIndex: 73,
          },
          {
            name: "Fransette",
            character: "/images/Characters/Fransette-game.PNG",
            text: "Hey, we’re not late today!",
            nextIndex: 74,
          },
          {
            name: "Ray",
            character: "/images/Characters/Ray-game.PNG",
            text: "…Okay. I’ll give you that.",
            nextIndex: 75,
          },
          {
            text: "The five of you enter the classroom and feel the heavy air inside immediately. The new teacher is standing firm, while your classmates are noticeably cautious and wary of their actions because of their unfamiliarity with the new teacher in front.",
            nextIndex: 76,
          },
          {
            name: "?????",
            character: "/images/Characters/Silhouette-game.PNG",
            text: "This is the section Dash 2 right?",
            nextIndex: 77,
          },
          {
            name: "Everyone",
            character: "/images/Characters/Silhouette-game.PNG",
            text: "Yes….",
            nextIndex: 78,
          },
          {
            name: "Ms. Austline",
            character: "/images/Characters/Austline-game.PNG",
            text: "Okay. I am Ma’am Austline Cashew, and I’ll be your replacement teacher for today.",
            nextIndex: 79,
          },
          {
            name: "Ms. Austline",
            character: "/images/Characters/Austline-game.PNG",
            text: "Sir Waffles isn’t feeling very well today, but I believe he’s just too lazy to go to work.",
            nextIndex: 80,
          },
          {
            name: "Ms. Austline",
            character: "/images/Characters/Austline-game.PNG",
            text: "That guy is probably still asleep just like his two students who are always late, he says.",
            nextIndex: 81,
          },
          {
            text: "Everyone laughed. Maybe they were worried for nothing.",
            nextIndex: 82,
          },
          {
            name: "Ms. Austline",
            character: "/images/Characters/Austline-game.PNG",
            text: "Was it Lourie and Franseph? Fransette?",
            nextIndex: 83,
          },
          {
            name: "Fransette",
            character: "/images/Characters/Fransette-game.PNG",
            text: "Hey we’re not late toda-",
            nextIndex: 84,
          },
          {
            name: "Laurie",
            character: "/images/Characters/Laurie-game.PNG",
            text: "AHHH haha… yes that’s us, Ma’am.",
            nextIndex: 85,
          },
          {
            name: "Laurie",
            character: "/images/Characters/Laurie-game.PNG",
            text: "(Don’t speak like that!)",
            nextIndex: 86,
          },
          {
            name: "Ms. Austline",
            character: "/images/Characters/Austline-game.PNG",
            text: "*chuckles* No need to be so tense.",
            nextIndex: 87,
          },
          {
            name: "Ms. Austline",
            character: "/images/Characters/Austline-game.PNG",
            text: "Treat me like how you treat Sir Waffles, I don’t bite.",
            nextIndex: 88,
          },
          {
            name: "Ms. Austline",
            character: "/images/Characters/Austline-game.PNG",
            text: "Today we’ll be discussing…",
            nextIndex: 89,
          },
          {
            name: "Eireen",
            character: "/images/Characters/Eireen-game.PNG",
            text: "Oh, ma’am! Can I go to the restroom really quickly?",
            nextIndex: 90,
          },
          {
            name: "Ms. Austline",
            character: "/images/Characters/Austline-game.PNG",
            text: "Alright, anyone wants to go to the restroom as well?",
            nextIndex: 91,
          },
          {
            name: "Fransette",
            character: "/images/Characters/Fransette-game.PNG",
            text: "*raises hand*",
            nextIndex: 92
          },
          {
            character: "/images/Characters/Fransette-game.PNG",
            name: "Fransette",
            text: "I’ll go with Eireen!",
            nextIndex: 93
          },
          {
            character: "/images/Characters/Austline-game.PNG",
            name: "Ms. Austline",
            text: "Hmm… you two will just go to the canteen. Okay, come back as soon as possible.",
            nextIndex: 94
          },
          {
            text: "Fransette quickly follows Eireen, and the two of them walk quietly through the hall.",
            nextIndex: 95
          },
          {
            character: "/images/Characters/Fransette-game.PNG",
            name: "Fransette",
            text: "Phew. That classroom felt so stiff for a second. She’s nice though.",
            nextIndex: 96
          },
          {
            character: "/images/Characters/Eireen-game.PNG",
            name: "Eireen",
            text: "Yeah, I actually thought she was going to make us write a three-page essay on why we’re alive or something.",
            nextIndex: 97
          },
          {
            text: "They both chuckle as they reach the restroom. Fransette enters one of the stalls, while Eireen waits by the sink.",
            nextIndex: 98
          },
          {
            character: "/images/Characters/Fransette-game.PNG",
            name: "Fransette",
            text: "(from inside) Hey, random question — why do some toilets have two buttons? Like... small and big flush?",
            nextIndex: 99
          },
          {
            character: "/images/Characters/Eireen-game.PNG",
            name: "Eireen",
            text: "Oh! That’s actually for saving water. The small button is for liquid waste, the big one’s for solids.",
            nextIndex: 100
          },
          {
            character: "/images/Characters/Fransette-game.PNG",
            name: "Fransette",
            text: "...So like, one for pee, one for poop?",
            nextIndex: 101
          },
          {
            character: "/images/Characters/Eireen-game.PNG",
            name: "Eireen",
            text: "Basically. The small flush uses less water — like 3 liters or so. The big one uses around 6.",
            nextIndex: 102
          },
          {
            character: "/images/Characters/Fransette-game.PNG",
            name: "Fransette",
            text: "(laughing) Really? I always press these two together haha!",
            nextIndex: 103
          },
          {
            character: "/images/Characters/Eireen-game.PNG",
            name: "Eireen",
            text: "I used to do that too, but Aya taught me about that. Ever since then, I don’t do that anymore.",
            nextIndex: 104
          },
          {
            character: "/images/Characters/Fransette-game.PNG",
            name: "Fransette",
            text: "Aya’s really mindful, no?",
            nextIndex: 105
          },
          {
            character: "/images/Characters/Eireen-game.PNG",
            name: "Eireen",
            text: "Yeah.",
            nextIndex: 106
          },
          {
            text: "They wash their hands, and Eireen quickly dries hers with a handkerchief from her pocket.",
            nextIndex: 107
          },
          {
            character: "/images/Characters/Eireen-game.PNG",
            name: "Eireen",
            text: "Let’s head back before Ma’am Austline starts guessing who else is “too lazy to go to school.”",
            nextIndex: 108
          },
          {
            character: "/images/Characters/Fransette-game.PNG",
            name: "Fransette",
            text: "She’s not wrong though. Haha!",
            nextIndex: 109
          },
          {
            text: "They head back to class, whispering and giggling a little as they enter.",
            nextIndex: 110,
          },
          {
            text: "The room feels lighter now — more relaxed.",
            nextIndex: 111
          },
          {
            character: "/images/Characters/Austline-game.PNG",
            name: "Ms. Austline",
            text: "Now then — as I was saying earlier, we’ll be having a short discussion on the water cycle.",
            nextIndex: 112
          },
          {
            character: "/images/Characters/Austline-game.PNG",
            name: "Ms. Austline",
            text: "But more than the science of it, I want us to think about something:",
            nextIndex: 113
          },
          {
            character: "/images/Characters/Austline-game.PNG",
            name: "Ms. Austline",
            text: "What if the cycle stops?",
            nextIndex: 114
          },
          {
            character: "/images/Characters/Austline-game.PNG",
            name: "Ms. Austline",
            text: "What if we keep taking, but don’t give enough time for nature to return what we use?",
            nextIndex: 115
          },
          {
            text: "You listen as Ma’am Austline moves around the room, explaining evaporation, condensation, and precipitation.",
            nextIndex: 116
          },
          {
            text: "But she keeps coming back to one point: water doesn’t just magically appear.",
            nextIndex: 117
          },
          {
            text: "Someone, somewhere, is paying the price when we waste it.",
            nextIndex: 118
          },
          {
            character: "/images/Characters/Austline-game.PNG",
            name: "Ms. Austline",
            text: "Let’s try something simple.",
            nextIndex: 119
          },
          {
            text: "She looks around the class.",
            nextIndex: 120
          },
          {
            character: "/images/Characters/Austline-game.PNG",
            name: "Ms. Austline",
            text: "Close your eyes for a moment.",
            nextIndex: 121
          },
          {
            character: "/images/Characters/Austline-game.PNG",
            name: "Ms. Austline",
            text: "You’re brushing your teeth. The faucet’s open. Water’s running.",
            nextIndex: 122
          },
          {
            character: "/images/Characters/Austline-game.PNG",
            name: "Ms. Austline",
            text: "You’re halfway through a song in your head.",
            nextIndex: 123
          },
          {
            character: "/images/Characters/Austline-game.PNG",
            name: "Ms. Austline",
            text: "What would you do?",
            choices: [
              {
                text: "I close the faucet without thinking.",
                nextIndex: 124
              },
              {
                text: "I let it run — I’ll be quick anyway.",
                nextIndex: 125
              },
              {
                text: "I don’t know. I haven’t thought about it before.",
                nextIndex: 126
              }
            ]
          },
          {
            text: "You close the faucet, saving water and feeling responsible.",
            nextIndex: 127
          },
          {
            text: "You let the faucet run, thinking it won’t waste much since you’ll be quick.",
            nextIndex: 127
          },
          {
            text: "You aren’t sure what you’d do; this is the first time you really think about it.",
            nextIndex: 127
          },
          {
            text: "You sit quietly, unsure if you answered in your head or if your face gave it away.",
            nextIndex: 128
          },
          {
            text: "But something about that question... lingers.",
            nextIndex: 129
          },
          {
            character: "/images/Characters/Austline-game.PNG",
            name: "Ms. Austline",
            text: "Now picture this. You’re holding a plastic bottle. You’re done with it. No bins around. You’re late for class.",
            nextIndex: 130
          },
          {
            character: "/images/Characters/Austline-game.PNG",
            name: "Ms. Austline",
            text: "What do you do?",
            choices: [
              { text: "I slip it into my bag and forget about it.", nextIndex: 131 },
              { text: "I carry it with me until I find a bin.", nextIndex: 131 },
              { text: "I throw it near the trash — close enough, right?", nextIndex: 131 }
            ]
          },
          {
            text: "A quiet tension sits in the room. Not guilt — just... noticing.",
            nextIndex: 132
          },
          {
            character: "/images/Characters/Austline-game.PNG",
            name: "Ms. Austline",
            text: "Last one. You’re in the school restroom. You just finished. You press the flush — and realize it didn’t need that second one.",
            nextIndex: 133
          },
          {
            character: "/images/Characters/Austline-game.PNG",
            name: "Ms. Austline",
            text: "What now?",
            choices: [
              { text: "I shrug. It’s automatic.", nextIndex: 134 },
              { text: "I feel a little guilty — but it’s done.", nextIndex: 134 },
              { text: "I tell myself I’ll notice next time.", nextIndex: 134 }
            ]
          },
          {
            text: "You hadn’t expected these questions to stay with you. But maybe that’s the point.",
            nextIndex: 135
          },
          {
            character: "/images/Characters/Austline-game.PNG",
            name: "Ms. Austline",
            text: "We might think we’re just wasting a little water — but multiply that by millions, and it’s a lake.",
            nextIndex: 136
          },
          {
            character: "/images/Characters/Austline-game.PNG",
            name: "Ms. Austline",
            text: "So the next time you leave a faucet running, remember: we’re not alone in using the water. We just happen to have easier access to it.",
            nextIndex: 137
          },
          {
            text: "As she continues, you think back to your morning. Suddenly, that glass of water you had, the faucet you used, the moment you brushed your teeth, means a lot more.",
            nextIndex: 138
          },
          {
            text: "You start to realize... Water is so easy to take for granted when it’s always there.",
            nextIndex: 139
          },
          {
            text: "A few subjects later, the bell rings. The day ends like most others — with students gathering their things, some stretching, some still half-asleep.",
            nextIndex: 140,
          },
          {
            character: "/images/Characters/Ray-game.PNG",
            name: "Ray",
            text: "Well, as usual, I’ll head off. Got a lot of things to do.",
            nextIndex: 141
          },
          {
            character: "/images/Characters/Laurie-game.PNG",
            name: "Laurie",
            text: "See you tomorrow Ray. Me and Fransette will go as well haha!",
            nextIndex: 142
          },
          {
            character: "/images/Characters/Fransette-game.PNG",
            name: "Fransette",
            text: "Seeee yaaa guyssss! Also, thank you Eireen for earlier!",
            nextIndex: 143
          },
          {
            character: "/images/Characters/Eireen-game.PNG",
            name: "Eireen",
            text: "Thank Aya, not me.",
            nextIndex: 144
          },
          {
            character: "/images/Characters/Fransette-game.PNG",
            name: "Fransette",
            text: "Awww come here Aya, let me give you a lil huggg!",
            nextIndex: 145
          },
          {
            text: "You’re confused, why is Fransette giving you a hug? It feels warm, and full of love. You don’t know why, but you just accept it and hug her back.",
            nextIndex: 146
          },
          {
            character: "/images/Characters/Fransette-game.PNG",
            name: "Fransette",
            text: "Well then, toodles guys!",
            nextIndex: 147
          },
          {
            character: "/images/Characters/Eireen-game.PNG",
            name: "Eireen",
            text: "See yaaaa! Let’s go home as well, Aya.",
            nextIndex: 148
          },
          {
            text: "You nod, and the two of you begin walking toward the school gates together. The hallway is quieter now — footsteps echo gently against the walls, the day finally catching up with everyone.",
            nextIndex: 149,
          },
          {
            text: "Outside, the afternoon sun hangs low, casting long shadows on the sidewalk.",
            nextIndex: 150
          },
          {
            text: "You and Eireen spot Mr. Custard’s bus parked by the curb, engine humming softly.",
            nextIndex: 151
          },
          {
            character: "/images/Characters/Silhouette-game.PNG",
            name: "Mr. Custard",
            text: "There you are! Hop in, Aya! You too, Eireen!",
            nextIndex: 152
          },
          {
            text: "You and Eireen climb aboard. The bus isn’t as noisy as it was this morning. Most of the students are tired — their chatter now replaced by the hum of the engine and the occasional bump in the road.",
            nextIndex: 153
          },
          {
            text: "You and Eireen sit together near the back. She leans her head against the window, eyes half-closed. You sit beside her, quiet, content just to share the space.",
            nextIndex: 154
          },
          {
            text: "The ride home feels slower than usual, like the day is gently winding down.",
            nextIndex: 155
          },
          {
            text: "You look out the window. The trees blur past, their leaves gently swaying in the afternoon breeze. There are tiny droplets of water on the glass — remnants of the sprinkler systems from the school garden.",
            nextIndex: 156
          },
          {
            text: "It makes you wonder — how much of what we use really gets used well?",
            nextIndex: 157
          },
          {
            text: "When you arrive home, the sun is already low. The sky is a soft orange, and the house greets you with its usual stillness.",
            nextIndex: 158
          },
          {
            text: "You open the door, place your shoes by the mat, and walk in. The light through the windows gives everything a warm glow.",
            nextIndex: 159
          },
          {
            text: "You go to your room and set your bag down. You change into something more comfortable, brush your hair, and lie on your bed, staring at the ceiling.",
            nextIndex: 160
          },
          {
            text: "As the day ends, you sit on your bed, your school bag on the floor and your thoughts a little fuller than usual.",
            nextIndex: 161
          },
          {
            text: "The faucet you turned off, the water you drank, the small flush you used — they were small things.",
            nextIndex: 162
          },
          {
            text: "But maybe small things add up.",
            nextIndex: 163
          },
          {
            text: "Just like drops in a pail.",
          }
        ]}
      />
    </div>
  );
}
