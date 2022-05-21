import React from "react";
import { FaCalendarWeek } from "react-icons/fa";
import { CareerModel } from "../interfaces";
import moment from "moment";

interface Props {
  career: CareerModel;
}

const CareerElement: React.FunctionComponent<Props> = ({ career }) => (
  <li className="mb-5 ml-5">
    <span className="flex absolute -left-1.5 justify-center items-center w-3 h-3 rounded-full ring-8 ring-gray-100">
      <FaCalendarWeek className="w-3 h-3 dark:text-blue-400" />
    </span>
    <time className="mb-1 text-sm font-normal leading-none text-gray-700 font-bold dark:text-gray-500">
      {`${moment(career.from).format("YYYY")}${
        career.to ? " - " + moment(career.to).format("YYYY") : ""
      }`}
    </time>
    <p className="text-lg font-semibold text-gray-900 dark:text-white">
      {`${career.diploma}  ● ${career.title}`}
    </p>
    <p className="text-md font-semibold text-gray-900 dark:text-white">
      {career.option}
    </p>
    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
      {career.location}
    </p>
  </li>
);

export default CareerElement;
