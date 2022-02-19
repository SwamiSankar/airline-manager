import React from "react";
import CheckinSeatElement from "./CheckinSeatElement";

const CheckinSeatRow = ({ seatRow, seatList, isSelected, assignDetails }) => {
  return (
    <>
      {seatRow.map((seat) => {
        return seatList.includes(seat) ? (
          <CheckinSeatElement
            seat={seat}
            classValue="seat-checkbox-existing"
            isCheckedIn={true}
          />
        ) : (
          <CheckinSeatElement
            seat={seat}
            classValue="seat-checkbox"
            isCheckedIn={false}
            isSelected={isSelected}
            assignDetails={assignDetails}
          />
        );
      })}
    </>
  );
};

export default CheckinSeatRow;
