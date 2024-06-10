export const Image = ({ src }) => {
  return (
    <img
      className="bg-gray-900 ring-gray-400/10 w-[48rem] max-w-none rounded-xl shadow-xl ring-1 sm:w-[57rem]"
      src={src}
      alt=""
    />
  );
};
