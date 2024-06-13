import { HeroSection } from "../sections/HeroSection";
import { FishtankSection } from "../sections/FishtankSection";
import { Schedule } from "../sections/Schedule";
import { VenueSection } from "../sections/VenueSection";
import { Footer } from "../sections/Footer";
import { CoupleStory } from "../sections/CoupleStory";
import { WeddingParty } from "../sections/WeddingParty";
import { Faq } from "../sections/Faq";
import { Accommodation } from "../sections/Accommodation";
import { GuestList } from "../sections/GuestList";

export const Homepage = () => {
  return (
    <>
      <HeroSection />
      {/* <FishtankSection /> */}
      <Schedule />
      <VenueSection />
      <Accommodation />
      <Faq />
      <CoupleStory />
      {/* <WeddingParty />
      <GuestList /> */}
      <Footer />
    </>
  );
};
