import { Heading } from "../components/Heading";
import { Timetable } from "../components/Timetable";

export const Schedule = () => {
  return (
    <section
      id="schedule"
      className="xxl:rounded-xl bg-secondary/25 antialiased ring-1 ring-secondary/10 drop-shadow-xl"
    >
      <div className="mx-auto max-w-screen-xl py-12">
        <div className="mx-auto max-w-3xl text-left">
          <Heading content={"Schedule of our day"} level={2} />
        </div>
        <Timetable />
      </div>
    </section>
  );
};
