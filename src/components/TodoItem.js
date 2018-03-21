import React, {Component} from 'react';
import firebase from 'firebase';
import TextBlock from "./TextBlock";

class TodoItem extends Component {

  removeItem = () => {
    let commentID = this.props.id;
    firebase.database().ref().child(commentID).remove();
  };

  render() {
    return (
      <div className="todo-item">
        <div className="todo-item__topline">
          <TextBlock id={this.props.id} type={'title'} className={'todo-item__title'} text={this.props.title}/>
          <button onClick={this.removeItem} className="todo-item__remove">x</button>
        </div>
        <TextBlock id={this.props.id} type={'text'} className={'todo-item__text'} text={this.props.text}/>
      </div>
    );
  }
}

export default TodoItem;