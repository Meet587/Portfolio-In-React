import React from "react";
import "./Footer.scss";
import { Col, Row } from "reactstrap";

const Footer = () => {
  return (
    <>
      <footer id="footer" className="footer">
        <Row className="row1">
          <Col lg={6} md={6} sm={12} xs={12}>
            <div className="col1">
              <h3 className="mb-4">MEET RAKHOLIYA</h3>
              <p className="footer_text">
                A Frontend focused Web Developer building the Frontend of
                Websites and Web Applications that leads to the success of the
                overall product
              </p>
            </div>
          </Col>
          <Col
            lg={5}
            md={5}
            sm={12}
            xs={12}
            className="d-flex justify-content-end me-5 social"
          >
            <div className="col2">
              <h3 className="mb-4">SOCIAL</h3>
              <div className="footer_social_icon">
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
                <a href="https://twitter.com/Meet_587" target="_blank" className="twitter">
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
          <div>&#169; Copyright {new Date().getFullYear()}.</div>
          <div>
            Made By &nbsp;
            <a target="_blank" href="#" rel="noopener noreferrer">
              Meet Rakholiya
            </a>
            <span style={{ color: "red" }}>&nbsp; &#10084;</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
