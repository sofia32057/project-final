import { useEffect, useState } from "react";
import { Button } from "./Button";
import { Icon } from "./Icon";

/* State should be set globally and connected to API for real guest data */

export const RsvpForm = () => {
  const [plusOne, setPlusOne] = useState(false);
  const [rsvp, setRsvp] = useState({
    speech: {
      willMakeSpeech: false,
    },
    foodChoice: "Select",
    willAttend: false,
    plusOne: {
      name: "",
      foodChoice: "Select",
    },
  });

  const API_KEY = import.meta.env.API_KEY;
  const API_URL = "http://localhost:8080";
  const guestId = "66561b028575d0e5972fc845"; // FOR DEV, should be loged in ID
  const foodOptions = ["Select", "Meat", "Fish", "Vegan"];

  // API fetch ---- should be moved to store
  const patchRsvp = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${API_URL}/guests/${guestId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json", Authorization: API_KEY },
        body: JSON.stringify(rsvp),
      });
      if (!response.ok) {
        throw new Error("Error fetching data");
      }
      console.log("Patched data", guestId, rsvp);
    } catch (error) {
      // setErrorMessage("Your thought couldn't be posted...");
      throw new Error("Error", error);
    }
  };

  // Handle change in the form
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const answer = type === "checkbox" ? checked : value;
    setRsvp({ ...rsvp, [name]: answer });
  };
  // Handle change for nested object
  const handleNested = (event) => {
    const { value, type, checked } = event.target;
    const answer = type === "checkbox" ? checked : value;
    const name = event.target.name.split(".");
    setRsvp({
      ...rsvp,
      [name[0]]: { ...rsvp[name[0]], [name[1]]: answer },
    });
  };

  useEffect(() => console.log(rsvp), [rsvp]);

  return (
    /*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

    <form onSubmit={patchRsvp}>
      <div className="space-y-12">
        {/* RSVP section of the form */}
        <div className="border-gray-900/10 border-b pb-12">
          {/* GUEST RSVP */}
          <div className="mt-10 space-y-10">
            <fieldset id="attending" className="border-gray-300">
              <legend className="text-base text-gray-900 font-semibold leading-7">
                My RSVP
              </legend>
              <p className="text-gray-600 mt-1 text-sm leading-6">
                Bla bla bla something about RSVP-ing.
              </p>
              <div className="mt-6 space-y-6">
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="will-attend"
                      name="willAttend"
                      value={rsvp.willAttend}
                      type="checkbox"
                      className="border-gray-300 text-indigo-600 focus:ring-indigo-600 h-4 w-4 rounded"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label
                      htmlFor="will-attend"
                      className="text-gray-900 font-medium"
                    >
                      I will attend
                    </label>
                  </div>
                </div>

                {rsvp.willAttend && (
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        id="speech"
                        name="speech.willMakeSpeech"
                        value={rsvp.speech.willMakeSpeech}
                        type="checkbox"
                        className="border-gray-300 text-indigo-600 focus:ring-indigo-600 h-4 w-4 rounded"
                        onChange={handleNested}
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label
                        htmlFor="speech"
                        className="text-gray-900 font-medium"
                      >
                        I want to make a speech
                      </label>
                      <p className="text-gray-500">
                        All guest speeches are limited to 5 min each.
                      </p>
                    </div>
                  </div>
                )}
                {rsvp.willAttend && (
                  <div className="relative gap-x-3">
                    <div className="sm:col-span-3">
                      <label
                        htmlFor="food-choice"
                        className="text-gray-900 block text-sm font-medium leading-6"
                      >
                        My food preferences
                      </label>
                      <div className="mt-2">
                        <select
                          id="food-choice"
                          name="foodChoice"
                          value={rsvp.foodChoice}
                          autoComplete="none"
                          className="text-gray-900 ring-gray-300 focus:ring-indigo-600 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:max-w-xs sm:text-sm sm:leading-6"
                          onChange={handleChange}
                        >
                          {foodOptions.map((op) => (
                            <option key={op} value={op}>
                              {op}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="col-span-full">
                      <label
                        htmlFor="allergy"
                        className="text-gray-900 block text-sm font-medium leading-6"
                      >
                        I am allergic to:
                      </label>
                      <div className="mt-2">
                        <textarea
                          id="allergy"
                          name="allergy"
                          rows={3}
                          className="text-gray-900 ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                          defaultValue={""}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </fieldset>
          </div>

          {/* PLUS ONE */}
          {rsvp.willAttend && (
            <div className="mt-10 space-y-10">
              <fieldset id="attending" className="border-gray-300">
                <legend className="text-base text-gray-900 font-semibold leading-7">
                  My plus one
                </legend>
                <p className="text-gray-600 mt-1 text-sm leading-6">
                  You are welcome to bring a plus one. We just ask that you tell
                  us who.
                </p>
                <div className="mt-6 space-y-6">
                  <div className="relative flex gap-x-3">
                    <div className="flex h-6 items-center">
                      <input
                        id="plus-one"
                        name="plus-one"
                        value={plusOne}
                        type="checkbox"
                        className="border-gray-300 text-indigo-600 focus:ring-indigo-600 h-4 w-4 rounded"
                        onChange={() => setPlusOne(!plusOne)}
                      />
                    </div>
                    <div className="text-sm leading-6">
                      <label
                        htmlFor="plus-one"
                        className="text-gray-900 font-medium"
                      >
                        I will bring a plus one
                      </label>
                    </div>
                  </div>

                  {/* Info about the plus one - show only if bringing */}
                  {plusOne && (
                    <>
                      <div className="sm:col-span-3">
                        <label
                          htmlFor="plus-one-name"
                          className="text-gray-900 block text-sm font-medium leading-6"
                        >
                          Their name
                        </label>
                        <div className="mt-2">
                          <input
                            id="plus-one-name"
                            name="plusOne.name"
                            value={rsvp.plusOne.name}
                            type="text"
                            autoComplete="none"
                            className="text-gray-900 ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                            onChange={handleNested}
                          />
                        </div>
                      </div>
                      <div className="sm:col-span-3">
                        <label
                          htmlFor="plus-one-food-choice"
                          className="text-gray-900 block text-sm font-medium leading-6"
                        >
                          Their food preferences
                        </label>
                        <div className="mt-2">
                          <select
                            id="plus-one-food-choice"
                            name="plusOne.foodChoice"
                            value={rsvp.plusOne.foodChoice}
                            autoComplete="none"
                            className="text-gray-900 ring-gray-300 focus:ring-indigo-600 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:max-w-xs sm:text-sm sm:leading-6"
                            onChange={handleNested}
                          >
                            {foodOptions.map((op) => (
                              <option key={op} value={op}>
                                {op}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="col-span-full">
                        <label
                          htmlFor="allergy"
                          className="text-gray-900 block text-sm font-medium leading-6"
                        >
                          Their allergies:
                        </label>
                        <div className="mt-2">
                          <textarea
                            id="allergy"
                            name="allergy"
                            rows={3}
                            className="text-gray-900 ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                            defaultValue={""}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </fieldset>
            </div>
          )}
        </div>
        {/* End of RSVP section */}

        {/* About the guest */}
        <div className="border-gray-900/10 border-b pb-12">
          <h2 className="text-base text-gray-900 font-semibold leading-7">
            Guest Profile
          </h2>
          <p className="text-gray-600 mt-1 text-sm leading-6">
            This information will be displayed publicly so be careful what you
            share.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full">
              <label
                htmlFor="about"
                className="text-gray-900 block text-sm font-medium leading-6"
              >
                About
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="text-gray-900 ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
              <p className="text-gray-600 mt-3 text-sm leading-6">
                Write a few sentences about yourself.
              </p>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="photo"
                className="text-gray-900 block text-sm font-medium leading-6"
              >
                Photo
              </label>
              <div className="mt-2 flex items-center gap-x-3">
                <Icon className="text-gray-300 h-12 w-12" aria-hidden="true" />
                <Button
                  type="primary"
                  className="bg-white text-gray-900 ring-gray-300 hover:bg-gray-50 rounded-md px-2.5 py-1.5 text-sm font-semibold shadow-sm ring-1 ring-inset"
                  text="Change"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-gray-900 text-sm font-semibold leading-6"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-600 rounded-md px-3 py-2 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          Save
        </button>
      </div>
    </form>
  );
};
