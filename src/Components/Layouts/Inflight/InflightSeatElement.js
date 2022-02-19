import React from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import FoodChange from "./FoodChange";
import AncillaryChange from "./AncillaryChange";

const InflightSeatElement = ({
  seat,
  classValue,
  tippyValue,
  value,
  changeToggleValue = undefined,
  changeFoodPreference = undefined,
}) => {
  return classValue === "seat-checkbox-notcheckedin" ? (
    <Tippy content="This seat is not checkedIn">
      <li className="seat">
        <input type="checkbox" className={classValue} id={seat} disabled />
        <label htmlFor={seat}>{seat}</label>
      </li>
    </Tippy>
  ) : tippyValue === "ancillary" ? (
    <Tippy
      content={
        <AncillaryChange
          ancValue={value}
          changeToggleValue={changeToggleValue}
        />
      }
      interactive={true}
    >
      <li className="seat">
        <input type="checkbox" className={classValue} id={seat} disabled />
        <label htmlFor={seat}>{seat}</label>
      </li>
    </Tippy>
  ) : tippyValue === "food" ? (
    <Tippy
      content={
        <FoodChange
          foodValue={value}
          changeFoodPreference={changeFoodPreference}
        />
      }
      interactive={true}
    >
      <li className="seat">
        <input type="checkbox" className={classValue} id={seat} disabled />
        <label htmlFor={seat}>{seat}</label>
      </li>
    </Tippy>
  ) : null;
};

export default InflightSeatElement;
