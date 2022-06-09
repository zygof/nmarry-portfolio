import React from "react";
import ClassNames from "classnames";

import { SkillElementModel } from "../../interfaces";

interface Props {
  element: SkillElementModel;
  isDarkMode?: boolean;
}

const SkillElement: React.FunctionComponent<Props> = ({
  element,
  isDarkMode,
}) => (
  <div
  className={ClassNames([
    "skill-element flex flex-col items-center shadow-xl rounded-xl transition-colors duration-300 p-3 m-3",
    isDarkMode ? "border-transparent bg-primary text-blue-50" : "bg-blue-50 text-black",
  ])}
>
  {<element.icon size={32} />}
  <p className="text-center text-lg font-semibold h-100 pt-3">{element.name}</p>
</div>
);

export default SkillElement;
