import React from "react";
interface Props {
  isDarkMode?: boolean;
  handle?: () => void;
  className?: string;
}

const TogglerDarkMode: React.FunctionComponent<Props> = ({
  isDarkMode,
  className,
  handle,
}) => (
  <div className={className} onClick={handle}>
    {isDarkMode ? (
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

export default TogglerDarkMode;
