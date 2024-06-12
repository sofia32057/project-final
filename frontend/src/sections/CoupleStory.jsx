import { Heading } from "../components/Heading";
import { Image } from "../components/Image";
import Couple from "../assets/cody-black-VDb0wxbfG6k-unsplash_1920x1263.jpg";
import { Intro } from "../components/Intro";
import { Paragraph } from "../components/Paragraph";
import content from "../data/our-story.json";

export const CoupleStory = () => {
  return (
    <section
      id="story"
      className="relative isolate overflow-hidden lg:overflow-visible lg:px-0"
    >
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-4 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <Heading content={content.h1} level={2} pre={content.pre} />
              <Intro content={content.intro} />
            </div>
          </div>
        </div>
        <div className="max-w-full justify-self-center lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:-ml-12 lg:-mt-12 lg:justify-self-auto lg:overflow-visible lg:p-12">
          <Image src={Couple} />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl lg:max-w-lg">
              <Paragraph content={content.body} />
            </div>
            <div className="lg:pr-4">
              <Heading content={content.outro.heading} level={3} />
              <Paragraph content={content.outro.body} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
