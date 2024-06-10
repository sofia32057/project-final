import { Map } from "../components/Map";
import { Heading } from "../components/Heading";
import { MapPinIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";

export const VenueSection = () => {
  return (
    <section className="grid px-6 py-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:grid-rows-2 lg:items-start lg:gap-y-10">
      <div className="lg:col-start-1 lg:row-end-2 lg:px-8">
        <Heading
          content={"The Wedding Venue"}
          level={2}
          pre={"Where forever starts"}
        />
      </div>
      <div className="flex flex-col pt-6 md:pt-10 lg:row-span-2 ">
        <Map />
      </div>
      <p className="inline-flex gap-2 py-4 md:items-center md:justify-center lg:top-8 lg:col-start-1 lg:row-end-2 lg:self-end lg:justify-self-start lg:px-8">
        <MapPinIcon className=" h-8 w-8" /> Venue address: Castelnuovo Tancredi,
        53022 Buonconvento SI, Italy
      </p>
      <div className="lg:col-start-1 lg:row-end-3 lg:self-start lg:px-8">
        <Heading content={"How to get there"} level={3} />
        <p className="mt-8 inline-flex flex-col">
          <RocketLaunchIcon className="h-8 w-8" /> To reach Castelnuovo Tancredi
          in Buonconvento, Italy, you can start from any major city in Italy. By
          car, head in the direction of Tuscany, following signs that lead you
          toward Siena. Once you are near Siena, continue driving towards
          Buonconvento. As you get closer, look for signs or ask locals for
          directions to Castelnuovo Tancredi.
          <p className="mt-8">
            If you prefer to bike, begin your journey in Tuscany. Follow the
            scenic routes that lead towards the countryside, making your way to
            Buonconvento. Along the way, enjoy the beautiful landscapes and seek
            guidance from locals as you approach Castelnuovo Tancredi.
          </p>
          <p className="mt-8">
            For those traveling by plane, book a flight to a major Italian
            airport such as Rome, Florence, or Pisa. After arriving, take local
            transportation such as a train or bus towards Siena. From Siena,
            find your way to Buonconvento through additional local transport
            options. Once in Buonconvento, you can arrange for a local taxi or
            ask for directions to Castelnuovo Tancredi.
          </p>
        </p>
      </div>
    </section>
  );
};
