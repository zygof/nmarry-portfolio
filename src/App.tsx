import React, { useEffect, useContext } from "react";
import AOS from "aos";

import { DarkModeContext } from "./contexts/DarkModeContext";
import useNavigation from "./hooks/useNavigation";
import Navbar from "./components/Navbar";
import Tabbar from "./components/Tabbar";
import About from "./components/About";
import Card from "./components/Card";
import Career from "./components/Career";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import data from "./assets/data";

import "./App.css";
import "aos/dist/aos.css";

function App() {
  const { currentRoute, setCurrentRoute } = useNavigation();
  const darkModeContext = useContext(DarkModeContext);
  const navigationData: Array<string> = [
    "À propos",
    "Formations",
    "Mes projets",
    "Contact",
  ];
  useEffect(() => {
    AOS.init({
      once: true,
    });
  });
  return (
    <div
      className={`min-h-screen ${
        darkModeContext?.darkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <Navbar
        navigationData={navigationData}
        currentRoute={currentRoute}
        setCurrentRoute={setCurrentRoute}
        firstName={data.firstName}
        lastName={data.lastName}
      />
      <div className="py-10 px-3 sm:px-5">
        <div data-aos="fade-down" data-aos-duration="800">
          <Card
            name={data.firstName}
            title={data.title}
            social={data.social}
            personalDescription={data.personalDescription}
          />
        </div>
        <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
          <About descriptions={data.about.descriptions} />
          <Career careers={data.careers} />
          <Skills skills={data.skills} />
          <Projects projects={data.projects} />
          <Footer github={data.social.github} />
        </div>
      </div>
      <Tabbar
        navigationData={navigationData}
        currentRoute={currentRoute}
        setCurrentRoute={setCurrentRoute}
      />
    </div>
  );
}
export default App;
