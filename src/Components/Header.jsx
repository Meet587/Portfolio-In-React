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
import "./Header.scss";

const Header = () => {
  // const [toggleMenu, setToggleMenu] = useState(false);

  // const toggleOffcanvas = () => {
  //   setToggleMenu(!toggleMenu);
  // };
  return (
    <>
      <header>
        <div className="header_content">
          <div className="content-center brand_icon">
            <img src={logo} alt="img" className="person-img"></img>
            <a href="#home" className="fc-primary content-center">
              Meet Rakholiya
            </a>
          </div>
          {/* <div className="content-center bar_icon" onClick={toggleOffcanvas}>
            <i className="fas fa-bars"></i>
          </div> */}

          <div className="navigation content-center">
            <Nav>
              <NavLink to={"/"}>HOME</NavLink>
              <a href="#about">ABOUT</a>
              <a href="#project">PROJECTS</a> <a href="#contact">CONTACT</a>
            </Nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
