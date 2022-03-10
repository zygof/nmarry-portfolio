import React, { useCallback } from "react";
import classNames from "classnames";
import { AiFillHome, AiFillCompass } from "react-icons/ai";
import { BsFillBagFill } from "react-icons/bs";
import { CgInbox } from "react-icons/cg";

interface Props {
  navigationData: Array<string>;
  currentRoute: string;
  setCurrentRoute: (item: string) => void;
}

const Tabbar: React.FunctionComponent<Props> = ({
  navigationData,
  currentRoute,
  setCurrentRoute,
}) => {
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
      {navigationData.map((item, index) => (
        <span
          key={index}
          className={classNames([
            "text-gray-400 hover:text-gray-700 cursor-pointer w-18 h-full flex items-center justify-center",
            currentRoute === item &&
              "bg-gradient-to-t from-white to-gray-100 border-t-3 border-gray-700 text-gray-700",
          ])}
          onClick={() => setCurrentRoute(item)}
        >
          <span className="-mb-1">{getTabIcon(item)}</span>
        </span>
      ))}
    </nav>
  );
};

export default Tabbar;
