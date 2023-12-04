import { useState, useEffect } from "react";
import CountryList from "../components/CountryList";
import CountryButton from "../components/CountryButton";

const CountryContainer = () => {

//create country useState
const [countries, setCountries] = useState(null);

//load country data in
const loadCountryData = async () => {
   // fetches data from API
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = await response.json();

    // log out array of countries from API
    // console.log(data);

    setCountries(data);
};

useEffect(() => {
    loadCountryData();
  }, []);


return ( 
<>
<h1>My Country Bucket List 🌏</h1>
{/* <CountryButton onButtonClick={loadCountryData}/>  */}
{countries ? <CountryList countryList={countries} /> : <p>Loading Countries...</p>}

</> 
);

}
 
export default CountryContainer;