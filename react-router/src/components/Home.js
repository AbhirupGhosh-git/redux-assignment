import React from "react";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <div>Home Page - {props.data}</div>
      <button onClick={() => navigate("order-summary", { replace: true })}>
        Place order
      </button>
    </>
  );
};

export default Home;
