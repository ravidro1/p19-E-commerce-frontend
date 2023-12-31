import axios from "axios";
import React, { useEffect, useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import useDataContext from "../context/useDataContext";

export default function AdminSignUp() {
  const { navigate, setToken } = useDataContext();

  const [signUpData, setSignUpData] = useState({
    email: "",
    password: "",
    verifyPassword: "",
    firstName: "",
    lastName: "",
    adminCode: "",
  });
  const [isErrorMessageShow, setIsErrorMessageShow] = useState(false);

  useEffect(() => {
    setIsErrorMessageShow(false);
  }, [signUpData]);

  const submitSignUp = async (event) => {
    try {
      event.preventDefault();
      console.log(signUpData);
      const { data } = await axios.post("/user/admin-sign-up", signUpData);

      console.log(data);

      setSignUpData({
        email: "",
        password: "",
        verifyPassword: "",
        firstName: "",
        lastName: "",
        adminCode: "",
      });
      setIsErrorMessageShow(false);

      setToken(data.token);
      navigate("/");
    } catch (error) {
      console.error(error?.response?.data);
      setIsErrorMessageShow(true);
    }
  };

  return (
    <div className="w-100 h-100 d-flex flex flex-column justify-content-around align-items-center">
      <h1> Admin Register</h1>{" "}
      {isErrorMessageShow && (
        <Alert variant="danger" style={{ width: "40%" }}>
          Error
        </Alert>
      )}
      <Form
        onSubmit={submitSignUp}
        style={{
          boxShadow: "0px 10px 25px -5px #000000",
          backgroundColor: "#fff",
        }}
        className="rounded d-flex flex-column justify-content-start align-items-center py-5 form_card"
      >
        <Form.Control
          value={signUpData.adminCode}
          onChange={(e) =>
            setSignUpData({ ...signUpData, adminCode: e.target.value })
          }
          size="lg"
          style={{ width: "70%" }}
          className="shadow-none mt-5 mb-2"
          type="password"
          placeholder="Admin Code"
          required
        />
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
        />
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
