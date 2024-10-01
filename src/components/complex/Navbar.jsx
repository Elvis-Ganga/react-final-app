import { Link } from "react-router-dom";
import "../../styling/navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";
import { useState } from "react";

const Navbar = () => {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };

  return (
    <nav className="navbar">
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={"Navbar-img.jpg"} />
        <h1 className="name">E-WINE-GALERY</h1>
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/menu"> Menu </Link>
          <Link to="/about"> About </Link>
          <Link to="/contact"> Contact </Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/menu"> Menu </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
