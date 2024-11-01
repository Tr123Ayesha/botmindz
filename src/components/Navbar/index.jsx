// Topbar.js
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo.svg";
import "./navbar.css";

const Topbar = () => {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container className="header">
        <div className="BotmindzLogoHeader">
          <img className="logo" src={logo} alt="BotminzLogo" />
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggler" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto w-100 custom-nav flex-column flex-lg-row">
            <div className="Link">
              <div className="header2">
                <Nav.Link href="#home" className="text-white">Home</Nav.Link>
                <Nav.Link href="#about" className="text-white">About</Nav.Link>
                <Nav.Link href="#service" className="text-white">Service</Nav.Link>
                <Nav.Link href="#contact" className="text-white">Contact</Nav.Link>
                <Nav.Link href="#plan" className="text-white">Plan</Nav.Link>
              </div>
              <div className="header3">
                <button className="contactButton">Contact Us</button>
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Topbar;
