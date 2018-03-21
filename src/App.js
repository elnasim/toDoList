import React, {Component} from 'react';
import firebase from "firebase";
import ReactMixin from 'react-mixin';
import ReactFireMixin from 'reactfire';
import logo from './logo.svg';
import './App.css';
import TodoItem from "./components/TodoItem";
import AddNewItem from "./components/AddNewItem";


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
    this.bindAsArray(firebase.database().ref(), 'data');
  }

  render() {

    const todoItems = this.state.data.map((item, key) => {
      return <TodoItem key={key} title={item.title} text={item.text} id={item['.key']}/>
    });

    return (
      <div className="App">
        <header className="header">
          <img src={logo.slice(1)} className="App-logo" alt="logo"/>
          <h1 className="App-title">TodoList</h1>
        </header>
        <section className="app-body">
          {todoItems}
          <AddNewItem/>
        </section>
      </div>
    );
  }
}

ReactMixin(App.prototype, ReactFireMixin);

export default App;
