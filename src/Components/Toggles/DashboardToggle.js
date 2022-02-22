import React from "react";
import { Dropdown } from "semantic-ui-react";

const DashboardToggle = ({ displayOption }) => {
  const handleChange = (event, data) => {
    displayOption(data.value);
  };
  const toggle = [
    { key: "flight", text: "Flight Dashboard", value: "flightDashboard" },
    {
      key: "passenger",
      text: "Passenger Dashboard",
      value: "passengerDashboard",
    },
  ];
  return (
    <Dropdown
      placeholder="Select a Dashboard"
      selection
      clearable
      options={toggle}
      onChange={handleChange}
    />
  );
};

export default DashboardToggle;
