import React, { useContext, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IconContext } from "react-icons/lib";
import { CountriesContext } from "src/context/countriesContext";
import { changeModeContext } from "src/context/changeModeContext";

import "./style.scss";

const Filter = () => {
  // give specific region
  const { getFilteredRegion } = useContext(CountriesContext);
    // will use for mode change
  const { theme } = useContext(changeModeContext);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [region, setRegion] = useState("");

  // close and open dialogbox of region
  const handleOnClick = () => {
    setDialogOpen(!dialogOpen);
  };

  // change value of region
  const handleOnClickRegion = (event: React.MouseEvent) => {
    const regionString = event.target as HTMLLIElement;
    getFilteredRegion(regionString.id);
    setRegion(regionString.id);
    setDialogOpen(!dialogOpen);
  };

  return (
    <div>
      <div className={theme === "dark" ? "filter filter--dark" : "filter"} onClick={handleOnClick}>
        {region ? region : "Filter by Region"}
        <IconContext.Provider
          value={{
            className: "filter__icon",
          }}
        >
          <IoIosArrowDown/>
        </IconContext.Provider>
      </div>
      <div className={dialogOpen ? "filter__select" : "filter__select--hide"}>
        <ul>
          <li
            id="All"
            className="filter__select--region"
            onClick={handleOnClickRegion}
          >
            All
          </li>
          <li
            id="Africa"
            className="filter__select--region"
            onClick={handleOnClickRegion}
          >
            Africa
          </li>
          <li
            id="Americas"
            className="filter__select--region"
            onClick={handleOnClickRegion}
          >
            Americas
          </li>
          <li
            id="Asia"
            className="filter__select--region"
            onClick={handleOnClickRegion}
          >
            Asia
          </li>
          <li
            id="Europe"
            className="filter__select--region"
            onClick={handleOnClickRegion}
          >
            Europe
          </li>
          <li
            id="Oceania"
            className="filter__select--region"
            onClick={handleOnClickRegion}
          >
            Oceania
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Filter;
