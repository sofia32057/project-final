import { Image } from "../components/Image";
import { Countdown } from "../components/Countdown";
import { Heading } from "../components/Heading";
import { Button } from "../components/Button";
import Chairs from "../assets/jeremy-wong-weddings-K41SGnGKxVk-unsplash_1920x1280.jpg";
import { Intro } from "../components/Intro";
import { Paragraph } from "../components/Paragraph";

export const HeroSection = () => {
  return (
    <section className="relative isolate overflow-hidden lg:overflow-visible">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-4 gap-y-16  lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        {/* <Countdown /> */}
        <div className="lg:col-start-1 lg:row-start-1 lg:mx-auto lg:w-full lg:max-w-7xl lg:px-8">
          <Heading
            content={"Sarah & Michael"}
            level={1}
            pre={"We're getting married!"}
          />
          <Intro
            content={`
              Dear Family and Friends,
            We are overjoyed to share this special moment with you. 
            `}
          />
          <Paragraph
            content={
              "Your love and support mean the world to us, and we are incredibly grateful to have you in our lives. We look forward to creating beautiful memories together on our wedding day. With love, Sarah and Michael"
            }
          />
          <div className="mt-10 flex items-center  gap-x-6">
            <Button
              label={"RSVP"}
              type={"link"}
              style={"primary"}
              action={"/rsvp"}
            />
          </div>
        </div>
        <div className="max-w-full justify-self-center lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:-ml-12 lg:-mt-12 lg:justify-self-auto lg:overflow-visible lg:p-12">
          <Image src={Chairs} />
        </div>
      </div>
    </section>
  );
};
