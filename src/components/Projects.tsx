import React from "react";
import ProjectCard from "./ProjectCard";

import { ProjectModel } from "../models";

interface Props {
  projects: Array<ProjectModel>;
}

const Projects: React.FunctionComponent<Props> = ({ projects }) => (
  <div>
    <h1 className="mt-8 text-2xl md:text-4xl text-center font-extrabold">
      Mes projets
    </h1>
    {projects.map((project: ProjectModel, index: number) => (
      <ProjectCard key={index} project={project} />
    ))}
  </div>
);

export default Projects;
