import React, { useContext } from "react";
import ClassNames from "classnames";

import { DarkModeContext } from "../contexts";

interface Props {
  onNavBarRight?: boolean;
}
export const TogglerDarkMode: React.FunctionComponent<Props> = ({
  onNavBarRight,
}) => {
  const darkModeContext = useContext(DarkModeContext);

  return (
    <div
      className={ClassNames([
        "font-extrabold cursor-pointer",
        onNavBarRight ? "mr-5" : "",
      ])}
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
