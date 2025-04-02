import React from "react";
import "./MemberCard.scss";
import LightButton from "../LightButton/LightButton";

const MemberCard = (props) => {
  return (
    <div className="member-stories_card">
      <div className="member-stories_card-image">
        <img src={props.img} alt="Member" />
      </div>
      <div className="member-stories_card-title">
        <div className="">
          <h3>{props.title}</h3>
          <p>{props.content}</p>
        </div>
        <LightButton text="Read More" />
      </div>
    </div>
  );
};

export default MemberCard;
