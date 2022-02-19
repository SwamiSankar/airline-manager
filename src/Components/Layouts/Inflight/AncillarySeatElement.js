import React, { useState } from "react";
import InflightSeatElement from "./InflightSeatElement";
import { postPassenger } from "../../utils/postPassenger";

const AncillarySeatElement = ({ paxList, seat }) => {
  const [passenger, setPassenger] = useState(() => {
    let passenger = {};
    for (let i = 0; i < paxList.length; i++) {
      if (paxList[i].seat.includes(seat)) {
        return (passenger = paxList[i]);
      }
    }
  });

  const changeToggleValue = (val) => {
    postPassenger({ ...passenger, ancillary: val });
    setPassenger((passenger) => ({ ...passenger, ancillary: val }));
  };

  return (
    <>
      {passenger?.ancillary === true ? (
        <InflightSeatElement
          seat={seat}
          classValue="seat-checkbox-ancillary-true"
          tippyValue="ancillary"
          value={true}
          changeToggleValue={changeToggleValue}
        />
      ) : passenger?.ancillary === false ? (
        <InflightSeatElement
          seat={seat}
          classValue="seat-checkbox-ancillary-false"
          tippyValue="ancillary"
          value={false}
          changeToggleValue={changeToggleValue}
        />
      ) : (
        <InflightSeatElement
          seat={seat}
          classValue="seat-checkbox-notcheckedin"
          tippyValue="ancillary"
        />
      )}
    </>
  );
};

export default AncillarySeatElement;
