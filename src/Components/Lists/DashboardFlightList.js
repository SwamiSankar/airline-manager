import React, { useEffect, useState } from "react";
import { axiosRequest } from "../../apis/apis";

const DashboardFlightList = () => {
  const [flightData, setflightData] = useState([]);
  useEffect(() => {
    axiosRequest.get("/available_slots").then((result) => {
      console.log(result);
    });
  }, []);
  return <div>DashboardFlightList</div>;
};

export default DashboardFlightList;
