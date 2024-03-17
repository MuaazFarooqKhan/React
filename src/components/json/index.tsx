// read data from json
const response = await fetch('src/data.json');
const data = await response.json();
// will display all the countries
export const loadData = () => {
  return data;
};
// will get clicked country data
export const getCountryData = (url: string) => {
  var singleCountryData = data.find((country:any) => country.alpha2Code === url);
  return singleCountryData;
};
// will give all the country name whose border are touch with the clicked country
export const getBorders = (url: string) => {
  var borders = data.filter((country:any) => url.includes(country.alpha2Code));
  return borders;
};

