import React from "react";
import ClassNames from "classnames";

import { SkillElementModel } from "../../interfaces";

interface Props {
  elements: Array<SkillElementModel>;
  isDarkMode?: boolean;
}

const SkillElements: React.FunctionComponent<Props> = ({
  elements,
  isDarkMode,
}) => (
  <div className="flex flex-grap">
    {elements.map((element: SkillElementModel, index: number) => (
      <div
        key={index}
        className={ClassNames([
          "skill-element flex flex-col items-center rounded-xl border transition-colors duration-300 p-3 mx-2",
          isDarkMode ? "border-transparent bg-primary text-blue-50" : "bg-blue-50 text-black",
        ])}
      >
        {<element.icon size={32} />}
        <p className="text-lg font-semibold pt-3">{element.name}</p>
      </div>
    ))}
  </div>
);

export default SkillElements;
