import "../styles/Presentation.scss";
import logo from "../assets/general/logo.webp";

const Presentation = () => {
  return (
    <>
      <section className="presentation">
        <nav className="nav">
          <img className="nav_logo" src={logo} alt="logo" />
          <a
            href="https://www.linkedin.com/in/patrycja-wierzbicka-3168aa295/"
            target="_blank"
            className="nav_btn"
          >
            Contactez-moi !
          </a>
        </nav>
        <div className="presentation_content">
          <h1>Bonjour, je suis Patrycja, développeuse web junior.</h1>
          <h2>Bienvenue sur mon portfolio !</h2>
          <p>
            Je suis tout juste diplômée d'une formation OpenClassrooms, où j'ai
            acquis les compétences nécessaires pour me lancer dans le
            développement web.
          </p>

          <p>
            J'ai une passion particulière pour le développement frontend et
            j'adore créer des interfaces utilisateur attrayantes et intuitives.
            En tant que professionnelle en devenir, je suis en constante
            apprentissage et je m'efforce de rester à jour sur les dernières
            tendances et technologies. Chaque projet est pour moi une nouvelle
            aventure créative.
          </p>

          <p>
            En tant que professionnelle en devenir, je suis en constante
            apprentissage et je m'efforce de rester à jour sur les dernières
            tendances et technologies. Chaque projet est pour moi une nouvelle
            aventure créative.
          </p>
        </div>
      </section>
    </>
  );
};

export default Presentation;
