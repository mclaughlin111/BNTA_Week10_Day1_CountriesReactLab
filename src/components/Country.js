const Country = ({ country }) => {
  const countryName = country.name.common; // is there any other way of returning data here than writing to variable countryName
  const countryFlag = country.flag;

  return <>
  {countryName + countryFlag}
  <hr/>
  </>;
};

export default Country;
