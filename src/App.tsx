import React, { useEffect, useContext, useRef, useMemo } from "react";
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
      { ref: refDescription, route: Route.DESCRIPTION },
      { ref: refAbout, route: Route.A_PROPOS },
      { ref: refCareer, route: Route.FORMATIONS },
      { ref: refSkills, route: Route.COMPETENCES },
      { ref: refProjects, route: Route.MES_PROJETS },
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
    <div
      className={`min-h-screen ${
        darkModeContext?.darkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <Navbar firstName={data.firstName} lastName={data.lastName} />
      <Description
        customRef={refDescription}
        name={data.firstName}
        title={data.title}
        social={data.social}
        personalDescription={data.personalDescription}
      />
      <About customRef={refAbout} descriptions={data.about.descriptions} />
      <Career customRef={refCareer} careers={data.careers} />
      <Skills customRef={refSkills} skills={data.skills} />
      <Projects customRef={refProjects} projects={data.projects} />
      <Footer github={data.social.github} />
      {routeContext?.nextRoute ? (
        <NextButton
          onClick={routeContext?.goToNextRoute}
          nextPage={routeContext?.nextRoute}
        />
      ) : null}

      <CVDownload file="/CV-Nicolas MARRY.pdf" />
      <Tabbar />
    </div>
  );
};
export default App;
