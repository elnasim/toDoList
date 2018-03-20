import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from "./components/TodoItem";
import firebase from "firebase";

const config = {
  apiKey: "AIzaSyBB1rxQPx_6zsKmuSd_mgyQIaCfmvLhpOE",
  authDomain: "todolist-93afa.firebaseapp.com",
  databaseURL: "https://todolist-93afa.firebaseio.com",
  projectId: "todolist-93afa",
  storageBucket: "todolist-93afa.appspot.com",
  messagingSenderId: "781591609204"
};

firebase.initializeApp(config);

class App extends Component {

  state = {
    data: [],
    counter: ''
  };

  componentDidMount() {
    let ref = firebase.database().ref();
    ref.on('value', (snapshot) => {
      let data = snapshot.val();
      if (data !== null) {
        this.setState({
          data: data,
          counter: data.length
        })
      }

    }, (error) => {
      alert('error connect db')
    });
  }

  addNew = () => {
    let ref = firebase.database().ref();
    ref.update({
      [this.state.counter]: {
        title: "test",
        text: 30
      },
    })
  };

  removeItem = (e) => {
    let ref = firebase.database().ref();
    let id = e.target.id;
    ref.update({
      [id]: {},
    })
  };

  render() {

    const todoItems = this.state.data.map((item, key) => {
      return <TodoItem key={key} title={item.title} text={item.text} id={key} remove={this.removeItem}/>
    });

    return (
      <div className="App">
        <header className="header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">TodoList</h1>
        </header>
        <section className="app-body">
          {todoItems}
          <button onClick={this.addNew} className="todo-new-item">
            добавить новую задачу
          </button>
        </section>
      </div>
    );
  }
}

export default App;
