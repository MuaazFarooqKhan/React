import React, { useContext, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { IconContext } from "react-icons/lib";
import { CountriesContext } from "src/context/countriesContext";
import { changeModeContext } from "src/context/changeModeContext";
import Filter from "../Filter";

import "./style.scss";

const SearchInput = () => {
  const { getSearchedCountry } = useContext(CountriesContext);
  const { searchedCountry } = useContext(CountriesContext)
  const { theme } = useContext(changeModeContext);

  const [inputValue, setInputValue] = useState(searchedCountry);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
    getSearchedCountry(e.target.value);
  };

  const classNames =
    theme === "dark"
      ? "search-bar__form--icon search-bar__form--icon--dark"
      : "search-bar__form--icon";

  return (
    <div className="search-bar">
      <form className="search-bar__form">
        <input
          className={
            theme === "dark"
              ? "search-bar__form--input search-bar__form--input--dark"
              : "search-bar__form--input"
          }
          type="text"
          placeholder="Search for a country..."
          value={inputValue}
          onChange={handleOnChange}
        />
        <IconContext.Provider
          value={{
            className: classNames,
          }}
        >
          <IoSearch />
        </IconContext.Provider>
      </form>
      <Filter />
    </div>
  );
};

export default SearchInput;
