import React, { Component } from "react";
import ReactDOM from "react-dom";

import TodoItem from "./TodoItem";
import TodoInput from "./TodoInput";

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      items: []
    };
  }

  handleAddItem(name) {
    // El método concat() se usa para unir dos o más arreglos. Este método
    // no cambia los arreglos existentes, sino que devuelve un nuevo arreglo.
    const newItems = this.state.items.concat({ name: name, done: false });
    this.setState({ items: newItems });
  }

  handleToggleDone(item) {
    // El método slice() devuelve una copia de una parte del array dentro
    // de un nuevo array empezando por inicio hasta fin (fin no requerido).
    // El array original no se modificará. Si inicio es omitido el valor por
    // defecto es 0. Si end es omitido, slice extrae hasta el final de la
    // secuencia (arr.length)
    const newItems = this.state.items.slice();
    newItems[newItems.indexOf(item)].done = !item.done;
    this.setState({ items: newItems });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.items.map((item, index) => (
            <TodoItem
              key={index}
              name={item.name}
              done={item.done}
              onToggleDone={this.handleToggleDone.bind(this, item)}
            />
          ))}
        </ul>
        <TodoInput onAddItem={this.handleAddItem.bind(this)} />
      </div>
    );
  }
}

export default TodoList;
