import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import useDataContext from "../context/useDataContext";

export default function SignUp() {
  const { navigate, setToken } = useDataContext();

  const [signUpData, setSignUpData] = useState({
    email: "",
    password: "",
    verifyPassword: "",
    firstName: "",
    lastName: "",
  });

  const submitSignUp = async (event) => {
    try {
      event.preventDefault();
      console.log(signUpData);
      const { data } = await axios.post("/user/sign-up", signUpData);

      console.log(data);

      setSignUpData({
        email: "",
        password: "",
        verifyPassword: "",
        firstName: "",
        lastName: "",
      });

      setToken(data.token);
      navigate("/");
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <div className="w-100 h-100 d-flex justify-content-center align-items-center">
      <Form
        onSubmit={submitSignUp}
        style={{
          boxShadow: "0px 10px 25px -5px #000000",
          backgroundColor: "#fff",
        }}
        className="rounded d-flex flex-column justify-content-start align-items-center py-5 form_card"
      >
        <Form.Control
          value={signUpData.email}
          onChange={(e) =>
            setSignUpData({ ...signUpData, email: e.target.value })
          }
          size="lg"
          style={{ width: "70%" }}
          className="shadow-none mt-5 mb-2"
          type="email"
          placeholder="Email"
          required
        />{" "}
        <Form.Control
          value={signUpData.password}
          onChange={(e) =>
            setSignUpData({ ...signUpData, password: e.target.value })
          }
          size="lg"
          style={{ width: "70%" }}
          className="shadow-none  my-2"
          type="password"
          placeholder="Password"
          required
        />
        <Form.Control
          value={signUpData.verifyPassword}
          onChange={(e) =>
            setSignUpData({ ...signUpData, verifyPassword: e.target.value })
          }
          size="lg"
          style={{ width: "70%" }}
          className="shadow-none  my-2"
          type="password"
          placeholder="Verify Password"
          required
        />
        <Form.Control
          value={signUpData.firstName}
          onChange={(e) =>
            setSignUpData({ ...signUpData, firstName: e.target.value })
          }
          size="lg"
          style={{ width: "70%" }}
          className="shadow-none  my-2"
          placeholder="First Name"
          required
        />
        <Form.Control
          value={signUpData.lastName}
          onChange={(e) =>
            setSignUpData({ ...signUpData, lastName: e.target.value })
          }
          size="lg"
          style={{ width: "70%" }}
          className="shadow-none  my-2"
          placeholder="Last Name"
          required
        />
        <Button
          type="submit"
          size="lg"
          className="mt-2 mb-5"
          style={{ width: "70%" }}
        >
          {" "}
          Sign-Up{" "}
        </Button>
      </Form>
    </div>
  );
}
