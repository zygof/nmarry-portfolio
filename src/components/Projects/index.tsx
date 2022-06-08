import React, { useContext } from "react";
import classNames from "classnames";

import { ProjectModel } from "../../interfaces";
import { DarkModeContext } from "../../contexts";
import Carousel from "./Carousel";
import ProjectCard from "./ProjectCard";

interface Props {
  projects: Array<ProjectModel>;
}

const Projects: React.FunctionComponent<Props> = ({ projects }) => {
  const darkModeContext = useContext(DarkModeContext);

  const sliceIntoChunks = (chunkSize: number) => {
    const splitedSlideData: Array<ProjectModel[]> = [];
    for (let i = 0; i < projects.length; i += chunkSize) {
      const chunk = projects.slice(i, i + chunkSize);
      splitedSlideData.push(chunk);
    }
    return splitedSlideData;
  };

  const slides = () => {
    const slideData = sliceIntoChunks(6);
    return slideData.map((data, index) => (
      <div
        key={index}
        className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-4 gap-y-4 rounded-xl grid-flow-row-dense h-full w-full"
      >
        {data.map((project, projectIndex) => (
          <ProjectCard
            key={projectIndex}
            project={project}
            isDarkMode={darkModeContext?.darkMode}
          />
        ))}
      </div>
    ));
  };

  return (
    <section className="component projects flex flex-col px-16 pt-24 items-center relative">
      <h1
        className={classNames([
          "text-center text-2xl font-bold transition-colors duration-300 mb-3",
          darkModeContext?.darkMode ? "text-blue-50" : "text-primary",
        ])}
      >
        Projets
      </h1>
      <Carousel>{slides()}</Carousel>
    </section>
  );
};

export default Projects;
