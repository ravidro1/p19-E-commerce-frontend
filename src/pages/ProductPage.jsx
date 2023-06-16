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
  console.log(state);
  return (
    <div className="w-100 h-100  p-4">
      {/* <div
        style={{ width: "80%", height: "90%", overflow: "hidden" }}
        className="bg-info rounded-4"
      > */}
      <Row
        style={{ backgroundColor: "#fff" }}
        className="overflow-hidden w-100 p-0 py-3 m-0 border rounded-4 d-flex "
      >
        <Col md={7} className="align-self-center">
          <Image src={state.pic} alt={state.name} fluid />
        </Col>
        <Col md={5} className="align-self-end">
          <div className="d-flex flex-column">
            <h1> {state.name}</h1>
            <p> {state.description} </p>
            <h3>
              {state.price.amount} {state.price.currency}
            </h3>
            <Rating rate={2.9} />
          </div>
        </Col>
        <Col className="my-3">
          <Card className="overflow-hidden">
            <ListGroup variant="flush" className="p-0">
              <ListGroup.Item>
                <Row>
                  <Col md={"auto"}>Status: </Col>
                  <Col md={"auto"}> {false ? "In Stock" : "Out Of Stock"} </Col>
                </Row>
              </ListGroup.Item>
              {true && (
                <ListGroup.Item>
                  <Row className="d-flex align-items-center">
                    <Col md={"auto"}>Qty: </Col>
                    <Col md={4} className="my-1">
                      <Form.Control as={"select"} value={10}>
                        {[...Array(10).keys()].map((num) => {
                          return (
                            <option key={num} value={num + 1}>
                              {num + 1}
                            </option>
                          );
                        })}
                      </Form.Control>
                    </Col>
                  </Row>
                </ListGroup.Item>
              )}
              <ListGroup.Item>Total Price: {1000}</ListGroup.Item>
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
