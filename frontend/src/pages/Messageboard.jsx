import { useState } from "react";
import { Heading } from "../components/Heading";
import { ThoughtsForm } from "../components/ThoughtsForm";
import { ThoughtsSection } from "../sections/ThoughtsSection";

export const Messageboard = () => {
  const [newThought, setNewThought] = useState("");

  return (
    <section className="relative isolate">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-4 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="py-12 lg:sticky lg:top-4 lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <Heading
                content={"Our message board"}
                level={1}
                pre={"Leave us a happy thought!"}
              />
              <ThoughtsForm
                newThought={newThought}
                setNewThought={setNewThought}
              />
            </div>
          </div>
        </div>
        <div className="max-w-full justify-self-center  lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:-ml-12 lg:-mt-12 lg:justify-self-auto lg:overflow-visible lg:p-12">
          <ThoughtsSection newThought={newThought} />
        </div>
      </div>
    </section>
  );
};
