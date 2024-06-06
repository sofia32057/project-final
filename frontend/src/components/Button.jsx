import { Link } from "react-router-dom";

export const Button = ({ label, type, style, action }) => {
  const styling = {
    primary:
      "bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-600 rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
    text: "",
  };

  return (
    <>
      <div className="flex">
        {type === "button" ? (
          <button className={styling[style]} onClick={action}>
            {label}
          </button>
        ) : (
          <Link to={action} className={styling[style]}>
            {label}
          </Link>
        )}
      </div>
    </>
  );
};
