import React from "react";
import { Button, Col, Row } from "reactstrap";
import ButtonPrimarry from "../../Components/Button/Button";
import "./about.scss";

const About = () => {
  return (
    <>
      <section id="about">
        <div className="pt-4">
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
          <a
            href="mailto:meet.rakholiya.w1@gmail.com"
            className="btn_primary mt-4"
          >
            CONTACT
          </a>
        </div>
      </section>
    </>
  );
};

export default About;
