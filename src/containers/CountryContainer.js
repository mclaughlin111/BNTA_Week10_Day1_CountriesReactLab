import { useState, useEffect } from "react";
import CountryList from "../components/CountryList";

const CountryContainer = () => {
  //create country useState
  const [countriesToVisit, setCountriesToVisit] = useState([]); // could have initiliased to be empty array
  const [visitedCountries, setVisitedCountries] = useState([]); // could have initiliased to be empty array
  
const markCountryAsVisited = (country) => {
  const updatedCountriesToVisit = [...countriesToVisit];
  const updatedVisitedCountries = [...visitedCountries];
  // find countr in updated Country To Visit
  const countryLocation = updatedCountriesToVisit.indexOf(country);
  if (countryLocation === -1) {
    return;
  }
  //remove it
  updatedCountriesToVisit.splice(countryLocation, 1);

  // add it to updated visited Countries
  updatedVisitedCountries.push(country);

  setCountriesToVisit(updatedCountriesToVisit);
  setVisitedCountries(updatedVisitedCountries);
}



  //load country data in
  const loadCountryData = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    setCountriesToVisit(data);
  };

  useEffect(() => {
    loadCountryData();
  }, []);

  return (
    <>
      <h1>My Bucket-List Countries 🌏</h1>
      <h2>All Countries:</h2>
      {countriesToVisit ? (
        <CountryList countryList={countriesToVisit} handleCountryUpdate={markCountryAsVisited} />
      ) : (
        <p>Loading Countries...</p>
      )}
      <h2>Countries To Visit:</h2>
      <CountryList countryList={visitedCountries} handleCountryUpdate={markCountryAsVisited} />


    </>
  );
};

export default CountryContainer;
