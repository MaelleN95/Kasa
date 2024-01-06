import { useState } from "react";
import arrowUp from "../assets/arrowUp.png";
import arrowDown from "../assets/arrowDown.png";
import "../styles/CSS/Collapse.css";

function Collapse(props) {
  const [open, updateOpen] = useState(false);

  const toggleOpen = () => {
    updateOpen(!open);
  };

  return (
    <div className="collapse">
      <div className="collapse__close" onClick={toggleOpen}>
        <h3>{props.title}</h3>
        {open ? (
          <img src={arrowUp} alt="arrow up" />
        ) : (
          <img src={arrowDown} alt="arrow down" />
        )}
      </div>

      {open && <div className="collapse__open">{props.children}</div>}
    </div>
  );
}

export default Collapse;
