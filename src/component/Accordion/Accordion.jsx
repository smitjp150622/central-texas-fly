import React, { useEffect, useState } from "react";
import "./Accordion.scss";
import accordionIcon from "../../assets/images/accorordion-arrow.svg";
import LightButton from "../LightButton/LightButton";

const Accordion = (props) => {
  useEffect(() => {
    if (props.defaultOpen) {
      setOpenIndex(props.id);
    }
  }, [props.id, props.defaultOpen]);
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <div className="accordion-wrapper">
      <div
        className="accordion-wrapper_header"
        onClick={() => toggleAccordion(props.id)}
      >
        <h4>{props.title}</h4>
        <img
          src={accordionIcon}
          alt="Accordion Icon"
          className={`accordion-icon transition-transform duration-300 ${
            openIndex === props.id ? "rotate-0" : "rotate-180"
          }`}
        />
      </div>
      {openIndex === props.id && (
        <div className="accordion-wrapper_content">
          <div className="accordion-wrapper_content-image">
            <img src={props.img} alt="Accordion Content" />
          </div>
          <div className="accordion-wrapper_content-text">
            <h3>{props.title}</h3>
            <p>{props.content}</p>
            <LightButton text="Read More" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Accordion;
