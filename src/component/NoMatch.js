import React from "react";
import styled from "styled-components";

const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.h1`
  font-size: 30px;
`;

const NoMatch = () => {
  return (
    <FlexBox>
      <Heading>Page not found 😞</Heading>
    </FlexBox>
  );
};

export default NoMatch;
