import React, { useState, useContext } from "react";
import { useMediaQuery } from "react-responsive";
import classNames from "classnames";

import { RouteContext, DarkModeContext } from "../../contexts";
import { Logo } from "../../data";
import MobileNavLinks from "./MobileNavLinks";
import NavLinks from "./NavLinks";
import MenuToggle from "./MenuToggle";

interface Props {
  firstName: string;
  lastName: string;
}

const Navbar: React.FunctionComponent<Props> = ({ firstName, lastName }) => {
  const routeContext = useContext(RouteContext);
  const darkModeContext = useContext(DarkModeContext);
  const [navbarOpen, setNavbarOpen] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: 1024 });

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
    <nav
      className={classNames([
        "flex justify-between items-center fixed w-screen pt-10 px-16 z-40",
        isMobile ? "flex-col" : "flex-row",
      ])}
    >
      <div className="relative flex flex-row justify-between w-full lg:w-auto lg:static lg:block lg:justify-start">
        <Logo onClick={() => routeContext?.handleRoute(0)} />
        <MenuToggle
          isOpen={navbarOpen}
          isDarkMode={darkModeContext?.darkMode}
          toggle={() => setNavbarOpen(!navbarOpen)}
        />
      </div>
      {isMobile ? (
        <MobileNavLinks
          isOpen={navbarOpen}
          isDarkMode={darkModeContext?.darkMode}
          routeContext={routeContext}
        />
      ) : (
        <NavLinks
          isDarkMode={darkModeContext?.darkMode}
          routeContext={routeContext}
        />
      )}
    </nav>
  );
};

export default Navbar;
