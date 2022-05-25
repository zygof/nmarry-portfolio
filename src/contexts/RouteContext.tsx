import React, { createContext, useState } from "react";

import { RouteModel } from "../interfaces";

interface Props {
  children: React.FunctionComponent;
}

interface RouteContextInterface {
  routes: Array<RouteModel>;
  handleRoutes: (routes: Array<RouteModel>) => void;
  prevRoute: RouteModel | null;
  currentRoute: RouteModel | null;
  nextRoute: RouteModel | null;
  handleRoute: (page: number) => void;
  goToPrevRoute: () => void;
  goToNextRoute: () => void;
}

const RouteContext = createContext<RouteContextInterface | null>(null);

const RouteProvider: React.FunctionComponent<Props> = ({ children }) => {
  const [routes, setRoutes] = useState<Array<RouteModel>>([]);
  const [prevRoute, setPrevRoute] = useState<RouteModel | null>(null);
  const [currentRoute, setCurrentRoute] = useState<RouteModel | null>(
    routes.length > 0 ? routes[0] : null
  );
  const [nextRoute, setNextRoute] = useState<RouteModel | null>(
    routes.length > 2 ? routes[1] : null
  );

  const handleRoutes = (items: Array<RouteModel>) => setRoutes(items);
  const handleRoute = (id: number) => {
    routes.map((item, index) => {
      if (item.id === id) {
        setPrevRoute(index === 0 ? null : routes[index - 1]);
        setCurrentRoute(item);
        setNextRoute(index === routes.length - 1 ? null : routes[index + 1]);
      }
      return item;
    });
  };
  const goToPrevRoute = () => {
    if (prevRoute) handleRoute(prevRoute.id);
  };
  const goToNextRoute = () => {
    if (nextRoute) handleRoute(nextRoute.id);
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
