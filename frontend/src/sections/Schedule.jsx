import { Heading } from "../components/Heading";
import { Timetable } from "../components/Timetable";

export const Schedule = () => {
  return (
    <section id="schedule" className="antialiased">
      <div className="mx-auto max-w-screen-xl px-6 py-16 lg:px-6 lg:py-24">
        <div className="mx-auto max-w-3xl text-left">
          <Heading content={"Schedule of our day"} level={2} pre={""} />
        </div>
        <Timetable />
      </div>
    </section>
  );
};
