import React from "react";
// import logo from "src/assets/img/Profile-picture.png"

const Header = () => {
  return (
    <>
      <div>
      <header className="header">
            <div className="header_content">
              <div className="left-items">
                <img
                  src="./img/profile-pic.png"
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
      </div>
      <div>
        {/* <!-- =============== Home Section============ --> */}
        <section id="home" className="home">
          <header className="header">
            <div className="header_content">
              <div className="left-items">
                <img
                  src="./img/profile-pic.png"
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

          <div className="home-hero">
            <div className="logos">
              <a
                href="https://github.com/Meet587"
                target="_blank"
                className="github"
              >
                Github <i className="fa-brands fa-square-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/meet-rakholiya-115524221/"
                target="_blank"
                className="linkedin"
              >
                linkedIn <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="#" target="_blank" className="twitter">
                Twitter <i className="fa-brands fa-square-twitter"></i>
              </a>
            </div>
            <div className="main-contain">
              <div className="heading">
                <h3>HEY, I'M MEET RAKHOLIYA</h3>
              </div>
              <div className="home-hero_contain">
                <p>
                  A Frontend focused Web Developer building the Frontend of
                  Websites and Web Applications that leads to the success of the
                  overall product
                </p>
              </div>
              <div className="project-hero_btn">
                <button className="project-btn" type="button">
                  PROJECT
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- =============== about section ================= --> */}
        <section id="about" className="about sec-pad">
          <div className="main-container">
            <h2 className="heading_sec">
              <span className="heading_sec_main">ABOUT ME</span>
              <span className="heading_sec_sub">
                Here you will find more information about me, what I do, and my
                current skills mostly in terms of programming and technology
              </span>
            </h2>
            <div className="about-content">
              <div className="about_content_main">
                <h3 className="about-content_title">Get to know me!</h3>
                <p className="about-content_details">
                  I'm a <strong> Frontend Web Developer </strong> building the
                  Front-end of Websites and Web Applications that leads to the
                  success of the overall product. Check out some of my work in
                  the <strong> Projects </strong> section
                </p>
                <p className="about-content_details">
                  I'm open to <strong>Job</strong> opportunities where I can
                  contribute, learn and grow. If you have a good opportunity
                  that matches my skills and experience then don't hesitate to
                  <strong>contact</strong> me.
                </p>

                <button className="btn contact-btn">
                  <a href="./#contact">Contact</a>
                </button>
              </div>
              <div className="about-content_skill">
                <h3 className="about-content_title">My Skills</h3>
                <div className="skills">
                  <div className="skill">HTML</div>
                  <div className="skill">CSS</div>
                  <div className="skill">BOOTSTRAP</div>
                  <div className="skill">JAVASCRIPT</div>
                  <div className="skill">ES6</div>
                  <div className="skill">REACT</div>
                  <div className="skill">FIGMA</div>
                  <div className="skill">...</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* //  <!-- =============== project section ================= --> */}
        <section id="project" className="projects sec-pad">
          <div className="main-container">
            <h2 className="heading_sec">
              <span className="heading_sec_main">PROJECTS</span>
              <span className="heading_sec_sub">
                Here you will find more information about me, what I do, and my
                current skills mostly in terms of programming and technology
              </span>
            </h2>
            <div className="projects-content"></div>
          </div>
        </section>

        {/* //  <!-- =============== contact section ================= --> */}
        <section id="contact" className="contact sec-pad">
          <div className="main-container">
            <h2 className="heading_sec">
              <span className="heading_sec_main">CONTACT</span>
              <span className="heading_sec_sub">
                Feel free to Contact me by submitting the form below and I will
                get back to you as soon as possible
              </span>
            </h2>
            <div className="contact-content">
              <form action="#" className="contact_form" method="post">
                <div className="contact_form-field">
                  <label htmlFor="name" className="contact_form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="contact_form-input"
                    id="name"
                    name="name"
                  />
                </div>
                <div className="contact_form-field">
                  <label htmlFor="email" className="contact_form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    className="contact_form-input"
                    id="email"
                    name="email"
                  />
                </div>
                <div className="contact_form-field">
                  <label htmlFor="message" className="contact_form-label">
                    Message
                  </label>
                  <textarea
                    name="message"
                    className="contact_form-input"
                    id="message"
                    cols="30"
                    rows="10"
                    placeholder="Enter your message..."
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-submit">
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* <!-- =============== footer section ================= --> */}
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
              <script> document.write(new Date().getFullYear());</script>. Made
              By &nbsp;{" "}
              <a target="_blank" href="index.html" rel="noopener noreferrer">
                {" "}
                Meet Rakholiya
              </a>{" "}
              &nbsp; &#10084;
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Header;
