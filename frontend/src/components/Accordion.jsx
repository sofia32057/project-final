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
      <div className="mx-auto w-full max-w-lg divide-y divide-white/5 rounded-xl bg-white/5">
        {faq.map((q) => {
          return (
            <Disclosure as="div" className="p-6" defaultOpen={false} key={q}>
              <DisclosureButton className="group flex w-full items-center justify-between">
                <span className="text-sm/6 font-medium text-gray-900 group-data-[hover]:text-white/80">
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
