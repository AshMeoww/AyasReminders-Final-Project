"use client";

import { usePathname } from "next/navigation";
import { Geologica, Figtree, Pixelify_Sans } from "next/font/google";
import Navbar from "../../components/ui/navbar";
import Footer from "../../components/ui/footer";
import "./globals.css";
import { VolumeProvider } from "../../components/context/VolumeContext";


// Instantiate custom fonts
const geologica = Geologica({
  variable: "--font-geologica",
  subsets: ["latin"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

const pixelifySans = Pixelify_Sans({
  variable: "--font-pixelify-sans",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isStoryPage = pathname.startsWith("/pages/story");

  return (
    <html lang="en">
      <body
        className={`
          ${geologica.variable} 
          ${figtree.variable} 
          ${pixelifySans.variable} 
          antialiased
        `}
      >
        <VolumeProvider>
        {!isStoryPage && <Navbar />}
        {children}    
        {!isStoryPage && <Footer />}
        </VolumeProvider>
      </body>
    </html>
  );
}
