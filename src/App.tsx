import React, { useEffect, useContext, useRef, useMemo } from "react";
import ReactPageScroller from "react-page-scroller";
import AOS from "aos";

import { RouteModel } from "./interfaces";
import { RouteContext, DarkModeContext } from "./contexts";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Intro from "./components/Intro";
import Careers from "./components/Careers";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import CVDownload from "./components/CVDownload";
import NextButton from "./components/NextButton";

import data, { Route } from "./data";

import "./App.css";
import "./components/Intro/Intro.css";
import "./components/About/About.css";
import "./components/Careers/Careers.css";
import "./components/NextButton/NextButton.css";
import "./components/CVDownload/CVDownload.css";
import "aos/dist/aos.css";

const App = () => {
  const routeContext = useContext(RouteContext);
  const darkModeContext = useContext(DarkModeContext);
  const refIntro = useRef<HTMLDivElement>(null);
  const refAbout = useRef<HTMLDivElement>(null);
  const refCareer = useRef<HTMLDivElement>(null);
  const refSkills = useRef<HTMLDivElement>(null);
  const refProjects = useRef<HTMLDivElement>(null);

  const routes: Array<RouteModel> = useMemo(
    () => [
      { id: 0, ref: refIntro, route: Route.INTRO },
      { id: 1, ref: refAbout, route: Route.ABOUT },
      { id: 2, ref: refCareer, route: Route.CAREERS },
      { id: 3, ref: refSkills, route: Route.SKILLS },
      { id: 4, ref: refProjects, route: Route.PROJECTS },
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
      <div className={darkModeContext?.darkMode ? "bg-gray-900" : "bg-blue-50"}>
        <Navbar firstName={data.firstName} lastName={data.lastName} />
        <ReactPageScroller
          customPageNumber={routeContext?.currentRoute?.id || 0}
          onBeforePageScroll={routeContext?.handleRoute}
          pageOnChange={routeContext?.handleRoute}
        >
          <Intro customRef={refIntro} data={data} />
          <About
            firstName={data.firstName}
            lastName={data.lastName}
            customRef={refAbout}
            descriptions={data.about.descriptions}
          />
          <Careers customRef={refCareer} careers={data.careers} />
          <Skills customRef={refSkills} skills={data.skills} />
          <Projects customRef={refProjects} projects={data.projects} />
        </ReactPageScroller>
        <CVDownload file="/CV-Nicolas MARRY.pdf" />
        {routeContext?.nextRoute ? <NextButton /> : null}

        {!routeContext?.nextRoute ? (
          <Footer github={data.social.github} />
        ) : null}
      </div>
    </React.Fragment>
  );
};
export default App;
