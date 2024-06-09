import GoogleMapReact from "google-map-react";

export const Map = () => {
  const iframeSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11646.80573287588!2d11.424948177877672!3d43.131797888103904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13297bfd47e9d19b%3A0xffe33fd95ccd484b!2s53022%20Castelnuovo%20Tancredi%2C%20Province%20of%20Siena%2C%20Italy!5e0!3m2!1sen!2sch!4v1717937803097!5m2!1sen!2sch";

  return (
    <div className="h-96 w-svw">
      <iframe
        src={iframeSrc}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
  );
};
