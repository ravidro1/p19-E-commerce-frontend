import React from "react";
import {
  Button,
  Card,
  Col,
  Form,
  Image,
  ListGroup,
  Row,
} from "react-bootstrap";
import { useLocation } from "react-router-dom";
import Rating from "../components/Rating";

export default function ProductPage() {
  const { state } = useLocation();

  const { id, name, description, picURL, quantity, price, rating } = state;

  return (
    <div className="w-100 h-100  p-4">
      <Row
        style={{ backgroundColor: "#fff" }}
        className="overflow-hidden w-100 p-0 py-3 m-0 border rounded-4 d-flex "
      >
        <Col md={7} className="align-self-center">
          <Image
            src={picURL ? picURL : "/photo_placeholder.jpg"}
            alt={name}
            fluid
          />
        </Col>
        <Col md={5} className="align-self-end">
          <div className="d-flex flex-column">
            <h1> {name}</h1>
            <p> {description} </p>
            <h3>{price}</h3>
            <Rating rate={rating} />
          </div>
        </Col>
        <Col className="my-3">
          <Card className="overflow-hidden">
            <ListGroup variant="flush" className="p-0">
              <ListGroup.Item>
                <Row>
                  <Col md={"auto"}>Status: </Col>
                  <Col md={"auto"}>
                    {" "}
                    {!quantity
                      ? "Out Of Stock"
                      : quantity < 5
                      ? "Last Units"
                      : "In Stock"}{" "}
                  </Col>
                </Row>
              </ListGroup.Item>
              {true && (
                <ListGroup.Item>
                  <Row className="d-flex align-items-center">
                    <Col md={"auto"}>Qty: </Col>
                    <Col md={4} className="my-1">
                      <Form.Control
                        className="shadow-none"
                        as={"select"}
                        value={1}
                      >
                        {[...Array(Math.min(quantity, 20)).keys()].map(
                          (num) => {
                            return (
                              <option key={num} value={num + 1}>
                                {num + 1}
                              </option>
                            );
                          }
                        )}
                      </Form.Control>
                    </Col>
                  </Row>
                </ListGroup.Item>
              )}
              <ListGroup.Item>
                Total Price: {price == null ? 0 : price} $
              </ListGroup.Item>
              <Button variant="dark" className="rounded-0">
                {" "}
                Add To Card{" "}
              </Button>
            </ListGroup>
          </Card>
        </Col>
      </Row>
      {/* <Row className="overflow-hidden w-100 p-2 py-3 mt-2 border rounded-4">
        <ListGroup variant="flush" className="p-0">
          <ListGroup.Item>
            <Row>
              <Col>Status: </Col>
              <Col> {false ? "In Stock" : "Out Of Stock"} </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>2</ListGroup.Item>
          <ListGroup.Item>3</ListGroup.Item>
          <Button> Add To Card </Button>
        </ListGroup>
      </Row> */}
      {/* </div> */}
    </div>
  );
}
