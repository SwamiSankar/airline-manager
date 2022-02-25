import { axiosRequest } from "../../apis/apis";

export const getFlightId = (value) =>
  axiosRequest
    .get("/flight_details")
    .then(
      (response) =>
        response.data.find((flight) => flight.sourcetime === value).id
    )
    .catch((error) => console.log(error));
