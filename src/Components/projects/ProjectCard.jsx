import React from "react";
import "./projects.scss";
import { Card, CardBody, CardImg, Col, Row } from "reactstrap";

const ProjectCard = ({ img, link, text }) => {
  return (
    <>
      <div className="d-flex">
        <Row>
          <Col lg={6} md={12}>
            <a href={link} target={"_blank"} className="project_card">
              <img src={img}></img>
            </a>
            {/* <iframe
              className="project_card"
              title="iFrame Example"
              src={link}
              width="400"
              height="200"
            ></iframe> */}
          </Col>
          <Col lg={6} md={12}>
            <div className="project_text">{text}</div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ProjectCard;
