import React from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

export default function SearchProducts({ setSearchValue }) {
  return (
    <Form className="d-flex" onSubmit={(e) => e.preventDefault()}>
      <InputGroup>
        <Form.Control
          className="shadow-none"
          onChange={(e) => setSearchValue(e.target.value)}
          type="text"
          placeholder="Search..."
        />
        <Button variant="dark"> Search</Button>
      </InputGroup>
    </Form>
  );
}
