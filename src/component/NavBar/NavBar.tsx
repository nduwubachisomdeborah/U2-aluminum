import { useState } from "react";
import "./NavBar.css";
import logo from "../../assets/U2 LOGO_012459.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa6";

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  const handleScroll = (id: string) => {
    const scrollAndHighlight = (id: string) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        element.classList.add("scrolled-to");
        setTimeout(() => {
          element.classList.remove("scrolled-to");
        }, 1000); // remove the highlight after 1.5s
      }
    };

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => scrollAndHighlight(id), 100);
    } else {
      scrollAndHighlight(id);
    }
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
            <Link to="/About-us">About</Link> {/* regular route */}
          </li>

          <li className="cont">
            <span
              onClick={() => handleScroll("contact")}
              style={{ cursor: "pointer" }}
            >
              Contact
            </span>
          </li>

          <li onClick={() => handleScroll("services")} className="nav-button">
            Products
          </li>

          {/* <li>
            <button
              onClick={() => handleScroll("projects")}
            
            >
              Sectors
            </button>
          </li> */}
          <li onClick={() => handleScroll("sectors")} className="nav-button">
            Sectors
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
