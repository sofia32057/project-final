import { Heading } from "../components/Heading";
import { LoginForm } from "../components/LoginForm";

export const LandingPage = () => {
  return (
    <>
      <Heading content={"We're getting married!"} level={1} />
      <LoginForm />
    </>
  );
};
