import React from "react";
import CheckinSeatElement from "./CheckinSeatElement";

const CheckinSeatRow = ({
  seatRow,
  seatList,
  isSelected,
  assignDetails,
  formChecked,
  slot,
}) => {
  console.log(formChecked);
  return (
    <>
      {seatRow.map((seat) => {
        return seatList.includes(seat) || seat === formChecked ? (
          <CheckinSeatElement
            seat={seat}
            classValue="seat-checkbox-existing"
            isCheckedIn={true}
            slot={slot}
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
