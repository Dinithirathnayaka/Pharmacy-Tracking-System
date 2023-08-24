import { Search } from "@mui/icons-material";
import React, { useState } from "react";
import SearchBarCSS from "./SearchBar.module.css";

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div>
      <div className={SearchBarCSS["search-bar-container"]}>
        <div className={SearchBarCSS["searchbar"]}>
          <Search className={SearchBarCSS["searchIcon"]} />
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
