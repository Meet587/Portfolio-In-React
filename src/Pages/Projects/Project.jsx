import React from "react";
import { Container } from "reactstrap";

import dashboardImg from "../../assets/img/projects/dashboard.png";
import ProjectCard from "../../Components/projects/projectCard";
import "./project.scss";

const Project = () => {
  return (
    <section id="project" className="projects sec-pad">
      <Container>
        <div className="">
          <div className="heading_2">PROJECTS</div>
          <div className="heading_text">
            <p>
              Here you will find more information about me, what I do, and my
              current skills mostly in terms of programming and technology
            </p>
          </div>
        </div>
        <div className="projects-content">
          <ProjectCard img={dashboardImg} />
        </div>
      </Container>
    </section>
  );
};

export default Project;
