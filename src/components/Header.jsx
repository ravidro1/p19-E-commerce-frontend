import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import useDataContext from "../context/useDataContext";
import axios from "axios";

export default function Header() {
  const { token, setToken, userData } = useDataContext();

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
        <Navbar.Toggle
          className="shadow-none"
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to={"/"}>
              <Nav.Link>
                <i className="fas fa-solid fa-shop" />
                <span className="mx-2"> Shop</span>
              </Nav.Link>
            </LinkContainer>
            {token && (
              <>
                <LinkContainer to={"/cart"}>
                  <Nav.Link>
                    <i className="fas fa-shopping-cart" />
                    <span className="mx-2"> Cart</span>
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to={"/settings"}>
                  <Nav.Link>
                    <i className="fas fa-solid fa-gears" />
                    <span className="mx-2">Settings</span>
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to={"/history"}>
                  <Nav.Link>
                    <i class="fa-sharp fa-solid fa-clock-rotate-left" />
                    <span className="mx-2">History</span>
                  </Nav.Link>
                </LinkContainer>
              </>
            )}
            {userData?.isAdmin && (
              <>
                {" "}
                <LinkContainer to={"/inventory"}>
                  <Nav.Link>
                    <i class="fa-sharp fa-solid fa-warehouse" />{" "}
                    <span className="mx-2">Inventory</span>
                  </Nav.Link>
                </LinkContainer>
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
          {token && (
            <>
              <h5 className="my-auto mx-3" style={{ color: "#fff" }}>
                Hello:{" "}
                <strong
                  className="mx-1"
                  style={{ textTransform: "capitalize" }}
                >
                  {userData?.firstName + " " + userData?.lastName}
                </strong>
              </h5>
              <Button className="m-2" variant="light" onClick={logout}>
                Logout
              </Button>
            </>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
