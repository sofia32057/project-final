import { CarouselCard } from "./CarouselCard";
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
    <Slider>
      <CarouselCard image={Terrasse} alt={"Terrasse with a view"} />
      <CarouselCard image={Garden} alt={"Garden with table and chairs"} />
      <CarouselCard image={Landscape} />
      <CarouselCard image={DawnLandscape} />
      <CarouselCard image={HouseTerrasse} />
      <CarouselCard image={Pool} />
    </Slider>
  );
};
