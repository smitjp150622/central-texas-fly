import React from "react";
import "./FeaturedOptions.scss";
import { featuredData } from "../../content";
import Accordion from "../Accordion/Accordion";
import FeatureCard from "../FeatureCard/FeatureCard";

const FeaturedOptions = () => {
  return (
    <div className="featured-options padding-block">
      <div className="container mx-auto featured-options_title">
        <h2>Featured Options</h2>
        <div className="hidden sm:hidden lg:block">
          {featuredData.map((option) => {
            return <Accordion key={option.id} {...option} />;
          })}
        </div>
        <div className="block sm:block lg:hidden feature-card">
          {featuredData.map((option) => {
            return <FeatureCard key={option.id} {...option} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default FeaturedOptions;
