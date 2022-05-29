import React, { useEffect, useContext, useMemo } from "react";
import ReactPageScroller from "react-page-scroller";
import classNames from "classnames";
import AOS from "aos";

import { RouteModel } from "./interfaces";
import { RouteContext, DarkModeContext } from "./contexts";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Intro from "./components/Intro";
import Careers from "./components/Careers";
//import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import CVDownload from "./components/CVDownload";
import NextButton from "./components/NextButton";

import data, { Route } from "./data";

import "aos/dist/aos.css";
import "react-multi-carousel/lib/styles.css";
import "./App.css";
import "./components/Navbar/Navbar.css";
import "./components/Intro/Intro.css";
import "./components/About/About.css";
import "./components/Careers/Careers.css";
import "./components/NextButton/NextButton.css";
import "./components/CVDownload/CVDownload.css";

const App = () => {
  const routeContext = useContext(RouteContext);
  const darkModeContext = useContext(DarkModeContext);

  const routes: Array<RouteModel> = useMemo(
    () => [
      { id: 0, route: Route.INTRO },
      { id: 1, route: Route.ABOUT },
      { id: 2, route: Route.CAREERS },
      { id: 3, route: Route.SKILLS },
      { id: 4, route: Route.PROJECTS },
    ],
    []
  );

  useEffect(() => {
    routeContext?.handleRoutes(routes);
    AOS.init({
      once: true,
    });
  }, [routeContext, routes]);

  return (
    <React.Fragment>
      <div
        className={classNames([
          "transition-colors duration-300",
          darkModeContext?.darkMode ? "bg-gray-900" : "bg-blue-50",
        ])}
      >
        <Navbar />
        <ReactPageScroller
          customPageNumber={routeContext?.currentRoute?.id || 0}
          onBeforePageScroll={routeContext?.handleRoute}
          pageOnChange={routeContext?.handleRoute}
          renderAllPagesOnFirstRender
        >
          <Intro data={data} />
          <About
            firstName={data.firstName}
            lastName={data.lastName}
            descriptions={data.about.descriptions}
          />
          <Careers careers={data.careers} />
          <Skills skills={data.skills} />
          <Projects projects={data.projects} />
        </ReactPageScroller>
        {data.cv ? <CVDownload file={data.cv} /> : null}
        {routeContext?.nextRoute ? <NextButton /> : null}
        {/*!routeContext?.nextRoute ? (
          <Footer socials={data.socials} />
        ) : null*/}
      </div>
    </React.Fragment>
  );
};
export default App;
