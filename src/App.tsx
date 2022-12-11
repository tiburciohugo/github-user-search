import React, { createContext, useState } from "react";
import Navbar from "./components/Navbar";
import Searchbar from "./components/Searchbar";

export const ThemeContext: any = createContext(null);

const App = () => {
  // Themes
  const html = document.querySelector("html");
  const [userTheme, setUserTheme] = useState<string | null>(
    localStorage.getItem("theme")
  );

  function changeTheme(): any {
    if (html?.classList.contains("dark")) {
      html?.classList.remove("dark");
      setUserTheme("light");
      return;
    } else {
      html?.classList.add("dark");
      setUserTheme("dark");
      return;
    }
  }

  const [theme, setTheme]: [theme: string, setTheme: any] = useState("dark");

  const toggleTheme = (): any => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
   <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        className="w-full h-screen px-4 c-md:max-w-[35.813rem] c-md:mx-auto font-spacemono c-lg:max-w-[45.625rem] bg-lighter-blue dark:bg-darkest-blue"
        id={theme}
      >
        <Navbar theme={changeTheme} />
        <Searchbar />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
