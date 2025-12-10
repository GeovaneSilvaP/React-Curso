import { use } from "react";
import { ThemeContext } from "../context/ThemeContext";

const BotaoDeTheme = () => {
  const { theme, toggleTheme } = use(ThemeContext);

  return (
    <button onClick={toggleTheme} className={theme}>
      ALterar tema para {theme === "claro" ? "escuro" : "claro"}
    </button>
  );
};

export default BotaoDeTheme;
