import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "../../App";
import { axiosRequest } from "../../apis/apis";
import SeatMapCard from "../Cards/SeatMapCard";
import AirlineSearch from "../utils/AirlineSearch";
import FlightDetails from "../utils/FlightDetails";
import PassengerList from "../utils/PassengerList";
import SearchButton from "../utils/SearchButton";

const Checkin = () => {
  const [data, setData] = useState([]);
  const [flight, setflight] = useState("");
  const [layoutStatus, setlayoutStatus] = useState(false);
  const [listStatus, setlistStatus] = useState(false);

  useEffect(() => {
    axiosRequest
      .get("/display_slots")
      .then((result) => setData(result.data))
      .catch((e) => console.log(e));
  }, []);

  useEffect(() => {
    console.log(layoutStatus);
  }, [layoutStatus]);

  useEffect(() => {
    console.log(listStatus);
  }, [listStatus]);

  const { dispatch } = useContext(AppContext);

  const changeFlightValue = (flight) => {
    dispatch({ type: "UPDATE_FLIGHT", data: flight });
  };

  const setFlightValue = (value) => {
    setflight(value);
    changeFlightValue(value);
  };

  const changeLayoutStatus = () => {
    if (listStatus === true) {
      setlistStatus(false);
    }
    setlayoutStatus(!layoutStatus);
  };

  const changeListStatus = () => {
    if (layoutStatus === true) {
      setlayoutStatus(false);
    }
    setlistStatus(!listStatus);
  };

  localStorage.setItem("flight", flight);

  if (!data) return null;
  return (
    <div className="checkin-container">
      <AirlineSearch
        slots={data.output_slots}
        setFlightValue={setFlightValue}
      />

      <div className="button-container">
        {flight ? (
          <div>
            <SearchButton changeStatus={changeLayoutStatus} name="Get Layout" />
            <SearchButton changeStatus={changeListStatus} name="Get List" />
          </div>
        ) : null}
      </div>
      {!(listStatus || layoutStatus) ? <FlightDetails flight={flight} /> : null}
      {listStatus && !layoutStatus ? <PassengerList flight={flight} /> : null}
      {layoutStatus && !listStatus ? (
        <SeatMapCard flight={flight} page="checkin" />
      ) : null}
    </div>
  );
};

export default Checkin;
