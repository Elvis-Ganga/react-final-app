import { Link } from "react-router-dom";
import Navbar from "../complex/Navbar";
import { MenuList } from "../pages/MenuList";
import MenuItem from "../complex/MenuItem";
import Footer from "../complex/Footer";
import "../../styling/Menu.css";

function Menu() {
  return (
    <div>
      <Navbar />
      <div className="menu">
        <h1 className="menuTitle">Our Menu</h1>
        <div className="menuList">
          {MenuList.map((menuItem, key) => {
            return (
              <MenuItem
                key={key}
                image={menuItem.image}
                name={menuItem.name}
                pdf={menuItem.pdf}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Menu;
