import { Heading } from "../components/Heading";
import { Accordion } from "../components/Accordion";

export const Faq = () => {
  return (
    <section
      id="faq"
      className="relative isolate overflow-hidden bg-white lg:overflow-visible lg:px-0"
    >
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="md:-ml-12 lg:sticky lg:top-8 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden lg:p-12">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <Heading content={"FAQ"} level={2} />
              <p className="mt-6 font-cormorant text-xl font-light leading-8 text-primary ">
                Here are some good-to-know things, to help you prepare for our
                special day.
              </p>
              <p className="text-base  mt-8 max-w-xl  leading-7 lg:max-w-lg">
                We hope this information is helpful, but if you have any other
                questions, please don't hesitate to reach out. We're looking
                forward to celebrating with you!
              </p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <Accordion />
        </div>
      </div>
    </section>
  );
};
