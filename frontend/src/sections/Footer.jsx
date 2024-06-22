import { Button } from "../components/Button";

export const Footer = () => {
  return (
    <div className="flex flex-col items-end justify-end gap-6 px-6 py-5 text-right text-sm md:flex-row ">
      {/* <Button label={"RSVP"} type={"link"} style={"primary"} href={"/rsvp"} /> */}
      <p className="font-cormorant">
        ©2024 created by{" "}
        <a href="https://sofias-portfolio.netlify.app/">Sofia</a> &{" "}
        <a href="https://portfolio-nathalie.netlify.app/">Nathalie</a>
      </p>
    </div>
  );
};
