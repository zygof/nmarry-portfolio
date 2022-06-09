import React, { useContext } from "react";
import classNames from "classnames";
import { useMediaQuery } from "react-responsive";

import { SkillModel, SkillElementModel } from "../../interfaces";
import { DarkModeContext } from "../../contexts";
import SkillElement from "./SkillElement";
import SkillCarousel from "./SkillCarousel";

interface Props {
  skills: Array<SkillModel>;
}

const Skills: React.FunctionComponent<Props> = ({ skills }) => {
  const darkModeContext = useContext(DarkModeContext);

  const isDesktopOrLaptop = useMediaQuery({ minWidth: 1024 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const Elements = (elements: Array<SkillElementModel>) =>
    elements.map((element: SkillElementModel, index: number) => (
      <SkillElement
        key={index}
        element={element}
        isDarkMode={darkModeContext?.darkMode}
      />
    ));

  return (
    <section className="component flex flex-col items-center justify-center">
      {skills.map((skill: SkillModel, index: number) => (
        <div key={index} className="flex flex-col items-center my-3">
          <p
            className={classNames([
              "text-2xl font-bold transition-colors duration-300",
              darkModeContext?.darkMode ? "text-blue-50" : "text-primary",
            ])}
          >
            {skill.type}
          </p>
          {isDesktopOrLaptop ? (
            <div className="flex flex-shrink justify-center justify-items-stretch w-screen px-10">
              {Elements(skill.elements)}
            </div>
          ) : (
            <SkillCarousel
              show={isMobile ? 3 : 5}
              isDarkMode={darkModeContext?.darkMode}
            >
              {Elements(skill.elements)}
            </SkillCarousel>
          )}
        </div>
      ))}
    </section>
  );
};

export default Skills;
