import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "../src/styles/global.scss";
import App from "./App.jsx";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Footer from "./component/Footer/Footer.jsx";
import Navbar from "./component/Nabar/Navbar.jsx";
import Services from "./pages/Services.jsx";
import Home from "./pages/Home.jsx";
import Faq from "./pages/Faq.jsx";
import Support from "./pages/Support.jsx";
import Privacy from "./pages/Privacy.jsx";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/support",
        element: <Support />,
      },
      {
        path: "/privacy",
        element: <Privacy />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
