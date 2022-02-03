import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, NavbarBrand, Nav } from "react-bootstrap";
import { BsAlarm } from "react-icons/bs";

import "./style.css";

const Header = () => {
  return (
    <React.Fragment>
      <Navbar
        expand="xl"
        className="header-field container d-flex justify-content-between"
      >
        <NavbarBrand as={NavLink} to="/">
          <div className="d-flex">
            <img src="/images/head/head.svg" alt="head"></img>
            <img
              src="/images/head/Frankenstein NFT DAO.svg"
              alt="Frankenstein NFT DAO"
              className="ms-2"
            />
          </div>
        </NavbarBrand>
        <div className="my-3 text-end">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} to="/treasury" className="menu-item">
                <span className="menu-text">Treasury</span>
              </Nav.Link>
              <Nav.Link as={NavLink} to="/dividend" className="menu-item">
                <span className="menu-text">Dividend</span>
              </Nav.Link>
              <Nav.Link as={NavLink} to="/roadmap" className="menu-item">
                <span className="menu-text">Roadmap</span>
              </Nav.Link>
              <Nav.Link as={NavLink} to="/faq" className="menu-item">
                <span className="menu-text">FAQ</span>
              </Nav.Link>
              <Nav.Link as={NavLink} to="/aboutus" className="menu-item">
                <span className="menu-text">About Us</span>
              </Nav.Link>
              <Nav.Link as={NavLink} to="/greenpaper" className="menu-item">
                <span className="menu-text">Greenpaper</span>
              </Nav.Link>
            </Nav>
            <button type="button" className="connect-btn">
              <span>Connect Wallet</span>
            </button>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </React.Fragment>
  );
};

export default Header;
