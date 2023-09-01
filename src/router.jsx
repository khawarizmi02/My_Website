import React from "react";

import { App, About, Pests, PestInfo, ChooseUs, Contact, News, NewsInfo, Services, ServiceInfo, ErrorPage, } from "./pages";

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
      path: "/services/:serviceId",
      element: <ServiceInfo />,
    },
    {
      path: "/news",
      element: <News />
    },
    {
      path: "/news/:newsId",
      element: <NewsInfo />
    },
    {
      path: "/pests",
      element: <Pests />
    },
    {
      path: "/pests/:pestId",
      element: <PestInfo />
    },
  ];
}

export default createRouter;
