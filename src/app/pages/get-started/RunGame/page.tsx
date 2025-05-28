function RunGame() {
  return (
    <div>
      <div className="bg-[#085A2E] h-screen flex justify-center items-center ml-20 mr-20">
        <button className="bg-[#1AB261] text-white px-10 py-3 font-bold text-lg border-4 border-black transition-transform duration-300 group-hover:scale-110 hover:bg-black hover:text-[#1AB261] p-5 rounded-lg shadow-lg m-4 font-pixelify">
          Run Game
        </button>
      </div>

      <div className="flex flex-row gap-12 p-26 bg-white mt-0">
        {/* Left container with paragraphs */}
        {/* The Game */}
        <div className="flex-1 p-6 text-black">
          <h2 className="text-2xl font-bold mb-4 text-[#146500] font-geologica">
            The Game
          </h2>
          <p className="mb-8 font-extralight font-figtree">
            Aya’s Reminders is a short, choice-driven story game about the quiet
            power of care, memory, and everyday decisions. You play as Aya, a
            soft-spoken 15-year-old who wakes up each day to find a new sticky
            note left by her mother before leaving for work. These notes serve
            as gentle guides—not just for chores or routines, but for the small,
            meaningful choices that shape how we treat the world around us.
          </p>

          {/* Aya */}
          <h2 className="text-2xl font-bold mb-4 text-[#146500] font-geologica">
            Aya
          </h2>
          <p className="mb-8 font-extralight font-figtree">
            Aya is a quiet, introspective 15-year-old who lives in a small,
            sunlit home with her mother. She isn’t one to speak much—not because
            she doesn’t have anything to say, but because she’s always been more
            comfortable listening.
          </p>

          {/* Purpose */}
          <h2 className="text-2xl font-bold mb-4 text-[#146500] font-geologica">
            Purpose
          </h2>
          <p className="mb-8 font-extralight font-figtree">
            The game was created to teach players about the environmental impact
            of their little choices. It was made with an indirect approach,
            blending it with real life and relatable situations. By not having
            the lessons in the players’ faces, the team hopes that it’ll make
            playing the game more fun and not sound annoying.
          </p>

          {/* Team */}
          <h2 className="text-2xl font-bold mb-4 text-[#146500] font-geologica">
            Team
          </h2>
          <p className="mb-8 font-extralight font-figtree">
            Aya’s reminders is made by team name, with Narcel and Jossaine being
            the main designers and developers. Music inside the game were made
            by Narcel, and the art is made by Jossaine. Aids and Ash brought the
            game to life, and that’s why players can play it. Ultimately,
            through the collective effort of the team, this project became a
            success.
          </p>
        </div>

        {/* Right container with a block of text */}
        <div className="w-1/3 p-6 text-black">
          <p className="mb-8 font-figree">
          aya’s reminders
          made by 22°C <br />
          </p>

          <p className="mb-8 font-figree">
          ash - developer <br />
          </p>

          <p className="mb-8 font-figree">
          aids - developer <br />
          </p>

          <p className="mb-8 font-figree">
          narcel - audio & story <br />
          </p>

          <p className="mb-8 font-figree">
          jossaine - artist
          </p>
        </div>
      </div>
    </div>
  );
}

export default RunGame;
