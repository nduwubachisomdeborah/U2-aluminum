import React, { useRef, useEffect, useState } from "react";
import whatsapp from "../../assets/whatsapp.png";
import "./HeroSection.css";
import round from "../../assets/arrow.png";
import { useLocation } from "react-router-dom";
import heroVideo from "../../assets/videocompany.mp4";

const HeroSection: React.FC = () => {
  const { pathname } = useLocation();
  const phoneNumber = "+2348033206896";
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const email = "U2Aluminum@gmail.com";
  const handleGmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  const WhatsappClick = () => {
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, "_blank");
  };

  useEffect(() => {
    const handleFirstClick = () => {
      if (videoRef.current) {
        videoRef.current.muted = false;
        videoRef.current.play();
        setIsMuted(false);
      }
      // Remove listener after first interaction
      document.removeEventListener("click", handleFirstClick);
    };

    document.addEventListener("click", handleFirstClick);

    return () => {
      document.removeEventListener("click", handleFirstClick);
    };
  }, []);

  return (
    <div className="hero-container">
      <div className="hero-video-div">
        <div className="background-div-overlay"></div>

        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="video-background"
        >
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Floating mute button to toggle manually */}
        <button
          className="mute-btn"
          onClick={() => {
            if (videoRef.current) {
              videoRef.current.muted = !videoRef.current.muted;
              setIsMuted(videoRef.current.muted);
            }
          }}
        >
          {isMuted ? "🔊 Unmute" : "🔇 Mute"}
        </button>
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
        </div>
      </div>
      <div className="round-arrow-img-div">
        <div className="whatsapp-img-size" onClick={scrollToTop}>
          <img src={round} alt="scroll up" className="whatsapp-img" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
