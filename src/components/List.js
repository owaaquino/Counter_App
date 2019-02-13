import React from "react";
import Item from "./Item";
import styled from "styled-components";
import PropTypes from "prop-types";

const ListContainer = styled.ul`
  text-align: center;
  padding: 20px;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const List = props => {
  return (
    <ListContainer>
      {Object.keys(props.lists).map(key => (
        <Item
          key={key}
          index={key}
          itemName={props.lists[key].name}
          count={props.lists[key].count}
          removeItem={props.removeItem}
          changeCount={props.changeCount}
        />
      ))}
    </ListContainer>
  );
};

List.propTypes = {
  lists: PropTypes.object.isRequired,
  removeItem: PropTypes.func.isRequired,
  changeCount: PropTypes.func.isRequired
};

export default List;
