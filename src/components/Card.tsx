import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";

interface Props {
  name: string;
  title: string;
  social: { github: string; dribbble: string; twitter: string; email: string };
}
const Card: React.FunctionComponent<Props> = ({ name, title, social }) => (
  <div className="w-full">
    <div className="flex mx-32">
      <img
        className="w-1/6 h-1/6 shadow-xl rounded-full border-8 border-gray-700 mr-10"
        src={require("../assets/images/profile.png")}
        alt="Profile face"
      />
      <div className="align-center">
        <p className="text-lg font-semibold sm:text-lg text-gray-600">{title}</p>
        <p className="text-4xl sm:text-4xl font-bold text-white my-2">{name}</p>
        <p className="text-base sm:text-base font-bold text-gray-500 mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
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
    </div>
  </div>
);

export default Card;
