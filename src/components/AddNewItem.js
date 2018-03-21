import React, {Component} from 'react';
import firebase from 'firebase';

class AddNewItem extends Component {

  addNew = () => {
    const newItem = {
      title: 'Заголовок',
      text: 'текст'
    };
    firebase.database().ref().push(newItem);
  };

  render() {
    return (
      <button onClick={this.addNew} className="todo-new-item">
        добавить новую задачу
      </button>
    );
  }
}

export default AddNewItem;