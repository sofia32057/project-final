import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./sections/Header";
import { NotFound } from "./status/NotFound";
import { Homepage } from "./pages/Homepage";
import { LandingPage } from "./pages/LandingPage";
import { RsvpPage } from "./pages/RsvpPage";
import { Confirmation } from "./status/Confirmation";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <h1>Our wedding site</h1>
        <Homepage />
        <LandingPage />
        <RsvpPage />
        <NotFound />
        <Confirmation />
      </BrowserRouter>
    </>
  );
};
