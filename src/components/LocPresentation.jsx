import { useParams } from "react-router-dom";
import Collapse from "./Collapse";
import Carrousel from "./Carrousel";
import "../styles/SCSS/LocPresentation.scss";

//importation FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

// Récupération des locations depuis le fichier JSON
const locations = require("../datas/logements.json");

function LocPresentation() {
  //Récupération de l'id dans l'url
  const { IDlocation } = useParams();

  //trouver la location qui correspond à l'id dans l'url
  const loc = locations.find((location) => location.id === IDlocation);

  //Gérérer une plage de notation pour l'affichage de la note de la location
  const ratingRange = [1, 2, 3, 4, 5];
  const highRating = 5;

  return (
    <div className="loc-presentation">
      <Carrousel />

      <div className="loc-presentation__info">
        <div>
          <h2>{loc.title}</h2>
          <p>{loc.location}</p>

          <ul className="loc-presentation__info__tags">
            {/* Affichage des tags de la location */}
            {loc.tags.map((tag) => (
              <li key={tag} className="tag">
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <div className="loc-presentation__info__details">
          <div className="loc-presentation__info__details__host">
            <img src={loc.host.picture} alt={loc.host.name} />
            <span>
              {loc.host.name.split(" ")[0]}
              <br />
              {loc.host.name.split(" ")[1]}
            </span>
          </div>
          <div className="loc-presentation__info__details__note">
            {/* Affichage de la note de la location */}
            {ratingRange.map((ratingElmt) =>
              loc.rating >= ratingElmt ? (
                <span key={ratingElmt.toString()}>
                  <FontAwesomeIcon
                    icon={faStar}
                    className="star star__color-star"
                  ></FontAwesomeIcon>
                </span>
              ) : (
                <span key={ratingElmt.toString()}>
                  <FontAwesomeIcon
                    icon={faStar}
                    className="star star__neutral-star"
                  ></FontAwesomeIcon>
                </span>
              )
            )}
            <span className="sr-only">
              Note de {loc.rating} sur {highRating}
            </span>
          </div>
        </div>
      </div>

      <div className="collapses">
        <Collapse title="Description">{loc.description}</Collapse>

        <Collapse title="Equipements" classNameCollapse="collapse__loc">
          <ul>
            {loc.equipments.map((equipment) => (
              <li key={equipment} className="equipment">
                {equipment}
              </li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
}

export default LocPresentation;
