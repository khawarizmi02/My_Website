import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ErrorPage from './error-page.jsx';

import App from './App.jsx'
import { About, Contact, ChooseUs, Services, News, Pests  } from "./pages"

const router = createBrowserRouter([
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
]);

console.log("heloo khawa")

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
