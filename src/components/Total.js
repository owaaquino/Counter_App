import React from "react";
import styled from "styled-components";

const TotalDetails = styled.div`
  display: flex;
  margin: auto;
  padding: 10px;
  width: 60%;
  align-items: center;
  justify-content: space-around;
  background-color: #a8c8ff;
  color: #000000;
  & > h3 {
    margin: 0;
  }
  & > p {
    font-size: 1.2em;
    font-weight: 600;
    margin: 0;
  }
`;

const Total = props => {
  const getTotalCount = Object.keys(props.total).reduce((total, key) => {
    return total + props.total[key].count;
  }, 0);

  return (
    <TotalDetails>
      <h3>Total</h3>
      <p>{getTotalCount}</p>
    </TotalDetails>
  );
};

export default Total;
