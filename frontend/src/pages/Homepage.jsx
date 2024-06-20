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
import ScrollToTop from "react-scroll-to-top";
import { ArrowUpIcon } from "@heroicons/react/24/outline";

export const Homepage = () => {
  return (
    <>
      <HeroSection content={content.hero} />
      <FishtankSection />
      <Schedule />
      <VenueSection />
      <Accommodation />
      <Faq />
      <CoupleStory />
      {/* <WeddingParty /> */}
      <GuestList />
      <Footer />
      <ScrollToTop
        smooth
        component={<ArrowUpIcon color="white" width={22} />}
        style={{
          backgroundColor: "#007678",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      />
    </>
  );
};
