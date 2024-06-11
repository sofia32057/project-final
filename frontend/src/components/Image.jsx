export const Image = ({ src }) => {
  return (
    <img
      className="w-full rounded-xl bg-primary shadow-xl ring-1 ring-secondary/10 md:w-[57rem] md:max-w-none"
      src={src}
      alt=""
    />
  );
};
