import React from "react";
import CheckinSeatElement from "./CheckinSeatElement";

const CheckinSeatRow = ({
  seatRow,
  seatList,
  isSelected,
  assignDetails,
  formChecked,
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
