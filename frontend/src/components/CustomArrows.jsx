import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <ChevronRightIcon
      className={className}
      style={{
        ...style,
        display: "block",
        height: "45px",
        width: "30px",
        color: "#451E2C",
        zIndex: "5",
      }}
      onClick={onClick}
    />
  );
};

export const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <ChevronLeftIcon
      className={className}
      style={{
        ...style,
        display: "block",
        height: "45px",
        width: "30px",
        color: "#451E2C",
        zIndex: "5",
      }}
      onClick={onClick}
    />
  );
};
