import { ParallaxBanner, ParallaxProvider } from "react-scroll-parallax";
import CoupleImage from "/pexels-sandeep-malith-97607821-9361349.webp";
import CoupleImage2 from "/pexels-asadphoto-1024984.webp";

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
                <div className="absolute inset-0 flex items-center justify-center ">
                  <p className="mx-8 text-center font-cormorant text-xl font-light leading-8 text-white">
                    “Once in a while, right in the middle of an ordinary life,
                    love gives us a fairy tale.”
                  </p>
                </div>
              ),
            },
          ]}
          className="aspect-[2/1.5]"
        />
      </ParallaxProvider>
    </>
  );
};
