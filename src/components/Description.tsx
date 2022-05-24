import React, { useContext, RefObject } from "react";
import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";

import { RouteContext, DarkModeContext } from "../contexts";
import { PersonalDescriptionModel } from "../interfaces";
import { Route } from "../constants";
interface Props {
  customRef: RefObject<HTMLDivElement>;
  name: string;
  title: string;
  personalDescription: Array<PersonalDescriptionModel>;
  social: { github: string; dribbble: string; twitter: string; email: string };
}
const Description: React.FunctionComponent<Props> = ({
  customRef,
  name,
  title,
  personalDescription,
  social,
}) => {
  const routeContext = useContext(RouteContext);
  const darkModeContext = useContext(DarkModeContext);
  return (
    <main
      ref={customRef}
      onWheel={(event: React.WheelEvent<HTMLElement>) => {
        if (event.deltaY > 0) routeContext?.handleRoute(Route.A_PROPOS);
      }}
      onKeyDown={routeContext?.goToNextRoute}
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-delay="400"
      className="flex h-screen align-center"
    >
      <div className="avatar shadow-lg">
        <img
          src="/profile.png"
          alt="self"
          className="w-100 rounded-medium grayscale-0"
        />
      </div>
      <div className="align-center">
        <p
          className={`text-4xl sm:text-4xl font-bold ${
            darkModeContext?.darkMode ? "text-white" : "text-black"
          }`}
        >
          Hi, I'm {name} 👋🏽
        </p>
        <p className="text-3xl font-semibold my-1 text-primary">{title}</p>
        <ul>
          {personalDescription.map((element, index) => (
            <li key={index}>
              <span
                aria-label="emoji"
                role="img"
                className={`emoji text-base font-semibold ${
                  darkModeContext?.darkMode ? "text-white" : "text-black"
                }`}
              >
                {element.description}
              </span>{" "}
              {element.icon}
            </li>
          ))}
        </ul>
        <div className="flex align-center justify-center mt-4">
          <a
            className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
            href={social.github}
          >
            <FaGithub />
            <span className="sr-only">Github</span>
          </a>
          <a
            className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-pink-600 hover:bg-pink-600 rounded-full hover:text-white transition-colors duration-300"
            href={social.dribbble}
          >
            <FaDribbble />
            <span className="sr-only">Dribble</span>
          </a>
          <a
            className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300"
            href={social.twitter}
          >
            <FaTwitter />
            <span className="sr-only">Twitter</span>
          </a>
          <a
            className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-teal-500 rounded-full hover:text-white transition-colors duration-300"
            href={
              "https://mail.google.com/mail/?view=cm&fs=1&to=" + social.email
            }
          >
            <FaRegEnvelope />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>
    </main>
  );
};

export default Description;
