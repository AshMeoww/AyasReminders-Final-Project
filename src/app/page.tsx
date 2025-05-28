"use client"

import React from "react";
import Image from "next/image";
import Navbar from "../../components/ui/navbar";
import Footer from "../../components/ui/footer";
import LandingPage from "./pages/home/page";
import LandingPage2 from "./pages/about-the-game/Objectives/page";
import EcoCard from "./pages/ecocard/page";


export default function App() {
  return (
    <main>
      <LandingPage />
      {/* <EcoCard  /> */}
      {/* <LandingPage2 /> */}
    </main>
  );
}