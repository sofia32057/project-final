import { Heading } from "../components/Heading";
import { RsvpForm } from "../components/RsvpForm";
import { Intro } from "../components/Intro";
import { Paragraph } from "../components/Paragraph";

export const RsvpPage = () => {
  return (
    <section className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <Heading content={"RSVP"} level={1} pre={"Are you joing us?"} />
        <Intro
          content={
            "We are eagerly anticipating your presence at our wedding celebration!"
          }
        />
        <Paragraph
          content={
            "Please take a moment to RSVP below to let us know if you will be able to join us on our special day. Your response will help us ensure that every detail of our celebration is perfect. We can't wait to celebrate with you!"
          }
        />
        <RsvpForm />
      </div>
    </section>
  );
};
