import React from "react";
import styled from "styled-components";

const PageTitle = styled.div`
  text-align: center;
  & > h2 {
    font-size: 1.6em;
  }
`;
const Title = props => {
  return (
    <PageTitle>
      <h2>Counter Application</h2>
    </PageTitle>
  );
};

export default Title;
