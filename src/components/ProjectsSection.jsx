import React from "react";
import ProjectCard from "./ProjectCard";
import "../styles/ProjectsSection.scss";
import Booki from "../assets/Booki.webp";
import Ohmyfood from "../assets/Ohmyfood.webp";
import kasa from "../assets/kasa.webp";
import SophieBluel from "../assets/SophieBluel.webp";

const projects = [
  {
    image: Booki,
    link: "https://github.com/Patrycja-W/PatrycjaWierzbicka_3_08042021",
  },
  {
    image: Ohmyfood,
    link: "https://github.com/Patrycja-W/Projet4-Ohmyfood",
  },
  {
    image: kasa,
    link: "https://github.com/Patrycja-W/projet7-kasa",
  },
  {
    image: SophieBluel,
    link: "https://github.com/Patrycja-W/projet6-sophiebluel",
  },
];

const ProjectsSection = () => {
  return (
    <div className="projects-section">
      <h2>Mes Projets</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} image={project.image} link={project.link} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
