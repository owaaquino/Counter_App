import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const CounterForm = styled.form`
  margin-top: 20px;
  text-align: center;
  & > input {
    padding: 10px;
    border: 1px solid #6db5ca;
    width: 40%;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    @media (max-width: 930px) {
      display: block;
      width: 100%;
      margin: 0;
      margin-bottom: 10px;
      padding: 5px;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
  & > button {
    width: 10%;
    color: #fefefe;
    background-color: #6db5ca;
    border: none;
    padding: 12px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    font-weight: 600;
    @media (max-width: 930px) {
      width: 50%;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      display: block;
      margin: 0 auto;
      &::after {
        content: "Add";
        margin-left: 5px;
      }
    }
  }
`;
class Form extends Component {
  addCounterToList  = e => {
    e.preventDefault();
    const newItem = {
      name: e.target.elements.counterName.value,
      count: 0
    };
    this.props.addItem(newItem);
    e.target.reset();
  };
  render() {
    return (
      <CounterForm onSubmit={this.addCounterToList}>
        <input
          type="text"
          name="counterName"
          placeholder="Enter Name"
          required
        />
        <button>+</button>
      </CounterForm>
    );
  }
}

Form.propTypes = {
  addItem: PropTypes.func.isRequired
};

export default Form;
