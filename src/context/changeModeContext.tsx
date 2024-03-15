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

export const ChangeModeContextProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState("light");

  const toggleMode = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

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
