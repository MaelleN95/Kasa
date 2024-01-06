import { useParams } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

// Récupération des locations depuis le fichier JSON
const locations = require("../datas/logements.json");

function Location() {
  const { IDlocation } = useParams();
  console.log(IDlocation);

  const location = locations.find((loc) => loc.id === IDlocation);
  console.log(location);

  return (
    <div>
      <Header />
      <h1> Page de location de l'id : {location.title}</h1>
      <Footer />
    </div>
  );
}

export default Location;
