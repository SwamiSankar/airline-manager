import React, { useContext, useState } from "react";
import { AppContext } from "../../App";
import LayoutToggle from "../Toggles/LayoutToggle";
import SeatMapCard from "../Cards/SeatMapCard";

const Inflight = () => {
  const { state } = useContext(AppContext);
  let flight = state.flight;
  let isLoggedIn = state.isLoggedIn;

  const [layout, setlayout] = useState("");

  const setLayoutValue = (value) => {
    setlayout(value);
  };

  console.log(layout);

  if (!flight)
    return (
      <div className="inflight-container">
        <p> Please Select Flight from Checkin </p>
      </div>
    );
  if (!isLoggedIn)
    return (
      <div className="inflight-container">
        <p>Please login before accessing this page</p>
      </div>
    );
  return (
    <div className="inflight-container">
      <span className="toggle-span">
        <h3>Inflight Services</h3>
        <LayoutToggle setLayoutValue={setLayoutValue} />
      </span>

      <SeatMapCard flight={flight} page="inflight" layout={layout} />
    </div>
  );
};

export default Inflight;
