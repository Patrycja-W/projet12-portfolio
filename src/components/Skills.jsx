import React from "react";
import "../styles/Skills.scss";
import logo from "../assets/general/logo.webp";
import CVPW from "../assets/general/CV_WP.pdf";

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
      <section className="skills">
        <div className="skills_examples">
          <h2>Mes Skills</h2>
          <div className="skills_list">
            {skills.map((skill, index) => (
              <div className="skill" key={index}>
                {skill}
              </div>
            ))}
          </div>
        </div>

        <div className="skills_cv">
          <p>
            Pour voir mon CV,
            <br /> Clique juste ici
          </p>
          <div className="skills_cv_arrow">
            <i className="fa-solid fa-arrow-down"></i>
          </div>
          <div className="logo_container" onClick={handleLogoClick}>
            <img
              src={logo}
              loading="lazy"
              alt="Logo"
              className="rotating_logo"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
