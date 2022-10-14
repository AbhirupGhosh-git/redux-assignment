import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../redux/user/userAction";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h2`
  font-size: 30px;
  text-decoration: underline;
  text-align: center;
`;

const Form = styled.form`
  text-align: center;
`;

const Row = styled.div`
  display: flex;
  margin: 5px 0;
`;

const Label = styled.label`
  margin-left: 20px;
  text-align: left;
  flex: 1;
`;

const Button = styled.button`
  border: none;
  margin: 20px 0;
  background-color: #6699ff;
  font-size: 16px;
  padding: 8px 12px;
  border-radius: 50px;
  color: #fff;
`;

const Error = styled.p`
  color: red;
  font-size: 18px;
  font-weight: bold;
`;

const UserContainer = (props) => {
  const navigate = useNavigate();

  const [isError, setIsError] = useState("");

  useEffect(() => {
    props.fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dataFromStore = props.data;

  const usersData = dataFromStore.users;
  // console.log(usersData);

  let userIds = [];

  const showDetails = (event) => {
    event.preventDefault();

    userIds = [];
    usersData.map((user) =>
      Object.entries(event.target).map((userId) => {
        // console.log(user.id);
        // console.log(userId[1].id);

        return userId[1].nodeName === "INPUT" && userId[1].checked
          ? Number(user.id) === Number(userId[1].id)
            ? userIds.push(user)
            : null
          : "";
      })
    );

    // console.log(event.target.id);

    if (userIds.length > 0) {
      setIsError("");
      navigate("/details", { state: { data: userIds } });
    } else {
      setIsError(
        <Error>🛑 Please select at least one employee name. 🛑</Error>
      );
    }
  };
  // console.log(usersData);
  // usersData.map((ele) => console.log(ele));
  return dataFromStore.loading ? (
    <Heading>Fetching Data From Server</Heading>
  ) : dataFromStore.err ? (
    <Heading>{dataFromStore.err}</Heading>
  ) : (
    <HomePage>
      <Heading> Welcome</Heading>
      <Form onSubmit={showDetails}>
        {usersData.map((user) => (
          <Row key={user.id}>
            <input type="checkbox" id={user.id} value={user.id} />
            <Label htmlFor={user.id}>
              {user.firstName} {user.lastName}
            </Label>
          </Row>
        ))}
        <Button type="submit">Submit</Button>
      </Form>
      {isError}
    </HomePage>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(fetchUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
