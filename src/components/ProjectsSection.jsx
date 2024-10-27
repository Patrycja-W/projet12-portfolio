// ProjectsSection.js
import React from "react";
import ProjectCard from "./ProjectCard";
import "../styles/ProjectsSection.scss";

const projects = [
  {
    title: "Booki",
    image: "path/to/booki-image.jpg", // Remplacez par le chemin de votre image
    link: "https://github.com/yourusername/Booki",
  },
  {
    title: "OhMyFood",
    image: "path/to/ohmyfood-image.jpg",
    link: "https://github.com/yourusername/OhMyFood",
  },
  {
    title: "Kasa",
    image: "path/to/kasa-image.jpg",
    link: "https://github.com/yourusername/Kasa",
  },
  // Ajoutez d'autres projets ici
];

const ProjectsSection = () => {
  return (
    <div className="projects-section">
      <h2>Mes Projets</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
