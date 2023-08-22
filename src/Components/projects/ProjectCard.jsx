import React from "react";
import "./projects.scss";
import { Card, CardBody, CardImg } from "reactstrap";

const ProjectCard = ({ img }) => {
  return (
    <>
      <div className="d-flex">
        <Card className="project_card">
          <CardBody>
            <CardImg src={img}></CardImg>
          </CardBody>
        </Card>
        <div className="">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
          animi quis sapiente, quibusdam atque veritatis libero praesentium
          omnis a ducimus ut laudantium nam suscipit dolores corrupti!
          Voluptatibus magnam tempora aspernatur atque eum molestiae.
          Exercitationem consequatur totam quaerat libero qui. Quaerat eaque
          dolorum consectetur accusantium placeat, dignissimos tempore sunt?
          Fugiat, possimus!
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
