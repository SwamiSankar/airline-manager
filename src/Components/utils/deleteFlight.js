import { axiosRequest } from "../../apis/apis";
import { deletePassenger } from "./deletePassenger";

export const deleteFlight = (id, slot) => {
  axiosRequest
    .delete(`/flight_details_update/${id}`)
    .then((response) => {
      console.log(response);
      deletePassengers(slot);
    })
    .catch((error) => console.log(error));
};

const deletePassengers = (slot) => {
  axiosRequest.get("/passenger_list").then((result) => {
    result.data.forEach((passenger) => {
      if (passenger.slot === slot) {
        deletePassenger(passenger);
      }
    });
  });
};
