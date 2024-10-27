import "../styles/Presentation.scss";
import M from "../assets/M.png";

const Presentation = () => {
  return (
    <div className="header">
      <div className="header-content">
        <div className="intro-text">
          <h1>Bonjour, je suis Patrycja</h1>
          <h2>Développeuse Junior</h2>
          <p>
            Pour voir mon CV,
            <br /> Clique juste ici
          </p>
          <div className="arrow">
            <i class="fa-solid fa-arrow-down"></i>
          </div>
        </div>
        <div className="logo-container">
          <img src={M} loading="lazy" alt="Logo" className="rotating-logo" />
        </div>
      </div>
    </div>
  );
};

export default Presentation;
