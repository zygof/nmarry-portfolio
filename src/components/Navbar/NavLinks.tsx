import React from "react";
import classNames from "classnames";

import { RouteContextInterface } from "../../interfaces";
import { TogglerDarkMode } from "../TogglerDarkMode";

interface Props {
  routeContext: RouteContextInterface | null;
  isDarkMode?: boolean;
}

const MobileNavLinks: React.FunctionComponent<Props> = ({
  routeContext,
  isDarkMode,
}) => (
  <ul className={classNames(["flex-row justify-end items-center flex z-50"])}>
    {routeContext?.routes.map((item, index) => (
      <li
        key={index}
        className={classNames([
          "items-start justify-center cursor-pointer tracking-wide py-px mx-5",
          index === 0 ? "hidden" : null,
        ])}
        onClick={() => routeContext?.handleRoute(item.id)}
      >
        <p
          className={classNames([
            "text-center text-xl font-medium whitespace-no-wrap hover:text-gray-600",
            isDarkMode ? "text-blue-50" : "text-primary",
          ])}
        >
          {item.route}
        </p>
        <span
          className={classNames([
            "w-full h-1.5 rounded-full dark:bg-gray-700",
            routeContext?.currentRoute?.id === item.id
              ? "bg-primary"
              : "hidden",
          ])}
        />
      </li>
    ))}
    <li className="w-full cursor-pointer flex justify-center py-px mx-5">
      <TogglerDarkMode />
    </li>
  </ul>
);

export default MobileNavLinks;
