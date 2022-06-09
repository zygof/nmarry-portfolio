import React from "react";
import { createRoot } from "react-dom/client";
import ReactGA from "react-ga";

import { RouteProvider, DarkModeProvider } from "./contexts";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import "./assets/main.css";

ReactGA.initialize(process.env.REACT_APP_TRACKING_ID);

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <RouteProvider>
      <DarkModeProvider>
        <App />
      </DarkModeProvider>
    </RouteProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
