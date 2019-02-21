# Counter App

A simple counter application.

**Goal:**

- Should be able to do a CRUD programming
- Persist data to the localstorage

**Features:**

- Add a named counter
- Remove an existing counter
- Increment and decrement counter
- Total of all counter available in the list
- Persist data

**Techs:**

- React.js
- Javascript ES6
- CSS
- HTML
- Chrome Local Storage

**Live links:**

- Hosted with Netlify -

# Notes

Prerequisites:

- Must install Nodejs on your unit
- Must install NPM on your unit
- Install create-react-app installed to your node module ( check out [https://github.com/facebook/create-react-app](https://github.com/facebook/create-react-app) for how to install the framework)
- Have a basic understanding of Javascript (ES6)
- Have a basic knowledge about React.js framework
- Styled Component is included in the dependencies of your npm

        npm install styled-component --save

## 1. Initialize and create basic Components

## App.js

Render our components to the site and update our future states.
```javascript
    import React, { Component } from "react";
    import Form from "./components/Form";
    import List from "./components/List";
    import Total from "./components/Total";
    import Title from "./components/Title";

    class App extends Component {

      render() {
        return (
          <div className="App">
            <Title />
            <Form />
            <List />
            <Total />
          </div>
        );
      }
    }

    export default App;
```
## Title.js

Is just a simple stateless components that display the application Title and Simple description of the app.
```javascript
    import React from "react";

    const Title = props => {
      return (
        <div>
          <h2>Counter Application</h2>
        </div>
      );
    };

    export default Title;
```
## Form.js

This component will consist of a single input text for creating or naming the counter.
```javascript
    import React, { Component } from "react";

    class Form extends Component {

      render() {
        return (
          <form>
            <input
              type="text"
              name="counterName"
              placeholder="Enter Name"
              required
            />
            <button>+</button>
          </form>
        );
      }
    }

    export default Form;
```
## List.js

Is an unordered list component that will receive manage the counters we created
```javascript
    import React from "react";
    import Item from "./Item";

    const List = props => {
      return (
        <ul>
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
        </ul>
      );
    };

    export default List;
```
## Item.js

Is a child component of <List />, this will render the new counter elements such as buttons, name, and counter.
```javascript
    import React from "react";
    import Counter from "./Counter";

    const Item = props => {
      return (
        <li>
          <button
            className="removeBtn"
          >
            x
          </button>
          <p> /* counter name will be displayed here */ </p>
          <span>
            <Counter />
          </span>
        </li>
      );
    };

    export default Item;
```
## Counter.js

Is a child component of <Item />, this will handle the increment and decrement function of every single counter
```javascript
    import React from "react";

    const Counter = props => {
      return (
        <div>
          <button
            className="ctnBtn increase"
          >
            {" "}
            +{" "}
          </button>
          <span> /* initial or current value of the counter*/ </span>
          <button
            className="ctnBtn decrease"
          >
            {" "}
            -{" "}
          </button>
        </div>
      );
    };

    export default Counter;
```
## Total.js

This will display the total value of all the counter in the list.
```javascript
    import React from "react";
    import styled from "styled-components";

      return (
        <div>
          <h3>Total</h3>
          <p>{getTotalCount}</p>
        </div>
      );
    };

    export default Total;
```
## 2. Setting and creating our first Counter (CREATE)

Let's first create our initial states. This will carry or store all the counters for our app.

## App.js
```javascript
    class App extends Component {
      state = {
        itemCounter: {}
      };
```
- we initialize our state itemCounter to an empty object.
```javascript
    addItemToList = item => {
        const items = { ...this.state.itemCounter };
        items[`item${Date.now()}`] = item;
        this.setState({
          itemCounter: items
        });
      };
```
- addItemToList is a method that allow us to update our existing state. We'll pass this on to our <Form /> component as props.
```javascript
    render() {
        return (
          <div className="App">
            <Title />
            <Form addItem={this.addItemToList} />
            <List />
            <Total />
          </div>
        );
      }
    }
```
- Now we can use the addItemToList method to our <Form />

## Form.js
```javascript
    class Form extends Component {

      addCounterToList = e => {
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
          <form onSubmit={this.addCounterToList}>
            <input
              type="text"
              name="counterName"
              placeholder="Enter Name"
              required
            />
            <button>+</button>
          </form>
        );
      }
    }
```
- addCounterToList is a method that will create a new item / counter into our state. This is an object that will be consist of a name that is based on the input text value and initialize the count value to 0.  Then using the addItemToList method from our App.js we'll be able to update our itemCounter state. Making this we'll be able to create a new counter inside our state that we can use to be displayed into our application.

## 3. Displaying our counter into our List. (READ)

With our states having values from our input box, we can now display the states value into our application for proper user experience.

## App.js
```javascript
    render() {
        return (
          <div className="App">
            <Title />
            <Form addItem={this.addItemToList} />
            <List
              lists={this.state.itemCounter}
            />
            <Total />
          </div>
        );
      }
    }
```
- We now just need to pass our states to our List component as props.

## List.js
```javascript
    const List = props => {
      return (
        <ul>
          {Object.keys(props.lists).map(key => (
            <Item
              key={key}
              index={key}
              itemName={props.lists[key].name}
              count={props.lists[key].count}
            />
          ))}
        </ul>
      );
    };
```
- Important key on this code is the iteration or looping of all the data stored in our state. So the code will map() all the objects inside our state itemCouter and pass it as a props.
- key={key} is always required when iterating into the group of object or array. This will help React to identify the list item you have.
- index={key} we create and index props so that we can easily select our list item for our other function.
- itemName is the object name value.
- count is the object count number
- note that nothing is displayed yet because there are no html element being rendered here.

## Item.js
```javascript
    const Item = props => {
      return (
        <li>
          <button>
            x
          </button>
          <p>{props.itemName}</p>
          <span>
            <Counter
              countValue={props.count}
            />
          </span>
        </li>
      );
    };
```
- With our props from the List.js, we can now use them to be displayed into our component. Here we're displaying the object name as a paragraph and then passing again the count value as a props to another component.

## Counter.js
```javascript`
    const Counter = props => {
      return (
        <div>
          <button
            className="ctnBtn increase"
          >
            {" "}
            +{" "}
          </button>
          <span>{props.countValue}</span>
          <button
            className="ctnBtn decrease"
          >
            {" "}
            -{" "}
          </button>
        </div>
      );
    };
```
- with our count value we can now display the current value of the object count.

## 4. Incrementing and Decrementing count value (Update)

- In this application the one we're going to update or change is the counter value.

## App.js
```javascript
    handleCountChange = (index, action) => {
        this.setState(prevState => ({
          count: (prevState.itemCounter[index].count += action)
        }));
      };
```
- In our App.js file, we create a function handler that will allow us to update our state count value. This function accepts two argument or parameters, first the *index* that will determine which object to be update, then the *action* that will determine how the changes should be done to our count value (is it add or subtract)
```javascript
    <List
              lists={this.state.itemCounter}
              changeCount={this.handleCountChange}
            />
```
- We pass our handleCountChange() function as props to the List component.

## List.js
```javascript
    <Item
              key={key}
              index={key}
              itemName={props.lists[key].name}
              count={props.lists[key].count}
              changeCount={props.changeCount}
            />
```
- Then pass it again to our Item component.

## Item.js
```javascript
    <div>
          <button>
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
        </div>
```
- Then at last we pass it to the Counter component.

## Counter.js
```javascript
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
```
- As you can see, we add the function to be done when we clicked the button. Then as the required parameters, we pass the index value of the current item, then pass the action of either add 1 or subtract 1. With this our counter should be able to increment and decrement
- Note: This is not really the best way to do this because we pass it so many times into a components. Usually we should use a library or other react apis to pass this. But for this exercise we wanted to learn how to pass the stats trough the components.

## 5. Removing a Counter (DELETE)

- Now for our last task, we should be able to remove our added counter.

## App.js
```javascript
    	removeItemToList = item => {
        const items = { ...this.state.itemCounter };
        delete items[item];
        this.setState({
          itemCounter: items
        });
      };
```
- In our App.js file, we create a new function that will allow us to remove a counter based on the object index. This will accept one argument or parameters, item will get the specific index of that button belongs to.
```javascript
    <List
              lists={this.state.itemCounter}
              removeItem={this.removeItemToList}
              changeCount={this.handleCountChange}
            />
```
- we pass our removeItemToList() function as props into the List component.

## List.js
```javascript
    <Item
              key={key}
              index={key}
              itemName={props.lists[key].name}
              count={props.lists[key].count}
              removeItem={props.removeItem}
              changeCount={props.changeCount}
            />
```
- Then pass it to our Item component from List component

## Item.js
```javascript
    const Item = props => {
      return (
        <div>
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
        </div>
      );
    };
```
- Now we assign the function to our button, that when it was clicked it should pass the index value of the item then remove it to our state.

## 6. Bonus: Total of all counters

- For this bonus feature, we'll get the sum of all counters value.

## App.js
```javascript
    <Total total={this.state.itemCounter} />
```
- Pass all the object of the state to our Total component

## Total.js
```javascript
    const Total = props => {
      const getTotalCount = Object.keys(props.total).reduce((total, key) => {
        return total + props.total[key].count;
      }, 0);

      return (
        <div>
          <h3>Total</h3>
          <p>{getTotalCount}</p>
        </div>
      );
    };
```
- We use reduce() api to get the count value in every object available in our state, then add them to a variable named total.
- Then we need to call the getTotalCount to our paragraph element for display.