import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./Root";
import { NotFound } from "./status/NotFound";
import { Confirmation } from "./status/Confirmation";
import { lazily } from "react-lazily";
import { useStore } from "../stores/useStore";

const { Homepage } = lazily(() => import("./pages/Homepage"));
const { LandingPage } = lazily(() => import("./pages/LandingPage"));
const { RsvpPage } = lazily(() => import("./pages/RsvpPage"));

export const App = () => {
  const { isLoggedIn } = useStore();

  const router = createBrowserRouter([
    {
      path: "/",
      // parent route component
      element: <Root />,
      // 404 not found
      errorElement: <NotFound />,
      // child route components
      children: [
        {
          index: true,
          element: isLoggedIn ? <Homepage /> : <LandingPage />,
        },
        {
          path: "/login",
          element: <LandingPage />,
        },
        {
          path: "/rsvp",
          element: <RsvpPage />,
        },
        {
          path: "/confirmation",
          element: <Confirmation />,
        },
        // {
        //   path: "/my-attendance/:guestId",
        //   element: <NotFound />,
        // },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
