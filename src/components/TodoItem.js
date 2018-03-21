import React, {Component} from 'react';
import firebase from 'firebase';

class TodoItem extends Component {

  removeItem = () => {
    let commentID = this.props.id;
    firebase.database().ref().child(commentID).remove();
  };

  render() {
    return (
      <div className="todo-item">
        <div className="todo-item__topline">
          <div className="todo-item__title">{this.props.title}</div>
          <button onClick={this.removeItem} className="todo-item__remove">x</button>
        </div>
        <div className="todo-item__text">{this.props.text}</div>
      </div>
    );
  }
}

export default TodoItem;