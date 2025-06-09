'use client';

import { useVolume } from "@/components/context/VolumeContext";
import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "@heroicons/react/24/solid"; 
import { LogOut } from 'lucide-react';
import Image from "next/image";


export default function SettingsPage() {
  const {
    masterVolume,
    setMasterVolume,
    musicVolume,
    setMusicVolume,
    sfxVolume,
    setSfxVolume,
    playSfx1, playSfx2,
  } = useVolume();
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-start justify-start gap-20 pl-45 pt-25">
    <div className="relative w-full">
        <h1 className="text-4xl font-bold font-pixelify" style={{ color: '#1AB261' }}>
          Settings
        </h1>

        {/* Exit Arrow Button */}
        <button
          onClick={() => {
            router.back();
            playSfx1();
          }}
          onMouseEnter={() => playSfx2()}
          className="absolute bottom-0 left-45 hover:text-green-500 transition"
>
          <ArrowLeftIcon className="w-5 h-5 text-black hover:text-green-500" />
        </button>
      </div>

      <div className="absolute top-25 right-0 z-0">
        <Image
          src="/images/aya-settings.png"
          alt="Aya Character"
          draggable="false"
          width={1000}
          height={300}
          className="object-cover"
        />
      </div>

      <div className="w-full max-w-md space-y-15 text-left z-10">
        <div className="flex flex-col items-start">
          <label className="block mb-1 font-semibold font-schoolbell" style={{ color: '#2E2E2E' }}>Master Volume</label>
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={masterVolume}
            onChange={(e) => setMasterVolume(parseFloat(e.target.value))}
            className="w-50 ml-10"
          />
        </div>

        <div className="flex flex-col items-start">
          <label className="block mb-1 font-semibold font-schoolbell" style={{ color: '#2E2E2E' }}>Music Volume</label>
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={musicVolume}
            onChange={(e) => setMusicVolume(parseFloat(e.target.value))}
            className="w-50 ml-10"
          />
        </div>

      <div className="flex flex-col items-start">
        <label className="block mb-1 font-semibold font-schoolbell" style={{ color: '#2E2E2E' }}>SFX Volume</label>
        <input
          type="range"
          min={0}
          max={1}
          step={0.01}
          value={sfxVolume}
          onChange={(e) => setSfxVolume(parseFloat(e.target.value))}
          className="w-50 ml-10"
        />
        
      </div>
      <button
          onClick={() => {
            router.push(`/pages/story/home`)
            playSfx1();
          }}
          onMouseEnter={() => playSfx2()}
          className="absolute bottom-45 left-43 hover:text-green-500 transition"
>
          <LogOut className="w-5 h-5 text-black hover:text-green-500" />
      </button>

      
      
    </div>
  </div>

  );
}
