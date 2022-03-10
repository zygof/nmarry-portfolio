import React from "react";

import { DescriptionModel } from "../models";

interface Props {
  descriptions: Array<DescriptionModel>;
}

const About: React.FunctionComponent<Props> = ({ descriptions }) => (
  <div className="max-w-4xl mx-auto mt-16">
    <p className="text-2xl md:text-4xl text-center font-extrabold">À propos</p>
    {descriptions.map((description: DescriptionModel, index: number) => (
      <div key={index}>
        <p className="text-lg font-bold text-center mt-5">
          {description.label}
        </p>
        <p className="text-base text-left md:text-center text-gray-600 leading-relaxed mt-4">
          {description.text}
        </p>
      </div>
    ))}
  </div>
);

export default About;
