import { Heading } from "../components/Heading";
import { Accordion } from "../components/Accordion";

export const Faq = () => {
  return (
    <section className="bg-white py-24 sm:py-32">
      <Heading content={"FAQ"} level={2} />
      <Accordion />
    </section>
  );
};
