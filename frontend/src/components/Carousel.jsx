import { CarouselCard } from "./CarouselCard";
import { NextArrow, PrevArrow } from "./CustomArrows";
import Terrasse from "/anastasia-saldatava-DZp5uVfRneI-unsplash.webp";
import Garden from "/anastasia-saldatava-oNMk0OOul80-unsplash.webp";
import Landscape from "/doozydoom-_v5HCKSZOkA-unsplash.webp";
import DinnerView from "/flo-p-pUor_oQHEG4-unsplash.webp";
import HouseTerrasse from "/mattia-bericchia-fSfgZCofQz0-unsplash.webp";
import Pool from "/nick-george-cCb5SMpxusA-unsplash.webp";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    centerPadding: "15px",
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    lazyLoad: true,
    centerMode: true,
    useTransform: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots) => (
      <div style={{ borderRadius: "10px", color: "#451E2C" }}>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <Slider
      {...settings}
      className="px-auto mx-4 my-6 w-full md:mx-auto md:max-w-3xl lg:max-w-5xl"
    >
      <CarouselCard src={Terrasse} alt={"Terrasse with a view"} />
      <CarouselCard src={Landscape} alt={"Landscape of Tuscany"} />
      <CarouselCard src={DinnerView} alt={"Dinner table with a view"} />
      <CarouselCard
        src={HouseTerrasse}
        alt={"House with a terrasse in front"}
      />
      <CarouselCard src={Pool} alt={"Poolside in Tuscany"} />
      <CarouselCard src={Garden} alt={"Garden with table and chairs"} />
    </Slider>
  );
};
