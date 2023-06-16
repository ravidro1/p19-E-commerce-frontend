import React from "react";
import { Button, Form } from "react-bootstrap";

export default function Login() {
  return (
    <div className="w-100 h-100 d-flex justify-content-center align-items-center">
      <Form
        style={{
          boxShadow: "0px 10px 25px -5px #000000",
          backgroundColor: "#fff",
        }}
        className="rounded d-flex flex-column justify-content-start align-items-center py-5 form_card"
      >
        {/* <Form.Label>Email address</Form.Label> */}
        <Form.Control
          size="lg"
          style={{ width: "70%" }}
          className="shadow-none mt-5 mb-2"
          type="email"
          placeholder="Email"
        />{" "}
        {/* <Form.Label>Password</Form.Label> */}
        <Form.Control
          size="lg"
          style={{ width: "70%" }}
          className="shadow-none  my-2"
          type="password"
          placeholder="Password"
        />
        <Button size="lg" className="mt-2 mb-5" style={{ width: "70%" }}>
          {" "}
          Login{" "}
        </Button>
        <Button className="my-5" variant="link">
          {" "}
          Forgot My Password
        </Button>
      </Form>
    </div>
  );
}
