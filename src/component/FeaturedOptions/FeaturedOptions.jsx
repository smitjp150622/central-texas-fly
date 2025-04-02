import React from "react";
import "./FeaturedOptions.scss";
import { featuredData } from "../../content";
import Accordion from "../Accordion/Accordion";

const FeaturedOptions = () => {
  return (
    <div className="featured-options">
      <div className="container mx-auto featured-options_title">
        <h2>Featured Options</h2>
        {featuredData.map((option) => {
          return (
            <Accordion
              id={option.id}
              title={option.title}
              content={option.content}
              img={option.img}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedOptions;
