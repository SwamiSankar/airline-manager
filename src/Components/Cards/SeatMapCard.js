import React, { useEffect, useState } from "react";
import { axiosRequest } from "../../apis/apis";
import CheckinSeatLayout from "../Layouts/Checkin/CheckinSeatLayout";
import InflightSeatLayout from "../Layouts/Inflight/InflightSeatLayout";

const SeatMapCard = ({ flight, page, layout = undefined }) => {
  console.log(flight);
  const [data, setdata] = useState([]);

  useEffect(() => {
    axiosRequest
      .get("/passenger_list")
      .then((result) => {
        console.log(result);
        setdata(
          result.data.filter((pax) => {
            return pax.slot === flight;
          })
        );
      })

      .catch((e) => console.log(e));
  }, [flight]);

  let seatArray = [];

  if (data.length > 0) {
    for (let i = 0; i < data.length; i++) {
      seatArray.push(data[i].seat);
    }
  }

  return (
    <>
      {page === "checkin" ? (
        <div className="checkin-seat-layout">
          <CheckinSeatLayout seatList={seatArray} slot={flight} />
        </div>
      ) : page === "inflight" ? (
        <div className="inflight-seat-layout">
          <InflightSeatLayout paxList={data} slot={flight} layout={layout} />
        </div>
      ) : null}
    </>
  );
};

export default SeatMapCard;
