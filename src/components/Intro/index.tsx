import React, { useContext } from "react";
import classNames from "classnames";

import { DataModel, SocialModel } from "../../interfaces";
import { DarkModeContext } from "../../contexts";

interface Props {
  data: DataModel;
}
const Intro: React.FunctionComponent<Props> = ({ data }) => {
  const darkModeContext = useContext(DarkModeContext);
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-delay="400"
      className="component section-intro"
    >
      <div className="avatar shadow-2xl">
        <img
          src={data.profile}
          alt="self"
          className="w-100 rounded-medium grayscale-0"
        />
      </div>
      <div className="items-center px-5">
        <p
          className={classNames([
            "text-4xl sm:text-4xl font-bold transition-colors duration-300",
            darkModeContext?.darkMode ? "text-blue-50" : "text-black",
          ])}
        >
          Hi, I'm {data.firstName} 👋🏽
        </p>
        <p className="text-3xl font-semibold my-1 text-primary">{data.title}</p>
        <ul>
          {data.personalDescription.map((element, index) => (
            <li key={index} className="flex flex-row items-center">
              <div className="flex justify-center mr-2 w-10">
                {element.icon()}
              </div>
              <span
                aria-label="emoji"
                role="img"
                className={classNames([
                  "emoji text-base font-semibold transition-colors duration-300 ",
                  darkModeContext?.darkMode ? "text-blue-50" : "text-black",
                ])}
              >
                {element.description}
              </span>
            </li>
          ))}
        </ul>
        <div className="flex align-center justify-center pt-2">
          {data.socials.map((social: SocialModel, index: number) => (
            <a
              key={index}
              className="flex flex-col items-center p-1 sm:m-2 sm:p-2 text-xl text-primary hover:text-gray-500 rounded-full transition-colors duration-300"
              href={social.link}
              rel="noreferrer"
              target="_blank"
            >
              {social.icon}
              <span className="mt-1 text-sm font-bold">{social.social}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Intro;
