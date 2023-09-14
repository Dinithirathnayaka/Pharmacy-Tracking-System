import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import SearchBoxCSS from "./SearchBox.module.css";

const SearchBox = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = async (e) => {
    const value = e.target.value;
    setSearchValue(value);

    try {
      // Construct the URL for your API endpoint
      const apiUrl = `/api/medicines/medicine-suggestions?searchValue=${value}`;

      // Make a GET request using the fetch API
      const response = await fetch(apiUrl);

      if (response.ok) {
        // Parse the response as JSON
        const data = await response.json();
        setSuggestions(data);
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSuggestionClick = (suggestionName) => {
    // Set the search value to the clicked suggestion
    setSearchValue(suggestionName);

    // Clear the suggestions
    setSuggestions([]);
  };

  const handleSearchClick = () => {
    // Perform the search based on the current searchValue
    onSearch(searchValue);

    // Clear the suggestions
    setSuggestions([]);

    setSearchValue("");
  };

  return (
    <>
      <div className={SearchBoxCSS["search-container"]}>
        <div className={SearchBoxCSS["search-input-container"]}>
          <input
            type="text"
            placeholder="Search for medicine..."
            value={searchValue}
            onChange={handleInputChange}
            className={SearchBoxCSS["search-input"]}
          />
        </div>
        <div className={SearchBoxCSS["search-icon-container"]}>
          <button
            className={SearchBoxCSS["search-icon-button"]}
            onClick={handleSearchClick}
          >
            <SearchIcon className={SearchBoxCSS["search-icon"]} />
          </button>
        </div>
      </div>
      <div className={SearchBoxCSS["dataResult"]}>
        {searchValue &&
          suggestions.map((suggestion) => (
            <div
              key={suggestion.name}
              onClick={() => handleSuggestionClick(suggestion.name)}
              className={SearchBoxCSS["dropdown-row"]}
            >
              {suggestion.name}
            </div>
          ))}
      </div>
    </>
  );
};

export default SearchBox;
