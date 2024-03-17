import { useContext } from "react";
import { CountriesContext } from "src/context/countriesContext";
import Card from "./Card";
import "./style.scss";

const Cards = () => {
  // will use get data from json file
  const { data, isLoading, isError, searchedCountry, filteredRegion } =
    useContext(CountriesContext);

  return (
    <div className={isLoading ? "cards cards__skeleton" : "cards"}>
      {!isLoading && isError && (
        <p className="cards__error">
          The request unfortunately failed. Please try later.
        </p>
      )}
      {!isLoading &&
        data &&
        data
          .filter((country) =>
            country.name.toLowerCase().includes(searchedCountry.toLowerCase()),
          )
          .filter((country) =>
            country.region.toLowerCase().includes(filteredRegion.toLowerCase()),
          )
          .map(({ alpha2Code, name, flags, population, region, capital }) => {
            return (
              <Card
                key={alpha2Code}
                name={name}
                flags={flags}
                population={population}
                region={region}
                capital={capital}
                alpha2Code={alpha2Code}
              />
            );
          })}
    </div>
  );
};

export default Cards;
