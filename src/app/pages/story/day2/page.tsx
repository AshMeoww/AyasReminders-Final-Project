"use client";

import React from "react";
import StoryPart from "@/components/ui/StoryPart";
import { saveChoice, EcoChoice } from "@/utils/saveChoice";

export default function Page2() {
  const handleChoice = (choice: EcoChoice) => {
    console.log("Choice clicked:", choice);
    saveChoice(choice);
  };
  return (
    <div>
      <StoryPart
        background="/images/bedroom.png"
        onEndRedirect="/pages/story/day3"
        dialogues={[
          { text: "It’s Tuesday! You wake up with a brand new sticky note beside you. It reads:", nextIndex: 1 },
          { text: "“I hope you had a great night's sleep sweetheart! I bought new toothbrushes yesterday so you can replace yours. It’s already been 3 months since you used that! As always, take care Aya <3”", nextIndex: 2 },
          { text: "Another one reads:", nextIndex: 3 },
          { text: "“Every drop adds up — let it run and that's 50 pesos down the drain. Love, Mom 💧”", nextIndex: 4 },
          { text: "As usual, you make your bed and turn off the AC and lights before you go to the kitchen. On the kitchen table, you notice three toothbrushes - each with a different color.", nextIndex: 5 },
          { text: "What will you pick?", nextIndex: 6 },
          {
            text: "Choose your toothbrush:",
            choices: [
              { text: "Blue", nextIndex: 7, setState: { blue : true } },
              { text: "Green", nextIndex: 8, setState: { green : true } },
              { text: "White", nextIndex: 9, setState: { white : true } },
            ],
          },
          { text: "You chose Blue.", nextIndex: 10 },
          { text: "You chose Green.", nextIndex: 10 },
          { text: "You chose White.", nextIndex: 10 },

          {
            text: "Before brushing your teeth, you check the fridge. Fortunately, your mother left you something. The sticky note on it reads: “Here’s your breakfast for today. Eat well :)”. It’s still warm — almost like she just made it. You enjoy the pancakes made by your mother. After eating, you pour yourself a glass of water. It's...",
            nextIndex: 11,
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
          },
          {
            text: "Will you keep drinking?",
            choices: [
              { text: "Yes", nextIndex: 14, setState: { leftGlass : false }, onClick: () => handleChoice({ id: "keep-drinking", water: 10, carbon: 0, waste: 0}) }, 
              { text: "Later", nextIndex: 15, setState: { leftGlass : true }, onClick: () => handleChoice({ id: "keep-drinking-later", water: -5, carbon: 0, waste: 0}) },
              { text: "No", nextIndex: 16, setState: { leftGlass : false }, onClick: () => handleChoice({ id: "keep-drinking-no", water: -10, carbon: 0, waste: 0}) },
            ],
          },
          { text: "Your tummy feels weird - you can feel the water.", nextIndex: 18 }, // after Yes
          { text: "You’ll come back for it later.", nextIndex: 18 },  
          { text: "You decide to throw it in the sink.", nextIndex: 18 },                // after Later or No

          // Half full branch
          { text: "You drank what you put in. Not a single drop was wasted.", nextIndex: 18 },

          { text: "After finishing breakfast, you now get ready to take a bath. You prepare your school uniform for later, take your towel, and get in the bathroom. There’s still water in the pail, what will you do?", nextIndex: 19 },
          {
            text: "What will you do with the water in the pail?",
            choices: [
              { text: "Keep it", nextIndex: 20 },
              { text: "Throw it", nextIndex: 21 },
            ],
          },
          { text: "You fill the pail without throwing the water away.", nextIndex: 22 },
          { text: "You throw the water away and fill the pail with new water.", nextIndex: 22 },

          { text: "As the water runs, you take a bath. You notice the pail is nearly overflowing, so you think about what you’ll do.", nextIndex: 23 },
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
          { text: "Anyways, you pat yourself dry and get your brand new Blue toothbrush. You get some toothpaste and hold the faucet.", nextIndex: 31,condition: (flags) => flags.blue === true },
          { text: "Anyways, you pat yourself dry and get your brand new Green toothbrush. You get some toothpaste and hold the faucet.", nextIndex: 31,condition: (flags) => flags.green === true },
          { text: "Anyways, you pat yourself dry and get your brand new White toothbrush. You get some toothpaste and hold the faucet.", nextIndex: 31,condition: (flags) => flags.white === true },
          { text: "How will you use water?", nextIndex: 32 },
          {
            text: "Choose your brushing method:",
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
            character: "/images/Characters/Silhoutte-game.PNG",
            text: "Good morning! Hop on Aya!",
            nextIndex: 44
          },
          {
            text: "And so, you board the school bus and patiently wait to arrive at the school.",
            nextIndex: 45
          },
          {
            name: "Mr. Custard",
            character: "/images/Characters/Silhoutte-game.PNG",
            text: "We’re here kids! Don’t push each other okay?",
            nextIndex: 46
          },
          {
            name: "Everyone",
            character: "/images/Characters/Silhoutte-game.PNG",
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
            text: "This is the section Dash 2 right?",
            nextIndex: 77,
          },
          {
            name: "Everyone",
            text: "Yes….",
            nextIndex: 78,
          },
          {
            name: "Ma’am Austline",
            character: "/images/Characters/Austline-game.PNG",
            text: "Okay. I am Ma’am Austline Cashew, and I’ll be your replacement teacher for today.",
            nextIndex: 79,
          },
          {
            name: "Ma’am Austline",
            character: "/images/Characters/Austline-game.PNG",
            text: "Sir Waffles isn’t feeling very well today, but I believe he’s just too lazy to go to work.",
            nextIndex: 80,
          },
          {
            name: "Ma’am Austline",
            character: "/images/Characters/Austline-game.PNG",
            text: "That guy is probably still asleep just like his two students who are always late, he says.",
            nextIndex: 81,
          },
          {
            text: "Everyone laughed. Maybe they were worried for nothing.",
            nextIndex: 82,
          },
          {
            name: "Ma’am Austline",
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
            name: "Ma’am Austline",
            character: "/images/Characters/Austline-game.PNG",
            text: "*chuckles* No need to be so tense.",
            nextIndex: 87,
          },
          {
            name: "Ma’am Austline",
            character: "/images/Characters/Austline-game.PNG",
            text: "Treat me like how you treat Sir Waffles, I don’t bite.",
            nextIndex: 88,
          },
          {
            name: "Ma’am Austline",
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
            name: "Ma’am Austline",
            character: "/images/Characters/Austline-game.PNG",
            text: "Alright, anyone wants to go to the restroom as well?",
            nextIndex: 91,
          },
          {
            name: "Fransette",
            character: "/images/Characters/Fransette-game.PNG",
            text: "*raises hand*",
          }
          
          
          

        ]}
      />
    </div>
  );
}
