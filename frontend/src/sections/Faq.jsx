import { Heading } from "../components/Heading";
import { Accordion } from "../components/Accordion";

export const Faq = () => {
  return (
    <section className="relative isolate flex flex-col overflow-hidden px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6 lg:py-24">
        <Heading content={"FAQ"} level={2} />
        <Accordion />
      </div>
    </section>
  );
};
