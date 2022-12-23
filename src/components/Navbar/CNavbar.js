import React from "react";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import { Link } from "react-router-dom";

export function CNavbar() {
  return (
    <Navbar bg="light" expand={"md"} className="mb-3 navbar">
      <Container>
        <Link to={"/"}>
          <Navbar.Brand href="#">
            <img
              src="assets/images/logo.png"
              alt="Logo Image"
              className="img img-fluid logo-img"
            />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-md`}
          aria-labelledby={`offcanvasNavbarLabel-expand-md`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
              <img
                src="assets/images/logo.png"
                alt="Logo Image"
                className="img img-fluid logo-img"
              />
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Link to={"about-us"} className="nav-item">
                <Nav.Link>about us</Nav.Link>
              </Link>
              <NavDropdown
                title="Services"
                id={`offcanvasNavbarDropdown-expand-md`}
              >
                <NavDropdown.Item>Service 1</NavDropdown.Item>
                <NavDropdown.Item>Service 2</NavDropdown.Item>
                <NavDropdown.Item>Service 3</NavDropdown.Item>
              </NavDropdown>
              <Link to={"how-we-work"} className="nav-item">
                <Nav.Link>how we work</Nav.Link>
              </Link>
              <Link to={"portfolio"} className="nav-item">
                <Nav.Link>portfolio</Nav.Link>
              </Link>
              <Link to={"get-inspired"} className="nav-item">
                <Nav.Link>get inspired</Nav.Link>
              </Link>
              <Link to={"contact"} className="nav-item">
                <Nav.Link>contact</Nav.Link>
              </Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
