import { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemaProvider = ({children}) => {
  const [theme, setTheme] = useState("claro");

  const toggleTheme = () => {
    setTheme((preveTheme) => (preveTheme === "claro" ? "escuro" : "claro"));
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
        {children}
    </ThemeContext.Provider>
  )
};

export {ThemaProvider, ThemeContext}