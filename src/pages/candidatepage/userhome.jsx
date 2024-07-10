import React, { useState, useEffect } from "react";
import ListCard from "./listcard";
import SearchComponent from "../search/search";

const CandidateHome = () => {
  const [referrals, setReferrals] = useState([]);
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Fetch referrals and services data here
    setReferrals([{ title: "Referral 1", description: "Description 1" }]);
    setServices([{ title: "Service 1", description: "Description 1" }]);
  }, []);

  const handleSearch = (query) => {
    console.log("Search query:", query);
  };

  return (
    <div>
      <h1>Candidate Home</h1>
      <SearchComponent onSearch={handleSearch} />
      <h2>Referrals</h2>
      {referrals.map((referral, index) => (
        <ListCard
          key={index}
          title={referral.title}
          description={referral.description}
        />
      ))}
      <h2>Services</h2>
      {services.map((service, index) => (
        <ListCard
          key={index}
          title={service.title}
          description={service.description}
        />
      ))}
    </div>
  );
};

export default CandidateHome;
