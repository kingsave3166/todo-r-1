import React, { Component } from "react";

class TodoInput extends Component {
  handleSubmit(event) {
    event.preventDefault();
    this.props.onAddItem(this.refs.input.value);
    this.refs.input.value = "";
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" ref="input" />
        <button>Add new item</button>
      </form>
    );
  }
}

export default TodoInput;
