import React from "react";
import { Col, Image, ListGroup, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";

export default function ProductPage() {
  const { state } = useLocation();
  console.log(state);
  return (
    <div className="w-100 h-100 d-flex justify-content-center align-items-center">
      <div style={{ width: "80%", height: "90%" }} className="bg-info">
        <Row className="w-100 p-0 m-0">
          <Col lg={6}>
            <Image src={state.pic} alt={state.name} fluid />
          </Col>
          <Col lg={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>1</ListGroup.Item>
              <ListGroup.Item>2</ListGroup.Item>
              <ListGroup.Item>3</ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </div>
    </div>
  );
}
