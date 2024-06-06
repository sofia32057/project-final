import { Image } from "../components/Image";
import { Countdown } from "../components/Countdown";
import { Heading } from "../components/Heading";
import { Button } from "../components/Button";

export const HeroSection = () => {
  return (
    <section className="relative isolate px-6 pt-14 lg:px-8">
      <Countdown />
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        {/* <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          <div className="text-gray-600 ring-gray-900/10 hover:ring-gray-900/20 relative rounded-full px-3 py-1 text-sm leading-6 ring-1">
            We're getting married!
          </div>
        </div> */}
        <div className="text-center">
          <Heading
            content={"Sarah & Michael"}
            level={1}
            pre={"We're getting married!"}
          />

          <p className="text-gray-600 text-base mt-6 leading-8  lg:text-lg">
            <span className="block text-left leading-loose">
              Dear Family and Friends,
            </span>{" "}
            We are overjoyed to share this special moment with you. Your love
            and support mean the world to us, and we are incredibly grateful to
            have you in our lives. We look forward to creating beautiful
            memories together on our wedding day.{" "}
            <span className="block text-right italic leading-loose">
              With love, Sarah and Michael
            </span>
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button
              label={"RSVP"}
              type={"link"}
              style={"primary"}
              action={"/rsvp"}
            />
          </div>
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </section>
  );
};
