import React, { useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import * as GET from "../gql/Queries";

const GetDesigners = () => {
  const { loading, error, data } = useQuery(GET.GET_BRANDS);
  useEffect(() => {
    if (data) {
      console.log(data);
    }
  }, [data]);
  console.log(data);

  return <div>GetDesigners</div>;
};

export default GetDesigners;
