import React, { RefObject } from "react";
import SkillCard from "./SkillCard";

import { SkillModel } from "../interfaces";

interface Props {
  customRef: RefObject<HTMLDivElement>;
  skills: Array<SkillModel>;
}

const Skills: React.FunctionComponent<Props> = ({ customRef, skills }) => (
  <div
    ref={customRef}
    data-aos="fade-up"
    data-aos-duration="800"
    data-aos-delay="400"
    className="component"
  >
    <div className="h-full flex flex-wrap align-center justify-center">
      {skills.map((skill: SkillModel, index: number) => {
        return <SkillCard key={index} skill={skill} />;
      })}
    </div>
  </div>
);

export default Skills;
