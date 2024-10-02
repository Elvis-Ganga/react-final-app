import "./App.css";
import Navbar from "./components/complex/Navbar";
import Footer from "./components/complex/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Menu from "./components/pages/Menu";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" exact element={<Menu />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/contact" exact element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
