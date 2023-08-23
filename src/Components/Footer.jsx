import React from "react";
import "./Footer.scss";
import { Col, Row } from "reactstrap";

const Footer = () => {
  return (
    <>
      {/* <footer className="main-footer" id="footer">
        <div className="main-container">
          <div className="main-footer_upper">
            <div className="main-footer_row">
              <h2 className="heading main-footer_heading">MEET RAKHOLIYA</h2>
              <p className="main-footer_desc">
                A Frontend focused Web Devel`1`oper building the Frontend of
                Websites and Web Applications that leads to the success of the
                overall product
              </p>
            </div>
            <div className="main-footer_row social">
              <h2 className="heading main-footer_heading">
                <span>SOCIAL</span>
              </h2>
              <div className="main-footer_social_icon">
                <a
                  href="https://github.com/Meet587"
                  target="_blank"
                  className="github"
                >
                  <i className="fa-brands fa-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/meet-rakholiya-115524221/"
                  target="_blank"
                  className="linkedin"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="#" target="_blank" className="twitter">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="#" target="_blank" className="insta">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          <hr />
          <div className="main-footer_lower">
            &#169; Copyright
            <script> document.write(new Date().getFullYear());</script>. Made By
            &nbsp;
            <a target="_blank" href="index.html" rel="noopener noreferrer">
              Meet Rakholiya
            </a>
            &nbsp; &#10084;
          </div>
        </div>
      </footer> */}
      <footer id="footer">
        <Row className="row1">
          <Col>
            <div className="col1">
              <h3 className="mb-4">MEET RAKHOLIYA</h3>
              <p className="footer_text">
                A Frontend focused Web Developer building the Frontend of
                Websites and Web Applications that leads to the success of the
                overall product
              </p>
            </div>
          </Col>
          <Col className="d-flex justify-content-end me-5">
            <div className="col2">
              <h3 className="mb-4">SOCIAL</h3>
              <div className="footer_social_icon">
                <a
                  href="https://github.com/Meet587"
                  target="_blank"
                  className="github"
                >
                  <i class="fa-brands fa-github"></i> 
                </a>
                <a
                  href="https://www.linkedin.com/in/meet-rakholiya-115524221/"
                  target="_blank"
                  className="linkedin"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="#" target="_blank" className="twitter">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="#" target="_blank" className="insta">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </div>
            </div>
          </Col>
        </Row>
        <div>
          <hr />
        </div>
        <div className="footer_lower">
          &#169; Copyright
          <script> document.write(new Date().getFullYear());</script>. Made By
          &nbsp;
          <a target="_blank" href="index.html" rel="noopener noreferrer">
            Meet Rakholiya
          </a>
          &nbsp; &#10084;
        </div>
        
      </footer>
    </>
  );
};

export default Footer;
