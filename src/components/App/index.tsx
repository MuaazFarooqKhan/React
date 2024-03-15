import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { ThemeContext } from "src/context/themeContext";
import Cards from "../Cards";
import Country from "../Country";
import NavBar from "../NavBar";
import SearchInput from "../Search/Input";

import "./style.scss";

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme === "dark" ? "app app--dark" : "app"}>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SearchInput />
              <Cards />
            </>
          }
        />
        <Route path="/country/:code" element={<Country />} />
      </Routes>
    </div>
  );
};

export default App;
