import M from "../assets/M.png";
import "../styles/Header.scss";

const Header = () => {
  return (
    <nav className="nav">
      <img className="nav_logo" src={M} alt="" />
      <div>Linkedin</div>
    </nav>
  );
};

export default Header;
