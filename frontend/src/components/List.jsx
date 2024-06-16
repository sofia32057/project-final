import { GuestItem } from "./ListItem";

export const List = ({ items }) => {
  return (
    <ul
      role="list"
      className="col-span-2 grid w-full gap-x-6 gap-y-8 sm:gap-y-12 md:grid-cols-2"
    >
      {items.map((item) => (
        <GuestItem key={item.firstname} person={item} />
      ))}
    </ul>
  );
};
