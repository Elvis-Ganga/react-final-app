import { Link } from "react-router-dom";
import "../../styling/MenuItem.css";

function MenuItem({ image, name, pdf }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <a href={pdf} target="_blank">
        Start Overview
      </a>
    </div>
  );
}

export default MenuItem;
