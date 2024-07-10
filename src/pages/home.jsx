import React, { useState } from "react";
import SearchComponent from "./search/search";

const Home = () => {
  const handleSearch = (query) => {
    console.log("Search query:", query);
  };

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <SearchComponent onSearch={handleSearch} />
    </div>
  );
};

export default Home;
