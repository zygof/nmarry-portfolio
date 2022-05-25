import React, { RefObject } from "react";
import CareerElement from "./CareerElement";

import { CareerModel } from "../interfaces";
interface Props {
  customRef: RefObject<HTMLDivElement>;
  careers: Array<CareerModel>;
}

const Careers: React.FunctionComponent<Props> = ({ customRef, careers }) => (
  <div
    ref={customRef}
    className="component flex-col items-center justify-center"
  >
    <h1 className="mt-8 text-2xl md:text-4xl text-center font-extrabold">
      Formations
    </h1>
    <ol className="max-w-4xl my-5 mx-auto relative text-center">
      {careers.map((career: CareerModel, index: number) => (
        <CareerElement key={index} career={career} />
      ))}
    </ol>
  </div>
);

export default Careers;
