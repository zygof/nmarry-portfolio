import React, { createContext, useState } from "react";

interface Props {
  children: React.FunctionComponent;
}

interface DarkModeContextInterface {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const DarkModeContext = createContext<DarkModeContextInterface | null>(null);

const DarkModeProvider: React.FunctionComponent<Props> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export { DarkModeContext, DarkModeProvider };
