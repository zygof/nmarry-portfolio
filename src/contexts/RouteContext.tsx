import React, { createContext, useState } from "react";

import { Route } from "../constants";
import { RouteModel } from "../interfaces";

interface Props {
  children: React.FunctionComponent;
}

interface RouteContextInterface {
  routes: Array<RouteModel>;
  handleRoutes: (routes: Array<RouteModel>) => void;
  prevRoute: string | null;
  currentRoute: string;
  nextRoute: string | null;
  handleRoute: (route: Route) => void;
  goToPrevRoute: () => void;
  goToNextRoute: () => void;
}

const RouteContext = createContext<RouteContextInterface | null>(null);

const RouteProvider: React.FunctionComponent<Props> = ({ children }) => {
  const [routes, setRoutes] = useState<Array<RouteModel>>([]);
  const [prevRoute, setPrevRoute] = useState<Route | null>(null);
  const [currentRoute, setCurrentRoute] = useState<Route>(Route.DESCRIPTION);
  const [nextRoute, setNextRoute] = useState<Route | null>(Route.A_PROPOS);

  const handleRoutes = (items: Array<RouteModel>) => setRoutes(items);
  const handleRoute = (route: Route) => {
    routes.map((item, index) => {
      if (item.route === route) {
        window.scrollTo({
          top: item.ref.current?.offsetTop,
          left: 100,
          behavior: "smooth",
        });
        if (index === 0) {
          setPrevRoute(null);
        } else {
          setPrevRoute(routes[index - 1].route);
        }
        setCurrentRoute(route);
        if (index === routes.length - 1) {
          setNextRoute(null);
        } else {
          setNextRoute(routes[index + 1].route);
        }
      }
      return item;
    });
  };
  const goToPrevRoute = () => {
    if (prevRoute) handleRoute(prevRoute);
  };
  const goToNextRoute = () => {
    if (nextRoute) handleRoute(nextRoute);
  };

  return (
    <div>
      <RouteContext.Provider
        value={{
          routes,
          handleRoutes,
          prevRoute,
          currentRoute,
          nextRoute,
          handleRoute,
          goToPrevRoute,
          goToNextRoute,
        }}
      >
        {children}
      </RouteContext.Provider>
    </div>
  );
};

export { RouteContext, RouteProvider };
