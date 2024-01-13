import { NavLink } from "react-router-dom";
import logo from "../assets/logoKasa.png";
import "../styles/SCSS/Header.scss";

function Header() {
  return (
    <header>
      <img src={logo} alt="Logo de Kasa" />
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "link-active" : null)}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "link-active" : null)}
        >
          A Propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
