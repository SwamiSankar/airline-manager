import React from "react";
import HomepageCard from "./HomepageCard";
import { Link } from "react-router-dom";

const HomepageCards = () => {
  return (
    <div className="card-holder">
      <Link to="/checkin">
        <HomepageCard
          title="Checkin"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus purus sed sapien congue, eu."
        />
      </Link>
      <Link to="/inflight">
        <HomepageCard
          title="Inflight"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus purus sed sapien congue, eu."
        />
      </Link>
      <Link to="/dashboard">
        <HomepageCard
          title="Dashboard"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus purus sed sapien congue, eu."
        />
      </Link>
    </div>
  );
};

export default HomepageCards;
