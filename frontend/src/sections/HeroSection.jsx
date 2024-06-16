import { Image } from "../components/Image";
import { Countdown } from "../components/Countdown";
import { Heading } from "../components/Heading";
import { Button } from "../components/Button";
import { Intro } from "../components/Intro";
import { Paragraph } from "../components/Paragraph";

export const HeroSection = ({ content }) => {
  return (
    <section className="relative isolate overflow-hidden lg:overflow-visible">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-4 gap-y-16  lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        {/* <Countdown /> */}
        <div className="lg:col-start-1 lg:row-start-1 lg:mx-auto lg:w-full lg:max-w-7xl lg:px-8">
          <Heading content={content.h1} level={1} pre={content.pre} />
          <Intro content={content.intro} />
          <Paragraph content={content.paragraph} />
          <div className="mt-10 flex items-center  gap-x-6">
            <Button
              label={content.cta.label}
              type={content.cta.type}
              style={content.cta.style}
              href={content.cta.href}
              onClick={content.cta.onclick}
            />
          </div>
        </div>
        <div className="max-w-full justify-self-center lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:-ml-12 lg:-mt-12 lg:justify-self-auto lg:overflow-visible lg:p-12">
          <Image src={content.image} />
        </div>
      </div>
    </section>
  );
};
