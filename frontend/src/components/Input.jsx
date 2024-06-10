export const Input = ({ label, id, name, value, type, onChange, p }) => {
  return (
    <>
      {type == "checkbox" || type == "radio" ? (
        <div className="relative flex gap-x-3">
          <div className="flex h-6 items-center">
            <input
              id={id}
              name={name}
              checked={value}
              type={type}
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              onChange={onChange}
            />
          </div>
          <div className="text-sm leading-6">
            <label htmlFor="plus-one" className="font-medium text-gray-900">
              {label}
            </label>
            {p && <p className="text-gray-500">{p}</p>}
          </div>
        </div>
      ) : (
        <div className="sm:col-span-3">
          <label
            htmlFor="plus-one-name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            {label}
          </label>

          <div className="mt-2">
            <input
              id={id}
              name={name}
              value={value}
              type={type}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={onChange}
            />
            {p && <p className="text-gray-500">{p}</p>}
          </div>
        </div>
      )}
    </>
  );
};
