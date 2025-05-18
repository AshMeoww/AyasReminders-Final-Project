"use client"

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className="bg-amber-950 h-[250px] flex flex-col justify-between items-center py-4 w-full fixed bottom-0">
      <h1 className="text-2xl font-bold text-white mt-6">Your choices, they matter.</h1>
      <p className="text-white text-center px-4 mt-6 w-120">
      22°C is a team of Computer Science students from Cavite State University - Main Campus. We aim to spread awareness about the effects our little choices have on our environment.
      </p>
      <p className="text-sm text-white mt-6">&copy; Made with love by 22°C.</p>
    </div>
   
  );
}