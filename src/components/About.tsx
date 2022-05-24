import React, { RefObject, useContext } from "react";

import { DescriptionModel } from "../interfaces";
import { Route } from "../constants";
import { RouteContext } from "../contexts";

interface Props {
  customRef: RefObject<HTMLDivElement>;
  descriptions: Array<DescriptionModel>;
}

const About: React.FunctionComponent<Props> = ({ customRef, descriptions }) => {
  const routeContext = useContext(RouteContext);
  return (
    <div
      ref={customRef}
      onWheel={(event: React.WheelEvent<HTMLElement>) => {
        if (event.deltaY < 0) routeContext?.handleRoute(Route.DESCRIPTION);
        if (event.deltaY > 0) routeContext?.handleRoute(Route.FORMATIONS);
      }}
      onKeyUp={routeContext?.goToPrevRoute}
      onKeyDown={routeContext?.goToNextRoute}
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-delay="400"
      className="flex flex-col h-screen align-center justify-center"
    >
      <p className="text-2xl md:text-4xl text-center font-extrabold">
        À propos
      </p>
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
};

export default About;
