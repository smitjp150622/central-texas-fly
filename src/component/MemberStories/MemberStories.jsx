import React from "react";
import "./MemberStories.scss";
import MemberCard from "../MemberCard/MemberCard";
import { memberData } from "../../content";

const MemberStories = () => {
  const stories = memberData;
  return (
    <div className="member-stories">
      <div className="container mx-auto member-stories_wrapper">
        <h2>Member stories</h2>
        <div className="member-stories_wrapper-grid">
          {stories.map((story) => {
            return (
              <MemberCard
                img={story.img}
                title={story.title}
                content={story.content}
                key={story.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MemberStories;
