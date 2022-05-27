import React, { useState, useContext } from "react";
import { CgMonday } from "react-icons/cg";
import { FaBars } from "react-icons/fa";
import classNames from "classnames";

import { TogglerDarkMode } from "../TogglerDarkMode";
import { RouteContext, DarkModeContext } from "../../contexts";
interface Props {
  firstName: string;
  lastName: string;
}

const Navbar: React.FunctionComponent<Props> = ({ firstName, lastName }) => {
  const routeContext = useContext(RouteContext);
  const darkModeContext = useContext(DarkModeContext);
  const [navbarOpen, setNavbarOpen] = useState(false);

  /*return (
    <nav className="hidden lg:inline-flex flex flex-row items-center justify-between pt-10 px-16 overflow-hidden fixed w-screen z-50">
      <span
        className="flex flex-row cursor-pointer"
        onClick={() => routeContext?.handleRoute(0)}
      >
        <CgMonday className="text-5xl text-gray-90" />
        <div className="flex text-2xl font-bold ml-4 mt-2">
          <p className="text-gray-500 mr-2">{firstName}</p>{" "}
          <p className="text-gray-800">{lastName}</p>
        </div>
      </span>
      <ul className="flex flex-row items-center">
        {routeContext?.routes.map((item, index) => (
          <li
            key={index}
            className={classNames([
              "flex flex-col items-start justify-center cursor-pointer tracking-wide w-22 mx-5",
              index === 0 ? "hidden" : null,
            ])}
            onClick={() => routeContext?.handleRoute(item.id)}
          >
            <p
              className={classNames([
                "text-center text-xl font-medium hover:text-gray-600",
                darkModeContext?.darkMode ? "text-blue-50" : "text-gray-900",
              ])}
            >
              {item.route}
            </p>
            <span
              className={classNames([
                "w-full h-1.5 rounded-full dark:bg-gray-700",
                routeContext.currentRoute?.id === item.id
                  ? "bg-primary"
                  : "hidden",
              ])}
            />
          </li>
        ))}
        <li>
          <TogglerDarkMode />
        </li>
      </ul>
    </nav>
  );*/

  return (
    <>
      <nav
        className={classNames([
          "navbar pt-10 px-16 z-50",
          navbarOpen ? "" : "",
        ])}
      >
        <div className="relative flex flex-row justify-between w-full lg:w-auto lg:static lg:block lg:justify-start">
          <span
            className="flex flex-row cursor-pointer"
            onClick={() => routeContext?.handleRoute(0)}
          >
            <CgMonday className="text-5xl text-gray-90" />
            <div className="flex text-2xl font-bold ml-4 mt-2">
              <p className="text-gray-500 mr-2">{firstName}</p>{" "}
              <p className="text-gray-800">{lastName}</p>
            </div>
          </span>
          <button
            className="text-primary cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <FaBars />
          </button>
        </div>
        <div
          className={classNames([
            "nav-item-container z-50 lg:flex flex-grow w-full items-center justify-center",
            navbarOpen ? " flex" : " hidden",
            darkModeContext?.darkMode ? "darkmode" : "",
          ])}
        >
          <ul className="flex flex-col items-center lg:flex-row list-none lg:ml-auto">
            {routeContext?.routes.map((item, index) => (
              <li
                key={index}
                className={classNames([
                  "nav-item w-full mx-5 cursor-pointer",
                  index === 0 ? "hidden" : null,
                ])}
                onClick={() => routeContext?.handleRoute(item.id)}
              >
                <p
                  className={classNames([
                    "nav-item-text px-3 text-center text-xl font-medium  hover:text-gray-600",
                    darkModeContext?.darkMode ? "darkmode" : "",
                  ])}
                >
                  {item.route}
                </p>
                <span
                  className={classNames([
                    "w-full h-1.5 rounded-full dark:bg-gray-700",
                    routeContext.currentRoute?.id === item.id
                      ? "bg-primary"
                      : "hidden",
                  ])}
                />
              </li>
            ))}
            <li className="nav-item w-full cursor-pointer flex justify-center">
              <TogglerDarkMode />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
