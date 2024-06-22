import { useEffect } from "react";
import { useStore } from "../stores/useStore";
import { Heading } from "../components/Heading";
import { Intro } from "../components/Intro";
import { List } from "../components/List";
import { Button } from "../components/Button";
import { Paragraph } from "../components/Paragraph";

export const GuestList = () => {
  const attendingGuests = useStore((state) => state.attendingGuests);
  const setAttendingGuests = useStore((state) => state.setAttendingGuests);

  useEffect(() => setAttendingGuests(), []);

  return (
    <section
      id="guests"
      className="relative isolate overflow-hidden lg:overflow-y-visible lg:px-8"
    >
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 py-12 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:items-start lg:gap-y-10 lg:p-0">
        {/* // Sticky part */}
        <div className="lg:sticky lg:top-8 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:overflow-hidden lg:p-4 ">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <Heading
                content={"Who is coming?"}
                level={2}
                pre={"Meet the guests"}
              />
              <Intro
                content={"This will be a wonderful day - and crazy night!"}
              />
            </div>
            <Paragraph
              content={
                "We have invited some of the best peope we know and we are sure you will have the best time together. Make sure to join the party by RSVP-ing!"
              }
            />
            <div className="mt-10 flex items-center  gap-x-6">
              <Button
                label={"RSVP"}
                type={"link"}
                style={"primary"}
                href={"/rsvp"}
              />
            </div>
          </div>{" "}
        </div>

        {/* // Non-sticky part */}
        <div className="lg:col-span-2 lg:col-start-2 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <List items={attendingGuests} />
        </div>
      </div>
    </section>
  );
};
