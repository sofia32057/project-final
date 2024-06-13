import { Link } from "react-router-dom";

export const Button = ({ label, type, style, action }) => {
  const styling = {
    primary:
      "bg-secondary text-white font-cormorant flex justify-center items-center hover:bg-background hover:outline-primary focus-visible:outline-primary rounded-md px-10 py-2.5 text-base font-semibold shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
    text: "text-base font-bold text-secondary font-cormorant hover:underline curstor-pointer hover:text-primary",
    login:
      "text-xl text-white flex w-full items-center justify-center rounded-md bg-secondary px-4 py-2.5 font-cormorant font-semibold shadow-md hover:bg-background hover:outline-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
  };

  return (
    <>
      <div className="flex flex-1">
        {type === "button" ? (
          <button className={styling[style]} onClick={action}>
            {label}{" "}
            {style === "text" && <span aria-hidden="true"> &rarr;</span>}
          </button>
        ) : (
          <Link to={action} className={styling[style]}>
            {label} <span aria-hidden="true"> &rarr;</span>
          </Link>
        )}
      </div>
    </>
  );
};
