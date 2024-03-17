import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { changeModeContext } from "src/context/changeModeContext";
import Cards from "../Cards";
import Country from "../Country";
import NavBar from "../NavBar";
import SearchInput from "../Search/Input";

import "./style.scss";

const App = () => {
  // will use for mode change
  const { theme } = useContext(changeModeContext);
debugger
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
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default App;
