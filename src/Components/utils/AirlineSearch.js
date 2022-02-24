import React, { useState, useEffect } from "react";
import { axiosRequest } from "../../apis/apis";

const AirlineSearch = ({ slots, setFlightValue }) => {
  const [value, setvalue] = useState([]);

  const handleSelect = () => {
    const element = document.querySelector(".flight-searchlist");
    setFlightValue(element.value);
  };

  useEffect(() => {
    axiosRequest
      .get("/flight_details")
      .then((response) => {
        setvalue(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const setMessage = (slot) => {
    let message = "";
    value.forEach((element) => {
      if (element.sourcetime === slot) {
        message = `Flight from ${element.source} to ${element.destination}`;
        console.log(message);
      }
    });
    return message;
  };

  //console.log(Array.isArray(slots)); True

  return (
    <div className="searchbar-container">
      <select
        name="selected_flight"
        className="flight-searchlist"
        onChange={handleSelect}
      >
        <option value="none" selected disabled hidden>
          {slots?.length !== 0 ? "Select a Flight" : "No Flights Available"}
        </option>
        {slots?.map((slot, index) => (
          <option key={index} value={slot}>
            {setMessage?.(slot)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AirlineSearch;
