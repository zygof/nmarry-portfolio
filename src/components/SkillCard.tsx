import React from "react";

import { SkillModel } from "../models";

interface Props {
  skill: SkillModel;
}

const SkillCard: React.FunctionComponent<Props> = ({ skill }) => (
  <div className="m-4 w-40 flex-none mx-auto text-center p-5 rounded-xl border-2 border-gray-300">
    {skill.icon}
    <p className="text-xl font-semibold mt-4">{skill.name}</p>
  </div>
);

export default SkillCard;
