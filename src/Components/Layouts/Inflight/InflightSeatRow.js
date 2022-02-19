import React from "react";
import AncillarySeatElement from "./AncillarySeatElement";
import FoodSeatElement from "./FoodSeatElement";

const InflightSeatRow = ({ seatRow, paxList, layout }) => {
  return (
    <>
      {seatRow.map((seat) => {
        return layout === "preference" ? (
          <FoodSeatElement seat={seat} paxList={paxList} />
        ) : layout === "ancillary" ? (
          <AncillarySeatElement seat={seat} paxList={paxList} />
        ) : null;
      })}
    </>
  );
};

export default InflightSeatRow;
