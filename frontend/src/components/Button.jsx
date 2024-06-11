import { Link } from "react-router-dom";

export const Button = ({ label, type, style, action }) => {
  const styling = {
    primary:
      "bg-background font-cormorant flex justify-center items-center hover:bg-accent hover:outline-primary focus-visible:outline-primary rounded-md px-4 py-2.5 text-base font-semibold shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2",
    text: "text-base font-bold text-primary font-cormorant hover:underline curstor-pointer",
    login:
      "text-base flex w-full items-center justify-center rounded-md bg-background px-4 py-2.5 font-cormorant font-semibold shadow-md hover:bg-accent hover:outline-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
  };

  return (
    <>
      <div className="flex flex-1">
        {type === "button" ? (
          <button className={styling[style]} onClick={action}>
            {label} {style === "text" && <span aria-hidden="true">&rarr;</span>}
          </button>
        ) : (
          <Link to={action} className={styling[style]}>
            {label} <span aria-hidden="true">&rarr;</span>
          </Link>
        )}
      </div>
    </>
  );
};
