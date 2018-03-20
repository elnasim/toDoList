import React, {Component} from 'react';

class TodoItem extends Component {

  render() {
    return (
      <div className="todo-item">
        <div className="todo-item__topline">
          <div className="todo-item__title">{this.props.title}</div>
          <button id={this.props.id} onClick={this.props.remove} className="todo-item__remove">x</button>
        </div>
        <div className="todo-item__text">{this.props.text}</div>
      </div>
    );
  }
}

export default TodoItem;