import { schedule } from "../data/schedule.json";
import { Icon } from "./Icon";

export const Timetable = () => {
  return (
    <div className="-my-4 mx-auto mt-8 flow-root max-w-3xl divide-y divide-white md:mt-12 lg:mt-16">
      {schedule.map((t) => {
        return (
          <div
            className="flex flex-row content-center items-center gap-6 px-2 py-4 md:gap-10"
            key={t.time}
          >
            <p className="mx-4 w-12 shrink-0 self-center font-cormorant text-md font-normal text-text sm:text-right md:w-16 md:text-lg lg:text-xl">
              {t.time}
            </p>
            <h3 className="inline-flex gap-4 text-md font-semibold text-text md:text-lg lg:text-xl">
              <Icon activity={t.activity} />
              {t.activity}
            </h3>
          </div>
        );
      })}
    </div>
  );
};
