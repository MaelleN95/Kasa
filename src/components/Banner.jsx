import { useLocation } from "react-router-dom";

import "../styles/CSS/Banner.css";

function Banner() {
  let location = useLocation();
  let background =
    location.pathname === "/" ? "banner homeBanner" : "banner aboutBanner";

  return (
    <div className={background}>
      <div className="banner__slogan">
        {location.pathname === "/" ? "Chez vous, partout et ailleurs" : null}
      </div>
    </div>
  );
}

export default Banner;
