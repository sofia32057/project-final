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
        <div className="pt-6 md:pt-10 lg:sticky lg:top-8 lg:row-span-2 lg:overflow-hidden">
          <Map />
          <div className="flex items-center justify-center py-4">
            <MapPinIcon className="mr-2 h-8 w-8" />
            <p className="text-center">
              Venue address: Castelnuovo Tancredi, 53022 Buonconvento SI, Italy
            </p>
          </div>
        </div>
        <div className="lg:px-8">
          {content.transportation.map((t) => {
            return (
              <div key={t.h2}>
                <Heading content={t.h2} level={3} />
                <Paragraph content={t.text} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
