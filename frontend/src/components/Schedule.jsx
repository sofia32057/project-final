import { Heading } from "./Heading";
import {
  BuildingLibraryIcon,
  SparklesIcon,
  FaceSmileIcon,
  CakeIcon,
  GiftTopIcon,
  MusicalNoteIcon,
  GlobeAltIcon,
  HeartIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

export const Schedule = () => {
  return (
    <section class="bg-white antialiased dark:bg-gray-900">
      <div class="mx-auto max-w-screen-xl px-6 py-8 sm:py-16 lg:px-6 lg:py-24">
        <div class="mx-auto max-w-3xl text-left">
          <Heading content={"Schedule of our day"} level={2} pre={""} />
        </div>

        <div className="mx-auto mt-8 flow-root max-w-3xl md:mt-12 lg:mt-16">
          <div className="-my-4 divide-y divide-gray-200 dark:divide-gray-700">
            <div className="flex flex-row items-center gap-6 py-4 md:gap-10">
              <p className="w-30 text-md shrink-0 self-center font-normal text-gray-500 sm:text-right md:text-lg dark:text-gray-400">
                15:30
              </p>
              <h3 className="text-md inline-flex gap-3 font-semibold text-gray-900 md:text-lg dark:text-white">
                <BuildingLibraryIcon className="h-6 w-6 self-center" />
                Arrival and Seating
              </h3>
            </div>

            <div className="flex flex-row items-center gap-6 py-4 md:gap-10">
              <p className="w-30 text-md shrink-0 font-normal text-gray-500 sm:text-right md:text-lg dark:text-gray-400">
                16:00
              </p>
              <h3 className="text-md inline-flex gap-3 font-semibold text-gray-900 md:text-lg dark:text-white">
                <HeartIcon className="h-6 w-6 self-center" />
                Wedding Ceremony
              </h3>
            </div>

            <div className="flex flex-row items-center gap-6 py-4 md:gap-10">
              <p className="w-30 text-md shrink-0 font-normal text-gray-500 sm:text-right md:text-lg dark:text-gray-400">
                16:30
              </p>
              <h3 className="text-md inline-flex gap-3 font-semibold text-gray-900 md:text-lg dark:text-white">
                <FaceSmileIcon className="h-6 w-6 self-center" />
                Cocktail Hour
              </h3>
            </div>

            <div className="flex flex-row items-center gap-6 py-4 md:gap-10">
              <p className="w-30 text-md shrink-0 font-normal text-gray-500 sm:text-right md:text-lg dark:text-gray-400">
                18:00
              </p>
              <h3 className="text-md inline-flex gap-3 font-semibold text-gray-900 md:text-lg dark:text-white">
                <SparklesIcon className="h-6 w-6 self-center" />
                Grand Entrance
              </h3>
            </div>

            <div className="flex flex-row items-center gap-7 py-4 md:gap-10">
              <p className="text-md w-30 shrink-0 font-normal text-gray-500 sm:text-right md:text-lg dark:text-gray-400">
                18:15
              </p>
              <h3 className="text-md inline-flex gap-3 font-semibold text-gray-900 md:text-lg dark:text-white">
                <GiftTopIcon className="h-6 w-6 self-center" />
                Dinner Service
              </h3>
            </div>

            <div className="flex flex-row items-center gap-6 py-4 md:gap-10">
              <p className="w-30 text-md shrink-0 font-normal text-gray-500 sm:text-right md:text-lg dark:text-gray-400">
                19:45
              </p>
              <h3 className="text-md inline-flex gap-3 font-semibold text-gray-900 md:text-lg dark:text-white">
                <CakeIcon className="h-6 w-6 self-center" />
                Cake Cutting
              </h3>
            </div>

            <div className="flex flex-row items-center gap-6 py-4 md:gap-10">
              <p className="w-30  text-md shrink-0 font-normal text-gray-500 sm:text-right md:text-lg dark:text-gray-400">
                20:00
              </p>
              <h3 className="text-md inline-flex gap-3 font-semibold text-gray-900 md:text-lg dark:text-white">
                <MusicalNoteIcon className="h-6 w-6 self-center" />
                First Dances
              </h3>
            </div>

            <div className="flex flex-row items-center gap-6 py-4 md:gap-10">
              <p className="w-30 text-md shrink-0 font-normal text-gray-500 sm:text-right md:text-lg dark:text-gray-400">
                23:00
              </p>
              <h3 className="text-md inline-flex gap-3 font-semibold text-gray-900 md:text-lg dark:text-white">
                <StarIcon className="h-6 w-6 self-center" />
                Grand Exit
              </h3>
            </div>

            <div className="flex flex-row items-center gap-7 py-4 md:gap-10">
              <p className="w-30 text-md shrink-0 font-normal text-gray-500 sm:text-right md:text-lg dark:text-gray-400">
                23:15
              </p>
              <h3 className="text-md inline-flex gap-3 font-semibold text-gray-900 md:text-lg dark:text-white">
                <GlobeAltIcon className="h-6 w-6 self-center" />
                After Party
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
