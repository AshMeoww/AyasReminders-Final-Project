
"use client";

import React from "react";
import StoryPart from "@/components/ui/StoryPart";

export default function Page7() {
  return (
    <div>
      <StoryPart
  background="/images/white.jpg"
  onEndRedirect="/pages/story/day4"
  dialogues={[
    {text: "Day 7: What do you see when you look back?.........", nextIndex: 1, background: "/images/white.jpg"},
    {text: "There’s no sticky note today.", nextIndex: 2, background: "/images/Day7/Bedroom-day7.PNG"},
    {text: "No reminder taped to the mirror.", nextIndex: 3},
    {text: "Just the hush of a slow morning, and the bike leaning outside—still and quiet.", nextIndex: 4},
    {text: "You're not going to school today.", nextIndex: 5},

    {text: "You wake slowly.", nextIndex: 6},
    {text: "There’s a knock. Then your mother enters, holding something in her hands.", nextIndex: 7},
    {text: "A photo. Worn at the edges.", nextIndex: 8},
    {text: "She sits at the edge of your bed and lays the picture between you.", nextIndex: 9},
    {text: "It’s the three of you.", nextIndex: 10},
    {text: "Your father, grinning like the sun.", nextIndex: 11},
    {text: "Your mother, wind in her hair, caught mid-laugh.", nextIndex: 12},
    {text: "And you, small, holding onto the handlebars of that same old bike.", nextIndex: 13},

    {
    character: "/images/Characters/AyasMother-game.PNG",
    name: "Aya’s Mother",
    text: "He used to take us out every weekend. Early morning rides. Just until we found somewhere quiet, green.",
    nextIndex: 14,
    background: "/images/Day7/Home-day7.PNG"
    },
    {
    character: "/images/Characters/AyasMother-game.PNG",
    name: "Aya’s Mother",
    text: "We never took the car unless we had to. He hated traffic.",
    nextIndex: 15,
    },
    {
    character: "/images/Characters/AyasMother-game.PNG",
    name: "Aya’s Mother",
    text: "He always said the world gives you enough—if you take care of it back.",
    nextIndex: 16,
    },

    {text: "You remember the tin lunchbox. The mat he’d unfold.", nextIndex: 17},
    {text: "The way he’d bring an empty bottle to refill at a public tap instead of buying anything.", nextIndex: 18},

    {
    character: "/images/Characters/AyasMother-game.PNG",
    name: "Aya’s Mother",
    text: "He was on his way home… that day. Too much smoke in the road. A truck didn’t see.",
    nextIndex: 19,
    },

    {text: "Her voice fades. You don’t ask more.", nextIndex: 20},
    {text: "You’ve heard it before—fragments.", nextIndex: 21},
    {text: "But this is the first time it’s spoken with stillness.", nextIndex: 22},
    {text: "Not as a wound, but as a memory.", nextIndex: 23},

    {text: "After a while, she asks if you want to go out for a ride.", nextIndex: 24, background: "/images/Day7/Road-trees-day7.PNG"},
    {text: "Just the two of you.", nextIndex: 25},
    {text: "You nod.", nextIndex: 26},

    {text: "The bike creaks a little, but it rolls fine.", nextIndex: 27},
    {text: "The roads are quiet today.", nextIndex: 28},
    {text: "You pedal together in rhythm.", nextIndex: 29},
    {text: "Not rushing. Not talking much.", nextIndex: 30},

    {text: "You pass streets he used to take.", nextIndex: 31},
    {text: "You see trees planted long ago still standing.", nextIndex: 32},
    {text: "You think about how little he needed to feel full.", nextIndex: 33},
    {text: "A ride. A meal. A patch of sun.", nextIndex: 34},

    {text: "Eventually, you reach a small park.", nextIndex: 35},
    {text: "She slows to a stop.", nextIndex: 36},

      {
        text: "Do you want to keep going?",
        choices: [
          {
            text: "Yes. Let’s ride a bit longer.",
            nextIndex: 37,
          },
          {
            text: "No. Let’s rest here.",
            nextIndex: 43,
          },
        ],
      },
      
      // Yes path
      {text: "You nod. You both ride further, passing more homes and patches of green.", nextIndex: 38},
      {text: "Your mother points out a bike rack near a community garden.", nextIndex: 39},
      {
        character:"/images/Characters/AyasMother-game.PNG",
        name: "Aya’s Mother",
        text: "He helped build that. Said even if it was small, it mattered.",
        nextIndex: 40,
      },
      {text: "You pedal in silence, taking it in.", nextIndex: 41},
      {text: "You feel the wind. And the weight.", nextIndex: 42},
      {text: "And still—something light.", nextIndex: 48},
      
      // No path
      {text: "You find a bench under a tree.", nextIndex: 44, background: "/images/Day6/townpark-day6.PNG"},
      {text: "She places the photo between you.", nextIndex: 45},
      {text: "You sit together, watching kids ride by, a dad carrying food in a cloth bag.", nextIndex: 46},
      {
        character: "/images/Characters/AyasMother-game.PNG",
        name: "Aya’s Mother",
        text: "He believed in small efforts. In making things last.",
        nextIndex: 47,
      },
      {text: "You nod. You get it now.", nextIndex: 48, background: "/images/Day7/Clouds-for-ending.PNG"},
      
      // Shared closing
      {
        text: "He didn’t leave instructions or a guidebook.",
        nextIndex: 49,
      },
      {
        text: "Just a way of living. Gentle. Thoughtful. Light on the world.",
        nextIndex: 50,
      },
      {
        text: "You see it now—in the choices you’ve made, and the ones waiting ahead.",
        nextIndex: 51,
      },
      {
        text: "Tomorrow, the reminders might return.",
        nextIndex: 52,
      },
      {
        text: "But today… you remembered why they matter.",
      },
      

  ]}
/>
    </div>
  );
}