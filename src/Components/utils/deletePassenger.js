import { axiosRequest } from "../../apis/apis";

export const deletePassenger = (id) => {
  axiosRequest
    .delete(`/passenger_list_update/${id}`)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => console.log(error));
};
