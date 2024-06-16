import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./Root";
import { NotFound } from "./status/NotFound";
import { Confirmation } from "./status/Confirmation";
import { lazily } from "react-lazily";
import { useStore } from "../stores/useStore";
import { MyAttendance } from "./pages/MyAttendance";

const { Homepage } = lazily(() => import("./pages/Homepage"));
const { LandingPage } = lazily(() => import("./pages/LandingPage"));
const { RsvpPage } = lazily(() => import("./pages/RsvpPage"));
const { Messageboard } = lazily(() => import("./pages/Messageboard"));

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
          element: isLoggedIn ? <RsvpPage /> : <LandingPage />,
        },
        {
          path: "/confirmation",
          element: <Confirmation />,
        },
        {
          path: "/my-attendance",
          element: <MyAttendance />,
        },
        {
          path: "/messageboard",
          element: <Messageboard />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
