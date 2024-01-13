import whiteLogo from "../assets/whiteLogoKasa.png";
import "../styles/SCSS/Footer.scss";

function Footer() {
  return (
    <footer>
      <img src={whiteLogo} alt="Logo de Kasa" />
      <div>© 2020 Kasa. All rights reserved</div>
    </footer>
  );
}

export default Footer;
