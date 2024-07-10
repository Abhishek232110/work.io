// src/components/Common/SearchComponent.js
import React from "react";

const SearchComponent = ({ placeholder, onSearch }) => {
  const handleSearch = (e) => {
    const searchText = e.target.value;
    onSearch(searchText);
  };

  return (
    <input
      type="text"
      className="form-control"
      placeholder={placeholder}
      onChange={handleSearch}
    />
  );
};

export default SearchComponent;
