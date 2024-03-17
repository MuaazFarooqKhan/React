export interface Countries {
  name: string;
  alpha2Code: string;
  topLevelDomain: string[];
  capital: string;
  subregion: string;
  region: string;
  population: number;
  borders?: string[];
  nativeName: string;
  currencies: Currencies[];
  languages: Languages[];
  flags: {
    svg: string;
    png: string;
  };
}

export interface AllCountriesContext {
  data?: Countries[];
  isLoading: boolean;
  isError: boolean;
  getSearchedCountry: (value: string) => void;
  searchedCountry: string;
  getFilteredRegion: (value: string) => void;
  filteredRegion: string;
}

export interface Currencies {
  code: string;
  name: string;
  symbol: string;
}

export interface Languages {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}

export interface Border {
  borderCode: string;
  borderName: string;
}

export interface Country {
  name: Countries["name"];
  flags: Countries["flags"];
  population: Countries["population"];
  region: Countries["region"];
  capital: Countries["capital"];
  alpha2Code: Countries["alpha2Code"];
}

