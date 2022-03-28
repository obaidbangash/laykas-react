import React from "react";
import aboutBGImg from "../../assets/about-bg.png";
import "./aboutBanner.css";

function AboutBanner() {
  return (
    <div
      className="about-banner bg"
      style={{ backgroundImage: `url(${aboutBGImg})` }}
    >
      <div className="container">
        <h1>ABOUT US</h1>
        <p className="p">
          We are founded by a leading academic and researcher in the field of
          Industrial Systems Engineering.
        </p>
      </div>
    </div>
  );
}

export default AboutBanner;
