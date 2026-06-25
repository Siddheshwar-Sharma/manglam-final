import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { AppLayout } from "./components/Layout/AppLayout";

import "./App.css";

import { Home } from "./pages/Home";
import { AboutManglam } from "./pages/AboutManglam";
import { OurProjects } from "./pages/OurProjects";
import { BusinessVerticals } from "./pages/BusinessVerticals";
import { Enquire } from "./pages/Enquire";
import { ErrorPage } from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about-manglam",
        element: <AboutManglam />,
      },
      {
        path: "our-projects",
        element: <OurProjects />,
      },
      {
        path: "business-verticals",
        element: <BusinessVerticals />,
      },
      {
        path: "enquire",
        element: <Enquire />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;