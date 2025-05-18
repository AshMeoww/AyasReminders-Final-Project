"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-between px-8 py-4 bg-white shadow-md">
      <div className="flex items-center">
        <Image
          src="/images/ayasreminder.png"
          alt="Logo"
          width={200}
          height={67}
          className="ml-4"
        />
      </div>

      <div className="flex items-center gap-8">
        <Link href="/home" className="text-gray-600 hover:text-gray-900">
          Home
        </Link>
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 hover:text-gray-900"
          >
            About
          </button>
          
          <div
            className={`absolute ${
              isOpen ? "block" : "hidden"
            } w-48 bg-white shadow-lg rounded-md mt-2`}
          >
            <Link
              href="/about-game"
              className="block px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              About the Game
            </Link>
            <Link
              href="/about-us"
              className="block px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            >
              About Us
            </Link>
          </div>
        </div>{" "}
        <Link
          href="/our-resources"
          className="text-gray-600 hover:text-gray-900"
        >
          Resources
        </Link>
      </div>

      <button className="px-6 py-2 text-white bg-green-500 rounded-4xl hover:bg-green-600 mr-4">
        Get Started
      </button>
    </div>
  );
}
