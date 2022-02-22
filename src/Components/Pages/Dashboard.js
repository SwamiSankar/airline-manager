import React, { useState } from "react";
import DashboardFlightList from "../Lists/DashboardFlightList";
import DashboardPaxList from "../Lists/DashboardPaxList";
import DashboardToggle from "../Toggles/DashboardToggle";

const Dashboard = () => {
  const [display, setdisplay] = useState("");

  const displayOption = (value) => {
    setdisplay(value);
  };

  return (
    <div className="dashboard-container">
      <span className="toggle-span">
        <h3>Admin Dashboard</h3>
        <DashboardToggle displayOption={displayOption} />
      </span>
      {display === "flightDashboard" ? (
        <DashboardFlightList />
      ) : display === "passengerDashboard" ? (
        <DashboardPaxList />
      ) : null}
    </div>
  );
};

export default Dashboard;
