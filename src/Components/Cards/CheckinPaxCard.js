import React, { useEffect, useState } from "react";
import { axiosRequest } from "../../apis/apis";

const CheckinPaxCard = ({ seat, slot }) => {
  const [passenger, setpassenger] = useState({});

  useEffect(() => {
    axiosRequest
      .get(`/passenger_list/${seat}`)
      .then((response) =>
        setpassenger(
          response.data.filter((pax) => {
            return pax.slot === slot;
          })
        )
      )
      .catch((error) => console.log(error));
  }, [seat]);

  console.log(passenger.name);

  if (!passenger) return null;

  return (
    <div className="checkin-passenger-card" id={seat}>
      <ul>
        <li>
          <strong>Name:</strong> {passenger[0]?.name}
        </li>
        <li>
          <strong>Age:</strong> {passenger[0]?.age}
        </li>
        <li>
          <strong>Seat:</strong> {passenger[0]?.seat}
        </li>
        <li>
          <strong>Preference:</strong> {passenger[0]?.preference}
        </li>
      </ul>
    </div>
  );
};

export default CheckinPaxCard;
