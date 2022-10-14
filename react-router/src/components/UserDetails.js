import React from "react";
import { useParams } from "react-router-dom";

export const UserDetails = () => {
  const params = useParams();
  const userId = params.userId;
  console.log(params);
  return <div>Details about user {userId}</div>;
};
