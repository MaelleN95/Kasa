import whiteLogo from "../assets/whiteLogoKasa.png";
import kojiLogo from "../assets/koji-logo.jpg";
import "../styles/SCSS/Footer.scss";

function Footer() {
  return (
    <footer>
      <img src={whiteLogo} alt="Logo de Kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
      <img src={kojiLogo} alt="Logo de Kōji" className="koji-logo"/>
      <p>Site réalisé par <a href="https://koji-dev.fr/">Kōji</a>.</p>
      <p>Ce site est une simulation d'application de location immobilière.</p>
    </footer>
  );
}

export default Footer;
