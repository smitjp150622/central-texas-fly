import React from "react";
import "./FeatureCard.scss";
import LightButton from "../LightButton/LightButton";

const FeatureCard = (props) => {
  return (
    <div className="feature-card-main">
      <img src={props.img} alt={props.title} />
      <div className="feature-card-main-content">
        <h4>{props.title}</h4>
        <p>{props.content}</p>
        <LightButton text={"Learn more"} />
      </div>
    </div>
  );
};

export default FeatureCard;
