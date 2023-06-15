import React from "react";
import { Button, Card, Placeholder } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import photoPlaceholder from "/photo_placeholder.jpg";

export default function OneProduct({ item }) {
  const navigate = useNavigate();

  const loading = true;
  return (
    <>
      {loading ? (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={photoPlaceholder} />
          <Card.Body>
            <Placeholder as={Card.Title} animation="glow">
              <Placeholder xs={6} />
            </Placeholder>
            <Placeholder as={Card.Text} animation="glow">
              <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
              <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
              <Placeholder xs={8} />
            </Placeholder>
            <Placeholder.Button variant="dark" xs={6} />
          </Card.Body>
        </Card>
      ) : (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={item.pic} />
          <Card.Body className="d-flex flex-column justify-content-between">
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>{item.price.amount + item.price.currency}</Card.Text>
            <Card.Text>{item.description}</Card.Text>
            <Card.Text>rate</Card.Text>
            <Button
              onClick={() => navigate(`product/${item.id}`, { state: item })}
              variant="dark"
            >
              Go somewhere
            </Button>
          </Card.Body>
        </Card>
      )}{" "}
    </>
  );
}
