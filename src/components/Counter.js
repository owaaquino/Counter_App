import React from "react";
import styled from "styled-components";

const CounterBtn = styled.div`
  margin: 0;
  padding: 0;
  & > .ctnBtn {
    background: none;
    font-weight: 900;
    border: none;
    width: 30px;
    height: 30px;
    border-radius: 2px;
    color: #ffffff;
  }
  & > .increase {
    background-color: #00964b;
  }
  & > .decrease {
    background-color: #cd594a;
  }
  & > span {
    padding: 0 15px;
    font-size: 1.3em;
  }
`;
const Counter = props => {
  return (
    <CounterBtn>
      <button
        className="ctnBtn increase"
        onClick={() => props.changeCount(props.index, +1)}
      >
        {" "}
        +{" "}
      </button>
      <span>{props.countValue}</span>
      <button
        className="ctnBtn decrease"
        onClick={() => props.changeCount(props.index, -1)}
      >
        {" "}
        -{" "}
      </button>
    </CounterBtn>
  );
};

export default Counter;
