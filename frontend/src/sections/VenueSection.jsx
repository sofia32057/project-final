import { Map } from "../components/Map";

export const VenueSection = () => {
  return (
    <>
      <h2>The Wedding Venue</h2>
      <Map />
      <div className="flex flex-col">
        <p>
          Venue address <br /> Wedding Street 888, 12345 Marriage City
        </p>
      </div>
    </>
  );
};
