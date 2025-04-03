import React from "react";
import "./MemberCard.scss";
import LightButton from "../LightButton/LightButton";
import OutlineButton from "../OutlineButton/OutlineButton";

const MemberCard = (props) => {
  return (
    <div className="member-stories-card">
      <h3 className="block sm:block lg:hidden">{props.title}</h3>
      <div className="member-stories_card">
        <div className="member-stories_card-image">
          <img src={props.img} alt="Member" />
        </div>
        <div className="member-stories_card-title">
          <div className="">
            <h3 className="hidden sm:hidden lg:block">{props.title}</h3>
            <p>{props.content}</p>
          </div>
          <div className="hidden sm:hidden lg:block">
            <LightButton text="Read More" />
          </div>
        </div>
      </div>
      <div className="block sm:block lg:hidden">
        <OutlineButton text={"Read more"} />
      </div>
    </div>
  );
};

export default MemberCard;
