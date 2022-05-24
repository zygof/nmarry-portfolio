import React, { RefObject, useContext } from "react";
import SkillCard from "./SkillCard";

import { SkillModel } from "../interfaces";
import { Route } from "../constants";
import { RouteContext } from "../contexts";

interface Props {
  customRef: RefObject<HTMLDivElement>;
  skills: Array<SkillModel>;
}

const Skills: React.FunctionComponent<Props> = ({ customRef, skills }) => {
  const routeContext = useContext(RouteContext);
  return (
    <div
      ref={customRef}
      onWheel={(event: React.WheelEvent<HTMLElement>) => {
        if (event.deltaY < 0) routeContext?.handleRoute(Route.FORMATIONS);
        if (event.deltaY > 0) routeContext?.handleRoute(Route.MES_PROJETS);
      }}
      onKeyUp={routeContext?.goToPrevRoute}
      onKeyDown={routeContext?.goToNextRoute}
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-delay="400"
      className="h-screen"
    >
      <div className="h-full flex flex-wrap align-center justify-center">
        {skills.map((skill: SkillModel, index: number) => {
          return <SkillCard key={index} skill={skill} />;
        })}
      </div>
    </div>
  );
};

export default Skills;
