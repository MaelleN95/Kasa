import Header from "../components/Header";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import "../styles/SCSS/About.scss";

function About() {
  return (
    <div>
      <Header />
      <Banner />
      <main>
        <Collapse title="Fiabilité" classNameCollapse="collapse__about">
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les
          photos sont conformes aux logements, et toutes les informations sont
          régulièrement vérifiées par nos équipes.
        </Collapse>
        <Collapse title="Respect" classNameCollapse="collapse__about">
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </Collapse>
        <Collapse title="Service" classNameCollapse="collapse__about">
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entraînera une exclusion de notre plateforme.
        </Collapse>
        <Collapse title="Sécurité" classNameCollapse="collapse__about">
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que
          pour les voyageurs, chaque logement correspond aux critères de
          sécurité établis par nos services. En laissant une note aussi bien à
          l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les
          standards sont bien respectés. Nous organisons également des ateliers
          sur la sécurité domestique pour nos hôtes.
        </Collapse>
      </main>
      <Footer />
    </div>
  );
}

export default About;
