import { axiosRequest } from "../../apis/apis";

export const getFlightId = (value) => {
  axiosRequest.get("/flight_details").then((response) => {
    response.data.forEach((flight) => {
      if (flight.slot === value) {
        return flight.id;
      }
    });
  });
};
