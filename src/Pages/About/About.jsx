import React from "react";
import { Button, Col, Row } from "reactstrap";
import ButtonPrimarry from "../../Components/Button/Button";
import "./about.scss";

const About = () => {
  return (
    <>
      {/* <section id="about" className="about sec-pad">
        <div className="main-container">
          <h2 className="heading_sec">
            <div className="heading_2">ABOUT ME</div>
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
                success of the overall product. Check out some of my work in the{" "}
                <strong> Projects </strong> section
              </p>
              <p className="about-content_details">
                I'm open to <strong>Job</strong> opportunities where I can
                contribute, learn and grow. If you have a good opportunity that
                matches my skills and experience then don't hesitate to
                <strong>contact</strong> me.
              </p>
              <Button className="btn_primary">Contact</Button>
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
      </section> */}
      <section id="about">
        <div className="py-4 mb-5">
          <div className="heading_2">ABOUT ME</div>
          <div className="text-muted heading_text">
            <p>
              Here you will find more information about me, what I do, and my
              current skills mostly in terms of programming and technology
            </p>
          </div>
        </div>
        <div className="m-5 px-5">
          <Row>
            <Col lg={6} md={6}>
              <div className="heading_3">Get to know Me!</div>
              <div className="about_text">
                <p>
                  I'm a <strong>Frontend Web Developer</strong> building the
                  Front-end of Websites and Web Applications that leads to the
                  success of the overall product. Check out some of my work in
                  the
                  <strong> Projects</strong> section.
                </p>
                <p>
                  I'm open to <strong> Job</strong> opportunities where I can
                  contribute, learn and grow. If you have a good opportunity
                  that matches my skills and experience then don't hesitate to
                  contact me.
                </p>
              </div>
            </Col>
            <Col lg={6} md={6}>
              <div className="heading_3">My Skills</div>
              <div className="about_skills">
                <div className="skill">HTML</div>
                <div className="skill">css</div>
                <div className="skill">scss</div>
                <div className="skill">bootstrap</div>
                <div className="skill">es6</div>
                <div className="skill">javascript</div>
                <div className="skill">react js</div>
                <div className="skill">figma</div>
                <div className="skill">...</div>
              </div>
            </Col>
          </Row>
          <Button className="btn_primary mt-4">CONTACT</Button>
        </div>
      </section>
    </>
  );
};

export default About;
