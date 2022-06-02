import React from "react";
import classNames from "classnames";
import { FaCog } from "react-icons/fa";

import { ProjectModel, Platform } from "../../interfaces";
import IconPlaform from "./IconPlatform";
import Statut from "./Statut";

interface Props {
  project: ProjectModel;
  isDarkMode?: boolean;
}

const ProjectCard: React.FunctionComponent<Props> = ({
  project,
  isDarkMode,
}) => (
  <div className="flex flex-col cursor-pointer p-3">
    <div className="flex flex-row mb-3">
      <div className="flex justify-center bg-blue-50 rounded-lg w-24 shadow-xl">
        <img src="project.png" alt="project" />
      </div>

      <div className="flex flex-col flex-1 justify-start items-start pl-5 space-y-2">
        <p
          className={classNames([
            "text-xl font-semibold transition-colors duration-300",
            isDarkMode ? "text-blue-50" : "text-primary",
          ])}
        >
          {project.name}
        </p>
        <Statut statut={project.statut} />
        <span className="flex flex-row space-x-2">
          {project.platforms.map((platform: Platform, index: number) => (
            <IconPlaform
              key={index}
              platform={platform}
              settings={{
                size: 20,
                className: `transition-colors duration-300", ${
                  isDarkMode ? "text-blue-50" : "text-primary"
                }`,
              }}
            />
          ))}
        </span>
      </div>
    </div>
    <p
      className={classNames([
        "font-thin transition-colors duration-300",
        isDarkMode ? "text-blue-50" : "text-gray-800",
      ])}
    >
      {project.description}
    </p>
    <div className="flex flex-row space-x-2 my-5">
      {project.technologies.map((technologie: string, index: number) => (
        <span className="flex flex-col justify center items-center w-full">
          <FaCog
            key={index}
            className={classNames([
              "transition-colors duration-300",
              isDarkMode ? "text-blue-50" : "text-primary",
            ])}
          />
          <p>{technologie}</p>
        </span>
      ))}
    </div>
  </div>
);

export default ProjectCard;
