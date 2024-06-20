import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";
import CoupleImage from "/pexels-sandeep-malith-97607821-9361349.webp";
import CoupleImage2 from "/pexels-asadphoto-1024984.webp";
import { Heading } from "../components/Heading";

export const FishtankSection = () => {
  return (
    <>
      <ParallaxProvider>
        <ParallaxBanner
          layers={[
            { image: CoupleImage2, speed: -20, expanded: false },
            {
              speed: -15,
              children: (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Heading content={"We are celebrating"} level={2} />
                </div>
              ),
            },
          ]}
          className="aspect-[2/1]"
        />
      </ParallaxProvider>
    </>
  );
};
