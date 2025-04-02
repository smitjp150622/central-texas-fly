import React from "react";
import "./LightButton.scss";

const LightButton = (props) => {
  return (
    <button className="secondary-button" onClick={props.onClick}>
      {props.text}
    </button>
  );
};

export default LightButton;
