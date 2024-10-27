import M from "../assets/M.png";
import "../styles/Header.scss";

const Header = () => {
  return (
    <nav className="nav">
      <img className="nav_logo" src={M} alt="" />
      <a
        href="https://www.linkedin.com/in/patrycja-wierzbicka-3168aa295/"
        target="_blank"
        rel="noopener noreferrer"
        className="nav_btn"
      >
        Contactez-moi !
      </a>
    </nav>
  );
};

export default Header;
