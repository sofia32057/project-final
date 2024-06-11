import { Heading } from "../components/Heading";
import { Carousel } from "../components/Carousel";

export const Accommodation = () => {
  return (
    <section className=" px-6 py-8 lg:px-8">
      <div className="lg:ml-6">
        <Heading content={"Where to stay"} level={2} pre={"La dolce vita"} />
      </div>
      <Carousel />
    </section>
  );
};
