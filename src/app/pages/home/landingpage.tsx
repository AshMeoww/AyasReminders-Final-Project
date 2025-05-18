import Image from "next/image";

function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-cloud bg-cover bg-center">
      <h1 className="text-6xl font-bold text-green-500 font-geologica mt-26">
        Your choices, they matter.
      </h1>
      <p className="text-black mt-4 font-figtree font-extralight">
        Play as Aya and make decisions guided by her mother’s sticky notes.
      </p>
      <img
        src="/images/bike.png"
        alt="Landing page image"
        className="mt-30 max-w-xl"
      />
    </div>
  );
}

export default LandingPage;
