import React, { useCallback, useContext } from "react";
import classNames from "classnames";
import { AiFillHome, AiFillCompass } from "react-icons/ai";
import { BsFillBagFill } from "react-icons/bs";
import { CgInbox } from "react-icons/cg";

import { RouteContext, DarkModeContext } from "../../contexts";
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
    <nav className="lg:hidden justify-around px-8 h-12 bg-secondary visible lg:invisible fixed bottom-0 w-full">
      <section className="flex flex-row items-center">
        {routeContext?.routes.map((item, index) => (
          <span
            key={index}
            className={classNames([
              "hover:text-gray-600 cursor-pointer h-full w-full flex items-center justify-center",
              darkModeContext?.darkMode ? "text-blue-50" : "text-primary",
              index === 0 ? "hidden" : null,
            ])}
            onClick={() => routeContext?.handleRoute(item.id)}
          >
            <span className="-mb-1">{getTabIcon(item)}</span>
          </span>
        ))}
      </section>
    </nav>
  );
};

export default Tabbar;
