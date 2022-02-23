import React, { useContext, useEffect, useState } from "react";

import { Icon, Table, Button, Modal } from "semantic-ui-react";
import { axiosRequest } from "../../apis/apis";
import { AppContext } from "../../App";
import FlightEditModal from "../Modals/FlightEditModal";
import { postPassenger } from "../utils/postPassenger";

const DashboardFlightList = () => {
  const [flightData, setflightData] = useState([]);
  const { state } = useContext(AppContext);
  let newSlot = state.slot.newSlot;
  let oldSlot = state.slot.oldSlot;
  let passenger_list = [];

  useEffect(() => {
    axiosRequest.get("/flight_details").then((result) => {
      setflightData(result.data);
    });
  }, []);

  const changeSlotValue = () => {
    axiosRequest
      .get("/passenger_list")
      .then((result) => {
        result.data.forEach((passenger) => {
          if (passenger.slot === oldSlot) {
            passenger_list.push(passenger);
          }
        });
        passenger_list.forEach((passenger) => {
          postPassenger({ ...passenger, slot: newSlot });
        });
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (newSlot) {
      changeSlotValue();
    }
  }, [newSlot]);

  console.log(passenger_list);

  return (
    <div className="flight-dashboard-table">
      <Table compact celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Source</Table.HeaderCell>
            <Table.HeaderCell>Destination</Table.HeaderCell>
            <Table.HeaderCell>Source Time</Table.HeaderCell>
            <Table.HeaderCell>Destination Time</Table.HeaderCell>
            <Table.HeaderCell>Edit Details</Table.HeaderCell>
            <Table.HeaderCell>Delete Flight</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {flightData.map((item) => (
            <Table.Row>
              <Table.Cell>{item.source}</Table.Cell>
              <Table.Cell>{item.destination}</Table.Cell>
              <Table.Cell>{item.sourcetime}</Table.Cell>
              <Table.Cell>{item.destinationtime}</Table.Cell>
              <Table.Cell>
                <FlightEditModal
                  id={item.id}
                  source={item.source}
                  destination={item.destination}
                  sourcetime={item.sourcetime}
                  destinationtime={item.destinationtime}
                />
              </Table.Cell>
              <Table.Cell selectable negative>
                <Button color="red">
                  <Icon name="trash" />
                  Delete
                </Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default DashboardFlightList;
