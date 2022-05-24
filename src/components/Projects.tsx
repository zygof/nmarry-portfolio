import React, { RefObject, useContext } from "react";
import ProjectCard from "./ProjectCard";

import { ProjectModel } from "../interfaces";
import { Route } from "../constants";
import { RouteContext } from "../contexts";

interface Props {
  customRef: RefObject<HTMLDivElement>;
  projects: Array<ProjectModel>;
}

const Projects: React.FunctionComponent<Props> = ({ customRef, projects }) => {
  const routeContext = useContext(RouteContext);
  return (
    <div
      ref={customRef}
      onWheel={(event: React.WheelEvent<HTMLElement>) => {
        if (event.deltaY < 0) routeContext?.handleRoute(Route.COMPETENCES);
      }}
      onKeyUp={() => routeContext?.handleRoute(Route.COMPETENCES)}
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-delay="400"
    >
      <h1 className="mt-8 text-2xl md:text-4xl text-center font-extrabold">
        Mes projets
      </h1>
      {projects.map((project: ProjectModel, index: number) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default Projects;
