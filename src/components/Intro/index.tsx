import React, { useContext, RefObject } from "react";
import classNames from "classnames";
import { FaGithub, FaLinkedin, FaRegEnvelope } from "react-icons/fa";

import { DarkModeContext } from "../../contexts";
import { DataModel } from "../../interfaces";
interface Props {
  customRef: RefObject<HTMLDivElement>;
  data: DataModel;
}
const Intro: React.FunctionComponent<Props> = ({ customRef, data }) => {
  const darkModeContext = useContext(DarkModeContext);
  return (
    <main
      ref={customRef}
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-delay="400"
      className="component"
    >
      <div className="avatar shadow-2xl">
        <img
          src="/profile.png"
          alt="self"
          className="w-100 rounded-medium grayscale-0"
        />
      </div>
      <div className="items-center px-5">
        <p
          className={classNames([
            "text-4xl sm:text-4xl font-bold",
            darkModeContext?.darkMode ? "text-blue-50" : "text-black",
          ])}
        >
          Hi, I'm {data.firstName} 👋🏽
        </p>
        <p className="text-3xl font-semibold my-1 text-primary">{data.title}</p>
        <ul>
          {data.personalDescription.map((element, index) => (
            <li key={index}>
              <span className="mr-2">{element.icon}</span>
              <span
                aria-label="emoji"
                role="img"
                className={classNames([
                  "emoji text-base font-semibold",
                  darkModeContext?.darkMode ? "text-blue-50" : "text-black",
                ])}
              >
                {element.description}
              </span>
            </li>
          ))}
        </ul>
        <div className="flex align-center justify-center mt-4">
          <a
            className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-teal-500 hover:bg-teal-500 rounded-full hover:text-blue-50 transition-colors duration-300"
            href={
              "https://mail.google.com/mail/?view=cm&fs=1&to=" +
              data.social.email
            }
            rel="noreferrer"
            target="_blank"
          >
            <FaRegEnvelope size={24} />
            <span className="sr-only">Email</span>
          </a>
          <a
            className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-blue-50 transition-colors duration-300"
            href={data.social.github}
            rel="noreferrer"
            target="_blank"
          >
            <FaGithub size={24} />
            <span className="sr-only">Github</span>
          </a>
          <a
            className="text-xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-blue-50 transition-colors duration-300"
            href={data.social.linkedin}
            rel="noreferrer"
            target="_blank"
          >
            <FaLinkedin size={24} />
            <span className="sr-only">Linkedin</span>
          </a>
        </div>
      </div>
    </main>
  );
};

export default Intro;
