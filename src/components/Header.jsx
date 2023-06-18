import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import useDataContext from "../context/useDataContext";
import axios from "axios";

export default function Header() {
  const { token, setToken } = useDataContext();

  const logout = async () => {
    await axios.get("/user/logout");
    setToken(null);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
      <Container>
        <LinkContainer to={"/"}>
          <Navbar.Brand>E-Commerce</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to={"/"}>
              <Nav.Link>
                <i className="fas fa-solid fa-shop" />
                <span className="mx-2"> Shop</span>{" "}
              </Nav.Link>
            </LinkContainer>
            {token && (
              <>
                <LinkContainer to={"/cart"}>
                  <Nav.Link>
                    <i className="fas fa-shopping-cart" />
                    <span className="mx-2"> Cart</span>{" "}
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to={"/settings"}>
                  <Nav.Link>
                    <i className="fas fa-solid fa-gears" />{" "}
                    <span className="mx-2"> Settings</span>{" "}
                  </Nav.Link>
                </LinkContainer>{" "}
              </>
            )}
            {!token && (
              <>
                <LinkContainer to={"/login"}>
                  <Nav.Link>
                    <i className="fas fa-user" />{" "}
                    <span className="mx-2"> Login</span>
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to={"/sign-up"}>
                  <Nav.Link>
                    <i className="fas fa-solid fa-address-card" />{" "}
                    <span className="mx-2"> Sign-Up</span>{" "}
                  </Nav.Link>
                </LinkContainer>
              </>
            )}
          </Nav>
          {token && <Button onClick={logout}>Logout</Button>}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
