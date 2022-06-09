import React from "react";
import classNames from "classnames";

import { RouteContextInterface } from "../../interfaces";
import TogglerDarkMode from "../TogglerDarkMode";

interface Props {
  routeContext: RouteContextInterface | null;
  isOpen: boolean;
  isDarkMode?: boolean;
  handleDarkMode?: () => void;
  cv?: string;
}

const MobileNavLinks: React.FunctionComponent<Props> = ({
  routeContext,
  isOpen,
  isDarkMode,
  handleDarkMode,
  cv,
}) => (
  <ul
    className={classNames([
      "MobileNavLinks flex flex-col justify-center items-center z-50 transition-colors duration-300",
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
            "text-center text-xl font-bold w-full hover:text-gray-600 transition-colors duration-300",
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
    {cv && (
      <li className="w-full flex justify-center">
        <a
          href={cv}
          download
          className={classNames([
            "rounded shadow-xl cursor-pointer text-center text-xl font-bold py-2 px-4 bg-primary text-blue-50",
          ])}
        >
          Télécharger mon CV
        </a>
      </li>
    )}
  </ul>
);

export default MobileNavLinks;
