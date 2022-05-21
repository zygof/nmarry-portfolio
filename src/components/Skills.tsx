import React from "react";
import SkillCard from "./SkillCard";

import { SkillModel } from "../interfaces";

interface Props {
  skills: Array<SkillModel>;
}

const Skills: React.FunctionComponent<Props> = ({ skills }) => (
  <div className="flex flex-wrap align-center justify-center max-w-xl mx-auto mt-8">
    {skills.map((skill: SkillModel, index: number) => {
      return <SkillCard key={index} skill={skill} />;
    })}
  </div>
);

export default Skills;
