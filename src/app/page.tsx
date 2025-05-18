"use client"

import React from "react";
import Image from "next/image";
import Navbar from "../../components/ui/navbar";
import Footer from "../../components/ui/footer";
import LandingPage from "./pages/home/landingpage";
import LandingPage2 from "./pages/home/landingpage2";


export default function App() {
  return (
    <main>
      <LandingPage />
      <LandingPage2 />
    </main>
  );
}