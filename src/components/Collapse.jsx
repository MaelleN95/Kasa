import { useState } from "react";
import arrow from "../assets/arrow.png";
import "../styles/CSS/Collapse.css";

function Collapse(props) {
  const [open, updateOpen] = useState(false);

  const toggleOpen = () => {
    updateOpen(!open);
  };

  const path = window.location.pathname;

  return (
    <div
      className={path === "/about" ? "collapse collapse__about" : "collapse"}
    >
      <div
        className={
          open ? "collapse__close collapse__close--clicked" : "collapse__close"
        }
        onClick={toggleOpen}
      >
        <h3>{props.title}</h3>
        <img
          src={arrow}
          alt="arrow"
          className={
            open
              ? "collapse__close__arrow collapse__close__arrow--close"
              : "collapse__close__arrow collapse__close__arrow--open"
          }
        />
      </div>
      <div
        className={
          open
            ? "collapse__txt collapse__txt--open"
            : "collapse__txt collapse__txt--hidden"
        }
      >
        {props.children}
      </div>
    </div>
  );
}

export default Collapse;
