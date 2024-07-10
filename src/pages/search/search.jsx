import React, { useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";

const SearchComponent = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search by name or industry"
        className="mr-2"
        aria-label="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button variant="outline-success" onClick={handleSearch}>
        Search
      </Button>
    </Form>
  );
};

export default SearchComponent;
