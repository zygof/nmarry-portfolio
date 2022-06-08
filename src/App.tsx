import React, { useEffect, useContext } from "react";
import ReactPageScroller from "react-page-scroller";
import classNames from "classnames";
import AOS from "aos";

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

import data from "./data";

import "aos/dist/aos.css";
import "react-multi-carousel/lib/styles.css";
import "./App.css";
import "./components/Navbar/Navbar.css";
import "./components/Intro/Intro.css";
import "./components/About/About.css";
import "./components/Careers/Careers.css";
import "./components/Skills/Skills.css";
import "./components/Projects/Projects.css";
import "./components/NextButton/NextButton.css";
import "./components/CVDownload/CVDownload.css";

const App = () => {
  const routeContext = useContext(RouteContext);
  const darkModeContext = useContext(DarkModeContext);

  useEffect(() => {
    AOS.init({
      once: true,
    });
  });

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
          blockScrollUp={false}
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
