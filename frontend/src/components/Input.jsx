export const Input = ({ label, id, name, value, type, onChange, p }) => {
  return (
    <>
      {type == "checkbox" || type == "radio" ? (
        <div className="relative flex gap-x-3">
          <div className="flex h-6 items-center">
            {type === "checkbox" ? (
              <input
                id={id}
                name={name}
                checked={value}
                type={type}
                className="border-gray-300 text-indigo-600 focus:ring-indigo-600 h-4 w-4 rounded"
                onChange={onChange}
              />
            ) : (
              <input
                id={id}
                name={name}
                value={value}
                type={type}
                className="border-gray-300 text-indigo-600 focus:ring-indigo-600 h-4 w-4 rounded"
                onChange={onChange}
              />
            )}
          </div>
          <div className="text-sm leading-6">
            <label htmlFor={id} className="text-gray-900 font-medium">
              {label}
            </label>
            {p && <p className="text-gray-500">{p}</p>}
          </div>
        </div>
      ) : (
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
              className="text-gray-900 ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
              onChange={onChange}
            />
            {p && <p className="text-gray-500">{p}</p>}
          </div>
        </div>
      )}
    </>
  );
};
