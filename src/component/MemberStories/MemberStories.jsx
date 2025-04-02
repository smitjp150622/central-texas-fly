import React from "react";
import "./MemberStories.scss";
import img1 from "../../assets/images/member-1.jpg";
import img2 from "../../assets/images/member-2.jpg";
import img3 from "../../assets/images/member-3.jpg";
import img4 from "../../assets/images/member-4.jpg";
import MemberCard from "../MemberCard/MemberCard";

const MemberStories = () => {
  const stories = [
    {
      title: "John’s Story",
      content:
        "Non arcu risus quis varius quam quisque. Ornare suspendisse sed nisi lacus. Eu feugiat pretium nibh,",
      img: img1,
    },
    {
      title: "The Journey",
      content:
        "Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus in metus vulputate eu sc",
      img: img2,
    },
    {
      title: "Catch Day",
      content:
        "Elit pellentesque habitant morbi tristique senectus et netus et. In hendrerit gravida rutrum quisque",
      img: img3,
    },
    {
      title: "Trout Tales",
      content:
        "Sit amet mattis vulputate enim nulla aliquet. At augue eget arcu dictum varius. Volutpat commodo sed",
      img: img4,
    },
  ];
  return (
    <div className="member-stories">
      <div className="container mx-auto member-stories_wrapper">
        <h2>Member stories</h2>
        <div className="member-stories_wrapper-grid">
          {stories.map((story, index) => {
            return (
              <MemberCard
                img={story.img}
                title={story.title}
                content={story.content}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MemberStories;
