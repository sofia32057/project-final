import { Heading } from "../components/Heading";
import { LoginForm } from "../components/LoginForm";

export const LandingPage = () => {
  return (
    <section className="px-6 py-8 md:px-16 lg:px-28 ">
      <Heading content={"We're getting married!"} level={1} />
      <LoginForm />
    </section>
  );
};
