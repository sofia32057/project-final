import { Heading } from "../components/Heading";
import { RsvpForm } from "../components/RsvpForm";

export const RsvpPage = () => {
  return (
    <section className="relative isolate px-6 pt-14 lg:px-8">
      <Heading content={"RSVP"} level={1} />
      <RsvpForm />
    </section>
  );
};
