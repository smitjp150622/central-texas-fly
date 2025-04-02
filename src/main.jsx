import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "../src/styles/global.scss";
import App from "./App.jsx";
import Navbar from "./component/Navbar.jsx";
import {
  createBrowserRouter,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Footer from "./component/Footer/Footer.jsx";

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
        element: <App />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
