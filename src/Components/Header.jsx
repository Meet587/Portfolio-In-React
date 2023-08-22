import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Container, Nav, Row } from "reactstrap";
import logo from "../assets/img/logo.png";

const Header = () => {
  return (
    <>
      {/* <header className="header">
        <div className="header_content">
          <div className="left-items">
            <img src={logo} alt="img" className="person-img"></img>
            <span className="fc-primary">Meet Rakholiya</span>
          </div>
          <div className="right-items">
            <a href="./index.html">HOME</a>
            <a href="#about">ABOUT</a>
            <a href="#project">PORTFOLIO</a>
            <a href="#contact">CONTACT</a>
          </div>
        </div>
      </header> */}
      <header>
        <div className="header_content">
          <div className="content-center brand_icon">
            <img src={logo} alt="img" className="person-img"></img>
            <Link to={'/'} className="fc-primary content-center">Meet Rakholiya</Link>
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
