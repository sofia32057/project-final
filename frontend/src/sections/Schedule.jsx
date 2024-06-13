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
        {/* <div className="mx-auto mt-8 flow-root max-w-3xl md:mt-12 lg:mt-16">
          <div className="-my-4 divide-y divide-accent">
            <div className="flex flex-row items-center gap-6 px-2 py-4 md:gap-10">
              <p className="w-30 mx-4 shrink-0 self-center text-md font-normal text-text sm:text-right md:text-lg">
                15:30
              </p>
              <h3 className="inline-flex gap-3 text-md font-semibold text-text md:text-lg">
                <BuildingLibraryIcon className="mx-2 h-6 w-6 self-center" />
                Arrival and Seating
              </h3>
            </div>

            <div className="flex flex-row items-center gap-6 px-2 py-4 md:gap-10">
              <p className="w-30 mx-4 shrink-0 text-md font-normal text-text sm:text-right md:text-lg ">
                16:00
              </p>
              <h3 className="inline-flex gap-3 text-md font-semibold text-text md:text-lg">
                <HeartIcon className="mx-2 h-6 w-6 self-center" />
                Wedding Ceremony
              </h3>
            </div>

            <div className="flex flex-row items-center gap-6 px-2 py-4 md:gap-10">
              <p className="w-30 mx-4 shrink-0 text-md font-normal text-text sm:text-right md:text-lg">
                16:30
              </p>
              <h3 className="inline-flex gap-3 text-md font-semibold text-text md:text-lg">
                <FaceSmileIcon className="mx-2 h-6 w-6 self-center" />
                Cocktail Hour
              </h3>
            </div>

            <div className="flex flex-row items-center gap-6 px-2 py-4 md:gap-10">
              <p className="w-30 mx-4 shrink-0 text-md font-normal text-text sm:text-right md:text-lg ">
                18:00
              </p>
              <h3 className="inline-flex gap-3 text-md font-semibold text-text md:text-lg">
                <SparklesIcon className="mx-2 h-6 w-6 self-center" />
                Grand Entrance
              </h3>
            </div>

            <div className="flex flex-row items-center gap-7 px-2 py-4 md:gap-10">
              <p className="w-30 mx-4 shrink-0 text-md font-normal text-text sm:text-right md:text-lg ">
                18:15
              </p>
              <h3 className="inline-flex gap-3 text-md font-semibold text-text md:text-lg">
                <GiftTopIcon className="mx-2 h-6 w-6 self-center " />
                Dinner Service
              </h3>
            </div>

            <div className="flex flex-row items-center gap-6 px-2 py-4 md:gap-10">
              <p className="w-30 mx-4 shrink-0 text-md font-normal text-text sm:text-right md:text-lg">
                19:45
              </p>
              <h3 className="inline-flex gap-3 text-md font-semibold text-text md:text-lg ">
                <CakeIcon className="mx-2 h-6 w-6 self-center" />
                Cake Cutting
              </h3>
            </div>

            <div className="flex flex-row items-center gap-6 px-2 py-4 md:gap-10">
              <p className="w-30 mx-4 shrink-0 text-md font-normal text-text sm:text-right md:text-lg ">
                20:00
              </p>
              <h3 className="inline-flex gap-3 text-md font-semibold text-text md:text-lg">
                <MusicalNoteIcon className="mx-2 h-6 w-6 self-center" />
                First Dances
              </h3>
            </div>

            <div className="flex flex-row items-center gap-6 px-2 py-4 md:gap-10">
              <p className="w-30 mx-4 shrink-0 text-md font-normal text-text sm:text-right md:text-lg">
                23:00
              </p>
              <h3 className="inline-flex gap-3 text-md font-semibold text-text md:text-lg">
                <StarIcon className="mx-2 h-6 w-6 self-center" />
                Grand Exit
              </h3>
            </div>

            <div className="flex flex-row items-center gap-7 px-2 py-4 md:gap-10">
              <p className="w-30 mx-4 shrink-0 text-md font-normal text-text sm:text-right md:text-lg ">
                23:15
              </p>
              <h3 className="inline-flex gap-4 text-md font-semibold text-text md:text-lg">
                <GlobeAltIcon className="mx-2 h-6 w-6 self-center" />
                After Party
              </h3>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};
