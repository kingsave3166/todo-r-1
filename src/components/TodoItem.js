import React, { Component } from "react";
import ReactDOM from "react-dom";

class TodoItem extends Component {
  render() {
    return (
      // jsx component recevie a style as js object, first { } is por interpreting js
      // and second {} in style variable is the js object.
      <li>
        <span
          style={{ textDecoration: this.props.done ? "line-through" : "none" }}
        >
          {this.props.name}
        </span>{" "}
        &nbsp;
        <a href="#" onClick={this.props.onToggleDone}>
          {this.props.done ? "Mark as not done" : "Mark as done"}
        </a>
      </li>
    );
  }
}

export default TodoItem;
