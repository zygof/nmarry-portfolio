import React, { useState, useContext } from "react";
import { useMediaQuery } from "react-responsive";
import classNames from "classnames";

import { RouteContext, DarkModeContext } from "../../contexts";
import { Logo } from "../../data";
import MobileNavLinks from "./MobileNavLinks";
import NavLinks from "./NavLinks";
import MenuToggle from "./MenuToggle";

const Navbar: React.FunctionComponent = () => {
  const routeContext = useContext(RouteContext);
  const darkModeContext = useContext(DarkModeContext);
  const [navbarOpen, setNavbarOpen] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: 1024 });

  return (
    <nav
      data-aos="fade-down"
      data-aos-duration="800"
      data-aos-delay="400"
      className={classNames([
        "flex justify-between items-center fixed w-screen pt-10 z-40",
        isMobile ? "flex-col px-5" : "flex-row px-16",
      ])}
    >
      <div className="relative flex flex-row justify-between w-full lg:w-auto lg:static lg:block lg:justify-start">
        <Logo
          className="cursor-pointer"
          isDarkMode={darkModeContext?.darkMode}
          onClick={() => routeContext?.handleRoute(0)}
        />
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
          handleDarkMode={darkModeContext?.toggleDarkMode}
          routeContext={routeContext}
        />
      ) : (
        <NavLinks
          isDarkMode={darkModeContext?.darkMode}
          handleDarkMode={darkModeContext?.toggleDarkMode}
          routeContext={routeContext}
        />
      )}
    </nav>
  );
};

export default Navbar;
