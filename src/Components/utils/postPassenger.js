import { axiosRequest } from "../../apis/apis";

export const postPassenger = (passenger) => {
  let id = passenger.id;
  axiosRequest
    .put(`/passenger_list_update/${id}`, passenger)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => console.log(error));
};
