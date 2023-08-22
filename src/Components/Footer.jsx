import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="main-footer">
        <div className="main-container">
          <div className="main-footer_upper">
            <div className="main-footer_row">
              <h2 className="heading main-footer_heading">MEET RAKHOLIYA</h2>
              <p className="main-footer_desc">
                A Frontend focused Web Developer building the Frontend of
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
          </div>{" "}
          <hr />
          <div className="main-footer_lower">
            &#169; Copyright
            <script> document.write(new Date().getFullYear());</script>. Made By
            &nbsp;{" "}
            <a target="_blank" href="index.html" rel="noopener noreferrer">
              {" "}
              Meet Rakholiya
            </a>{" "}
            &nbsp; &#10084;
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
