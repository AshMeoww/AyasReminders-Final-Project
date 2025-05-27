import Image from "next/image";
import AyaReminders from "./Aya's Reminders/page";
import LandingPage from "./Landing Page/page";
import Objectives from "./Objectives/page";

function HomePage() {
  return (
    <div className="relative h-screen">
      <div>
        <LandingPage />
      </div>


      <div>
        <AyaReminders />
      </div>

      <div>
        <Objectives />
      </div>
    </div>
  );
}

export default HomePage;
