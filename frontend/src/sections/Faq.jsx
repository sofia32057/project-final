import { Heading } from "../components/Heading";
import { Accordion } from "../components/Accordion";
import { Intro } from "../components/Intro";
import { Paragraph } from "../components/Paragraph";
import FAQ from "../data/faq.json";

export const Faq = () => {
  return (
    <section
      id="faq"
      className="relative isolate overflow-hidden bg-secondary/25 ring-1 ring-secondary/10 drop-shadow-xl lg:overflow-visible lg:px-0 xxl:rounded-xl"
    >
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-4 py-12 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10 lg:p-0">
        {/* // Sticky part */}
        <div className="lg:sticky lg:top-8 lg:col-start-2 lg:row-span-1 lg:row-start-1 lg:overflow-hidden lg:p-12">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <Heading content={FAQ.heading} level={2} />
              <Intro content={FAQ.intro} />
              <Paragraph content={FAQ.body} />
            </div>
          </div>
        </div>

        {/* // Non sticky part */}
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <Accordion content={FAQ.faq} />
        </div>
      </div>
    </section>
  );
};
