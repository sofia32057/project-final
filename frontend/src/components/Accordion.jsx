import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { faq } from "../data/faq.json";

export const Accordion = () => {
  return (
    <div className="w-full px-4 pt-32">
      <div className="divide-white/5 bg-white/5 mx-auto w-full max-w-lg divide-y rounded-xl">
        {faq.map((q) => {
          return (
            <Disclosure as="div" className="p-6" defaultOpen={true}>
              <DisclosureButton className="group flex w-full items-center justify-between">
                <span className="text-white group-data-[hover]:text-white/80 text-sm/6 font-medium">
                  {q.question}
                </span>
                <ChevronDownIcon className="fill-white/60 group-data-[hover]:fill-white/50 size-5 group-data-[open]:rotate-180" />
              </DisclosureButton>
              <DisclosurePanel className="text-white/50 mt-2 text-sm/5">
                {q.answer}
              </DisclosurePanel>
            </Disclosure>
          );
        })}
      </div>
    </div>
  );
};
