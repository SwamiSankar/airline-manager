import React from "react";

const FlightDetailCard = ({ flightData }) => {
  return (
    <div className="flight-details-display">
      <div className="flight-source">Source : {flightData.source}</div>
      <div className="flight-destination">
        Destination : {flightData.destination}
      </div>
      <div className="flight-source-time">
        Departure : {flightData.sourcetime}
      </div>
      <div className="flight-destination-time">
        Arrival : {flightData.destinationtime}
      </div>
    </div>
  );
};

export default FlightDetailCard;
