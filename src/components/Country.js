const Country = ({ country, handleCountryUpdate }) => {

  const countryName = country.name.common; // is there any other way of returning data here than writing to variable countryName
  const countryFlag = country.flag;
  
  const handleMoveCountry = () => {
   handleCountryUpdate();
  };


  return (
    <>
      <p>{country.name.common}</p><span>{country.flag}</span>
      <button onClick={handleMoveCountry}> Visited </button>
    </>
  );
};

export default Country;
