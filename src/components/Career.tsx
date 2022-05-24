import React, { RefObject, useContext } from "react";
import CareerElement from "./CareerElement";

import { CareerModel } from "../interfaces";
import { Route } from "../constants";
import { RouteContext } from "../contexts";
interface Props {
  customRef: RefObject<HTMLDivElement>;
  careers: Array<CareerModel>;
}

const Careers: React.FunctionComponent<Props> = ({ customRef, careers }) => {
  const routeContext = useContext(RouteContext);
  return (
    <div
      ref={customRef}
      onWheel={(event: React.WheelEvent<HTMLElement>) => {
        if (event.deltaY < 0) routeContext?.handleRoute(Route.A_PROPOS);
        if (event.deltaY > 0) routeContext?.handleRoute(Route.COMPETENCES);
      }}
      onKeyUp={routeContext?.goToPrevRoute}
      onKeyDown={routeContext?.goToNextRoute}
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-delay="400"
      className="flex flex-col h-screen align-center justify-center"
    >
      <h1 className="mt-8 text-2xl md:text-4xl text-center font-extrabold">
        Formations
      </h1>
      <ol className="max-w-4xl my-5 mx-auto relative mx-auto text-center">
        {careers.map((career: CareerModel, index: number) => (
          <CareerElement key={index} career={career} />
        ))}
      </ol>
    </div>
  );
};

export default Careers;
