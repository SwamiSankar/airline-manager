import React, { useEffect, useState } from "react";

import { generateSeatArray } from "../../utils/generateSeatArray";
import { generateSeatNumber } from "../../utils/generateSeatNumber";

import PassengerFormCard from "../../Cards/PassengerFormCard";

import CheckinSeatRow from "./CheckinSeatRow";

const CheckinSeatLayout = ({ seatList, slot }) => {
  const [selected, setselected] = useState(false);
  const [seatValue, setSeatValue] = useState("");

  useEffect(() => {}, [selected]);

  const isSelected = () => {
    setselected(!selected);
  };

  const assignDetails = (seat) => {
    setSeatValue(seat);
  };

  let seats = generateSeatNumber();

  let seats_set = generateSeatArray(seats);

  const row_number = 8;

  return (
    <ol className="seat-cabin">
      {[...Array(row_number)].map((e, i) => {
        return (
          <>
            <li className={`row row--${i + 1}`}>
              <ol className="seats" type="A">
                {seats_set.map((seat_row, j) => {
                  return i === j ? (
                    <CheckinSeatRow
                      seatRow={seat_row}
                      seatList={seatList}
                      isSelected={isSelected}
                      assignDetails={assignDetails}
                    />
                  ) : null;
                })}
              </ol>
            </li>
          </>
        );
      })}
      {selected ? <PassengerFormCard slot={slot} seat={seatValue} /> : null}
    </ol>

    // <ol className="seat-cabin">
    //   <li className="row row--1">
    //     <ol className="seats" type="A">
    //       <li className="seat">
    //         <input type="checkbox" className="seat-checkbox" id="A1" />
    //         <label htmlFor="A1">A1</label>
    //       </li>
    //       <li className="seat">
    //         <input type="checkbox" className="seat-checkbox" id="A2" />
    //         <label htmlFor="A2">A2</label>
    //       </li>
    //       <li className="seat">
    //         <input type="checkbox" className="seat-checkbox" id="A3" />
    //         <label htmlFor="A3">A3</label>
    //       </li>
    //       <li className="seat">
    //         <input type="checkbox" className="seat-checkbox" id="A4" />
    //         <label htmlFor="A4">A4</label>
    //       </li>
    //       <li className="seat">
    //         <input type="checkbox" className="seat-checkbox" id="A5" />
    //         <label htmlFor="A5">A5</label>
    //       </li>
    //       <li className="seat">
    //         <input type="checkbox" className="seat-checkbox" id="A6" />
    //         <label htmlFor="A6">A6</label>
    //       </li>
    //     </ol>
    //   </li>
    //   <li className="row row--2">
    //     <ol className="seats" type="A">
    //       <li className="seat">
    //         <input type="checkbox" className="seat-checkbox" id="B1" />
    //         <label htmlFor="B1">B1</label>
    //       </li>
    //       <li className="seat">
    //         <input type="checkbox" className="seat-checkbox" id="B2" />
    //         <label htmlFor="B2">B2</label>
    //       </li>
    //       <li className="seat">
    //         <input type="checkbox" className="seat-checkbox" id="B3" />
    //         <label htmlFor="B3">B3</label>
    //       </li>
    //       <li className="seat">
    //         <input type="checkbox" className="seat-checkbox" id="B4" />
    //         <label htmlFor="B4">B4</label>
    //       </li>
    //       <li className="seat">
    //         <input type="checkbox" className="seat-checkbox" id="B5" />
    //         <label htmlFor="B5">B5</label>
    //       </li>
    //       <li className="seat">
    //         <input type="checkbox" className="seat-checkbox" id="B6" />
    //         <label htmlFor="B6">B6</label>
    //       </li>
    //     </ol>
    //   </li>
    //   <li className="row row--3">
    //     <ol className="seats" type="A">
    //       <li className="seat">
    //         <input type="checkbox" className="seat-checkbox" id="C1" />
    //         <label htmlFor="C1">C1</label>
    //       </li>
    //       <li className="seat">
    //         <input type="checkbox" className="seat-checkbox" id="C2" />
    //         <label htmlFor="C2">C2</label>
    //       </li>
    //       <li className="seat">
    //         <input type="checkbox" className="seat-checkbox" id="C3" />
    //         <label htmlFor="C3">C3</label>
    //       </li>
    //       <li className="seat">
    //         <input type="checkbox" className="seat-checkbox" id="C4" />
    //         <label htmlFor="C4">C4</label>
    //       </li>
    //       <li className="seat">
    //         <input type="checkbox" className="seat-checkbox" id="C5" />
    //         <label htmlFor="C5">C5</label>
    //       </li>
    //       <li className="seat">
    //         <input type="checkbox" className="seat-checkbox" id="C6" />
    //         <label htmlFor="C6">C6</label>
    //       </li>
    //     </ol>
    //   </li>
    //   <li className="row row--4">
    //     <ol className="seats" type="A">
    //       <li className="seat">
    //         <input type="checkbox" className="seat-checkbox" id="D1" />
    //         <label htmlFor="D1">D1</label>
    //       </li>
    //       <li className="seat">
    //         <input type="checkbox" className="seat-checkbox" id="D2" />
    //         <label htmlFor="D2">D2</label>
    //       </li>
    //       <li className="seat">
    //         <input type="checkbox" className="seat-checkbox" id="D3" />
    //         <label htmlFor="D3">D3</label>
    //       </li>
    //       <li className="seat">
    //         <input type="checkbox" className="seat-checkbox" id="D4" />
    //         <label htmlFor="D4">D4</label>
    //       </li>
    //       <li className="seat">
    //         <input type="checkbox" className="seat-checkbox" id="D5" />
    //         <label htmlFor="D5">D5</label>
    //       </li>
    //       <li className="seat">
    //         <input type="checkbox" className="seat-checkbox" id="D6" />
    //         <label htmlFor="D6">D6</label>
    //       </li>
    //     </ol>
    //   </li>
    //   <li className="row row--5">
    //     <ol className="seats" type="A">
    //       <li className="seat">
    //         <input type="checkbox" className="seat-checkbox" id="E1" />
    //         <label htmlFor="E1">E1</label>
    //       </li>
    //       <li className="seat">
    //         <input type="checkbox" className="seat-checkbox" id="E2" />
    //         <label htmlFor="E2">E2</label>
    //       </li>
    //       <li className="seat">
    //         <input type="checkbox" className="seat-checkbox" id="E3" />
    //         <label htmlFor="E3">E3</label>
    //       </li>
    //       <li className="seat">
    //         <input type="checkbox" className="seat-checkbox" id="E4" />
    //         <label htmlFor="E4">E4</label>
    //       </li>
    //       <li className="seat">
    //         <input type="checkbox" className="seat-checkbox" id="E5" />
    //         <label htmlFor="E5">E5</label>
    //       </li>
    //       <li className="seat">
    //         <input type="checkbox" className="seat-checkbox" id="E6" />
    //         <label htmlFor="E6">E6</label>
    //       </li>
    //     </ol>
    //   </li>
    //   <li className="row row--6">
    //     <ol className="seats" type="A">
    //       <li className="seat">
    //         <input type="checkbox" className="seat-checkbox" id="F1" />
    //         <label htmlFor="F1">F1</label>
    //       </li>
    //       <li className="seat">
    //         <input type="checkbox" className="seat-checkbox" id="F2" />
    //         <label htmlFor="F2">F2</label>
    //       </li>
    //       <li className="seat">
    //         <input type="checkbox" className="seat-checkbox" id="F3" />
    //         <label htmlFor="F3">F3</label>
    //       </li>
    //       <li className="seat">
    //         <input type="checkbox" className="seat-checkbox" id="F4" />
    //         <label htmlFor="F4">F4</label>
    //       </li>
    //       <li className="seat">
    //         <input type="checkbox" className="seat-checkbox" id="F5" />
    //         <label htmlFor="F5">F5</label>
    //       </li>
    //       <li className="seat">
    //         <input type="checkbox" className="seat-checkbox" id="F6" />
    //         <label htmlFor="F6">F6</label>
    //       </li>
    //     </ol>
    //   </li>
    //   <li className="row row--7">
    //     <ol className="seats" type="A">
    //       <li className="seat">
    //         <input type="checkbox" className="seat-checkbox" id="G1" />
    //         <label htmlFor="G1">G1</label>
    //       </li>
    //       <li className="seat">
    //         <input type="checkbox" className="seat-checkbox" id="G2" />
    //         <label htmlFor="G2">G2</label>
    //       </li>
    //       <li className="seat">
    //         <input type="checkbox" className="seat-checkbox" id="G3" />
    //         <label htmlFor="G3">G3</label>
    //       </li>
    //       <li className="seat">
    //         <input type="checkbox" className="seat-checkbox" id="G4" />
    //         <label htmlFor="G4">G4</label>
    //       </li>
    //       <li className="seat">
    //         <input type="checkbox" className="seat-checkbox" id="G5" />
    //         <label htmlFor="G5">G5</label>
    //       </li>
    //       <li className="seat">
    //         <input type="checkbox" className="seat-checkbox" id="G6" />
    //         <label htmlFor="G6">G6</label>
    //       </li>
    //     </ol>
    //   </li>
    //   <li className="row row--8">
    //     <ol className="seats" type="A">
    //       <li className="seat">
    //         <input type="checkbox" className="seat-checkbox" id="H1" />
    //         <label htmlFor="H1">H1</label>
    //       </li>
    //       <li className="seat">
    //         <input type="checkbox" className="seat-checkbox" id="H2" />
    //         <label htmlFor="H2">H2</label>
    //       </li>
    //       <li className="seat">
    //         <input type="checkbox" className="seat-checkbox" id="H3" />
    //         <label htmlFor="H3">H3</label>
    //       </li>
    //       <li className="seat">
    //         <input type="checkbox" className="seat-checkbox" id="H4" />
    //         <label htmlFor="H4">H4</label>
    //       </li>
    //       <li className="seat">
    //         <input type="checkbox" className="seat-checkbox" id="H5" />
    //         <label htmlFor="H5">H5</label>
    //       </li>
    //       <li className="seat">
    //         <input type="checkbox" className="seat-checkbox" id="H6" />
    //         <label htmlFor="H6">H6</label>
    //       </li>
    //     </ol>
    //   </li>
    // </ol>
  );
};

export default CheckinSeatLayout;
