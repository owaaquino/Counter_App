import React from "react";
import Counter from "./Counter";
import styled from "styled-components";
import PropTypes from "prop-types";

const ItemList = styled.li`
  list-style: none;
  width: 60%;
  padding: 10px;
  border-radius: 2px;
  margin: 0;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  background-color: #e5e5e5;
  @media (max-width: 930px) {
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  & > .removeBtn {
    justify-self: start;
    background: none;
    border: none;
    font-weight: 600;
    font-size: 1.1em;
    color: #cd594a;
    margin-right: 10px;
    &:hover {
      color: #cccccc;
      cursor: pointer;
    }
  }
  & > p {
    flex-grow: 2;
    justify-self: start;
    margin: 0;
    @media (max-width: 930px) {
      flex-grow: 0;
      margin-right: 5px;
    }
  }
  & > span {
    justify-self: end;
  }
`;
const Item = props => {
  return (
    <ItemList>
      <button
        className="removeBtn"
        onClick={() => props.removeItem(props.index)}
      >
        x
      </button>
      <p>{props.itemName}</p>
      <span>
        <Counter
          index={props.index}
          changeCount={props.changeCount}
          countValue={props.count}
        />
      </span>
    </ItemList>
  );
};

Item.propTypes = {
  itemName: PropTypes.string.isRequired,
  changeCount: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired
};

export default Item;
