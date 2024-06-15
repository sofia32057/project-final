import { Icon } from "./Icon";

export const GuestItem = ({ person }) => {
  return (
    <li key={person._id}>
      <div className="flex items-center gap-x-6">
        {person.imageUrl ? (
          <img
            className="h-16 w-16 rounded-full"
            src={person.imageUrl}
            alt=""
          />
        ) : (
          <Icon activity={"User"} />
        )}
        <div className="flex-1">
          <h3 className="text-base text-gray-900 font-semibold leading-7 tracking-tight">
            {person.firstname} {person.lastname}
          </h3>
          <p className="text-indigo-600 text-sm font-semibold leading-6">
            {person.relation}
          </p>
        </div>
      </div>
    </li>
  );
};

export const ListItem = ({ item }) => {
  <li key={item}>{item}</li>;
};
