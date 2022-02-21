import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import CheckinPaxCard from "../../Cards/CheckinPaxCard";

const CheckinSeatElement = ({
  seat,
  classValue,
  isCheckedIn,
  isSelected,
  assignDetails,
  slot,
}) => {
  const handleOnChange = () => {
    isSelected();
    const element = document.querySelector(`#${seat}`);

    assignDetails(element.id);
  };
  return (
    <>
      {isCheckedIn ? (
        <Tippy content={<CheckinPaxCard seat={seat} slot={slot} />}>
          <li className="seat">
            <input
              type="checkbox"
              className={classValue}
              id={seat}
              disabled="disabled"
            />
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
