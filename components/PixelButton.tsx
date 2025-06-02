export default function PixelButton({ text, onClick }: { text: string; onClick: () => void }) {
    return (
      <button
        onClick={onClick}
        className="bg-yellow-300 border-4 border-black font-bold px-6 py-3 text-sm hover:bg-yellow-400 active:translate-y-0.5 shadow-md transition-all"
        style={{
          fontFamily: "Press Start 2P, monospace",
          imageRendering: "pixelated",
        }}
      >
        {text}
      </button>
    );
  }
  