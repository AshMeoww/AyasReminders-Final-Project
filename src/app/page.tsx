"use client"

import React from "react";
import Image from "next/image";
import Navbar from "../../components/ui/navbar";
import Footer from "../../components/ui/footer";
import LandingPage from "../../components/ui/Pages/Home/landingpage";
import LandingPage2 from "../../components/ui/Pages/Home/landingpage2";

export default function App() {
  return (
    <main>
      <Navbar />
      <LandingPage />
      <LandingPage2 />
      <Footer />
    </main>
  );
}