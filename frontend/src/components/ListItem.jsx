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
          <hp className="text-base font-cormorant font-semibold leading-7 tracking-tight">
            {person.relation}
          </hp>
          <p className="text-sm font-semibold leading-6 text-primary">
            {person.firstname} {person.lastname}
          </p>
          {person.plusOne.name && (
            <p className="text-sm font-light leading-7 tracking-tight text-text/75">
              {`will also bring ${person.plusOne.name}`}
            </p>
          )}
        </div>
      </div>
    </li>
  );
};

export const ListItem = ({ item }) => {
  <li key={item}>{item}</li>;
};
