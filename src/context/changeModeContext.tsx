import { ReactNode, createContext, useEffect, useState } from "react";

interface CountriesChangeModeContext {
  theme: string;
  toggleMode: () => void;
}

const defaultState = {
  theme: "light",
  toggleMode: () => {},
};

export const changeModeContext = createContext<CountriesChangeModeContext>(defaultState);

// will use in main file

export const ChangeModeContextProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState("light");

  // Change mode on click

  const toggleMode = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  // local storage
  useEffect(() => {
    const value = localStorage.getItem("theme");
    if (localStorage && typeof value === "string") {
      setTheme(value);
    }
  }, []);

  return (
    <changeModeContext.Provider value={{ theme, toggleMode }}>
      {children}
    </changeModeContext.Provider>
  );
};
