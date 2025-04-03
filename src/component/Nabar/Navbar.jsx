import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { mainNav } from "../../content";
import mainLogo from "../../assets/images/main-logo.svg";
import "./Navbar.scss";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <div className="container relative bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center py-2 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1 nav-logo">
              <Link to={"/"}>
                <img src={mainLogo} alt="main-logo" />
              </Link>
              <h3 className="xs:hidden">Central Texas Fly Fishing</h3>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                onClick={() => setOpen(!open)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="14"
                  viewBox="0 0 18 14"
                  fill="none"
                >
                  <path
                    d="M18 7C18 7.19891 17.921 7.38968 17.7803 7.53033C17.6397 7.67098 17.4489 7.75 17.25 7.75H0.75C0.551088 7.75 0.360322 7.67098 0.21967 7.53033C0.0790178 7.38968 0 7.19891 0 7C0 6.80109 0.0790178 6.61032 0.21967 6.46967C0.360322 6.32902 0.551088 6.25 0.75 6.25H17.25C17.4489 6.25 17.6397 6.32902 17.7803 6.46967C17.921 6.61032 18 6.80109 18 7ZM0.75 1.75H17.25C17.4489 1.75 17.6397 1.67098 17.7803 1.53033C17.921 1.38968 18 1.19891 18 1C18 0.801088 17.921 0.610322 17.7803 0.46967C17.6397 0.329018 17.4489 0.25 17.25 0.25H0.75C0.551088 0.25 0.360322 0.329018 0.21967 0.46967C0.0790178 0.610322 0 0.801088 0 1C0 1.19891 0.0790178 1.38968 0.21967 1.53033C0.360322 1.67098 0.551088 1.75 0.75 1.75ZM17.25 12.25H0.75C0.551088 12.25 0.360322 12.329 0.21967 12.4697C0.0790178 12.6103 0 12.8011 0 13C0 13.1989 0.0790178 13.3897 0.21967 13.5303C0.360322 13.671 0.551088 13.75 0.75 13.75H17.25C17.4489 13.75 17.6397 13.671 17.7803 13.5303C17.921 13.3897 18 13.1989 18 13C18 12.8011 17.921 12.6103 17.7803 12.4697C17.6397 12.329 17.4489 12.25 17.25 12.25Z"
                    fill="#1C1812"
                  />
                </svg>
              </button>
            </div>
            <nav className="hidden md:flex nav-links">
              {mainNav.map((links) => {
                const isActive =
                  location.pathname === links.url ||
                  (links.url === "/" && location.pathname === "");
                return (
                  <Link
                    to={links.url}
                    key={links.name}
                    className={isActive ? "active" : ""}
                  >
                    <span>{links.name}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>

        <div
          className={
            open
              ? "opacity-100 scale-100 ease-out duration-200 absolute top-0 inset-x-0 min-h-screen transition transform origin-top-right md:hidden"
              : "opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          }
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 min-h-screen bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <img className=" w-auto" src={mainLogo} alt="Workflow" />
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                    onClick={() => setOpen(!open)}
                  >
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {mainNav.map((links) => {
                    const isActive =
                      location.pathname === links.url ||
                      (links.url === "/" && location.pathname === "");
                    return (
                      <Link
                        to={links.url}
                        key={links.name}
                        className={isActive ? "active" : ""}
                      >
                        <span>{links.name}</span>
                      </Link>
                    );
                  })}
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
