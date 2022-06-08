import React from "react";
import { motion } from "framer-motion";
import classNames from "classnames";

interface Props {
  isOpen: boolean;
  isDarkMode?: boolean;
  toggle: () => void;
}

const MenuToggle: React.FunctionComponent<Props> = ({
  isOpen,
  isDarkMode,
  toggle,
}) => {
  return (
    <button
      className={classNames([
        "z-50 cursor-pointer lg:hidden outline-none focus:outline-none",
        isDarkMode ? "text-blue-50" : "text-primary",
      ])}
      onClick={toggle}
    >
      <svg width="23" height="23" viewBox="0 0 23 23">
        <motion.path
          fill="transparent"
          strokeLinecap="round"
          strokeWidth="3"
          animate={isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            closed: {
              d: "M 2 2.5 L 20 2.5",
              stroke: isDarkMode ? "rgb(239 246 255)" : "rgba(106, 62, 107)",
            },
            open: {
              d: "M 3 16.5 L 17 2.5",
              stroke: isDarkMode ? "rgb(239 246 255)" : "rgba(106, 62, 107)",
            },
          }}
          transition={{ duration: 0.33 }}
        />
        <motion.path
          fill="transparent"
          strokeLinecap="round"
          strokeWidth="3"
          d="M 2 9.423 L 20 9.423"
          stroke={isDarkMode ? "rgb(239 246 255)" : "rgba(106, 62, 107)"}
          animate={isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.33 }}
        />
        <motion.path
          fill="transparent"
          strokeLinecap="round"
          strokeWidth="3"
          animate={isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            closed: {
              d: "M 2 16.346 L 20 16.346",
              stroke: isDarkMode ? "rgb(239 246 255)" : "rgba(106, 62, 107)",
            },
            open: {
              d: "M 3 2.5 L 17 16.346",
              stroke: isDarkMode ? "rgb(239 246 255)" : "rgba(106, 62, 107)",
            },
          }}
          transition={{ duration: 0.33 }}
        />
      </svg>
    </button>
  );
};

export default MenuToggle;
