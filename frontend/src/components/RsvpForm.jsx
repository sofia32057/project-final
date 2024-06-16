import { useEffect, useState } from "react";
import { useStore } from "../../stores/useStore";
import { Button } from "./Button";
import { Select } from "./Select";
import { Input } from "./Input";
import { useNavigate } from "react-router-dom";

export const RsvpForm = () => {
  const { setGuestData } = useStore();
  // const setGuestData = useStore((state) => state.setGuestData);
  const guestData = useStore((state) => state.guestdata);
  const updateGuest = useStore((state) => state.updateGuest);
  const [plusOne, setPlusOne] = useState(false);
  const [rsvp, setRsvp] = useState({
    speech: {
      willMakeSpeech: false,
    },
    foodChoice: "--",
    willAttend: false,
    plusOne: {
      name: "",
      foodChoice: "--",
    },
  });
  const foodOptions = ["Select", "Meat", "Fish", "Vegan"];
  const nav = useNavigate();

  // Handle Submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    updateGuest(rsvp, () => {
      nav("/confirmation");
      location.reload();
    });
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

  useEffect(() => {
    setGuestData;
  }, []);

  useEffect(() => {
    console.log(rsvp);
  }, [rsvp]);

  useEffect(() => {
    console.log(guestData);
  }, [setGuestData]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-12">
        {/* RSVP section of the form */}
        <div className="border-gray-900/10 border-b pb-12">
          {/* GUEST RSVP */}
          <div className="mt-10 space-y-10">
            <fieldset id="attending" className="border-gray-300">
              <legend className="text-base text-gray-900 font-semibold leading-7">
                My RSVP
              </legend>
              <div className="mt-6 space-y-6">
                <Input
                  label={"I will attend"}
                  id={"will-attend"}
                  name={"willAttend"}
                  value={true}
                  type={"radio"}
                  onChange={handleChange}
                />
                <Input
                  label={"I will not attend"}
                  id={"will-not-attend"}
                  name={"willAttend"}
                  value={false}
                  type={"radio"}
                  onChange={handleChange}
                />

                {rsvp.willAttend === "true" && (
                  <>
                    {
                      <Input
                        label={"I want to make a speech"}
                        id={"speech"}
                        name={"speech.willMakeSpeech"}
                        value={rsvp.speech.willMakeSpeech}
                        type={"checkbox"}
                        onChange={handleNested}
                        p={"All guest speeches are limited to 5 min each."}
                      />
                    }

                    <div className="relative gap-x-3">
                      <div className="sm:col-span-3">
                        <Select
                          label={"My food preferences"}
                          id={"food-choice"}
                          name={"foodChoice"}
                          // value={""}
                          options={foodOptions}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </>
                )}
              </div>
            </fieldset>
          </div>

          {/* PLUS ONE */}
          {rsvp.willAttend === "true" && (
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
                  <Input
                    label={"I will bring a plus one"}
                    id={"plus-one"}
                    name={"plus-one"}
                    value={plusOne}
                    type={"checkbox"}
                    onChange={() => setPlusOne(!plusOne)}
                  />

                  {/* Info about the plus one - show only if bringing */}
                  {plusOne && (
                    <>
                      <Input
                        label={"Their name"}
                        id={"plus-one-name"}
                        name={"plusOne.name"}
                        value={rsvp.plusOne.name}
                        type={"text"}
                        onChange={handleNested}
                      />

                      <div className="sm:col-span-3">
                        <Select
                          label={"Their food preferences"}
                          id={"plus-one-food-choice"}
                          name={"plusOne.foodChoice"}
                          // value={rsvp.plusOne.foodChoice}
                          options={foodOptions}
                          onChange={handleNested}
                        />
                      </div>
                    </>
                  )}
                </div>
              </fieldset>
            </div>
          )}
        </div>
        {/* End of RSVP section */}
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <Button label={"Save"} type={"button"} style={"login"} />
      </div>
    </form>
  );
};
