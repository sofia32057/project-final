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
                  <p className=" mx-8 max-w-screen-md text-center font-cormorant text-2xl font-light leading-10 text-white lg:text-3xl">
                    “Once in a while, right in the middle of an ordinary life,
                    love gives us a fairy tale.”
                  </p>
                </div>
              ),
            },
          ]}
          className="aspect-[2/1.5] xl:rounded-xl"
        />
      </ParallaxProvider>
    </>
  );
};
