export const Schedule = () => {
  return (
    <section class="bg-white antialiased dark:bg-gray-900">
      <div class="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6 lg:py-24">
        <div class="mx-auto max-w-3xl text-center">
          <h2 class="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
            Schedule of our day
          </h2>

          {/* <div class="mt-4">
        <a href="#" title=""
          class="inline-flex items-center text-lg font-medium text-primary-600 hover:underline dark:text-primary-500">
          Learn more about our agenda
          <svg aria-hidden="true" class="w-5 h-5 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
            fill="currentColor">
            <path fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd" />
          </svg>
        </a>
      </div> */}
        </div>

        <div class="mx-auto mt-8 flow-root max-w-3xl sm:mt-12 lg:mt-16">
          <div class="-my-4 divide-y divide-gray-200 dark:divide-gray-700">
            <div class="flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:gap-6">
              <p class="w-32 shrink-0 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400">
                15:30
              </p>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                <a href="#" class="hover:underline">
                  Arrival and Seating
                </a>
              </h3>
            </div>

            <div class="flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:gap-6">
              <p class="w-32 shrink-0 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400">
                16:00
              </p>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                <a href="#" class="hover:underline">
                  Wedding Ceremony
                </a>
              </h3>
            </div>

            <div class="flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:gap-6">
              <p class="w-32 shrink-0 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400">
                16:30
              </p>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                <a href="#" class="hover:underline">
                  Cocktail Hour
                </a>
              </h3>
            </div>

            <div class="flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:gap-6">
              <p class="w-32 shrink-0 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400">
                18:00
              </p>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                <a href="#" class="hover:underline">
                  Grand Entrance
                </a>
              </h3>
            </div>

            <div class="flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:gap-6">
              <p class="w-32 shrink-0 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400">
                18:15
              </p>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                <a href="#" class="hover:underline">
                  Dinner Service
                </a>
              </h3>
            </div>

            <div class="flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:gap-6">
              <p class="w-32 shrink-0 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400">
                19:45
              </p>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                <a href="#" class="hover:underline">
                  Cake Cutting
                </a>
              </h3>
            </div>

            <div class="flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:gap-6">
              <p class="w-32 shrink-0 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400">
                20:00
              </p>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                <a href="#" class="hover:underline">
                  First Dances
                </a>
              </h3>
            </div>

            <div class="flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:gap-6">
              <p class="w-32 shrink-0 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400">
                23:00
              </p>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                <a href="#" class="hover:underline">
                  Grand Exit
                </a>
              </h3>
            </div>

            <div class="flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:gap-6">
              <p class="w-32 shrink-0 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400">
                23:00 - 02:00
              </p>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                <a href="#" class="hover:underline">
                  After Party
                </a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
