import React from "react";
import "./OutlineButton.scss";

const OutlineButton = (props) => {
  return (
    <button className="outline-button" onClick={props.onClick}>
      {props.text}
    </button>
  );
};

export default OutlineButton;
