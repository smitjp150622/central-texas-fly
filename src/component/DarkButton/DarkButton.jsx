import React from "react";
import "./DarkButton.scss";

const DarkButton = (props) => {
  return <button className="primary-button">{props.text}</button>;
};

export default DarkButton;
