import React from "react";
import HomePageCards from "../Cards/HomepageCards";
import headerimage from "../../images/header-image.jpg";

const Homepage = () => {
  console.log("Hi");
  return (
    <div className="homepage-container">
      <img className="website-title-img" src={headerimage} alt="flight" />
      <HomePageCards />
    </div>
  );
};

export default Homepage;
