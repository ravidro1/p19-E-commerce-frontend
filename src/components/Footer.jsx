import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <div
      className="d-flex justify-content-around align-items-center"
      style={{ width: "100%", height: "75px", backgroundColor: "#000" }}
    >
      <p className="m-0 text-light">&copy; Ravid</p>
      <Button
        onClick={() => navigate("admin-sign-up")}
        className="m-0 link-light"
        variant="link"
        size="sm"
      >
        To Admin Register
      </Button>
    </div>
  );
}
