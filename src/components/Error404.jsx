import { Link } from "react-router-dom";
import "../styles/SCSS/Error404.scss";

function Error404() {
  return (
    <div className="error">
      <span className="error__number-error">404</span>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </div>
  );
}

export default Error404;
