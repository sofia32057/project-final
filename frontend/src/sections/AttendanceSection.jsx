import { Heading } from "../components/Heading";
import { Intro } from "../components/Intro";
import { Paragraph } from "../components/Paragraph";
import { useStore } from "../../stores/useStore";
import { useEffect } from "react";
import { AttendanceItem } from "../components/AttendanceItem";

export const AttendanceSection = ({ content }) => {
  const { guestData } = useStore();
  const setGuestData = useStore((state) => state.setGuestData);

  useEffect(() => setGuestData(), [content]);

  return (
    <section
      id="summary"
      className="relative isolate overflow-hidden bg-secondary/25 ring-1 ring-secondary/10 drop-shadow-xl lg:overflow-visible lg:px-0 xxl:rounded-xl"
    >
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-4 py-12 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10 lg:p-0">
        {/* // Sticky part */}
        <div className="lg:sticky lg:top-8 lg:col-start-2 lg:row-span-1 lg:row-start-1 lg:overflow-hidden lg:p-12">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <Heading content={content.heading} level={2} />
              <Intro content={content.intro} />
              <Paragraph content={content.body} />
            </div>
          </div>
        </div>

        {/* // Non sticky part */}
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="mt-6 border-t border-primary">
            <dl className="divide-y divide-white">
              <AttendanceItem
                dt={"Name"}
                dd={`${guestData.firstname} ${guestData.lastname}`}
              />
              <AttendanceItem
                dt={"Relation to the couple"}
                dd={guestData.relation}
              />
              <AttendanceItem
                dt={"Will attend the wedding"}
                dd={guestData.willAttend ? "Yes" : "No"}
              />
              {guestData.willAttend && (
                <>
                  <AttendanceItem
                    dt={"Will be eating"}
                    dd={guestData.foodChoice || "Not chosen yet"}
                  />
                  {guestData.speech.isAllowed && (
                    <AttendanceItem
                      dt={"Will be making a speech"}
                      dd={guestData.speech.willMakeSpeech ? "Yes" : "No"}
                    />
                  )}
                  {guestData.plusOne.isAllowed && (
                    <>
                      <AttendanceItem
                        dt={"Will bring a plus one"}
                        dd={
                          guestData.plusOne.name
                            ? `Yes, ${guestData.plusOne.name}`
                            : "No"
                        }
                      />

                      {guestData.plusOne.name && (
                        <AttendanceItem
                          dt={"...and they will be eating"}
                          dd={guestData.plusOne.foodChoice}
                        />
                      )}
                    </>
                  )}
                </>
              )}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};
