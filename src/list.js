import React, { Component } from "react";
import "./list.css";

export default class List extends Component {
  constructor(props) {
    super(props);
    //this.onClickClose = this.onClickClose.bind(this);
    //this.onClickDone = this.onClickDone.bind(this);
  }
  deleteItem = event => {
    this.props.deleteItem(event.target.value);
  };

  render() {
    return (
      <ul>
        {this.props.items.map((item, index) => (
          <li
            className="itemLi"
            key={index} /*onClick={props.deleteTask(index)}*/
          >
            <div>
              <span
                className="glyphicon glyphicon-ok icon"
                aria-hidden="true"
              />
              {item}
              <button
                value={index}
                type="button"
                className="close"
                onClick={this.deleteItem}
              >
                &times;
              </button>
            </div>
          </li>
        ))}
      </ul>
    );
  }
}
