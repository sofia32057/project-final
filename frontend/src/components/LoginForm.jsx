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
  const setGuestData = useStore((state) => state.setGuestData);
  const nav = useNavigate();

  // Handle Submit
  const handleSubmit = (event) => {
    event.preventDefault();
    login(userInput, () => {
      nav("/");
      location.reload();
    });
  };

  // Handle change in the form
  const handleChange = (event) => {
    setUserInput({ ...userInput, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    setUserInput();
  }, []);

  return (
    <>
      <div className=" flex flex-col justify-center px-6 py-10 md:py-16 lg:px-8">
        <div className="mx-auto w-full max-w-sm">
          <Heading
            content={"Log in with your invitation to see wedding information"}
            level={2}
          />
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="text-gray-900 block text-sm font-medium leading-6"
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
                  className="block w-full rounded-md border-0 py-1.5 text-sm leading-6 text-text shadow-sm ring-1 ring-inset ring-accent placeholder:text-text focus:ring-2 focus:ring-inset focus:ring-secondary"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-text"
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
                  className="placeholder:text-gray-400 block w-full rounded-md border-0 py-1.5 text-sm leading-6 text-text shadow-sm ring-1 ring-inset ring-accent focus:ring-2 focus:ring-inset focus:ring-secondary"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <Button label={"Log in"} type={"button"} style={"login"} />
              {/* <button
                type="submit"
                className="text-base flex w-full items-center justify-center rounded-md bg-background px-4 py-2.5 font-cormorant font-semibold shadow-md hover:bg-accent hover:outline-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Sign in
              </button> */}
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-text">
            Lost your invitation?{" "}
            <a
              href="#"
              className="hover:text-indigo-500 font-semibold leading-6 text-accent"
            >
              Contact us and we'll send you your login.
            </a>
          </p>
        </div>
      </div>
    </>
  );
};
