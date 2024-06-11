// import { CarouselCard } from "./CarouselCard";
import Slider from "react-slick";

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
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={Terrasse} alt={"Terrasse with a view"} />
      </div>
      <div>
        <img src={Garden} alt={"Garden with table and chairs"} />
      </div>
      <div>
        <img src={Landscape} alt={"Landscape of Tuscany"} />
      </div>
      <div>
        <img src={DawnLandscape} alt={"View to Tuscan house at dawn"} />
      </div>
      <div>
        <img src={HouseTerrasse} alt={"House with a terrasse in front"} />
      </div>
      <div>
        <img src={Pool} alt={"Poolside in Tuscany"} />
      </div>
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
