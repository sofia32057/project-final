import { Heading } from "../components/Heading";
import { RsvpForm } from "../components/RsvpForm";

export const RsvpPage = () => {
  return (
    <section className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <Heading content={"RSVP"} level={1} pre={"Are you joing us?"} />
        <p className="text-base mt-6 leading-8 text-gray-600  lg:text-lg">
          We are eagerly anticipating your presence at our wedding celebration!
          Please take a moment to RSVP below to let us know if you will be able
          to join us on our special day. Your response will help us ensure that
          every detail of our celebration is perfect.
          <span className="block leading-loose">
            We can't wait to celebrate with you!
          </span>
        </p>
        <RsvpForm />
      </div>
    </section>
  );
};
