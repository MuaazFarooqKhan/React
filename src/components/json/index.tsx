const response = await fetch('src/data.json');
const data = await response.json();
export const loadData = async () => {
  return data;
};

export const getCountryData = async (url: string) => {
  var singleCountryData = data.find((country:any) => country.alpha3Code === url);
  return singleCountryData;
};

export const getBorders = async (url: string) => {
  var a = data.filter((country:any) => url.includes(country.alpha3Code));
  return a;
};

