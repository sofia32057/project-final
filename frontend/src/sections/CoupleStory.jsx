import { Heading } from "../components/Heading";
import { Image } from "../components/Image";
import Couple from "../assets/cody-black-VDb0wxbfG6k-unsplash_640x421.jpg";

export const CoupleStory = () => {
  return (
    <section className="bg-white relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <Heading
                content={"Our story"}
                level={2}
                pre={"It's happening!"}
              />
              <p className="text-gray-700 mt-6 text-xl leading-8">
                Together, we're building a life filled with joy, support, and
                endless possibilities.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <Image src={Couple} />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="text-base text-gray-700 max-w-xl leading-7 lg:max-w-lg">
              <p>
                Our love story began in the most unexpected way—during a chance
                meeting at a mutual friend's party. We instantly felt a
                connection that was impossible to ignore. Sarah, with her
                creative passion for graphic design, was drawn to Michael's kind
                heart and infectious sense of humor. Michael, a dedicated and
                adventurous software engineer, found himself captivated by
                Sarah's artistic spirit and warm, genuine nature.
              </p>
              <p className="mt-8">
                Over the years, our bond has only grown stronger. We've shared
                countless adventures, from spontaneous road trips to cozy nights
                at home filled with laughter and love. We complement each other
                perfectly, balancing each other's strengths and weaknesses in a
                beautiful harmony.
              </p>
              <p className="mt-8">
                One of the things that has strengthened our relationship is our
                shared love for new experiences. Whether it's hiking in the
                mountains, cooking a new recipe together, or simply enjoying a
                quiet evening with a good book, we find joy in the little
                moments and the big adventures. Our journey together has been
                nothing short of amazing, and we are grateful for every step
                we've taken side by side.
              </p>
            </div>{" "}
            <div className="lg:pr-4">
              <Heading content={"A Heartfelt Thank You"} level={3} />
              <p className="mt-6">
                We're excited to take the next step in our journey together and
                cannot wait to celebrate our love with family and friends on our
                special day. We are thrilled to begin this new chapter,
                surrounded by the people who have supported and cherished us
                throughout our lives. Thank you from the bottom of our hearts
                for being here and sharing this special moment with us. Your
                presence means the world to us, and we are so grateful to have
                you all in our lives.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
