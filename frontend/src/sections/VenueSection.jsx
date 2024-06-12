import { Map } from "../components/Map";
import { Heading } from "../components/Heading";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { Intro } from "../components/Intro";
import { Paragraph } from "../components/Paragraph";
import content from "../data/venue.json";

export const VenueSection = () => {
  return (
    <section
      id="venue"
      className="relative isolate overflow-hidden lg:overflow-visible lg:px-0"
    >
      <div className="grid lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
        <div className="lg:col-start-2 lg:row-end-2 lg:px-8">
          <Heading content={content.h1} level={2} pre={content.pre} />
          <Intro content={content.intro} />
        </div>
        <div className=" pt-6 md:pt-10 lg:sticky lg:row-span-2 lg:overflow-hidden ">
          <Map />
          <p className="inline-flex gap-2 py-4 md:items-center md:justify-center lg:top-8 lg:px-11 ">
            <MapPinIcon className=" h-8 w-8" /> Venue address: Castelnuovo
            Tancredi, 53022 Buonconvento SI, Italy
          </p>
        </div>
        <div className=" lg:px-8">
          <Heading content={content["h2-1"]} level={3} />
          <Paragraph content={content.content1} />
          <Heading content={content["h2-2"]} level={3} />
          <Paragraph content={content.content2} />
          <Heading content={content["h2-3"]} level={3} />
          <Paragraph content={content.content3} />
        </div>
      </div>
    </section>
  );
};
