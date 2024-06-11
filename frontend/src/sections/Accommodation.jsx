import { Heading } from "../components/Heading";
import { Carousel } from "../components/Carousel";

export const Accommodation = () => {
  return (
    <section className="mx-auto max-w-screen-xl px-6 py-8 lg:px-8">
      <Heading content={"Where to stay"} level={2} pre={"La dolce vita"} />
      <Carousel />
    </section>
  );
};
