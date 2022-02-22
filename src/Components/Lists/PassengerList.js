import React, { useEffect, useState } from "react";
import { axiosRequest } from "../../apis/apis";

let checkmark = "\u2713";
let crossmark = "\u2718";
const PassengerList = ({ flight }) => {
  const [data, setdata] = useState([]);

  // let pax_list = [];
  // let filtered_list = [];

  // const addPax = (arr) => {
  //   filtered_list = arr.filter((pax) => {
  //     pax.slot == flight;
  //   });
  //   return filtered_list;
  // };
  useEffect(() => {
    axiosRequest
      .get("/passenger_list")
      .then((result) => {
        setdata(
          result.data.filter((pax) => {
            return pax.slot === flight;
          })
        );
      })

      .catch((e) => console.log(e));
  }, [flight]);

  console.log(data);

  if (!data) return null;

  return (
    <div className="passenger-list-table">
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
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.slot}</td>
              <td>{item.seat}</td>
              <td>{item.preference}</td>
              <td>{item.ancillary ? "\u2713" : "\u2718"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PassengerList;
