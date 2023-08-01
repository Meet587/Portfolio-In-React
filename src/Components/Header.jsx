import React from "react";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header_content">
          <div className="left-items">
            <img
              src=""
              alt="img"
              className="person-img"
            ></img>
            <span className="person-name">Meet Rakholiya</span>
          </div>
          <div className="right-items">
            <a href="./index.html">HOME</a>
            <a href="#about">ABOUT</a>
            <a href="#project">PORTFOLIO</a>
            <a href="#contact">CONTACT</a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
