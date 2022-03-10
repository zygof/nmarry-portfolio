import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import GitHubButton from "react-github-btn";

import { ProjectModel } from "../models";

interface Props {
  project: ProjectModel;
}

const ProjectCard: React.FunctionComponent<Props> = ({ project }) => (
  <div className="group w-full sm:w-1/2 m-4 mx-auto p-6 rounded-xl border-2 border-gray-300">
    <a href={project.link}>
      <h1 className="text-xl text-center font-bold">
        {project.title} <FaExternalLinkAlt className="inline align-baseline" />
      </h1>
    </a>
    <hr className="my-4" />
    <p className="">{project.description}</p>
    <div className="mt-4 mb-8 flex flex-wrap justify-center items-center gap-2">
      {project.tags.map((tag, index) => (
        <div key={index} className="px-4 py-1 border-2 rounded-full">
          {tag}
        </div>
      ))}
    </div>
    <div className="w-full text-center">
      <GitHubButton
        href={project.link}
        data-color-scheme="no-preference: light; light: light; dark: light;"
        data-icon="octicon-star"
        data-size="large"
        data-show-count="true"
        aria-label="Star ntkme/github-buttons on GitHub"
      >
        Star
      </GitHubButton>
      {"  "}
      <GitHubButton
        href={project.link + "/fork"}
        data-color-scheme="no-preference: light; light: light; dark: light;"
        data-icon="octicon-repo-forked"
        data-size="large"
        data-show-count="true"
        aria-label="Fork ntkme/github-buttons on GitHub"
      >
        Fork
      </GitHubButton>
    </div>
  </div>
);

export default ProjectCard;
