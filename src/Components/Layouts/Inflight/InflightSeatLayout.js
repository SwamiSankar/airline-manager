import React from "react";
import { generateSeatArray } from "../../utils/generateSeatArray";
import { generateSeatNumber } from "../../utils/generateSeatNumber";
import InflightSeatRow from "./InflightSeatRow";

const InflightSeatLayout = ({ paxList, layout }) => {
  console.log(paxList);
  let seats = generateSeatNumber();

  let seats_set = generateSeatArray(seats);

  const row_number = 8;

  if (!layout) return null;
  return (
    <ol className="seat-cabin">
      {[...Array(row_number)].map((e, i) => {
        return (
          <>
            <li className={`row row--${i + 1}`}>
              <ol className="seats" type="A">
                {seats_set.map((seat_row, j) => {
                  return i === j ? (
                    <InflightSeatRow
                      seatRow={seat_row}
                      paxList={paxList}
                      layout={layout}
                    />
                  ) : null;
                })}
              </ol>
            </li>
          </>
        );
      })}
    </ol>
  );
};

export default InflightSeatLayout;
