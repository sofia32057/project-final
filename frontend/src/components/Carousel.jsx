// import { CarouselCard } from "./CarouselCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Terrasse from "/anastasia-saldatava-DZp5uVfRneI-unsplash.jpg";
import Garden from "/anastasia-saldatava-oNMk0OOul80-unsplash.jpg";
import Landscape from "/doozydoom-_v5HCKSZOkA-unsplash.jpg";
import DawnLandscape from "/giuseppe-mondi-fJWYwHWYQpY-unsplash.jpg";
import HouseTerrasse from "/mattia-bericchia-fSfgZCofQz0-unsplash.jpg";
import Pool from "/nicola-ricca-i2acnhnKssQ-unsplash.jpg";

export const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    centerPadding: "20px",
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <img
        className="h-60 w-auto object-cover p-2"
        src={Terrasse}
        alt={"Terrasse with a view"}
      />

      <img
        className="h-60 w-auto object-cover p-2"
        src={Landscape}
        alt={"Landscape of Tuscany"}
      />

      <img
        className="h-60 w-auto object-cover p-2"
        src={DawnLandscape}
        alt={"View to Tuscan house at dawn"}
      />

      <img
        className="h-60 w-auto object-cover p-2"
        src={HouseTerrasse}
        alt={"House with a terrasse in front"}
      />

      <img
        className="h-60 w-auto object-cover p-2"
        src={Pool}
        alt={"Poolside in Tuscany"}
      />

      <img
        className="h-60 w-auto object-cover p-2"
        src={Garden}
        alt={"Garden with table and chairs"}
      />
    </Slider>
  );
};

// <Slider className="flex">
//   <img src={Terrasse} alt={"Terrasse with a view"} />
//   <img src={Garden} alt={"Garden with table and chairs"} />
//   <img src={Landscape} alt={"Landscape of Tuscany"} />
//   <img src={DawnLandscape} alt={"View to Tuscan house at dawn"} />
//   <img src={HouseTerrasse} alt={"House with a terrasse in front"} />
//   <img src={Pool} alt={"Poolside in Tuscany"} />
// </Slider>
