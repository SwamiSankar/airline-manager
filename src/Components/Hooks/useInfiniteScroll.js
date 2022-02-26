import React, { useState, useEffect } from "react";
import { axiosRequest } from "../../apis/apis";

const useInfiniteScroll = (pageNumber) => {
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(false);
  const [passengers, setpassengers] = useState([]);
  const [isThere, setisThere] = useState(false);

  useEffect(() => {
    setloading(true);
    seterror(false);

    axiosRequest
      .get(`/passenger_list?_limit=5&_page=${pageNumber}`)
      .then((response) => {
        setpassengers((passenger) => {
          return [...passenger, ...response.data];
        });
        setisThere(response.data.length > 0);
        setloading(false);
      })
      .catch((error) => {
        console.log(error);
        seterror(true);
      });
  }, [pageNumber]);

  return { loading, error, isThere, passengers };
};

export default useInfiniteScroll;
