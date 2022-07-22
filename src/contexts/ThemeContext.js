import { createContext, useState } from "react";

const ThemeContext = createContext("light");
const ThemeProvider = (props) => {
    const [theme, setTheme] = useState("light");

const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };
