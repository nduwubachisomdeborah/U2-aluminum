import { useState } from "react";
import "./NavBar.css";
import logo from "../../assets/U2 LOGO_012459.png";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa6";

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="U2 logo" className="logo-img" />
        </Link>
      </div>

      <div className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
        <ul onClick={() => setMenuOpen(false)}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About-us">About</Link>
          </li>
          <li>
            <Link to="/Contact-us">Contact</Link>
          </li>
          <li>
            <Link to="/Services">Services</Link>
          </li>
          <li>
            <Link to="/Projects">Projects</Link>
          </li>
        </ul>
      </div>

      <div className="navbar-icon" onClick={toggleMenu}>
        <FaBars className="bars" />
      </div>
    </nav>
  );
};

export default NavBar;
