function Resources() {
    return (
        <div className="relative min-h-screen flex flex-col items-center justify-start bg-road bg-center pb-20">
            <h1 className="text-6xl font-bold text-[#F9F964] font-geologic mt-36 drop-shadow-[0_2px_3px_rgba(0,0,0,0.8)]">
                Resources
            </h1>   
            <p className="text-white mt-8 font-figtree font-bold text-4xl w-4xl text-center px-4 drop-shadow-[0_2px_3px_rgba(0,0,0,0.8)]">
            Below are the resources used to create this website.
            </p>

            <div className="mt-26 gap-26">
                <img src="/images/tools.png" alt="Resource" className="mt-4" />

                <img src="/images/visuals.png" alt="Resource" className="mt-4" />

                <img src="/images/audio.png" alt="Resource" className="mt-4" />

                <img src="/images/tech_stack.png" alt="Resource" className="mt-4" />
            </div>
        </div>
    )
}

export default Resources;