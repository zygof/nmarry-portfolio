import React, { useContext } from "react";
import classNames from "classnames";

import { ProjectModel } from "../../interfaces";
import { DarkModeContext } from "../../contexts";

import ProjectCard from "./ProjectCard";

interface Props {
  projects: Array<ProjectModel>;
}

const Projects: React.FunctionComponent<Props> = ({ projects }) => {
  const darkModeContext = useContext(DarkModeContext);

  return (
    <section className="component projects flex flex-col items-center">
      <h1
        className={classNames([
          "text-2xl font-bold transition-colors duration-300 mb-5",
          darkModeContext?.darkMode ? "text-blue-50" : "text-primary",
        ])}
      >
        Projets
      </h1>
      <div className="project-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3  rounded-xl border-2 border-gray-300">
        {projects.map((project: ProjectModel, index: number) => (
          <ProjectCard
            key={index}
            project={project}
            isDarkMode={darkModeContext?.darkMode}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
