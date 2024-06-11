import { CarouselCard } from "./CarouselCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "./CustomArrows";
import Terrasse from "/anastasia-saldatava-DZp5uVfRneI-unsplash.jpg";
import Garden from "/anastasia-saldatava-oNMk0OOul80-unsplash.jpg";
import Landscape from "/doozydoom-_v5HCKSZOkA-unsplash.jpg";
import DinnerView from "/flo-p-pUor_oQHEG4-unsplash.jpg";
import HouseTerrasse from "/mattia-bericchia-fSfgZCofQz0-unsplash.jpg";
import Pool from "/nick-george-cCb5SMpxusA-unsplash.jpg";

export const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    centerPadding: "20px",
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: true,
    useTransform: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots) => (
      <div style={{ borderRadius: "10px", color: "#451E2C" }}>
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          background: "#451E2C",
          color: "#451E2C",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontSize: "12px",
        }}
      >
        {i + 1}
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
        breakpoint: 620,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className=" mx-auto my-6 md:max-w-3xl lg:max-w-5xl">
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
