import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";

export const NotFound = () => {
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <Heading content={"Page not found"} level={1} pre={"404"} />
        <p className="mt-6 text-base leading-7 text-gray-600">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button cta={"To wedding info"} />
          {/* <a
            href="#"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go back home
          </a> */}
          <a href="/" className="text-sm font-semibold text-gray-900">
            Back to homepage <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </main>
  );
};
