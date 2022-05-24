import React, { useContext } from "react";
import { CgMonday } from "react-icons/cg";
import classNames from "classnames";

import { TogglerDarkMode } from "./TogglerDarkMode";
import { RouteContext, DarkModeContext } from "../contexts";
import { Route } from "../constants";
interface Props {
  firstName: string;
  lastName: string;
}

const Navbar: React.FunctionComponent<Props> = ({ firstName, lastName }) => {
  const routeContext = useContext(RouteContext);
  const darkModeContext = useContext(DarkModeContext);

  return (
    <nav className="hidden lg:inline-flex flex flex-row items-center justify-between p-10 overflow-hidden fixed w-screen z-50">
      <span
        className="-mb-1 flex flex-row cursor-pointer"
        onClick={() => routeContext?.handleRoute(Route.DESCRIPTION)}
      >
        <CgMonday className="text-5xl text-gray-800" />
        <div className="flex text-2xl font-bold ml-4 mt-2">
          <p className="text-gray-100 mr-2">{firstName}</p>{" "}
          <p className="text-gray-800">{lastName}</p>
        </div>
      </span>
      <ul className="flex flex-row">
        {routeContext?.routes.map((item, index) => (
          <li
            key={index}
            className={classNames([
              "w-22 mx-5 text-xl hover:text-gray-600 cursor-pointer font-medium tracking-wide text-sm flex items-start justify-center",
              darkModeContext?.darkMode ? "text-white" : "text-primary",
              index === 0 ? "hidden" : null,
            ])}
            onClick={() => routeContext?.handleRoute(item.route)}
          >
            <p className="text-center">{item.route}</p>
          </li>
        ))}
        <li>
          <TogglerDarkMode onNavBarRight />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
