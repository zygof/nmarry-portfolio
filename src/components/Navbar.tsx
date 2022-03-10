import React from "react";
import { CgMonday } from "react-icons/cg";
import classNames from "classnames";

interface Props {
  firstName: string;
  lastName: string;
  navigationData: Array<string>;
  currentRoute: string;
  setCurrentRoute: (item: string) => void;
}

const Navbar: React.FunctionComponent<Props> = ({
  firstName,
  lastName,
  navigationData,
  currentRoute,
  setCurrentRoute,
}) => {
  return (
    <nav className="hidden md:flex flex-row items-center justify-between px-8 h-18 rounded-b-3xl p-10">
      <span className="-mb-1 flex flex-row">
        <CgMonday className="text-5xl text-gray-800" />
        <div className="flex text-2xl font-bold ml-4 mt-2">
          <p className="text-gray-100 mr-2">{firstName}</p>{" "}
          <p className="text-gray-800">{lastName}</p>
        </div>
      </span>
      <ul className="flex flex-row">
        {navigationData.map((item, index) => (
          <li
            className={classNames([
              "w-22 mx-5 text-gray-700 text-xl hover:text-gray-600 cursor-pointer font-medium tracking-wide text-sm flex items-start justify-center",
              currentRoute === item && "text-blue-100",
            ])}
            key={index}
            onClick={() => setCurrentRoute(item)}
          >
            <p className="text-center">{item}</p>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
