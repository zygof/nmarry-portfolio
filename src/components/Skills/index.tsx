import React, { useContext } from "react";
import classNames from "classnames";

import { SkillModel } from "../../interfaces";
import { DarkModeContext } from "../../contexts";
import SkillElements from "./SkillElements";

interface Props {
  skills: Array<SkillModel>;
}

const Skills: React.FunctionComponent<Props> = ({ skills }) => {
  const darkModeContext = useContext(DarkModeContext);

  return (
    <section className="component flex flex-col items-center justify-center">
      {skills.map((skill: SkillModel) => (
        <div className="flex flex-col items-center my-3">
          <p
            className={classNames([
              "text-2xl font-bold transition-colors duration-300 mb-5",
              darkModeContext?.darkMode ? "text-blue-50" : "text-primary",
            ])}
          >
            {skill.type}
          </p>
          <SkillElements
            elements={skill.elements}
            isDarkMode={darkModeContext?.darkMode}
          />
        </div>
      ))}
    </section>
  );
};

export default Skills;
