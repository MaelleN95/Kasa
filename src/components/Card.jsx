import { Link } from "react-router-dom";
import "../styles/SCSS/Card.scss";

// Récupération des locations depuis le fichier JSON
const locations = require("../datas/logements.json");

function Card() {
  return (
    <ul className="locations">
      {locations.map((location) => (
        <li key={location.id} className="location-card">
          <Link to={`/location/${location.id}`}>
            <img
              className="location-card__cover"
              src={location.cover}
              alt={`${location.title} cover`}
            />
            <h2>{location.title}</h2>
            <div className="location-card__gradient-effect"></div>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Card;
