import { Map } from "../components/Map";
import { Heading } from "../components/Heading";

export const VenueSection = () => {
  return (
    <section className="py-8">
      <div className="px-6">
        <Heading
          content={"The Wedding Venue"}
          level={2}
          pre={"Where forever starts"}
        />
      </div>
      <div className="flex flex-col px-6 pt-4">
        <p>Venue address: Castelnuovo Tancredi, 53022 Buonconvento SI, Italy</p>
      </div>
      <Map />
    </section>
  );
};
