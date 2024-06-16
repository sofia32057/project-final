import { PaperClipIcon } from "@heroicons/react/20/solid";
import { HeroSection } from "../sections/HeroSection";
import content from "../data/my-attendance.json";
import { Heading } from "../components/Heading";
import { Paragraph } from "../components/Paragraph";
import { AttendanceSection } from "../sections/AttendanceSection";
import { Button } from "../components/Button";

export const MyAttendance = () => {
  return (
    <>
      <HeroSection content={content.hero} />
      <AttendanceSection content={content.body} />
    </>
  );
};
