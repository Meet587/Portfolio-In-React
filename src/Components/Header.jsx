import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Button,
  Container,
  Nav,
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
  Row,
} from "reactstrap";
import logo from "../assets/img/logo.png";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const toggleOffcanvas = () => {
    setToggleMenu(!toggleMenu);
  };
  console.log(toggleMenu);
  return (
    <>
      <header>
        <div className="header_content">
          <div className="content-center brand_icon">
            <img src={logo} alt="img" className="person-img"></img>
            <Link to={"/"} className="fc-primary content-center">
              Meet Rakholiya
            </Link>
          </div>
          <div className="content-center bar_icon" onClick={toggleOffcanvas}>
            <i className="fas fa-bars"></i>
          </div>
          <div>
            <Offcanvas toggle={toggleMenu}>
              <OffcanvasHeader toggle={toggleOffcanvas}>
                Offcanvas
              </OffcanvasHeader>
              <OffcanvasBody>
                <strong>This is the Offcanvas body.</strong>
              </OffcanvasBody>
            </Offcanvas>
          </div>
          <div className="navigation content-center">
            <Nav>
              <NavLink to={"/"}>HOME</NavLink>
              <NavLink to={"/about"}>ABOUT</NavLink>
              <NavLink to={"/portfolio"}>PORTFOLIO</NavLink>
              <NavLink to={"/contact"}>CONTACT</NavLink>
            </Nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
