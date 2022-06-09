import React, { createContext, useState } from "react";
import ReactGA from "react-ga";

import { RouteModel, RouteContextInterface } from "../interfaces";
import useAnalyticsEventTracker from "../useAnalyticsEventTracker";

import { Route } from "../data";

interface Props {
  children: React.ReactNode;
}

const RouteContext = createContext<RouteContextInterface | null>(null);

const RouteProvider: React.FunctionComponent<Props> = ({ children }) => {
  const [routes, setRoutes] = useState<Array<RouteModel>>([
    { id: 0, route: Route.INTRO },
    { id: 1, route: Route.ABOUT },
    { id: 2, route: Route.CAREERS },
    { id: 3, route: Route.SKILLS },
    { id: 4, route: Route.PROJECTS },
  ]);
  const [prevRoute, setPrevRoute] = useState<RouteModel | null>(null);
  const [currentRoute, setCurrentRoute] = useState<RouteModel | null>(
    routes.length > 0 ? routes[0] : null
  );
  const [nextRoute, setNextRoute] = useState<RouteModel | null>(
    routes.length > 2 ? routes[1] : null
  );
  const gaEventTracker = useAnalyticsEventTracker("Route management");
  const handleRoutes = (items: Array<RouteModel>) => setRoutes(items);
  const handleRoute = (id: number) => {
    routes.map((item: RouteModel, index: number) => {
      if (item.id === id) {
        setPrevRoute(index === 0 ? null : routes[index - 1]);
        setCurrentRoute(item);
        setNextRoute(index === routes.length - 1 ? null : routes[index + 1]);
        ReactGA.pageview(item.route);
      }
      return item;
    });
  };
  const goToPrevRoute = () => {
    if (prevRoute) {
      handleRoute(prevRoute.id);
      gaEventTracker(`goToPrev : ${prevRoute.route}`);
    }
  };
  const goToNextRoute = () => {
    if (nextRoute) {
      handleRoute(nextRoute.id);
      gaEventTracker(`goToNext : ${nextRoute.route}`);
    }
  };

  return (
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
  );
};

export { RouteContext, RouteProvider };
