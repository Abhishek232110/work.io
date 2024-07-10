// src/components/Common/ListCard.js
import React from "react";

const ListCard = ({ items }) => {
  return (
    <div className="card">
      <div className="card-body">
        <ul className="list-group">
          {items.map((item) => (
            <li key={item.id} className="list-group-item">
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListCard;
