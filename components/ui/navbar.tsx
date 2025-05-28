"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleNavigation = (path: string) => {
    setIsOpen(false); // Close dropdown when navigating
    router.push(path);
  };

  return (
    <div className="fixed top-0 w-full flex items-center justify-between px-8 py-4 bg-white shadow-md z-50">
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
        <Link href="/" className="text-gray-600 hover:text-gray-900">
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
            } w-48 bg-white shadow-lg rounded-md mt-2 z-10`}
          >
            <Link
              href="/pages/about-the-game"
              className="block w-full text-left px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              About the Game
            </Link>
            <Link
              href="/pages/about-us"
              className="block w-full text-left px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
          </div>
        </div>

        <Link
          href="/pages/resources"
          className="text-gray-600 hover:text-gray-900"
        >
          Resources
        </Link>
      </div>

      <button 
        onClick={() => handleNavigation("/pages/get-started")}
        className="px-6 py-2 text-white bg-green-500 rounded-4xl hover:bg-green-600 mr-4"
      >
        Get Started
      </button>
    </div>
  );
}

export default Navbar;
