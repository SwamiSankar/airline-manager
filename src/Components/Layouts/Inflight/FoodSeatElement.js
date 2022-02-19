import React, { useEffect, useState } from "react";
import { postPassenger } from "../../utils/postPassenger";
import InflightSeatElement from "./InflightSeatElement";

const FoodSeatElement = ({ paxList, seat }) => {
  const [passenger, setPassenger] = useState(() => {
    let passenger = {};
    for (let i = 0; i < paxList.length; i++) {
      if (paxList[i].seat.includes(seat)) {
        return (passenger = paxList[i]);
      }
    }
  });

  const changeFoodPreference = (value) => {
    postPassenger({ ...passenger, preference: value });
    setPassenger((passenger) => ({
      ...passenger,
      preference: value,
    }));
  };

  return (
    <>
      {passenger?.preference === "veg" ? (
        <InflightSeatElement
          seat={seat}
          classValue="seat-checkbox-veg"
          tippyValue="food"
          value="veg"
          changeFoodPreference={changeFoodPreference}
        />
      ) : passenger?.preference === "non-veg" ? (
        <InflightSeatElement
          seat={seat}
          classValue="seat-checkbox-nonveg"
          tippyValue="food"
          value="non-veg"
          changeFoodPreference={changeFoodPreference}
        />
      ) : passenger?.preference === "no preference" ? (
        <InflightSeatElement
          seat={seat}
          classValue="seat-checkbox-nopref"
          tippyValue="food"
          value="no preference"
          changeFoodPreference={changeFoodPreference}
        />
      ) : (
        <InflightSeatElement
          seat={seat}
          classValue="seat-checkbox-notcheckedin"
        />
      )}
    </>
  );
};

export default FoodSeatElement;
