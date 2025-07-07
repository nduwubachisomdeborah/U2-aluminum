import React from "react";
import "./TopNavBar.css";
import { MdLocationPin } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa6";

const TopNavBar = () => {
  return (
    <div className="Topnavbar">
      <div className="topnavbar-divs-display">
        <div className="topnav-item">
          <MdLocationPin className="topnav-icons" />
          <span>KM 5 OWERRI ABA ROAD BY POLY JUNCTION OWERRI, IMO STATE</span>
        </div>
        <div className="topnav-item">
          <IoCall className="topnav-icons" />
          <span>+234 (8033206896)</span>
        </div>
        <div className="topnav-item">
          <FaEnvelope className="topnav-icons" />
          <span>U2aluminum@gmail.com</span>
        </div>
      </div>
      <div className="topnav-hr"></div>
    </div>
  );
};

export default TopNavBar;
