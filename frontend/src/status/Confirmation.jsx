import { useStore } from "zustand";
import { Heading } from "../components/Heading";
import { Button } from "../components/Button";

export const Confirmation = () => {
  // const isAttending = useStore((state) => state.guestData.isAttending);
  return (
    <section className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <Heading
          content={"Thanks for letting us know!"}
          level={1}
          pre={"Confirmation"}
        />
        <p className="text-base mt-6 leading-7 text-gray-600">
          This text is supposed to change depending on your answer. We haven't
          fixed that yet 🤷‍♀️
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button
            label={"To wedding info"}
            type={"link"}
            action={"/"}
            style={"primary"}
          />
          <Button
            label={"Contact us"}
            type={"text"}
            action={"mailto:"}
            style={"text"}
          />
        </div>
      </div>
    </section>
  );
};
