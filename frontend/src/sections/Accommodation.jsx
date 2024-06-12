import { Heading } from "../components/Heading";
import { Carousel } from "../components/Carousel";

export const Accommodation = () => {
  return (
    <section id="accomodation" className=" relative isolate px-6 py-8 lg:px-8">
      <div className="mx-6md:mx-8 max-w-2xl lg:ml-6">
        <Heading content={"Where to stay"} level={2} pre={"La dolce vita"} />
      </div>
      <Carousel />
    </section>
  );
};
