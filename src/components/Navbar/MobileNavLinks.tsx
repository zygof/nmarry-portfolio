import React from "react";
import classNames from "classnames";

import { RouteContextInterface } from "../../interfaces";
import TogglerDarkMode from "../TogglerDarkMode";

interface Props {
  routeContext: RouteContextInterface | null;
  isOpen: boolean;
  isDarkMode?: boolean;
  handleDarkMode?: () => void;
}

const MobileNavLinks: React.FunctionComponent<Props> = ({
  routeContext,
  isOpen,
  isDarkMode,
  handleDarkMode,
}) => (
  <ul
    className={classNames([
      "MobileNavLinks flex flex-col items-center ml-auto z-50 rounded-b-xl",
      isOpen ? "visible" : "hidden",
      isDarkMode ? "bg-blue-50" : "bg-primary",
    ])}
  >
    {routeContext?.routes.map((item, index) => (
      <li
        key={index}
        className={classNames([
          "flex justify-center w-full cursor-pointer tracking-wide py-3 px-5",
          index === 0 ? "hidden" : null,
        ])}
        onClick={() => routeContext?.handleRoute(item.id)}
      >
        <p
          className={classNames([
            "text-center text-xl font-bold w-full hover:text-gray-600",
            isDarkMode ? "text-primary" : "text-blue-50",
          ])}
        >
          {item.route}
        </p>
      </li>
    ))}
    <li
      className="w-full cursor-pointer flex justify-center py-3 px-5"
      onClick={handleDarkMode}
    >
      <TogglerDarkMode isDarkMode={isDarkMode} />
    </li>
  </ul>
);

export default MobileNavLinks;
