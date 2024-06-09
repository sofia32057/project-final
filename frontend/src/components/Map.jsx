import GoogleMapReact from "google-map-react";

export const Map = () => {
  const defaultProps = {
    center: {
      lat: 43.141678145786706,
      lng: 11.427681586218547,
    },
    zoom: 13,
  };
  return (
    // Important! Always set the container height explicitly
    <div className="h-96 w-svw">
      <GoogleMapReact
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <GoogleMapReact
          lat={43.141678145786706}
          lng={11.427681586218547}
          text="Wedding Venue"
        />
      </GoogleMapReact>
    </div>
  );
};
