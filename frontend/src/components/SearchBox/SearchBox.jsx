import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import SearchBoxCSS from "./SearchBox.module.css";

const SearchBox = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [debouncedSearchValue, setDebouncedSearchValue] = useState(searchValue);

  useEffect(() => {
    // Create a timer to debounce the search input
    const timer = setTimeout(() => {
      setDebouncedSearchValue(searchValue);
    }, 500); // Adjust the delay time as needed (e.g., 500 milliseconds)

    // Clear the previous timer on each input change
    return () => {
      clearTimeout(timer);
    };
  }, [searchValue]);

  useEffect(() => {
    // Perform the API request when the debounced search value changes
    const fetchSuggestions = async () => {
      try {
        // Construct the URL for your API endpoint using debouncedSearchValue
        const apiUrl = `/api/medicines/medicine-suggestions?searchValue=${debouncedSearchValue}`;

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

    // Call fetchSuggestions when debouncedSearchValue changes
    if (debouncedSearchValue) {
      fetchSuggestions();
    } else {
      // Clear suggestions when search input is empty
      setSuggestions([]);
    }
  }, [debouncedSearchValue]);

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
            onChange={(e) => setSearchValue(e.target.value)}
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
