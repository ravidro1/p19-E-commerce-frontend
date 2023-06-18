import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import useDataContext from "../context/useDataContext";
import axios from "axios";

export default function Login() {
  const [inputData, setInputData] = useState({ email: "", password: "" });

  const { setToken, navigate, token } = useDataContext();

  const submitLogin = async (event) => {
    console.log(token);

    try {
      event.preventDefault();
      console.log(inputData);

      const { data } = await axios.post("/user/login", {
        email: inputData.email,
        password: inputData.password,
      });
      console.log(data);

      setToken(data.token);
      setInputData({ email: "", password: "" });
      navigate("/");
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <div className="w-100 h-100 d-flex justify-content-center align-items-center">
      <Form
        onSubmit={submitLogin}
        style={{
          boxShadow: "0px 10px 25px -5px #000000",
          backgroundColor: "#fff",
        }}
        className="rounded d-flex flex-column justify-content-start align-items-center py-5 form_card"
      >
        {/* <Form.Label>Email address</Form.Label> */}
        <Form.Control
          value={inputData.email}
          onChange={(e) =>
            setInputData({ ...inputData, email: e.target.value })
          }
          size="lg"
          style={{ width: "70%" }}
          className="shadow-none mt-5 mb-2"
          type="email"
          placeholder="Email"
          required
        />{" "}
        {/* <Form.Label>Password</Form.Label> */}
        <Form.Control
          value={inputData.password}
          onChange={(e) =>
            setInputData({ ...inputData, password: e.target.value })
          }
          size="lg"
          style={{ width: "70%" }}
          className="shadow-none  my-2"
          type="password"
          placeholder="Password"
          required
        />
        <Button
          type="submit"
          size="lg"
          className="mt-2 mb-5"
          style={{ width: "70%" }}
        >
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
