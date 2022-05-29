import React, { RefObject } from "react";
import ProjectCard from "./ProjectCard";

import { ProjectModel } from "../../interfaces";

interface Props {
  customRef: RefObject<HTMLDivElement>;
  projects: Array<ProjectModel>;
}

const Projects: React.FunctionComponent<Props> = ({ customRef, projects }) => (
  <div ref={customRef} className="component">
    <h1 className="mt-8 text-2xl md:text-4xl text-center font-extrabold">
      Projets
    </h1>
    {projects.map((project: ProjectModel, index: number) => (
      <ProjectCard key={index} project={project} />
    ))}
  </div>
);

export default Projects;
