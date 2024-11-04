import React from "react";
import ProjectCard from "./ProjectCard";
import "../styles/ProjectsSection.scss";
import Booki from "../assets/projets/Booki.webp";
import Ohmyfood from "../assets/projets/Ohmyfood.webp";
import kasa from "../assets/projets/kasa.webp";
import SophieBluel from "../assets/projets/SophieBluel.webp";

const projects = [
  {
    title: "Booki",
    image: Booki,
    link: "https://github.com/Patrycja-W/PatrycjaWierzbicka_3_08042021",
  },
  {
    title: "Ohmyfood",
    image: Ohmyfood,
    link: "https://github.com/Patrycja-W/Projet4-Ohmyfood",
  },
  {
    title: "Kasa",
    image: kasa,
    link: "https://github.com/Patrycja-W/projet7-kasa",
  },
  {
    title: "Sophie Bluel",
    image: SophieBluel,
    link: "https://github.com/Patrycja-W/projet6-sophiebluel",
  },
];

const ProjectsSection = () => {
  return (
    <section className="projects-section">
      <h2>Mes Projets</h2>
      <div className="projects-flex">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
