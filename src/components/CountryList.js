import Country from "./Country";
import {useState} from "react";

const CountryList = ({ countryList }) => {

  const [visitedCountries, setVisitedCountries] = useState([]);
  const [listOfCountries, setListOfCountries] = useState([]);

  const handleVisitCountry=(event) => {
    event.preventDefault();



  }

  const countryNames = [];

  for (let index = 0; index < countryList.length; index++) {
    countryNames.push(
      <li key={index}>
        <Country country={countryList[index]} />
        <button onButtonClick={handleVisitCountry}>Visited</button>
      </li>
    );
  }

  return <ul>{countryNames}</ul>;
};

export default CountryList;
