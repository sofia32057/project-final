export const Image = ({ src }) => {
  return (
    <img
      className="object-center-center max-h-svh w-full rounded-xl bg-primary object-cover shadow-xl ring-1 ring-secondary/10 md:w-[57rem] md:max-w-none"
      src={src}
      alt=""
    />
  );
};
