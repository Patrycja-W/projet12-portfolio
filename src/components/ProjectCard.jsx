import React from "react";
import "../styles/ProjectCard.scss";

const ProjectCard = ({ title, image, link }) => {
  return (
    <div className="project-card">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={title} />
      </a>
    </div>
  );
};

export default ProjectCard;
