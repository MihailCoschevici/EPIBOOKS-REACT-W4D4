// src/components/MyNav.jsx

import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/LogoEpiBooks_white.png'; 

const MyNav = () => {
  return (
    <Navbar fixed="top" bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            width="100"
            height="35"
            className="d-inline-block align-top"
            alt="EpiBooks logo white"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="fw-bold fs-5">Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className="fw-bold fs-5">About</Nav.Link>
            <Nav.Link as={Link} to="/browse" className="fw-bold fs-5">Browse</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;