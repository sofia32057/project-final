import { Map } from "../components/Map";

export const VenueSection = () => {
  return (
    <>
      <h2>The Wedding Venue</h2>
      <Map />
      <div className="flex flex-col">
        <p>
          Venue address <br /> Castelnuovo Tancredi, 53022 Buonconvento SI,
          Italy
        </p>
      </div>
    </>
  );
};
