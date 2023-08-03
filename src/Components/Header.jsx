import React from "react";
import { Container, Row } from "reactstrap";
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
          <div className="content-center">
            <img src={logo} alt="img" className="person-img"></img>
            <div className="fc-primary content-center">Meet Rakholiya</div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
