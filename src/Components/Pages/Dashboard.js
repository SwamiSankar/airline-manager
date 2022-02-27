import React, { useState, useContext } from "react";
import DashboardFlightList from "../Lists/DashboardFlightList";
import DashboardPaxList from "../Lists/DashboardPaxList";
import DashboardToggle from "../Toggles/DashboardToggle";
import { AppContext } from "../../App";

const Dashboard = () => {
  const { state } = useContext(AppContext);

  let isLoggedIn = state.isLoggedIn;
  const [display, setdisplay] = useState("");

  const displayOption = (value) => {
    setdisplay(value);
  };
  if (!isLoggedIn)
    return (
      <div className="dashboard-container">
        <p>Please login before accessing this page</p>
      </div>
    );
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
