export const CarouselCard = ({ image, alt }) => {
  return (
    <div>
      <div className="">
        <img src={image} alt={alt} />
      </div>
    </div>
  );
};
