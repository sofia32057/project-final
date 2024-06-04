import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../stores/useStore";

export const LoginForm = () => {
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });
  const { setToken, setIsLoggedIn } = useStore();

  const API_KEY = import.meta.env.API_KEY;
  const API_URL = "http://localhost:8080";
  const nav = useNavigate();

  // API fetch ---- should be moved to store
  const login = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: API_KEY },
        body: JSON.stringify(userInput),
      });
      if (!response.ok) {
        throw new Error("Error fetching data");
      }
      const userData = await response.json();
      setUserInput({ email: "", password: "" });
      setToken(userData.accessToken);
      setIsLoggedIn(true);
      nav("/");
      console.log("User logged in!", userData);
    } catch (error) {
      throw new Error("Error", error);
    }
  };

  // Handle change in the form
  const handleChange = (event) => {
    setUserInput({ ...userInput, [event.target.name]: event.target.value });
  };

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="mx-auto w-full max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Log in with your invitation to see wedding information
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={login}>
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
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Invitation code
                </label>
                {/* <div className="text-sm">
                  <a
                    href="#"
                    className="text-indigo-600 hover:text-indigo-500 font-semibold"
                  >
                    Forgot password?
                  </a>
                </div> */}
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Lost your invitation?{" "}
            <a
              href="#"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Contact us and we'll send you your login.
            </a>
          </p>
        </div>
      </div>
    </>
  );
};
