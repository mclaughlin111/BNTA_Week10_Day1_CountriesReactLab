import { useState, useEffect } from "react";
import CountryList from "../components/CountryList";

const CountryContainer = () => {
  //create country useState
  const [countries, setCountries] = useState(null); // could have initiliased to be empty array 

  //load country data in
  const loadCountryData = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();
    setCountries(data);
  };

  useEffect(() => {
    loadCountryData();
  }, []);

  return (
    <>
      <h1>My Bucket-List Countries 🌏</h1>
      {countries ? (
        <CountryList countryList={countries} />
      ) : (
        <p>Loading Countries...</p>
      )}
    </>
  );
};

export default CountryContainer;
