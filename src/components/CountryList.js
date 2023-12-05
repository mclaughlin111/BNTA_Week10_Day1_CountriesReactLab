import Country from "./Country";
import { useState } from "react";

const CountryList = ({ countryList, handleCountryUpdate }) => {
  //list of all countries // LIST 1
  let [listOfCountries, setListOfCountries] = useState([countryList]);
  console.log(listOfCountries);
  //list of visited countries // LIST 2
  const [visitedCountries, setVisitedCountries] = useState([]);
  console.log(visitedCountries);

  const handleMoveCountry = (event) => {
    let index = event.target.parentNode.getAttribute("id");
    console.log(index);
    // remove item from array list
    countryNames.splice(index, 1);
    // add item to visited list
    //update state?
    setVisitedCountries([
      ...visitedCountries,
      <Country country={countryList[index]} />,
    ]);
  };
  
  //define array of countries
  const countryNames = [];
  for (let index = 0; index < countryList.length; index++) {
    countryNames.push(
      // write to a list
      <li id={index} key={index}>
        <Country
          country={countryList[index]}
          handleCountryUpdate={handleCountryUpdate}
        />{" "}
        {/* country component with country defined by component passed down as object */}
      </li>
    );
  }
  return (
    <>
      <ul id="countries">{countryNames}</ul>
      <hr />
      <ul id="visitedCountries">{visitedCountries}</ul>
    </>
  );
};

export default CountryList;
