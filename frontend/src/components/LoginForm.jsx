import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../stores/useStore";
import { Heading } from "./Heading";
import { Button } from "./Button";

export const LoginForm = () => {
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });
  const login = useStore((state) => state.login);
  const isLoggedIn = useStore((state) => state.isLoggedIn);
  const nav = useNavigate();

  // Handle Submit
  const handleSubmit = (event) => {
    event.preventDefault();
    login(userInput);
    nav("/");
  };

  // Handle change in the form
  const handleChange = (event) => {
    setUserInput({ ...userInput, [event.target.name]: event.target.value });
  };

  return (
    <>
      <div className="flex h-full flex-col justify-center px-6 lg:px-8">
        <div className="mx-auto w-full max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Log in with your invitation to see wedding information
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="focus:ring-secondary placeholder:text-text block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-text block text-sm font-medium leading-6"
                >
                  Invitation code
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="focus:ring-secondary text-text block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              {/* <Button
                label={"Sign in"}
                type={"handleSubmit"}
                style={"primary"}
                action={"/"}
              /> */}
              <button
                type="submit"
                className="bg-background font-cormorant hover:bg-accent hover:outline-primary focus-visible:outline-primary flex w-full items-center justify-center rounded-md px-4 py-2.5 text-base font-semibold shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Lost your invitation?{" "}
            <a
              href="#"
              className="text-accent font-semibold leading-6 hover:text-indigo-500"
            >
              Contact us and we'll send you your login.
            </a>
          </p>
        </div>
      </div>
    </>
  );
};
