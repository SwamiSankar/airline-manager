import axios from "axios";

export const axiosRequest = axios.create({
  baseURL: "https://airline-manager.vercel.app/",
  // cancelToken: new axios.CancelToken((c) => (value = c)),
});
