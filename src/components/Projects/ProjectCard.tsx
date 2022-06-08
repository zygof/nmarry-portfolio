import React from "react";
import { FcIdea } from "react-icons/fc";
import { FaCog } from "react-icons/fa";

import { ProjectCardProps, Platform } from "../../interfaces";
import IconPlaform from "./IconPlatform";
import Statut from "./Statut";

const ProjectCard: React.FunctionComponent<ProjectCardProps> = ({
  project,
  isDarkMode,
}) => (
  <div className="project-card flex flex-col cursor-pointer p-3 rounded-xl">
    <div className="flex flex-row mb-3">
      <FcIdea className="flex justify-center bg-blue-50 rounded-lg p-3 w-24 h-full max-h-[90px] shadow-xl" />

      <div className="flex flex-col flex-1 justify-start items-start pl-5 space-y-2">
        <span className="text-xl font-semibold text-blue-50 transition-colors duration-300">
          {project.name} <span className="project-type">{project.type}</span>
        </span>
        <Statut statut={project.statut} />
        <span className="flex flex-row space-x-2">
          {project.platforms.map((platform: Platform, index: number) => (
            <IconPlaform
              key={index}
              platform={platform}
              settings={{
                size: 20,
                className: "text-blue-50",
              }}
            />
          ))}
        </span>
      </div>
    </div>
    <p className="h-full font-thin text-blue-50 transition-colors duration-300">
      {project.description}
    </p>
    <div className="flex flex-row">
      {project.technologies.map((technologie: string, index: number) => (
        <span className="flex flex-col justify-center items-center w-full h-12">
          <FaCog
            key={index}
            size={20}
            className="text-gray-800 transition-colors duration-300"
          />
          <p className="text-xs font-semibold text-blue-50 transition-colors duration-300">
            {technologie}
          </p>
        </span>
      ))}
    </div>
  </div>
);

export default ProjectCard;
