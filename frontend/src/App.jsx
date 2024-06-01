import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./sections/Header";
import { NotFound } from "./status/NotFound";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <h1>Wedding Invitation</h1>
      </BrowserRouter>
    </>
  );
};
