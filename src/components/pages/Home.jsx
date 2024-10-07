import { Link } from "react-router-dom";
import Navbar from "../complex/Navbar";
import Footer from "../complex/Footer";
import "../../styling/Home.css";

const Home = () => {
  return (
    <div>
      <Navbar />

      <div className="home">
        <div className="headerContainer">
          <h1>
            <span className="center">E</span>
            <span className="notcenter">Wine Galery</span>
          </h1>

          <Link to="/menu">
            <button> ORDER NOW </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
