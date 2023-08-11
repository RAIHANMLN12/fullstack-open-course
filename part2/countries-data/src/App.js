import axios from "axios";
import React from "react";

const baseURL = "https://studies.cs.helsinki.fi/restcountries/api/name";

function App() {
  const [countries, setCountries] = React.useState([]);
  const [countriesName, setCountriesName] = React.useState("");

  React.useEffect(() => {
    axios.get(`${baseURL}/${countriesName}`).then((response) => {
      setCountries(response.data);
    });
  }, []);

  if (!countries) return null;

  return (
    <div className="App">
      <h1>React App</h1>
      <form>
        <div>
          find countries <input value={countriesName} />
        </div>
        <div>
          <button type="submit">find</button>
        </div>
      </form>
      <h2>{countriesName.name}</h2>
      <h3>Capital city : {countries.capital}</h3>
      <h3>Country : {countries.region}</h3>
    </div>
  );
}

export default App;
