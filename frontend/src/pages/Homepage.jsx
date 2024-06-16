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
import content from "../data/homepage.json";

export const Homepage = () => {
  return (
    <>
      <HeroSection content={content.hero} />
      {/* <FishtankSection /> */}
      <Schedule />
      <VenueSection />
      <Accommodation />
      <Faq />
      <CoupleStory />
      {/* <WeddingParty /> */}
      <GuestList />
      <Footer />
    </>
  );
};
