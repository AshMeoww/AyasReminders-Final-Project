import Image from "next/image";

function LandingPage2() {
  return (
    // Card 1
    <div className="flex flex-col gap-12 p-18 bg-white">
      <div className="flex items-center justify-between p-18 bg-white rounded-lg">
        <div className="flex flex-col gap-2">
          <h3 className="text-8xl font-bold text-green-500 font-geologica w-2xs">Reduce Waste</h3>
          <p className="text-black mt-4 font-figtree font-extralight">Wag mo muna tapon ‘yan, gawin nating ano.</p>
        </div>
        <Image 
          src="/images/sproutie_waste.png"
          alt="Card 1 image"
          width={480}
          height={480}
        />
      </div>

        {/* Card 2 */}
      <div className="flex items-center justify-between p-18 bg-white ">
        <div className="flex flex-col gap-2">
          <h3 className="text-8xl font-bold text-green-500 font-geologica w-2xs">Reduce Carbon</h3>
          <p className="text-black mt-4 font-figtree font-extralight">O wag na magkotse.</p>
        </div>
        <Image 
          src="/images/sproutie_carbon.png"
          alt="Card 2 image"
          width={480}
          height={480}
          className="rounded-lg"
        />
      </div>

      {/* Card 3 */}
      <div className="flex items-center justify-between p-18 bg-white ">
        <div className="flex flex-col gap-2">
          <h3 className="text-8xl font-bold text-green-500 font-geologica">Save Water & Resources</h3>
          <p className="text-black mt-4 font-figtree font-extralight">Isara ang gripo ‘nak.</p>
        </div>
        <Image 
          src="/images/sproutie_water.png"
          alt="Card 3 image"
          width={480}
          height={480}
          className="mr-28"
        />
      </div>
    </div>
  );
}

export default LandingPage2;