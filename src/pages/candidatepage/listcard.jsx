import React from "react";
import { Card, Button } from "react-bootstrap";

const ListCard = ({ title, description, onClick }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" onClick={onClick}>
          Go somewhere
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ListCard;
