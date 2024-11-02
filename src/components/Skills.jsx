import React from "react";
import "../styles/Skills.scss";
import logo from "../assets/general/logo.webp";
import CVPW from "../assets/general/CVPW.pdf";

const skills = [
  "HTML5",
  "CSS",
  "JavaScript",
  "SASS",
  "React",
  "Git",
  "Node.js",
];
const handleLogoClick = () => {
  window.open(CVPW, "_blank");
};
const Skills = () => {
  return (
    <>
      <div className="skills-section">
        <div className="skills">
          <h2>Mes Skills</h2>
          <div className="skills-list">
            {skills.map((skill, index) => (
              <div className="skill" key={index}>
                {skill}
              </div>
            ))}
          </div>
        </div>

        <div className="intro-text">
          <p>
            Pour voir mon CV,
            <br /> Clique juste ici
          </p>
          <div className="arrow">
            <i class="fa-solid fa-arrow-down"></i>
          </div>
          <div className="logo-container" onClick={handleLogoClick}>
            <img
              src={logo}
              loading="lazy"
              alt="Logo"
              className="rotating-logo"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
