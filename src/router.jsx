import React from "react";

import { About, Pests, ChooseUs, Contact, News, Services } from "./pages";
import App from "./App";
import ErrorPage from "./error-page";

const createRouter = () => {
  return [
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact-us",
      element: <Contact />,
    },
    {
      path: "/why-us",
      element: <ChooseUs />,
    },
    {
      path: "/services",
      element: <Services />,
    },
    {
      path: "/news",
      element: <News />
    },
    {
      path: "/pests",
      element: <Pests />
    }
  ];
}

export default createRouter;
