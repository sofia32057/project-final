export const CarouselCard = ({ styling, src, alt }) => {
  const defaultStyling = "h-80 md:h-96 min-w-40 rounded-xl object-cover p-1";
  const style = styling || defaultStyling;

  return <img className={style} src={src} alt={alt} />;
};
