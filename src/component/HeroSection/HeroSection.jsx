import React from "react";
import "./HeroSection.scss"; // Assuming you have a CSS file for styling
import heroImage from "../../assets/images/hero-img.svg"; // Replace with your image path
import DarkButton from "../DarkButton/DarkButton";

const HeroSection = () => {
  return (
    <div className="container mx-auto hero-section">
      <div className="hero-section_flex">
        <div className="hero-section_title">
          <h1>Central Texas Fly Fishing</h1>
          <p>
            At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis
            cursus vestibulum, facilisi ac, sed faucibus.
          </p>
          <DarkButton text="Get Started" />
        </div>
        <div className="hero-section_image">
          <img src={heroImage} alt="Hero" className="w-100" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
