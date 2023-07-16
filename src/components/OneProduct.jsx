import React from "react";
import { Button, Card, Placeholder } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import photoPlaceholder from "/photo_placeholder.jpg";
import Rating from "./Rating";

export default function OneProduct({ item }) {
  const navigate = useNavigate();

  const loading = false;

  const { id, name, description, picURL, price, quantity, rating } = item;
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
          <Card.Img
            variant="top"
            src={picURL ? picURL : "/photo_placeholder.jpg"}
          />
          <Card.Body className="d-flex flex-column justify-content-between">
            <Card.Title>{name}</Card.Title>
            <Card.Text>{price == null ? 0 : price} $</Card.Text>
            <Rating rate={rating} />
            <Button
              onClick={() => navigate(`product/${id}`, { state: item })}
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
