import { GuestItem } from "./ListItem";

export const List = ({ items }) => {
  return (
    <ul
      role="list"
      className="col-span-2 grid w-full gap-x-8 gap-y-12 sm:gap-y-16 md:grid-cols-2"
    >
      {items.map((item) => (
        <GuestItem person={item} />
      ))}
    </ul>
  );
};
