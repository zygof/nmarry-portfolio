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
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div>
      <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
        {children}
      </DarkModeContext.Provider>
    </div>
  );
};

export { DarkModeContext, DarkModeProvider };
