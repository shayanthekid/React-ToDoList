import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import ReactDOM from 'react-dom'
import './App.css'
import Todos from './components/Todos';
import Header from './components/layout/header'
import AddTodo from './components/AddTodo';
import About from "./components/pages/about";
import Alert from "./components/layout/alert"
import { v4 as uuidv4 } from "uuid";
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    todos: [
   
    ],
  };

  componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
    .then(res => this.setState({todos: res.data}));
  }
  //Toggle complete
  markComplete = (id) => {
    //   this.setState({todos})
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };
  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id != id)],
    });
  };
  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };

    this.setState({
      todos: [...this.state.todos, newTodo],
    });
    
  };

  generateAlert = () => {
    alert("Hi");
  };
  render() {
    return (
      <Router>
        <div className="App" id="test">
          <div className="container">
            <Header />
            <Route exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                </React.Fragment>
                
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}



export default App;