import React, { useEffect, useContext, useRef, useMemo } from "react";
import ReactPageScroller from "react-page-scroller";
import AOS from "aos";

import { Route } from "./constants";
import { RouteModel } from "./interfaces";
import { RouteContext, DarkModeContext } from "./contexts";
import Navbar from "./components/Navbar";
import Tabbar from "./components/Tabbar";
import About from "./components/About";
import Description from "./components/Description";
import Career from "./components/Career";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import CVDownload from "./components/CVDownload";
import NextButton from "./components/NextButton";
import data from "./assets/data";

import "./App.css";
import "aos/dist/aos.css";

const App = () => {
  const routeContext = useContext(RouteContext);
  const darkModeContext = useContext(DarkModeContext);
  const refDescription = useRef<HTMLDivElement>(null);
  const refAbout = useRef<HTMLDivElement>(null);
  const refCareer = useRef<HTMLDivElement>(null);
  const refSkills = useRef<HTMLDivElement>(null);
  const refProjects = useRef<HTMLDivElement>(null);

  const routes: Array<RouteModel> = useMemo(
    () => [
      { id: 0, ref: refDescription, route: Route.DESCRIPTION },
      { id: 1, ref: refAbout, route: Route.A_PROPOS },
      { id: 2, ref: refCareer, route: Route.FORMATIONS },
      { id: 3, ref: refSkills, route: Route.COMPETENCES },
      { id: 4, ref: refProjects, route: Route.MES_PROJETS },
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
          <Description
            customRef={refDescription}
            name={data.firstName}
            title={data.title}
            social={data.social}
            personalDescription={data.personalDescription}
          />
          <About
            firstName={data.firstName}
            lastName={data.lastName}
            customRef={refAbout}
            descriptions={data.about.descriptions}
          />
          <Career customRef={refCareer} careers={data.careers} />
          <Skills customRef={refSkills} skills={data.skills} />
          <Projects customRef={refProjects} projects={data.projects} />
        </ReactPageScroller>
        <CVDownload file="/CV-Nicolas MARRY.pdf" />
        {routeContext?.nextRoute ? <NextButton /> : null}

        {!routeContext?.nextRoute ? (
          <Footer github={data.social.github} />
        ) : null}
        <Tabbar />
      </div>
    </React.Fragment>
  );
};
export default App;
