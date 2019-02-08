import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./index.css";
import List from "./list.js";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      items: []
    };
  }

  onChange = event => {
    //update this.state.task every time the input changes
    this.setState({
      task: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    if (this.state.task !== "") {
      //add the new task to the tasks array
      this.setState({
        delete: "",
        items: [...this.state.items, this.state.task],
        task: ""
      });
    }
  };

  deleteItem = index => {
    let aux = this.state.items;
    aux.splice(index, 1);
    this.setState({
      items: aux
    });
  };

  render() {
    return (
      <div className="App">
        <div>
          <form onSubmit={this.onSubmit}>
            <input
              type="text"
              placeholder="new task"
              value={this.state.task}
              onChange={this.onChange}
            />
            <input type="submit" value="submit" />
          </form>
        </div>
        <div>
          <List items={this.state.items} deleteItem={this.deleteItem} />
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
