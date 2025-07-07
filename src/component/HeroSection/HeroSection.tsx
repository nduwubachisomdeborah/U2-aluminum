import React from "react";
import whatsapp from "../../assets/whatsapp.png";
import "./HeroSection.css"; // Create this file for styling
// import Slider from "react-slick";
import round from "../../assets/arrow.png";
import { useLocation } from "react-router-dom";
import heroVideo from "../../assets/Background.mp4";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
const HeroSection: React.FC = () => {
  const { pathname } = useLocation();
  const phoneNumber = "+2348033206896";
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  const email = "U2Aluminum@gmail.com";
  const handleGmailClick = () => {
    // Replace 'mailto' with the recipient's email
    window.location.href = `mailto:${email}`;
  };
  const WhatsappClick = () => {
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, "_blank");
  };
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots: any) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul>;
    },
  };
  return (
    <div className="hero-container">
      <div className="hero-video-div">
        {/* <Slider {...settings}> */}
        <div className="background-div-overlay"></div>
        <video autoPlay loop muted className="video-background">
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* <video autoPlay loop muted className="video-background2">
            <source
              src={process.env.PUBLIC_URL + "/videos/vivi.mp4"}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video> */}
        {/* </Slider> */}
      </div>
      <div className="hero-caption"> U2 Aluminum Systems Enterprise</div>
      <div className="caption-writeup">
        Roofing and Contracting Company where creativity meets standard
      </div>
      <div className="btn-btn-navbar" onClick={handleGmailClick}>
        Visit Us
      </div>
      <div className="whatsapp-img-div">
        <div className="whatsapp-img-size" onClick={WhatsappClick}>
          <img src={whatsapp} alt="whatsapp" className="whatsapp-img" />
        </div>{" "}
      </div>
      <div className="round-arrow-img-div">
        <div className="whatsapp-img-size" onClick={scrollToTop}>
          <img src={round} alt="whatsapp" className="whatsapp-img" />
        </div>{" "}
      </div>
    </div>
  );
};

export default HeroSection;
