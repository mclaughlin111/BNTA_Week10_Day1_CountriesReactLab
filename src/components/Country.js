const Country = ({ country, handleCountryUpdate }) => {

  const countryName = country.name.common; // is there any other way of returning data here than writing to variable countryName
  const countryFlag = country.flag;

  const handleMoveCountry = () => {
   handleCountryUpdate(country);
  };

  return (
    <>
      <p>{country.name.common}<span>{country.flag}</span></p>
      <button onClick={handleMoveCountry}> Visited </button>
    </>
  );
};

export default Country;
