import axios from "axios";
import React from "react";
import SearchBar from "./component/searchBar";
import "./index.css";

const baseURL = "https://studies.cs.helsinki.fi/restcountries/api/name";

function App() {
  const [countries, setCountries] = React.useState([]);
  const [countriesName, setCountriesName] = React.useState("");

  const findCountries = (event) => {
    event.preventDefault();
    console.log("button clicked", event.target);
    const country = {
      name: countriesName,
    };
    axios.get(`${baseURL}/${country.name}`).then((response) => {
      setCountries(response.data);
    });
  };

  const handleCountryNameChange = (event) => {
    console.log(event.target.value);
    setCountriesName(event.target.value);
  };

  if (!countries) return null;

  return (
    <div className="flex flex-col justify-center items-center h-max m-10">
      <div className="space-y-4">
        <div>
          <h1 className="flex justify-center items-center font-bold text-lg">
            Countries Search
          </h1>
        </div>

        <div>
          <SearchBar
            countriesName={countriesName}
            handleCountryNameChange={handleCountryNameChange}
            findCountries={findCountries}
          />
        </div>
        <div className="flex flex-col space-y-4">
          <h1 className="flex font-medium text-lg">{countriesName}</h1>
          <h3>Capital city : {countries.capital}</h3>
          <h3>Country : {countries.region}</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
