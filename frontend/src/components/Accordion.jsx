import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { faq } from "../data/faq.json";

export const Accordion = () => {
  return (
    <div className="w-full px-4">
      <div className="divide-accent mx-auto w-full max-w-lg divide-y rounded-xl bg-white">
        {faq.map((q) => {
          return (
            <Disclosure
              as="article"
              className=" p-6"
              defaultOpen={false}
              key={q.question}
            >
              <DisclosureButton className="group flex w-full items-center justify-between text-left">
                <span className="text-sm/6 font-medium group-data-[hover]:text-white/80">
                  {q.question}
                </span>
                <ChevronDownIcon className="group-data-[hover]:fill-gray/50 fill-gray/60 size-5 group-data-[open]:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel className="text-gray/50 mt-2 text-sm/5">
                {q.answer}
              </DisclosurePanel>
            </Disclosure>
          );
        })}
      </div>
    </div>
  );
};
