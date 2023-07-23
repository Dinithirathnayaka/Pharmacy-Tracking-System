// SearchContext.js
import React, { createContext, useState, useContext } from "react";

const SearchContext = createContext();

export function useSearchContext() {
  return useContext(SearchContext);
}

export function SearchProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
}
