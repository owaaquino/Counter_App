import React, { Component } from "react";
import Form from "./components/Form";
import List from "./components/List";
import Total from "./components/Total";
import Title from "./components/Title";
import Footer from "./components/Footer";

class App extends Component {
  state = {
    itemCounter: {}
  };

  componentDidUpdate() {
    localStorage.setItem("counterApp", JSON.stringify(this.state.itemCounter));
  }

  componentDidMount() {
    const localStorageRef = localStorage.getItem("counterApp");
    if (localStorageRef) {
      this.setState({
        itemCounter: JSON.parse(localStorageRef)
      });
    }
  }

  addItemToList = item => {
    const items = { ...this.state.itemCounter };
    items[`item${Date.now()}`] = item;
    this.setState({
      itemCounter: items
    });
  };

  removeItemToList = item => {
    const items = { ...this.state.itemCounter };
    delete items[item];
    this.setState({
      itemCounter: items
    });
  };

  handleCountChange = (index, action) => {
    this.setState(prevState => ({
      count: (prevState.itemCounter[index].count += action)
    }));
  };

  render() {
    return (
      <div>
        <div className="App">
          <Title />
          <Form addItem={this.addItemToList} />
          <List
            lists={this.state.itemCounter}
            removeItem={this.removeItemToList}
            changeCount={this.handleCountChange}
          />
          <Total total={this.state.itemCounter} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
