import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/CSS/Carrousel.css";
import arrow from "../assets/arrow.png";

// Récupération des locations depuis le fichier JSON
const locations = require("../datas/logements.json");

function Carrousel() {
  //Récupération de l'id dans l'url
  const { IDlocation } = useParams();

  //trouver la location qui correspond à l'id dans l'url
  const loc = locations.find((location) => location.id === IDlocation);

  // Récup le nombre d'images
  const total = loc.pictures.length;

  // Id pour localiser l'img selectionnée dans le tableau loc.pictures
  const [id, setId] = useState(0);

  const nextPic = () => {
    if (id + 1 === total) {
      setId(0);
    } else {
      setId(id + 1);
    }
  };

  const prevPic = () => {
    if (id === 0) {
      setId(total - 1);
    } else {
      setId(id - 1);
    }
  };

  return (
    <div className="carrousel">
      <img
        src={arrow}
        alt="arrow"
        className={
          total === 1 ? "hidden" : "carrousel__arrow carrousel__arrow--left"
        }
        onClick={() => prevPic()}
      />
      <img
        className="carrousel__cover"
        src={loc.pictures[id]}
        alt={loc.title}
      />
      <img
        src={arrow}
        alt="arrow"
        className={
          total === 1 ? "hidden" : "carrousel__arrow carrousel__arrow--right"
        }
        onClick={() => nextPic()}
      />
      <div className={total === 1 ? "hidden" : "carrousel__count"}>
        {id + 1}/{total}
      </div>
      {/* <div className="test">
        {loc.pictures.map((picture) => (
          <img src={picture} alt=" " key={id + loc.id} />
        ))}
      </div> */}
    </div>
  );
}

export default Carrousel;
