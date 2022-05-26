import React, { useContext } from "react";

import { RouteContext } from "../contexts";

interface Props {}

const NextButton: React.FunctionComponent<Props> = () => {
  const routeContext = useContext(RouteContext);
  return (
    <div
      className="hidden lg:inline-flex justify-center fixed nextButton"
      onClick={routeContext?.goToNextRoute}
    >
      <div className="flex justify-center py-10 z-40 cursor-pointer">
        <div className="chevron"></div>
        <div className="chevron"></div>
        <div className="chevron"></div>
        <span className="text-primary text-2xl font-bold -mb-5">
          {routeContext?.nextRoute?.route}
        </span>
      </div>
    </div>
  );
};

export default NextButton;
