import React from "react";
import CareerElement from "./CareerElement";

import { CareerModel } from "../interfaces";

interface Props {
  careers: Array<CareerModel>;
}

const Careers: React.FunctionComponent<Props> = ({ careers }) => (
  <div>
    <h1 className="mt-8 text-2xl md:text-4xl text-center font-extrabold">
      Formations
    </h1>
    <ol className="max-w-4xl my-5 mx-auto relative border-l border-gray-200 dark:border-gray-700 mx-auto text-center">    
    {careers.map((career: CareerModel, index: number) => (
      <CareerElement key={index} career={career} />
    ))}
    </ol>
  </div>
);

export default Careers;
