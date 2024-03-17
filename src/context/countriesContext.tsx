import { createContext, useState, ReactNode } from "react";
import { useQuery } from "react-query";
import { loadData } from "src/components/json";
import { Countries, AllCountriesContext } from "src/modals/types";

const defaultState = {
  data: [],
  isLoading: false,
  isError: false,
  getSearchedCountry: () => {},
  searchedCountry: "",
  getFilteredRegion: () => {},
  filteredRegion: "",
};
export const CountriesContext =
  createContext<AllCountriesContext>(defaultState);

export const CountriesContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [searchedCountry, setSearchedCountry] = useState("");
  const [filteredRegion, setFilteredRegion] = useState("");

  // will get data from the json
  const { isLoading, isError, data } = useQuery<Countries[]>(
    "countriesInfos",
    () => loadData(),
  );

  // will use for search input

  const getSearchedCountry = (value: string): void => {
    setSearchedCountry(value);
  };

  // will use for get data on region based
  const getFilteredRegion = (value: string): void => {
    if (value !== "All") {
      setFilteredRegion(value);
    } else {
      setFilteredRegion("");
    }
  };

  return (
    <CountriesContext.Provider
      value={{
        data,
        isLoading,
        isError,
        getSearchedCountry,
        searchedCountry,
        getFilteredRegion,
        filteredRegion,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
};
