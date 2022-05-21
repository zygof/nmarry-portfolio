import React, { useContext } from "react";

import { DarkModeContext } from "../contexts/DarkModeContext";

export const TogglerDarkMode = () => {
  const darkModeContext = useContext(DarkModeContext);

  return (
    <div
      className="font-extrabold cursor-pointer"
      onClick={darkModeContext?.toggleDarkMode}
    >
      {darkModeContext?.darkMode ? (
        <span aria-label="Full Moon" role="img">
          🌕
        </span>
      ) : (
        <span aria-label="New Moon" role="img">
          🌑
        </span>
      )}
    </div>
  );
};
