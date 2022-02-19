import React from "react";
import { Dropdown } from "semantic-ui-react";

const LayoutToggle = ({ setLayoutValue }) => {
  const handleChange = (event, data) => {
    setLayoutValue(data.value);
  };
  const toggle = [
    { key: "preference", text: "Food Preference", value: "preference" },
    {
      key: "ancillary",
      text: "Ancillary Services",
      value: "ancillary",
    },
  ];
  return (
    <Dropdown
      placeholder="Select a layout"
      selection
      options={toggle}
      onChange={handleChange}
    />
  );
};

export default LayoutToggle;
