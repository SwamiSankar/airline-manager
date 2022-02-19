import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const CheckinSeatElement = ({
  seat,
  classValue,
  isCheckedIn,
  isSelected,
  assignDetails,
}) => {
  const handleOnChange = () => {
    isSelected();
    const element = document.querySelector(`#${seat}`);

    assignDetails(element.id);
  };
  return (
    <>
      {isCheckedIn ? (
        <Tippy content="Passenger Already Checked In">
          <li className="seat">
            <input type="checkbox" className={classValue} id={seat} />
            <label htmlFor={seat}>{seat}</label>
          </li>
        </Tippy>
      ) : (
        <li className="seat">
          <input
            type="checkbox"
            className={classValue}
            id={seat}
            onChange={handleOnChange}
          />
          <label htmlFor={seat}>{seat}</label>
        </li>
      )}
    </>
  );
};

export default CheckinSeatElement;
