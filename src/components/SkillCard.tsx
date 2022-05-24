import React from "react";

import { SkillModel } from "../interfaces";

interface Props {
  skill: SkillModel;
}

const SkillCard: React.FunctionComponent<Props> = ({ skill }) => (
  <div className="m-10 max-w-sm p-5 card-project text-center rounded-xl border-2 border-gray-300">
    {skill.icon}
    <p className="text-xl font-semibold mt-4">{skill.name}</p>
  </div>
);

export default SkillCard;
