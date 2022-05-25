import React, { useCallback, useContext } from "react";
import classNames from "classnames";
import { AiFillHome, AiFillCompass } from "react-icons/ai";
import { BsFillBagFill } from "react-icons/bs";
import { CgInbox } from "react-icons/cg";

import { RouteContext, DarkModeContext } from "../contexts";
interface Props {}

const Tabbar: React.FunctionComponent<Props> = () => {
  const routeContext = useContext(RouteContext);
  const darkModeContext = useContext(DarkModeContext);
  const getTabIcon = useCallback((item) => {
    switch (item) {
      case "À propos":
        return <AiFillHome />;
      case "Formations":
        return <AiFillCompass />;
      case "Mes projets":
        return <BsFillBagFill />;
      case "Contact":
        return <CgInbox />;
    }
  }, []);

  return (
    <nav className="flex md:hidden flex-row items-center justify-around px-8 h-14 bg-white visible md:invisible fixed bottom-0 w-full rounded-t-3xl text-2xl">
      {routeContext?.routes.map((item, index) => (
        <span
          key={index}
          className={classNames([
            "hover:text-gray-600 cursor-pointer w-18 h-full flex items-center justify-center",
            darkModeContext?.darkMode ? "text-white" : "text-primary",
            index === 0 ? "hidden" : null,
          ])}
          onClick={() => routeContext?.handleRoute(item.id)}
        >
          <span className="-mb-1">{getTabIcon(item)}</span>
        </span>
      ))}
    </nav>
  );
};

export default Tabbar;
