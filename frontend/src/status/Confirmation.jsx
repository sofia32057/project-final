import { useStore } from "../../stores/useStore";
import { Heading } from "../components/Heading";
import { Button } from "../components/Button";
import { Paragraph } from "../components/Paragraph";
import { useEffect } from "react";

export const Confirmation = () => {
  const { guestData, setGuestData } = useStore();

  useEffect(() => {
    setGuestData();
  }, []);

  return (
    <section className="grid min-h-full place-items-center bg-transparent px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <Heading
          content={"Thanks for letting us know!"}
          level={1}
          pre={"Confirmation"}
        />

        <Paragraph
          content={
            Object.keys(guestData).length < 1
              ? ""
              : guestData.willAttend
                ? "Can't wait to see you there!"
                : "We appreciate your answer."
          }
        />
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button
            label={"To wedding info"}
            type={"link"}
            href={"/"}
            style={"primary"}
          />
          <Button
            label={"Contact us"}
            type={"link"}
            href={"mailto:"}
            style={"text"}
          />
        </div>
      </div>
    </section>
  );
};
