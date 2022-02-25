import React, { useEffect, useState } from "react";
import { axiosRequest } from "../../apis/apis";
import FlightDetailCard from "../Cards/FlightDetailCard";
import { getFlightId } from "./getFlightId";

const FlightDetails = ({ flight }) => {
  const [flightData, setflightData] = useState({});
  const [id, setid] = useState(null);
  getFlightId(flight).then((value) => setid(value));

  useEffect(() => {
    if (id !== null) {
      axiosRequest
        .get(`/flight_details/${id}`)
        .then((result) => setflightData(result.data))
        .catch((error) => console.log(error));
    }
  }, [flight, id]);

  console.log(flightData);

  return (
    <div className="flight-details-container">
      {Object.keys(flightData).length !== 0 ? (
        <FlightDetailCard flightData={flightData} />
      ) : null}
    </div>
  );
};

export default FlightDetails;
