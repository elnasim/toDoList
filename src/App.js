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
        let key, size = 0;
        for (key in data) {
          if (data.hasOwnProperty(key)) size++;
        }
        this.setState({
          data: data,
          counter: size
        })
      }
    }, (error) => {
      alert('error connect db')
    });
  }

  addNew = () => {
    let ref = firebase.database().ref();
    let key = ref.push().key;
    ref.update({
      [key]: {
        title: "test",
        text: 30
      }
    })
  };

  removeItem = (e) => {
    let id = e.target.id;
    let ref = firebase.database().ref('/' + id);
    ref.remove();
  };

  render() {

    let todoItems;
    if (this.state.counter > 1) {
      todoItems = this.state.data.map((item, key) => {
        return <TodoItem key={key} title={item.title} text={item.text} id={key} remove={this.removeItem}/>
      });
    } else {
      console.log('--->', this.state.data);
      todoItems = ''
    }


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
