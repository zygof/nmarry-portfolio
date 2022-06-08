import React from "react";
import moment from "moment";

import { CareerModel } from "../../interfaces";
interface Props {
  careers: Array<CareerModel>;
}

interface CareerCard {
  career: CareerModel;
}

const CareerCardLeft: React.FunctionComponent<CareerCard> = ({ career }) => (
  <div className="flex flex-row-reverse md:contents">
    <a
      className="career col-start-1 col-end-5 p-4 my-4 sm:mr-auto rounded-xl shadow-xl text-blue-50 transition-colors duration-300"
      href={career.link}
      rel="noreferrer"
      target="_blank"
    >
      <h3 className="font-semibold text-lg mb-1">{`${
        career.to
          ? moment(career.to).format("YYYY") +
            " - " +
            moment(career.from).format("YYYY")
          : moment(career.from).format("YYYY")
      }`}</h3>
      <p className="leading-tight text-justify font-medium">
        {career.diploma}
        <span className="font-extralight text-md ml-2">{career.location}</span>
      </p>

      <p className="leading-tight text-justify font-medium">{career.title}</p>
    </a>
    <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
      <div className="h-full w-6 flex items-center justify-center">
        <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
      </div>
      <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-primary shadow"></div>
    </div>
  </div>
);

const CareerCardRight: React.FunctionComponent<CareerCard> = ({ career }) => (
  <div className="flex md:contents">
    <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
      <div className="h-full w-6 flex items-center justify-center">
        <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
      </div>
      <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-primary shadow"></div>
    </div>
    <a
      className="career col-start-6 col-end-10 p-4 my-4 mr-auto rounded-xl shadow-xl text-blue-50 transition-colors duration-300"
      href={career.link}
      rel="noreferrer"
      target="_blank"
    >
      <h3 className="font-semibold text-lg mb-1">
        {career.to
          ? moment(career.to).format("YYYY") +
            " - " +
            moment(career.from).format("YYYY")
          : moment(career.from).format("YYYY")}
      </h3>
      <p className="leading-tight text-justify font-medium ">
        {career.diploma}
        <span className="font-extralight text-md ml-2">{career.location}</span>
      </p>

      <p className="leading-tight text-justify font-medium">{career.title}</p>
    </a>
  </div>
);

const Careers: React.FunctionComponent<Props> = ({ careers }) => (
  <section className="component p-10">
    <div className="flex flex-col md:grid grid-cols-9 m-auto">
      {careers.map((career: CareerModel, index: number) =>
        index % 2 === 0 ? (
          <CareerCardLeft key={index} career={career} />
        ) : (
          <CareerCardRight key={index} career={career} />
        )
      )}
    </div>
  </section>
);

export default Careers;
