export const CarouselCard = ({ styling, src, alt }) => {
  const defaultStyling = "h-80 w-auto rounded-xl object-cover p-1 md:h-90";
  const style = styling || defaultStyling;

  return <img className={style} src={src} alt={alt} />;
};
