import React from "react";

const CheckinCard = ({title,content}) => {
  return <div className="homepage-card-holder">
      <div className="homepage-card" id={title}>
      <div className="card-title">
          {title}
      </div>
      <div className="card-content">
          {content}
      </div>
      </div>
  </div>;
};

export default CheckinCard;
