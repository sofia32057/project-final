export const Select = ({ id, label, name, value, options, onChange }) => {
  return (
    <>
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-primary"
      >
        {label}
      </label>
      <div className="mt-2">
        <select
          id={id}
          name={name}
          value={value}
          className="block w-full rounded-md border-0 py-1.5 text-primary shadow-sm ring-1 ring-inset ring-primary selection:bg-accent/25 focus:outline-secondary focus:ring-2 focus:ring-inset focus:ring-secondary sm:max-w-xs sm:text-sm sm:leading-6"
          onChange={(event) => onChange(event)}
        >
          {options.map((op) => (
            <option key={op} value={op}>
              {op}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
