import React from "react";
import { Container } from "reactstrap";
import "./project.scss";

import ProjectCard from "../../Components/projects/projectCard";

// project img
import dashboardImg from "../../assets/img/projects/dashboard.png";
import formImg from "../../assets/img/projects/form.png";
import clockImg from "../../assets/img/projects/clock.png";
import cookingImg from "../../assets/img/projects/cooking-recipe-app.png";
import universityImg from "../../assets/img/projects/university.png";

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
          <div className="project">
            <ProjectCard
              img={dashboardImg}
              link={`https://dashboard-meet587.netlify.app/`}
              text={` Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Adipisci, animi quis sapiente, quibusdam atque veritatis libero
              praesentium omnis a ducimus ut laudantium nam suscipit dolores
              corrupti! Voluptatibus magnam tempora aspernatur atque eum
              molestiae. Exercitationem consequatur totam quaerat libero qui.
              Quaerat eaque dolorum consectetur accusantium placeat, dignissimos
              tempore sunt? Fugiat, possimus!`}
            />
          </div>
          <div className="project">
            <ProjectCard
              img={universityImg}
              link={`https://university-meet587.netlify.app/`}
              text={` Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Adipisci, animi quis sapiente, quibusdam atque veritatis libero
              praesentium omnis a ducimus ut laudantium nam suscipit dolores
              corrupti! Voluptatibus magnam tempora aspernatur atque eum
              molestiae. Exercitationem consequatur totam quaerat libero qui.
              Quaerat eaque dolorum consectetur accusantium placeat, dignissimos
              tempore sunt? Fugiat, possimus!`}
            />
          </div>
          <div className="project">
            <ProjectCard
              img={clockImg}
              link={`https://clock-with-js-meet587.netlify.app/`}
              text={` Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Adipisci, animi quis sapiente, quibusdam atque veritatis libero
              praesentium omnis a ducimus ut laudantium nam suscipit dolores
              corrupti! Voluptatibus magnam tempora aspernatur atque eum
              molestiae. Exercitationem consequatur totam quaerat libero qui.
              Quaerat eaque dolorum consectetur accusantium placeat, dignissimos
              tempore sunt? Fugiat, possimus!`}
            />
          </div>
          {/* <div className="project">
            <ProjectCard
              img={dashboardImg}
              link={`https://dashboard-meet587.netlify.app/`}
              text={` Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Adipisci, animi quis sapiente, quibusdam atque veritatis libero
              praesentium omnis a ducimus ut laudantium nam suscipit dolores
              corrupti! Voluptatibus magnam tempora aspernatur atque eum
              molestiae. Exercitationem consequatur totam quaerat libero qui.
              Quaerat eaque dolorum consectetur accusantium placeat, dignissimos
              tempore sunt? Fugiat, possimus!`}
            />
          </div> */}
          <div className="project">
            <ProjectCard
              img={formImg}
              link={`https://formvalidation-with-reactjs.netlify.app/`}
              text={` Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Adipisci, animi quis sapiente, quibusdam atque veritatis libero
              praesentium omnis a ducimus ut laudantium nam suscipit dolores
              corrupti! Voluptatibus magnam tempora aspernatur atque eum
              molestiae. Exercitationem consequatur totam quaerat libero qui.
              Quaerat eaque dolorum consectetur accusantium placeat, dignissimos
              tempore sunt? Fugiat, possimus!`}
            />
          </div>
          <div className="project">
            <ProjectCard
              img={cookingImg}
              link={`https://cooking-recipe-app.netlify.app/`}
              text={` Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Adipisci, animi quis sapiente, quibusdam atque veritatis libero
              praesentium omnis a ducimus ut laudantium nam suscipit dolores
              corrupti! Voluptatibus magnam tempora aspernatur atque eum
              molestiae. Exercitationem consequatur totam quaerat libero qui.
              Quaerat eaque dolorum consectetur accusantium placeat, dignissimos
              tempore sunt? Fugiat, possimus!`}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Project;
