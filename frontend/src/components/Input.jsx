export const Input = ({
  label,
  id,
  name,
  value,
  type,
  onChange,
  p,
  checked,
  auto,
  required,
  placeholder,
}) => {
  return (
    <>
      {type == "checkbox" || type == "radio" ? (
        // If input is a checkbox or radio, put input before label
        <div className="relative flex gap-x-3">
          <div className="flex h-6 items-center">
            <input
              id={id}
              name={name}
              value={value}
              checked={checked}
              type={type}
              className="h-4 w-4 rounded border-primary text-secondary checked:accent-secondary focus:ring-secondary"
              onChange={onChange}
            />
          </div>
          <div className="text-sm leading-6">
            <label htmlFor={id} className="text-gray-900 font-medium">
              {label}
            </label>
            {p && <p className="text-gray-500">{p}</p>}
          </div>
        </div>
      ) : (
        // if input is anything else, place label first
        <div className="sm:col-span-3">
          <label
            htmlFor="plus-one-name"
            className="text-gray-900 block text-sm font-medium leading-6"
          >
            {label}
          </label>

          <div className="mt-2">
            <input
              id={id}
              name={name}
              value={value}
              type={type}
              autoComplete={auto}
              required={required}
              placeholder={placeholder}
              className="block w-full rounded-md border-0 px-2 py-1.5 shadow-sm ring-1 ring-inset ring-primary placeholder:text-xs placeholder:text-primary/50 focus:border-secondary focus:outline-secondary focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
              onChange={onChange}
            />
            {p && <p className="text-text">{p}</p>}
          </div>
        </div>
      )}
    </>
  );
};
