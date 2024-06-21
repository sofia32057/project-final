import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../stores/useStore";
import { Heading } from "./Heading";
import { Button } from "./Button";
import { Intro } from "./Intro";
import { Input } from "../components/Input";

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
      <div className=" flex flex-col justify-center px-6 py-4 md:py-8 lg:px-8">
        <div className="mx-auto w-full max-w-sm">
          <Intro
            content={"Log in with your invitation to see wedding information"}
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
                <Input
                  id={"email"}
                  name={"email"}
                  type={"email"}
                  auto={"email"}
                  required={true}
                  onChange={handleChange}
                  placeholder={"Type your email..."}
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
                <Input
                  id={"password"}
                  name={"password"}
                  type={"password"}
                  auto={"current-password"}
                  required={true}
                  onChange={handleChange}
                  placeholder={"The code from the invite..."}
                />
              </div>
            </div>

            <div>
              <Button label={"Log in"} type={"button"} style={"login"} />
            </div>
          </form>

          <p className="mt-10 flex flex-col text-center text-sm text-text">
            Lost your invitation?{" "}
            <a
              href="#"
              className="font-semibold leading-6 text-accent hover:text-primary"
            >
              Contact us and we'll send you your login.
            </a>
          </p>
        </div>
      </div>
    </>
  );
};
