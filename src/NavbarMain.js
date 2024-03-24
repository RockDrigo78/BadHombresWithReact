import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./images/Logo/badHombresLogo.jpg";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
  // NavbarText,
} from "reactstrap";
import "./NavbarMain.css";

const NavbarMain = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const noToggle = () => {
    return;
  };

  return (
    <div className="NavbarMain">
      <div className="NavbarMain-container">
        <Navbar color="black" expand="md">
          <Link className="" to="/home">
            <NavbarBrand href="/">
              <img className="logo" src={logo} alt="Logo" />
            </NavbarBrand>
          </Link>
          <NavbarToggler onClick={toggle}>
            <span className="fas fa-bars"></span>
          </NavbarToggler>
          <Collapse isOpen={isOpen} navbar>
            <Nav className="" navbar>
              <NavItem onClick={isOpen ? toggle : noToggle}>
                <Link className="" to="/shows">
                  <NavLink>
                    <div>Shows</div>
                  </NavLink>
                </Link>
              </NavItem>
              <NavItem onClick={isOpen ? toggle : noToggle}>
                <Link className="" to="/photos">
                  <NavLink>
                    <div>Photos</div>
                  </NavLink>
                </Link>
              </NavItem>
              <NavItem onClick={isOpen ? toggle : noToggle}>
                <Link className="" to="/videos">
                  <NavLink>
                    <div>Videos</div>
                  </NavLink>
                </Link>
              </NavItem>
              <NavItem onClick={isOpen ? toggle : noToggle}>
                <Link className="" to="/contact">
                  <NavLink>Contact us</NavLink>
                </Link>
              </NavItem>
              <div className="NavbarMain-social">
                <span className="followText">Follow us on:</span>
                <a
                  className="nav-item"
                  href="https://www.facebook.com/somebadhombres"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook-square facebook"></i>
                </a>
                <a
                  className="nav-item"
                  href="https://www.instagram.com/badhombresband"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram instagram"></i>
                </a>
              </div>
              {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Visit us on...
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Facebook</DropdownItem>
                <DropdownItem>Instagram</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>About Us</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    </div>
  );
};

export default NavbarMain;
