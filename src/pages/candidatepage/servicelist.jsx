// src/components/CandidateHomePage/ServicesListCard.js
import React from "react";

const ServicesListCard = ({ services }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Services</h5>
        <ul className="list-group">
          {services.map((service) => (
            <li key={service.id} className="list-group-item">
              {service.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServicesListCard;
