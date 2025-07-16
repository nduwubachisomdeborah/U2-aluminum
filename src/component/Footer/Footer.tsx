import "./Footer.css";
import logo from "../../assets/U2 LOGO_012459_prev_ui.png";
import { Link } from "react-router-dom";
// import { Container } from "react-bootstrap";
// import { Typewriter } from "react-simple-typewriter";
const Footer = () => {
  const phoneNumber = "+2348033206896";

  const facebookProfile =
    "https://www.facebook.com/profile.php?id=61577874544883";

  const whatsapp = () => {
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, "_blank");
  };

  const instagram =
    "https://www.instagram.com/u2aluminiumsystems?igsh=N3VlZWh1b2pmbTh6";

  const email = "U2aluminum@gmail.com";
  const handleGmailClick = () => {
    // Replace 'mailto' with the recipient's email
    window.location.href = `mailto:${email}`;
  };
  return (
    <footer className="footer-main-div">
      <div className="footer-main-div-background-image">
        <div className="footer-main-div-overlay"></div>
        <div className="footer-divs-display">
          <div className="footer-section1">
            <div className="footer-img-div">
              <img src={logo} alt="logo" className="footer-img" />{" "}
            </div>
            <div className="footer-regis">U2 ALUMINUM SYSTEMS ENTERPRISE</div>
            <div className="social-icons">
              <a
                href={facebookProfile}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>

              <a href="#" onClick={handleGmailClick}>
                <i className="fab fa-google"></i>
              </a>

              <a href={instagram} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>

              <a href="#" onClick={whatsapp}>
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* <div className="footer-section2">
            <div className="footer-header">Quick links</div>
            <div style={{ fontSize: "15px" }}>Home</div>
            <div style={{ fontSize: "15px" }}>About</div>
            <div style={{ fontSize: "15px" }}>Services</div>
            <div style={{ fontSize: "15px" }}>Contact Us</div>
            <div style={{ fontSize: "15px" }}>Profile</div>
          </div> */}
          <div className="footer-section3">
            <div className="footer-header">Products</div>
            <ul
              style={{
                paddingLeft: "20px",
                fontSize: "15px",
                listStyleType: "disc",
              }}
            >
              <li>CHARCOAL BLACK SHINGLES</li>
              <li>SHERK STONECOATED</li>
              <li>MILANO</li>
              <li>CLASSIC CHARCOAL BLACK</li>
              <li>ALUMINUM</li>
              <li>BLACK ALUMINUM</li>
              <li>SHINGLE BLACK WITH WHITE PATCH</li>
              <li>SHINGLE COFFEE WITH BLACK PATCH</li>
              <li>ASH GREY ALUMINUM</li>
            </ul>
          </div>

          <div id="contact" className="footer-section4">
            <div className="footer-header">Contact Us</div>
            <div style={{ fontSize: "15px" }}>
              KM 5 OWERRI ABA ROAD BY POLY JUNCTION OWERRI, IMO STATE
            </div>
            <div style={{ fontSize: "15px" }}>Email: U2aluminum@gmail.com</div>
            <div style={{ fontSize: "15px" }}>Phone: +2348033206896 </div>
          </div>
        </div>
      </div>
      <div
        className="text-center p-3 "
        style={{
          fontSize: "medium",
          color: "whitesmoke",
          position: "relative",
        }}
      >
        © 2024 Copyright: U2 aluminum systems Enterprise
      </div>
      <div className="designed">
        {" "}
        {/* <Typewriter
          words={["Designed By"]}
          cursor
          deleteSpeed={50}
          typeSpeed={200}
          delaySpeed={1000}
          loop={false}
        /> */}
      </div>
      {/* <div className="nchrys">coding_girl (+234 8136757488)</div> */}
    </footer>
  );
};

export default Footer;
