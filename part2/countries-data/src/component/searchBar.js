import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = ({
  countriesName,
  handleCountryNameChange,
  findCountries,
}) => {
  return (
    <form
      onSubmit={findCountries}
      className="flex flex-row space-x-4 items-center"
    >
      <div className="flex items-center">
        <input
          value={countriesName}
          onChange={handleCountryNameChange}
          className="bg-black-100 border-2 border-black rounded-md p-3"
        />
      </div>
      <div>
        <button type="submit">
          <AiOutlineSearch className="w-5 h-5 mt-2" />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
