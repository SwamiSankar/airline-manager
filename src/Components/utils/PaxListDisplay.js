import React, { useCallback, useEffect, useRef, useState } from "react";
import useInfiniteScroll from "../Hooks/useInfiniteScroll";

const PaxListDisplay = () => {
  const [pageNumber, setpageNumber] = useState(1);

  const { loading, error, isThere, passengers } = useInfiniteScroll(pageNumber);

  const observer = useRef();
  const lastElement = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && isThere) {
          setpageNumber((prevPagenumber) => prevPagenumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, isThere]
  );

  console.log(pageNumber);

  return (
    <>
      <div>{loading && "Loading ..."}</div>
      <div> {error && "Error ..."}</div>
      <div className="dashboard-paxlist-display">
        <h3>List of Passengers</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Departure Time</th>
              <th>Seat</th>
              <th>Food Preference</th>
              <th>Ancillary Service</th>
            </tr>
          </thead>
          <tbody>
            {passengers.map((passenger, index) => {
              if (passengers.length === index + 1) {
                return (
                  <tr ref={lastElement} key={passenger.id}>
                    <td>{passenger.name}</td>
                    <td>{passenger.age}</td>
                    <td>{passenger.slot}</td>
                    <td>{passenger.seat}</td>
                    <td>{passenger.preference}</td>
                    <td>{passenger.ancillary ? "\u2713" : "\u2718"}</td>
                  </tr>
                );
              } else {
                return (
                  <tr key={passenger.id}>
                    <td>{passenger.name}</td>
                    <td>{passenger.age}</td>
                    <td>{passenger.slot}</td>
                    <td>{passenger.seat}</td>
                    <td>{passenger.preference}</td>
                    <td>{passenger.ancillary ? "\u2713" : "\u2718"}</td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PaxListDisplay;
