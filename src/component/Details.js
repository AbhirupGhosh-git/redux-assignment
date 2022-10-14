import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const DetailsPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Heading = styled.h2`
  font-size: 30px;
  text-decoration: underline;
`;

const SubHeading = styled.span`
  font-weight: bold;
  margin-right: 5px;
  width: 50%;
  text-align: right;
`;

const Data = styled.span`
  width: 50%;
  word-break: break-all;
`;

const FlexBox = styled.div`
  display: flex;

  justify-content: center;
  flex-wrap: wrap;
  padding: 10px;
`;

const Card = styled.div`
  background-image: linear-gradient(to right bottom, #b3ccff, #bb99ff);
  border-radius: 10px;
  padding: 10px;
  max-width: 300px;
  flex: 1 1 300px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-bottom: 10px;
  }

  div {
    margin: 5px 0;
    display: flex;
    width: 100%;
  }
`;

const Button = styled.button`
  border: none;
  margin: 20px 0;
  background-color: #6699ff;
  font-size: 16px;
  padding: 8px 12px;
  border-radius: 50px;
  color: #fff;
  width: 100px;
`;

const Details = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    !location.state && navigate(-1);
  }, [location.state, navigate]);

  return (
    location.state && (
      <DetailsPage>
        <Heading>Employee Details</Heading>
        <FlexBox>
          {location.state.data.map((user) => (
            <Card key={user.id}>
              <img src={user.imageUrl} alt="Profile Pic" />
              <div>
                <SubHeading>ID:</SubHeading> <Data>{user.id}</Data>
              </div>
              <div>
                <SubHeading>Name:</SubHeading>{" "}
                <Data>
                  {user.firstName} {user.lastName}
                </Data>
              </div>
              <div>
                <SubHeading>Date Of Birth:</SubHeading> <Data>{user.dob}</Data>
              </div>
              <div>
                <SubHeading>Age:</SubHeading> <Data>{user.age}</Data>
              </div>
              <div>
                <SubHeading>Contact Number:</SubHeading>{" "}
                <Data>{user.contactNumber}</Data>
              </div>
              <div>
                <SubHeading>Email ID:</SubHeading> <Data>{user.email}</Data>
              </div>
              <div>
                <SubHeading>Address:</SubHeading> <Data>{user.address}</Data>
              </div>
              <div>
                <SubHeading>Salary:</SubHeading> <Data>₹{user.salary}</Data>
              </div>
            </Card>
          ))}
        </FlexBox>
        <Button onClick={() => navigate(-1)}>Back</Button>
      </DetailsPage>
    )
  );
};

export default Details;
