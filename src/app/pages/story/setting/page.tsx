'use client';

import { useVolume } from "@/components/context/VolumeContext";

export default function SettingsPage() {
  const {
    masterVolume,
    setMasterVolume,
    musicVolume,
    setMusicVolume,
    sfxVolume,
    setSfxVolume,
  } = useVolume();

  return (
    <div className="min-h-screen bg-white text-black flex flex-col items-start justify-start gap-20 pl-45 pt-25">
    <h1 className="text-4xl font-bold font-pixelify" style={{ color: '#1AB261' }}>Settings</h1>

    <div className="w-full max-w-md space-y-15 text-left ">
      <div className="flex flex-col items-start">
        <label className="block mb-1 font-semibold font-schoolbell " style={{ color: '#2E2E2E' }}>Master Volume</label>
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

      <div className="flex flex-col items-start ">
        <label className="block mb-1 font-semibold font-schoolbell " style={{ color: '#2E2E2E' }}>Music Volume</label>
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
    </div>
  </div>

  );
}
