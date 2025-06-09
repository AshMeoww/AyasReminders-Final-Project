import Image from "next/image";

function LandingPage() {
    return (
        <div className="relative h-screen overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 bg-cloud mt-18"></div>

            {/* Content */}
            <div className="relative flex flex-col h-full px-6 text-center space-y-8">
                <h1 className="text-5xl md:text-6xl font-bold text-[#F9F964] font-geologica mt-20 md:mt-42 drop-shadow-[0_2px_3px_rgba(0,0,0,0.8)]">
                    Your choices, they matter.
                </h1>
                <p className="text-white font-figtree font-bold drop-shadow-[0_2px_3px_rgba(0,0,0,0.7)] text-lg md:text-2xl">
                    Play as Aya and make decisions guided by her mother’s sticky notes.
                </p>
                <div className="relative w-full h-56 md:h-80 flex items-center justify-center mt-12">
                    <img
                        src="/images/bike.png"
                        alt="Landing page image"
                        className="max-w-full max-h-full object-contain"
                    />
                </div> 
            </div>
        </div>
    );
}

export default LandingPage;
