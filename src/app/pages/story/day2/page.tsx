import React from "react";
import StoryPart from "@/components/ui/StoryPart";

export default function Page1() {
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
              { text: "Blue", nextIndex: 7 },
              { text: "Green", nextIndex: 8 },
              { text: "White", nextIndex: 9 },
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
              { text: "Half full", nextIndex: 16 },
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
              { text: "Yes", nextIndex: 14 },
              { text: "Later", nextIndex: 15 },
              { text: "No", nextIndex: 15 },
            ],
          },
          { text: "Your tummy feels weird - you can feel the water.", nextIndex: 21 }, // after Yes
          { text: "You’ll come back for it later.", nextIndex: 21 },                 // after Later or No

          // Half full branch
          { text: "You drank what you put in. Not a single drop was wasted.", nextIndex: 17 },

          { text: "After finishing breakfast, you now get ready to take a bath. You prepare your school uniform for later, take your towel, and get in the bathroom. There’s still water in the pail, what will you do?", nextIndex: 18 },
          {
            text: "What will you do with the water in the pail?",
            choices: [
              { text: "Keep it", nextIndex: 19 },
              { text: "Throw it", nextIndex: 20 },
            ],
          },
          { text: "You fill the pail without throwing the water away.", nextIndex: 21 },
          { text: "You throw the water away and fill the pail with new water.", nextIndex: 21 },

          { text: "As the water runs, you take a bath. You notice the pail is nearly overflowing, so you think about what you’ll do.", nextIndex: 22 },
          {
            text: "How do you manage the running water?",
            choices: [
              { text: "Let the water run", nextIndex: 23 },
              { text: "Turn the faucet off", nextIndex: 24 },
              { text: "Reduce the water flow", nextIndex: 25 },
            ],
          },
          { text: "As you see the overflowing pail, you feel a bit uneasy. Something inside tells you this isn’t right. It feels wasteful, but also easy to ignore.", nextIndex: 26 }, // after Let the water run
          { text: "You turn the faucet off and manage the water wisely - only turning it when you need more.", nextIndex: 26 },
          { text: "You let it run, but weaker to stop it from overflowing.", nextIndex: 26 },

          { text: "You scrub with soap and rinse off. The water runs warm, steady — it feels comforting. But you wonder: how many people don’t get this luxury. While bathing, you can't help but wonder - will we ever run out of water?", nextIndex: 27 },
          { text: "Anyways, you pat yourself dry and get your brand new toothbrush. You get some toothpaste and hold the faucet.", nextIndex: 28 },
          { text: "How will you use water?", nextIndex: 29 },
          {
            text: "Choose your brushing method:",
            choices: [
              { text: "Open the faucet throughout", nextIndex: 30 },
              { text: "Use a glass", nextIndex: 31 },
            ],
          },
          {
            text: "You turn on the faucet, wet the toothpaste, and brush your teeth while the faucet is open. You lightly rinse your mouth and toothbrush after.",
            nextIndex: 32,
          },
          {
            text: "You get a glass and fill it with water, then use that for brushing your teeth.",
            nextIndex: 32,
          },

          { text: "You finished brushing your teeth. Time to head out!", nextIndex: undefined }, // End of story or next page logic here
        ]}
      />
    </div>
  );
}
